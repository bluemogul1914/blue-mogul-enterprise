import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";
import { createHubSpotContact } from "./hubspot";
import { insertBlogPostSchema } from "@shared/schema";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.post(api.messages.create.path, async (req, res) => {
    try {
      const input = api.messages.create.input.parse(req.body);
      
      const message = await storage.createMessage(input);
      
      try {
        await createHubSpotContact({
          name: input.name,
          email: input.email,
          message: `[${input.service}] ${input.message}`,
          service: input.service,
        });
      } catch (hubspotError) {
        console.error('HubSpot submission error:', hubspotError);
      }
      
      res.status(201).json(message);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      throw err;
    }
  });

  app.get(api.blog.list.path, async (_req, res) => {
    const posts = await storage.getBlogPosts();
    res.json(posts);
  });

  app.get(api.blog.getBySlug.path, async (req, res) => {
    const post = await storage.getBlogPostBySlug(req.params.slug);
    if (!post) {
      return res.status(404).json({ message: "Blog post not found" });
    }
    res.json(post);
  });

  app.post(api.blog.create.path, async (req, res) => {
    try {
      const input = insertBlogPostSchema.parse(req.body);
      const post = await storage.createBlogPost(input);
      res.status(201).json(post);
    } catch (err: any) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      if (err?.code === '23505') {
        return res.status(409).json({ message: "A blog post with this slug already exists" });
      }
      throw err;
    }
  });

  app.patch("/api/blog/:id", async (req, res) => {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
      return res.status(400).json({ message: "Invalid blog post ID" });
    }
    try {
      const partialSchema = insertBlogPostSchema.partial();
      const input = partialSchema.parse(req.body);
      const updated = await storage.updateBlogPost(id, input);
      if (!updated) {
        return res.status(404).json({ message: "Blog post not found" });
      }
      res.json(updated);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      throw err;
    }
  });

  app.delete("/api/blog/:id", async (req, res) => {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
      return res.status(400).json({ message: "Invalid blog post ID" });
    }
    const deleted = await storage.deleteBlogPost(id);
    if (!deleted) {
      return res.status(404).json({ message: "Blog post not found" });
    }
    res.json({ message: "Blog post deleted" });
  });

  app.post("/api/chat", async (req, res) => {
    const { message, sessionId } = req.body;

    if (!message || typeof message !== "string") {
      return res.status(400).json({ message: "Message is required" });
    }

    const apiKey = process.env.ANYTHINGLLM_API_KEY;
    if (!apiKey) {
      console.error("[Chat] ANYTHINGLLM_API_KEY is not set");
      return res.status(500).json({ message: "Chat service is not configured" });
    }

    const payload = {
      message,
      mode: "query",
      sessionId: sessionId || "chat-widget",
    };

    console.log("[Chat] Sending request to AnythingLLM:", JSON.stringify(payload));

    try {
      const response = await fetch(
        "https://anythingllm.bluemogul.us/api/v1/workspace/customer-support-kb/chat",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${apiKey}`,
          },
          body: JSON.stringify(payload),
        }
      );

      const rawText = await response.text();
      console.log(`[Chat] AnythingLLM response status: ${response.status}`);
      console.log(`[Chat] AnythingLLM response body: ${rawText}`);

      let data: any;
      try {
        data = JSON.parse(rawText);
      } catch {
        data = {};
      }

      if (!response.ok) {
        const errorMsg = data?.error || data?.message || `Chat service error: ${response.status} ${response.statusText}`;
        console.error(`[Chat] AnythingLLM error: ${errorMsg}`);
        return res.status(response.status).json({ message: errorMsg });
      }

      const reply = data.textResponse || data.text || data.message || "No response received";
      res.json({ reply });
    } catch (err: any) {
      console.error("[Chat] Fetch error:", err);
      res.status(500).json({ message: "Failed to reach chat service", error: err.message });
    }
  });

  // ── Facebook Messenger Webhook ──────────────────────────────────────────

  // Step 1: Webhook verification (Facebook sends a GET to confirm the URL)
  app.get("/api/facebook-webhook", (req, res) => {
    const verifyToken = process.env.META_VERIFY_TOKEN;
    const mode = req.query["hub.mode"];
    const token = req.query["hub.verify_token"];
    const challenge = req.query["hub.challenge"];

    console.log("[FB Webhook] Verification request received");
    console.log(`[FB Webhook] mode=${mode}, token=${token}`);

    if (mode === "subscribe" && token === verifyToken) {
      console.log("[FB Webhook] Verified successfully");
      return res.status(200).send(challenge);
    }

    console.error("[FB Webhook] Verification failed — token mismatch or wrong mode");
    return res.status(403).json({ message: "Verification failed" });
  });

  // Step 2: Receive messages from Facebook and reply via AnythingLLM
  app.post("/api/facebook-webhook", async (req, res) => {
    const body = req.body;

    console.log("[FB Webhook] Incoming payload:", JSON.stringify(body, null, 2));

    if (body.object !== "page") {
      return res.status(404).json({ message: "Not a page event" });
    }

    // Acknowledge receipt immediately (Facebook requires a 200 within 5 seconds)
    res.status(200).send("EVENT_RECEIVED");

    const pageAccessToken = process.env.META_PAGE_ACCESS_TOKEN;
    const apiKey = process.env.ANYTHINGLLM_API_KEY;

    if (!pageAccessToken || !apiKey) {
      console.error("[FB Webhook] Missing META_PAGE_ACCESS_TOKEN or ANYTHINGLLM_API_KEY");
      return;
    }

    for (const entry of body.entry ?? []) {
      for (const event of entry.messaging ?? []) {
        const senderId = event.sender?.id;

        if (!senderId || !event.message?.text) {
          console.log("[FB Webhook] Skipping non-text or no-sender event");
          continue;
        }

        const userMessage = event.message.text;
        console.log(`[FB Webhook] Message from ${senderId}: ${userMessage}`);

        try {
          // Forward to AnythingLLM
          const llmPayload = {
            message: userMessage,
            mode: "query",
            sessionId: `fb-${senderId}`,
          };

          console.log("[FB Webhook] Sending to AnythingLLM:", JSON.stringify(llmPayload));

          const llmRes = await fetch(
            "https://anythingllm.bluemogul.us/api/v1/workspace/customer-support-kb/chat",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${apiKey}`,
              },
              body: JSON.stringify(llmPayload),
            }
          );

          const rawText = await llmRes.text();
          console.log(`[FB Webhook] AnythingLLM status: ${llmRes.status}`);
          console.log(`[FB Webhook] AnythingLLM body: ${rawText}`);

          let llmData: any = {};
          try { llmData = JSON.parse(rawText); } catch {}

          const reply = llmData.textResponse || llmData.text || llmData.message
            || "Thanks for reaching out! Our team will follow up with you shortly. You can also call us at 346.309.5514.";

          // Send reply back to Facebook user
          const fbRes = await fetch(
            `https://graph.facebook.com/v19.0/me/messages?access_token=${pageAccessToken}`,
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                recipient: { id: senderId },
                message: { text: reply },
              }),
            }
          );

          const fbBody = await fbRes.text();
          console.log(`[FB Webhook] FB send status: ${fbRes.status}, body: ${fbBody}`);
        } catch (err: any) {
          console.error(`[FB Webhook] Error processing message from ${senderId}:`, err.message);
        }
      }
    }
  });

  return httpServer;
}

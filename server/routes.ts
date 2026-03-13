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

      if (!response.ok) {
        return res.status(response.status).json({
          message: `Chat service error: ${response.status} ${response.statusText}`,
          details: rawText,
        });
      }

      const data = JSON.parse(rawText);
      res.json({ reply: data.textResponse || data.text || data.message || "No response received" });
    } catch (err: any) {
      console.error("[Chat] Fetch error:", err);
      res.status(500).json({ message: "Failed to reach chat service", error: err.message });
    }
  });

  return httpServer;
}

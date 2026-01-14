import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";
import { createHubSpotContact } from "./hubspot";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.post(api.messages.create.path, async (req, res) => {
    try {
      const input = api.messages.create.input.parse(req.body);
      
      // Save to local database
      const message = await storage.createMessage(input);
      
      // Send to HubSpot
      try {
        await createHubSpotContact({
          name: input.name,
          email: input.email,
          message: `[${input.service}] ${input.message}`,
          service: input.service,
        });
      } catch (hubspotError) {
        console.error('HubSpot submission error:', hubspotError);
        // Continue even if HubSpot fails - we still have the local record
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

  return httpServer;
}

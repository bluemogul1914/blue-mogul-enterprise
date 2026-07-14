import { type Message, type InsertMessage, messages, type BlogPost, type InsertBlogPost, blogPosts } from "@shared/schema";
import { getDb } from "./db";
import { eq, desc } from "drizzle-orm";

export interface IStorage {
  createMessage(message: InsertMessage): Promise<Message>;
  createBlogPost(post: InsertBlogPost): Promise<BlogPost>;
  getBlogPosts(): Promise<BlogPost[]>;
  getBlogPostBySlug(slug: string): Promise<BlogPost | undefined>;
  updateBlogPost(id: number, post: Partial<InsertBlogPost>): Promise<BlogPost | undefined>;
  deleteBlogPost(id: number): Promise<boolean>;
}

export class DatabaseStorage implements IStorage {
  async createMessage(insertMessage: InsertMessage): Promise<Message> {
    const db = getDb();
    const [message] = await db
      .insert(messages)
      .values(insertMessage)
      .returning();
    return message;
  }

  async createBlogPost(post: InsertBlogPost): Promise<BlogPost> {
    const db = getDb();
    const [blogPost] = await db
      .insert(blogPosts)
      .values(post)
      .returning();
    return blogPost;
  }

  async getBlogPosts(): Promise<BlogPost[]> {
    const db = getDb();
    return await db
      .select()
      .from(blogPosts)
      .where(eq(blogPosts.published, true))
      .orderBy(desc(blogPosts.publishedAt));
  }

  async getBlogPostBySlug(slug: string): Promise<BlogPost | undefined> {
    const db = getDb();
    const [post] = await db
      .select()
      .from(blogPosts)
      .where(eq(blogPosts.slug, slug));
    return post;
  }

  async updateBlogPost(id: number, post: Partial<InsertBlogPost>): Promise<BlogPost | undefined> {
    const db = getDb();
    const [updated] = await db
      .update(blogPosts)
      .set(post)
      .where(eq(blogPosts.id, id))
      .returning();
    return updated;
  }

  async deleteBlogPost(id: number): Promise<boolean> {
    const db = getDb();
    const result = await db
      .delete(blogPosts)
      .where(eq(blogPosts.id, id))
      .returning();
    return result.length > 0;
  }
}

export const storage = new DatabaseStorage();

import { drizzle } from "drizzle-orm/node-postgres";
import pg from "pg";
import * as schema from "@shared/schema";

const { Pool } = pg;

let pool: pg.Pool | null = null;
let db: ReturnType<typeof drizzle> | null = null;

function initializeDatabase() {
  const databaseUrl = process.env.DATABASE_URL;
  
  if (!databaseUrl) {
    throw new Error(
      "DATABASE_URL must be set. Did you forget to provision a database?",
    );
  }
  if (!pool) {
    pool = new Pool({ connectionString: databaseUrl });
  }
  if (!db) {
    db = drizzle(pool, { schema });
  }
  return db;
}

export function getPool(): pg.Pool {
  if (!pool) initializeDatabase();
  return pool!;
}

export function getDb(): ReturnType<typeof drizzle> {
  if (!db) initializeDatabase();
  return db!;
}

export { getDb as db, getPool as pool };

import postgres from "postgres"
import dotenv from "dotenv"

dotenv.config()

// Check .env
if (!process.env.POSTGRESQL_DATABASE_URL) {
  throw new Error("POSTGRESQL_DATABASE_URL env var is not set")
}

export const sql = postgres(process.env.POSTGRESQL_DATABASE_URL)

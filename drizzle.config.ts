import type { Config } from "drizzle-kit"

export default {
  schema: "./app/\(data-fetching\)/schema.ts",
  out: "./app/\(data-fetching\)/migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.POSTGRESQL_ENDPOINT!,
  },
} satisfies Config

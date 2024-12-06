import {
  pgTable,
  serial,
  varchar,
  boolean,
  timestamp,
} from "drizzle-orm/pg-core"

export const bookmarks = pgTable("bookmarks", {
  id: serial("id").primaryKey(),
  title: varchar("title", { length: 255 }).notNull(),
  url: varchar("url", { length: 255 }).notNull(),
  fav: boolean("fav").default(false),
  createdAt: timestamp("created_at").defaultNow(),
})

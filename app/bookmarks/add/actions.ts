"use server"

import { bookmarks } from "../schema"
import { orm } from "../db"

export async function addBookmark(data: FormData) {
  const title = data.get("title") as string
  const url = data.get("url") as string

  console.log("Adding bookmark:", { title, url })

  await orm.insert(bookmarks).values({ title, url }).returning()
}

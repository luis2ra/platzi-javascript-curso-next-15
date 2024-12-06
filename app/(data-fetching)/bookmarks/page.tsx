import { Heading } from "@chakra-ui/react"
import { HeartIcon } from "@heroicons/react/24/solid"

import { orm } from "../db"
import { bookmarks as schema } from "../schema"

export default async function Bookmarks() {
  const bookmarks = await orm.select().from(schema)

  return (
    <main className="container mx-auto px-4 my-16 space-y-4">
      <Heading size="lg" className="mb-1">
        Marcadores
      </Heading>

      <ul>
        {bookmarks.map((bookmark) => (
          <li
            className="border-b-2 py-4 px-6 flex items-center"
            key={bookmark.id}
          >
            <HeartIcon
              className={`w-5 h-5 mr-2 ${bookmark.fav ? "text-red-500" : "text-slate-300"}`}
            />
            <a
              href={bookmark.url}
              rel="noopener noreferrer"
              target="_blank"
              className="hover:underline"
            >
              {bookmark.title} - {bookmark.url}
            </a>
          </li>
        ))}
      </ul>
    </main>
  )
}

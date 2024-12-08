"use client"

import { useEffect, useState } from "react"

import { Heading, Text } from "@chakra-ui/react"

import { BookmarkType } from "../schema"
import { Bookmark } from "./components/Bookmark"

export default function Bookmarks() {
  const [bookmarks, setBookmarks] = useState<BookmarkType[]>([])

  useEffect(() => {
    fetch("/bookmarks/api")
      .then((response) => response.json() as Promise<{ data: BookmarkType[] }>)
      .then(({ data }) => setBookmarks(data))
  }, [])

  return (
    <main className="container mx-auto px-4 my-16 space-y-4">
      <header>
        <Heading size="lg" className="mb-1">
          Marcadores
        </Heading>
        <Text>
          Estrategías de consumo de datos desde el servidor y el cliente
        </Text>
      </header>

      <ul>
        {bookmarks?.map((bookmark) => (
          <li className="border-b-2 py-4 px-6" key={bookmark.id}>
            <Bookmark {...bookmark} />
            {/* <div className="my-1 text-gray-600 text-xs ml-7">
              Creado por {bookmark.author?.name || "Anónimo"}
            </div> */}
          </li>
        ))}
      </ul>
    </main>
  )
}

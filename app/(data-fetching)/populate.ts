import "dotenv/config"
import { bookmarks } from "./schema"

import { orm } from "./db"

const BOOKMARKS = [
  { title: "Platzi", url: "https://platzi.com", fav: true },
  { title: "jonalvarezz", url: "https://jonalvarezz.com", fav: true },
  {
    title: "Next.js Documentation",
    url: "https://nextjs.org/docs",
    fav: false,
  },
  { title: "Stack Overflow", url: "http://stackoverflow.com", fav: false },
  {
    title: "PostgreSQL WEB Visualizer",
    url: "http://sosedoff.github.io/pgweb/",
    fav: false,
  },
  {
    title: "Fast Node Manager",
    url: "https://github.com/Schniz/fnm",
    fav: false,
  },
  {
    title: "Chakra UI",
    url: "https://www.chakra-ui.com",
    fav: false,
  },
  {
    title: "TailwindCSS",
    url: "http://tailwindcss.com",
    fav: false,
  },
]

async function main() {
  console.log(`🚀 Inserting ${BOOKMARKS.length} bookmarks...`)
  await orm.insert(bookmarks).values(BOOKMARKS)
  console.log("✨ Done!")
}

main()

import { HeartIcon } from "@heroicons/react/24/solid"
import type { BookmarkType } from "../../schema"

export function Bookmark(bookmark: BookmarkType) {
  return (
    <div className=" flex items-center">
      <HeartIcon
        className={`w-5 h-5 mr-3 ${bookmark.fav ? "text-red-500" : "text-slate-300"}`}
      />
      <a
        href={bookmark.url}
        rel="noopener noreferrer"
        target="_blank"
        className="hover:underline"
      >
        {bookmark.title} - {bookmark.url}
      </a>
    </div>
  )
}

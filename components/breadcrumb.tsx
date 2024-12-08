"use client"

import Link from "next/link"
import { PropsWithChildren } from "react"

import { HomeIcon } from "@heroicons/react/24/solid"
import { usePathname } from "next/navigation"

type Props = {
  className?: string
}

export function Breadcrumb({ className, children }: PropsWithChildren<Props>) {
  const pathname = usePathname()

  if (pathname === "/") return null

  return (
    <div className={`py-4 my-6 ${className}`}>
      <Link
        href="/"
        className="inline-flex items-center text-gray-400 hover:text-gray-500"
      >
        <span>
          <HomeIcon className="w-5 h-5 mr-2" />
        </span>
        <span>{children || "Volver al inicio"}</span>
      </Link>
    </div>
  )
}

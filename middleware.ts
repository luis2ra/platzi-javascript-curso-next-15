import { NextRequest, NextResponse } from "next/server"

import { getLocale, hasPathnameLocale } from "@/app/utils/i18n/get-locale"

export function middleware(request: NextRequest) {
  // I18n
  // -------------
  const { pathname } = request.nextUrl

  // 1. Ignore todo lo que no sea de nuestra ruta /i18n
  if (!pathname.startsWith("/i18n")) return

  // 2. Si el path ya contiene un local, ignorelo (ya esta ok)
  //    e.j.: /i18n/es
  const hasLocal = hasPathnameLocale(pathname)
  if (hasLocal) return

  // 3. Si no hay local, agregar el local a la URL
  //    e.j.: /i18n -> /i18n/es
  const locale = getLocale({
    "accept-language": request.headers.get("Accept-Language") || "",
  })
  request.nextUrl.pathname = `${pathname}/${locale}`

  return NextResponse.redirect(request.nextUrl)
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    "/((?!_next).*)",
    // Optional: only run on root (/) URL
    // '/'
  ],
}

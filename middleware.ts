import { NextRequest, NextResponse } from "next/server"

import { getLocale, hasPathnameLocale } from "@/utils/i18n"
import { cookies } from "next/headers"

import {
  isSessionValid,
  COOKIE_NAME as SESSION_COOKIE_NAME,
} from "@/utils/auth"

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const response = generateCSP(request)

  // Auth
  // -------------

  // 1. Ignore todo lo que no sea de nuestra ruta /auth
  if (pathname.startsWith("/auth") && pathname !== "/auth/login") {
    const allCookies = await cookies()

    // 2. Verificar si hay una cookie de sesión válida
    const hasSession = await isSessionValid(
      allCookies.get(SESSION_COOKIE_NAME)?.value,
    )

    // 3. Si la hay, puede continuar
    if (hasSession) {
      return response
    }

    // 4. Si no, redireccionar a la página de inicio de sesión
    return NextResponse.redirect(new URL("/auth/login", request.nextUrl))
  }

  // I18n
  // -------------

  // 1. Ignore todo lo que no sea de nuestra ruta /i18n
  if (!pathname.startsWith("/i18n")) return response

  // 2. Si el path ya contiene un local, ignorelo (ya esta ok)
  //    e.j.: /i18n/es
  const hasLocal = hasPathnameLocale(pathname)
  if (hasLocal) return response

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

function generateCSP(request: NextRequest): NextResponse {
  const nonce = Buffer.from(crypto.randomUUID()).toString("base64")
  const cspHeader = `
    script-src 'self' 'nonce-${nonce}' 'strict-dynamic';
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    upgrade-insecure-requests;
`
  // Replace newline characters and spaces
  const contentSecurityPolicyHeaderValue = cspHeader
    .replace(/\s{2,}/g, " ")
    .trim()

  const requestHeaders = new Headers(request.headers)
  requestHeaders.set("x-nonce", nonce)

  requestHeaders.set(
    "Content-Security-Policy",
    contentSecurityPolicyHeaderValue,
  )

  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  })
  response.headers.set(
    "Content-Security-Policy",
    contentSecurityPolicyHeaderValue,
  )

  return response
}

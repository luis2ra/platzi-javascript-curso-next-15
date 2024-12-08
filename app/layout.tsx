import "./globals.css"

import type { Metadata } from "next"
import { PT_Serif } from "next/font/google"

import { Providers } from "./providers"

export const metadata: Metadata = {
  title: "Curso de Next.js - Platzi 🦑",
  description:
    "Proyecto de estudio para aplicación de conocimientos de Next.js 15",
}

const font = PT_Serif({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-app",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={font.variable}>
      <body className="">
        <Providers>{children}</Providers>

        <footer className="opacity-70 text-gray-600 text-xs mt-20 pb-8 text-center">
          <p>
            Made with 💚 by{" "}
            <a
              href="https://platzi.com/profes/jonalvarezz/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Perfil de profesor"
            >
              jonalvarezz
            </a>
          </p>
        </footer>
      </body>
    </html>
  )
}

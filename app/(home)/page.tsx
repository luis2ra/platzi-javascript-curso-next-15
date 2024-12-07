"use client"

import {
  BanknotesIcon,
  ArrowsUpDownIcon,
  BuildingStorefrontIcon,
  LanguageIcon,
} from "@heroicons/react/24/outline"

import { Card } from "./components/card"
import { Heading, Text } from "@chakra-ui/react"

export default function Home() {
  return (
    <main className="p-4 max-w-6xl mx-auto">
      <header className="text-center my-10">
        <Heading as="h1" size="lg" className="my-4 max-w-80 mx-auto">
          Curso de Platzi Avanzado de Next.js
        </Heading>
        <Text fontSize="xs">
          En esta página encontrarás todos los materiales de este curso.
        </Text>
      </header>
      <section>
        <ul className="grid grid-cols-2 gap-6">
          <li>
            <Card
              icon={<BanknotesIcon className="size-12 " />}
              term="React Server Actions con PostgresSQL"
              desc="Explora una aplicación de manejo de gastos que lista, crea y elimina registros desde el servidor y una DB."
            ></Card>
          </li>
          <li>
            <Card
              icon={<ArrowsUpDownIcon className="size-12 " />}
              term="Consumo de datos"
              desc="Aplicación de manejor de Marcadores (Bookmarks) para explorar las diferentes estrategías y patrones para consumir datos."
            ></Card>
          </li>
          <li>
            <Card
              icon={<LanguageIcon className="size-12 " />}
              term="Internacionalización"
              desc="Identifica las opciones de la nueva versión para crear sitios amigables a locales y diccionarios de traducciones."
            ></Card>
          </li>
          <li>
            <Card
              icon={<BuildingStorefrontIcon className="size-12 " />}
              term="Deploy"
              desc="Aprende a correr tu aplicación de Next.js 15 en tanto en servidores autogestionados como Cloudflare como en propios."
            ></Card>
          </li>
        </ul>
      </section>
    </main>
  )
}

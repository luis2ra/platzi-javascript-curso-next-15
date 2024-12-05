"use client"

import { BeakerIcon } from "@heroicons/react/24/solid"

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
              icon={<BeakerIcon className="size-6 " />}
              term="React Server Actions con PostgresSQL"
              desc="Lorem ipsum dotom sit amet"
            ></Card>
          </li>
          <li>
            <Card
              icon={<BeakerIcon className="size-6 " />}
              term="Consumo de datos: Servidor"
              desc="Lorem ipsum dotom sit amet"
            ></Card>
          </li>
        </ul>
      </section>
    </main>
  )
}

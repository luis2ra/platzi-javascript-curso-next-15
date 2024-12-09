import { Heading, Text, Button } from "@chakra-ui/react"

export default async function I18nPage() {
  return (
    <main className="">
      <header className="my-10">
        <Heading as="h1" size="lg" className="">
          Autenticación
        </Heading>
        <Text fontSize="md">
          En esta página puedes explorar la autenticación a través de Cookies.
        </Text>
      </header>

      <Text fontSize="md">
        Para acceder a esta página, necesitas estar autenticado.
      </Text>

      <Button className="mt-10">Salir</Button>
    </main>
  )
}

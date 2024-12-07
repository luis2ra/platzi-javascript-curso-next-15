"use client"

import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Button,
  FormControl,
  FormErrorMessage,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react"
import { useActionState } from "react"
import { useFormStatus } from "react-dom"

import { login } from "./actions"

export default function I18nPage() {
  const [state, action] = useActionState(login, { error: "" })
  const status = useFormStatus()

  return (
    <main className="p-4 container mx-auto">
      <header className="my-10">
        <Heading as="h1" size="lg" className="">
          Login
        </Heading>
        <Text fontSize="md">
          Realiza un login para acceder a la sección privada.
        </Text>
      </header>

      <form action={action}>
        <FormControl
          isDisabled={status.pending}
          isInvalid={Boolean(state.error)}
        >
          <InputGroup size="lg">
            <Input
              autoFocus
              autoComplete="off"
              type="password"
              name="pwd"
              pr="3.8rem"
              placeholder="Cuentame un secreto"
            />
            <InputRightElement mr={2}>
              <Button
                type="submit"
                h="1.75rem"
                size="sm"
                isLoading={status.pending}
              >
                OK
              </Button>
            </InputRightElement>
          </InputGroup>
          {state.error && (
            <>
              <FormErrorMessage>{state.error}</FormErrorMessage>
              <Alert status="info" className="mt-4">
                <AlertIcon />
                <div>
                  <AlertTitle>Pista</AlertTitle>
                  <AlertDescription>El lema de Platzi</AlertDescription>
                </div>
              </Alert>
            </>
          )}
        </FormControl>
      </form>
    </main>
  )
}

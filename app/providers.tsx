"use client"

import { ChakraProvider, createLocalStorageManager } from "@chakra-ui/react"

// Custom Chakra-UI color manager to ignores localStorage color config
const dummyColorStorageManager = createLocalStorageManager(
  "litentry-omniaccount-color-mode",
)
dummyColorStorageManager.get = () => "light"
dummyColorStorageManager.set = () => undefined

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider colorModeManager={dummyColorStorageManager}>
      {children}
    </ChakraProvider>
  )
}

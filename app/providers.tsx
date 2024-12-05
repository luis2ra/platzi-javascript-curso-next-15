"use client"
import {
  ChakraProvider,
  createLocalStorageManager,
  extendTheme,
} from "@chakra-ui/react"

// Custom Chakra-UI color manager to ignores localStorage color config
const dummyColorStorageManager = createLocalStorageManager(
  "litentry-omniaccount-color-mode",
)
dummyColorStorageManager.get = () => "light"
dummyColorStorageManager.set = () => undefined

// Theme
export const theme = extendTheme({
  fonts: {
    heading: "var(--font-app)",
    body: "var(--font-app)",
  },
})

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider theme={theme} colorModeManager={dummyColorStorageManager}>
      {children}
    </ChakraProvider>
  )
}

import { ChakraProvider } from '@chakra-ui/react'

function UIProvider ({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider>
      {children}
    </ChakraProvider>
  )
}

export default UIProvider

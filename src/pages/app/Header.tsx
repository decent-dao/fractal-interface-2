import { Divider, Flex, HStack, Heading, Spacer } from '@chakra-ui/react'

function Header () {
  return (
    <>
      <Flex mb={2}>
        <Heading>Fractal</Heading>
        <Spacer />
        <HStack>
          <w3m-button />
          <w3m-network-button />
        </HStack>
      </Flex>
      <Divider mb={2} />
    </>
  )
}

export default Header

import { Flex, Heading } from '@chakra-ui/react'

function Header () {
  return (
    <Flex justifyContent={'space-between'}>
      <Heading>Fractal</Heading>
      <w3m-button />
    </Flex>
  )
}

export default Header

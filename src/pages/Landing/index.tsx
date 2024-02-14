import { Flex, Button, Input } from '@chakra-ui/react'

function Landing () {
  return (
    <Flex>
      <Input placeholder='Enter a Safe address' />
      <Button ml={2}>Load</Button>
    </Flex>
  )
}

export default Landing

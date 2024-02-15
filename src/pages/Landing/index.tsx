import { HStack, Button, Input, Box, VStack } from '@chakra-ui/react'
import { useBlockNumber, useChainId, useChains } from 'wagmi'

function Landing () {
  const chainId = useChainId()
  const chains = useChains()
  const block = useBlockNumber({ watch: true })

  const currentChainName = chains.find(chain => chain.id === chainId)?.name

  return (
    <VStack align='stretch'>
      <HStack>
        <Input placeholder='Enter a Safe address' />
        <Button>Load</Button>
      </HStack>
      <Box>
        <Box>All chains: {chains.map(c => c.name).join(', ').toString()}</Box>
        {currentChainName != null && <Box>Current Chain: {currentChainName} ({chainId})</Box>}
        {block.data != null && <Box>Current Block: {block.data.toString()}</Box>}
      </Box>
    </VStack>
  )
}

export default Landing

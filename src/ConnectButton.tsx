import { useWeb3Modal } from '@web3modal/wagmi/react'
import { Button, Flex } from '@chakra-ui/react'

export default function ConnectButton() {
  const { open } = useWeb3Modal()

  return (
    <Flex gap={2}>
      <Button onClick={() => open()}>Open Connect Modal</Button>
      <Button onClick={() => open({ view: 'Networks' })}>Open Network Modal</Button>
    </Flex>
  )
}

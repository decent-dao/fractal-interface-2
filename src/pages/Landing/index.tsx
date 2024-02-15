import {
  HStack,
  Button,
  Input,
  Box,
  VStack,
  Heading,
  InputGroup,
  InputLeftAddon,
} from "@chakra-ui/react";
import { useWeb3ModalState } from "@web3modal/wagmi/react";
import { useBlockNumber, useChainId, useChains, useSwitchChain } from "wagmi";

function Landing() {
  const chainId = useChainId();
  const chains = useChains();
  const block = useBlockNumber({ watch: true });

  const { switchChain } = useSwitchChain();

  const currentChainName = chains.find((chain) => chain.id === chainId)?.name;
  const { selectedNetworkId } = useWeb3ModalState();

  return (
    <VStack align="stretch">
      <HStack>
        <Input placeholder="Enter a Safe address" />
        <Button>Load</Button>
      </HStack>
      <Box>
        <Heading size="md">Web3Modal</Heading>
        <Box>Currently selected network: {selectedNetworkId}</Box>
      </Box>
      <Box>
        <Heading size="md">Wagmi</Heading>
        <Box>
          All chains:{" "}
          {chains
            .map((c) => c.name)
            .join(", ")
            .toString()}
        </Box>
        {currentChainName != null && (
          <Box>
            Current Chain: {currentChainName} ({chainId})
          </Box>
        )}
        {block.data != null && (
          <Box>Current Block: {block.data.toString()}</Box>
        )}
      </Box>
      <Button
        onClick={() => {
          switchChain({ chainId: 1 });
        }}
      >
        Switch to Mainnet
      </Button>

      <Button
        onClick={() => {
          switchChain({ chainId: 11155111 });
        }}
      >
        Switch to Sepolia
      </Button>
    </VStack>
  );
}

export default Landing;

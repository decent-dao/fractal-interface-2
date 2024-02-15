import { Button, Box, Heading } from "@chakra-ui/react";
import { useWeb3ModalState } from "@web3modal/wagmi/react";
import { useBlockNumber, useChainId, useChains, useSwitchChain } from "wagmi";

function Network() {
  const supportedChains = useChains();

  // web3modal
  const { selectedNetworkId } = useWeb3ModalState();
  const currentWeb3ModalChainName = supportedChains.find(
    (chain) => chain.id === (selectedNetworkId as unknown as number),
  )?.name;

  // wagmi
  const chainId = useChainId();
  const { switchChain } = useSwitchChain();
  const currentWagmiChainName = supportedChains.find(
    (chain) => chain.id === chainId,
  )?.name;

  const block = useBlockNumber({ watch: true });

  return (
    <>
      <Box>
        <Heading size="md">Web3Modal</Heading>
        <Box>
          Currently selected chain: {currentWeb3ModalChainName} (
          {selectedNetworkId})
        </Box>
      </Box>
      <Box>
        <Heading size="md">Wagmi</Heading>
        <Box>
          All chains:{" "}
          {supportedChains
            .map((c) => c.name)
            .join(", ")
            .toString()}
        </Box>
        {currentWagmiChainName != null && (
          <Box>
            Current Chain: {currentWagmiChainName} ({chainId})
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
    </>
  );
}

export default Network;

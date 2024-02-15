import { Box, Container, Flex, HStack, Heading, Spacer } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useChains, useChainId } from "wagmi";

function Header() {
  const chainId = useChainId();
  const chains = useChains();
  const currentChainName = chains.find((chain) => chain.id === chainId)?.name;

  return (
    <Container my={2}>
      <Flex>
        <Link to="/">
          <Heading>Fractal</Heading>
        </Link>
        <Spacer />
        <HStack>
          <w3m-button />
          <w3m-network-button />
        </HStack>
      </Flex>
      <Flex justifyContent={"end"}>
        <Box fontSize="xs">Wagmi connected to {currentChainName}</Box>
      </Flex>
    </Container>
  );
}

export default Header;

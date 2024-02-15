import { Container, Flex, HStack, Heading, Spacer } from "@chakra-ui/react";

function Header() {
  return (
    <Container my={2}>
      <Flex>
        <Heading>Fractal</Heading>
        <Spacer />
        <HStack>
          <w3m-button />
          <w3m-network-button />
        </HStack>
      </Flex>
    </Container>
  );
}

export default Header;

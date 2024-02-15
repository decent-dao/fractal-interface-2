import { Container, Flex, HStack, Heading, Spacer } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Header() {
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
    </Container>
  );
}

export default Header;

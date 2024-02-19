import { useState } from "react";
import {
  HStack,
  Button,
  Input,
  VStack,
  InputGroup,
  InputLeftAddon,
  Divider,
} from "@chakra-ui/react";
import { useChainId } from "wagmi";
import { networkIdToPrefix } from "../../utils/network";
import Network from "./Network";
import SignMessage from "./SignMessage";

function Landing() {
  const chainId = useChainId();
  const networkPrefix = networkIdToPrefix(chainId);
  const [address, setAddress] = useState("");

  return (
    <VStack align="start">
      <HStack width={"full"}>
        <InputGroup>
          <InputLeftAddon>{networkPrefix}:</InputLeftAddon>
          <Input
            placeholder="Enter a Safe address"
            value={address}
            onChange={(e) => {
              setAddress(e.target.value);
            }}
          />
        </InputGroup>
        <Button>Load</Button>
      </HStack>
      <Divider />
      <SignMessage />
      <Network />
    </VStack>
  );
}

export default Landing;

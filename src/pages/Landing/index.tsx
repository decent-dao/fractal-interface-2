import { useState } from "react";
import {
  HStack,
  Button,
  Input,
  VStack,
  InputGroup,
  InputLeftAddon,
} from "@chakra-ui/react";
import { useChainId, useWalletClient } from "wagmi";
import { networkIdToPrefix } from "../../utils/network";
import Network from "./Network";

function Landing() {
  const chainId = useChainId();
  const networkPrefix = networkIdToPrefix(chainId);
  const { data } = useWalletClient()
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
        <Button onClick={async () => {
          const signature = await data?.signMessage({message: "Hello World"})
          console.log(signature)
        }
        }>SignMessage</Button>
      </HStack>
      <Network />
    </VStack>
  );
}

export default Landing;

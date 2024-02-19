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
  const [address, setAddress] = useState("");

  const { data } = useWalletClient();

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
      <Button
        onClick={() => {
          void (async () => {
            const signature = await data?.signMessage({
              message: "Hello World",
            });
            console.log(signature);
          })();
        }}
      >
        SignMessage
      </Button>
      <Network />
    </VStack>
  );
}

export default Landing;

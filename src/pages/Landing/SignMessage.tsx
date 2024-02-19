import { Button } from "@chakra-ui/react";
import { useWalletClient } from "wagmi";

function SignMessage() {
  const { data } = useWalletClient();
  if (data === undefined) return null;

  const message = `Current time: ${Math.floor(Date.now() / 1000)}`;

  return (
    <Button
      onClick={() => {
        void (async () => {
          const signature = await data.signMessage({ message });
          alert(`Message\n${message}\n\nSignature\n${signature}`);
        })();
      }}
    >
      Sign Message
    </Button>
  );
}

export default SignMessage;

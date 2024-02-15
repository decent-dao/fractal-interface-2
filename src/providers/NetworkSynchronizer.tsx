import { useEffect } from "react";
import { useWeb3ModalState } from "@web3modal/wagmi/react";
import { useSwitchChain } from "wagmi";

function NetworkSynchronizer() {
  // web3modal network state
  const { selectedNetworkId } = useWeb3ModalState();
  const web3ModalNetworkId = selectedNetworkId as unknown as number;

  // wagmi chain switcher
  const { switchChain } = useSwitchChain();

  useEffect(() => {
    switchChain({ chainId: web3ModalNetworkId });
  }, [web3ModalNetworkId]);

  return null;
}

export default NetworkSynchronizer;

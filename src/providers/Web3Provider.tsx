import { createWeb3Modal } from "@web3modal/wagmi/react";
import { defaultWagmiConfig } from "@web3modal/wagmi/react/config";

import { WagmiProvider } from "wagmi";
import { mainnet, sepolia } from "wagmi/chains";

const projectId = import.meta.env.VITE_WALLETCONNECT_PROJECT_ID;

const metadata = {
  name: import.meta.env.VITE_WALLETCONNECT_METADATA_NAME,
  description: import.meta.env.VITE_WALLETCONNECT_METADATA_DESCRIPTION,
  url: import.meta.env.VITE_WALLETCONNECT_METADATA_URL,
  icons: [import.meta.env.VITE_WALLETCONNECT_METADATA_ICON],
};

const chains = [sepolia, mainnet] as const;
const config = defaultWagmiConfig({
  chains,
  projectId,
  metadata,
});

// 3. Create modal
createWeb3Modal({
  wagmiConfig: config,
  defaultChain: sepolia,
  projectId,
  themeMode: "light",
  enableAnalytics: true, // Optional - defaults to your Cloud configuration
});

function Web3Provider({ children }: { children: React.ReactNode }) {
  return <WagmiProvider config={config}>{children}</WagmiProvider>;
}

export default Web3Provider;

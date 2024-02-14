import { createWeb3Modal } from '@web3modal/wagmi/react'
import { defaultWagmiConfig } from '@web3modal/wagmi/react/config'

import { WagmiProvider, http } from 'wagmi'
import { mainnet, sepolia } from 'wagmi/chains'

// 1. Get projectId at https://cloud.walletconnect.com
const projectId = 'ef9ca770e347c286eded5e15e8154870'

// 2. Create wagmiConfig
const metadata = {
  name: 'Web3Modal',
  description: 'Web3Modal Example',
  url: 'https://web3modal.com', // origin must match your domain & subdomain
  icons: ['https://avatars.githubusercontent.com/u/37784886']
}

const chains = [sepolia, mainnet] as const
const config = defaultWagmiConfig({
  chains, // required
  projectId, // required
  metadata, // required
  enableWalletConnect: true, // Optional - true by default
  enableInjected: true, // Optional - true by default
  enableEIP6963: true, // Optional - true by default
  enableCoinbase: true, // Optional - true by default
  // ...wagmiOptions // Optional - Override createConfig parameters
  transports: {
    [mainnet.id]: http('https://rpc.ankr.com/eth'),
    [sepolia.id]: http('https://rpc.ankr.com/eth_sepolia'),
  },
})

// 3. Create modal
createWeb3Modal({
  wagmiConfig: config,
  defaultChain: sepolia,
  projectId,
  themeMode: 'light',
  enableAnalytics: true // Optional - defaults to your Cloud configuration
})

function Web3Provider({ children }: { children: React.ReactNode }) {
  return (
    <WagmiProvider config={config}>
      {children}
    </WagmiProvider>
  )
}

export default Web3Provider

import { useEffect } from 'react'
import { useErc20Store } from '../../stores/useErc20Store'
import { Address  } from 'viem'
import { usePublicClient } from 'wagmi'

function loader() {
  return false
}

export const dashboardRoute = {
  id: "dashboard",
  path: "dashboard",
  loader,
  element: <Page />,
}

function Page() {
  const client = usePublicClient()
  const { totalSupply, symbol } = useErc20Store()

  const address = "0x5631ADBaD38a9fAf1163a6805791ea6529751859" as Address

  useEffect(() => {
    totalSupply.fetch({ address }, client)
    symbol.fetch({ address }, client)

  }, [])

  if (totalSupply.error) {
    console.error(totalSupply.error, symbol.error)
  }

  return (
    <>
      <h2>Symbol: {symbol.data}</h2>
      <h2>TotalSupply: {totalSupply.data?.toString()}</h2>
    </>
  )
}


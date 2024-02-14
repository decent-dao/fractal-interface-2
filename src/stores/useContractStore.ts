import { create } from 'zustand'
import { Abi, Address } from 'viem'

export interface ContractConfig {
  address: Address
  functionName?: string 
  abi?: Abi
  args?: string[]
}

export interface ReadContractStore {
  data: string | null
  error: any
  fetch: (contractConfig: ContractConfig, client: any) => Promise<ReadContractStore>
}

export interface TransactionStore {
  data: string | null
  error: any
  pending: string[],
  send: (contractConfig: ContractConfig, send: any) =>  Promise<TransactionStore>
}

export const useReadContractStore = create<ReadContractStore>((set, get) => ({
  data: null,
  error: null,
  fetch: async (contractConfig, client) => {
    try {
      const data = await client.readContract(contractConfig)
      set({ data: data, error: null })
      return { ...get() }
    } catch (error) {
      set({ error, data: null })
      // TODO: Implement UX Handling
      console.error(error)
      return { ...get() }
    }
  }
}))

export const useTransactionStore = create<TransactionStore>((set, get) => ({
  data: null,
  error: null,
  pending: [],
  send: async (contractConfig, client) => {
    try {
      const data = await client.sendTransaction(contractConfig)
      
      // handle receipt, push to pending
      // once filled, remove from pending and set tx to state data

      set({ data: data, error: null })
      return { ...get() }
    } catch (error) {
      set({ error, data: null })
      // TODO: Implement UX Handling
      console.error(error)
      return { ...get() }
    }
  }
}))

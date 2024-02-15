import { create } from "zustand";
import { erc20Abi } from "viem";
import type { ReadContractStore, TransactionStore } from "./useContractStore";
import { useReadContractStore, useTransactionStore } from "./useContractStore";

export interface Erc20ContractStore {
  totalSupply: ReadContractStore;
  symbol: ReadContractStore;
  decimals: ReadContractStore;
  balanceOf: ReadContractStore;
  transfer: TransactionStore;
}

export const useErc20Store = create<Erc20ContractStore>((set) => ({
  totalSupply: {
    ...useReadContractStore.getState(),
    fetch: (contractConfig, client) =>
      useReadContractStore
        .getState()
        .fetch(
          { ...contractConfig, functionName: "totalSupply", abi: erc20Abi },
          client,
        )
        .then((result) => {
          // post process result or add other logic here
          set({ totalSupply: { ...result } });
          return result;
        }),
  },
  decimals: {
    ...useReadContractStore.getState(),
    fetch: (contractConfig, client) =>
      useReadContractStore
        .getState()
        .fetch(
          { ...contractConfig, functionName: "decimals", abi: erc20Abi },
          client,
        )
        .then((result) => {
          // post process result or add other logic here
          set({ decimals: { ...result } });
          return result;
        }),
  },
  balanceOf: {
    ...useReadContractStore.getState(),
    fetch: (contractConfig, client) =>
      useReadContractStore
        .getState()
        .fetch(
          { ...contractConfig, functionName: "balanceOf", abi: erc20Abi },
          client,
        )
        .then((result) => {
          // post process result or add other logic here
          set({ balanceOf: { ...result } });
          return result;
        }),
  },
  symbol: {
    ...useReadContractStore.getState(),
    fetch: (contractConfig, client) =>
      useReadContractStore
        .getState()
        .fetch(
          { ...contractConfig, functionName: "symbol", abi: erc20Abi },
          client,
        )
        .then((result) => {
          // post process result or add other logic here
          set({ symbol: { ...result } });
          return result;
        }),
  },
  // TODO
  transfer: useTransactionStore.getState(),
}));

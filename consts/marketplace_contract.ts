import type { Chain } from "thirdweb";
import { testnethekla } from "./chains";

type MarketplaceContract = {
  address: string;
  chain: Chain;
};

/**
 * You need a marketplace contract on each of the chain you want to support
 * Only list one marketplace contract address for each chain
 */
export const MARKETPLACE_CONTRACTS: MarketplaceContract[] = [

  {
    address: "0x8ad4Ed145A78579Ef29644F95846476B5111A5b7",
    chain: testnethekla,
  },
  
  
];

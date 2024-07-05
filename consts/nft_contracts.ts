import type { Chain } from "thirdweb";
import { avalancheFuji, polygonAmoy, testnethekla } from "./chains";

export type NftContract = {
  address: string;
  chain: Chain;
  type: "ERC1155" | "ERC721";

  title?: string;
  description?: string;
  thumbnailUrl?: string;
  slug?: string;
};

/**
 * Below is a list of all NFT contracts supported by your marketplace(s)
 * This is of course hard-coded for demo purpose
 *
 * In reality, the list should be dynamically fetched from your own data source
 */
export const NFT_CONTRACTS: NftContract[] = [


  {
    address: "0xF45bF31D5312a8ea3d9663e49aecC5527Bc36EB2",
    chain: testnethekla,
    title: "testdemo",
    thumbnailUrl:
      "https://ipfs.io/ipfs/QmY7yoJ1uhUgR6q4hquZnpgaVprjeSrt7PHnjpJi9Dgvru/4.png",
    type: "ERC721",
  },

];

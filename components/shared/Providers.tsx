"use client";
import { chakraTheme, chakraThemeConfig } from "@/consts/chakra";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import type { ReactNode } from "react";
import { ThirdwebProvider as ThirdWebProvider5 } from "thirdweb/react";


import React from "react";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { getGasless } from "@/components/nft-minter/utils/getGasless";
import {
  biconomyApiIdConst,
  biconomyApiKeyConst,
  relayerUrlConst,
  clientIdConst,
} from "@/components/nft-minter/consts/parameters";
//add taikohekla chain 
import { TaikoHeklaL2} from "@thirdweb-dev/chains"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const urlParams = new URL(window.location.toString()).searchParams;

const relayerUrl = urlParams.get("relayUrl") || relayerUrlConst || "";
const biconomyApiKey =
  urlParams.get("biconomyApiKey") || biconomyApiKeyConst || "";
const biconomyApiId =
  urlParams.get("biconomyApiId") || biconomyApiIdConst || "";
const sdkOptions = getGasless(relayerUrl, biconomyApiKey, biconomyApiId);

const chain = (urlParams.get("chain") && urlParams.get("chain")?.startsWith("{")) ? JSON.parse(String(urlParams.get("chain"))) : urlParams.get("chain") || TaikoHeklaL2;

const clientId = urlParams.get("clientId") || clientIdConst || "";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ChakraProvider theme={chakraTheme}>
      <ColorModeScript initialColorMode={chakraThemeConfig.initialColorMode} />
      <QueryClientProvider client={queryClient}>
          <ThirdwebProvider activeChain={TaikoHeklaL2} sdkOptions={sdkOptions} clientId={clientId}>
            <ThirdWebProvider5 >
            {children}
            </ThirdWebProvider5>
          </ThirdwebProvider>
      </QueryClientProvider>
    </ChakraProvider>
  );
}

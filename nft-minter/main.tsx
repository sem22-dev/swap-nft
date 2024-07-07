"use client"
import React from "react";
import App from "./App";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { getGasless } from "./utils/getGasless";
import {
  biconomyApiIdConst,
  biconomyApiKeyConst,
  relayerUrlConst,
  clientIdConst,
} from "./consts/parameters";
//add taikohekla chain 
import { TaikoHeklaL2} from "@thirdweb-dev/chains"

export default function Root(){
const urlParams = new URL(window.location.toString()).searchParams;

const relayerUrl = urlParams.get("relayUrl") || relayerUrlConst || "";
const biconomyApiKey =
  urlParams.get("biconomyApiKey") || biconomyApiKeyConst || "";
const biconomyApiId =
  urlParams.get("biconomyApiId") || biconomyApiIdConst || "";
const sdkOptions = getGasless(relayerUrl, biconomyApiKey, biconomyApiId);

const chain = (urlParams.get("chain") && urlParams.get("chain")?.startsWith("{")) ? JSON.parse(String(urlParams.get("chain"))) : urlParams.get("chain") || TaikoHeklaL2;

const clientId = urlParams.get("clientId") || clientIdConst || "";

return(
    <ThirdwebProvider activeChain={TaikoHeklaL2} sdkOptions={sdkOptions} clientId={clientId}>
      <App />
    </ThirdwebProvider>
);


}


import Home from "@/app/page";
import { ConnectWallet } from "@thirdweb-dev/react";
import { ThirdwebProvider } from "@thirdweb-dev/react";

// use client 

export default function Index() {
  return (
    <ThirdwebProvider activeChain="goerli">
      <Home />
      <ConnectWallet theme="dark" />
    </ThirdwebProvider>
  );
}
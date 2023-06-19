import Image from 'next/image'
import Index from "@/app/index";
import { ThirdwebProvider } from "@thirdweb-dev/react"
import { ConnectWallet } from "@thirdweb-dev/react";

// use client

export default function Home() {
  return (
    // <h1>Hey</h1>
    <Index/>
  )
}


"use client"
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { JSX, SVGProps } from "react";
import Link from 'next/link';

import {
  ThirdwebProvider,
  ConnectButton,
} from "thirdweb/react";
import {
  createWallet,
  walletConnect,
  inAppWallet,
} from "thirdweb/wallets";
import { createThirdwebClient } from "thirdweb";

const client = createThirdwebClient({
  clientId: "55becdfc7a12c18f2b4ee344a5dcd48c",
});

const wallets = [
  createWallet("io.metamask"),
  createWallet("com.coinbase.wallet"),
  walletConnect(),
  inAppWallet({
    auth: {
      options: [
        "email",
        "google",
        "apple",
        "facebook",
        "phone",
      ],
    },
  }),
];


export function Component() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  

  return (
    <div className="flex min-h-screen bg-gray-50">
      {isSidebarOpen && (
        <aside className="flex flex-col items-center w-20 py-6 bg-white border-r">
          <MenuIcon className="w-6 h-6 mb-6" onClick={toggleSidebar} />
          <HomeIcon className="w-6 h-6 mb-6" />
          <ClipboardIcon className="w-6 h-6 mb-6" />
          <SettingsIcon className="w-6 h-6 mb-6" />
        </aside>
      )}
    
      <main className="flex-1 p-6">
        <header className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            {!isSidebarOpen && <MenuIcon className="w-6 h-6 mb-6" onClick={toggleSidebar} />}
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <MoonIcon className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon">
              
              <BellIcon className="w-5 h-5" />
            </Button>
            <ThirdwebProvider>
      <ConnectButton
        client={client}
        wallets={wallets}
        theme={"dark"}
        connectModal={{ size: "wide" }}
      />
    </ThirdwebProvider>
          </div>
        </header>
        <section className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="col-span-2">
            <div className="mb-6">
              <h2 className="text-xl font-bold">Collections</h2>
              <div className="flex items-center space-x-4">
                <div className="text-center">
                  <h3 className="text-2xl font-bold">45</h3>
                  <p className="text-sm text-gray-500">In Progress</p>
                </div>
                
                <div className="text-center">
                  <h3 className="text-2xl font-bold">69</h3>
                  <p className="text-sm text-gray-500">Total Collections</p>
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-bold">24</h3>
                  <p className="text-sm text-gray-500">Upcoming</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card className="bg-orange-100">
                <CardHeader>
                  <CardTitle>Taiko NFTs</CardTitle>
                  <CardDescription>Minting now</CardDescription>
                </CardHeader>
                <CardContent>
                  <Progress value={60} className="mb-2" />
                  <div className="flex items-center justify-between">
                    <Avatar>
                      <AvatarImage src="/placeholder-user.jpg" />
                      <AvatarFallback>+</AvatarFallback>
                    </Avatar>
                    <Badge variant="secondary">2 Days Left</Badge>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-purple-100">
                <CardHeader>
                  <CardTitle>Testing</CardTitle>
                  <CardDescription>Prototyping</CardDescription>
                </CardHeader>

                <CardContent>
                  <Progress value={50} className="mb-2" />
                  <div className="flex items-center justify-between">
                    <Avatar>
                      <AvatarImage src="/placeholder-user.jpg" />
                      <AvatarFallback>+</AvatarFallback>
                    </Avatar>
                    <Badge variant="secondary">2 Days Left</Badge>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-blue-100">
                <CardHeader>
                  <CardTitle>Ocean Blue</CardTitle>
                  <CardDescription>Minting 2 hours from now</CardDescription>
                </CardHeader>
                <CardContent>
                  <Progress value={80} className="mb-2" />
                  <div className="flex items-center justify-between">
                    <Avatar>
                      <AvatarImage src="/placeholder-user.jpg" />
                      <AvatarFallback>+</AvatarFallback>
                    </Avatar>
                    <Badge variant="secondary">2 Days Left</Badge>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-pink-100">
                <CardHeader>
                  <CardTitle>Charis NFT AI</CardTitle>
                  <CardDescription>Minting Now</CardDescription>
                </CardHeader>
                <CardContent>
                  <Progress value={20} className="mb-2" />
                  <div className="flex items-center justify-between">
                    <Avatar>
                      <AvatarImage src="/placeholder-user.jpg" />
                      <AvatarFallback>+</AvatarFallback>
                    </Avatar>
                    <Badge variant="secondary">2 Days Left</Badge>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-green-100">
                <CardHeader>
                  <CardTitle>Rizz Test Minting</CardTitle>
                  <CardDescription>Test collection</CardDescription>
                </CardHeader>
                <CardContent>
                  <Progress value={60} className="mb-2" />
                  <div className="flex items-center justify-between">
                    <Avatar>
                      <AvatarImage src="/placeholder-user.jpg" />
                      <AvatarFallback>+</AvatarFallback>
                    </Avatar>
                    <Badge variant="secondary">2 Days Left</Badge>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-purple-100">
                <CardHeader>
                  <CardTitle>Trail Blazers</CardTitle>
                  <CardDescription>Minting Now</CardDescription>
                </CardHeader>
                <CardContent>
                  <Progress value={40} className="mb-2" />
                  <div className="flex items-center justify-between">
                    <Avatar>
                      <AvatarImage src="/placeholder-user.jpg" />
                      <AvatarFallback>+</AvatarFallback>
                    </Avatar>
                    <Badge variant="secondary">2 Days Left</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          <div>
            <h2 className="text-xl font-bold">Client Offers</h2>
            <div className="mt-4 space-y-4">
              <Card className="flex items-center p-4">
                <Avatar>
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>ST</AvatarFallback>
                </Avatar>
                <div className="ml-4">
                  <h3 className="text-sm font-semibold">Stephanie</h3>
                  <p className="text-sm text-gray-500">
                    I got to see your nft. It was quite good. 🐱 can i buy it for 0.1 ETH
                  </p>
                  <p className="text-xs text-gray-400">July, 4th</p>
                </div>
                <StarIcon className="ml-auto w-5 h-5 text-gray-400" />
              </Card>
              <Card className="flex items-center p-4">
                <Avatar>
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>MK</AvatarFallback>
                </Avatar>
                <div className="ml-4">
                  <h3 className="text-sm font-semibold">Mark</h3>
                  <p className="text-sm text-gray-500">Hey, can tell me more about this nft, any nego?</p>
                  <p className="text-xs text-gray-400">July, 4th</p>
                </div>
                <StarIcon className="ml-auto w-5 h-5 text-gray-400" />
              </Card>
              <Card className="flex items-center p-4">
                <Avatar>
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>DV</AvatarFallback>
                </Avatar>
                <div className="ml-4">
                  <h3 className="text-sm font-semibold">David</h3>
                  <p className="text-sm text-gray-500">Awesome! 🐱 I like it. can i buy it for 0.1 ETH</p>
                  <p className="text-xs text-gray-400">July, 4th</p>
                </div>
                <StarIcon className="ml-auto w-5 h-5 text-gray-400" />
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function BellIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  )
}


function ClipboardIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    </svg>
  )
}


function HomeIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}


function MenuIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}


function MoonIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
  )
}


function SearchIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}


function SettingsIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}


function StarIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}

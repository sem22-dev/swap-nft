"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { BellIcon, ClipboardIcon, HomeIcon, MenuIcon, MessageSquare, MoonIcon, SettingsIcon, StarIcon } from "lucide-react";

import { ThirdwebProvider, ConnectButton } from "thirdweb/react";
import { createWallet, walletConnect, inAppWallet } from "thirdweb/wallets";
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
      options: ["email", "google", "apple", "facebook", "phone"],
    },
  }),
];

export function Component() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`flex min-h-screen ${isDarkMode ? 'dark bg-[#1F2937] text-white' : 'light'}`}>
      {isSidebarOpen && (
        <aside className="flex flex-col items-center w-20 py-6 border-r ">
          <MenuIcon className="w-6 h-6 mb-6" onClick={toggleSidebar} />
          <HomeIcon className="w-6 h-6 mb-6" />
          <Link href={"/portfolio"}>
            <ClipboardIcon className="w-6 h-6 mb-6" />
          </Link>
          <SettingsIcon className="w-6 h-6 mb-6" />
        </aside>
      )}

      <main className="flex-1 p-6">
        <header className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            {!isSidebarOpen && <MenuIcon className="w-6 h-6 mb-6" onClick={toggleSidebar} />}
          </div>
          <div className="flex items-center space-x-4">
            <MessageSquare onClick={togglePopup} className="cursor-pointer" />
            <Button variant="ghost" size="icon" onClick={toggleTheme}>
              <MoonIcon className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <BellIcon className="w-5 h-5" />
            </Button>
            <ThirdwebProvider>
              <ConnectButton client={client} wallets={wallets} theme={"dark"} connectModal={{ size: "wide" }} />
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
        </section>
      </main>

      {isPopupOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg lg:w1/2 dark:bg-gray-800 dark:text-white">
            <h3 className="text-lg font-semibold mb-4">Client Offers</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Avatar>
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>ST</AvatarFallback>
                </Avatar>
                <div className="ml-4">
                  <h3 className="text-sm font-semibold">Stephanie</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-300">I got to see your nft. It was quite good. 🐱 can i buy it for 0.1 ETH</p>
                  <p className="text-xs text-gray-400 dark:text-gray-500">July, 4th</p>
                </div>
              </div>
              <div className="flex items-center">
                <Avatar>
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>+</AvatarFallback>
                </Avatar>
                <div className="ml-4">
                  <h3 className="text-sm font-semibold">Thomas</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-300">I would love to add it to my collection</p>
                  <p className="text-xs text-gray-400 dark:text-gray-500">July, 3rd</p>
                </div>
              </div>
            </div>
            <button onClick={togglePopup} className="mt-4 p-2 bg-blue-500 text-white rounded">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}


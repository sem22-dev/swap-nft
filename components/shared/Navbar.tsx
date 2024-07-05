"use client";

import { client } from "@/consts/client";
import { useGetENSAvatar } from "@/hooks/useGetENSAvatar";
import { useGetENSName } from "@/hooks/useGetENSName";
import { Link } from "@chakra-ui/next-js";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  Box,
  Button,
  Flex,
  Heading,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Image,
  useColorMode,
} from "@chakra-ui/react";
import { blo } from "blo";
import { FaRegMoon } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { IoSunny } from "react-icons/io5";
import {
  ConnectButton,
  useActiveAccount,
  useActiveWallet,
  useDisconnect,
} from "thirdweb/react";
import type { Wallet } from "thirdweb/wallets";
import { SideMenu } from "./SideMenu";
import { BellIcon, MessageSquare } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const account = useActiveAccount();
  const wallet = useActiveWallet();
  const { colorMode } = useColorMode();

  const [isPopupOpen, setIsPopupOpen] = useState(false);


  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <Box py="30px" px={{ base: "20px", lg: "50px" }}>
      <Flex direction="row" justifyContent="space-between">
        <Box my="auto">
          <Heading
            as={Link}
            href="/"
            _hover={{ textDecoration: "none" }}
            bgGradient="linear(to-l, #7928CA, #FF0080)"
            bgClip="text"
            fontWeight="extrabold"
          >
            {/* Replace this with your own branding */}
 MINTPAD
          </Heading>
        </Box>
            <Flex display={{ base: "none", lg: "flex" }} direction="row" align="center" gap={4}>
            <MessageSquare onClick={togglePopup} className="cursor-pointer"  />
            <Button variant="ghost" size="icon">
              <BellIcon className="w-5 h-5" />
            </Button>
            <ToggleThemeButton />
            {account && wallet ? (
              <ProfileButton address={account.address} wallet={wallet} />
            ) : (
              <ConnectButton
                client={client}
                theme={colorMode}
                connectButton={{ style: { height: "56px" } }}
              />
            )}
      </Flex>
        <SideMenu />
      </Flex>

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
    </Box>
  );
}

function ProfileButton({
  address,
  wallet,
}: {
  address: string;
  wallet: Wallet;
}) {
  const { disconnect } = useDisconnect();
  const { data: ensName } = useGetENSName({ address });
  const { data: ensAvatar } = useGetENSAvatar({ ensName });
  const { colorMode } = useColorMode();
  return (
    <Menu>
      <MenuButton as={Button} height="56px">
        <Flex direction="row" gap="5">
          <Box my="auto">
            <FiUser size={30} />
          </Box>
          <Image
            src={ensAvatar ?? blo(address as `0x${string}`)}
            height="40px"
            rounded="8px"
          />
        </Flex>
      </MenuButton>
      <MenuList>
        <MenuItem display="flex">
          <Box mx="auto">
            <ConnectButton client={client} theme={colorMode} />
          </Box>
        </MenuItem>
        <MenuItem as={Link} href="/profile" _hover={{ textDecoration: "none" }}>
          Profile {ensName ? `(${ensName})` : ""}
        </MenuItem>
        <MenuItem
          onClick={() => {
            if (wallet) disconnect(wallet);
          }}
        >
          Logout
        </MenuItem>
      </MenuList>
    </Menu>
  );
}

function ToggleThemeButton() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Button height="56px" w="56px" onClick={toggleColorMode} mr="10px">
      {colorMode === "light" ? <FaRegMoon /> : <IoSunny />}
    </Button>
  );
}

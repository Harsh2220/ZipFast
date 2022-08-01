import React, { ReactNode } from "react";
import { Box, Img, Stack, Text } from "@chakra-ui/react";
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
} from "react-icons/fi";
import { IconType } from "react-icons";
import Link from "next/link";

interface LinkItemProps {
  name: string;
  icon: IconType;
}
const LinkItems: Array<LinkItemProps> = [
  { name: "Home", icon: FiHome },
  { name: "Trending", icon: FiTrendingUp },
  { name: "Explore", icon: FiCompass },
  { name: "Favourites", icon: FiStar },
  { name: "Settings", icon: FiSettings },
];

export default function Sidebar() {
  return (
    <Box minHeight={"100vh"} bgColor={"blackAlpha.500"} pos="sticky" top="0">
      <Box overflow={"hidden"}>
        <Img
          src={
            "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          }
          h="200"
          w="full"
        />
      </Box>
      <Stack justifyContent={"center"} textAlign={"center"} p="2">
        <Text fontSize={"xx-large"} fontWeight={"bold"} color="gray.200">
          Starbucks Coffee
        </Text>
        <Text fontSize={"lg"} fontWeight={"semibold"} color="gray.400">
          Tata Starbucks Private Limited
        </Text>
        <Text color="gray.500">
          Ground Floor, First Floor, Rajyash Uniza, A/S Devashish Business Park,
          Bodakdev,India
        </Text>
      </Stack>
    </Box>
  );
}
// export default function SimpleSidebar({ children }: { children: ReactNode }) {
//   const { isOpen, onOpen, onClose } = useDisclosure();
//   return (
//     <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
//       <SidebarContent
//         onClose={() => onClose}
//         display={{ base: 'none', md: 'block' }}
//       />
//       <Drawer
//         autoFocus={false}
//         isOpen={isOpen}
//         placement="left"
//         onClose={onClose}
//         returnFocusOnClose={false}
//         onOverlayClick={onClose}
//         size="full">
//         <DrawerContent>
//           <SidebarContent onClose={onClose} />
//         </DrawerContent>
//       </Drawer>
//       {/* mobilenav */}
//       <MobileNav display={{ base: 'flex', md: 'none' }} onOpen={onOpen} />
//       <Box ml={{ base: 0, md: 60 }} p="4">
//         {children}
//       </Box>
//     </Box>
//   );
// }

// interface SidebarProps extends BoxProps {
//   onClose: () => void;
// }

// const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
//   return (
//     <Box
//       bg={useColorModeValue('white', 'gray.900')}
//       borderRight="1px"
//       borderRightColor={useColorModeValue('gray.200', 'gray.700')}
//       w={{ base: 'full', md: 60 }}
//       pos="fixed"
//       h="full"
//       {...rest}>
//       <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
//         <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
//           Logo
//         </Text>
//         <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
//       </Flex>
//       {LinkItems.map((link) => (
//         <NavItem key={link.name} icon={link.icon}>
//           {link.name}
//         </NavItem>
//       ))}
//     </Box>
//   );
// };

// interface NavItemProps extends FlexProps {
//   icon: IconType;
//   children: ReactText;
// }
// const NavItem = ({ icon, children, ...rest }: NavItemProps) => {
//   return (
//     <Link href="#" style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
//       <Flex
//         align="center"
//         p="4"
//         mx="4"
//         borderRadius="lg"
//         role="group"
//         cursor="pointer"
//         _hover={{
//           bg: 'cyan.400',
//           color: 'white',
//         }}
//         {...rest}>
//         {icon && (
//           <Icon
//             mr="4"
//             fontSize="16"
//             _groupHover={{
//               color: 'white',
//             }}
//             as={icon}
//           />
//         )}
//         {children}
//       </Flex>
//     </Link>
//   );
// };

// interface MobileProps extends FlexProps {
//   onOpen: () => void;
// }
// const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
//   return (
//     <Flex
//       ml={{ base: 0, md: 60 }}
//       px={{ base: 4, md: 24 }}
//       height="20"
//       alignItems="center"
//       bg={useColorModeValue('white', 'gray.900')}
//       borderBottomWidth="1px"
//       borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
//       justifyContent="flex-start"
//       {...rest}>
//       <IconButton
//         variant="outline"
//         onClick={onOpen}
//         aria-label="open menu"
//         icon={<FiMenu />}
//       />

//       <Text fontSize="2xl" ml="8" fontFamily="monospace" fontWeight="bold">
//         Logo
//       </Text>
//     </Flex>
//   );
// };

import React from 'react'
import {
    Box,
    Flex,
    Text,
    IconButton,
    Image,
    Button,
    Stack,
    Collapse,
    Icon,
    Link,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
  } from '@chakra-ui/react';

  import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
  } from '@chakra-ui/icons';

function Navbar() {
    
  return (
    <Box>
        <Flex bg='#fa5434' h="70px" alignItems={'center'} justifyContent='space-between'>
            <Box >
                <Image h="200px" src='./ZipFast-logos_transparent.png'/>
            </Box>
            <Flex as='b' justifyContent='space-around' w='xl' alignItems={'center'}>
                <Text>Home</Text>
                <Text>About Us</Text>
                <Text>Services</Text>
                <Text>Careers</Text>
                <Button bg='#f5ab41'>Get Started Now</Button>
            </Flex>
        </Flex>
    </Box>
  )
}

export default Navbar
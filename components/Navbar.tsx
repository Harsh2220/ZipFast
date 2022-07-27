import React,{useState}from 'react'
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
    CloseIcon
  } from '@chakra-ui/icons';

function Navbar() {
  const [navOpen, setNavOpen] = useState(false)
    
  return (
    <Box>
        <Flex bg='#fa5434' zIndex={'2'} h="70px" alignItems={'center'} justifyContent='space-between'>
            <Box >
                <Image h="200px" src='./ZipFast-logos_transparent.png'/>
            </Box>
            <Flex as='b' justifyContent='space-around' display={['none','flex']} w='xl' alignItems={'center'}>
                <Text>Home</Text>
                <Text>About Us</Text>
                <Text>Services</Text>
                <Text>Careers</Text>
                <Button bg='#f5ab41'>Get Started Now</Button>
            </Flex>
            {
              navOpen?(<CloseIcon onClick={()=>setNavOpen(false)} display={['block','none']} mr='4' width='2em' height='1em'/>):<HamburgerIcon onClick={()=>setNavOpen(true)} display={['block','none']} mr='4' width='2em' height='2em' />
            }
        </Flex>
        {
          navOpen?(<NavItem/>):(null)
        }
    </Box>
  )
}

function NavItem(){
  return (
    <Stack pl={4} pt={4} as={'b'} fontSize={'2xl'}>
      <Text>Home</Text>
            <Text>About Us</Text>
            <Text>Services</Text>
            <Text>Careers</Text>
    </Stack>
  )
}

export default Navbar
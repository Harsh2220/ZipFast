import React from 'react'
import Navbar from '../components/Navbar'
import '@fontsource/inter/700.css'
import {
  Box,
  Flex,
  Text,
  Heading,
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

function Hero() {
  return (
    <div>
      <Navbar/>
      <Stack minH='87.9vh' textAlign={'center'} justifyContent={'center'}>
        
        <Heading fontSize={'5xl'} mb='4' color={'#57a5bf'}>Why To Wait?</Heading>
        <Heading fontSize={'7xl'} bgGradient='linear(to-r, white, #6b61aa)' bgClip={'text'}>Just go ZipFast</Heading>
      </Stack>
    </div>
  )
}

export default Hero
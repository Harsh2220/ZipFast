import React from 'react'
import {
  Box,
  Center,
  Text,
} from "@chakra-ui/react";

export default function RestCard() {
  return (
    <Center>
      <Box
        backgroundImage="url('https://i.pinimg.com/originals/a2/bb/d5/a2bbd55e26b31e5157b770d5e5292c0d.jpg')"
        rounded='lg' 
        backgroundPosition="center"
        backgroundRepeat={"no-repeat"}
        backgroundSize="cover"
        m="10px"
        w="230px"
        h="300px"
        position={'relative'}
        boxShadow={'dark-lg'}
      >
        <Box h={'10'} w={'full'} mt="auto" background='linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.01))' position="absolute" bottom="0" rounded='lg' px='2'>
          <Text fontSize='lg' fontWeight='medium'>Resturant Name</Text>
        </Box>
      </Box>
    </Center>
  )
}

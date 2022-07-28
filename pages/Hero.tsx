import {
  Heading, Stack, Flex, Box
} from '@chakra-ui/react';
import '@fontsource/inter/700.css';
import Navbar from '../components/Navbar';

function Hero() {
  return (
    <div>
      <Navbar/>
      <Flex mt='-20' overflow={'hidden'} maxH='100vh' display={['none','flex']}>
        <Stack minH='87.9vh' w='60%' textAlign={'center'} justifyContent={'center'}>
          <Heading fontSize={'5xl'} mb='4' color={'#57a5bf'}>Why To Wait?</Heading>
          <Heading fontSize={'7xl'} bgGradient='linear(to-r, white, #6b61aa)' bgClip={'text'}>Just go ZipFast</Heading>
        
        </Stack>
        <Box width='35%' mt='32' ml='20'>
          <img src="./poster.png" width='100%' height='100%' alt="" />
        </Box>
      </Flex>
      
    </div>
  )
}

export default Hero
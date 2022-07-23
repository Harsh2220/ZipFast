import {
  Heading, Stack
} from '@chakra-ui/react';
import '@fontsource/inter/700.css';
import Navbar from '../components/Navbar';

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
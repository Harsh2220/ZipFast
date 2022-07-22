import { Center, Heading } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <Center minH='100vh' bg='gray.800' color='white'>
      <Heading fontSize='9xl'>Hello</Heading>
    </Center>
  )
}

export default Home

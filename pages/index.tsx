import { Center, Heading } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Login from '../components/Login'
import Signup from '../components/SingUp'
import Hero from "./Hero"
import Order from './Order'

const Home: NextPage = () => {
  
  return (
    // <Login/>
    // <Signup/>
    // <Hero />
    <Order/>
  )
}

export default Home

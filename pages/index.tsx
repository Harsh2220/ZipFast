import { Center, Heading } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Dashboard from '../components/admin/Dashboard'
import Login from '../components/Login'
import VerifyOtp from '../components/VerifyOtp'
import useStore from '../store/Store'
import Hero from "./Hero"
import Order from './Order'

const Home: NextPage = () => {

  const state = useStore();
  const otpsent = state.otpsent;
  
  return (
    // (otpsent ? <VerifyOtp/> : <Login/> )
    <Dashboard/>
  )
}

export default Home

import { Center, Heading } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Dashboard from '../components/admin/Dashboard'
import FoodCard from '../components/FoodCard'
import Login from '../components/Login'
import Sidebar from '../components/admin/Sidebar'
import VerifyOtp from '../components/VerifyOtp'
import useStore from '../store/Store'
import Hero from "./Hero"
// import order from './order'
import order from './Order'
import Navbar from '../components/Navbar'


const Home: NextPage = () => {

  const state = useStore();
  // const otpsent = state.otpsent;
  
  return (
    // (otpsent ? <VerifyOtp/> : <Login/> )
    // <Sidebar/>
    // <Hero/>
    // <Navbar/>
    // <FoodCard/>
    <Dashboard/>
  )
}

export default Home

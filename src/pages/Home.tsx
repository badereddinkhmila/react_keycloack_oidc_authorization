import HeroSection from '@components/home/HeroSection'
import Pricing from '@components/home/Pricing'
import Solutions from '@components/home/Solutions'
import React from 'react'
import Join from '../components/home/Join';

const Home = () => {
  return (
    <div className='w-full h-full flex flex-column gap-8'>
      <HeroSection />
      <Solutions />
      <Pricing />
      <Join />
    </div>
  )
}

export default Home

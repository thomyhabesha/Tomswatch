import React from 'react'
import Nav from '../Components/navigation/Nav'
import Hero from '../Components//hero/Hero'
import Info from '../Components/info/Info' 
import Testimonials from '../Components/testimonials/Testimonials' 
import Callforaction from '../Components/callforaction/Callforaction' 
import Footer from '../Components/footer/Footer' 
import './Home.css'
function Home() {
  return (
    <div className='home'>
      
        <Nav  />
        <Hero  />
        <Info/>
        <Testimonials/>
        <Callforaction/>
        <Footer/>
    </div>
  )
}

export default Home
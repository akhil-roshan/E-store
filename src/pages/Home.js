import React from 'react'
import Banner from '../components/Banner/Banner'
import Header from '../components/Header/Header'
import Rowpost from '../components/Rowpost/Rowpost'
import Footer from '../components/Footer/Footer'
import Appfooter from '../components/Appfooter/Appfooter'
import BottomNavBar from '../components/BottomNavBar/BottomNavBar'

function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <Rowpost />
      <Footer />
      <BottomNavBar />
    </div>
  )
}

export default Home

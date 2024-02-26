import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import MainSection from '../components/MainSection'

import SearchSection from '../components/SearchSection'

const Home = () => {
  return (
    <div>
      <Navbar />
      <SearchSection />
      <MainSection />
      <Footer />
    </div>
  )
}

export default Home
import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import AlbumDetails from './pages/AlbumDetails'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'

function App() {
  return (
    <>
   <Navbar/>
<Footer/>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='album/:id' element={<AlbumDetails/>}/>
   </Routes>
    </>
  )
}

export default App

import React from 'react'

import Home from './pages/Home'
import AlbumDetails from './pages/AlbumDetails'
import PlaylistAlbum from './pages/PlaylistAlbum'
import { Route, Routes } from 'react-router-dom'


function App() {
  return (
    <>
   
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='album/:id' element={<AlbumDetails/>}/>
    <Route path='playlist/:querry' element={<PlaylistAlbum/>}/>
    
   </Routes>
    </>
  )
}

export default App

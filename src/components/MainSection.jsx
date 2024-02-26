import axios from 'axios'
import React, { useContext, useEffect, useMemo, useState } from 'react'
import Slider from './Slider'
import { MusicContext } from '../context/MusicContext'
import Spinner from './Spinner'
import PlaylistComponent from './PlaylistComponent'

const MainSection = () => {
const [albums, setalbums] = useState([])
const [trending, settrending] = useState([])
const [playlist, setplaylist] = useState([])
const [charts, setcharts] = useState([])

const {isLoading, setisLoading}=useContext(MusicContext);

    const getData=async ()=>{
      setisLoading(true);
        const res= await axios.get("https://saavn.dev/modules?language=hindi")
        const {data}=res.data
        console.log(data)
        setalbums(data.albums)
        settrending(data.trending)
        setplaylist(data.playlists)
        setcharts(data.charts)
        console.log(data.playlists)
        setisLoading(false);
    }
const trendingdata= useMemo(
  ()=>(Array.isArray(trending.albums) ?trending.albums :[]),
  [trending.albums]
  );
  
useEffect(() => {
getData();
}, [])

  return (

    
    <div className=' '>
      {
        isLoading ? <Spinner/> :
        <div className="pb-[10vh] pt-[20vh] sm:pt-[25vh]  md:py-16 lg:py-24 ">

        <h2 className='text-xl px-2 sm:px-5 mb-4 font-semibold text-gray-700  w-full lg:w-[80vw] mx-auto'>Trending Now</h2>
         <Slider data={trendingdata}/>
          
        <h2 className='text-xl px-2 sm:px-5  mb-4 font-semibold text-gray-700 w-full lg:w-[80vw] mx-auto'>Top Albums</h2>
          <Slider data={albums}/>
        <h2 className='text-xl px-2 sm:px-5  mb-4 font-semibold text-gray-700 w-full lg:w-[80vw] mx-auto'>Top playlist</h2>
        <PlaylistComponent data={playlist}/>
        <h2  className='text-xl px-2 sm:px-5  mb-4 font-semibold text-gray-700 w-full lg:w-[80vw] mx-auto'>Top Charts
        </h2>
        <PlaylistComponent data={charts}/>
          
        </div>
      }
     
    </div>
  )
}

export default MainSection
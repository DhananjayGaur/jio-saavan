import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { MusicContext } from '../context/MusicContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SongList from '../components/SongList';
import SearchSection from '../components/SearchSection';
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";

const AlbumDetails = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const { songs, setsongs } = useContext(MusicContext);
  const [albums, setalbums] = useState([])
  const [image, setimage] = useState([])

  console.log(id)
  const getAlbumData = async () => {
    const res = await axios.get(`https://saavn.dev/albums?id=${id}`)
    const { data } = await res.data
    // console.log(data)
    setalbums(data);
    setsongs(data.songs);
    setimage(getImg(data.image));
    console.log("songs data")
    console.log(data.songs)
  }

  const getImg = (image) => (image = image[2].link);

  useEffect(() => {
    getAlbumData()
  }, [])

  return (
    <div>
      <Navbar />
      <SearchSection/>
      <div className="flex flex-col lg:flex-row justify-center items-center   lg:gap-24 h-screen my-48 sm:my-56 md:my-40 lg:my-0 mx-2 lg:mx-auto">
     
     <button className='px-4 py-2 absolute top-[19vh] sm:top-[25vh] md:top-[9.5vh] left-0 bg-slate-200 rounded-r-full'
      onClick={()=>navigate(-1)}><FaArrowLeft className='hover:text-gray-500' /></button>

     <div className="relative flex flex-col lg:flex-row justify-center items-center lg:gap-14">

       <div className="">

        <div className="">
          <img src={image} alt={albums.title} width={250} className='mx-auto mb-4 rounded-lg' />
        </div>
        <div className="w-[250px] text-center text-gray-600">
          <h1>{albums.name}</h1>
          <p>{albums.primaryArtists} . {albums.songCount}</p>
        </div>

       </div>

        <div className="h-[70vh] flex flex-col justify-center overflow-y-auto py-6">
          {albums.songs?.map((song)=>(
            
            <SongList  key={song.id} {...song}/>
          ))}
        </div>
     </div>
      </div>
      <Footer />
    </div>
  )
}

export default AlbumDetails
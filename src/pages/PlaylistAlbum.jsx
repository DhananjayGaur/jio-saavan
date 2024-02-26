import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { FaArrowLeft } from 'react-icons/fa6';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SearchSection from '../components/SearchSection';
import { MusicContext } from '../context/MusicContext';
import Spinner from '../components/Spinner';


const PlaylistAlbum = () => {

    const { querry } = useParams();
    console.log(querry);
    const [song, setsong] = useState([])
    const [playlistData, setplaylistData] = useState([])
    const {isLoading, setisLoading}=useContext(MusicContext);
    

    const navigate = useNavigate();

    const getAlbumData = async () => {
        setisLoading(true)
        const res = await axios.get(`https://saavn.dev/search/playlists?query=${querry}`)
        const { data } = await res.data;
        setplaylistData(data.results)
        console.log("playlistData")
        console.log(playlistData)
        setisLoading(false)
    }

    useEffect(() => {
        getAlbumData()
    }, [])

    return (

        <div className=' relative justify-center min-h-[100vh] flex items-center'>
            <Navbar />
            <SearchSection />
            <button className='px-4 py-2 absolute top-[19vh] sm:top-[25vh] md:top-[9.5vh] left-0 bg-slate-200 rounded-r-full'
                onClick={() => navigate(-1)}><FaArrowLeft className='hover:text-gray-500' /></button>

                {isLoading ? <Spinner/>:  
                <div className="gap-8  flex-wrap justify-center item-center pb-28 md:pb-[20vh] mt-[10vh] flex px-2  md:px-10 py-[10vh] sm:py-[20vh] md:py-0">
                
                {playlistData?.map((item) => {
                    return <div className='w-[10rem]  rounded-md gap-2 justify-between  overflow-hidden flex flex-col  items-center' >

                        <img src={item.image[2].link} className='w-full rounded-lg object-cover' alt="" />
                        <div className="text-center">
                        <h1 className='text-md text-center'>{item.name}</h1>
                        <h1>Total Songs:{item.songCount}</h1>
                        </div>
                       

                    </div>
                })}
            </div> }

          
            <Footer />
        </div>
    )
}

export default PlaylistAlbum
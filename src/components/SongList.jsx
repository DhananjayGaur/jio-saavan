import React, { useContext } from 'react'
import {GoPlay} from "react-icons/go";
import { MusicContext } from '../context/MusicContext';

const SongList = ({
    name,
    primaryArtists,
    duration,
    downloadUrl,
    image,id,
    }) => {
    const convetTime=(duration)=>{
        const minutes=Math.floor(duration/60);
        const seconds=duration%60;
        return `${minutes} :${seconds}`;
    }
    const {currentSong,playMusic}=useContext(MusicContext);
  return (
    <div className='flex justify-between items-center w-[90vw] lg:w-[50vw] mb-2 lg:mb1 p-1 px-3
    hover:bg-white hover:shadow-md'  onClick={()=>playMusic(downloadUrl,name,duration,image,id,primaryArtists)}>
        <GoPlay className='text-3xl text-gray-500 hover:text-gray-700 transition-all ease-in-out duration-300 cursor-pointer' 
        />

        <div className={`flex flex-col lg:flex-row justify-between items-start w-[80%]  ${id === currentSong?.id && "text-[#46c7b6ff]"}`}>
            <h2 className={`font-bold text-xs 
                `}>
                {name}</h2>
            <h3 className={`font-thin text-xs  `}>....{primaryArtists}</h3>
        </div>

        <div className="">
            <span className={`font-thin text-xs  hidden sm:block ${id === currentSong?.id && "text-[#46c7b6ff]"}`}>{convetTime(duration)}</span>
        </div>
    </div>
  )
}

export default SongList
import React, { useContext } from 'react'
import { MusicContext } from '../context/MusicContext'

const SongItem = ({image,name,duration,downloadUrl,id ,primaryArtists}) => {

const {playMusic}=useContext(MusicContext);

    return (
        <div className='w-[160px] h-[35vh]   flex flex-col  items-center gap-3 rounded-lg'>
           <img src={image[2].link} className='rounded-lg w-[30vw] sm:w-[20vw] lg:w-[10vw] cursor-pointer' alt="" 
           onClick={()=>playMusic(downloadUrl, name, duration, image, id, primaryArtists)} />

           <div className="text-[13px] w-full flex flex-col justify-center items-center">
            <span className='font-semibold overflow-x-clip'>{name}</span>
           </div>
        </div>
    )
}

export default SongItem
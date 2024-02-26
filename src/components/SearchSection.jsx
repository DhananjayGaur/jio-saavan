import React, { useContext } from 'react'
import { MusicContext } from '../context/MusicContext'
import SongItem from './SongItem';
import Spinner from './Spinner';

const SearchSection = () => {
    const {searchedSongs,isLoading}=useContext(MusicContext);
  return (
    <div className={`fixed left-0 right-0 bottom-0 top-0 overflow-y-auto py-[30vh]  md:py-32 flex justify-center items-center flex-wrap 
    gap-4 bg-white bg-opacity-50 backdrop-blur-lg
    ${searchedSongs.length ===0 ?"translate-y-[1200px]" : "translate-y-0"} 
    transition-all  duration-500 ease-linear`}>

      {
        isLoading? <Spinner/> :searchedSongs?.map((song)=> <SongItem key={song.id} {...song}/>)
      }


    

    </div>
  )

}

export default SearchSection
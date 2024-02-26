import React, { useContext, useRef } from 'react'
import { MdOutlineKeyboardArrowLeft,MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FaAngleLeft } from "react-icons/fa6";
import AlbumItem from './AlbumItem';
import { MusicContext } from '../context/MusicContext';

const Slider = ({data}) => {
    const scrollRef=useRef(null);

    const {isLoading, setisLoading}=useContext(MusicContext);

    const scrollRight=()=>{
        scrollRef.current.scrollLeft +=800;
    }
    const scrollLeft=()=>{
        scrollRef.current.scrollLeft -=800;
    }
  return (
    <div className='flex justify-center  items-center gap-2'>
        <MdOutlineKeyboardArrowLeft onClick={scrollLeft} className='text-3xl text-gray-600 hover:scale-125 transition-all duration-500 ease-in-out cursor-pointer hidden md:block lg:block'/>

    

    <div className="grid grid-rows-2 grid-flow-col-dense justify-between items-center 
        w-full lg:w-[80vw] px-2 sm:px-5  gap-4 overflow-x-scroll scroll-hide "
        ref={scrollRef}>
            {data?.map((album)=><AlbumItem key={album.id} {...album}/>)}
        </div>

        <MdOutlineKeyboardArrowRight onClick={scrollRight} className='text-3xl text-gray-600 hover:scale-125 transition-all duration-500 ease-in-out cursor-pointer hidden md:block lg:block'/>
    </div>
  )
}

export default Slider
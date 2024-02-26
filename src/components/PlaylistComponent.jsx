import React, { useRef } from 'react'
import PlaylistItem from './PlaylistItem'
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md'

const PlaylistComponent = ({data}) => {

    const scrollRef=useRef(null);

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
        {data?.map((playlist)=><PlaylistItem key={playlist.id} {...playlist}/>)}
        </div>

        <MdOutlineKeyboardArrowRight onClick={scrollRight} className='text-3xl text-gray-600 hover:scale-125 transition-all duration-500 ease-in-out cursor-pointer hidden md:block lg:block'/>
    </div>
        
    
  )
}

export default PlaylistComponent
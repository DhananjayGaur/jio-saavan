import React from 'react'
import { Link } from 'react-router-dom'

const AlbumItem = ({name,id,artists,image}) => {
    return (
        <Link to={`/album/${id}`} 
        className='w-[160px] h-[35vh]   overflow-y-clip flex flex-col  items-center gap-3 rounded-lg'>
            <img src={image[2].link} alt=""
             className='rounded-lg w-[85%]' />

            <div className="text-[13px] w-full flex flex-col items-center">
                <h1 className='overflow-x-clip font-semibold text-gray-600'>{name.length >20 ? name.slice(0,20) + "..." :name}</h1>
                <p className='font-thin text-gray-500'>
                {artists.map((artist)=>artist.name).join(",").length > 24 ?
                artists.map((artist)=>artist.name).join(",").slice(0,24) + "..."
                :artists.map((artist)=>artist.name).join(",")
            }</p>
            </div>
        </Link>
    ) 
}

export default AlbumItem
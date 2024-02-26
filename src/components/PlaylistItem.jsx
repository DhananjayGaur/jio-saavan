import React from 'react'
import { Link } from 'react-router-dom'

const PlaylistItem = ({ id, title, image, }) => {
  return (
    

    <Link to={`/playlist/${title}`}
      className='w-[160px] h-[35vh]   overflow-y-clip flex flex-col  items-center gap-3 rounded-lg'>
      <img src={image[2].link} alt=""
        className='rounded-lg w-[85%]' />

      <div className="text-[13px] w-full flex flex-col items-center">
        <h1 className='overflow-x-clip font-semibold text-gray-600'>{title}</h1>

      </div>
    </Link>

  )
}

export default PlaylistItem
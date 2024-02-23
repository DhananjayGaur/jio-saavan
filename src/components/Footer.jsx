import React, { useState } from 'react'
import { FaPlay } from "react-icons/fa";
import { IoPause } from "react-icons/io5";
import { IoPlaySkipBackSharp } from "react-icons/io5";
import { IoPlaySkipForwardSharp } from "react-icons/io5";
import { GiSoundOn } from "react-icons/gi";
import { GiSoundOff } from "react-icons/gi";
import { TbRepeat } from "react-icons/tb";
import { LuShuffle } from "react-icons/lu";
import { BsDownload } from "react-icons/bs";


const Footer = () => {
    const [play, setplay] = useState(true)
    const [sound, setsound] = useState(true)
    const playHandler = () => {
        setplay(!play)
        console.log("clicked    ")
    }
    const soundHandler = () => {
        setsound(!sound)
        console.log("clicked    ")
    }
    return (
        <div className='fixed bottom-0 left-0 right-0  px-6 py-2 w-screen'>
            <input type="range"
                name="progress"
                id="progress"
                step="0.1"
                min={0}
                max={100}
                value={0}
                className='w-full text-green-400 rounded-md' />
            <div className="flex justify-between mt-1 items-center">

                <div className="flex justify-start items-center gap-3 lg:w-[30vw">

                <div className="song w-14 h-14 rounded-md overflow-hidden bg-slate-300">
                    <img src="https://images.unsplash.com/photo-1707327259268-2741b50ef5e5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8" className='object-cover w-full  h-full' alt="" />
                </div>
                <div className="hidden sm:block sm:text-sm">
                    <h2>song det</h2>
                    <p className='text-gray-600'>Lorem ipsum dolor sit amet.</p>
                </div>
                </div>

                <div className="player text-md sm:text-[1.7rem] gap-4 text-slate-400 flex">

                    <LuShuffle />
                    <IoPlaySkipBackSharp />
                    {play ? <FaPlay onClick={playHandler} /> : <IoPause onClick={playHandler} />}


                    <IoPlaySkipForwardSharp />
                    <TbRepeat />


                </div>

                <div className="sound flex gap-4">
                <BsDownload />
                    {sound ? <GiSoundOn onClick={soundHandler} /> : <GiSoundOff onClick={soundHandler} />}


                </div>
            </div>
        </div>
    )
}

export default Footer
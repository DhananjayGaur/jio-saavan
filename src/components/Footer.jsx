import React, { useContext, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { FaPlay, FaPause } from "react-icons/fa";
import { IoMdSkipBackward,IoMdSkipForward } from 'react-icons/io';

import { GiSoundOn } from "react-icons/gi";
import { GiSoundOff } from "react-icons/gi";
import { TbRepeat } from "react-icons/tb";
import { LuShuffle } from "react-icons/lu";
import { BsDownload } from "react-icons/bs";
import { MusicContext } from '../context/MusicContext';
import { FaHeart } from "react-icons/fa";

import { FaRegHeart } from "react-icons/fa";


const Footer = () => {

    const { currentSong, playMusic, isPlaying, nextSong, prevSong} = useContext(MusicContext);

    const inputRef = useRef();

    // const [play, setplay] = useState(true)
    const [sound, setsound] = useState(true)
    const [Volume, setvolume] = useState(1)

    const soundHandler = () => {
        setsound(!sound)
        console.log("clicked    ")
        if(currentSong){
            Volume === 1 ? setvolume(0):setvolume(1)
        // currentSong.audio.volume =Volume;
            console.log(Volume);
        }
    }

useLayoutEffect(() => {
  if(currentSong){
    // setsound(!sound)
    currentSong.audio.volume =Volume;
  }

  
}, [currentSong,Volume])

    useEffect(() => {
        if (currentSong) {
            const audioElement = currentSong.audio;

            const handleTimeUpdate = () => {
                const duration = Number(currentSong.duration);
                const currentTime = audioElement.currentTime;
                const newTiming = (currentTime / duration) * 100;
                inputRef.current.value = newTiming;
            };

            const handleSongEnd = () => nextSong();

            audioElement.addEventListener("timeupdate", handleTimeUpdate);
            audioElement.addEventListener("ended", handleSongEnd);

            return () => {
                audioElement.removeEventListener("timeupdate", handleTimeUpdate)
            };
        }

    }, [currentSong])



    const handleProgress = (event) => {
        const newPercentage = parseFloat(event.target.value);
        const newTime = (newPercentage / 100) * Number(currentSong.duration);
        if (newTime >= 0) {
            currentSong.audio.currentTime = newTime;
        }
    }

    const handleDownload=async (url)=>{
        try {
            
            const res =await fetch(url);
            const blob =await res.blob();
            // console.log("blob")
            // console.log(blob);

            const link=document.createElement("a");
            link.href=URL.createObjectURL(blob);
            link.download=`${currentSong.name}.mp3`;

            document.body.appendChild(link);
            link.click();

            document.body.removeChild(link);
        } catch (error) {
            console.log(error)
            
        }
    }

   

    return (
        <div className='fixed bottom-0 left-0 right-0  px-6 py-2 w-screen bg-white'>
            <input type="range"
                name="progress"
                id="progress"
                step="0.1"
                min={0}
                max={100}
                value={0}
                ref={inputRef}
                onChange={handleProgress}
                className='w-full text-green-400 rounded-md' />
            <div className="flex justify-between mt-1 items-center">

                <div className="flex justify-start items-center gap-3  ">

                    <div className="song w-14 h-14 rounded-md overflow-hidden">
                        <img src={currentSong?.image} className='object-cover w-full  h-full' alt="" />
                    </div>
                    <div className="hidden sm:block  w-[25vw]">
                        <h2>{currentSong?.name.length > 20 ? currentSong?.name.slice(0,20) + "..." :currentSong?.name}</h2>
                        <p className='text-gray-600 text-xs text-wrap'>{currentSong?.primaryArtists.length >15 ?currentSong?.primaryArtists.slice(0,15) +"...other":currentSong?.primaryArtists}</p>
                    </div>
                </div>

                <div className="player text-2xl sm:-ml-[25vw] sm:text-[1.7rem] gap-4 text-slate-400 flex">

                    {/* <LuShuffle className='text-gray-700 hover:text-gray-500 cursor-pointer'/> */}
                    <IoMdSkipBackward onClick={prevSong} className='text-gray-700 hover:text-gray-500 cursor-pointer' />

                    {isPlaying ?
                        <FaPause onClick={() => playMusic(
                            currentSong?.audio,
                            currentSong.name,
                            currentSong.duration,
                            currentSong.image,
                            currentSong.id
                        )}
                        className='text-gray-700 hover:text-gray-500 cursor-pointer' />
                        :
                        <FaPlay onClick={() => playMusic(
                            currentSong.audio,
                            currentSong.name,
                            currentSong.duration,
                            currentSong.image,
                            currentSong.id
                        )} 
                        className='text-gray-700 hover:text-gray-500 cursor-pointer'/>}

                    <IoMdSkipForward onClick={nextSong} className='text-gray-700 hover:text-gray-500 cursor-pointer' />
                    {/* <TbRepeat className='text-gray-700 hover:text-gray-500 cursor-pointer' /> */}

                </div>

                <div className="sound p-2 flex gap-4">

                    <BsDownload onClick={()=>handleDownload(currentSong.audio.src)} className='text-gray-700 text-xl hover:text-gray-500 cursor-pointer'/>
                    {sound ? <GiSoundOn onClick={soundHandler} className='text-gray-700 hover:text-gray-500 text-xl cursor-pointer' /> 
                    :
                     <GiSoundOff onClick={soundHandler} className='text-gray-700 hover:text-gray-500 text-xl cursor-pointer'/>}


                </div>
            </div>
        </div>
    )
}

export default Footer
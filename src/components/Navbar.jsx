import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { IoIosArrowDown } from "react-icons/io";
import axios from 'axios';
import { MusicContext } from '../context/MusicContext';
import { MdClear } from "react-icons/md";

const Navbar = () => {

    const { setSearchedSongs,isLoading, setisLoading } = useContext(MusicContext);
    const [clear, setclear] = useState(false)
    const searchSong = async (event) => {
        if(event.target.value.length !==0){
            setclear(true)
        }
      
        const res = await axios.get(`https://saavn.dev/search/songs?query=${event.target.value}&page=1&limit=2`)
        setisLoading(true)
        const { data } = await res.data;
        if (data.results.length === 0 || event.target.value === "" || event.target.value.length === 0) {
            setSearchedSongs([]);
        } else {
            setSearchedSongs(data.results);
        }
        console.log(data.results);
        setisLoading(false)
    }
    const clearHandler = () => {
        // console.log("click x")
        setclear(!clear);
        setSearchedSongs([])
        // setclear(!clear)

    }

    return (
        <>
            <nav className='flex flex-col md:flex-row justify-between mx-auto fixed top-0 left-0 right-0 z-10 items-center bg-[#fff] border-b'>
                <div className="logo flex justify-between items-center">
                    <Link to='/'>
                        <img src='../jiologo.png' className='w-[32vh] sm:w-[12rem] md:w-[8rem] lg:w-[12rem] -ml-6'></img>
                    </Link>

                    <div className='flex gap-3'>
                        {["Music", "Podcasts", "Go Pro"].map((item, index) => (
                            <h1 key={index}  className=' lg:text-sm md:text-[1.2vw] font-bold mr-3 hidden sm:flex'>{item}</h1>
                        ))}
                    </div>
                    {/* <div className="right px-4 sm:hidden flex  gap-2 md:text-sm whitespace-nowrap">
                        <Link to='/Liked' className='px-2  font-bold'>Liked</Link>
                       
                    </div> */}
                </div>


                <div className="search text-center flex justify-between items-center w-[80vw] md:w-1/3  mt-1 mb-2 px-6 py-2
                    rounded-full border-[1px]">
                    <input type='text'
                        name='search'
                        id='search'
                        placeholder='search your song...'
                        autoComplete='off'
                        autoCorrect='off'
                        onChange={searchSong}
                        className='outline-none  w-full  text-center  text-black'></input>
                    {clear && < MdClear onClick={clearHandler} className='cursor-pointer' />}

                </div>
                <div className=" justify-between items-center hidden sm:flex">

                    <div className="music hidden sm:flex items-center mr-8 whitespace-nowrap ">
                        <div className="">
                            <h1 className='text-sm md:text-[1.5vw] lg:text-sm'>Music Language</h1>
                            <h4 className='  md:text-[1.3vw] lg:text-[1vw]'>Hindi</h4>
                        </div>
                        <IoIosArrowDown className='text-sm' />
                    </div>
                    {/* <div className="right px-4 gap-2 md:text-sm whitespace-nowrap">
                        <Link to='/Liked' className='px-2  font-bold'>Liked</Link>
                       
                    </div> */}
                </div>

            </nav>
        </>
    )
}

export default Navbar
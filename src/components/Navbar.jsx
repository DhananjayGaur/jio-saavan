import React from 'react'
import { Link } from 'react-router-dom'
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
    return (
        <>
            <nav className='flex flex-col md:flex-row justify-between mx-auto fixed top-0 left-0 right-0  items-center bg-[#fff] border-b'>
                <div className="logo flex justify-between items-center">
                    <img src='../jiologo.png' className='w-[12rem] sm:w-[20vw] md:w-[13vw] -ml-6'></img>
                    <div className='flex gap-3'>
                    {["Music", "Podcasts", "Go Pro"].map((item, index) => (
                        <h1 key={index} className=' lg:text-sm md:text-[1.2vw] font-bold mr-3 hidden sm:flex'>{item}</h1>
                    ))}
                    </div>
                </div>

               
                    <div className="search text-center w-[80vw] md:w-1/3  mt-1 mb-2">
                        <input type='text'
                            name='search'
                            placeholder='searc your song'
                            className='outline-none px-6 py-2 w-full bg-slate-800 text-center rounded-full border-[1px] text-black'></input>
                    </div>
                    <div className="flex justify-between items-center">

                    <div className="music flex items-center whitespace-nowrap ">
                        <div className="">
                            <h1 className='text-sm md:text-[1.5vw] lg:text-sm'>Music Language</h1>
                            <h4 className='  md:text-[1.3vw] lg:text-[1vw]'>Hindi</h4>
                        </div>
                        <IoIosArrowDown className='text-sm'/>
                    </div>
                    <div className="right px-4 gap-2 md:text-sm whitespace-nowrap">
                        <Link className='px-2  font-bold'>Login</Link>
                        <Link className='px-2  font-bold'>Sign up</Link>
                    </div>
                    </div>
               
            </nav>
        </>
    )
}

export default Navbar
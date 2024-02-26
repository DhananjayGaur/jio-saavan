import React from 'react'

const Spinner = () => {
    return (
        <div className='w-full h-[100vh] flex justify-center items-center' >
            <div class="spinner ">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>

            </div>
            <div className="">

            <h1 className='loading-text  mt-[22vh]  overflow-hidden text-nowrap'>Loading your song....</h1>
            </div>


        </div>
    )
}

export default Spinner
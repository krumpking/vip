import React from 'react'
import { FC } from 'react';

interface MyProps {
    video: string,
    brief: string,
    website: Boolean

}


const PortfolioCard: FC<MyProps> = ({ video, brief, website }) => {
    return (
        <div className={website ?
            "relative h-fit w-fit bg-black-metal bg-cover border-8 border-white rounded-md border-opacity-40 shadow-2xl shadow-inherit"
            : "relative h-84 w-48 bg-black-metal bg-cover border-8 border-white rounded-md border-opacity-40 shadow-2xl shadow-inherit "}>
            <video className='w-full h-full' autoPlay={true} loop={true}>
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className='w-full h-1/8 absolute inset-x-0 bottom-0 bg-white rounded-lg p-4  bg-opacity-20 backdrop-blur-md mb-2 text-center text-white'>
                <p>{brief}</p>
            </div>
        </div>
    )
};


export default PortfolioCard
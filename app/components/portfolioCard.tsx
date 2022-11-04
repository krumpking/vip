import React from 'react'
import { FC } from 'react';

interface MyProps {
    image: string,
    title: string,
    subtitle: string,
    brief: string,
    website: Boolean

}


const PortfolioCard: FC<MyProps> = ({ image, title, subtitle, brief, website }) => {
    return (
        <div className={website ?
            "relative h-64 w-fit bg-black-metal bg-cover border-8 border-white rounded-md border-opacity-40 shadow-2xl shadow-inherit"
            : "relative h-64 w-48 bg-black-metal bg-cover border-8 border-white rounded-md border-opacity-40 shadow-2xl shadow-inherit "}>
            <img src={image} className='w-full h-full' />
            <div className='w-full h-1/4 absolute inset-x-0 bottom-0 bg-white rounded-lg p-4  bg-opacity-20 backdrop-blur-md mb-2'>
                <p>{brief}</p>
            </div>
        </div >
    )
};


export default PortfolioCard
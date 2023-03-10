import Link from 'next/link';
import { useState } from 'react';
import { Document } from 'react-pdf';
import Home from '.';
import Button from '../app/components/button';
import Header from '../app/components/header';
import Nav from '../app/components/nav';
import Trusted from '../app/components/trusted';
import { contactLink } from '../app/utilities/constants';


const Profile = () => {
    const [loading, setLoading] = useState(false);



    return (
        // <div className='relative bg-black'>
        //     <div className="grid grid-cols-1 h-fit">
        //         <Header>
        //             <div className='flex flex-col'>
        //                 <div className='grid grid-cols-1 afterMini:grid-cols-10'>
        //                     <div className='col-span-4 lg:col-span-5  lg:p-0 flex flex-col m-4 bg-black-metal bg-cover border rounded-lg   afterMini:bg-none afterMini:border-none p-4'>
        //                         <h1 className='text-white xxs:text-2xl xs:text-3xl font-extrabold m-8 w-11/12'>Vision Is Primary</h1>
        //                         <p className='text-white text-lg mt-8 ml-8 mr-8'>Vision Is Primary is a software engineering company founded on the
        //                             understanding that a dream can change world. Our core belief is that
        //                             every human on earth has special gifts and talent, which when harnesed
        //                             can make all of our lives better. We believe that each of us need each
        //                             other because of these peculiar gifts</p>

        //                         <p className='text-white text-lg mt-8 ml-8 mr-8'>We believe a vision is a step above a dream, because it moves a dream
        //                             from an imagination, to a picture with an actionable plan thus Vision Is
        //                             Primary, meaning moving your imagination to an actionable plan is the
        //                             first step</p>

        //                         <p className='text-white text-lg mt-8 ml-8 mr-8'> Software is now at the core of almost everything we do, and is
        //                             unparalleled in its ability to increase productivity, this makes software
        //                             the best tool to help solve many of the worlds problems, but for that to
        //                             happen, enough people have to dare drea</p>
        //                         <div className='mt-8 ml-8 mr-8 flex flex-row justify-start'>
        //                             <Button text="Contact Us" link={contactLink} />
        //                             <Link href="#team"><p className="m-2 text-white">See more</p></Link>

        //                         </div>
        //                     </div>
        //                     <div className='col-span-6 lg:col-span-5 w-full m-auto'>
        //                         <img src='/images/logo.png' className='' />
        //                     </div>

        //                 </div>
        //                 <Trusted />


        //             </div>


        //         </Header>
        //         {/* <div className='flex flex-col space-y-4 bg-black-metal bg-cover' id='team'>



        //         </div>
        //         <div>

        //             <h1>All Projects </h1>

        //         </div> */}



        //     </div >
        //     <a href={contactLink}>
        //         <img src='/images/whatsapp.png' className={'animate-bounce fixed bottom-20  right-10 h-16 w-16'} />
        //     </a>

        // </div >
        <Home />


    )
}

export default Profile
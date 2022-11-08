import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react';
import { contactLink } from '../utilities/constants'


export default function Nav() {
    const [navbar, setNavbar] = useState(false);





    return (
        <div>
            <nav className="w-full ">
                <div className="px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                    <div>
                        <div className="flex flex-row justify-between py-3 md:py-5 md:block">
                            <a href="#">
                                <img src={'/images/logo.png'} alt='logo' width={50} height={50} className="mx-4" />
                            </a>
                            <div className="md:hidden">
                                <button
                                    className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                    onClick={() => setNavbar(!navbar)}
                                >
                                    {navbar ? (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6 text-white"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    ) : (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6 text-white"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M4 6h16M4 12h16M4 18h16"
                                            />
                                        </svg>
                                    )}
                                </button>
                            </div>

                        </div>
                        <div>

                        </div>
                    </div>
                    <div>
                        <div
                            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? 'block' : 'hidden'
                                }`}
                        >
                            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                                <li className="text-white">
                                    <Link href={"#about"}><p className='text-white font-extrabold'>About</p></Link>
                                </li>
                                <li className="text-white">
                                    <Link href={"#cases"}><p className='text-white font-extrabold'>Use Cases</p></Link>
                                </li>
                                <li className="text-white">
                                    <Link href={"#portfolio"}><p className='text-white font-extrabold'>Portfolio</p></Link>
                                </li>
                                <li className="text-white">
                                    <Link href={"#testimonials"}><p className='text-white font-extrabold'>Testimonials</p></Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );



    // return (
    //     <div className='w-full grid grid-cols-10'>

    //         <div className='col-span-9 flex flex-row'>
    //             {isMobile ? <p></p> : <img src={'/images/logo.png'} alt='logo' width={100} height={100} />}
    //             <div className="md:hidden flex items-center">
    //                 <button onClick={() => openNav()} className="h-8">
    //                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 fill-white">
    //                         <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    //                     </svg>

    //                 </button>
    //             </div>
    //             {/* <p className='text-white font-extrabold  mt-10'>Vision Is Primary</p> */}
    //             <div className={isMobile ? "hidden" : ""}>
    //                 <Link href={"#about"}><p className='text-white font-extrabold  mt-10 mx-2'>About</p></Link>
    //                 <Link href={"#cases"}><p className='text-white font-extrabold  mt-10  mx-2'>Use Cases</p></Link>
    //                 <Link href={"#portfolio"}><p className='text-white font-extrabold  mt-10  mx-2'>Portfolio</p></Link>
    //                 <Link href={"#testimonials"}><p className='text-white font-extrabold  mt-10  mx-2'>Testimonials</p></Link>
    //             </div>



    //         </div>
    //         <div className='col-span-1 mt-10'>
    //             {isMobile ? <div id="menu" className={isMobile ? `opacity-100` : `hidden`}>
    //                 <ul>
    //                     <li className='m-2'>
    //                         <Link href={"#about"}><p className='text-white font-extrabold  mt-10 mx-2'>About</p></Link>
    //                     </li>
    //                     <li className='m-2'>
    //                         <Link href={"#cases"}><p className='text-white font-extrabold  mt-10  mx-2'>Use Cases</p></Link>
    //                     </li>
    //                     <li className='m-2'>
    //                         <Link href={"#portfolio"}><p className='text-white font-extrabold  mt-10  mx-2'>Portfolio</p></Link>
    //                     </li>
    //                     <li className='m-2'>
    //                         <Link href={"#testimonials"}><p className='text-white font-extrabold  mt-10  mx-2'>Testimonials</p></Link>
    //                     </li>
    //                 </ul>

    //             </div> : <Link href={contactLink}><p className='text-white font-extrabold'>Contact us</p></Link>}


    //         </div>




    //     </div>
    // )
}

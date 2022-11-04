import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { contactLink } from '../utilities/constants'


export default function Nav() {
    return (
        <div className='w-full grid grid-cols-10'>

            <div className='col-span-9 flex flex-row'>
                <Image src={'/images/logo.png'} alt='logo' width={100} height={100} />
                {/* <p className='text-white font-extrabold  mt-10'>Vision Is Primary</p> */}
                <Link href={"#about"}><p className='text-white font-extrabold  mt-10 mx-2'>About</p></Link>
                <Link href={"#cases"}><p className='text-white font-extrabold  mt-10  mx-2'>Use Cases</p></Link>
                <Link href={"#portfolio"}><p className='text-white font-extrabold  mt-10  mx-2'>Portfolio</p></Link>
                <Link href={"#testimonials"}><p className='text-white font-extrabold  mt-10  mx-2'>Testimonials</p></Link>

            </div>
            <div className='col-span-1 mt-10'>
                <Link href={contactLink}><p className='text-white font-extrabold'>Contact us</p></Link>

            </div>




        </div>
    )
}

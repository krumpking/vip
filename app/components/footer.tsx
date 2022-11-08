import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Button from './button'


export default function Footer() {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 p-8">
            <div className='flex flex-col'>
                <img src={"/images/logo.png"} className="w-24 h-24 my-2" />
                <p className="text-white text-sm my-2">© 2022 Vision Is Primary</p>
                <p className="text-white text-sm my-2"> All Rights Reserved</p>

            </div>
            <div>
                <p className='text-xl font-bold text-white'>Quick Links</p>
                <Link href="#about"><p className="text-white">About</p></Link>
                <Link href="#cases"><p className="text-white">Use Cases</p></Link>
                <Link href="#portfolio"><p className="text-white">Portfolio</p></Link>
                <Link href="#testimonials"><p className="text-white">Testimonials</p></Link>
                {/* <Link><p>Social Media</p></Link> */}
            </div>
            <div>
                <p className='text-xl font-bold text-white'>Social Media</p>
                <Link href="https://www.facebook.com/visionisprimary"><p className="text-white">Facebook</p></Link>
                <Link href="https://www.twitter.com/visionisprimary"><p className="text-white">Twitter</p></Link>
                <Link href="https://www.instagram.com/visionisprimary"><p className="text-white">Instagram</p></Link>
                <Link href="https://www.linkedIn.com/company/vision-is-primary"><p className="text-white">LinkedIn</p></Link>
            </div>
            <div>
                <p className='text-xl font-bold text-white'>Visionary Stories</p>
                <Link href="https://allaboutstevejobs.com/bio/short_bio"><p className="text-white">Steve Jobs</p></Link>
                <Link href="https://www.forbes.com/profile/strive-masiyiwa/?sh=36c65fd2547b"><p className="text-white">Strive Masiyiwa</p></Link>
                {/* <Link href="https://www.instagram.com/visionisprimary"><p className="text-white"></p></Link>
                <Link href="https://www.linkedIn.com/company/vision-is-primary"><p className="text-white">LinkedIn</p></Link> */}
            </div>

        </div>
    )
}

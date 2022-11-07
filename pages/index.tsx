import Head from 'next/head'
import Image from 'next/image'
import { useCallback, useEffect, useState } from 'react'
import About from '../app/components/about'
import Button from '../app/components/button'
import Carousel from '../app/components/carousel'
import Cases from '../app/components/case'
import Footer from '../app/components/footer'
import Header from '../app/components/header'
import Nav from '../app/components/nav'
import Portfolio from '../app/components/portfolio'
import SecondaryButton from '../app/components/secondaryButton'
import Testimonials from '../app/components/testimonials'
import Trusted from '../app/components/trusted'
import SecondaryTrusted from '../app/components/trustedsec'
import { contactLink } from '../app/utilities/constants'


export default function Home() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    //add eventlistener to window
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    }
  }, [])




  const onScroll = useCallback(() => {
    const { pageYOffset, scrollY } = window;

    setScrollY(window.pageYOffset);
  }, []);



  return (
    <div className='relative bg-black'>
      <div>
        <Header>
          <div className='flex flex-col'>
            <Nav />
            <div className='grid grid-cols-10'>
              <div className='col-span-4 flex flex-col m-4'>
                <h1 className='text-white text-7xl font-extrabold m-8 w-full'>Vision Is Primary</h1>
                <p className='text-white text-lg mt-8 ml-8 mr-8'>After Lot had gone, the LORD said to Abram, “Look as far as you can see in every direction—north and south, east and west.</p>
                <p className='text-white text-md ml-8 mr-8'>Genesis 13:14</p>
                <p className='text-white text-lg mt-8 ml-8 mr-8'>At Vision Is Primary we do not just make websites or applications or systems. We make <span className='text-yellow-400'>ART</span>, as far as your eyes can see, we can bring it into reality</p>
                <div className='mt-8 ml-8 mr-8 flex flex-row justify-start'>
                  <Button text="Contact Us" link={contactLink} />
                  <SecondaryButton text="See more" link="#portfolio" />
                </div>
              </div>
              <div className='col-span-6 w-full'>
                <Carousel />
              </div>

            </div>
            <Trusted />


          </div>

        </Header>
        <div className='flex flex-col bg-black-metal bg-cover'>
          <section id="about">
            {scrollY > 8 ? <About
              title={"Over 5 years of solving problems using software"}
              brief={"How far can you see? How much is your unique identity expressed through your systems? This is what we specilise in! Bringing your unique Vision to reality"}
              phrase={"We craft meaningful interactions via animations that play an important role in capturing the visitor’s attention and retention in using your Website or Mobile Application."}
            /> : <p></p>}
          </section>
          <section id="cases">
            {scrollY > 700 ?
              <Cases /> : <p></p>}
          </section>
          <section id="portfolio">
            {scrollY > 1500 ?
              <Portfolio /> : <p></p>}5

          </section>
          <section id="testimonials">
            {scrollY > 2200 ?
              <Testimonials /> : <p></p>}

          </section>
          {scrollY > 2900 ?
            <SecondaryTrusted /> : <p></p>}

          <Footer />



        </div>


      </div>
      <a href={contactLink}>
        <p className='text-black fixed top-100  right-10 h-16 w-16'>{scrollY}</p>
        <img src='/images/whatsapp.png' className={'animate-bounce fixed bottom-20  right-10 h-16 w-16'} />
      </a>

    </div>


  )
}


import Link from 'next/link'
import { useCallback, useEffect, useState } from 'react'
import Button from '../app/components/button'
import Carousel from '../app/components/carousel'
import Cases from '../app/components/case'
import Footer from '../app/components/footer'
import Header from '../app/components/header'
import How from '../app/components/how'
import Nav from '../app/components/nav'
import Portfolio from '../app/components/portfolio'
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
      <div className="grid grid-cols-1 h-fit">
        <Header>
          <div className='flex flex-col'>
            <Nav />
            <div className='grid grid-cols-1 afterMini:grid-cols-10'>
              <div className='col-span-4 lg:col-span-5  lg:p-0 flex flex-col m-4 bg-black-metal bg-cover border rounded-lg   afterMini:bg-none afterMini:border-none p-4'>
                <h1 className='text-white xxs:text-2xl xs:text-3xl font-extrabold m-8 w-full'>Automation could you save more than <span className='text-yellow-500'>20 hours</span> a week!</h1>
                <p className='text-white text-lg mt-8 ml-8 mr-8'>We help organizations increase the return on their time by crafting and implementing their <span className='text-yellow-500'>Digital Strategy</span></p>

                <p className='text-white text-lg mt-8 ml-8 mr-8'>We use a set of tools that help you automate routine business activities, streamline your workflows, and improve the efficiency of your business processes.</p>

                <p className='text-white text-lg mt-8 ml-8 mr-8'> We also help build custom software for your business, like a website, mobile app, and desktop app, to help achieve the goals of your business</p>
                <div className='mt-8 ml-8 mr-8 flex flex-row justify-start'>
                  <Button text="Contact Us" link={contactLink} />
                  <Link href="#portfolio"><p className="m-2 text-white">See more</p></Link>

                </div>
              </div>
              <div className='col-span-6 lg:col-span-5 w-full'>
                <Carousel />
              </div>

            </div>
            <Trusted />


          </div>

        </Header>
        <div className='flex flex-col space-y-4 bg-black-metal bg-cover'>
          <section id="how">
            {scrollY > 8 ? <How /> : <p></p>}
          </section>
          <section id="cases">
            {scrollY > 8 ?
              <Cases /> : <p></p>}
          </section>
          <section id="portfolio">
            {scrollY > 700 ?
              <Portfolio /> : <p></p>}

          </section>

          <section id="testimonials">
            {scrollY > 1500 ?
              <Testimonials /> : <p></p>}

          </section>
          <section>
            {scrollY > 2200 ?
              <SecondaryTrusted /> : <p></p>}
          </section>


          <Footer />



        </div>


      </div >
      <a href={contactLink}>
        <img src='/images/whatsapp.png' className={'animate-bounce fixed bottom-20  right-10 h-16 w-16'} />
      </a>

    </div >


  )
}

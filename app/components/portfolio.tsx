import Head from 'next/head'
import Image from 'next/image'
import { animated, Transition } from 'react-spring'
import PortfolioCard from './portfolioCard'

const projects = [
    {
        video: "/videos/bishopsmount.webm",
        brief: "Bishops Mount Centre",

    },
    {
        video: "/videos/africamining.webm",
        brief: "Africa Mining",

    },
    {
        video: "/videos/fundo.webm",
        brief: "Fundo E-learning",

    },
    {
        video: "/videos/eventit.webm",
        brief: "Eventit",

    },

]

const mobileProjects = [
    {
        video: "/videos/chatapp.mp4",
        brief: "Chat App",

    },
    {
        video: "/videos/shoe.mp4",
        brief: "Shopping App",

    },
    {
        video: "/videos/wa.mp4",
        brief: "Whatsapp Chatbot",

    },
    {
        video: "/videos/fb.mp4",
        brief: "Facebook Chatbot",

    },
]


export default function Portfolio() {
    return (
        <div className='m-8'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 m-4 p-4'>
                <h1 className='text-white text-3xl font-extrabold'>
                    Check out our Portolio
                </h1>
                <div className='w-fit '>
                    <p className='text-white text-md font-bold'>
                        Vision sets you free from the limitations of the eyes can see and allows you to enter the liberty of what the heart can feel
                    </p>
                    <p className='text-white text-md font-bold'>
                        It is Vision that makes the unseen visible and the unknown possible
                    </p>
                </div>

            </div>


            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 m-4 place-items-center'>
                {projects.map((v, index) => {
                    return (
                        <Transition
                            items={projects[index]}
                            from={{ opacity: 0, transform: "translate3d(0px,35px,0px)" }}
                            enter={{ opacity: 1, transform: "translate3d(0px,-15px,0px)" }}
                            leave={{ opacity: 0, transform: "translate3d(0px,-15px,0px)" }}
                            reverse={false}
                            delay={600 + (index * 100)}
                        >
                            {(styles, v) =>
                                <animated.div style={styles}>
                                    <PortfolioCard
                                        website={true}
                                        video={v.video}
                                        brief={v.brief} />
                                </animated.div>
                            }
                        </Transition>
                    )
                })}


            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 m-4 place-items-center'>
                {mobileProjects.map((v, index) => {
                    return (
                        <Transition
                            items={mobileProjects[index]}
                            from={{ opacity: 0, transform: "translate3d(0px,35px,0px)" }}
                            enter={{ opacity: 1, transform: "translate3d(0px,-15px,0px)" }}
                            leave={{ opacity: 0, transform: "translate3d(0px,-15px,0px)" }}
                            reverse={false}
                            delay={600 + (index * 100)}
                        >
                            {(styles, v) =>
                                <animated.div style={styles}>
                                    <PortfolioCard
                                        website={false}
                                        video={v.video}
                                        brief={v.brief} />
                                </animated.div>
                            }
                        </Transition>
                    )
                })}
            </div>



        </div>
    )
}

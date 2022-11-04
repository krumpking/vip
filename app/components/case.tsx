import React, { FC } from 'react'
import { Transition, animated } from "react-spring"
import { contactLink } from '../utilities/constants'
import Button from './button'


const useCases = [
    {
        "case": "E-commerce",
        "description": "You can set up your shop to work completely online, with payments and everything set up online.",
        "platfroms": [
            {
                title: "Whatsapp",
                details: "We can create a chatbot E-commerce connected to your Whatsapp number"
            },
            {
                title: "Mobile Application",
                details: "We can create a mobile application both iOS and Android E-commerce"
            },
            { title: "Web Application", details: "We can create a website E-commerce accessible through your domain" },
            { title: "Facebook", details: "We can create a Facebook chatbot E-commerce connected to your Facebook page" }
        ],
    },
    {
        "case": "Business",
        "description": "You can create a platform your uploading reports, and the info automatically collated for quicker reporting and thus decision making",
        "platfroms": [
            {
                title: "Whatsapp",
                details: "The platform can run via Whatsapp number with reports being published as CSV file"
            },
            {
                title: "Mobile Application",
                details: "A group of mobile applications that can work together to collect and display all in house communication"
            },
            { title: "Web Application", details: "We can create a website with an upload portal for all reports and displayed only to selected people" },
            { title: "Facebook", details: "We can create a Facebook chatbot to upload the data connected to your Facebook page" }
        ],
    },
    {
        "case": "Education",
        "description": "Building a online learning platform, either teachers uploading videos, or having one on one classes with digital tools",
        "platfroms": [
            {
                title: "Whatsapp",
                details: "We can create a chatbot for students to consume lessons and also to get tested on selected subjects"
            },
            {
                title: "Mobile Application",
                details: "We can create a mobile application both iOS and Android E-commerce"
            },
            { title: "Web Application", details: "We can create a website E-commerce accessible through your domain" },
            { title: "Facebook", details: "We can create a Facebook chatbot E-commerce connected to your Facebook page" }
        ],
    },
    {
        "case": "Transport",
        "description": "You can create an application to track your logistics company perfomance",
        "platfroms": [
            {
                title: "Whatsapp",
                details: "We can create a chatbot using a ticket system to check how drivers are working, and even for clients to book for your services"
            },
            {
                title: "Mobile Application",
                details: "A mobile application can work with location services to track driver behavior and to also help connect with clients"
            },
            { title: "Web Application", details: "A website can work as a dashboard to display all the data from the platform" },
        ],
    },
    {
        "case": "Insurence",
        "description": "You can set up a platform to see all the client premiums.The payouts done and expect, maturity stage all at your finger tips",
        "platfroms": [
            {
                title: "Whatsapp",
                details: "Automatic response to your clients to get information on their premiums, and to even pay their subscriptions"
            },
            {
                title: "Mobile Application",
                details: "We can create an application to register clients and help them track their payments"
            },
            { title: "Web Application", details: "We can create a website to display all the data from all the clients and to be able to print the reports, and export to excel and other document types. Messaging and communication can also be done from the dashboard" },

        ],
    },
]



const Cases = () => {


    return (
        <div className='flex flex-col h-screen items-center bgimg bg-cover m-4'>
            <Transition
                items={true}
                from={{ opacity: 0 }}
                enter={{ opacity: 1 }}
                leave={{ opacity: 0 }}
                reverse={false}
                delay={700}
            >
                {(styles, item) =>
                    item && <animated.div style={styles}>
                        <h1 className='m-8 font-extrabold text-5xl text-white justify-items-center'>What do you see?</h1>

                    </animated.div>
                }
            </Transition>
            <Transition
                items={true}
                from={{ opacity: 0 }}
                enter={{ opacity: 1 }}
                leave={{ opacity: 0 }}
                reverse={false}
                delay={800}
            >
                {(styles, item) =>
                    item && <animated.div style={styles}>
                        <p className='m-8  text-white items-center text-center '> At Vision Is Primary we see software as an ART.We believe software done well can express your identity.We now live in a digital world!!!You can STAND OUT by having software that carries your unique identity.Software can help reach more customers and leave an impression on them that will last a lifetime.We also love that software can help automate your daily tasks, help reduce your overheads, which is part of your thrust</p>

                    </animated.div>
                }
            </Transition>
            <Transition
                items={true}
                from={{ opacity: 0 }}
                enter={{ opacity: 1 }}
                leave={{ opacity: 0 }}
                reverse={false}
                delay={900}
            >
                {(styles, item) =>
                    item && <animated.div style={styles}>
                        <p className='text-white'>Some intersting Use Cases</p>

                    </animated.div>
                }
            </Transition>

            <div className='h-screen grid grid-cols-5'>
                {useCases.map((v, index) => {
                    return (
                        <Transition
                            items={useCases[index]}
                            from={{ opacity: 0, transform: "translate3d(0px,35px,0px)" }}
                            enter={{ opacity: 1, transform: "translate3d(0px,-15px,0px)" }}
                            leave={{ opacity: 0, transform: "translate3d(0px,-15px,0px)" }}
                            reverse={false}
                            delay={600 + (index * 100)}
                        >
                            {(styles, v) =>
                                <animated.div style={styles}>
                                    <div className='relative bg-gold-metal px-6 pt-10 pb-8 shadow-xl ring-1 ring-yellow-400 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10 min-w-fit h-fit m-4'>
                                        <h1 className="text-3xl m-2">{v.case}</h1>
                                        <p className="text-sm text-center m-2">{v.description}</p>
                                        <p className="text-sm ">Platorms of choice:</p>
                                        <div>
                                            {v.platfroms.map((r, index) => {
                                                return (
                                                    <details className="text-sm ">
                                                        <summary> {r.title}   </summary>
                                                        <p>{r.details}</p>
                                                    </details>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </animated.div>
                            }
                        </Transition>
                    )
                })}





            </div>
            <p className='text-white m-4'>As far as your eyes can see</p>
            <Button text="Whatsapp Us" link={contactLink} />
        </div >

    )
}

export default Cases

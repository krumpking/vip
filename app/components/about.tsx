import { FC } from "react"
import { Transition, animated } from "react-spring"
import { contactLink } from "../utilities/constants"
import Button from "./button"
import Deck from "./deck"



interface AboutProps {
    title: string,
    brief: string
    phrase: string
}



const About: FC<AboutProps> = ({ title, brief, phrase }): JSX.Element => {


    return (
        <div className='grid grid-cols-2 space-x-4 p-4'>
            <div className='p-32'>
                <Deck />
            </div>

            <div className='m-auto p-32 ease-in duration-300 '>
                <Transition
                    items={true}
                    from={{ opacity: 0 }}
                    enter={{ opacity: 1 }}
                    leave={{ opacity: 0 }}
                    reverse={false}
                    delay={600}
                >
                    {(styles, item) =>
                        item && <animated.div style={styles}>
                            <p className='text-yellow-400 text-sm font-extrabold m-8 w-full'>{'As far as your eyes can see!'}</p>

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
                            <p className='text-white text-3xl font-extrabold m-8 w-full'>{title}</p>

                        </animated.div>
                    }
                </Transition>
                <Transition
                    items={true}
                    from={{ opacity: 0 }}
                    enter={{ opacity: 1 }}
                    leave={{ opacity: 0 }}
                    reverse={false}
                    delay={1000}
                >
                    {(styles, item) =>
                        item && <animated.div style={styles}>
                            <p className='text-white text-md font-extrabold m-8 w-full'>{brief}</p>

                        </animated.div>
                    }
                </Transition>
                <Transition
                    items={true}
                    from={{ opacity: 0 }}
                    enter={{ opacity: 1 }}
                    leave={{ opacity: 0 }}
                    reverse={false}
                    delay={1200}
                >
                    {(styles, item) =>
                        item && <animated.div style={styles}>
                            <p className='text-white text-md font-extrabold m-8 w-full'>{phrase}</p>

                        </animated.div>
                    }
                </Transition>
                <Transition
                    items={true}
                    from={{ opacity: 0 }}
                    enter={{ opacity: 1 }}
                    leave={{ opacity: 0 }}
                    reverse={false}
                    delay={1400}
                >
                    {(styles, item) =>
                        item && <animated.div style={styles}>
                            <Button text="Whatsapp Us" link={contactLink} />

                        </animated.div>
                    }
                </Transition>





            </div>


        </div>
    )
}


export default About


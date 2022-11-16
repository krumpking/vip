import { FC } from "react"
import { Transition, animated } from "react-spring"
import { contactLink } from "../utilities/constants"
import Button from "./button"
import Deck from "./deck"
import How from "./how"



interface AboutProps {
    title: string,
    brief: string
    phrase: string
}



const About: FC<AboutProps> = ({ title, brief, phrase }): JSX.Element => {


    return (
        <div className='grid grid-cols-1 xxs:mt-96 xxs:pt-96 lg:grid-cols-2 xxsMD:mt-56 xxsMD:pt-56 space-x-4 md:p-4 pt-96 xs:mt-64 xs:pt-0 xsMD:pt-0 xsMD:mt-34 smXS:mt-96 sm:mt-56 sm:pt-56 md:mt-4 md:pt-0'>
            <div className='m-4 p-2 md:p-32 md:m-0 xxs:mt-20 sm:mt-0' >
                <How />
            </div>

            <div className='m-auto p-0 md:p-32 xxs:mt-96  xs:mt-96  md:mt-48 lg:mt-0'>
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
                            <p className='text-yellow-400 text-sm font-extrabold m-2 md:m-8 w-fit'>{'As far as your eyes can see!'}</p>

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
                            <p className='text-white text-xl xsMD:text-3xl font-extrabold m-0 md:m-8 w-full'>{title}</p>

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
                            <p className='text-white text-sm xsMD:text-md font-extrabold m-0 md:m-8 w-full'>{brief}</p>

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
                            <p className='text-white text-sm xsMD:text-md font-extrabold m-0  md:m-8 w-full'>{phrase}</p>

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


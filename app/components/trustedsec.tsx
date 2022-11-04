import { animated, Transition } from "react-spring"

const trustedOne = [{}]



export default function SecondaryTrusted() {
    return (
        <>
            {
                trustedOne.map((v, index) => {
                    return (
                        <Transition
                            items={trustedOne[index]}
                            from={{ opacity: 0, transform: "translate3d(0px,35px,0px)" }}
                            enter={{ opacity: 1, transform: "translate3d(0px,-15px,0px)" }}
                            leave={{ opacity: 0 }}
                            reverse={false}
                            delay={600 + (index * 100)}
                        >
                            {(styles, v) =>
                                <animated.div style={styles}>
                                    <div className='flex flex-col bg-black-metal bg-cover p-4 my-4'>
                                        <div className='m-auto'>
                                            <p className='text-slate-50 text-xs font-extrabold'>AS TRUSTED BY</p>
                                        </div>
                                        <div className='m-auto '>
                                            <img src={'./images/trustedTwo.png'} />
                                        </div>

                                    </div>
                                </animated.div>

                            }
                        </Transition>
                    )
                })
            }
        </>


    )
}
import Head from 'next/head'
import Image from 'next/image'
import { animated, Transition } from 'react-spring'
import TestimonialCard from './testimonialCard'

const testimonials = [
    {
        image: 'https://picsum.photos/500/300?random=1',
        name: 'Fadzi',
        comment: 'Always excellent delivery of project, on time and always so cordial',
        contact: '+263773363139'
    },
    {
        image: 'https://picsum.photos/500/300?random=1',
        name: 'Fadzi',
        comment: 'Always excellent delivery of project, on time and always so cordial',
        contact: '+263773363139'
    },
    {
        image: 'https://picsum.photos/500/300?random=1',
        name: 'Fadzi',
        comment: 'Always excellent delivery of project, on time and always so cordial',
        contact: '+263773363139'
    },
    {
        image: 'https://picsum.photos/500/300?random=1',
        name: 'Fadzi',
        comment: 'Always excellent delivery of project, on time and always so cordial',
        contact: '+263773363139'
    },
    {
        image: 'https://picsum.photos/500/300?random=1',
        name: 'Fadzi',
        comment: 'Always excellent delivery of project, on time and always so cordial',
        contact: '+263773363139'
    },
]

export default function Testimonials() {
    return (
        <div>
            <div className='grid grid-cols-2 gap-4 m-8 p-4'>
                <h1 className='text-white text-3xl font-extrabold'>
                    What others say about us
                </h1>
                <div className='w-fit '>
                    <p className='text-white text-md font-bold'>
                        Vision is like a fingerprint, there is no identical no matter how closely matches it might look. We can bring out your unique Vision
                    </p>
                    <p className='text-white text-md font-bold'>
                        Why fit in, when you were meant to stand out?
                    </p>
                </div>

            </div>
            <div className='grid grid-cols-5 gap-2 m-4 place-items-center p-4'>
                {testimonials.map((v, index) => {
                    return (
                        <Transition
                            items={testimonials[index]}
                            from={{ opacity: 0, transform: "translate3d(0px,35px,0px)" }}
                            enter={{ opacity: 1, transform: "translate3d(0px,-15px,0px)" }}
                            leave={{ opacity: 0, transform: "translate3d(0px,-15px,0px)" }}
                            reverse={false}
                            delay={600 + (index * 100)}
                        >
                            {(styles, v) =>
                                <animated.div style={styles}>
                                    <TestimonialCard image={v.image} name={v.name} comment={v.comment} contact={v.contact} />
                                </animated.div>
                            }
                        </Transition>
                    )
                })}

            </div>
        </div>

    )
}

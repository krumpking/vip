import Head from 'next/head'
import Image from 'next/image'
import { animated, Transition } from 'react-spring'
import TestimonialCard from './testimonialCard'

const testimonials = [
    {
        image: '/images/joe.jpeg',
        comment: 'Have seen his work from the time we met 5 years ago, and it keeps getting better and better',
        contact: '263774326905'
    },
    {
        image: '/images/audy.jpg',
        comment: 'Ever so realiable, and timely in delivering on agreed milestones',
        contact: '263774407784'
    },
    {
        image: '/images/domi.jpg',
        comment: 'Always quick to catch the Vision and run with it!! I am impressed',
        contact: '263774326905'
    },
    {
        image: '/images/ashy.jpg',
        comment: 'Excellent delivery and capturing the brand image',
        contact: '263774326905'
    }

]

export default function Testimonials() {
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 m-8 p-4'>
                <h1 className='text-white text-3xl font-extrabold'>
                    What others say about us
                </h1>
                <div className='w-fit '>
                    <p className='text-white text-md font-bold'>
                        Vision is like a fingerprint, there is no identical no matter how closely matches it might look. We can bring out your unique Vision
                    </p>
                </div>

            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 mini:grid-cols-2 afterMini:grid-cols-4  gap-2 place-items-center'>
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
                                <animated.div style={styles} className="m-0">
                                    <TestimonialCard image={v.image} comment={v.comment} />
                                </animated.div>
                            }
                        </Transition>
                    )
                })}

            </div>
        </div>

    )
}

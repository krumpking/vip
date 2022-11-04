import { FC } from "react"
import React, { useState } from 'react'
import { useSprings, animated, interpolate } from 'react-spring'
import { useGesture } from 'react-use-gesture'
// import './styles.css'

const cards = [
    'https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849825_960_720.jpg',
    'https://cdn.pixabay.com/photo/2018/03/27/21/43/startup-3267505__340.jpg',
    'https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849825_960_720.jpg',
    'https://cdn.pixabay.com/photo/2018/03/27/21/43/startup-3267505__340.jpg',
    'https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849825_960_720.jpg',
    'https://cdn.pixabay.com/photo/2018/03/27/21/43/startup-3267505__340.jpg',
    'https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849825_960_720.jpg'
]

// These two are just helpers, they curate spring data, values that are later being interpolated into css
const to = (i: number) => ({ x: 0, y: i * -4, scale: 1, rot: -10 + Math.random() * 20, delay: i * 100 })
const from = () => ({ x: 0, rot: 0, scale: 1.5, y: -6000 })
// This is being used down there in the view, it interpolates rotation and scale into a css transform
const trans = (r: number, s: any) => `perspective(1500px) rotateX(30deg) rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`


const Deck = () => {

    const [gone] = useState(() => new Set()) // The set flags all the cards that are flicked out
    const [props, set] = useSprings(cards.length, i => ({ ...to(i), from: from() })) // Create a bunch of springs using the helpers above
    // Create a gesture, we're interested in down-state, delta (current-pos - click-pos), direction and velocity

    // Now we're just mapping the animated values to our view, that's it. Btw, this component only renders once. :-)
    return (<div>
        {props.map(({ x, y, rot, scale }, i) => (
            <animated.div
                className='  absolute justify-items-center p-8'
                key={i}
                style={{ transform: interpolate([x, y], (x, y) => `translate3d(${x}px,${y}px,0)`) }}>
                {/* This is the card itself, we're binding our gesture to it (and inject its index so we know which is which) */}
                <animated.div
                    className='w-96 h-96'
                    style={{ transform: interpolate([rot, scale], trans), backgroundImage: `url(${cards[i]})` }} />
            </animated.div>
        ))}
    </div>
    )

}


export default Deck




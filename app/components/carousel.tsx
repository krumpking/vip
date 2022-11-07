import Image from "next/image";
import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { useTransition, animated, useSpring } from "react-spring";

const data = [
    {
        id: 0,
        title: "First title",
        image: '/gifs/movie.gif'
    },
    {
        id: 1,
        title: "Second title",
        image: '/gifs/wave.gif'
    },
    {
        id: 2,
        title: "Third title",
        image: '/gifs/shereigns.gif'
    },

    {
        id: 3,
        title: "Fourth title",
        image: '/gifs/houseofkenzolla.gif'
    },
    {
        id: 4,
        title: "Second title",
        image: '/gifs/shopping.gif'
    },
];

const Carousel = (props: any) => {
    const [active, setActive] = useState(0);
    const [styles, animate] = useSpring(() => ({ x: 0 }))

    useEffect(() => {
        const timer = setTimeout(() => {
            moveNext()
        }, 5000);
        return () => {
            clearTimeout(timer);
        }
    }, [active])



    const transitions = useTransition([active], {
        from: { opacity: 0, display: "none" },
        enter: { opacity: 1, display: "block" },
        leave: { opacity: 0, display: "none" },
        item: (item: any) => item
    });

    const moveNext = useCallback(() => {

        if (active !== 4) setActive(active + 1);
        else setActive(0);

    }, [active]);






    return (
        <div className="h-fit relative">
            <div className="w-fit mx-auto flex flex-row" >
                {transitions((style, item) => (
                    <animated.div style={style}>
                        <>
                            <animated.div
                                style={{
                                    ...styles,
                                }}
                            >
                                <div className='border-8 border-white rounded-md border-opacity-40 shadow-2xl'>
                                    <img src={data[item]?.image} className='max-h-96' />
                                </div>

                            </animated.div>


                        </>

                    </animated.div>
                ))}

            </div>
        </div>
    );
};

export default Carousel;

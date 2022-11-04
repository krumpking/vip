import { Animation } from "react-scroll-motion";

const ScrollIn = (scrollNo: number) =>
({
    in: {
        style: {
            transform: (p) => `translateY(${scrollNo})`,
        },
    },
    out: {
        style: {
            transform: (p) => `translateY(${scrollNo})`,
        },
    },
} as Animation);

export default ScrollIn
import { FC } from 'react'
import { useRouter } from 'next/router'


interface ButtonProps {
    text: string,
    link: string,
}


const ThirdButton: FC<ButtonProps> = ({ text, link }): JSX.Element => {
    const router = useRouter()

    const onClicked = (e: { preventDefault: () => void }) => {
        e.preventDefault()
        router.push({
            pathname: link,
        })
    }


    return (
        <button
            className="
            rounded-md
            px-2 
            py-3             
            md:block 
            text-yellow-400
            bg-black-metal
            bg-cover
            w-32
            mx-4
            flex
            flex-row"
            onClick={(e) => { onClicked(e) }}
        >
            {text}

        </button>
    )
}

export default ThirdButton
import { FC } from 'react'
import { useRouter } from 'next/router'


interface ButtonProps {
    text: string,
    link: string
}

const Button: FC<ButtonProps> = ({ text, link }): JSX.Element => {
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
            hidden 
            md:block 
            bg-gradient-to-r 
            from-yellow-300 
            via-white 
            to-yellow-300
            w-48
            mx-4"
            onClick={(e) => { onClicked(e) }}>
            {text}

        </button>
    )
}

export default Button
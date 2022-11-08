import React, { FC } from 'react'

interface MyProps {
    children: JSX.Element,
}

const Header: FC<MyProps> = ({ children }) => {
    return (
        <div className='h-fit'>
            <div className='relative h-fit'>
                <div className='h-screen grid grid-cols-10 w-full'>

                    <div className='col-span-6 bg-cover bg-black-metal'>

                    </div>
                    <div className='col-span-4 bg-cover bg-gold-metal'>

                    </div>


                </div>
                <div className='absolute top-0 left-0 right-0 p-4'>
                    {children}
                </div>

            </div>
        </div>





    )
}

export default Header

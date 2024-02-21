import React from 'react'
import  Moth  from '../assets/svg/moth.svg'

export default function Loader() {
    return (
        <div className='h-screen w-full flex justify-center items-center'>
            <div className='animate__animated animate__fadeInRight animate__infinite animate__slow'>
                <Moth />
            </div>
        </div>
    )
}

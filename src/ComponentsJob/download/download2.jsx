import React from 'react'
import Background from '../../assets/img/removebg1 1.png'

export default function Download2() {
    return (
        <div className='w-[304px] h-[503px]'>
            <div className='download-job flex flex-col gap-8 items-center'>
                <div className='flex flex-col px-4 mt-[70px]'>
                    <h1 className='text-[48px] text-start font-bold mb-[21.33px] capitalize'>Post on Synergyy!</h1>
                    <p className='mini:text-[15.1px] text-[13px] font-medium capitalize text-center lg:text-start'>Show your business to the world</p>
                </div>
                <div className='flex-1'>
                    <img src={Background} alt='synergyy background' className='rounded-bl-[10px] rounded-br-[10px] w-full h-full object-contain' />
                </div>
            </div>
        </div>
    )
}

import React from 'react'
import  Quote  from '../../assets/svg/quote.svg'

export default function Successtart({ testimony, name, image, job }) {
    return (
        <div className='flex flex-col-reverse success-box justify-center mt-[131px]'>
            <div className='flex border-right py-8 px-[29px]'>
                <img src={Quote}   className='w-[124px] h-[45px] -mt-3'/>
                <div className='flex flex-col gap-[15px]'>
                    <p className='text-justify text-[12.75px] leading-[150%] font-medium text-white font-raleway'>{testimony}</p>
                </div>
            </div>
            <div className='mt-[50px] flex flex-col justify-center items-center'>
                <img src={image} alt='synergyy success' />
                <p className='mt-6 text-[19.5px] font-raleway font-semibold text-white opacity-[0.9]'>{name}</p>
                <p className='text-[17.8px] font-raleway text-green-150 text-justify'>{job}</p>
            </div>
        </div>
    )
}

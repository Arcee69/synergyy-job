import React from 'react'
import  Quote  from '../../assets/svg/quote.svg'
import  Rate  from '../../assets/svg/rate.svg'

export default function Slidebox({testimony, name, job, image}) {
    return (
        <div className='flex flex-col-reverse lg:flex-row success-box justify-center lg:ml-12 lg:mr-10 mb-[50px]'>
            <div className='flex lg:w-[50%] border-right lg:py-12 py-8 lg:px-[43px] px-[29px]'>
                <img src={Quote} className='w-[124px] h-[45px] -mt-3'/>
                <div className='flex flex-col gap-[15px]'>
                    <p className='lg:text-[17px] text-[12.75px] leading-[150%] font-medium text-white font-raleway'>{testimony} </p>
                    <img src={Rate} className='self-center lg:self-start'/>
                </div>
            </div>
            <div className='lg:w-[50%] mt-[50px] lg:mt-0 flex flex-col justify-center items-center'>
                <img src={image} alt='synergyy success' />
                <p className='mt-6 text-[19.5px] font-raleway font-semibold text-white opacity-[0.9]'>{name}</p>
                <p className='text-[17.8px] font-raleway text-green-150 text-justify'>{job}</p>
            </div>
        </div>
    )
}

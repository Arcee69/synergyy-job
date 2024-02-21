import React from 'react'
import Quote from '../../assets/svg/quote.svg'
import Rate from '../../assets/svg/rate.svg'
// import  Quote  from '../../assets/svg/quote.svg'
// import  Rate  from '../../assets/svg/rate.svg'

export default function Slidebox2({testimony, name, job, image}) {
    return (
        <div className='flex flex-col mid:flex-row success-box justify-center mid:ml-12 mid:mr-10 mb-[50px]'>
            <div className='mid:w-[50%] mt-[50px] mid:mt-0 flex flex-col justify-center items-center'>
                <img src={image} alt='synergyy success' />
                <p className='mt-6 text-[19.5px] font-raleway font-semibold text-white opacity-[0.9]'>{name}</p>
                <p className='text-[17.8px] font-raleway text-green-150 text-justify'>{job}</p>
            </div>
            
            <div className='flex mid:w-[50%] border-right mid:py-12 py-8 mid:px-[43px] px-[29px]' style={{borderLeft:'1px solid rgba(186, 186, 186, 0.3)'}}>
                <img src={Quote} alt='quote' className='w-[124px] h-[45px] -mt-3'/>
                <div className='flex flex-col gap-[15px]'>
                    <p className='text-justify mid:text-[17px] text-[12.75px] leading-[150%] font-medium text-white font-raleway'>{testimony} </p>
                    <img src={Rate} alt='rate' className='self-center lg:self-start'/>
                </div>
            </div>

        </div>
    )
}

import React from 'react'
import  Quote  from '../../assets/svg/quote.svg'
import  Rate  from '../../assets/svg/rate.svg'
// import Quote from '../../assets/svg/quote.svg'
// import Rate from '../../assets/svg/rate.svg'


export default function Slidebox({testimony, name, job, image}) {
    return (
        <div className='flex flex-col-reverse mid:flex-row success-box justify-center mid:ml-12 mid:mr-10 mb-[50px]'>
            <div className='flex mid:w-[50%] border-right mid:py-12 py-8 mid:px-[43px] px-[29px]'>
                <img src={Quote}   />
                {/* <img src={Quote} alt='quote' className='w-[124px] h-[45px] -mt-3'/> */}
                <div className='flex flex-col gap-[15px]'>
                    <p className='mid:text-[17px] text-[12.75px] leading-[150%] font-medium text-white font-raleway'>{testimony} </p>
                    {/* <img src={Rate} alt='rate' className='self-center lg:self-start'/> */}
                    <img src={Rate} />
                </div>
            </div>
            <div className='mid:w-[50%] mt-[50px] mid:mt-0 flex flex-col justify-center items-center'>
                <img src={image} alt='synergyy success' />
                <p className='mt-6 text-[19.5px] font-raleway font-semibold text-white opacity-[0.9]'>{name}</p>
                <p className='text-[17.8px] font-raleway text-green-150 text-justify'>{job}</p>
            </div>
        </div>
    )
}

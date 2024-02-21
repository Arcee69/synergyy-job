import React from 'react'
import User from '../../assets/img/why.png'
import  Star  from '../../assets/svg/rates.svg'

export default function Swipe() {
    return (
        <div className='w-full lg:p-12 p-6 border border-background flex lg:gap-[47px] gap-[23.5px] rounded-[24px] items-center justify-center'>
            <div className='lg:w-[236px] w-[118px] lg:h-[236px] h-[118px]'>
                <img src={User} alt='why' />
            </div>
            <div className='flex-1'>
                <p className='lg:text-[20px] text-[10px] font-medium text-background font-raleway'>“Synergyy saves us money, It’s amazing.”</p>
                <div className='lg:mt-6 mt-3 flex gap-[6.4px]'>
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                </div>
                <div className='lg:mt-2 mt-1'>
                    <p className='lg:text-[19.5px] text-[9.75px] font-medium text-background font-raleway'>Folusho Joshua </p>
                    <p className='lg:text-[17.7px] text-[8.87px] text-background font-raleway'>Piggyvest, Nigeria </p>
                </div>
            </div>
        </div>
    )
}

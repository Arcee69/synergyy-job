import React from 'react'
import  Star  from '../../assets/svg/ant-design_star-filled.svg'

export default function PopularJob() {
    return (
        <div className='flex flex-col gap-6'>
            <div className='flex gap-[10px] items-center'>
                <Star />
                <p className='text-[20px] font-semibold text-[#CDDEE4]'>Handpicked for you</p>
            </div>
            <div className='flex flex-col gap-6'>
                hi
            </div>
        </div>
    )
}

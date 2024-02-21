import React from 'react'
import Onboards from '../ComponentsJob/onboards'
import CareerForm2 from '../ComponentsJob/forms/careerForm2'

export default function Career() {
    return (
        <Onboards returns='career' rate={'w-[11.11%]'}>
            <div className='w-full phone:px-0 px-5 flex flex-col phone:items-center gap-8'>
                <div className='flex flex-col phone:gap-[14.4px] gap-3'>
                    <h1 className='phone:text-[15.6px] text-[13px] font-semibold text-green-50 uppercase phone:text-center'>Career Path</h1>
                    <h1 className='font-semibold text-[#F9FAFB] phone:text-[28.8px] text-[24px]'>What is your desired job role?</h1>
                    <h2 className='text-[16px] text-[#BABABA]'>Get matched with opportunities that fit your future goals.</h2>
                </div>
                <CareerForm2 />
            </div>
        </Onboards>
    )
}

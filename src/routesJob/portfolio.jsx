import React from 'react'
import Onboards from '../ComponentsJob/onboards';
import PortfolioForm from '../ComponentsJob/forms/portfolioForm';

export default function Portfolio() {
    return (
        <Onboards full={true} rate={'w-[66.66%]'}>
            <div className='phone:px-0 px-5 flex flex-col phone:items-center gap-8 flex-1 w-full'>
                <div className='flex flex-col phone:gap-[14.4px] gap-3 phone:items-center'>
                    <h1 className='phone:text-[15.6px] text-[13px] font-semibold text-green-50 uppercase phone:text-center'>Additional documents</h1>
                    <h1 className='font-semibold text-[#F9FAFB] phone:text-[28.8px] text-[24px]'>Submit your resume</h1>
                    <p className='phone:text-[19.2px] text-[16px] text-[#BABABA]'>We’ll use this to find opportunities for you</p>
                </div>
                <PortfolioForm />
            </div>
        </Onboards>
    )
}
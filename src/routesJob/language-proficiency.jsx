import React from 'react'
import Onboards from '../ComponentsJob/onboards'
import AdditionalInfoForm2 from '../ComponentsJob/forms/additionalInfoForm2'

export default function LanguageProficiency() {
    return (
        <Onboards returns='career' rate={'w-[88.88%]'} full={true}>
            <div className='w-full phone:px-0 px-5 flex flex-col phone:items-center gap-8 flex-1'>
                <div className='flex flex-col phone:gap-[14.4px] gap-3'>
                    <h1 className='phone:text-[15.6px] text-[13px] font-semibold text-green-50 uppercase phone:text-center'>Additional information</h1>
                    <h1 className='font-semibold text-[#F9FAFB] phone:text-[28.8px] text-[24px]'>You’re almost done</h1>
                    <h2 className='text-[16px] text-[#BABABA]'>We need some more information</h2>
                </div>
                <AdditionalInfoForm2 />
            </div>
        </Onboards>
    )
}

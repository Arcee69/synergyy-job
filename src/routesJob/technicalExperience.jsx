import React, { useState } from 'react'
import Onboards from '../ComponentsJob/onboards'
import SkillBox from '../ComponentsJob/skills/skillBox';

export default function TechnicalExperience() {
    const [step, setStep] = useState(1);

    return (
        <Onboards full={true} rate={'w-[44.44%]'} step={step} width={true}>
            <div className='w-full phone:px-0 px-5 flex flex-col phone:items-center gap-8 flex-1'>
                <div className='flex flex-col phone:gap-[14.4px] gap-3'>
                    <h1 className='phone:text-[15.6px] text-[13px] font-semibold text-green-50 uppercase phone:text-center'>Skill Bank</h1>
                    <h1 className='font-semibold text-[#F9FAFB] phone:text-[28.8px] text-[24px] phone:text-center'>Add your technical skills, soft skills, and language proficiency</h1>
                    <p className='phone:text-[19.2px] text-[16px] text-[#BABABA] phone:text-center'>List the skills that set you apart in your field</p>
                </div>
                <SkillBox />
            </div>
        </Onboards>
    )
}
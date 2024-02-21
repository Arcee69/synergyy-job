import React from 'react'
import  Add  from '../../assets/svg/add.svg'
import Buttons from '../button'
import { useNavigate } from 'react-router-dom'
import WorkExperience from '../workExperience'

export default function WorkExperienceForm3({ setStep, data }) {
    const navigate = useNavigate()
    return (
        <div className='flex-1 flex flex-col phone:gap-[33.6px] gap-7 phone:w-[421px] w-full'>
            <div
                className="w-full border-[#334D57] bg-backgroundDark border-[1.2px] rounded-[4.8px] flex items-center h-10 sm:h-12 sm:px-[19.2px] px-4 text-[16px] text-[#CCD3D5]"
            >
                <p>Product Designer</p>
            </div>
            <p className='text-[#BABABA] phone:text-[19.2px] text-[16px]'>If you have any experience with this field, add it below</p>
            <WorkExperience data={data} />
            <div onClick={() => setStep(2)} className='cursor-pointer phone:w-[381.6px] w-full rounded-[28.8px] border-[1.2px] border-[#99A6AB] phone:py-[14.4px] py-3 phone:px-[57.6px] px-12 flex phone:gap-3 gap-[10px] items-center justify-center'>
                <p className='phone:text-[19.2px] text-[16px] font-medium text-[#99A6AB]'>Add experience</p>
                <Add />
            </div>

            <div className='pb-12 phone:mt-12 mt-[54px] flex w-full justify-center'>
                <Buttons functions={() => navigate('/onboarding/education-history')} text={'Next'} hoverColor={'#FBA599'} width={'318px'} color='#00141B' bgColor={'#FBA599'}/>
            </div>
        </div>
    )
}

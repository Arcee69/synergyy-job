import React from 'react'
import  Add  from '../../assets/svg/add.svg'
import Buttons from '../button';
import { useNavigate } from 'react-router-dom';

export default function EducationHistoryForm({ setStep }) {
    const navigate = useNavigate()
        
    return (
        <div className='flex-1 phone:mt-8 flex flex-col phone:gap-16 gap-[150px]'>
            <div onClick={() => setStep(2)} className='cursor-pointer phone:w-[381.6px] w-full rounded-[28.8px] border-[1.2px] border-[#99A6AB] phone:py-[14.4px] py-3 phone:px-[57.6px] px-12 flex phone:gap-3 gap-[10px] items-center justify-center'>
                <p className='phone:text-[19.2px] text-[16px] font-medium text-[#99A6AB]'>Add Education</p>
                <Add />
            </div>
            <div className='phone:mt-0 -mt-[150px] pb-12 flex-1 items-end phone:flex hidden w-full justify-center'>
                <Buttons functions={() => navigate('/onboarding/skills')} text={'Continue'} hoverColor={'#BABABA'} width={'318px'} color='#00141B' bgColor={'#BABABA'} />
            </div>
            <div className='phone:hidden pb-12 -mt-[150px] flex-1 items-end flex w-full justify-center'>
                <Buttons functions={() => navigate('/onboarding/skills')} text={'Next'} hoverColor={'#BABABA'} width={'318px'} color='#00141B' bgColor={'#BABABA'}/>
            </div>
        </div>
    )
}
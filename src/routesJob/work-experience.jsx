import React, { useState, useEffect } from 'react'
import Onboards from '../ComponentsJob/onboards'
import WorkExperienceForm from '../ComponentsJob/forms/workExperienceForm'
import  Arrow  from '../assets/svg/Arrow - Left.svg';
import WorkExperienceForm2 from '../ComponentsJob/forms/workExperienceForm2';
import WorkExperienceForm3 from '../ComponentsJob/forms/workExperienceForm3';
import axios from 'axios';
import { baseURL } from '../utils/baseURL';

export default function WorkExperience() {
    const accessToken = localStorage.getItem('access_token')
    const [step, setStep] = useState(1);
    const [workExperienceData, setWorkExperienceData] = useState([])

    useEffect(() => {
        fetchWorkExperience()
    }, [])
    
    const fetchWorkExperience = async () => {
        const response = await axios.get(`${baseURL}account/list_experience`, {
            headers: {Authorization: `Bearer ${accessToken}`,}
        });
        setWorkExperienceData(response.data.data)
    } 
    
    return (
        <Onboards full={true} rate={'w-[22.22%]'} step={step}>
            <div className='w-full phone:px-0 px-5 flex flex-col phone:items-center gap-8 flex-1'>
                <div className='flex flex-col phone:gap-[14.4px] gap-3'>
                    {step !== 2  && <h1 className='phone:text-[15.6px] text-[13px] font-semibold text-green-50 uppercase phone:text-center'>Career Path</h1>}
                    {step !== 2  && <h1 className='font-semibold text-[#F9FAFB] phone:text-[28.8px] text-[24px]'>Add your work experience</h1>}
                    {step === 2 && 
                        <div className='flex gap-[10px] items-center'>
                            <Arrow className='cursor-pointer' onClick={() => setStep(1)} />
                            <h1 className='font-semibold text-[#F9FAFB] phone:text-[28.8px] text-[24px]'>Add work experience</h1>
                        </div>
                    }
                </div>
                {step === 1 && (
                    workExperienceData.length > 0 ? (
                        <WorkExperienceForm3 setStep={setStep} data={workExperienceData}/>
                    ) : (
                        <WorkExperienceForm setStep={setStep} />
                    )
                )}
                {step === 2 && (
                    <WorkExperienceForm2 />
                )}
            </div>
        </Onboards>
    )
}

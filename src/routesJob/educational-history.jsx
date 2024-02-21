import React, { useState, useEffect } from 'react'
import  Arrow  from '../assets/svg/Arrow - Left.svg';
import Onboards from '../ComponentsJob/onboards';
import EducationHistoryForm from '../ComponentsJob/forms/educationHistoryForm';
import EducationHistoryForm2 from '../ComponentsJob/forms/educationHistoryForm2';
import EducationHistoryForm3 from '../ComponentsJob/forms/educationHistoryForm3';
import axios from 'axios';
import { baseURL } from '../utils/baseURL';

export default function EducationalHistory() {
    const accessToken = localStorage.getItem('access_token')
    const [step, setStep] = useState(1);
    const [educationExperienceData, setEducationExperienceData] = useState([])

    useEffect(() => {
        fetchEducationExperience()
    }, [])
    
    const fetchEducationExperience = async () => {
        const response = await axios.get(`${baseURL}account/list_education`, {
            headers: {Authorization: `Bearer ${accessToken}`,}
        });
        setEducationExperienceData(response.data.data)
    } 

    return (
        <Onboards full={true} rate={'w-[33.33%]'} step={step}>
            <div className='w-full phone:px-0 px-5 flex flex-col phone:items-center gap-8 flex-1'>
                <div className='flex flex-col phone:gap-[14.4px] gap-3 phone:items-center'>
                    {step !== 2  && <h1 className='phone:text-[15.6px] text-[13px] font-semibold text-green-50 uppercase phone:text-center'>Professional History</h1>}
                    {step !== 2  && <h1 className='font-semibold text-[#F9FAFB] phone:text-[28.8px] text-[24px]'>Add your education history</h1>}
                    {step === 2 && 
                        <div className='flex gap-[10px] items-center'>
                            <Arrow className='cursor-pointer' onClick={() => setStep(1)}/>
                            <h1 className='font-semibold text-[#F9FAFB] phone:text-[28.8px] text-[24px]'>Add Education</h1>
                        </div>
                    }
                    {step !== 2  && <p className='phone:text-[19.2px] text-[16px] text-[#BABABA]'>Add your educational history to let recruiters know more about you</p>}
                </div>
                {step === 1 && (
                    educationExperienceData.length > 0 ? (
                        <EducationHistoryForm3 setStep={setStep} data={educationExperienceData}/>
                    ) : (
                        <EducationHistoryForm setStep={setStep}/>
                    )
                )}
                {step === 2 && (
                    <EducationHistoryForm2 />
                )}
            </div>
        </Onboards>
    )
}

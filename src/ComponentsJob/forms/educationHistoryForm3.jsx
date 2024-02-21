import React from 'react'
import  Education  from '../../assets/svg/education.svg'
import  Trash  from '../../assets/svg/trash.svg'
import  Add  from '../../assets/svg/add.svg'
import Buttons from '../button'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { baseURL } from '../../utils/baseURL'
import { formatStartDate } from '../../libs/helperFunctions'

export default function EducationHistoryForm3({ setStep, data }) {
    const navigate = useNavigate()
    const accessToken = localStorage.getItem('access_token')

    const removeEducationExperience = async (id) => {
        const data = {
            education_id: id
        }
        try {
            const response = await axios.delete(`${baseURL}account/delete_education`, {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                },
                data: data
            });
    
            if (response.data.status ==='success') {
                window.location.reload();
            }
        } catch (error) {
            console.error(error, 'error removing experience')
        }
    }

    return (
        <div className='flex-1 flex flex-col phone:gap-[33.6px] gap-7 phone:w-[421px] w-full'>
            <p className='text-[13.2px] phone:mb-[14.4px] mb-3 text-[#BBD4DD]'>{data.length} experiences added</p>
            <div className='flex flex-col gap-[14.4px] max-h-[216px] overflow-y-scroll'> 
                {data.map((d) => {
                    return (
                        <div key={d.id} className='border-[0.902px] border-[#334D57] rounded-lg py-1 px-6 flex items-center justify-between'>
                            <Education />
                            <div className='flex flex-col gap-[6px] w-[60%]'>
                                <p className='font-medium text-white capitalize'>{d.school}</p>
                                <p className='text-[13px] text-[#EFF4F5] capitalize'>{d.degree}</p>
                                <p className='text-[11px] text-[#BBD4DD]'>{formatStartDate(d.start_date)} - {d.end_date ? formatStartDate(d.end_date) : 'Present'}</p>
                            </div>
                            <Trash className='cursor-pointer' onClick={() => removeEducationExperience(d.id)}/>
                        </div>
                    )
                })}
            </div>
            <div onClick={() => setStep(2)} className='cursor-pointer phone:w-[381.6px] w-full rounded-[28.8px] border-[1.2px] border-[#99A6AB] phone:py-[14.4px] py-3 phone:px-[57.6px] px-12 flex phone:gap-3 gap-[10px] items-center justify-center'>
                <p className='phone:text-[19.2px] text-[16px] font-medium text-[#99A6AB]'>Add Education</p>
                <Add />
            </div>

            <div className='pb-12 phone:mt-12 mt-[54px] flex w-full justify-center'>
                <Buttons functions={() => navigate('/onboarding/skills')} text={'Next'} hoverColor={'#FBA599'} width={'318px'} color='#00141B' bgColor={'#FBA599'}/>
            </div>
        </div>
    )
}
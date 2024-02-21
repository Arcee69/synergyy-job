import React from 'react'
import  Company  from '../assets/svg/company.svg'
import  Trash  from '../assets/svg/trash.svg'
import { formatStartDate } from '../libs/helperFunctions'
import { baseURL } from '../utils/baseURL'
import axios from 'axios'

export default function WorkExperience({ data }) {
    const accessToken = localStorage.getItem('access_token')

    const removeWorkExperience = async (id) => {
        const data = {
            experience_id: id
        }
        try {
            const response = await axios.delete(`${baseURL}account/delete_experience`, {
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
        <div className='phone:mt-[9.6px] mt-2'>
            <p className='text-[13.2px] phone:mb-[14.4px] mb-3 text-[#BBD4DD]'>{data.length} experiences added</p>
            <div className='flex flex-col gap-[14.4px] max-h-[216px] overflow-y-scroll'> 
                {data.map((d) => {
                    return (
                        <div key={d.id} className='border-[0.902px] border-[#334D57] rounded-lg py-1 px-6 flex items-center justify-between'>
                            <Company />
                            <div className='flex flex-col gap-[6px] w-[60%]'>
                                <p className='font-medium text-white capitalize'>{d.role}</p>
                                <p className='text-[13px] text-[#EFF4F5] capitalize'>{d.company}</p>
                                <p className='text-[11px] text-[#BBD4DD]'>{formatStartDate(d.start_date)} - {d.end_date ? formatStartDate(d.end_date) : 'Present'}</p>
                            </div>
                            <Trash className='cursor-pointer' onClick={() => removeWorkExperience(d.id)}/>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

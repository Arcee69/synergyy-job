import React from 'react'
import  Star  from '../../assets/svg/ant-design_star-filled.svg'
import  Ellipse  from '../../assets/svg/Ellipse 2764.svg'
import  Time  from '../../assets/svg/time-outline 1.svg'
import  Bookmark  from '../../assets/svg/Bookmark2.svg'
import { numberWithCommas, formatTimeDifference } from '../../libs/helperFunctions'

export default function SideJob({ drawer, setDrawer, info }) {
    return (
        <div>
            <div className='flex gap-[10px] items-center'>
                <Star />
                <p className='font-semibold sm:text-[15px] text-[14px] text-teal'>Similar Jobs</p>
            </div>
            <div className='sm:mt-[23.37px] mt-[18px] flex flex-col gap-4'>
                {info?.map((job) => {
                    return (
                        <div onClick={() =>(window.location.href = `/view-jobs/${job.id}`)} key={job?.id} className='items-center cursor-pointer py-5 px-3 border rounded-[10.83px] border-[#42B8BD] flex gap-3'>
                            {job?.company_logo && (
                                <div className='w-16'>
                                    <img src={job?.company_logo} alt='company' className='rounded-[7.22px] border-[0.902px] border-[#FE9730] w-full h-16 object-fill'/>
                                </div>
                            )}
                            <div className='flex flex-col gap-[2px] flex-1'>
                                <div className='flex gap-[5.41px] items-center -mt-4 justify-end'>
                                    <Time />
                                    <p className='sm:text-[12px] text-[10.5px] text-[#BBD4DD]'>{formatTimeDifference(job?.created_at)}</p>
                                </div>
                                <h2 className='font-semibold text-[13px] sm:text-[16px] capitalize'>{job?.title}</h2>
                                <p className='sm:text-[14px] text-[10.5px] capitalize text-green-50'>{job?.company}</p>
                                <div className='flex justify-between'>
                                    {job?.salary || job?.min_salary || job?.max_salary ? (
                                        <p className='capitalize sm:text-[13px] text-[10.5px] flex items-center text-teal'>{job?.location}<span className='mx-[5px]'><svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle id="Ellipse 2764" cx="2.30078" cy="2" r="1.5" fill="#D9D9D9"/>
                                        </svg></span>{job?.job_style?.name}<span className='mx-[5px]'><svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle id="Ellipse 2764" cx="2.30078" cy="2" r="1.5" fill="#D9D9D9"/>
</svg></span>{job?.currency?.sign}{numberWithCommas(job?.min_salary)} - {job?.currency?.sign}{numberWithCommas(job?.max_salary)}</p>
                                    ) : (
                                        <p className='capitalize sm:text-[13px] text-[10.5px] flex items-center text-teal'>{job?.location}<span className='mx-[5px]'><svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle id="Ellipse 2764" cx="2.30078" cy="2" r="1.5" fill="#D9D9D9"/>
                                        </svg></span>{job?.job_style?.name}</p>
                                    )}
                                    <Bookmark className='lg:hidden' />
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

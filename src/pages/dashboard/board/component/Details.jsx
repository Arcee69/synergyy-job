import React, { useEffect, useState } from 'react'
import { FaRegBookmark, FaRegStar  } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { Progress } from 'antd'
import { IoLocationOutline } from "react-icons/io5";
import { GoArrowUpRight } from "react-icons/go";
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Netflix from "../../../../assets/img/netflix.png"
import Miner from "../../../../assets/img/miner.png"
import Worker from "../../../../assets/img/worker.png"
import ModalPop from '../../../../components/modals/modalPop';
import Apply from './Apply';
import { getSingleJob } from '../../../../features/jobs/getSingleJobSlice';
import { Skeleton } from '@mui/material';

const Details = () => {
    const [openApply, setOpenApply] = useState(false)
    const [data, setData] = useState([])

    const { state } = useLocation();

    const dispatch = useDispatch()

    console.log(state, "state")

    const viewSingleJob = useSelector(state => state.viewSingleJob)
    const viewJob = viewSingleJob?.data?.data
    console.log(viewSingleJob, "viewSingleJob")

    const similarJobs = viewSingleJob?.data?.similar_jobs

    const id = state?.id 

    useEffect(() => {
        dispatch(getSingleJob(id))
    }, [state?.id])
    
    // const optionsArray = state?.description?.split('\n').map(option => {
    //     console.log(option, "vavavoom")
    //     const  better = option?.split('Requirements  ');
    //     console.log(better, "better")
    //     const [value, description] = option?.split('<br> ');
    //     return { value: parseInt(value), description };
    //   });
      
    //   console.log(optionsArray, "fast");


  return (
    <div className='flex justify-between'>
        <div className='w-full lg:w-[669px] flex flex-col gap-[32px]'>
            <div className='w-full lg:mt-[44px]'>
                <p className='text-[#000709] text-[24px] lg:text-[30px] font-semibold font-mont'>Job Posting</p>
            </div>
            <div className='w-full rounded-[8px] flex flex-col gap-[24px] border border-[#E3E7E8] bg-[#fff] px-5 py-[22px]'>
                <div className='flex justify-between '>
                    <img src={viewJob?.company_logo} alt={viewJob?.company} className='w-[32px] h-[32px] lg:w-[40px] lg:h-[40px]' />
                    <div className='flex flex-col lg:w-[529px] gap-[7px]' >
                        <p className='font-mont text-sm lg:text-base font-semibold text-[#001A24]'>{viewJob?.title}</p>
                        <p className='text-sm font-medium font-mont text-[#000D12]'>{viewJob?.company}</p>
                        <div className='flex gap-[6px]'>
                            <div className='w-[38px] h-[19px] lg:w-auto flex items-center justify-center lg:h-[25px] rounded-[2px] border border-[#1c1c1c1a]'>
                                <p className='text-[11px] lg:text-sm font-mont text-[#000D12]'>{viewJob?.location}</p>
                            </div>
                            <div className='w-[58px] h-[19px] lg:w-[85px] flex items-center justify-center lg:h-[25px] rounded-[2px] border border-[#1c1c1c1a]'>
                                <p className='text-[11px] lg:text-sm font-mont text-[#000D12]'>{viewJob?.job_style?.name}</p>
                            </div>
                            <div className='w-[130px] h-[19px] lg:w-[176px] flex items-center justify-center lg:h-[25px] rounded-[2px] border border-[#1c1c1c1a]'>
                                <p className='text-[11px] lg:text-sm font-mont text-[#000D12]'>{viewJob?.salary || "₦100,000 - ₦150,000"} </p>
                            </div>
                        </div>
                        <div className='flex items-center lg:hidden  gap-1.5'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M7.99951 2C4.68701 2 1.99951 4.6875 1.99951 8C1.99951 11.3125 4.68701 14 7.99951 14C11.312 14 13.9995 11.3125 13.9995 8C13.9995 4.6875 11.312 2 7.99951 2Z" stroke="#334D57" stroke-width="0.9025" stroke-miterlimit="10"/>
                                <path d="M7.99951 4V8.5H10.9995" stroke="#334D57" stroke-width="0.9025" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <p className='font-mont text-sm text-[#00212D]'>2 days ago</p>
                        </div>
                    </div>
                    <div className='w-[24px] h-[26px] lg:w-[30px] lg:h-[33px] border flex items-center justify-center border-[#CCD3D5] rounded-[4px]'>
                        <FaRegBookmark className="text-[#CCD3D5] w-[13px] h-[14px]"/>
                    </div>
                </div>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-[18px]'>
                        <button
                            onClick={() => {setOpenApply(true); setData(viewJob)}} 
                            className='w-[143px] lg:w-[166px] border-[#000709] bg-[#FBA599] py-[5px] px-[34px] border text-xs font-semibold cursor-pointer font-mont text-[#041F29]'
                        >
                            Apply
                        </button>
                        <button 
                            className='w-[143px] lg:w-[166px] flex items-center justify-center gap-1 border-[#1c1c1c1a] bg-[#FAFAFA] py-[5px] py-[34px] border text-xs font-semibold cursor-pointer font-mont text-[#041F29]'
                        >
                            <FiSend className="w-[13px] h-[13px]" />
                            Share
                        </button>
                    </div>
                    <div className='lg:flex items-center hidden  gap-1.5'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M7.99951 2C4.68701 2 1.99951 4.6875 1.99951 8C1.99951 11.3125 4.68701 14 7.99951 14C11.312 14 13.9995 11.3125 13.9995 8C13.9995 4.6875 11.312 2 7.99951 2Z" stroke="#334D57" stroke-width="0.9025" stroke-miterlimit="10"/>
                            <path d="M7.99951 4V8.5H10.9995" stroke="#334D57" stroke-width="0.9025" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <p className='font-mont text-sm text-[#00212D]'>2 days ago</p>
                    </div>
                </div>
                <div className='flex flex-col gap-[8px]'>
                    <p className='text-[#000709] font-mont font-semibold text-[13px] lg:text-[15px]'>Job Description</p>
                    <p className='text-[#000709] font-mont font-normal text-[13px] lg:text-[15px]'>
                    <div dangerouslySetInnerHTML={{ __html: viewJob?.description }} />
                        {/* We are seeking an experienced and creative Product Designer to join our fast-growing company. 
                        This is an on-site position based in Adamawa, Nigeria, and offers a salary of ₦100,000 per month. */}
                    </p>
                </div>
                {/* <div className='flex flex-col gap-[8px]'>
                    <p className='text-[#000709] font-mont font-semibold text-[13px] lg:text-[15px]'>Responsibilities</p>
                    <ul className='list-disc lg:w-[629px] ml-5'>
                        <li className=' text-[#00141B] font-mont text-[13px] lg:text-[15px]'>
                            Collaborate with cross-functional teams to understand the product requirements and create design solutions that meet user needs
                        </li>
                        <li className=' text-[#00141B] font-mont text-[13px] lg:text-[15px]'>
                            Create user flows, wireframes, prototypes, and high-fidelity visual designs
                        </li>
                        <li className=' text-[#00141B] font-mont text-[13px] lg:text-[15px]'>
                            Ensure consistency in design across all products and platforms
                        </li>
                        <li className=' text-[#00141B] font-mont text-[13px] lg:text-[15px]'>
                            Conduct user research and testing to validate design decisions
                        </li>
                        <li className=' text-[#00141B] font-mont text-[13px] lg:text-[15px]'>
                            Stay up-to-date with design trends and technology advancements
                        </li>
                    </ul>
                </div>
                <div className='flex flex-col gap-[8px]'>
                    <p className='text-[#000709] font-mont font-semibold text-[13px] lg:text-[15px]'>Requirements:</p>
                    <ul className='list-disc lg:w-[629px] ml-5'>
                        <li className=' text-[#00141B] font-mont text-[13px] lg:text-[15px]'>
                            3+ years of experience in product design
                        </li>
                        <li className=' text-[#00141B] font-mont text-[13px] lg:text-[15px]'>
                            Strong portfolio showcasing your design skills and process
                        </li>
                        <li className=' text-[#00141B] font-mont text-[13px] lg:text-[15px]'>
                            Proficiency in design tools such as Sketch, Figma, or Adobe Creative Suite
                        </li>
                        <li className=' text-[#00141B] font-mont text-[13px] lg:text-[15px]'>
                            Experience with prototyping tools such as InVision or Axure
                        </li>
                        <li className=' text-[#00141B] font-mont text-[13px] lg:text-[15px]'>
                            Excellent communication and collaboration skills
                        </li>
                        <li className=' text-[#00141B] font-mont text-[13px] lg:text-[15px]'>
                            Ability to work independently in a remote environment
                        </li>
                        <li className=' text-[#00141B] font-mont text-[13px] lg:text-[15px]'>
                            If you are passionate about design and have a track record of delivering great user experiences, 
                            we want to hear from you. Apply now and join our team!
                        </li>
                    </ul>
                </div> */}
                <div className='flex flex-col gap-[8px]'>
                    <p className='text-[#000709] font-mont font-semibold text-[13px] lg:text-[15px]'>Skill requirement</p>
                    <div className='grid grid-cols-3 lg:flex lg:gap-2 '>
                        <div className='w-[73px] h-[26px] lg:w-[57px] rounded-phone flex items-center justify-center lg:h-[22px]  border border-[#1c1c1c1a]'>
                            <p className='text-[8.9px] font-mont font-medium text-[#000D12]'>InDesign</p>
                        </div>
                        <div className='w-[143px] h-[26px] lg:w-[109px] rounded-phone flex items-center justify-center lg:h-[22px]  border border-[#1c1c1c1a]'>
                            <p className='text-[8.9px] font-mont font-medium text-[#000D12]'>Color sense & theory</p>
                        </div>
                        <div className='w-[80px] h-[26px] lg:w-[62px] rounded-phone flex items-center justify-center lg:h-[22px]  border border-[#1c1c1c1a]'>
                            <p className='text-[8.9px] font-mont font-medium text-[#000D12]'>Ad design</p>
                        </div>
                        <div className='w-[66px] h-[26px] lg:w-[62px] rounded-phone flex items-center justify-center lg:h-[22px]  border border-[#1c1c1c1a]'>
                            <p className='text-[8.9px] font-mont font-medium text-[#000D12]'>React js</p>
                        </div>
                        <div className='w-[62px] rounded-phone flex items-center justify-center h-[22px]  border border-[#1c1c1c1a]'>
                            <p className='text-[8.9px] font-mont font-medium text-[#000D12]'>Javascript</p>
                        </div>
                        <div className='w-[62px] rounded-phone flex items-center justify-center h-[22px]  border border-[#1c1c1c1a]'>
                            <p className='text-[8.9px] font-mont font-medium text-[#000D12]'>Creativity</p>
                        </div>
                        <div className='w-[81px] rounded-phone flex items-center justify-center h-[22px]  border border-[#1c1c1c1a]'>
                            <p className='text-[8.9px] font-mont font-medium text-[#000D12]'>User Research</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className='w-[332px] hidden lg:flex flex-col gap-6' style={{    marginRight: '-4%'}}>
            <div className='w-[308px] px-[14px] py-[18px] flex flex-col gap-[10px] bg-[#fff] border border-[#E3E7E8] rounded-lg'>
                <img src={viewJob?.company_logo} alt={viewJob?.company} className='w-[48px] h-[48px]' />
                <p className='font-[13px] font-mont font-semibold text-[#001A24]'>{viewJob?.company}</p>
                <div className='flex items-center'>
                    <IoLocationOutline className="text-[#00141B] w-[16px] h-[16px]" />
                    <p className='text-xs font-mont font-medium text-[#000D12]'>{viewJob?.location}</p>
                </div>
                <p className='font-mont text-[11px] text-[#10303D]'>
                    At Netflix Technologies, we are more than just innovators; we are≠≠+ architects of digital experiences, 
                    pushing the boundaries of technology to redefine entertainment. 
                    Headquartered in the heart of the United States, we're on a mission to revolutionize how the world 
                    consumes content.
                </p>
                <div className='flex justify-end'>
                    <button 
                    onClick={() => window.open(viewJob?.link, "blank" )}
                    className='border flex items-center rounded-[6px] px-[17px] py-[12px] border-[#001A24] '>
                        <p className='text-[#001A24] font-semibold text-[10px] font-mont'>Visit Job Page</p>
                        <GoArrowUpRight />
                    </button>
                </div>
            </div>
            <div className='w-[308px] rounded-lg flex flex-col gap-3 py-[18px] bg-[#fff] px-[17px] border border-[#E3E7E8]'>
                <div className='w-[274px] flex flex-col'>
                    <div className='flex justify-between'>
                        <p className='font-mont text-[15px] font-semibold'>How You Match</p>
                        <div className='w-[46px] h-[21px] flex items-center text-[#06930C] text-[11px] rounded-sm justify-center border border-[#06930C] bg-[#99FB9D1A]'>
                            75%
                        </div>
                    </div>
                    <p className='text-[12px] font-mont text-[#00141B]'>You're a good fit! Your skills and experience align well. Apply now</p>
                </div>
                <div className='w-[274px]'>
                    <div className='flex flex-col gap-[7px]'>
                        <p className='font-mont text-xs font-medium text-[#000D12]'>Experience</p>
                        <div className='flex justify-between'>
                            <Progress percent={80} />
                        </div>
                    </div>
                    <div className='flex flex-col gap-[7px]'>
                        <p className='font-mont text-xs font-medium text-[#000D12]'>Skills</p>
                        <div className='flex justify-between'>
                            <Progress percent={50} />
                        </div>
                    </div>
                    <div className='flex flex-col gap-[7px]'>
                        <p className='font-mont text-xs font-medium text-[#000D12]'>Work Experience</p>
                        <div className='flex justify-between'>
                            <Progress percent={100} />
                        </div>
                    </div>
                </div>
                <div className='flex justify-end mt-[20px]'>
                    <button className='w-[78px] flex items-center justify-center px-6 py-3 bg-[#FBA599] text-[#00141B] font-semibold text-[10px] rounded-[6px]'>Apply</button>
                </div>
            </div>

            <div className='w-full flex flex-col gap-[7px] '>
                <div className='flex gap-[10px]'>
                    <FaRegStar className="w-[20px] h-[20px] text-[#10303D]" />
                    <p className='font-mont text-base text-[#000D12] font-semibold'>More Opportunities</p>
                </div>
                {
                    viewSingleJob?.loading ? 
                    <>
                        <Skeleton variant="rectangular" width={308} height={50} style={{ backgroundColor: 'rgba(249,249,249,0.86)' }} />
                        <Skeleton variant="rectangular" width={308} height={50} style={{ backgroundColor: 'rgba(249,249,249,0.86)' }} />
                        <Skeleton variant="rectangular" width={308} height={50} style={{ backgroundColor: 'rgba(249,249,249,0.86)' }} />
                    </>
                    :
                    similarJobs?.map((item, index) => (
                        <div key={index} className='w-[308px] mb-3  bg-[#fff] px-[14px] py-[18px] justify-between rounded-lg border border-[#E3E7E8] flex'>
                            <img src={item?.company_logo} alt={item?.company} className='w-[32px] h-[32px]'/>
                            <div className='flex flex-col  gap-[7px]' >
                                <p className='font-mont text-sm font-semibold text-[#001A24]'>{item?.title}</p>
                                <p className='text-[11px] font-medium font-mont text-[#000D12]'>{item?.company}</p>
                                <div className='flex gap-[6px]'>
                                    <div className='w-[28px] flex items-center justify-center h-[17px] rounded-[2px] border border-[#1c1c1c1a]'>
                                        <p className='text-[10px] font-mont text-[#000D12]'>{item?.location}</p>
                                    </div>
                                    <div className='w-[46px] flex items-center justify-center h-[17px] rounded-[2px] border border-[#1c1c1c1a]'>
                                        <p className='text-[10px] font-mont text-[#000D12]'>{item?.job_style.name}</p>
                                    </div>
                                    <div className='w-[113px] flex items-center justify-center h-[17px] rounded-[2px] border border-[#1c1c1c1a]'>
                                        <p className='text-[10px] font-mont text-[#000D12]'>{item?.salary || "₦100,000 - ₦150,000"}</p>
                                    </div>
                                </div>
                                <div className='flex items-center gap-1.5'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 16 16" fill="none">
                                        <path d="M7.99951 2C4.68701 2 1.99951 4.6875 1.99951 8C1.99951 11.3125 4.68701 14 7.99951 14C11.312 14 13.9995 11.3125 13.9995 8C13.9995 4.6875 11.312 2 7.99951 2Z" stroke="#334D57" stroke-width="0.9025" stroke-miterlimit="10"/>
                                        <path d="M7.99951 4V8.5H10.9995" stroke="#334D57" stroke-width="0.9025" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                    <p className='font-mont text-[11px] text-[#334D57]'>2 days ago</p>
                                </div>
                            </div>
                            <div className='w-[24px] h-[26px] border flex items-center justify-center border-[#CCD3D5] rounded-[4px]'>
                                <FaRegBookmark className="text-[#CCD3D5] w-[8px] h-[10px]"/>
                            </div>
                        </div>
                    ))
                }
                
                {/* <div className='w-[308px]  bg-[#fff] px-[14px] py-[18px] justify-between rounded-lg border border-[#E3E7E8] flex'>
                    <img src={Miner} alt="Netflix" className='w-[32px] h-[32px]'/>
                    <div className='flex flex-col  gap-[7px]' >
                        <p className='font-mont text-sm font-semibold text-[#001A24]'>Software Developer/Engineer</p>
                        <p className='text-[11px] font-medium font-mont text-[#000D12]'>Netflix</p>
                        <div className='flex gap-[6px]'>
                            <div className='w-[28px] flex items-center justify-center h-[17px] rounded-[2px] border border-[#1c1c1c1a]'>
                                <p className='text-[10px] font-mont text-[#000D12]'>Edo</p>
                            </div>
                            <div className='w-[46px] flex items-center justify-center h-[17px] rounded-[2px] border border-[#1c1c1c1a]'>
                                <p className='text-[10px] font-mont text-[#000D12]'>On-Site</p>
                            </div>
                            <div className='w-[113px] flex items-center justify-center h-[17px] rounded-[2px] border border-[#1c1c1c1a]'>
                                <p className='text-[10px] font-mont text-[#000D12]'>₦100,000 - ₦150,000</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-1.5'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 16 16" fill="none">
                                <path d="M7.99951 2C4.68701 2 1.99951 4.6875 1.99951 8C1.99951 11.3125 4.68701 14 7.99951 14C11.312 14 13.9995 11.3125 13.9995 8C13.9995 4.6875 11.312 2 7.99951 2Z" stroke="#334D57" stroke-width="0.9025" stroke-miterlimit="10"/>
                                <path d="M7.99951 4V8.5H10.9995" stroke="#334D57" stroke-width="0.9025" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <p className='font-mont text-[11px] text-[#334D57]'>2 days ago</p>
                        </div>
                    </div>
                    <div className='w-[24px] h-[26px] border flex items-center justify-center border-[#CCD3D5] rounded-[4px]'>
                        <FaRegBookmark className="text-[#CCD3D5] w-[8px] h-[10px]"/>
                    </div>
                </div>
                <div className='w-[308px]  bg-[#fff] px-[14px] py-[18px] justify-between rounded-lg border border-[#E3E7E8] flex'>
                    <img src={Worker} alt="Netflix" className='w-[32px] h-[32px]'/>
                    <div className='flex flex-col  gap-[7px]' >
                        <p className='font-mont text-sm font-semibold text-[#001A24]'>Software Developer/Engineer</p>
                        <p className='text-[11px] font-medium font-mont text-[#000D12]'>Netflix</p>
                        <div className='flex gap-[6px]'>
                            <div className='w-[28px] flex items-center justify-center h-[17px] rounded-[2px] border border-[#1c1c1c1a]'>
                                <p className='text-[10px] font-mont text-[#000D12]'>Edo</p>
                            </div>
                            <div className='w-[46px] flex items-center justify-center h-[17px] rounded-[2px] border border-[#1c1c1c1a]'>
                                <p className='text-[10px] font-mont text-[#000D12]'>On-Site</p>
                            </div>
                            <div className='w-[113px] flex items-center justify-center h-[17px] rounded-[2px] border border-[#1c1c1c1a]'>
                                <p className='text-[10px] font-mont text-[#000D12]'>₦100,000 - ₦150,000</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-1.5'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 16 16" fill="none">
                                <path d="M7.99951 2C4.68701 2 1.99951 4.6875 1.99951 8C1.99951 11.3125 4.68701 14 7.99951 14C11.312 14 13.9995 11.3125 13.9995 8C13.9995 4.6875 11.312 2 7.99951 2Z" stroke="#334D57" stroke-width="0.9025" stroke-miterlimit="10"/>
                                <path d="M7.99951 4V8.5H10.9995" stroke="#334D57" stroke-width="0.9025" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <p className='font-mont text-[11px] text-[#334D57]'>2 days ago</p>
                        </div>
                    </div>
                    <div className='w-[24px] h-[26px] border flex items-center justify-center border-[#CCD3D5] rounded-[4px]'>
                        <FaRegBookmark className="text-[#CCD3D5] w-[8px] h-[10px]"/>
                    </div>
                </div> */}
            </div>
        </div>
        <ModalPop isOpen={openApply} >
            <Apply handleClose={() => setOpenApply(false)} data={data} />
        </ModalPop>
    </div>
  )
}

export default Details
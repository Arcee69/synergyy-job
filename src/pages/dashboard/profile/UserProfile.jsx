import React, { useEffect, useState } from 'react'
import { Progress } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { SlLocationPin } from 'react-icons/sl';

import Gift from "../../../assets/svg/gift.svg"
import Header from "../../../assets/img/title_header.png"
import { getTechnicalSkills } from '../../../features/profile/getTechnicalSkillsSlice';
import { getSoftSkills } from '../../../features/profile/getSoftSkillsSlice';

import Beginner from "../../../assets/img/beginner.png"
import Intermediate from "../../../assets/img/intermediate.png"
import Expert from "../../../assets/img/expert.png"
import Work from "../../../assets/img/work.png"
import School from "../../../assets/img/school.png"
import Link_img from "../../../assets/img/link.png"
import { getExperience } from '../../../features/credentials/getExperienceSlice';
import { getEducation } from '../../../features/credentials/getEducationSlice';
import { Link, useNavigate } from 'react-router-dom';
import { Skeleton } from '@mui/material';
import { getProfile } from '../../../features/profile/getProfileSlice';

const UserProfile = () => {
    const [stage, setStage] = useState(0);
    const [percent, setPercent] = useState(0);

    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    //UserProfileData
    const profileData = useSelector(state => state.fetchProfileData)
    const userData = profileData?.data?.data
    console.log(userData, "malibu")
    const profileLoading = profileData?.loading

    useEffect(() => {
        dispatch(getProfile())
    },[])
    
    //Technical Skills Data
    const fetchTechnicalSkills = useSelector(state => state.fetchTechnicalSkills);
    const getAllTechnicalSkills = fetchTechnicalSkills?.data?.data
    const technicalSkillsLoading = fetchTechnicalSkills?.loading


    useEffect(() => {
        dispatch(getTechnicalSkills())
    },[])

    //Soft Skills Data
    const fetchSoftSkills = useSelector(state => state.fetchSoftSkills);
    const getAllSoftSkills = fetchSoftSkills?.data?.data
    const softSkillsLoading = fetchSoftSkills?.loading

    useEffect(() => {
        dispatch(getSoftSkills())
      },[])

    //Experience Data
    const fetchExperience = useSelector(state => state.fetchExperience)
    const workData = fetchExperience?.data?.data
    const workExperienceLoading = fetchExperience?.loading

    

    useEffect(() => {
        dispatch(getExperience())
      }, [])

    //Education Data  
    const fetchEducation = useSelector(state => state.fetchEducation)
    const educationData = fetchEducation?.data?.data
    const educationLoading = fetchEducation?.loading
   
    console.log(educationData, "asap")

    useEffect(() => {
        dispatch(getEducation())
      }, [])

      const linkData = [
        {
            name: "Personal Website",
            url: "www.google.com"
        },
        {
            name: "Email",
            url: "www.google.com"
        },
        {
            name: "Github",
            url: "www.google.com"
        },
      ]

      const calculateProgress = () => {
        let newStage = 0;
        let newPercent = 0;
    
        if (userData?.profile_photo) {
          newStage = 1;
          newPercent = 13;
        }
    
        if (userData?.skills?.length > 0) {
          newStage = 2;
          newPercent = 26;
    
        }
        if (userData?.experiences > 0) {
          newStage = 3;
          newPercent = 39;
        }
        if (userData?.educations?.length > 0) {
          newStage = 4;
          newPercent = 52;
        }
    
        if (userData?.employment_search_status && userData?.employment_style && userData?.employment_type) {
          newStage = 5;
          newPercent = 65;
        }
    
        if (userData?.documents?.length > 0) {
          newStage = 6;
          newPercent = 78;
        }
    
        setStage(newStage);
        setPercent(newPercent);
      };
    
      useEffect(() => {
        calculateProgress();
      }, [userData]);

  return (
    <div className='flex gap-6 relative mt-14 mb-5'>
        <div className='w-full flex flex-col mt-5 gap-4'>
            {
                profileLoading ? 
                <Skeleton variant='rectangle' height={230} style={{ backgroundColor: 'rgba(0,0,0, 0.06)' }} className='w-[100%]'  />
                :    
                <div className='w-full pt-[8px] relative rounded-lg'>
                    <img src={Header} alt='title_header' />
                    <div className='bg-[#fff] relative bottom-3 lg:bottom-6 rounded-xl h-[240px] border border-[#E3E7E8] lg:h-[125px] flex flex-col lg:flex-row  lg:gap-4  px-4'>
                        {
                            userData?.profile_photo === null ? 
                            <div className='w-[64px] h-[64px] lg:w-[120px] lg:h-[100px] relative bottom-3 lg:bottom-6 bg-[#fff] rounded-full flex items-center justify-center border border-[#ccc]'>
                                <p className='font-mont text-[#667A81] text-[24px] lg:text-[34px] font-semibold '>
                                    {`${userData?.first_name?.substring(0, 1)}${userData?.last_name?.substring(0, 1)}`}
                                </p>
                            </div>
                            :
                            <img 
                                src={userData?.profile_photo} 
                                alt='profile_pic' 
                                className='w-[64px] h-[64px] lg:w-[140px] lg:h-[140px] relative  bottom-3 lg:bottom-6 rounded-full' 
                            />
                        }
                        <div className='flex flex-col lg:flex-row lg:items-center w-full gap-2 lg:gap-0 justify-between'>
                            <div className='flex flex-col  gap-2'>
                                <p className='font-mont text-[#043246] text-base lg:text-[24px] font-semibold'>{userData?.display_name}</p>
                                <p className='font-mont text-[#1B565B]  lg:hidden font-medium'>Product Designer</p>
                                <div className='flex flex-col lg:flex-row lg:items-center gap-2.5'>
                                    <div className='flex gap-1.5 items-center'>
                                        <SlLocationPin className="text-[#99A6AB] w-[16px] h-[16px]" />
                                        <p className='text-[#8496AE] font-mont font-medium text-xs'>{userData?.country}</p>
                                    </div>
                                    <div className='flex gap-1.5 items-center'>
                                        <div className='w-[8px] h-[8px] bg-[#1BD365] rounded-full'></div>
                                        <p className='text-[#8496AE] font-mont whitespace-nowrap font-medium text-xs'>{userData?.employment_search_status || "N/A"}</p>
                                    </div>
                                </div>
                            </div>
                            <button
                                type='button'
                                className='bg-[#FDB181] w-[132px] h-[48px] rounded-lg border border-[#000709] flex items-center justify-center'
                                onClick={() => navigate("/dashboard")}
                            >
                                <p className='text-[#00141B] font-inter font-semibold text-base'>
                                    Edit Profile
                                </p>
                            </button>
                        </div>

                    </div>
                </div>
            }

            {
                profileLoading ? 
                <Skeleton variant='rectangle' height={230} style={{ backgroundColor: 'rgba(0,0,0, 0.06)' }} className='w-[100%]'  />
                : 
                <div className='rounded-lg bg-[#fff] border border-[#E3E7E8] flex flex-col gap-[14px] py-6 px-4'>
                    <p className='text-lg text-[#043246] font-semibold font-mont'>About</p>
                    <p className='text-xl text-[#1B565B] font-mont font-semibold'>N/A</p>
                    <p className='text-[#043246] font-mont text-base '>{userData?.bio}</p>
                </div>
            }


            {
                technicalSkillsLoading ?
                <Skeleton variant='rectangle' height={230} style={{ backgroundColor: 'rgba(0,0,0, 0.06)' }} className='w-[100%]' />
                :
                <div className='rounded-lg bg-[#fff] border border-[#E3E7E8] flex flex-col gap-[14px] py-6 px-4'>
                    <p className='text-lg text-[#043246] font-semibold font-mont'>Skills</p>
                    <div className='flex flex-col gap-1'>
                        <p className='font-mont text-[#043246] font-semibold'>Technical skills</p>
                        <div className='flex flex-wrap gap-2 mt-[19px] items-center'>
                            {
                                getAllTechnicalSkills?.length > 0 && getAllTechnicalSkills?.map((skills, index) => (
                                    <div key={index} className='w-auto h-[36px] bg-[#EAFAFB] flex items-center gap-2 justify-between rounded-[9px] p-2'>
                                        <div className='flex items-center gap-2'>
                                            <img 
                                                src={skills?.level === "Expert" ? Expert : skills?.level === "Intermediate" ? Intermediate : Beginner}
                                                alt='level' 
                                                className='w-[16px] h-[16px]'
                                            />
                                            <p className='text-[#043246] font-inter text-[13px] font-medium'>{skills?.name}</p>
                                        </div> 
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    <div className='flex flex-col gap-1'>
                        <p className='font-mont text-[#043246] font-semibold'>Soft skills</p>
                        <div className='flex flex-wrap gap-2 mt-[19px] items-center'>
                            {
                                getAllSoftSkills?.length > 0 && getAllSoftSkills?.map((skills, index) => (
                                <div key={index}  className=' w-auto h-[36px] gap-2 flex  bg-[#EAFAFB] items-center justify-between rounded-[9px] p-2'>
                                    <div className='flex items-center gap-2  '>
                                        <img 
                                            src={skills?.skillsLevel === "Expert" ? Expert : skills?.skillsLevel === "Intermediate" ? Intermediate : Beginner}
                                            alt='level' 
                                            className='w-[16px] h-[16px]'
                                        />
                                        <p className='text-[#043246] text-[13px] font-inter font-medium'>{skills?.name} </p>
                                    </div>
                                
                                </div>
                                ))
                            }
                        </div>
                    </div>
            
                </div>
            }

            {
                workExperienceLoading ?
                <Skeleton variant='rectangle' height={230} style={{ backgroundColor: 'rgba(0,0,0, 0.06)' }} className='w-[100%]' />
                :
                <div className='rounded-lg bg-[#fff] border border-[#E3E7E8] flex flex-col gap-[14px] py-6 px-4'>
                    <p className='text-lg text-[#043246] font-semibold font-mont'>Work Experience</p>
                    <div className='flex flex-col gap-6'>
                        {workData?.length > 0 ?
                            workData?.map((item, index) => (
                                <div className='flex items-center gap-2' key={index}>
                                    <img src={Work} alt='Work' className='w-[48px] h-[48px]'/>
                                    <div className='flex flex-col'>
                                        <p className='font-mont text-[#043246] text-sm lg:text-base font-semibold'>{item?.company}</p>
                                        <div className='flex items-center gap-4'>
                                            <p className='font-medium text-[11px] lg:text-sm text-[#043246] font-mont'>{item?.role}</p>
                                            <p className='font-medium text-[11px] lg:text-sm text-[#475467] font-mont'>{`${item?.start_date} - ${item?.end_date}`}</p>
                                        </div>
                                    </div>
                                </div>
                            )) 
                        : 
                        <div className='flex flex-col gap-4 items-center justify-center'>
                            <img src={Work} alt='Work' className='w-[48px] h-[48px]'/>
                            <p className='font-mont font-semibold text-[#043246]'>No Experience Data</p>
                        </div>
                        }

                    </div>
                </div>
            }

            {
                educationLoading ? 
                <Skeleton variant='rectangle' height={230} style={{ backgroundColor: 'rgba(0,0,0, 0.06)' }} className='w-[100%]' />
                :
                <div className='rounded-lg bg-[#fff] border border-[#E3E7E8] flex flex-col gap-[14px] py-6 px-4'>
                    <p className='text-lg text-[#043246] font-semibold font-mont'>Education</p>
                    <div className='flex flex-col gap-6'>
                        {educationData?.length > 0 ?
                            educationData?.map((item, index) => (
                                <div className='flex items-center gap-2' key={index}>
                                    <img src={School} alt='School' className='w-[48px] h-[48px]'/>
                                    <div className='flex flex-col'>
                                        <p className='font-mont text-[#043246] text-sm lg:text-base font-semibold'>{item?.school}</p>
                                        <div className='flex items-center gap-4'>
                                            <p className='font-medium text-[11px] lg:text-sm text-[#043246] font-mont'>{item?.degree}</p>
                                            <p className='font-medium text-[11px] lg:text-sm text-[#475467] font-mont'>{`${item?.start_date} - ${item?.end_date}`}</p>
                                        </div>
                                    </div>
                                </div>
                            )) 
                        : 
                        <div className='flex flex-col gap-4 items-center justify-center'>
                            <img src={School} alt='Work' className='w-[48px] h-[48px]'/>
                            <p className='font-mont font-semibold text-[#043246]'>No Education Data</p>
                        </div>
                        }

                    </div>
                </div>
            }


            <div className='rounded-lg bg-[#fff] border border-[#E3E7E8] flex flex-col gap-[14px] py-6 px-4'>
                <p className='text-lg text-[#043246] font-semibold font-mont'>Links</p>
                <div className='flex items-center flex-wrap gap-6'>
                    {linkData?.length > 0 ?
                        linkData?.map((item, index) => (
                            <div className='flex items-center gap-2' key={index}>
                                <img src={Link_img} alt='School' className='w-[28px] h-[28px]'/>
                                <Link to={item?.url} target='_blank' className='underline font-medium text-[#043246] font-mont'>{item?.name}</Link>
                            </div>
                        )) 
                    : 
                    <p>No Data</p>
                    }

                </div>
            </div>

        </div>
        
        {
            profileLoading ? 
            <Skeleton variant='rectangle' width={380} height={380} style={{ backgroundColor: 'rgba(0,0,0, 0.06)' }} />
            : 
            <div className=' right-2 mt-[30px] hidden lg:flex'> {/* fixed */}
                <div className='w-[276px] h-[380px] bg-[#fff] border-[#E3E7E8] rounded-[12px] flex flex-col gap-4 items-center justify-center'>
                    <div className='w-full flex px-[12px]  items-center justify-between'>
                        <p className='font-mont text-[#043246] font-semibold'>Complete your profile</p>
                        <div className='flex items-center gap-2'>
                            <p className='text-[#667A81] font-mont font-semibold'>{`${stage}/7`}</p>
                            <Progress type="circle" percent={percent} showInfo={false} size={20} strokeColor="#29CFD6" />
                        </div>
                    </div>
                    <div className='flex flex-col items-center justify-center gap-[8px]'>
                        {
                            userData?.profile_photo === null ? (
                                <div className='relative'>
                                    <Progress type="circle" percent={percent} showInfo={false} size={165} strokeColor="#29CFD6" />
                                    <div className='w-[142px] h-[142px] rounded-full absolute right-3.5 bottom-3  bg-[#fafafa] flex items-center justify-center'>
                                        <p className='text-[#000] text-4xl'>{`${userData?.first_name?.substring(0, 1)}${userData?.last_name?.substring(0, 1)}`}</p>
                                    </div>
                                </div>
                            ) : (
                            <div className='relative'>
                                <Progress type="circle" percent={percent} showInfo={false} size={170} strokeColor="#29CFD6" />
                                {/* <img src={userData?.profile_photo} alt='profile_photo' className='rounded-full absolute right-3.5 bottom-3 w-[142px] h-[142px]' /> */}
                                <div className='rounded-full absolute right-3 bottom-2.5 w-[148px] h-[148px] bg-[#fafafa] flex items-center justify-center'>
                                    <p className='text-[#000] text-[40px] font-mont font-semibold'>{`${userData?.first_name?.substring(0, 1)}${userData?.last_name?.substring(0, 1)}`}</p>
                                </div>
                            </div>
                            
                            )
                        }
                        <p className='text-xs font-semibold font-mont text-[#667A81]'> 
                            {`${percent}% complete`}
                        </p>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <p className='text-[#000709] font-mont text-lg font-semibold'>{`${userData?.first_name} ${userData?.last_name}`}</p>
                        <p className='text-[#667A81] text-sm font-mont'>N/A</p>
                    </div>
                    <div className='bg-[#D4F5F7] flex items-center justify-between w-[252px] h-[44px] p-[8px] rounded-lg'>
                        <div className='flex items-center gap-[4px]'>
                            <img src={Gift} alt='gift' className='w-[22px] h-[19px]'/>
                            {
                                percent === 100 ? (
                                    <p className='text-[#28C9D0] font-mont font-medium text-xs'>You have earned 1000 points</p>
                                ) : (
                                <div className='flex flex-col'>
                                    <p className='text-[#28C9D0] font-mont font-medium text-xs'>Earn points</p>
                                    <p className='text-xs text-[#043246] font-mont font-medium'>Complete your profile</p>
                                </div>
                                )
                            }
                        </div>
                        <p className={`${percent === 100 ? "hidden" : "text-[#00344ACC] font-mont text-xs font-semibold"}`}>1,000 pts</p>
                    </div>
                </div>
            </div>
        }
    </div>
  )
}

export default UserProfile
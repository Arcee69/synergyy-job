import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Skeleton } from '@mui/material';
import { FaRegBookmark, FaRegStar  } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

import Netflix from "../../../assets/img/netflix.png"
import Bloom from "../../../assets/img/bloom.png"
import Widow from "../../../assets/img/widow.png"
import Square from "../../../assets/img/square.png"
import Miner from "../../../assets/img/miner.png"
import Worker from "../../../assets/img/worker.png"
import ProfilePhoto from "../../../assets/img/profile_photo_medium.png"
import Filter from "../../../assets/svg/filter.svg"
import Search from "../../../assets/svg/search-a.svg"
import ModalPop from '../../../components/modals/modalPop';
import FilterModal from './component/Filter';
import { getRecommendedOpportunities } from '../../../features/jobs/getRecommendedOpportunitiesSlice';
import { getTrendingOpportunities } from '../../../features/jobs/getTrendingOpportunitiesSlice';
import { searchJob } from '../../../features/jobs/searchJobSlice';
import { api } from '../../../services/api';
import { appUrls } from '../../../services/urls';
import { postBookmarkJob } from '../../../features/jobs/postBookmarkJobSlice';


const JobBoard = () => {
    const [openFilter, setOpenFilter] = useState(false)
    const [jobFilter, setJobFilter] = useState([])
    const [bookmarked, setBookmarked] = useState(false)
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate();
    const dispatch = useDispatch()

    const profileData = useSelector(state => state.userLogin)
    const userData = profileData?.user?.user
    //   console.log(profileData, "dodo")

    //Bookmark jobs
    const bookmarkedJob = useSelector(state => state.bookmarkJob)
    const bookmarkJobLoading = bookmarkedJob?.loading
    // console.log(bookmarkedJob, "saoa")

    

    // Recommended Opportunities
    const fetchRecommendedOpportunities = useSelector(state => state.fetchRecommendedOpportunities);
    const recommendedJobs  = fetchRecommendedOpportunities?.data?.data;
    const jobsLoading = recommendedJobs?.loading

    // console.log(fetchRecommendedOpportunities, "fetchRecommendedOpportunities")

    useEffect(() => {
        dispatch(getRecommendedOpportunities())
    }, [bookmarkJobLoading])

    //More Opportunites
    const fetchMoreOpportunities = useSelector(state => state.fetchTrendingOpportunities)
    const moreOpportunities = fetchMoreOpportunities?.data?.data
    const opportunitiesLoading = moreOpportunities?.loading
    // console.log(fetchMoreOpportunities, "fetchMoreOpportunities")
  
    useEffect(() => {
        dispatch(getTrendingOpportunities())
    }, [bookmarkJobLoading])

    //Search Jobs
    const handleChange = async (e) => {
        setLoading(true)
        await api.get(appUrls?.SEARCH_JOB_URL + `?search_term=${e.target.value}`)
        .then((res) => {
            setLoading(false)
            console.log(res, "orange")
            setJobFilter(res?.data?.data)
        })
        .catch((err) => {
            setLoading(false)
            console.log(err, "err")
            if(err?.status === 400) {
                setJobFilter([])
            }    
        })
    };

    

    const bookmarkJob = (id) => {
        let formData = new FormData()
        formData.append("job_id", id)
        dispatch(postBookmarkJob(formData))
    }

    function timeAgo(dateString) {
        const currentDate = new Date();
        const inputDate = new Date(dateString);
      
        const timeDifference = currentDate - inputDate;
        const seconds = Math.floor(timeDifference / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);
      
        if (days > 1) {
          return  `${days} days ago`;
        } else if (days === 1) {
          return '1 day ago';
        } else if (hours > 1) {
          return `${hours} hours ago`;
        } else if (hours === 1) {
          return '1 hour ago';
        } else if (minutes > 1) {
          return `${minutes} minutes ago`;
        } else if (minutes === 1) {
          return '1 minute ago';
        } else if (seconds > 1) {
          return `${seconds} seconds ago`;
        } else {
          return 'just now';
        }
      }
   

  return (
    <div className='w-full flex flex-col lg:flex-row lg:justify-between '>
        <div className='w-full lg:w-[67.333333%] flex flex-col gap-6 lg:gap-[32px]' > {/* w-[669px] */}
            <div className='w-full mt-[44px]'>
                <p className='text-[#000709] text-[24px] lg:text-[30px] font-semibold font-mont'>Job Board</p>
                <p className='text-sm lg:text-base font-mont text-[#00141B]'>Discover jobs perfect for you</p>
            </div>
            <div className='w-full gap-2 flex'> {/* 563px w-[249px] */}
                <div className='w-[75%] lg:w-[85%] bg-[#F0F0F0] justify-between px-[8px]  lg:h-[58px] flex items-center rounded-xl'>
                    <input 
                        name='search'
                        type='text'
                        onChange={(e) => handleChange(e)}
                        placeholder='Search for a job'
                        className="outline-none font-mont w-full bg-transparent lg:ml-[24px] text-sm lg:text-base font-medium "
                    />
                    <button className='w-[33px] h-[33px] lg:w-[42px] lg:h-[42px] bg-[#000709] rounded-lg flex items-center justify-center'>
                        <img src={Search} alt='search' />
                    </button>
                </div>
                <div 
                    onClick={() => setOpenFilter(true)} 
                    className='w-[25%] lg:w-[15%] cursor-pointer h-[58px] rounded-lg flex justify-center gap-[6px] lg:gap-[8px] items-center border border-[#1C1C1C1A]'
                > {/* [98px] w-[79px] lg:*/}
                    <p className='text-[#1C1C1CE5] font-mont font-semibold text-[11px] lg:text-sm '>Filter</p>
                    <img src={Filter} alt='filter' />
                </div>
            </div>
            <div className='w-full flex flex-col gap-[8px]'>
                <p className='text-[#000709] text-xs lg:text-base font-mont font-semibold'>{jobFilter?.length > 0 ? "Filtered Results" : "Handpicked For You"}</p>
                    {
                    loading ?
                        <>
                            <Skeleton variant="rectangular"  height={150} style={{ backgroundColor: 'rgba(0,0,0, 0.16)'  }} className='w-[100%]' />
                            <Skeleton variant="rectangular"  height={150} style={{ backgroundColor: 'rgba(0,0,0, 0.16)'  }} className='w-[100%]'/>
                            <Skeleton variant="rectangular"  height={150} style={{ backgroundColor: 'rgba(0,0,0, 0.16)'  }} className='w-[100%]'/>
                        </>
                        :
                        jobFilter?.length > 0 ? jobFilter?.map((item, index) => (
                            <div key={index} onClick={() => {navigate("/job-board/details", { state: item }); window.scroll(0, 0)}} className='w-full p-4 lg:px-[20px] gap-[7px] cursor-pointer lg:py-[22px] border border-[#E3E7E8] rounded-lg flex flex-col bg-[#fff] '>
                                <div className='flex gap-2 md:gap-5 justify-between '>
                                {
                                        item?.company_logo ?
                                        <img src={item?.company_logo} alt={item?.company} className='w-[36px] h-[36px] lg:w-[40px] lg:h-[40px]' />
                                        :
                                        <div className='w-[36px] h-[36px] rounded-full border border-[#666] bg-[#fafafa] flex items-center justify-center'>
                                            <p className='text-[#000] text-base'>{item?.company.substring(0, 1)}</p>
                                        </div>
                                    }
                                    <div className='flex flex-col w-[233px] md:w-full lg:w-[529px] gap-[7px]' >
                                        <p className='font-mont text-[13px] lg:text-base font-semibold text-[#001A24]'>{item?.title}</p>
                                        <p className='text-xs lg:text-sm font-medium font-mont text-[#000D12]'>{item?.company}</p>
                                        <div className='flex gap-[6px]'>
                                            <div className='w-auto p-1 flex items-center justify-center h-[25px] rounded-[2px] border border-[#1c1c1c1a]'>
                                                <p className='text-[11px] lg:text-sm font-mont text-[#000D12]'>{item?.location}</p>
                                            </div>
                                            <div className='w-[58px] lg:w-[85px] flex items-center justify-center h-[25px] rounded-[2px] border border-[#1c1c1c1a]'>
                                                <p className='text-[11px] lg:text-sm  font-mont text-[#000D12]'>{item?.job_style?.name}</p>
                                            </div>
                                            <div className={`${!item?.salary ? "hidden" : 'w-[68px] lg:w-[176px] flex items-center justify-center h-[25px] rounded-[2px] border border-[#1c1c1c1a]'}`} >
                                                <p className='hidden lg:flex text-sm font-mont text-[#000D12]'>{item?.salary || ""}</p>
                                                <p className='text-[11px] flex lg:hidden font-mont text-[#000D12]'>{item?.salary || ""}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div onClick={() => bookmarkJob(item?.id)} className={`${item?.bookmarked ? "bg-[#42B8BD]" : ""} w-[24px] h-[26px] lg:w-[30px] lg:h-[33px] border flex items-center justify-center border-[#CCD3D5] rounded-[4px] `}>
                                        <FaRegBookmark className={`${item?.bookmarked ? "text-[#fff]" : "text-[#CCD3D5]"} w-[11px] h-[10px] lg:w-[13px] lg:h-[14px]`}/>
                                    </div>
                                </div>
                                <div className='flex justify-end items-center gap-1.5'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <path d="M7.99951 2C4.68701 2 1.99951 4.6875 1.99951 8C1.99951 11.3125 4.68701 14 7.99951 14C11.312 14 13.9995 11.3125 13.9995 8C13.9995 4.6875 11.312 2 7.99951 2Z" stroke="#334D57" stroke-width="0.9025" stroke-miterlimit="10"/>
                                        <path d="M7.99951 4V8.5H10.9995" stroke="#334D57" stroke-width="0.9025" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                    <p className='font-mont text-sm text-[#00212D]'>{timeAgo(item?.updated_at)}</p>
                                </div>
                            </div>
                        )) :
                        jobsLoading ?
                        <>
                            <Skeleton variant="rectangular"  height={150} style={{ backgroundColor: 'rgba(0,0,0, 0.16)'}} className='w-[100%]' />
                            <Skeleton variant="rectangular"  height={150} style={{ backgroundColor: 'rgba(0,0,0, 0.16)'}}  className='w-[100%]' />
                            <Skeleton variant="rectangular"  height={150} style={{ backgroundColor: 'rgba(0,0,0, 0.16)'}}  className='w-[100%]' />
                        </> 
                        :
                        recommendedJobs?.map((item, index) => (
                            <div key={index}  className='w-full cursor-pointer p-4 lg:px-[20px] gap-[7px] lg:py-[22px] border border-[#E3E7E8] rounded-lg flex flex-col bg-[#fff] '>
                                <div className='flex gap-2 md:gap-5 justify-between '>
                                    {
                                        item?.company_logo ?
                                        <img src={item?.company_logo} alt={item?.company} className='w-[36px] h-[36px] lg:w-[40px] lg:h-[40px]' />
                                        :
                                        <div className='w-[36px] h-[36px] rounded-full border border-[#666] bg-[#fafafa] flex items-center justify-center'>
                                            <p className='text-[#000] text-base'>{item?.company.substring(0, 1)}</p>
                                        </div>
                                    }
                                    <div className='flex flex-col w-[233px] md:w-full lg:w-[529px] gap-[7px] cursor-pointer' onClick={() => {navigate("/job-board/details", { state: item }); window.scroll(0, 0)}}>
                                        <p className='font-mont text-[13px] lg:text-base font-semibold text-[#001A24]'>{item?.title}</p>
                                        <p className='text-xs lg:text-sm font-medium font-mont text-[#000D12]'>{item?.company}</p>
                                        <div className='flex gap-[6px]'>
                                            <div className='w-auto lg:w-auto p-1 flex items-center justify-center h-[25px] rounded-[2px] border border-[#1c1c1c1a]'>
                                                <p className='text-[11px] lg:text-sm font-mont text-[#000D12]'>{item?.location}</p>
                                            </div>
                                            <div className='w-[58px] lg:w-[85px] flex items-center justify-center h-[25px] rounded-[2px] border border-[#1c1c1c1a]'>
                                                <p className='text-[11px] lg:text-sm  font-mont text-[#000D12]'>{item?.job_style?.name}</p>
                                            </div>
                                            <div className={`${!item?.salary ? "hidden" : 'w-[68px] lg:w-[176px] flex items-center justify-center h-[25px] rounded-[2px] border border-[#1c1c1c1a]'}`} >
                                                <p className='hidden lg:flex text-sm font-mont text-[#000D12]'>{item?.salary || ""}</p>
                                                <p className='text-[11px] flex lg:hidden font-mont text-[#000D12]'>{item?.salary || ""}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div onClick={() => bookmarkJob(item?.id)} className={`${item?.bookmarked ? "bg-[#42B8BD]" : ""} w-[24px] h-[26px] lg:w-[30px] lg:h-[33px] border flex items-center justify-center border-[#CCD3D5] rounded-[4px] `}>
                                        <FaRegBookmark className={`${item?.bookmarked ? "text-[#fff]" : "text-[#CCD3D5]"} w-[11px] h-[10px] lg:w-[13px] lg:h-[14px]`}/>
                                    </div>
                                </div>
                                <div className='flex justify-end items-center gap-1.5'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <path d="M7.99951 2C4.68701 2 1.99951 4.6875 1.99951 8C1.99951 11.3125 4.68701 14 7.99951 14C11.312 14 13.9995 11.3125 13.9995 8C13.9995 4.6875 11.312 2 7.99951 2Z" stroke="#334D57" stroke-width="0.9025" stroke-miterlimit="10"/>
                                        <path d="M7.99951 4V8.5H10.9995" stroke="#334D57" stroke-width="0.9025" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                    <p className='font-mont text-sm text-[#00212D]'>{timeAgo(item?.updated_at)}</p>
                                </div>
                            </div>
                        ))
                    }
                   
                    {/* More Opportunities Mobile */}
                <div className='w-full flex flex-col my-4  gap-[8px] lg:hidden'>
                    <div className='flex items-center  gap-[10px]'>
                        <FaRegStar className="w-[16px] h-[16px] text-[#10303D]" />
                        <p className='font-mont text-sm lg:text-base text-[#000D12] font-semibold'>More Opportunities</p>
                    </div>

                    {
                        opportunitiesLoading ? 
                        <>
                            <Skeleton variant="rectangular" height={150} style={{ backgroundColor: 'rgba(249,249,249,0.86)' }} className='w-[100%]'  />
                            <Skeleton variant="rectangular" height={150} style={{ backgroundColor: 'rgba(249,249,249,0.86)' }} className='w-[100%]'  />
                            <Skeleton variant="rectangular" height={150} style={{ backgroundColor: 'rgba(249,249,249,0.86)' }} className='w-[100%]'  />
                        </>
                        :
                        moreOpportunities?.map((item, index) => (
                            <div key={index} onClick={() => {navigate("/job-board/details", { state: item }); window.scroll(0, 0)}} className='w-full cursor-pointer p-4 lg:px-[20px] gap-[7px] cursor-pointer lg:py-[22px] border border-[#E3E7E8] rounded-lg flex flex-col bg-[#fff] '>
                                <div className='flex gap-5 lg:justify-between '>
                                    {
                                        item?.company_logo ?
                                        <img src={item?.company_logo} alt={item?.company} className='w-[36px] h-[36px] lg:w-[40px] lg:h-[40px]' />
                                        :
                                        <div className='w-[36px] h-[36px] rounded-full border border-[#666] bg-[#fafafa] flex items-center justify-center'>
                                            <p className='text-[#000] text-base'>{item?.company?.substring(0, 1)}</p>
                                        </div>
                                    }
                                    <div className='flex flex-col w-[233px] md:w-full lg:w-[529px] gap-[7px]' >
                                        <p className='font-mont text-[13px] lg:text-base font-semibold text-[#001A24]'>{item?.title}</p>
                                        <p className='text-xs lg:text-sm font-medium font-mont text-[#000D12]'>{item?.company}</p>
                                        <div className='flex gap-[6px]'>
                                            <div className='w-auto p-1 flex items-center justify-center h-[25px] rounded-[2px] border border-[#1c1c1c1a]'>
                                                <p className='text-[11px] lg:text-sm font-mont text-[#000D12]'>{item?.location}</p>
                                            </div>
                                            <div className='w-[58px] lg:w-[85px] flex items-center justify-center h-[25px] rounded-[2px] border border-[#1c1c1c1a]'>
                                                <p className='text-[11px] lg:text-sm  font-mont text-[#000D12]'>{item?.job_style?.name}</p>
                                            </div>
                                            <div className={`${!item?.salary ? "hidden" : 'w-[68px] lg:w-[176px] flex items-center justify-center h-[25px] rounded-[2px] border border-[#1c1c1c1a]'}`} >
                                                <p className='hidden lg:flex text-sm font-mont text-[#000D12]'>{item?.salary || ""}</p>
                                                <p className='text-[11px] flex lg:hidden font-mont text-[#000D12]'>{item?.salary || ""}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div onClick={() => bookmarkJob(item?.id)} className={`${item?.bookmarked ? "bg-[#42B8BD]" : ""} w-[24px] h-[26px] lg:w-[30px] lg:h-[33px] border flex items-center justify-center border-[#CCD3D5] rounded-[4px] `}>
                                        <FaRegBookmark className={`${item?.bookmarked ? "text-[#fff]" : "text-[#CCD3D5]"} w-[11px] h-[10px] lg:w-[13px] lg:h-[14px]`}/>
                                    </div>
                                </div>
                                <div className='flex justify-end items-center gap-1.5'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <path d="M7.99951 2C4.68701 2 1.99951 4.6875 1.99951 8C1.99951 11.3125 4.68701 14 7.99951 14C11.312 14 13.9995 11.3125 13.9995 8C13.9995 4.6875 11.312 2 7.99951 2Z" stroke="#334D57" stroke-width="0.9025" stroke-miterlimit="10"/>
                                        <path d="M7.99951 4V8.5H10.9995" stroke="#334D57" stroke-width="0.9025" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                    <p className='font-mont text-sm text-[#00212D]'>{timeAgo(item?.updated_at)}</p>
                                </div>
                            </div>
                        ))

                    }
                </div>

            </div>
        </div>
        <div className='w-4/12 lg:flex flex-col gap-6 hidden ' style={{width:'29%'}}> {/* w-[332px] */}
            <div className='w-[308px] h-[355px] bg-[#fff] rounded-[10px] flex flex-col gap-4 items-center justify-center'>
                <div className='flex flex-col items-center justify-center gap-[8px]'>
                    {
                        userData?.profile_photo === null ? (
                            <div className='w-[142px] h-[142px] rounded-full border border-[#666] bg-[#fafafa] flex items-center justify-center'>
                                <p className='text-[#000] text-4xl'>{userData?.first_name?.substring(0, 1)}</p>
                            </div>
                        ) : (
                            <img src={userData?.profile_photo} alt='profile_photo' className='rounded-full w-[142px] h-[142px]' />
                        )
                    }
                    <p className='text-xs font-semibold font-mont text-[#667A81]'> 
                        {
                            userData?.profile_photo === null ? "0% complete" : "70% complete"
                        }
                    </p>
                </div>
                <div className='flex flex-col'>
                    <p className='text-[#000709] font-mont text-lg font-semibold'>{`${userData?.first_name} ${userData?.last_name}`}</p>
                    <p className='text-[#667A81] text-sm font-mont'>Product Designer</p>
                </div>
                <button onClick={() => navigate("/dashboard")} className=' bg-[#FBA599] border border-[#000709] rounded-[6px] py-[12px] px-[17px]'>
                    <p className='font-mont text-[13px] font-semibold '>Edit Profile</p>
                </button>
            </div>
            <div className='w-full flex flex-col gap-[7px] '>
                <div className='flex gap-[10px]'>
                    <FaRegStar className="w-[20px] h-[20px] text-[#10303D]" />
                    <p className='font-mont text-base text-[#000D12] font-semibold'>More Opportunities</p>
                </div>

                {
                    opportunitiesLoading ? 
                    <>
                        <Skeleton variant="rectangular" height={150} style={{ backgroundColor: 'rgba(0,0,0, 0.16)' }} className='w-[100%]'  />
                        <Skeleton variant="rectangular" height={150} style={{ backgroundColor: 'rgba(0,0,0, 0.16)' }} className='w-[100%]'  />
                        <Skeleton variant="rectangular" height={150} style={{ backgroundColor: 'rgba(0,0,0, 0.16)' }} className='w-[100%]'  />
                    </>
                    :
                    moreOpportunities?.map((item, index) => (
                        <div key={index} onClick={() => {navigate("/job-board/details", { state: item }); window.scroll(0, 0)}} className='w-[308px] gap-3 cursor-pointer bg-[#fff] px-[14px] py-[18px] justify-between rounded-lg border border-[#E3E7E8] flex'>
                            {
                                 
                                item?.company_logo ?
                                    <img src={item?.company_logo} alt={item?.company} className='w-[32px] h-[32px]'/>
                                :
                                <div className='w-[32px] h-[32px] rounded-full border border-[#666] bg-[#fafafa] flex items-center justify-center'>
                                    <p className='text-[#000] text-base'>{item?.company?.substring(0, 1)}</p>
                                </div>
                            }
                            
                            <div className='flex flex-col w-full  gap-[7px]' >
                                <p className='font-mont text-sm font-semibold text-[#001A24]'>{item?.title}</p>
                                <p className='text-[11px] font-medium font-mont text-[#000D12]'>{item?.company}</p>
                                <div className='flex gap-[6px]'>
                                    <div className='w-auto flex p-1 items-center justify-center h-[17px] rounded-[2px] border border-[#1c1c1c1a]'>
                                        <p className='text-[10px] font-mont text-[#000D12]'>{item?.location}</p>
                                    </div>
                                    <div className='w-auto flex p-1 items-center justify-center h-[17px] rounded-[2px] border border-[#1c1c1c1a]'>
                                        <p className='text-[10px] font-mont text-[#000D12]'>{item?.job_style?.name}</p>
                                    </div>
                                    <div className={`${!item?.salary ? "hidden" : 'w-[113px] flex items-center justify-center h-[17px] rounded-[2px] border border-[#1c1c1c1a]'}`} >
                                        <p className='text-[10px] font-mont text-[#000D12]'>{item?.salary}</p>
                                    </div>
                                </div>
                                <div className='flex items-center gap-1.5'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 16 16" fill="none">
                                        <path d="M7.99951 2C4.68701 2 1.99951 4.6875 1.99951 8C1.99951 11.3125 4.68701 14 7.99951 14C11.312 14 13.9995 11.3125 13.9995 8C13.9995 4.6875 11.312 2 7.99951 2Z" stroke="#334D57" stroke-width="0.9025" stroke-miterlimit="10"/>
                                        <path d="M7.99951 4V8.5H10.9995" stroke="#334D57" stroke-width="0.9025" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                    <p className='font-mont text-[11px] text-[#334D57]'>{timeAgo(item?.updated_at)}</p>
                                </div>
                            </div>
                            <div onClick={() => bookmarkJob(item?.id)} className={`${item?.bookmarked ? "bg-[#42B8BD]" : ""} w-[24px] h-[26px] lg:w-[30px] lg:h-[33px] border flex items-center justify-center border-[#CCD3D5] rounded-[4px] `}>
                                <FaRegBookmark className={`${item?.bookmarked ? "text-[#fff]" : "text-[#CCD3D5]"} w-[8px] h-[10px]`} />
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
                </div> */}
                {/* <div className='w-[308px]  bg-[#fff] px-[14px] py-[18px] justify-between rounded-lg border border-[#E3E7E8] flex'>
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

        <ModalPop isOpen={openFilter} closeModal={() => setOpenFilter(false)}>
            <FilterModal handleClose={() => setOpenFilter(false)}/>

        </ModalPop>
    </div>
  )
}

export default JobBoard
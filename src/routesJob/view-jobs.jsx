import React, { useEffect, useState, useRef, useCallback } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { baseURL } from '../utils/baseURL'
import { numberWithCommas, formatTimeDifference } from '../libs/helperFunctions'
import Navigation from '../ComponentsJob/nav/navigation'
import Hamburger from '../ComponentsJob/hamburger'
import  Ellipse  from '../assets/svg/Ellipse 2764.svg'
import  Time  from '../assets/svg/time-outline 1.svg'
import  Send  from '../assets/svg/Send.svg'
import  Bookmark  from '../assets/svg/Bookmark2.svg'
import Buttons from '../ComponentsJob/button'
import JobDescription from '../ComponentsJob/job/jobDescription'
import SideJob from '../ComponentsJob/job/sideJob'
import Modal from '../ComponentsJob/modal'
import SaveJob from '../ComponentsJob/job/saveJob'

export default function ViewJobs({ hamburger, setHamburger }) {
    const id = useParams();
    const jobId = id?.id;
    const [interact, setInteract] = useState(false);
    const [jobInfo, setJobInfo] = useState(null);
    const [jobError, setJobError] = useState(false);
    const [similarJobs, setSimilarJobs] = useState(null);
    const [marginTop, setMarginTop] = useState('0');

    const navigationRef = useRef(null);

    const calculateMarginTop = useCallback(() => {
        if (navigationRef.current) {
            return `${navigationRef.current.clientHeight + 10}px`;
        }
        return '0';
    }, []);

    useEffect(() => {
        setMarginTop(calculateMarginTop());
        const handleResize = () => {
            setMarginTop(calculateMarginTop());
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [calculateMarginTop]);

    useEffect(() => {
        fetchJobOpportunity()
    }, [])
    
    const fetchJobOpportunity = async () => {
        try{
            const response = await axios.get(`${baseURL}opportunities/view/${jobId}`);
            if (response.data.status === 'success'){
                setJobInfo(response?.data?.data)
                setSimilarJobs(response?.data?.similar_jobs)
                setJobError(false)
            }
        } catch(error) {
            if (error.response?.data?.message === "Opportunity not found") {
                setJobError(!jobError)
            } else {
                console.log(error)
                setJobError(!jobError)
            }
        }
    }

    return (
        <div className='bg-background synergyy-jobs lg:h-screen h-auto flex flex-col'>
            <div className='lg:block hidden'>
                <Navigation view={'view'} setHamburger={setHamburger} />
            </div>
            {hamburger && <Hamburger setHamburger={setHamburger} />}
            {jobError && <p className='error__job text-white'>Oops! Job Opportunity doesn't exist</p>}
            {jobInfo && (
                <div className="text-white w-full flex lg:flex-row flex-col sm:gap-8 gap-[51px] mb-1 lg:mt-3 lg:pl-[2.8%] lg:pr-[5.6%] flex-1 lg:h-[83vh]">
                    <div className='lg:w-[61%] lg:h-[95%] h-full lg:bg-backgroundLight rounded-[24px] lg:px-8 lg:pt-5 pt-2 pb-1 overflow-y-scroll'>
                        <div className='lg:relative lg:bg-inherit fixed bg-background w-full top-0' ref={navigationRef}>
                            <div className='lg:hidden block'>
                                <Navigation view={'view'} setHamburger={setHamburger} />
                            </div>
                            <div className='px-8 lg:px-0 job-desc'>
                                <div className='w-full flex justify-between gap-2'>
                                    <div className='flex flex-col sm:gap-1 gap-2'>
                                        <h1 className='sm:text-[22px] text-[18px] font-semibold capitalize'>{jobInfo?.title}</h1>
                                        <p className='capitalize sm:text-[14px] text-[15px] text-[#42B8BD]'>{jobInfo?.company}</p>
                                        <p className='capitalize sm:text-[14px] text-[12.5px] flex items-center text-teal'>{jobInfo?.job_style?.name}<span className='mx-[9.6px]'>|</span>{jobInfo?.location}<span className='mx-[9.6px]'><img src={Ellipse} alt='Ellipse' /></span>{jobInfo?.job_type?.name}</p>
                                        <div className='flex gap-[5.41px] items-center'>
                                            <img src={Time} alt='time' />
                                            <p className='text-[13px] hidden sm:block text-[#BBD4DD]'>Posted {formatTimeDifference(jobInfo?.created_at)}</p>
                                            <p className='text-[12px] sm:hidden text-[#BBD4DD]'>{formatTimeDifference(jobInfo?.created_at)}</p>
                                        </div>
                                    </div>
                                    <div className='h-auto flex flex-col justify-between items-end'>
                                        <div className='w-12 h-12 rounded-[7.22px] border-[0.902px] border-[#FE9730]'>
                                            <img src={jobInfo?.company_logo} alt='company' className='rounded-[7.22px] w-full h-full object-contain' />
                                        </div>
                                        {(jobInfo?.salary || jobInfo?.min_salary || jobInfo?.max_salary) && <p className='hidden sm:block text-[14px]'>{jobInfo?.currency?.sign}{numberWithCommas(jobInfo?.min_salary)} - {jobInfo?.currency?.sign}{numberWithCommas(jobInfo?.max_salary)}</p>}
                                    </div>
                                </div>
                                <div className='sm:mt-3 mt-6 flex sm:gap-[18px] gap-4'>
                                    <Buttons text={'Apply'} padding='8px 48px' height={'34px'} radius={'4.5px'} hoverColor='#F56A6A' functions={() => setInteract(!interact)} type='button' width='141px' weight='600' size='14px' color='#041F29' bgColor='#FBA599' />
                                    <Buttons text={'Share'} height={'34px'} radius={'4.5px'} gap={'6.75px'} type='button' functions={() => setInteract(!interact)} icons={<img src={Send} alt='Send' />} width='101.75px' weight='600' size='14px' padding='8px 10px' color='#F9FAFB' bgColor='inherit' border={'1.125px solid #FE9730'} />
                                    <div onClick={() => setInteract(!interact)} className='bg-background w-[34.9px] h-[33px] p-[10px] rounded-[4px] border border-[#10303D] flex justify-center items-center cursor-pointer'>
                                    <img src={Bookmark} alt='Bookmark' />
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='hidden lg:block mt-[30px]'>
                            <JobDescription info={jobInfo}/>
                        </div>
                        <div className='lg:hidden' style={{ marginTop: calculateMarginTop() }}>
                            <JobDescription info={jobInfo}/>
                        </div>
                    </div>
                    <div className='flex-1 lg:h-[95%] overflow-y-scroll h-full px-8 lg:px-0'>
                        <SideJob info={similarJobs} drawer={interact} setDrawer={setInteract}/>
                    </div>
                </div>
            )}
            <Modal open={interact} setOpen={setInteract}>
                <SaveJob setDrawer={setInteract}/>
            </Modal>
        </div>
    )
}

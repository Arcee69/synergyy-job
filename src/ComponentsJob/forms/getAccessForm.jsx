import React, { useState, useRef, useEffect } from 'react';
import Buttons from '../button';
import axios from 'axios';
import { baseURL } from '../../utils/baseURL';
import { objectToFormData } from '../../utils/objectToFormData';
import { SnackbarProvider, enqueueSnackbar } from 'notistack';
import {CircularProgress} from "@mui/material"


export default function GetAccessForm(){
    const buttonRef = useRef(null)
    const buttonRef2 = useRef(null)

    const initialValues = {name:'', email:'', phone:'', organization:'', location:'', role:'', role_hiring_for:'', experience:'', job_type_id:undefined, job_style_id:undefined}
    const [accessData, setAccessData] = useState(initialValues)
    const [validateFields, setValidateFields] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [jobInfo, setJobInfo] = useState()
    
    useEffect(() => {
        const fetchJobTypes = async() => {
            const response = await axios.get(`${baseURL}opportunities/load_job_types`)
            setJobInfo(response.data.data)
        }
        fetchJobTypes()
    },[])

    const handleSubmit = async() => {
        setIsLoading(true)
        if (!accessData.name || !accessData.email || !accessData.phone || !accessData.organization || !accessData.location || !accessData.role || !accessData.role_hiring_for || !accessData.experience || !accessData.job_type_id || !accessData.job_style_id){
            setValidateFields(true)
            setIsLoading(false)
            return
        }
        console.log(accessData)
        const formData = objectToFormData(accessData)
        const response = await axios.post(`${baseURL}early-access`, formData)
        if (response.data.status ==='success'){
            buttonRef?.current.click()
            setIsLoading(false)
            setAccessData(initialValues)
            setValidateFields(false)
        }else{
            buttonRef2?.current.click()
            setIsLoading(false)
        }
        console.log(response.data)
    }
    
    const showTick1  = () => {
        enqueueSnackbar('Form Submitted', { autoHideDuration: 3500, variant:'success', SnackbarContentProps: {
            style: { backgroundColor: '#ff9800', color: '#fff' },
          }, })
    }
    const showTick2  = () => {
        enqueueSnackbar('Form Submission Failed!', { autoHideDuration: 3500, variant:'success', SnackbarContentProps: {
            style: { backgroundColor: '#ff9800', color: '#fff' },
          }, })
    }


    return (
        <div>
                <SnackbarProvider
                  anchorOrigin={{
                    vertical: 'top', // Set to 'center'
                    horizontal: 'right', // Set to 'center'
                  }}
                  classes={{variantSuccess: {backgroundColor:'red'}}} />
                    <button className='hidden' ref={buttonRef} onClick={showTick1}>Show snackbar</button>
                    <button className='hidden' ref={buttonRef2} onClick={showTick2}>Show snackbar</button>
                {/* <form> */}
                    <div className="flex flex-col mb-[24px] mt-[28px] mid:mt-[48px] gap-2">
                        <label htmlFor="name" className="text-[15px] capitalize text-background">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={accessData.name}
                            className="border-borders border-[0.8px] rounded-[16px] px-4 py-3 focus:outline-none height-[38px]"
                            onChange={(e) => {
                                setAccessData(val => {
                                    return {...val, [e.target.name]:e.target.value}
                                })
                            }}
                        />
                        {validateFields && !accessData.name &&<p className="text-red-500">This field is required</p>}
                    </div>

                    <div className="flex flex-col mb-[24px] gap-2">
                        <label htmlFor="role" className="text-[15px] capitalize text-background">
                            Current Role (None if unemployed)
                        </label>
                        <input
                            type="text"
                            id="role"
                            name="role"
                            value={accessData.role}
                            className="border-borders border-[0.8px] rounded-[16px] px-4 py-3 focus:outline-none height-[38px]"
                            onChange={(e) => {
                                setAccessData(val => {
                                    return {...val, [e.target.name]:e.target.value}
                                })
                            }}
                        />
                        {validateFields && !accessData.role &&<p className="text-red-500">This field is required</p>}
                    </div>

                    <div className='mid:grid grid-cols-2 gap-x-[16px] gap-y-[24px] mid:mb-[24px]'>
                        {/* <div className="flex flex-col mb-[24px] mid:mb-[0] gap-2">
                            <label htmlFor="role" className="text-[15px] capitalize text-background">
                                Your Role
                            </label>
                            <input
                                type="text"
                                id="role"
                                name="role"
                                value={accessData.role}
                                className="border-borders border-[0.8px] rounded-[16px] px-4 py-3 focus:outline-none height-[38px]"
                                onChange={(e) => {
                                    setAccessData(val => {
                                        return {...val, [e.target.name]:e.target.value}
                                    })
                                }}
                            />
                           {validateFields && !accessData.role &&<p className="text-red-500">This field is required</p>}
                        </div> */}

                        <div className="flex flex-col mb-[24px] mid:mb-[0] gap-2">
                            <label htmlFor="role" className="text-[15px] capitalize text-background">
                                Email
                            </label>
                            <input
                                type="email"
                                id="workEmail"
                                name="email"
                                value={accessData.email}
                                className="border-borders border-[0.8px] rounded-[16px] px-4 py-3 focus:outline-none height-[38px]"
                                onChange={(e) => {
                                    setAccessData(val => {
                                        return {...val, [e.target.name]:e.target.value}
                                    })
                                }}
                            />
                            {validateFields && !accessData.email &&<p className="text-red-500">This field is required</p>}
                        </div>

                        <div className="flex flex-col mb-[24px] mid:mb-[0] gap-2">
                            <label htmlFor="role" className="text-[15px] capitalize text-background">
                                phone
                            </label>
                            <input
                                type="text"
                                placeholder="+234 808 0000 001"
                                id="phoneNumber"
                                name="phone"
                                value={accessData.phone}
                                className="border-borders border-[0.8px] rounded-[16px] px-4 py-3 focus:outline-none"
                                onChange={(e) => {
                                    setAccessData(val => {
                                        return {...val, [e.target.name]:e.target.value}
                                    })
                                }}
                            />
                            {validateFields && !accessData.phone &&<p className="text-red-500">This field is required</p>}
                        </div>
                    </div>

                        <div className="flex flex-col mb-[24px] gap-2">
                            <label htmlFor="role" className="text-[15px] capitalize text-background">
                                Job Role you’re aspiring for
                            </label>
                            <input
                                type="text"
                                // placeholder="Enter role"
                                id="jobRole"
                                name="role_hiring_for"
                                value={accessData.role_hiring_for}
                                className="border-borders border-[0.8px] rounded-[16px] px-4 py-3 focus:outline-none"
                                onChange={(e) => {
                                    setAccessData(val => {
                                        return {...val, [e.target.name]:e.target.value}
                                    })
                                }}
                            />
                            {validateFields && !accessData.role_hiring_for &&<p className="text-red-500">This field is required</p>}
                        </div>
                    <div className='mid:grid grid-cols-2 gap-x-[16px] gap-y-[24px] mid:mb-[40px]'>
                        
                    <div className="flex flex-col mb-[24px] mid:mb-0 gap-2">
                            <label htmlFor="role" className="text-[15px] capitalize text-background">
                            Experience
                            </label>
                            <div className='border-borders border-[0.8px] rounded-[16px] px-[16px] py-[12px]'>
                            <select  placeholder="Select an option"
                                id="experience"
                                name="experience"
                                value={accessData.experience}
                                className="focus:outline-none text-[16px] bg-transparent  h-full w-full custom-dropdown" style={accessData.experience ?{}:{color:'rgba(0, 20, 27, 0.5)'}}
                                onChange={(e) => setAccessData(prevData => {
                                    return {...prevData, [e.target.name]:e.target.value}
                                })}
                                >
                           <option value={''} className=''>Select</option>
                           <option value="Entry Level (1-3 yrs)">Entry Level (1-3 yrs)</option>
                           <option value="Mid Level (3-7 yrs)">Mid Level (3-7 yrs)</option>
                           <option value="Senior Level (7+ yrs)">Senior Level (7+ yrs)</option>
                            </select>
                            </div>
                            {validateFields && !accessData.experience &&<p className="text-red-500">This field is required</p>}
                        </div>

                        <div className="flex flex-col mb-[24px] mid:mb-0 gap-2">
                            <label htmlFor="jobType" className="text-[15px] capitalize text-background">
                            Job Type
                            </label>
                            <div className='border-borders border-[0.8px] rounded-[16px] px-[16px] py-[12px]'>
                            <select  placeholder="Select an option"
                                id="jobType"
                                name="job_type_id"
                                value={accessData.job_type_id}
                                className="focus:outline-none text-[16px] bg-transparent  h-full w-full custom-dropdown" style={accessData.job_type_id ? {}: {color:'rgba(0, 20, 27, 0.5)'}}
                                onChange={(e) => setAccessData(prevData => {
                                    return {...prevData, [e.target.name]:e.target.value}
                                })}
                                >
                           <option value={''} className=''>Select</option>
                           {jobInfo?.job_types.map((job, index) => {
                            return <option key={index} value={job.id}>{job.name}</option>
                           })}
                            </select>
                            </div>
                            {validateFields && !accessData.job_type_id &&<p className="text-red-500">This field is required</p>}
                        </div>

                        
                        <div className="flex flex-col mb-[24px] mid:mb-0 gap-2">
                            <label htmlFor="workStyle" className="text-[15px] capitalize text-background">
                            Work Style
                            </label>
                            <div className='border-borders border-[0.8px] rounded-[16px] px-[16px] py-[12px]'>
                            <select  placeholder="Select an option"
                                id="workStyle"
                                name="job_style_id"
                                value={accessData.job_style_id}
                                className="focus:outline-none text-[16px] bg-transparent  h-full w-full custom-dropdown" style={accessData.job_style_id ?{color:'black'}: {color:'rgba(0, 20, 27, 0.5)'}}
                                onChange={(e) => setAccessData(prevData => {
                                    return {...prevData, [e.target.name]:e.target.value}
                                })}
                                >
                           <option value={''} className=''>Select</option>
                           {jobInfo?.job_styles.map((job, index) => {
                            return <option key={index} value={job.id}>{job.name}</option>
                           })}
                            </select>
                            </div>
                            {validateFields && !accessData.job_style_id &&<p className="text-red-500">This field is required</p>}
                        </div>

                            <div className="flex flex-col mb-[24px] mid:mb-[0] gap-2">
                            <label htmlFor="location" className="text-[15px] capitalize text-background">
                                Location
                            </label>
                            <input
                                type="text"
                                placeholder="Toronto, Canada"
                                id="location"
                                name="location"
                                value={accessData.location}
                                className="border-borders border-[0.8px] rounded-[16px] px-4 py-3 focus:outline-none"
                                onChange={(e) => {
                                    setAccessData(val => {
                                        return {...val, [e.target.name]:e.target.value}
                                    })
                                }}
                            />
                            {validateFields && !accessData.location &&<p className="text-red-500">This field is required</p>}
                        </div>
                    </div>
            

                    <Buttons text={isLoading ? '': 'Continue'} hoverColor='#F56A6A' type='button' width='100%' weight='600' size='16px' padding='14px 48px' color='#00141B' bgColor='#FBA599' functions={handleSubmit} frontIcon={isLoading && <CircularProgress size={'30px'} style={{color:"white"}} />} />
                {/* </form> */}
        </div>
    )
}
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CgSpinner } from 'react-icons/cg'
import { Form, Formik } from 'formik'

import { updateProfile } from '../../../../features/profile/updateProfileSlice'
import { IoIosArrowDown } from 'react-icons/io'

const Preferences = ({ setActive }) => {
    const [employmentAvailability, setEmploymentAvailability] = useState("")
    const [employmentStyle, setEmploymentStyle] = useState("")
    const [employmentStatus, setEmploymentStatus] = useState("")
    const [workPreferenceLoading, setWorkPreferenceLoading] = useState(false)

    const dispatch = useDispatch()

    const { loading } = useSelector(state => state.updateProfileData)

    const employmentKind =[
        "Full-time", "Part-time", "Contract", "Temporary", "Internship"
      ]

    const jobStatus =[
        "Actively looking for opportunities", 
        "Open to new opportunities but not actively searching", 
        "Currently employed but open to considering new roles", 
        "Exploring options for future opportunities", 
      ]

    const workKind = [
        "On-site", 
        "Remote", 
        "Flexible hours", 
        "Hybrid", 
    ]

    
      const handleEmploymentKindInputChange = (item) => {
        setEmploymentAvailability(item)
      }
    
      const handleEmploymentStyleInputChange = (item) => {
        setEmploymentStyle(item)
      }
    
      const handleStatus = (item) => {
        setEmploymentStatus(item)
      }
    
      const submitWorkPreferenceForm = (values, action) => {
        // setWorkPreferenceLoading(true)
          const data = {
            employment_style: values?.workStyle,   //employmentStyle,
            employment_type: values?.jobType, //employmentAvailability,
            employment_search_status: values?.status //employmentStatus
          };
          dispatch(updateProfile(data))
          .then((res) => {
            console.log(res, "dandizzy")
            localStorage.setItem("resumeUnlocked", true)
            setActive(7)
          })
         
      }

  return (
    <div className="flex flex-col gap-4 mt-4">
         <div className='lg:w-[756px] relative bg-[#fff] mb-5 rounded p-4 gap-5 '>
            <Formik
                initialValues={{
                    jobType: "",
                    workStyle: "",
                    status: "",
                }}
                // validationSchema={experienceFormValidationSchema}
                onSubmit={(values, action) => {
                    console.log(values, "market")
                    // setShowWorkExperienceInput(prev => !prev)
                    submitWorkPreferenceForm(values, action);
                }}
            >
                {({
                    handleSubmit,
                    handleChange,
                    dirty,
                    isValid,
                    setFieldValue,
                    errors,
                    touched,
                    // setFieldTouched,
                    values,
                }) => (
                    <Form onSubmit={handleSubmit} className="flex ">
                        <div className="w-full flex flex-col gap-[24px]">
                            <div className='flex items-center justify-between'>
                                <p className='text-[#00141B] font-mont text-lg font-medium'>Work Preferences</p>
                            </div>                            

                            <div className='flex lg:items-center flex-col gap-[16px] lg:flex-row flex-wrap '>
                                <div className='flex flex-col lg:flex-row lg:items-center gap-[14px]'>
                                    <div className='w-full flex flex-col gap-[6px]'>
                                        <label htmlFor='Job Type' className='font-mont font-medium text-[#334D57] text-sm'>Job type</label>
                                        <div
                                            className="outline-none w-full lg:w-[342px]  h-[45px] flex items-center justify-between text-[#99A6AB] appearance-none  font-mont text-xs bg-[#FFF] border rounded border-[#C6C6C6] p-3 h-[38px] border-solid "
                                        >
                                        <select
                                            name="jobType"
                                            value={values?.jobType}
                                            onChange={handleChange}
                                            className='appearance-none w-full lg:w-[342px] bg-transparent outline-none'
                                        >
                                            <option value="" defaultValue>Select job type</option>
                                            {employmentKind.map((item, index) => (
                                            <option key={index} value={item} onClick={() => setFieldValue("jobType", item)}>
                                                {item}
                                            </option>
                                            ))}
                                        </select>
                                            <IoIosArrowDown className="w-[22px] h-[22px] text-[#00212D]" />
                                        </div>
                                        {errors.jobType && touched.jobType ? (
                                        <div className="text-RED-_100 text-xs">
                                            {errors.jobType}
                                        </div>
                                        ) : null}
                                    </div>

                                    <div className='w-full flex flex-col gap-[6px]'>
                                        <label htmlFor='Work Style' className='font-mont font-medium text-[#334D57] text-sm'>Work style</label>
                                        <div
                                            className="outline-none w-full lg:w-[342px] h-[45px] flex items-center justify-between text-[#99A6AB] appearance-none  font-mont text-xs bg-[#FFF] border rounded-lg border-[#C6C6C6] p-3 h-[38px] border-solid "
                                        >
                                        <select
                                            name="workStyle"
                                            value={values?.workStyle}
                                            onChange={handleChange}
                                            className='appearance-none w-full lg:w-[342px] bg-transparent outline-none'
                                        
                                        >
                                            <option value="" defaultValue>Select work style</option>
                                            {
                                                workKind.map((item, index) => (
                                                <option key={index} value={item} onClick={() => setFieldValue("workStyle", item)}>
                                                    {item}
                                                </option>
                                                ))
                                            }
                                        </select>
                                        <IoIosArrowDown className="w-[22px] h-[22px] text-[#00212D]" />
                                        </div>
                                        {errors.workStyle && touched.workStyle ? (
                                        <div className="text-RED-_100 text-xs">
                                            {errors.workStyle}
                                        </div>
                                        ) : null}
                                    </div>
                                </div>
                            

                                {/* <div className="flex flex-col lg:flex-row lg:items-center  gap-[14px]"> */}
                                    <div className='w-full flex flex-col gap-[6px]'>
                                        <label htmlFor='Job search status' className='font-mont font-medium text-[#334D57] text-sm'>Job search status</label>
                                        <div
                                            className="outline-none w-full lg:w-[342px] h-[45px] flex items-center justify-between text-[#99A6AB] appearance-none  font-mont text-xs bg-[#FFF] border rounded-lg border-[#C6C6C6] p-3 h-[38px] border-solid "
                                        >
                                        <select
                                            name="status"
                                            value={values?.status}
                                            onChange={handleChange}
                                            className='appearance-none w-full lg:w-[342px] bg-transparent outline-none'
                                        >
                                            <option value="" defaultValue>Select job search status</option>
                                            {
                                                jobStatus.map((item, index) => (
                                                <option key={index} value={item} onClick={() => setFieldValue("status", item)}>
                                                    {item}
                                                </option>
                                                ))
                                            }
                                        </select>
                                        <IoIosArrowDown className="w-[22px] h-[22px] text-[#00212D]" />
                                        </div>
                                        {errors.status && touched.status ? (
                                        <div className="text-RED-_100 text-xs">
                                            {errors.status}
                                        </div>
                                        ) : null}
                                    </div>
                               
                                {/* </div> */}
                            </div>

                            <div className="flex justify-end fixed lg:right-[30%] top-[90%]">
                                <button 
                                    className={`${isValid ? "bg-[#FDB181] text-[#00141B]" : "bg-[#BABABA] text-[#00141B]"} w-[300px] lg:w-[251px] h-[52px] rounded-[4px] border border-[#000709] flex justify-center items-center`}
                                    type='submit'
                                    disabled={!isValid}
                                    // onClick={() => submitWorkPreferenceForm()} employmentAvailability && employmentStyle && employmentStatus 
                                >
                                    <p className=' text-base font-mont font-semibold'>{loading ? <CgSpinner className=" animate-spin text-lg " /> : 'Save & Continue'}</p>
                                </button>
                            </div>

                        </div>
                    </Form>
                )}
            </Formik>
      
            
            {/* <div className='flex justify-end mt-0 fixed lg:right-[26%] top-[90%]'>
                <button 
                    className={`${employmentAvailability && employmentStyle && employmentStatus ? "bg-[#000] text-[#fff]" : "bg-[#BABABA] text-[#00141B]"} w-[300px] lg:w-[251px] h-[52px] rounded-[4px] border border-[#000709] flex justify-center items-center`}
                    type='submit'
                    onClick={() => submitWorkPreferenceForm()}
                >
                    <p className=' text-base font-mont font-semibold'>{loading ? <CgSpinner className=" animate-spin text-lg " /> : 'Save & Continue'}</p>
                </button>
            </div> */}
      </div>
    </div>
  )
}

export default Preferences
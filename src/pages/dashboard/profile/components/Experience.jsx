import React, { useState, useEffect} from 'react'
import { Form, Formik } from 'formik';
import * as Yup from "yup"
import { FaPlus } from 'react-icons/fa6';
import { useSelector, useDispatch } from 'react-redux';
import { IoIosArrowDown } from "react-icons/io";

import Work from "../../../../assets/img/work.png"
import Bin from "../../../../assets/img/bin.png"

import { getExperience } from '../../../../features/credentials/getExperienceSlice';
import { addExperience } from '../../../../features/credentials/addExperienceSlice';
import { removeExperience } from '../../../../features/credentials/removeExperienceSlice';
import { CgSpinner } from 'react-icons/cg';


const Experience = ({ setActive }) => {
    const [showWorkExperienceInput, setShowWorkExperienceInput] = useState(false);
    const [check, setCheck] = useState(false);

    const handleCheck = () => {
        setCheck(prev => !prev)
      }

    const experienceFormValidationSchema = Yup.object().shape({
        jobTitle: Yup.string().required(),
        companyName: Yup.string().required(),
        startMonth: Yup.string().required(),
        startYear: Yup.number().required(),
        endMonth: Yup.string(),
        endYear: Yup.number()
    });

    const dispatch = useDispatch()

    const fetchExperience = useSelector(state => state.fetchExperience)
    const workData = fetchExperience?.data?.data
    console.log(fetchExperience, "asap")
  
    const postExperience = useSelector(state => state.postExperience)
    const addExperienceLoading = postExperience?.loading
  
    const deleteExperience = useSelector(state => state.removeExperience)
    const deleteExperienceLoading = deleteExperience?.loading
  
    useEffect(() => {
      dispatch(getExperience())
    }, [addExperienceLoading, deleteExperienceLoading])

    const handleClick = () => {
        setShowWorkExperienceInput(prev => !prev)
      }

    //For Work Experience  
    const submitExperienceForm = (values, action) => {
        let formData = new FormData();
        formData.append("company", values?.companyName),
        formData.append("role", values?.jobTitle) 
        formData.append("start_date", `${values?.startMonth} ${values?.startYear}`)
        formData.append("end_date", `${check ? "present" : `${values?.startMonth} ${values?.startYear}`}`)

        dispatch(addExperience(formData))
        .then((res) => {
            console.log(res, "apple")
            if(res?.meta?.requestStatus === "fulfilled"){
                action.resetForm()
                setActive(4)
            }
        })
    }

    const deleteWorkExperience = (values) => {
        console.log(values, "lala")
        let formData = new FormData();
        formData.append("experience_id", values)

        dispatch(removeExperience(formData))
    };

    const Month = [
        "January", 
        "Feburary", 
        "March", 
        "April", 
        "May", 
        "June", 
        "July", 
        "August", 
        "September", 
        "October", 
        "November", 
        "December"
      ]
    
      const Year = [
        "2000", 
        "2001", 
        "2002", 
        "2003", 
        "2004", 
        "2005", 
        "2006", 
        "2007", 
        "2008", 
        "2009", 
        "2010", 
        "2011", 
        "2012", 
        "2013", 
        "2014"
      ]

  return (
    <div className="flex flex-col mb-14 gap-4 mt-4">
        <div className='w-full  flex flex-col bg-[#fff] rounded-lg p-4'>
            <p className='font-semibold text-lg font-mont text-[#1B565B]'>Experience</p>
            <p className='text-[#334D57] font-mont text-[15px]'>Add information about yourself to make it easier for companies to know you</p>
        </div>

        <div className='w-full flex flex-col bg-[#fff] overflow-x-hidden overflow-y-scroll rounded-lg p-4'> {/*  lg:w-[815px] */}
            <Formik
                initialValues={{
                    jobTitle: "",
                    companyName: "",
                    startMonth: "",
                    startYear: "",
                    endMonth: "",
                    endYear: ""
                }}
                    validationSchema={experienceFormValidationSchema}
                    onSubmit={(values, action) => {
                    console.log(values, "market")
                    setShowWorkExperienceInput(prev => !prev)
                    submitExperienceForm(values, action);
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
                        <p className='text-[#00141B] font-mont text-lg font-medium'>Work Experience</p>
                        {showWorkExperienceInput || workData?.length === 0 ? 
                            <button
                            type='submit'
                            className='w-[67px] h-[30px] bg-transparent flex items-center font-semibold text-sm text-[#000709] justify-center'
                            >
                            Save
                            </button> 
                        : 
                            <div className='w-[28px] h-[28px] cursor-pointer bg-[#CCD3D566] p-[7px]' onClick={() => handleClick()}>
                            <FaPlus className="w-[13px] h-[13px] text-[#000709]" />
                            </div>
                        } 
                        </div>

                        {showWorkExperienceInput  || workData?.length === 0 ? (
                        <>
                            <div className='w-full flex flex-col gap-[6px]'>
                            <label htmlFor='jobTitle' className='font-mont font-medium text-[#334D57] text-sm'>Job Title</label>
                            <input
                                name="jobTitle"
                                placeholder="Add Job Title"
                                type="text" 
                                value={values?.jobTitle}
                                onChange={handleChange}
                                className="outline-none w-full text-[#99A6AB]  font-mont text-xs bg-[#F9FAFB] border rounded border-[#C6C6C6] p-3 h-[38px] border-solid "
                            />
                            {errors.jobTitle && touched.jobTitle ? (
                            <div className="text-RED-_100 text-xs">
                                {errors.jobTitle}
                            </div>
                            ) : null}
                            </div>

                            <div className='w-full flex flex-col gap-[6px]'>
                            <label htmlFor='companyName' className='font-mont font-medium text-[#334D57] text-sm'>Company Name</label>
                            <input
                                name="companyName"
                                placeholder="Add company name"
                                type="text" 
                                value={values?.companyName}
                                onChange={handleChange}
                                className="outline-none w-full text-[#99A6AB]  font-mont text-xs bg-[#F9FAFB] border rounded border-[#C6C6C6] p-3 h-[38px] border-solid "
                            />
                            {errors.companyName && touched.companyName ? (
                            <div className="text-RED-_100 text-xs">
                                {errors.companyName}
                            </div>
                            ) : null}
                            </div>

                            <div className='flex items-center gap-[14px]'>
                            <div className='w-full flex flex-col gap-[6px]'>
                                <label htmlFor='startMonth' className='font-mont font-medium text-[#334D57] text-sm'>Start Month</label>
                                <div
                                className="outline-none w-full  h-[45px] flex items-center justify-between text-[#99A6AB] appearance-none  font-mont text-xs bg-[#F9FAFB] border rounded border-[#C6C6C6] p-3 h-[38px] border-solid "
                                >
                                <select
                                    name="startMonth"
                                    value={values?.startMonth}
                                    onChange={handleChange}
                                    className='appearance-none w-full bg-transparent outline-none'
                                >
                                    <option value="" defaultValue>Month</option>
                                    {Month.map((item, index) => (
                                    <option key={index} value={item}>{item}</option>
                                    ))}
                                </select>
                                <IoIosArrowDown className="w-[22px] h-[22px] text-[#42B8BD]" />
                                </div>
                                {errors.startMonth && touched.startMonth ? (
                                <div className="text-RED-_100 text-xs">
                                    {errors.startMonth}
                                </div>
                                ) : null}
                            </div>
                            <div className='w-full flex flex-col gap-[6px]'>
                                <label htmlFor='startYear' className='font-mont font-medium text-[#334D57] text-sm'>Year</label>
                                <div
                                className="outline-none w-full  h-[45px] flex items-center justify-between text-[#99A6AB] appearance-none  font-mont text-xs bg-[#F9FAFB] border rounded border-[#C6C6C6] p-3 h-[38px] border-solid "
                                >
                                <select
                                    name="startYear"
                                    value={values?.startYear}
                                    onChange={handleChange}
                                    className='appearance-none w-full bg-transparent outline-none'
                                >
                                    <option value="" defaultValue>Year</option>
                                    {Year.map((item, index) => (
                                    <option key={index} value={item}>{item}</option>
                                    ))}
                                </select>
                                <IoIosArrowDown className="w-[22px] h-[22px] text-[#42B8BD]" />
                                </div>
                                {errors.startYear && touched.startYear ? (
                                <div className="text-RED-_100 text-xs">
                                    {errors.startYear}
                                </div>
                                ) : null}
                            </div>
                            </div>
                            <div className='flex items-center gap-[7px]'>
                            <input 
                                type='checkbox'
                                name='check'
                                onChange={() => handleCheck()}
                                className='w-[20px] h-[20px] border border-[#42B8BD]'
                            />
                            <p className='font-mont font-medium text-sm text-[#334D57]'>Currently employed</p>
                            </div>
                            <div className={`${check ? "hidden" : "flex items-center gap-[14px]"}`}>
                                <div className='w-full flex flex-col gap-[6px]'>
                                    <label htmlFor='endMonth' className='font-mont font-medium text-[#334D57] text-sm'>End Month</label>
                                    <div
                                    className="outline-none w-full  h-[45px] flex items-center justify-between text-[#99A6AB] appearance-none  font-mont text-xs bg-[#F9FAFB] border rounded border-[#C6C6C6] p-3 h-[38px] border-solid "
                                    >
                                    <select
                                        name="endMonth"
                                        value={values?.endMonth}
                                        onChange={handleChange}
                                        className='appearance-none w-full bg-transparent outline-none'
                                        disabled={check}
                                    >
                                        <option value="" defaultValue>Month</option>
                                        {Month.map((item, index) => (
                                        <option key={index} value={item}>{item}</option>
                                        ))}
                                    </select>
                                    <IoIosArrowDown className="w-[22px] h-[22px] text-[#42B8BD]" />
                                    </div>
                                    {errors.endMonth && touched.endMonth ? (
                                    <div className="text-RED-_100 text-xs">
                                        {errors.endMonth}
                                    </div>
                                    ) : null}
                                </div>
                                <div className='w-full flex flex-col gap-[6px]'>
                                    <label htmlFor='endYear' className='font-mont font-medium text-[#334D57] text-sm'>Year</label>
                                    <div
                                    className="outline-none w-full  h-[45px] flex items-center justify-between text-[#99A6AB] appearance-none  font-mont text-xs bg-[#F9FAFB] border rounded border-[#C6C6C6] p-3 h-[38px] border-solid "
                                    >
                                    <select
                                        name="endYear"
                                        value={values?.endYear}
                                        onChange={handleChange}
                                        className='appearance-none w-full bg-transparent outline-none'
                                        disabled={check}
                                    >
                                        <option value="" defaultValue>Year</option>
                                        {Year.map((item, index) => (
                                        <option key={index} value={item}>{item}</option>
                                        ))}
                                    </select>
                                    <IoIosArrowDown className="w-[22px] h-[22px] text-[#42B8BD]" />
                                    </div>
                                    {errors.endYear && touched.endYear ? (
                                    <div className="text-RED-_100 text-xs">
                                        {errors.endYear}
                                    </div>
                                    ) : null}
                                </div>
                            </div>
                        </>
                        ) : (
                        workData?.length > 0 ?
                        workData?.map((item, index) => (
                                <div key={index} className='flex justify-between rounded-lg w-full py-[13px] px-[15px] border border-[#CCCCCC] bg-[#F9FAFB]'>
                                <div className='flex items-center gap-[13px]'>
                                    <img src={Work} alt='work' className='w-[55px] h-[55px]'/>
                                    <div className='flex flex-col gap-1'>
                                    <p className='font-mont font-semibold text-[16px] text-[#001A24]'>{item?.role}</p>
                                    <p className='font-medium text-[12px] text-[#000D12] font-mont'>{item?.company}</p>
                                    <p className='font-mont text-[11px] text-[#10303D]'>{`${item?.start_date} - ${item?.end_date}`}</p>
                                    </div>
                                </div>
                                <img src={Bin} alt='delete' className='w-[27px] h-[27px] cursor-pointer' onClick={() => deleteEducation(item?.id)} />
                                </div>
                            ))
                            :
                            null
                        
                        )
                        
                        }

                        <div className={`${showWorkExperienceInput || workData?.length === 0 ? "flex" : "hidden"}  justify-end fixed lg:right-[30%] top-[90%]`}>
                            <button 
                                className='w-[300px] lg:w-[251px] h-[52px] rounded-[4px] border border-[#000709] bg-[#BABABA] flex justify-center items-center' 
                                type='submit'
                                onClick={() => {setShowWorkExperienceInput(prev => !prev); submitExperienceForm(values, action)}}
                            >
                                <p className='text-[#00141B] text-base font-mont font-semibold'>{addExperienceLoading ? <CgSpinner className=" animate-spin text-lg " /> : 'Save & Continue'}</p>
                            </button>
                        </div>
                        
                    </div>
                </Form>
            )}
            </Formik>
        
        </div>
    </div>
  )
}

export default Experience
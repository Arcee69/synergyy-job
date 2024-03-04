import React, { useState, useEffect } from 'react'
import { Formik, Form } from 'formik';
import { CgSpinner } from 'react-icons/cg';
import { FaPlus, FaMinus, FaArrowLeft } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as Yup from "yup"

import Logo from "../../assets/svg/logo.svg"

import { api } from '../../services/api';
import { appUrls } from '../../services/urls';
import MiniHeader from '../../layouts/HompageLayout/MiniHeader';

const GetAccess = () => {
    const [loading, setLoading] = useState(false);
    const [experience, setExperience] = useState("");
    const [count, setCount] = useState(0);
    const [quest, setQuest] = useState(1);
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [companyName, setCompanyName] = useState("")

    const navigate = useNavigate()

    const formValidationSchema = Yup.object().shape({
        firstName: Yup.string().required(),
        lastName: Yup.string().required(),
        email: Yup.string().email().required(),
        companyName: Yup.string().required(),
    })

    const formValidationSchemaTwo = Yup.object().shape({
        jobType: Yup.string().required(),
        jobRole: Yup.string().required(),
    })

      // For Experience
        function calculateExperienceLevel(yearsOfExperience) {
            if (yearsOfExperience <= 1) {
            return setExperience("Entry Level");
            } else if (yearsOfExperience <= 2) {
            return setExperience("Intermediate");
            } else if (yearsOfExperience <= 4) {
            return setExperience("Mid Level");
            } else if (yearsOfExperience <= 8) {
            return setExperience("Expert");
            } else {
            return setExperience("Executive");
            }
        }

        const nextQuest = () => {
            if (quest === 2) {
                window.scroll(0, 0)
            } else {
                setQuest(quest + 1)
            }
        };

        const submitForm = async (values, action) => {
            setLoading(true)

            let formData = new FormData()
            formData.append('name', `${firstName} ${lastName}`);
            formData.append('email', email);
            formData.append('experience', count);
            formData.append('company', companyName);
            // formData.append('your_role', values?.role);
            formData.append('job_type', values?.jobType);
            formData.append('role_hiring', values?.jobRole);

            await api.post(appUrls?.HIRING_FORM, formData)
            .then((res) => {
                setLoading(false)
                console.log(res, "action")
                toast(`${res?.data?.message}`, {
                    position: "top-right",
                    autoClose: 3500,
                    closeOnClick: true,
                })
                action.resetForm()
                navigate("/success")
            })
            .catch((err) => {
                setLoading(false)
                console.log(err, "err")
                toast("error", {
                    position: "top-right",
                    autoClose: 3500,
                    closeOnClick: true,
                })
            })
        }

        useEffect(() => {
            calculateExperienceLevel(count);
        }, [count]);

  return (
    <div className=' flex flex-col'>
        <div className='flex lg:hidden' >
          {/* <MiniHeader /> */}
        </div>
        <div className='w-full flex flex-col lg:flex-row overflow-x-hidden'>
            <div className='w-[40%] bg-[#F6F6F6] px-[78px] h-screen hidden lg:flex flex-col gap-[86px] py-[30px]'> {/* [622px] */}
                <img src={Logo} alt='logo' className='cursor-pointer w-[108px] h-[26px]' onClick={() => navigate("/")} />
                <div className='w-[465px] h-[353px] flex flex-col gap-6'>
                    <p className='text-[36px] font-mont font-semibold text-[#00141b80] '>Secure Top Talent, <span className='text-[#00141B]'>Seamlessly</span></p>

                    <div className='w-[381px] flex flex-col gap-6'>
                    <div className='flex gap-3'>
                        <div className='mt-1'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M9.60156 17.5996C14.0016 17.5996 17.6016 13.9996 17.6016 9.59961C17.6016 5.19961 14.0016 1.59961 9.60156 1.59961C5.20156 1.59961 1.60156 5.19961 1.60156 9.59961C1.60156 13.9996 5.20156 17.5996 9.60156 17.5996Z" stroke="#292D32" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                                <path opacity="0.34" d="M6.19922 9.59992L8.46322 11.8639L12.9992 7.33594" stroke="#292D32" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <p className='font-medium font-mont text-[20px] text-[#00141B]'>Streamlined Hiring Process</p>
                            <p className='text-xs font-mont text-[#00141B]'>
                            Save time, minimize paperwork, and focus on what truly matters – building your dream team.                            </p>
                        </div>
                    </div>
                    </div>
                    <div className='w-[381px] flex flex-col gap-6'>
                    <div className='flex gap-3'>
                        <div className='mt-1'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M9.60156 17.5996C14.0016 17.5996 17.6016 13.9996 17.6016 9.59961C17.6016 5.19961 14.0016 1.59961 9.60156 1.59961C5.20156 1.59961 1.60156 5.19961 1.60156 9.59961C1.60156 13.9996 5.20156 17.5996 9.60156 17.5996Z" stroke="#292D32" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                                <path opacity="0.34" d="M6.19922 9.59992L8.46322 11.8639L12.9992 7.33594" stroke="#292D32" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <p className='font-medium font-mont text-[20px] text-[#00141B]'>Global Talent Pool</p>
                            <p className='text-xs font-mont text-[#00141B]'>
                                Access a diverse global network of professionals for a wider range of skills and expertise.
                            </p>
                        </div>
                    </div>
                    </div>
                  
                    <div className='w-[381px] flex flex-col gap-6'>
                    <div className='flex gap-3'>
                        <div className='mt-1'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M9.60156 17.5996C14.0016 17.5996 17.6016 13.9996 17.6016 9.59961C17.6016 5.19961 14.0016 1.59961 9.60156 1.59961C5.20156 1.59961 1.60156 5.19961 1.60156 9.59961C1.60156 13.9996 5.20156 17.5996 9.60156 17.5996Z" stroke="#292D32" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                                <path opacity="0.34" d="M6.19922 9.59992L8.46322 11.8639L12.9992 7.33594" stroke="#292D32" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <p className='font-medium font-mont text-[20px] text-[#00141B]'>Quality Assurance</p>
                            <p className='text-xs font-mont text-[#00141B]'>
                                Pre-vetted candidates ensure high-caliber talent with the necessary skills and experience.
                            </p>
                        </div>
                    </div>
                    </div>

                </div>

            </div>
            <div className='w-full lg:w-[55%] flex flex-col gap-12  px-5 lg:px-[103px] pt-[45px] lg:pt-[106px] lg:pb-[86px] pb-[64px]  bg-[#fff] '> {/* [818px] */}
            {
                quest === 1 && (
                <div className='flex flex-col items-center justify-center animate__animated animate__fadeInUp'>
                    <div className='flex flex-col gap-3'>
                        <p className='text-[24px] lg:text-[31px] font-mont font-bold text-[#00141B]'>Hire with Synergyy</p>
                    </div>
                    <div className='w-full mt-[32px]'>
                        <Formik
                            initialValues={{
                                firstName: "",
                                lastName: "",
                                email: "",
                                companyName: "",
                            }}
                                validationSchema={formValidationSchema}
                                onSubmit={(values, actions) => {
                                window.scrollTo(0, 0);
                                console.log(values, "market")
                                setFirstName(values?.firstName);
                                setLastName(values?.lastName);
                                setEmail(values?.email);
                                setCompanyName(values?.companyName)
                                nextQuest()
                                actions.resetForm()

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
                                <Form onSubmit={handleSubmit} className="flex">
                                    <div className="w-full flex flex-col gap-6">
                                        
                                        <div className='flex flex-col gap-1 '>
                                            <label htmlFor='companyName' className='font-mont font-medium text-[#00141B] text-[15px]' >Company Name</label>
                                            <input
                                                name="companyName"
                                                placeholder=""
                                                type="text" 
                                                value={values?.companyName}
                                                onChange={handleChange}
                                                className="outline-none w-full   text-left rounded-lg bg-[#fff] border  border-[#BABABA] p-3 h-[48px] border-solid "
                                            />
                                            {errors.companyName && touched.companyName ? (
                                            <div className="text-RED-_100 text-xs">
                                                {errors.companyName}
                                            </div>
                                            ) : null}
                                        </div>

                                        <div className='flex flex-col gap-1 '>
                                            <label htmlFor='email' className='font-mont font-medium  text-[#00141B] text-[15px]' >Email</label>
                                            <input
                                                name="email"
                                                placeholder=""
                                                type="text" 
                                                value={values?.email}
                                                onChange={handleChange}
                                                className="outline-none w-full   text-left rounded-lg bg-[#fff] border  border-[#BABABA] p-3 h-[48px] border-solid "
                                            />
                                            {errors.email && touched.email ? (
                                            <div className="text-RED-_100 text-xs">
                                                {errors.email}
                                            </div>
                                            ) : null}
                                        </div>

                                        <div className='flex  lg:items-center w-full gap-4'>
                                            <div className='flex flex-col gap-1 w-full'>
                                                <label htmlFor='firstName' className='font-mont font-medium text-[#00141B] text-[15px]' >First Name</label>
                                                <input
                                                    name="firstName"
                                                    placeholder=""
                                                    type="text" 
                                                    value={values?.firstName}
                                                    onChange={handleChange}
                                                    className="outline-none w-full   text-left rounded-lg bg-[#fff] border  border-[#BABABA] p-3 h-[48px] border-solid "
                                                />
                                                {errors.firstName && touched.firstName ? (
                                                <div className="text-RED-_100 text-xs">
                                                    {errors.firstName}
                                                </div>
                                                ) : null}
                                            </div>
                                            <div className='flex flex-col gap-1 w-full '>
                                                <label htmlFor='lastName' className='font-mont font-medium text-[#00141B] text-[15px]' >Last Name</label>
                                                <input
                                                    name="lastName"
                                                    placeholder=""
                                                    type="text" 
                                                    value={values?.lastName}
                                                    onChange={handleChange}
                                                    className="outline-none w-full  text-left rounded-lg bg-[#fff] border  border-[#BABABA] p-3 h-[48px] border-solid "
                                                />
                                                {errors.lastName && touched.lastName ? (
                                                <div className="text-RED-_100 text-xs">
                                                    {errors.lastName}
                                                </div>
                                                ) : null}
                                            </div>
                                            

                                        </div>
                    
                                        <button
                                            className={`${isValid ? "bg-[#000]" : "bg-[#BABABA]"} w-full font-mont flex  items-center  rounded-[6px] justify-center mt-2 h-[46px] text-base  text-center`}
                                            type="submit"
                                            disabled={loading}
                                        >
                                            <p className='text-[#fff] text-sm font-bold my-auto'>{loading ? <CgSpinner className=" animate-spin text-lg " /> : 'Continue'}</p>
                                            
                                        </button>
                                    </div>

                                </Form>
                            )}
                        </Formik>
                    </div>

                </div> )
            }
            {
                quest === 2 && ( 
                <div className='flex flex-col items-center animate__animated animate__fadeInUp justify-center'>
                    <div className='flex flex-col gap-3'>
                        <p className='text-[24px] font-mont lg:text-[31px] font-bold text-[#00141B]'>Talent Request</p>
                    </div>
                    <div className='w-full mt-[32px]'>
                        <Formik
                            initialValues={{
                                jobRole: "",
                                level: "",
                                jobType: ""
                            }}
                                validationSchema={formValidationSchemaTwo}
                                onSubmit={(values, action) => {
                                window.scrollTo(0, 0);
                                console.log(values, "market")
                                submitForm(values, action);
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
                                <Form onSubmit={handleSubmit} className="flex">
                                    <div className="w-full flex flex-col gap-6">

                                        <div className='flex flex-col gap-1 '>
                                            <label htmlFor='jobRole' className='font-mont font-medium text-[#00141B] text-[15px]' >Job Role you need to fill</label>
                                            <input
                                                name="jobRole"
                                                placeholder=""
                                                type="text" 
                                                value={values?.jobRole}
                                                onChange={handleChange}
                                                className="outline-none w-full lg:w-[563px] text-left rounded-2xl bg-[#fff] border  border-[#BABABA] p-3 h-[48px] border-solid "
                                            />
                                            {errors.jobRole && touched.jobRole ? (
                                            <div className="text-RED-_100 text-xs">
                                                {errors.jobRole}
                                            </div>
                                            ) : null}
                                        </div>

                                        <div className="flex flex-col gap-1 mt-[16px]">
                                            <label
                                                htmlFor="level"
                                                className='font-mont font-medium text-[#00141B] text-[15px]'
                                            >
                                                Experience level
                                            </label>
                                            <div className="outline-none w-full flex justify-between lg:w-[563px] rounded-2xl bg-[#fff] border  border-[#BABABA]  h-[48px] border-solid"> {/* items-center */}
                                                <p className="w-[144px] p-3 font-mont text-base text-[#000709]">
                                                    {experience}
                                                </p>
                                                <div className="flex ">
                                                <button
                                                    disabled={count === 0 ? true : false}
                                                    type="button"
                                                    onClick={() => setCount(count - 1)}
                                                    className=" w-[67px] border rounded-[4px] flex flex-col  justify-center items-center border-r-0 border-y-0 border-[#CCC]"
                                                >
                                                    <FaMinus className="font-medium text-[#00212D] text-base mx-auto" />
                                                </button>
                                                <input
                                                    name="level"
                                                    disabled
                                                    placeholder="0"
                                                    type="number"
                                                    value={count}
                                                    className="w-[67px] text-[#00212D] text-lg mx-auto font-semibold text-center border border-r-0 border-y-0 border-[#CCC]"
                                                />
                                                <button
                                                    type="button"
                                                    disabled={count === 10 ? true : false}
                                                    onClick={() => setCount(count + 1)}
                                                    className="w-[67px] border border-r-0 border-y-0 flex flex-col justify-center items-center border-[#CCC]"
                                                >
                                                    <FaPlus className="font-medium text-[#00212D] text-base mx-auto" />
                                                </button>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className='flex flex-col gap-1'>
                                            <label htmlFor='Job Type' className='font-mont font-medium  text-[#00141B] text-[15px]' >Job Type?</label> {/* How Quickly */}
                                            <div className="outline-none w-full flex items-center lg:w-[563px] rounded-2xl bg-[#fff] border  border-[#BABABA] p-3 h-[48px] border-solid">
                                                <select
                                                    name="jobType"
                                                    id=""
                                                    className="appearance-none w-full outline-none"
                                                    onChange={handleChange}
                                                    value={values?.jobType}
                                                    style={{
                                                        WebkitAppearance: "none",
                                                        MozAppearance: "none",
                                                        appearance: "none"
                                                    }}
                                                >
                                                    <option value="" disabled></option>
                                                    <option value="Fulltime">Fulltime</option>
                                                    <option value="Contract">Contract</option>
                                                    <option value="Freelance">Freelance</option>
                                                </select>
                                                <IoIosArrowDown className="w-[24px] h-[24px] text-[#BABABA]" />
                                            </div>
                                            {errors.jobType && touched.jobType ? (
                                            <div className="text-RED-_100 text-xs">
                                                {errors.jobType}
                                            </div>
                                            ) : null}
                                        </div>
                    
                                        <button
                                            className={`${isValid ? "bg-[#000]" : "bg-[#BABABA]"} w-full lg:w-[579px] font-mont flex  items-center  rounded-[6px] justify-center mt-2 h-[46px] text-base  text-center`}
                                            type="submit"
                                            disabled={loading}
                                        >
                                            <p className='text-[#fff] text-sm font-bold my-auto'>{loading ? <CgSpinner className=" animate-spin text-lg " /> : 'Submit'}</p>
                                            
                                        </button>
                                    </div>

                                </Form>
                            )}
                        </Formik>
                    </div>

                </div> )
            }
            </div>
            <div className='w-full bg-[#F6F6F6] px-[38px] pb-24 lg:hidden flex flex-col gap-[86px] py-[40px]'>
                <div className='w-full h-[353px] flex flex-col gap-6'>
                    <p className='text-[24px] lg:text-[36px] text-center font-mont font-semibold text-[#00141b80] '>Secure Top Talent, <span className='text-[#00141B]'>Seamlessly</span></p>
                    
                    <div className='w-full flex flex-col gap-6'>
                        <div className='flex gap-3 w-full'>
                            <div className='mt-1'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M9.60156 17.5996C14.0016 17.5996 17.6016 13.9996 17.6016 9.59961C17.6016 5.19961 14.0016 1.59961 9.60156 1.59961C5.20156 1.59961 1.60156 5.19961 1.60156 9.59961C1.60156 13.9996 5.20156 17.5996 9.60156 17.5996Z" stroke="#292D32" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path opacity="0.34" d="M6.19922 9.59992L8.46322 11.8639L12.9992 7.33594" stroke="#292D32" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <p className='font-medium font-mont text-base lg:text-[20px] text-[#00141B]'>Streamlined Hiring Process</p>
                                <p className='text-xs font-mont text-[#00141B]'>
                                Save time, minimize paperwork, and focus on what truly matters – building your dream team.                                </p>
                            </div>
                        </div>
                    </div>
                    
                    <div className='w-full flex flex-col gap-6'>
                    <div className='flex w-full gap-3'>
                        <div className='mt-1'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M9.60156 17.5996C14.0016 17.5996 17.6016 13.9996 17.6016 9.59961C17.6016 5.19961 14.0016 1.59961 9.60156 1.59961C5.20156 1.59961 1.60156 5.19961 1.60156 9.59961C1.60156 13.9996 5.20156 17.5996 9.60156 17.5996Z" stroke="#292D32" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                                <path opacity="0.34" d="M6.19922 9.59992L8.46322 11.8639L12.9992 7.33594" stroke="#292D32" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <p className='font-medium font-mont text-base lg:text-[20px] text-[#00141B]'>Global Talent Pool</p>
                            <p className='text-xs font-mont text-[#00141B]'>
                                Access a diverse global network of professionals for a wider range of skills and expertise.
                            </p>
                        </div>
                    </div>
                    </div>
                   
                    <div className='w-full flex flex-col gap-6'>
                        <div className='flex w-full gap-3'>
                            <div className='mt-1'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M9.60156 17.5996C14.0016 17.5996 17.6016 13.9996 17.6016 9.59961C17.6016 5.19961 14.0016 1.59961 9.60156 1.59961C5.20156 1.59961 1.60156 5.19961 1.60156 9.59961C1.60156 13.9996 5.20156 17.5996 9.60156 17.5996Z" stroke="#292D32" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path opacity="0.34" d="M6.19922 9.59992L8.46322 11.8639L12.9992 7.33594" stroke="#292D32" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <p className='font-medium font-mont text-base lg:text-[20px] text-[#00141B]'>Quality Assurance</p>
                                <p className='text-xs font-mont text-[#00141B]'>
                                    Pre-vetted candidates ensure high-caliber talent with the necessary skills and experience.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    </div>
  )
}

export default GetAccess
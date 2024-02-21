import React, { useState } from 'react'
import { Form, Formik} from "formik"
import { CgSpinner } from 'react-icons/cg'
import { FaArrowLeft } from "react-icons/fa6";;
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import * as Yup from "yup"

import Logo from "../../assets/svg/logo.svg"
import Big from "../../assets/img/bg3.png"
import { appUrls } from '../../services/urls'
import { api } from '../../services/api'
import { IoIosArrowDown } from 'react-icons/io';

const AskAPro = () => {
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()

    const formValidationSchema = Yup.object().shape({
        firstName: Yup.string().required(),
        lastName: Yup.string().required(),
        email: Yup.string().email().required(),
        companyName: Yup.string().required(),
        role: Yup.string().required(),
        focus: Yup.string().required(),
        message: Yup.string().required(),
    })

    const submitForm = async (values, action) => {
        setLoading(true)
        let formData = new FormData()
        formData.append('name', `${values?.firstName} ${values?.lastName}`);
        formData.append('email', values?.email);
        formData.append('company', values?.companyName);
        formData.append('role', values?.role);

        await api.post(appUrls?.ASK_A_PRO, formData)
        .then((res) => {
            setLoading(false)
            console.log(res, "action")
            toast(`${res?.data?.message}`, {
                position: "top-right",
                autoClose: 3500,
                closeOnClick: true,
            })
            action.resetForm()
            navigate("/")
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
                <div className='flex flex-col items-center lg:mx-[100px] justify-center animate__animated animate__fadeInUp'>
                    <div className='flex flex-col gap-3'>
                        <p className='text-[24px] lg:text-[28px] text-center font-mont font-semibold text-[#00141B]'>Ready to Hire Amazing People?</p>
                    </div>
                    <div className='w-full mt-[32px] lg:mx-auto'>
                        <Formik
                            initialValues={{
                                firstName: "",
                                lastName: "",
                                email: "",
                                companyName: "",
                                role: "",
                                focus: "",
                                message: ""
                            }}
                                validationSchema={formValidationSchema}
                                onSubmit={(values, actions) => {
                                window.scrollTo(0, 0);
                                console.log(values, "market")
                                submitForm(values, actions) 
                             
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

                                    <div className='flex  lg:items-center w-full gap-4'>
                                        <div className='flex flex-col gap-1 w-full'>
                                            <label htmlFor='firstName' className='font-mont font-medium text-[#00141B] text-[15px]' >First Name</label>
                                            <input
                                                name="firstName"
                                                placeholder=""
                                                type="text" 
                                                value={values?.firstName}
                                                onChange={handleChange}
                                                className="outline-none w-full lg:w-[200px]  text-left rounded-lg bg-[#fff] border  border-[#BABABA] p-3 h-[48px] border-solid "
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
                                                className="outline-none w-full lg:w-[200px]  text-left rounded-lg bg-[#fff] border  border-[#BABABA] p-3 h-[48px] border-solid "
                                            />
                                            {errors.lastName && touched.lastName ? (
                                            <div className="text-RED-_100 text-xs">
                                                {errors.lastName}
                                            </div>
                                            ) : null}
                                        </div>
                                    </div>
                                        
                                        <div className='flex flex-col gap-1 '>
                                            <label htmlFor='companyName' className='font-mont font-medium text-[#00141B] text-[15px]' >Company Name</label>
                                            <input
                                                name="companyName"
                                                placeholder=""
                                                type="text" 
                                                value={values?.companyName}
                                                onChange={handleChange}
                                                className="outline-none w-full lg:w-[420px]   text-left rounded-lg bg-[#fff] border  border-[#BABABA] p-3 h-[48px] border-solid "
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
                                                className="outline-none w-full lg:w-[420px]   text-left rounded-lg bg-[#fff] border  border-[#BABABA] p-3 h-[48px] border-solid "
                                            />
                                            {errors.email && touched.email ? (
                                            <div className="text-RED-_100 text-xs">
                                                {errors.email}
                                            </div>
                                            ) : null}
                                        </div>

                                        <div className='flex flex-col gap-1 '>
                                            <label htmlFor='role' className='font-mont font-medium  text-[#00141B] text-[15px]' >Your Role</label>
                                            <input
                                                name="role"
                                                placeholder=""
                                                type="text" 
                                                value={values?.role}
                                                onChange={handleChange}
                                                className="outline-none w-full  lg:w-[420px] text-left rounded-lg bg-[#fff] border  border-[#BABABA] p-3 h-[48px] border-solid "
                                            />
                                            {errors.role && touched.role ? (
                                            <div className="text-RED-_100 text-xs">
                                                {errors.role}
                                            </div>
                                            ) : null}
                                        </div>

                                        <div className='flex flex-col gap-1'>
                                            <label htmlFor='focus' className='font-mont font-medium  text-[#00141B] text-[15px]' >Area Of Focus</label>
                                            <div className="outline-none w-full flex items-center lg:w-[420px] rounded-2xl bg-[#fff] border  border-[#BABABA] p-3 h-[48px] border-solid">
                                                <select
                                                    name="focus"
                                                    id=""
                                                    className="appearance-none w-full outline-none"
                                                    onChange={handleChange}
                                                    value={values?.focus}
                                                    style={{
                                                        WebkitAppearance: "none",
                                                        MozAppearance: "none",
                                                        appearance: "none"
                                                    }}
                                                >
                                                    <option value="Talent Acquisition">Talent Acquisition</option>
                                                    <option value="Employeer of Record">Employeer of Record</option>
                                                    <option value="Global Payroll">Global Payroll</option>
                                                    <option value="Pricing">Pricing</option>
                                                    <option value="Other">Other</option>
                                                </select>
                                                <IoIosArrowDown className="w-[24px] h-[24px] text-[#BABABA]" />
                                            </div>
                                            {errors.focus && touched.focus ? (
                                            <div className="text-RED-_100 text-xs">
                                                {errors.focus}
                                            </div>
                                            ) : null}
                                        </div>

                                        <div className='flex flex-col gap-1 '>
                                            <label htmlFor='message' className='font-mont font-medium  text-[#00141B] text-[15px]' >Message</label>
                                            <input
                                                name="message"
                                                placeholder=""
                                                type="text" 
                                                value={values?.message}
                                                onChange={handleChange}
                                                className="outline-none w-full lg:w-[420px]  text-left rounded-lg bg-[#fff] border  border-[#BABABA] p-3 h-[48px] border-solid "
                                            />
                                            {errors.message && touched.message ? (
                                            <div className="text-RED-_100 text-xs">
                                                {errors.message}
                                            </div>
                                            ) : null}
                                        </div>
                    
                                        <button
                                            className={`${isValid ? "bg-[#000]" : "bg-[#BABABA]"} w-full font-mont flex lg:w-[420px] items-center  rounded-[6px] justify-center mt-2 h-[46px] text-base  text-center`}
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

                </div> 
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

export default AskAPro
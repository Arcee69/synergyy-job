import React, { useState, useEffect } from 'react'
import { Formik, Form } from 'formik';
import { CgSpinner } from 'react-icons/cg';
import { FaPlus, FaMinus } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { api } from '../../services/api';
import { appUrls } from '../../services/urls';

const GetAccess = () => {
    const [loading, setLoading] = useState(false);
    const [experience, setExperience] = useState("");
    const [count, setCount] = useState(0)

    const navigate = useNavigate()

      // For Experience
        function calculateExperienceLevel(yearsOfExperience) {
            if (yearsOfExperience <= 1) {
            return setExperience("Entry Level");
            } else if (yearsOfExperience <= 3) {
            return setExperience("Intermediate");
            } else if (yearsOfExperience <= 5) {
            return setExperience("Advanced");
            } else {
            return setExperience("Expert");
            }
        }

        const submitForm = async (values, action) => {
            setLoading(true)

            let formData = new FormData()
            formData.append('name', values?.name);
            formData.append('email', values?.email);
            formData.append('experience', count);
            formData.append('company', values?.companyName);
            formData.append('your_role', values?.role);
            formData.append('how_quickly', values?.quick);
            formData.append('role', values?.jobRole);

            await api.post(appUrls?.HIRING_FORM, formData)
            .then((res) => {
                setLoading(false)
                console.log(res, "action")
                toast(`${res?.data?.message}`, {
                    position: "top-right",
                    autoClose: 5000,
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
                    autoClose: 5000,
                    closeOnClick: true,
                })
            })
        }

        useEffect(() => {
            calculateExperienceLevel(count);
        }, [count]);

  return (
    <div className='w-full flex overflow-x-hidden'>
        <div className='w-[818px] flex flex-col gap-12 items-center px-5 lg:px-[103px] pt-[10px] pb-[86px] justify-center bg-[#fff] '>
            <div className='flex flex-col gap-3'>
                <p className='text-[31px] font-bold text-[#00141B]'>Start Hiring</p>
            </div>
            <div className='w-full'>
                <Formik
                    initialValues={{
                        name: "",
                        email: "",
                        companyName: "",
                        role: "",
                        jobRole: "",
                        level: "",
                        quick: ""
                    }}
                        // validationSchema={formValidationSchema}
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

                                <div className="flex flex-col gap-1 mt-[16px]">
                                    <label
                                        htmlFor="level"
                                        className='font-mont  text-[#00141B] text-[15px]'
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
                                    <label htmlFor='quick' className='font-mont  text-[#00141B] text-[15px]' >How quickly?</label>
                                    <div className="outline-none w-full flex items-center lg:w-[563px] rounded-2xl bg-[#fff] border  border-[#BABABA] p-3 h-[48px] border-solid">
                                        <select
                                            name="quick"
                                            id=""
                                            className="appearance-none w-full outline-none"
                                            onChange={handleChange}
                                            value={values?.quick}
                                        >
                                            <option value="" disabled></option>
                                            <option value="1 week">1 week</option>
                                            <option value="2 weeks">2 weeks</option>
                                            <option value="3 weeks">3 weeks</option>
                                            <option value="4 weeks">4 weeks</option>
                                        </select>
                                        <IoIosArrowDown className="w-[24px] h-[24px] text-[#BABABA]" />
                                    </div>
                                </div>

                                <div className='flex flex-col gap-1 '>
                                    <label htmlFor='jobRole' className='font-mont  text-[#00141B] text-[15px]' >What Job role are you hiring for?</label>
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

                                <div className='flex flex-col lg:flex-row lg:items-center gap-4'>
                                    <div className='flex flex-col gap-1 '>
                                        <label htmlFor='name' className='font-mont  text-[#00141B] text-[15px]' >Name</label>
                                        <input
                                            name="name"
                                            placeholder=""
                                            type="text" 
                                            value={values?.name}
                                            onChange={handleChange}
                                            className="outline-none w-full lg:w-[273px]  text-left rounded-2xl bg-[#fff] border  border-[#BABABA] p-3 h-[48px] border-solid "
                                        />
                                        {errors.name && touched.name ? (
                                        <div className="text-RED-_100 text-xs">
                                            {errors.name}
                                        </div>
                                        ) : null}
                                    </div>
                                    <div className='flex flex-col gap-1 '>
                                        <label htmlFor='email' className='font-mont  text-[#00141B] text-[15px]' >Email</label>
                                        <input
                                            name="email"
                                            placeholder=""
                                            type="text" 
                                            value={values?.email}
                                            onChange={handleChange}
                                            className="outline-none w-full  lg:w-[273px] text-left rounded-2xl bg-[#fff] border  border-[#BABABA] p-3 h-[48px] border-solid "
                                        />
                                        {errors.email && touched.email ? (
                                        <div className="text-RED-_100 text-xs">
                                            {errors.email}
                                        </div>
                                        ) : null}
                                    </div>

                                </div>

                                <div className='flex flex-col lg:flex-row lg:items-center gap-4'>
                                    <div className='flex flex-col gap-1 '>
                                        <label htmlFor='companyName' className='font-mont  text-[#00141B] text-[15px]' >Company Name</label>
                                        <input
                                            name="companyName"
                                            placeholder=""
                                            type="text" 
                                            value={values?.companyName}
                                            onChange={handleChange}
                                            className="outline-none w-full  lg:w-[273px] text-left rounded-2xl bg-[#fff] border  border-[#BABABA] p-3 h-[48px] border-solid "
                                        />
                                        {errors.companyName && touched.companyName ? (
                                        <div className="text-RED-_100 text-xs">
                                            {errors.companyName}
                                        </div>
                                        ) : null}
                                    </div>
                                    <div className='flex flex-col gap-1 '>
                                        <label htmlFor='role' className='font-mont  text-[#00141B] text-[15px]' >Your Role</label>
                                        <input
                                            name="role"
                                            placeholder=""
                                            type="text" 
                                            value={values?.role}
                                            onChange={handleChange}
                                            className="outline-none w-full lg:w-[273px] text-left rounded-2xl bg-[#fff] border  border-[#BABABA] p-3 h-[48px] border-solid "
                                        />
                                        {errors.role && touched.role ? (
                                        <div className="text-RED-_100 text-xs">
                                            {errors.role}
                                        </div>
                                        ) : null}
                                    </div>
                                </div>
            
                                <button
                                    className={`${isValid ? "bg-[#FBA599]" : "bg-[#BABABA]"} w-full lg:w-[579px] font-mont flex  items-center  rounded-[6px] justify-center mt-2 h-[46px] text-base  text-center`}
                                    type="submit"
                                    disabled={loading}
                                >
                                    <p className='text-[#000709] text-sm font-bold my-auto'>{loading ? <CgSpinner className=" animate-spin text-lg " /> : 'Submit'}</p>
                                    
                                </button>
                            </div>

                        </Form>
                    )}
                </Formik>
            </div>
        </div>
        <div className='w-[622px] bg-[#F6F6F6] py-[235px] px-[78px] hidden lg:flex'>
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
                        <p className='font-medium font-mont text-[20px] text-[#00141B]'>Expanded Talent Pool</p>
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
                        <p className='font-medium font-mont text-[20px] text-[#00141B]'>Streamlined Hiring Process</p>
                        <p className='text-xs font-mont text-[#00141B]'>
                            User-friendly interface and advanced search capabilities save time and resources.
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
    </div>
  )
}

export default GetAccess
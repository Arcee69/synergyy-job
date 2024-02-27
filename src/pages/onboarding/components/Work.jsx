import React, { useState } from 'react'
import { Form, Formik} from "formik"
import { IoIosArrowDown } from 'react-icons/io'
import { CgSpinner } from 'react-icons/cg'
import * as Yup from "yup"

const Work = ({ handleChangeButton }) => {
    const [loading, setLoading] = useState(false);

    const formValidationSchema = Yup.object().shape({
        jobType: Yup.string().required(),
        style: Yup.string().required()
    })

    const submitForm = () => {
        handleChangeButton(5)
    }

  return (
    <div className='mt-6 flex flex-col items-center gap-10'>
        <div className="w-[350px] gap-[6px] flex flex-col items-start lg:items-center">
            <p className="text-[24px] lg:text-xl lg:leading-[32px] text-[#00141B] font-mont font-bold">
                How would you like to work?
            </p>
            <p className="text-[#00212D] lg:text-[#667A81] text-base font-mont text-left lg:text-center">
                Get matched with opportunities that fit your future goals.
            </p>
        </div>
        <div className='flex flex-col items-center'>
            <Formik
                initialValues={{
                    jobType: "",
                    style: "",
                }}
                    validationSchema={formValidationSchema}
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
                        <div className="w-full flex flex-col items-center gap-6">
                            
                            <div className='flex flex-col gap-1'>
                                <label htmlFor='Job Type' className='font-mont font-medium  text-[#00141B] text-[15px]' >Job type</label>
                                <div className="outline-none w-full flex items-center lg:w-[420px] rounded bg-[#fff] border  border-[#BABABA] p-3 h-[48px] border-solid">
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

                            <div className='flex flex-col gap-1'>
                                <label htmlFor='Style' className='font-mont font-medium  text-[#00141B] text-[15px]' >Work Style</label>
                                <div className="outline-none w-full flex items-center lg:w-[420px] rounded- bg-[#fff] border  border-[#BABABA] p-3 h-[48px] border-solid">
                                    <select
                                        name="style"
                                        id=""
                                        className="appearance-none w-full outline-none"
                                        onChange={handleChange}
                                        value={values?.style}
                                        style={{
                                            WebkitAppearance: "none",
                                            MozAppearance: "none",
                                            appearance: "none"
                                        }}
                                    >
                                        <option value="" disabled></option>
                                        <option value="Onsite">Onsite</option>
                                        <option value="Hybrid">Hybrid</option>
                                        <option value="Remote">Remote</option>
                                    </select>
                                    <IoIosArrowDown className="w-[24px] h-[24px] text-[#BABABA]" />
                                </div>
                                {errors.style && touched.style ? (
                                <div className="text-RED-_100 text-xs">
                                    {errors.style}
                                </div>
                                ) : null}
                            </div>
        
                            <button
                                className={`${isValid ? "bg-[#000]" : "bg-[#BABABA]"} w-full lg:w-[420px] font-mont flex  items-center  rounded-[6px] justify-center mt-2 h-[46px] text-base  text-center`}
                                type="submit"
                                disabled={loading}
                            >
                                <p className='text-[#fff] text-sm font-bold my-auto'>{loading ? <CgSpinner className=" animate-spin text-lg " /> : 'Save & Continue'}</p>
                                
                            </button>
                        </div>

                    </Form>
                )}
            </Formik>
        </div>
    </div>
  )
}

export default Work
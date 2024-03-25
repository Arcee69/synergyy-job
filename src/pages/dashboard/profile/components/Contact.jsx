import React from 'react'
import { Form, Formik } from 'formik'
import { useSelector } from 'react-redux'
import * as Yup from "yup"

import Flag from "../../../../assets/img/nigeria.png"

const Contact = ({ setActive }) => {

  const postExperience = useSelector(state => state.postExperience)
  const addExperienceLoading = postExperience?.loading

  const getAllLinks = []

  const contactFormValidationSchema = Yup.object().shape({
    phone: Yup.number().required(),
    email: Yup.string().email().required()
  })


  const submitSocialHandle = (values, action) => {
    localStorage.setItem("preferenceUnlocked", true)
    setActive(6)
  }

  return (
    <div className="flex flex-col mb-14 gap-4 mt-4">
        <div className='w-full flex flex-col bg-[#fff] overflow-x-hidden overflow-y-hidden rounded-lg p-4'>
            <Formik
                initialValues={{
                    phone: "",
                    email: "",
                }}
                validationSchema={contactFormValidationSchema}
                onSubmit={(values, action) => {
                    console.log(values, "market")
                    submitSocialHandle(values, action);
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
                                <p className='text-[#00141B] font-mont text-lg font-medium'>Contact Information</p>
                            </div>

                            <div className='flex items-center flex-col lg:flex-row gap-4  justify-between'>
                                <div className='w-full flex flex-col gap-[6px]'>
                                    <label htmlFor='Phone Number' className='font-mont font-medium text-[#334D57] text-sm'>Phone number</label>
                                    <div className=' w-full flex items-center border-solid border rounded-lg h-[38px] border-[#C6C6C6]  p-2 gap-2'>
                                      <img src={Flag} alt='flag' className='w-[12px] h-[12px]' />
                                      <input
                                          name="phone"
                                          placeholder="000 0000 0000"
                                          type="number" 
                                          value={values?.phone}
                                          onChange={handleChange}
                                          className="outline-none w-full text-[#99A6AB] font-mont text-xs bg-[#FFF]   "
                                      />
                                    </div>
                                    {errors.phone && touched.phone ? (
                                    <div className="text-RED-_100 text-xs">
                                        {errors.phone}
                                    </div>
                                    ) : null}
                                </div>

                                <div className='w-full flex flex-col gap-[6px]'>
                                    <label htmlFor='Email Address' className='font-mont font-medium text-[#334D57] text-sm'>Email address</label>
                                    <input
                                        name="email"
                                        placeholder="example@gmail.com"
                                        type="email" 
                                        value={values?.email}
                                        onChange={handleChange}
                                        className="outline-none w-full text-[#99A6AB]  font-mont text-xs bg-[#FFF] border rounded-lg border-[#C6C6C6] p-3 h-[38px] border-solid "
                                    />
                                    {errors.email && touched.email ? (
                                    <div className="text-RED-_100 text-xs">
                                        {errors.email}
                                    </div>
                                    ) : null}
                                </div>
                            </div>

                            <div className="flex justify-end fixed lg:right-[30%] top-[90%]">
                                <button 
                                    className={`${isValid ? "bg-[#FDB181]" : "bg-[#BABABA]"} w-[300px] lg:w-[251px] h-[52px] rounded-[4px] border border-[#000709] flex justify-center items-center`}
                                    type='submit'
                                    onClick={() => submitSocialHandle(values, action)}
                                >
                                    <p className='text-[#00141B] text-base font-mont font-semibold'>{addExperienceLoading ? <CgSpinner className=" animate-spin text-lg " /> : 'Save & Continue'}</p>
                                </button>
                            </div>

                        </div>
                    </Form>
                )}
            </Formik>
        </div>
        
        <div className='border-0 border-[#E3E7E8] rounded-lg mt-[19px] lg:w-[725px] px-[12px]'>
                <p className='font-mont text-sm lg:text-lg font-medium text-[#00141B]'>Social media handles</p>
                <div className='flex flex-wrap gap-2 mt-[19px] items-center'>
                    {
                        getAllLinks?.length > 0 && getAllLinks?.map((url, index) => (
                        <div key={index}  className=' w-auto h-[36px] gap-2 flex  bg-[#EAFAFB] items-center justify-between rounded-[9px] p-2'>
                            <div className='flex items-center gap-2  '>
                                <p className='text-[#043246] text-[13px] font-inter font-medium'>{url?.name} </p>
                            </div>
                            <p 
                                className='w-[8px] h-[8px] text-[#28C9D0] lg:mb-1 flex items-center cursor-pointer' 
                                onClick={() => deleteSoftSkills(url?.id)}
                            >
                                x
                            </p>
                        </div>
                        ))
                    }

                </div>
                <Formik
                  initialValues={{
                    url: "",
                    media: ""
                  }}
                    // validationSchema={softSkillsFormValidationSchema}
                    onSubmit={(values, action) => {
                    console.log(values, "market")
                    submitSocialHandle(values, action);
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
                        <Form onSubmit={handleSubmit} className="flex w-full ">
                          <div className="w-full flex flex-col ">
                            <div className='flex flex-col mt-[19px]'>
                                <div className='flex flex-col lg:flex-row lg:items-center gap-4'>
                                    <div className='flex flex-col gap-1'>
                                      <div className='flex w-full lg:w-[392px] border rounded-lg border-[#C6C6C6] h-[40px] border-solid p-1.5'>
                                        <input
                                          name="url"
                                          placeholder="Type in your url"
                                          type="text" 
                                          value={values?.url}
                                          onChange={handleChange} 
                                          className="outline-none w-full lg:w-[392px] text-[#667A81] font-mont text-xs bg-[#FFF]"
                                        />
                                      </div>
                                      {errors.url && touched.url ? (
                                          <div className="text-RED-_100 text-xs">
                                              {errors.url}
                                          </div>
                                          ) : null}
                                    </div>
                                    <div className='flex flex-col gap-1'>
                                      <select
                                        className='outline-none w-full lg:w-[183px] text-[#667A81] font-mont text-xs bg-[#FFF] border rounded-lg border-[#C6C6C6] p-3 h-[40px] border-solid'
                                        onChange={handleChange}
                                        value={values?.level}
                                        name='level'
                                      >
                                        <option value="" defaultValue>Select social media</option>
                                        <option value="Personal website">Personal website</option>
                                        <option value="LinkedIn">LinkedIn</option>
                                        <option value="Twitter">Twitter</option>
                                        <option value="Instagram">Instagram</option>
                                        <option value="Facebook">Facebook</option>
                                        <option value="Github">Github</option>
                                        <option value="StackOverflow">StackOverflow</option>
                                        <option value="Dribble">Dribble</option>
                                        <option value="Behance">Behance</option>
                                    </select>
                                    {errors.level && touched.level ? (
                                        <div className="text-RED-_100 text-xs">
                                            {errors.level}
                                        </div>
                                        ) : null}
                                    </div>

                                    <button
                                    className={`${isValid ? "bg-[#94A3B8]"  : "bg-[#BABABA]" } w-full lg:w-[81px] font-mont flex items-center rounded-[6px] justify-center  h-[40px] text-center`}
                                    type="submit"
                                    disabled={!isValid}
                                    >
                                    <p className='text-[#fff] text-xs'>Add Skill</p>
                                    </button>
                                </div>

                            </div>  
                          </div>

                        </Form>
                    )}
                </Formik>

            </div>
    </div>
  )
}

export default Contact
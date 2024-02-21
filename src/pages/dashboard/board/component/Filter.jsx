import React, { useState } from 'react'
import { Formik, Form } from 'formik'
import * as Yup from "yup"
import { CgSpinner } from 'react-icons/cg'
import { AiOutlineClose } from 'react-icons/ai'

const FilterModal = ({ handleClose }) => {
    const [loading, setLoading] = useState(false)

    const formValidationSchema = Yup.object().shape({
        keyWord: Yup.string(),
        location: Yup.string(),
        salary: Yup.number()
    })


  return (
    <div className='bg-[#fff] w-full lg:w-[308px] lg:ml-[75%] rounded-xl flex flex-col lg:mt-5 lg:h-[550px] overflow-y-scroll p-4 gap-6'>
        <div className='flex justify-end lg:hidden'>
            <button className="w-[36px] h-[36px] border-0 flex  justify-center items-center p-2" onClick={handleClose}>
                <AiOutlineClose className="text-[#5F5F5F] w-[24px] h-[24px]"/>
            </button>
        </div>
        <p className='font-mont text-2xl font-semibold text-[#001A24]'>Filter</p>
        <div>
            <Formik
                initialValues={{
                    keyWord: "",
                    location: ""
                }}
                    // validationSchema={formValidationSchema}
                    onSubmit={(values, action) => {
                    window.scrollTo(0, 0);
                    console.log(values, "market")
                    submitForm(values, action);
                    // navigate("/download");
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
                    <Form onSubmit={handleSubmit} className="flex justify-center ">
                            <div className="flex flex-col gap-6">
                                <div className='flex flex-col gap-2'>
                                    <label htmlFor='keyWord' className='font-mont font-medium text-[#334D57] text-sm' >Key Words</label>
                                    <input
                                        name="keyWord"
                                        placeholder="Enter key words"
                                        type="text" 
                                        value={values?.keyWord}
                                        onChange={handleChange}
                                        className="outline-none w-full text-[#F9FAFB] font-mont font-medium text-xs rounded lg:w-[276px] bg-[#E3E7E8] border  border-[#E3E7E8] p-3 h-[38px] border-solid "
                                    /> 
                                    {errors.keyWord && touched.keyWord ? (
                                    <div className="text-RED-_100 text-xs">
                                        {errors.keyWord}
                                    </div>
                                    ) : null}
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <label htmlFor='location' className='font-mont font-medium text-[#334D57] text-sm' >Locations</label>
                                    <input
                                        name="location"
                                        placeholder="Enter key words"
                                        type="text" 
                                        value={values?.location}
                                        onChange={handleChange}
                                        className="outline-none w-full text-[#F9FAFB] font-mont font-medium text-xs rounded lg:w-[276px] bg-[#E3E7E8] border  border-[#E3E7E8] p-3 h-[38px] border-solid "
                                    /> 
                                    {errors.location && touched.location ? (
                                    <div className="text-RED-_100 text-xs">
                                        {errors.location}
                                    </div>
                                    ) : null}
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <label htmlFor='location' className='font-mont font-medium text-[#334D57] text-sm' >Salary Range (₦)</label>
                                    <div className='flex items-center gap-3'>
                                        <input
                                            name="location"
                                            placeholder="Min"
                                            type="text" 
                                            value={values?.location}
                                            onChange={handleChange}
                                            className="outline-none w-full text-[#F9FAFB] font-mont font-medium text-xs rounded lg:w-[122px] bg-[#E3E7E8] border  border-[#E3E7E8] p-3 h-[38px] border-solid "
                                        /> 
                                        <p> - </p>
                                        <input
                                            name="location"
                                            placeholder="Max"
                                            type="text" 
                                            value={values?.location}
                                            onChange={handleChange}
                                            className="outline-none w-full text-[#F9FAFB] font-mont font-medium text-xs rounded lg:w-[122px] bg-[#E3E7E8] border  border-[#E3E7E8] p-3 h-[38px] border-solid "
                                        />
                                    </div>
                                    {errors.location && touched.location ? (
                                    <div className="text-RED-_100 text-xs">
                                        {errors.location}
                                    </div>
                                    ) : null}
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <label htmlFor='location' className='font-mont font-medium text-[#334D57] text-sm' >Work style</label>
                                    <div className='grid grid-cols-3 gap-3'>
                                        <div className='flex gap-1 items-center'>
                                            <input
                                                name='remote' 
                                                type='checkbox'
                                                value={values?.remote}
                                                className='w-[14px] h-[14px] rounded-lg' 
                                            />
                                            <p className='font-mont text-[13px] text-[#334D57]'>Remote</p>
                                        </div>
                                        <div className='flex gap-1 items-center'>
                                            <input
                                                name='hybrid' 
                                                type='checkbox'
                                                value={values?.hybrid}
                                                className='w-[14px] h-[14px] rounded-lg' 
                                            />
                                            <p className='font-mont text-[13px] text-[#334D57]'>Hybrid</p>
                                        </div>
                                        <div className='flex gap-1 items-center'>
                                            <input
                                                name='onsite' 
                                                type='checkbox'
                                                value={values?.onsite}
                                                className='w-[14px] h-[14px] rounded-lg' 
                                            />
                                            <p className='font-mont text-[13px] text-[#334D57]'>Onsite</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <label htmlFor='location' className='font-mont font-medium text-[#334D57] text-sm' >Experience</label>
                                    <div className='grid grid-cols-3 gap-3'>
                                        <div className='flex gap-1 items-center'>
                                            <input
                                                name='entry' 
                                                type='checkbox'
                                                value={values?.entry}
                                                className='w-[14px] h-[14px] rounded-lg' 
                                            />
                                            <p className='font-mont text-[12px] w-[73px] text-[#334D57]'>Entry Level</p>
                                        </div>
                                        <div className='flex gap-1 items-center'>
                                            <input
                                                name='junior' 
                                                type='checkbox'
                                                value={values?.Junior}
                                                className='w-[14px] h-[14px] rounded-lg' 
                                            />
                                            <p className='font-mont text-[12px] text-[#334D57]'>Junior</p>
                                        </div>
                                        <div className='flex gap-1 items-center'>
                                            <input
                                                name='mid' 
                                                type='checkbox'
                                                value={values?.mid}
                                                className='w-[14px] h-[14px] rounded-lg' 
                                            />
                                            <p className='font-mont text-[12px] text-[#334D57]'>Mid-level</p>
                                        </div>
                                        <div className='flex gap-1 items-center'>
                                            <input
                                                name='senior' 
                                                type='checkbox'
                                                value={values?.senior}
                                                className='w-[14px] h-[14px] rounded-lg' 
                                            />
                                            <p className='font-mont text-[12px] text-[#334D57]'>Senior</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <label htmlFor='location' className='font-mont font-medium text-[#334D57] text-sm' >Job type</label>
                                    <div className='grid grid-cols-2 gap-3 w-[170px]'>
                                        <div className='flex gap-1 items-center'>
                                            <input
                                                name='fullTime' 
                                                type='checkbox'
                                                value={values?.fullTime}
                                                className='w-[14px] h-[14px] rounded-lg' 
                                            />
                                            <p className='font-mont text-[12px] w-[73px] text-[#334D57]'>Full-time</p>
                                        </div>
                                        <div className='flex gap-1 items-center'>
                                            <input
                                                name='partTime' 
                                                type='checkbox'
                                                value={values?.partTime}
                                                className='w-[14px] h-[14px] rounded-lg' 
                                            />
                                            <p className='font-mont text-[12px] text-[#334D57]'>Part-time</p>
                                        </div>
                                        <div className='flex gap-1 items-center'>
                                            <input
                                                name='contract' 
                                                type='checkbox'
                                                value={values?.contract}
                                                className='w-[14px] h-[14px] rounded-lg' 
                                            />
                                            <p className='font-mont text-[12px] text-[#334D57]'>Contract</p>
                                        </div>
                                        <div className='flex gap-1 items-center'>
                                            <input
                                                name='internship' 
                                                type='checkbox'
                                                value={values?.internship}
                                                className='w-[14px] h-[14px] rounded-lg' 
                                            />
                                            <p className='font-mont text-[12px] text-[#334D57]'>Internship</p>
                                        </div>
                                    </div>
                                </div>
                                
                                <button
                                    className={`${isValid ? "bg-[#FBA599]" : "bg-[#BABABA]"} w-full lg:w-[276px] font-mont flex items-center  rounded-[6px] justify-center mt-10 lg:mt-[8px] h-[36px] text-base text-center`}
                                    type="submit"
                                    disabled={!isValid}
                                >
                                    <p className='text-[#000709] text-sm font-semibold'>{loading ? <CgSpinner className=" animate-spin text-lg " /> : 'Save settings'}</p>
                                    
                                </button>
                            </div>

                    </Form>
                )}
            </Formik>
        </div>
    </div>
  )
}

export default FilterModal
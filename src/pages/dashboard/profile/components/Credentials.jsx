import React, { useState } from 'react'
import { Form, Formik } from 'formik'
import { FaPlus } from 'react-icons/fa6';
import { IoIosArrowDown } from "react-icons/io";

import Link from "../../../../assets/img/link.png"
import Bin from "../../../../assets/img/bin.png"
import Work from "../../../../assets/img/work.png"

const Credentials = () => {
  const [check, setCheck] = useState(false);
  const [text, setText] = useState("")
  const [showWorkExperienceInput, setShowWorkExperienceInput] = useState(false);
  const [showEducationInput, setShowEducationInput] = useState(false);
  const [showCertificationInput, setShowCertificationInput] = useState(false);
  const [showProjectInput, setShowProjectInput] = useState(false);
  const [workData, setWorkData] = useState({
    img: Work,
    title: "",
    companyName: "",
    startMonth: "",
    endMonth: "",
  })


  const handleCheck = () => {
    setCheck(prev => !prev)
  }

  const countWords = () => {
    // Remove leading and trailing whitespaces
    const trimmedText = text.trim();

    // Count words by splitting the text by whitespaces
    const words = trimmedText.split(/\s+/);

    // Filter out empty strings (caused by multiple whitespaces)
    const filteredWords = words.filter(word => word !== '');

    return filteredWords.length;
  };

const Month = [
  "January", "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
]

const Year = [
  "2000", "2001", "2002", "2003", "2004", "2005", "2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014"
]

  return (
    <div className="flex flex-col gap-4 mt-4 mb-10">
      <div className='w-full lg:w-[815px] flex flex-col bg-[#fff] rounded-lg p-4'>
        <p className='font-semibold text-lg font-mont text-[#1B565B]'>Credentials</p>
        <p className='text-[#334D57] font-mont text-[15px]'>Add information about yourself to make it easier for companies to know you</p>
      </div>

      <div className='w-full lg:w-[815px] h-[490px] flex flex-col bg-[#fff] rounded-lg p-4'>
        <Formik
          initialValues={{
            jobTitle: "",
            companyName: "",
            startMonth: "",
            startYear: "",
            endMonth: "",
            endYear: ""
          }}
            // validationSchema={formValidationSchema}
            onSubmit={(values, action) => {
            console.log(values, "market")
            setShowWorkExperienceInput(prev => !prev)
            // submitForm(values, action);
            setWorkData({
              title: values?.jobTitle,
              companyName: values?.companyName, 
              startMonth: values?.startMonth,
              endMonth: values?.endMonth
            })
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
                  {!showWorkExperienceInput ? 
                    <button
                      type='submit'
                      className='w-[67px] h-[30px] bg-transparent flex items-center font-semibold text-sm text-[#000709] justify-center'
                    >
                      Save
                    </button> 
                  : 
                    <button className='w-[28px] h-[28px] cursor-pointer bg-[#CCD3D566] p-[7px]' type='submit'>
                      <FaPlus className="w-[13px] h-[13px] text-[#000709]" />
                    </button>
                  } 
                </div>

                {
                  workData.length > 0 ?
                  workData.map((items, index) => (
                        <div key={index} className='flex justify-between rounded-lg w-full py-[13px] px-[15px] border border-[#CCCCCC] bg-[#F9FAFB]'>
                          <div className='flex items-center gap-[13px]'>
                            <img src={items?.img} alt='work' className='w-[55px] h-[55px]'/>
                            <div className='flex flex-col gap-1'>
                              <p className='font-mont font-semibold text-[16px] text-[#001A24]'>{items?.jobTitle}</p>
                              <p className='font-medium text-[12px] text-[#000D12] font-mont'>{items?.companyName}</p>
                              <p className='font-mont text-[11px] text-[#10303D]'>{`${items?.startMonth} - ${items?.endMonth}`}</p>
                            </div>
                          </div>
                          <img src={Bin} alt='delete' className='w-[27px] h-[27px]' onClick={() => setWorkData({})} />
                        </div>
                    ))
                    :
                    null
                 
                }

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
                      className="outline-none w-full lg:w-[386px] h-[45px] flex items-center justify-between text-[#99A6AB] appearance-none  font-mont text-xs bg-[#F9FAFB] border rounded border-[#C6C6C6] p-3 h-[38px] border-solid "
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
                      className="outline-none w-full lg:w-[386px] h-[45px] flex items-center justify-between text-[#99A6AB] appearance-none  font-mont text-xs bg-[#F9FAFB] border rounded border-[#C6C6C6] p-3 h-[38px] border-solid "
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
                <div className='flex items-center gap-[14px]'>
                  <div className='w-full flex flex-col gap-[6px]'>
                    <label htmlFor='endMonth' className='font-mont font-medium text-[#334D57] text-sm'>End Month</label>
                    <div
                      className="outline-none w-full lg:w-[386px] h-[45px] flex items-center justify-between text-[#99A6AB] appearance-none  font-mont text-xs bg-[#F9FAFB] border rounded border-[#C6C6C6] p-3 h-[38px] border-solid "
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
                      className="outline-none w-full lg:w-[386px] h-[45px] flex items-center justify-between text-[#99A6AB] appearance-none  font-mont text-xs bg-[#F9FAFB] border rounded border-[#C6C6C6] p-3 h-[38px] border-solid "
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
                
              </div>
            </Form>
           )}
        </Formik>
       
      </div>

      <div className='w-full lg:w-[815px] h-[490px] flex flex-col bg-[#fff] rounded-lg p-4'>
        <Formik
          initialValues={{
            schoolName: "",
            degree: "",
            startMonth: "",
            startYear: "",
            endMonth: "",
            endYear: ""
          }}
            // validationSchema={formValidationSchema}
            onSubmit={(values, action) => {
            console.log(values, "market")
            // submitForm(values, action);
            setShowEducationInput(prev => !prev)
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
                  <p className='text-[#00141B] font-mont text-lg font-medium'>Education</p>
                  {!showEducationInput ? 
                    <button
                      type='submit'
                      className='w-[67px] h-[30px] bg-transparent flex items-center font-semibold text-sm text-[#000709] justify-center'
                    >
                      Save
                    </button> 
                  : 
                    <button className='w-[28px] h-[28px] cursor-pointer bg-[#CCD3D566] p-[7px]'>
                      <FaPlus className="w-[13px] h-[13px] text-[#000709]" />
                    </button>
                  }
                </div>

                <div className='w-full flex flex-col gap-[6px]'>
                  <label htmlFor='schoolName' className='font-mont font-medium text-[#334D57] text-sm'>School name</label>
                  <input
                      name="schoolName"
                      placeholder="School Name"
                      type="text" 
                      value={values?.schoolName}
                      onChange={handleChange}
                      className="outline-none w-full text-[#99A6AB]  font-mont text-xs bg-[#F9FAFB] border rounded border-[#C6C6C6] p-3 h-[38px] border-solid "
                  />
                  {errors.schoolName && touched.schoolName ? (
                  <div className="text-RED-_100 text-xs">
                      {errors.schoolName}
                  </div>
                  ) : null}
                </div>

                <div className='w-full flex flex-col gap-[6px]'>
                  <label htmlFor='degree' className='font-mont font-medium text-[#334D57] text-sm'>Degree or Certification</label>
                  <input
                      name="degree"
                      placeholder="Add Degree"
                      type="text" 
                      value={values?.degree}
                      onChange={handleChange}
                      className="outline-none w-full text-[#99A6AB]  font-mont text-xs bg-[#F9FAFB] border rounded border-[#C6C6C6] p-3 h-[38px] border-solid "
                  />
                  {errors.degree && touched.degree ? (
                  <div className="text-RED-_100 text-xs">
                      {errors.degree}
                  </div>
                  ) : null}
                </div>

                <div className='flex items-center gap-[14px]'>
                  <div className='w-full flex flex-col gap-[6px]'>
                    <label htmlFor='startMonth' className='font-mont font-medium text-[#334D57] text-sm'>Start Month</label>
                    <div
                      className="outline-none w-full lg:w-[386px] h-[45px] flex items-center justify-between text-[#99A6AB] appearance-none  font-mont text-xs bg-[#F9FAFB] border rounded border-[#C6C6C6] p-3 h-[38px] border-solid "
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
                      className="outline-none w-full lg:w-[386px] h-[45px] flex items-center justify-between text-[#99A6AB] appearance-none  font-mont text-xs bg-[#F9FAFB] border rounded border-[#C6C6C6] p-3 h-[38px] border-solid "
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
                  <p className='font-mont font-medium text-sm text-[#334D57]'>Currently enrolled</p>
                </div>
                <div className='flex items-center gap-[14px]'>
                  <div className='w-full flex flex-col gap-[6px]'>
                    <label htmlFor='endMonth' className='font-mont font-medium text-[#334D57] text-sm'>End Month</label>
                    <div
                      className="outline-none w-full lg:w-[386px] h-[45px] flex items-center justify-between text-[#99A6AB] appearance-none  font-mont text-xs bg-[#F9FAFB] border rounded border-[#C6C6C6] p-3 h-[38px] border-solid "
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
                      className="outline-none w-full lg:w-[386px] h-[45px] flex items-center justify-between text-[#99A6AB] appearance-none  font-mont text-xs bg-[#F9FAFB] border rounded border-[#C6C6C6] p-3 h-[38px] border-solid "
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
                
              </div>
            </Form>
           )}
        </Formik>
      </div>

      <div className='w-full lg:w-[815px] h-[451px] flex flex-col bg-[#fff] rounded-lg p-4'>
        <Formik
          initialValues={{
            certificationName: "",
            certification: "",
            collectionMonth: "",
            collectionYear: "",
            link: "",
          }}
            // validationSchema={formValidationSchema}
            onSubmit={(values, action) => {
            console.log(values, "market")
            // submitForm(values, action);
            setShowCertificationInput(prev => !prev)
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
                  <p className='text-[#00141B] font-mont text-lg font-medium'>Certifications</p>
                  {!showCertificationInput ? 
                    <button
                      type='submit'
                      className='w-[67px] h-[30px] bg-transparent flex items-center font-semibold text-sm text-[#000709] justify-center'
                    >
                      Save
                    </button> 
                  : 
                    <button className='w-[28px] h-[28px] cursor-pointer bg-[#CCD3D566] p-[7px]'>
                      <FaPlus className="w-[13px] h-[13px] text-[#000709]" />
                    </button>
                  }
                </div>

                <div className='w-full flex flex-col gap-[6px]'>
                  <label htmlFor='certificationName' className='font-mont font-medium text-[#334D57] text-sm'>Certification name</label>
                  <input
                      name="certificationName"
                      placeholder="Certification Name"
                      type="text" 
                      value={values?.certificationName}
                      onChange={handleChange}
                      className="outline-none w-full text-[#99A6AB] font-mont text-xs bg-[#F9FAFB] border rounded border-[#C6C6C6] p-3 h-[38px] border-solid "
                  />
                  {errors.certificationName && touched.certificationName ? (
                  <div className="text-RED-_100 text-xs">
                      {errors.certificationName}
                  </div>
                  ) : null}
                </div>

                <div className='w-full flex flex-col gap-[6px]'>
                  <label htmlFor='certification' className='font-mont font-medium text-[#334D57] text-sm'>Certification</label>
                  <input
                      name="certification"
                      placeholder="Add Certification"
                      type="text" 
                      value={values?.certification}
                      onChange={handleChange}
                      className="outline-none w-full text-[#99A6AB]  font-mont text-xs bg-[#F9FAFB] border rounded border-[#C6C6C6] p-3 h-[38px] border-solid "
                  />
                  {errors.certification && touched.certification ? (
                  <div className="text-RED-_100 text-xs">
                      {errors.certification}
                  </div>
                  ) : null}
                </div>

                <div className='flex items-center gap-[14px]'>
                  <div className='w-full flex flex-col gap-[6px]'>
                    <label htmlFor='collectionMonth' className='font-mont font-medium text-[#334D57] text-sm'>Collection Month</label>
                    <div
                      className="outline-none w-full lg:w-[386px] h-[45px] flex items-center justify-between text-[#99A6AB] appearance-none  font-mont text-xs bg-[#F9FAFB] border rounded border-[#C6C6C6] p-3 h-[38px] border-solid "
                    >
                      <select
                        name="collectionMonth"
                        value={values?.collectionMonth}
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
                    {errors.collectionMonth && touched.collectionMonth ? (
                    <div className="text-RED-_100 text-xs">
                        {errors.collectionMonth}
                    </div>
                    ) : null}
                  </div>
                  <div className='w-full flex flex-col gap-[6px]'>
                    <label htmlFor='collectionYear' className='font-mont font-medium text-[#334D57] text-sm'>Year</label>
                    <div
                      className="outline-none w-full lg:w-[386px] h-[45px] flex items-center justify-between text-[#99A6AB] appearance-none  font-mont text-xs bg-[#F9FAFB] border rounded border-[#C6C6C6] p-3 h-[38px] border-solid "
                    >
                      <select
                        name="collectionYear"
                        value={values?.collectionYear}
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
                    {errors.collectionYear && touched.collectionYear ? (
                    <div className="text-RED-_100 text-xs">
                        {errors.collectionYear}
                    </div>
                    ) : null}
                  </div>
                </div>

                <div className='w-full flex flex-col gap-[6px]'>
                  <label htmlFor='link' className='font-mont font-medium text-[#334D57] text-sm'>Link to certification</label>
                  <input
                      name="link"
                      placeholder="Add Link here"
                      type="text" 
                      value={values?.link}
                      onChange={handleChange}
                      className="outline-none w-full text-[#99A6AB]  font-mont text-xs bg-[#F9FAFB] border rounded border-[#C6C6C6] p-3 h-[38px] border-solid "
                  />
                  {errors.link && touched.link ? (
                  <div className="text-RED-_100 text-xs">
                      {errors.link}
                  </div>
                  ) : null}
                </div>
                
                
              </div>
            </Form>
           )}
        </Formik>
       
      </div>

      <div className='w-full lg:w-[815px]  flex flex-col bg-[#fff] rounded-lg p-4'>
        <Formik
          initialValues={{
            title: "",
            description: "",
            link: "",
            duration: "",
            endMonth: "",
            endYear: "",
          }}
            // validationSchema={formValidationSchema}
            onSubmit={(values, action) => {
            console.log(values, "market")
            // submitForm(values, action);

            setShowProjectInput(prev => !prev)
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
                  <p className='text-[#00141B] font-mont text-lg font-medium'>Projects and Achievements</p>
                  {!showProjectInput ? 
                    <button
                      type='submit'
                      className='w-[67px] h-[30px] bg-transparent flex items-center font-semibold text-sm text-[#000709] justify-center'
                    >
                      Save
                    </button> 
                  : 
                    <button className='w-[28px] h-[28px] cursor-pointer bg-[#CCD3D566] p-[7px]'>
                      <FaPlus className="w-[13px] h-[13px] text-[#000709]" />
                    </button>
                  }
                </div>

                <div className='w-full flex flex-col gap-[6px]'>
                  <label htmlFor='projectTitle' className='font-mont font-medium text-[#334D57] text-sm'>Project Title</label>
                  <input
                      name="projectTitle"
                      placeholder="Add Project Title"
                      type="text" 
                      value={values?.projectTitle}
                      onChange={handleChange}
                      className="outline-none w-full text-[#99A6AB] font-mont text-xs bg-[#F9FAFB] border rounded border-[#C6C6C6] p-3 h-[38px] border-solid "
                  />
                  {errors.projectTitle && touched.projectTitle ? (
                  <div className="text-RED-_100 text-xs">
                      {errors.projectTitle}
                  </div>
                  ) : null}
                </div>

                  <div className='flex flex-col gap-[6px]'>
                    <label htmlFor='description' className='font-mont font-medium text-[#334D57] text-sm'>Project Description</label>
                    <textarea
                        name="description"
                        placeholder="Tell us about your Project"
                        disabled={text > 126 ? true : false }
                        type="text" 
                        rows="5"
                        value={values?.description}
                        onChange={(e) => {
                            const words =  setText(e.target.value);
                            setFieldValue("description", words)
                            }
                        }
                        className="outline-none w-full  text-[#99A6AB] font-mont font-medium text-xs  bg-[#F5F5F5]  p-3  rounded "
                    ></textarea>
                    <div className='flex justify-end text-sm text-[#99A6AB]'>{`${countWords()}/125 words`}</div> 
                      {errors.description && touched.description ? (
                      <div className="text-RED-_100 text-xs">
                          {errors.description}
                      </div>
                      ) : null}
                  </div>

                <div className=' flex items-center gap-[14px]'>
                  <div className='w-full flex flex-col gap-[6px]'>
                    <label htmlFor='link' className='font-mont font-medium text-[#334D57] text-sm'>Link</label>
                    <div
                      className="outline-none w-full lg:w-[386px] h-[45px] flex items-center gap-2 text-[#99A6AB] appearance-none  font-mont text-xs bg-[#F9FAFB] border rounded border-[#C6C6C6] p-3 h-[38px] border-solid "
                    >
                      <img src={Link} alt='link' className='h-[19px] w-[19px]' />
                      <input 
                        name='link'
                        placeholder='Add a link here'
                        onChange={handleChange}
                        className='outline-none bg-transparent w-full'

                      />
                    </div>
                    {errors.link && touched.link ? (
                    <div className="text-RED-_100 text-xs">
                        {errors.link}
                    </div>
                    ) : null}
                  </div>
                  <div className='w-full flex flex-col gap-[6px]'>
                    <label htmlFor='duration' className='font-mont font-medium text-[#334D57] text-sm'>Duration</label>
                    <div
                      className="outline-none w-full lg:w-[386px] h-[45px] flex items-center justify-between text-[#99A6AB] appearance-none  font-mont text-xs bg-[#F9FAFB] border rounded border-[#C6C6C6] p-3 h-[38px] border-solid "
                    >
                      <input 
                        name='duration'
                        type='number'
                        placeholder='0'
                        onChange={handleChange}
                        className='outline-none bg-transparent w-full'
                      />
                      <p className='text-[#99A6AB] text-xs'>Months</p>
                    </div>
                    {errors.duration && touched.duration ? (
                    <div className="text-RED-_100 text-xs">
                        {errors.duration}
                    </div>
                    ) : null}
                  </div>
                </div>

                <div className='flex items-center gap-[14px]'>
                  <div className='w-full flex flex-col gap-[6px]'>
                    <label htmlFor='endMonth' className='font-mont font-medium text-[#334D57] text-sm'>End Month</label>
                    <div
                      className="outline-none w-full lg:w-[386px] h-[45px] flex items-center justify-between text-[#99A6AB] appearance-none  font-mont text-xs bg-[#F9FAFB] border rounded border-[#C6C6C6] p-3 h-[38px] border-solid "
                    >
                      <select
                        name="endMonth"
                        value={values?.endMonth}
                        onChange={handleChange}
                        className='appearance-none w-full bg-transparent outline-none'
                      >
                        <option value="" defaultValue>Insert Month</option>
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
                      className="outline-none w-full lg:w-[386px] h-[45px] flex items-center justify-between text-[#99A6AB] appearance-none  font-mont text-xs bg-[#F9FAFB] border rounded border-[#C6C6C6] p-3 h-[38px] border-solid "
                    >
                      <select
                        name="endYear"
                        value={values?.endYear}
                        onChange={handleChange}
                        className='appearance-none w-full bg-transparent outline-none'
                      >
                        <option value="" defaultValue>Insert Year</option>
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
                
                
              </div>
            </Form>
           )}
        </Formik>
       
      </div>

    </div>
  )
}

export default Credentials
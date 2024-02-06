import React, { useState, useEffect } from 'react'
import { Formik, Form} from "formik"
import { FaPlus, FaMinus } from "react-icons/fa6";
import { SlLocationPin } from "react-icons/sl";

import ImagePlaceholder from "../../../../assets/img/imagePlaceholder.png"
import Flag from "../../../../assets/img/nigeria.png"
import Plus from "../../../../assets/img/plus.png"
import Beginner from "../../../../assets/img/beginner.png"
import Intermediate from "../../../../assets/img/intermediate.png"
import Expert from "../../../../assets/img/expert.png"

import { allLocation } from '../../../../helpers/countries';
import { useSelector } from 'react-redux';

const YourProfile = () => {
  const [profile, setProfile] = useState(null)
  const [text, setText] = useState('');
  const [count, setCount] = useState(0);
  const [experience, setExperience] = useState("");
  const [allCountries, setAllCountries] = useState([]);
  const [searchCountry, setSearchCountry] = useState("");
  const [locationClicked, setLocationClicked] = useState(false);
  const [errorCountry, setErrorCountry] = useState(false);

  const [showSkillsInput, setShowSkillsInput] = useState(false)
  const [showSoftSkillsInput, setShowSoftSkillsInput] = useState(false)

  const profileData = useSelector(state => state.userLogin)
  const userData = profileData?.user?.user

  console.log(userData, "farao")

  const handleFileChange = async (event) => {
    const selectedFile = event.target.files[0];
    const imageUrl = URL.createObjectURL(selectedFile);
    setProfile(imageUrl);
  }

  function searchCountries(searchTerm) {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();

    const matchingCountries = allLocation.filter((country) =>
      country.toLowerCase().includes(lowerCaseSearchTerm)
    );

    console.log(matchingCountries, "sos");

    setAllCountries(matchingCountries);
    
  }

  useEffect(() => {
    searchCountries(searchCountry);
  }, [searchCountry]);
  

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

  const countWords = () => {
    // Remove leading and trailing whitespaces
    const trimmedText = text.trim();

    // Count words by splitting the text by whitespaces
    const words = trimmedText.split(/\s+/);

    // Filter out empty strings (caused by multiple whitespaces)
    const filteredWords = words.filter(word => word !== '');

    return filteredWords.length;
  };

  useEffect(() => {
    calculateExperienceLevel(count);
  }, [count]);

  const technicalSkills = []

  const submitSkills = (values, action ) => {
    technicalSkills.push({name:values?.skills, level:values?.level})
    localStorage.setItem('technicalSkills', JSON.stringify(technicalSkills));
    action.resetForm()
    setShowSkillsInput(true)
  }

  let retrievedTechnicalSkills = JSON.parse(localStorage.getItem('technicalSkills'));

  console.log('retrievedTechnicalSkills: ', retrievedTechnicalSkills);

  const softSkills = []

  const submitSoftSkills = (values, action ) => {
    softSkills.push({skillsName:values?.skills, skillsLevel:values?.level})
    localStorage.setItem('softSkills', JSON.stringify(softSkills));
    action.resetForm()
    setShowSoftSkillsInput(true)
  }

  let retrievedSoftSkills = JSON.parse(localStorage.getItem('softSkills'));

  console.log('retrievedSoftSkills: ', retrievedSoftSkills);

  const employment = [
    {description: "Full-time"},
    {description: "Part-time"},
    {description: "Contract"},
    {description: "Temporary"},
    {description: "Internship"},
  ]

  return (
    <div className="flex flex-col gap-4 mt-4">
      <div className='w-full lg:w-[756px] lg:h-[690px] bg-[#fff] rounded p-4 gap-5'>
        <div className='flex flex-col gap-[4px]'>
          <p className='text-[#1B565B] font-semibold text-sm'>Profile Information</p>
          <p className='text-[#334D57] text-xs font-mont'>Add information about yourself to make it easier for companies to know you</p>
        </div>
        <div className='mt-5'>
          <Formik
            initialValues={{
              letter: "",
              salary: ""
            }}
                // validationSchema={formValidationSchema}
                onSubmit={(values, action) => {
                window.scrollTo(0, 0);
                console.log(values, "market")
                // submitForm(values, action);
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
                      <div className="w-full flex flex-col gap-[32px]">
                        <div className='flex items-center gap-4'>
                          <div className='w-[84px] flex relative  rounded-full  border border-[#024355]'>
                            <label htmlFor="fileInput" className='cursor-pointer flex'>
                                <img src={ImagePlaceholder} alt='imagePlacehoder' className='w-full'/>
                                <input
                                    type="file"
                                    accept="image/*"
                                    id="fileInput"
                                    style={{ display: 'none' }}
                                    onChange={handleFileChange}
                                />
                            </label>
                            <img src={Plus} alt='plus' className='absolute flex top-16 left-16 w-[18px] h-[18px]' />
                          </div>
                          <div className='flex flex-col gap-[4px]'>
                            <p className='text-[#00141B] text-base font-mont'>{`${userData?.first_name} ${userData?.last_name}`}</p>
                            <div onChange={handleFileChange} className='w-[144px] cursor-pointer h-[28px] bg-[#FBA599] flex items-center justify-center rounded-sm'>
                              <p className='text-xs font-semibold text-[#00141B]'>Add Profile Image</p>
                            </div>
                          </div> 
                        </div>

                        <div className='w-full flex flex-col gap-2'>
                          <textarea
                              name="letter"
                              placeholder="Add a bio so people can learn more about you"
                              disabled={text > 126 ? true : false }
                              type="text" 
                              rows="5"
                              value={values?.letter}
                              onChange={(e) => {
                                  const words =  setText(e.target.value);
                                  setFieldValue("letter", words)
                                  }
                              }
                              className="outline-none w-full  text-[#99A6AB] font-mont font-medium text-xs lg:w-[724px] bg-[#F5F5F5]  p-3  rounded "
                          ></textarea>
                          <div className='flex justify-end text-sm text-[#99A6AB]'>{`${countWords()}/125 words`}</div> 
                            {errors.letter && touched.letter ? (
                            <div className="text-RED-_100 text-xs">
                                {errors.letter}
                            </div>
                            ) : null}
                          </div>
                            
                          <div className='flex flex-col lg:flex-row lg:items-center gap-6'>
                            <div className='w-full flex flex-col gap-[6px]'>
                              <label htmlFor='jobTitle' className='font-mont font-medium text-[#334D57] text-sm'>Job Title</label>
                              <input
                                  name="jobTitle"
                                  placeholder="Enter Job Title"
                                  type="text" 
                                  value={values?.jobTitle}
                                  onChange={handleChange} //w-[519px]
                                  className="outline-none w-full lg:w-[350px] font-mont text-xs bg-[#F9FAFB] border rounded border-[#C6C6C6] p-3 h-[38px] border-solid "
                              />
                              {errors.jobTitle && touched.jobTitle ? (
                              <div className="text-RED-_100 text-xs">
                                  {errors.jobTitle}
                              </div>
                              ) : null}
                            </div>

                            <div className="flex flex-col gap-[6px]">
                              <label
                                htmlFor="level"
                                className="font-mont font-medium text-[#334D57] text-sm"
                              >
                                Experience level
                              </label>
                              <div className="outline-none rounded-[4px] flex justify-between lg:w-[350px] bg-[#F9FAFB] border border-[#CCC] h-[38px] border-solid">
                                <p className="w-[144px] font-mont p-3 text-xs text-[#000709]">
                                  {experience}
                                </p>
                                <div className="flex ">
                                  <button
                                    disabled={count === 0 ? true : false}
                                    type="button"
                                    onClick={() => setCount(count - 1)}
                                    className=" w-[67px] border rounded-[4px] flex justify-center items-center border-r-0 border-y-0 border-[#CCC]"
                                  >
                                    <FaMinus className="font-medium text-[#00212D] text-base" />
                                  </button>
                                  <input
                                    name="level"
                                    disabled
                                    placeholder="0"
                                    type="number"
                                    value={count}
                                    className="w-[67px] text-[#00212D] text-lg font-semibold text-center border border-r-0 border-y-0 border-[#CCC]"
                                  />
                                  <button
                                    type="button"
                                    disabled={count === 10 ? true : false}
                                    onClick={() => setCount(count + 1)}
                                    className="w-[67px] border border-r-0 border-y-0 flex justify-center items-center border-[#CCC]"
                                  >
                                    <FaPlus className="font-medium text-[#00212D] text-base" />
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className='flex items-center gap-6'>
                            <div className="flex flex-col gap-[6px]">
                              <label
                                htmlFor="location"
                                className="font-mont font-medium text-[#000709] lg:text-[#334D57] text-sm"
                              >
                                Location
                              </label>
                              <div className="outline-none flex items-center gap-3 lg:w-[350px] rounded-[4px] bg-[#F9FAFB] border  border-[#CCC] p-3 h-[38px] border-solid ">
                                <SlLocationPin className="text-[#99A6AB] w-[16px] h-[16px]" />
                                <input
                                  name="country"
                                  placeholder="Type in a country"
                                  type="text"
                                  value={searchCountry}
                                  onChange={(e) => {
                                    const inputText = e.target.value;
                                    setSearchCountry(inputText);

                                    if (searchCountry) {
                                        setLocationClicked(false);
                                      }
                                  }}
                                  className="border-none text-xs bg-[#F9FAFB] w-full outline-none"
                                />
                              </div>
                              {allCountries.length > 0 ? <div
                                style={{ marginTop: "1%" }}
                                className={`${
                                  searchCountry === "" ||
                                  (searchCountry === ""
                                                ? "hidden"
                                                : locationClicked && searchCountry !== "")
                                    ? "hidden"
                                    : "w-[350px] p-2.5 h-[100px] bg-[#F9FAFB] overflow-y-scroll absolute p-2 top-[auto] translate-y-[64%] "
                                }`}
                              >
                                {allCountries?.map((location, index) => {
                                  return (
                                    <p
                                      key={index}
                                      onClick={() => {
                                        handleSelectCountry(location);
                                        setLocationClicked(true)
                                      }}
                                      className="cursor-pointer my-[14px] mx-[26px] "
                                    >
                                      {location}
                                    </p>
                                  );
                                })}
                              </div>: ''}
                              {errorCountry && (
                                <p style={{ color: "red", fontSize: "14px" }}>{errorCountry}</p>
                              )}
                            </div>

                            <div className='flex flex-col gap-2'>
                                <label htmlFor='salary' className='font-mont font-medium text-[#334D57] text-sm' >Salary Expectation <span className='hidden lg:inline-block '>(Monthly)</span></label>
                                <div className='flex items-center lg:w-[350px]  bg-[#F9FAFB]  px-1 bg-[#E3E7E8] h-[38px] border  border-[#E3E7E8] rounded  '>
                                  <select
                                    className='bg-transparent outline-none p-1 text-xs font-mont'
                                  >
                                    <option value="₦" defaultValue>₦</option>
                                    <option value="$" defaultValue>$</option>
                                  </select>
                                    <input
                                        name="salary"
                                        placeholder="Enter salary here"
                                        type="number" 
                                        value={values?.salary}
                                        onChange={handleChange}
                                        className="outline-none w-full  font-mont text-xs bg-transparent p-3  border-solid "
                                    /> 
                                </div>
                                {errors.salary && touched.salary ? (
                                <div className="text-RED-_100 text-xs">
                                    {errors.salary}
                                </div>
                                ) : null}
                            </div>
                          </div>
                         
                         <div className='flex flex-col gap-6'>
                            <p className='font-medium text-sm text-[#00141B]'>Additional Information</p>
                            <div className='flex flex-wrap lg:flex-nowrap items-center w-full gap-6'>
                              <div className='flex flex-col gap-2'>
                                <label htmlFor='gender' className='font-mont font-medium text-[#334D57] text-sm' >Gender</label>
                                <select className='bg-[#F9FAFB] w-full lg:w-[225px] border rounded border-[#C6C6C6] h-[38px] outline-none p-1 text-xs font-mont'>
                                    <option value="" defaultValue>Select</option>
                                    <option value="Male" >Male</option>
                                    <option value="Female" >Female</option>
                                    <option value="Prefer Not To Say" >Prefer Not To Say</option>
                                  </select>
                              </div>
                              <div className='flex flex-col gap-2'>
                                <label htmlFor='birthday' className='font-mont font-medium text-[#334D57] text-sm' >Birthday</label>
                                  <input
                                    name="birthday"
                                    placeholder="dd/mm/yyyy"
                                    type="date" 
                                    value={values?.birthday}
                                    onChange={handleChange}
                                    className="outline-none w-full lg:w-[225px] font-mont text-xs bg-[#F9FAFB] border rounded border-[#C6C6C6] p-3 h-[38px] border-solid "
                                  />
                              </div>
                              <div className='flex flex-col w-full gap-2'>
                                <label htmlFor='phone' className='font-mont font-medium text-[#334D57] text-sm' >Phone Number</label>
                                <div className='flex items-center w-full lg:w-[225px]  bg-[#F9FAFB]  px-1 bg-[#E3E7E8] h-[38px] border  border-[#E3E7E8] rounded  '>
                                  <select
                                    className='bg-transparent outline-none p-1 text-xs font-mont'
                                  >
                                    <option value="NG" defaultValue>NG</option>
                                    <option value="US" defaultValue>US</option>
                                    {/* <img src={Flag} alt='flag' className='w-[12px] h-[12px]' /> */}
                                    
                                  </select>
                                    <input
                                        name="phone"
                                        placeholder="000 0000 0000"
                                        type="number" 
                                        value={values?.phone}
                                        onChange={handleChange}
                                        className="outline-none w-full  font-mont text-xs bg-transparent p-3  border-solid "
                                    /> 
                                </div>
                                {errors.salary && touched.salary ? (
                                <div className="text-RED-_100 text-xs">
                                    {errors.salary}
                                </div>
                                ) : null}
                            </div>

                            </div>

                         </div>
                        
                      </div>

                  </Form>
              )}
          </Formik>
        </div>

      </div>

      <div className='w-full lg:w-[756px] lg:h-[654px] bg-[#fff] rounded p-4 gap-5'>
        <div className='flex flex-col gap-[4px]'>
          <p className='text-[#1B565B] font-semibold text-base lg:text-lg'>Skills</p>
          <p className='text-[#334D57] text-xs lg:w-[700px] lg:text-[15px] font-mont'>Showcase your strengths! Let us know about your technical and soft skills that make you stand out.</p>
        </div>

        <div className='border border-[#E3E7E8] rounded-lg mt-[19px] lg:w-[725px] py-[14px] px-[12px]'>
          <Formik
            initialValues={{
              skills: "",
              level: ""
            }}
                // validationSchema={formValidationSchema}
                onSubmit={(values, action) => {
                console.log(values, "market")
              
                submitSkills(values, action);
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
                        <div className='w-full flex items-center justify-between'> 
                          <p className='font-mont text-sm lg:text-lg font-medium text-[#00141B]'>Technical Skills</p>
                          {!!!showSkillsInput ? null : 
                            <button className='w-[28px] h-[28px] cursor-pointer bg-[#CCD3D566] p-[7px]' onClick={() => setShowSkillsInput(false)}>
                              <FaPlus className="w-[13px] h-[13px] text-[#000709]" />
                            </button>
                          } 
                        </div>
                        {
                          !!!showSkillsInput ?
                            <div className='flex flex-col mt-[19px]'>
                              <div className='flex lg:items-center flex-col lg:flex-row gap-[4.8px]'>
                                <div className='flex flex-col gap-1'>
                                  <input
                                    name="skills"
                                    placeholder="Search or type in a skill"
                                    type="text" 
                                    value={values?.skills}
                                    onChange={handleChange} 
                                    className="outline-none w-full lg:w-[309px] text-[#667A81] font-mont text-xs bg-[#F9FAFB] border rounded border-[#C6C6C6] p-3 h-[40px] border-solid "
                                  />
                                </div>
                                <div className='flex flex-col gap-1'>
                                  <select
                                      className='outline-none w-full lg:w-[309px] text-[#667A81] font-mont text-xs bg-[#F9FAFB] border rounded border-[#C6C6C6] p-3 h-[40px] border-solid'
                                      onChange={handleChange}
                                      value={values?.level}
                                      name='level'
                                    >
                                      <option value="" defaultValue>Select skill level</option>
                                      <option value="Beginner">Beginner</option>
                                      <option value="Intermediate">Intermediate</option>
                                      <option value="Expert">Expert</option>
                                  </select>
                                </div>

                                <button
                                  className={`${isValid ? "bg-[#BABABA]" : "bg-[#000]" } w-full lg:w-[81px] font-mont flex items-center rounded-[6px] justify-center  h-[40px] text-center`}
                                  type="submit"
                                  disabled={!isValid}
                                >
                                  <p className='text-[#fff] text-xs'>Add Skills</p>
                                </button>
                              </div>
                              <div className='flex flex-col mt-[28px] gap-[18px]'>
                                <p className='font-medium text-[13px] text-[#334D57] font-mont'>Popular Skills </p>
                                <div className='flex flex-wrap items-center gap-[7.68px]'>
                                  <div onClick={() => setFieldValue("skills", "Prototyping")} className='border w-[120px] cursor-pointer items-center gap-1 p-2 flex justify-center rounded-[76px]'>
                                    <p className='text-[11px] lg:text-sm text-[#000]'>Prototyping</p>
                                    <FaPlus className="w-[8px] h-[8px] text-[#000000]" />
                                  </div>
                                  <div onClick={() => setFieldValue("skills", "Flutter")} className='border w-[83px] cursor-pointer items-center gap-1 p-2 flex justify-center rounded-[76px]'>
                                    <p className='text-[11px] lg:text-sm text-[#000]'>Flutter</p>
                                    <FaPlus className="w-[8px] h-[8px] text-[#000000]" />
                                  </div>
                                  <div onClick={() => setFieldValue("skills", "Figma")} className='border w-[81px] cursor-pointer items-center gap-1 p-2 flex justify-center rounded-[76px]'>
                                    <p className='text-[11px] lg:text-sm text-[#000]'>Figma</p>
                                    <FaPlus className="w-[8px] h-[8px] text-[#000000]" />
                                  </div>
                                  <div onClick={() => setFieldValue("skills", "Autocad")} className='border w-[95px] cursor-pointer items-center gap-1 p-2 flex justify-center rounded-[76px]'>
                                    <p className='text-[11px] lg:text-sm text-[#000]'>Autocad</p>
                                    <FaPlus className="w-[8px] h-[8px] text-[#000000]" />
                                  </div>
                                  <div onClick={() => setFieldValue("skills", "Adobe xd")} className='border w-[103px] cursor-pointer items-center gap-1 p-2 flex justify-center rounded-[76px]'>
                                    <p className='text-[11px] lg:text-sm text-[#000]'>Adobe xd</p>
                                    <FaPlus className="w-[8px] h-[8px] text-[#000000]" />
                                  </div>
                                </div>
                              </div>
                            </div>
                            :
                            <div className='grid grid-cols-2 lg:grid-cols-4 gap-2 mt-[19px] items-center'>
                              {
                                retrievedTechnicalSkills.map((skills, index) => (
                                  <div key={index} className='w-[141px] gap-2 h-[36px] flex items-center rounded-[9px] border p-2 border-[#29CFD6]'>
                                      <img 
                                        src={skills?.level === "Expert" ? Expert : skills?.level === "Intermediate" ? Intermediate : Beginner}
                                        alt='level' 
                                        className='w-[16px] h-[16px]'
                                      />
                                      <p>{skills?.name} </p>

                                  </div>
                                ))
                              }

                            </div>
                        }
                        
                      </div>

                  </Form>
              )}
          </Formik>

        </div>

        <div className='border border-[#E3E7E8] rounded-lg mt-[19px] lg:w-[725px] py-[14px] px-[12px]'>
          <Formik
            initialValues={{
              skills: "",
              level: ""
            }}
                // validationSchema={formValidationSchema}
                onSubmit={(values, action) => {
                console.log(values, "market")
              
                submitSoftSkills(values, action);
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
                        <div className='w-full flex items-center justify-between'> 
                          <p className='font-mont text-sm lg:text-lg font-medium text-[#00141B]'>Soft Skills</p>
                          {!!!showSoftSkillsInput ? null : 
                            <button className='w-[28px] h-[28px] cursor-pointer bg-[#CCD3D566] p-[7px]' onClick={() => setShowSoftSkillsInput(false)}>
                              <FaPlus className="w-[13px] h-[13px] text-[#000709]" />
                            </button>
                          } 
                        </div>
                        {
                          !!!showSoftSkillsInput ?
                            <div className='flex flex-col mt-[19px]'>
                              <div className='flex flex-col lg:flex-row lg:items-center gap-[4.8px]'>
                                <div className='flex flex-col gap-1'>
                                  <input
                                    name="skills"
                                    placeholder="Search or type in a skill"
                                    type="text" 
                                    value={values?.skills}
                                    onChange={handleChange} 
                                    className="outline-none w-full lg:w-[309px] text-[#667A81] font-mont text-xs bg-[#F9FAFB] border rounded border-[#C6C6C6] p-3 h-[40px] border-solid "
                                  />
                                </div>
                                <div className='flex flex-col gap-1'>
                                  <select
                                      className='outline-none w-full lg:w-[309px] text-[#667A81] font-mont text-xs bg-[#F9FAFB] border rounded border-[#C6C6C6] p-3 h-[40px] border-solid'
                                      onChange={handleChange}
                                      value={values?.level}
                                      name='level'
                                    >
                                      <option value="" defaultValue>Select skill level</option>
                                      <option value="Beginner">Beginner</option>
                                      <option value="Intermediate">Intermediate</option>
                                      <option value="Expert">Expert</option>
                                  </select>
                                </div>

                                <button
                                  className={`${isValid ? "bg-[#BABABA]" : "bg-[#000]" } w-full lg:w-[81px] font-mont flex items-center rounded-[6px] justify-center  h-[40px] text-center`}
                                  type="submit"
                                  disabled={!isValid}
                                >
                                  <p className='text-[#fff] text-xs'>Add Skill</p>
                                </button>
                              </div>
                              <div className='flex flex-col mt-[28px] gap-[18px]'>
                                <p className='font-medium text-[13px] text-[#334D57] font-mont'>Popular Skills </p>
                                <div className='flex flex-wrap items-center gap-[14px]'>
                                  <div onClick={() => setFieldValue("skills", "Collaboration")} className='border w-[131px] cursor-pointer items-center gap-1 p-2 flex justify-center rounded-[76px]'>
                                    <p className='text-[11px] lg:text-sm text-[#000]'>Collaboration</p>
                                    <FaPlus className="w-[8px] h-[8px] text-[#000000]" />
                                  </div>
                                  <div onClick={() => setFieldValue("skills", "Networking")} className='border w-[120px] cursor-pointer items-center gap-1 p-2 flex justify-center rounded-[76px]'>
                                    <p className='text-[11px] lg:text-sm text-[#000]'>Networking</p>
                                    <FaPlus className="w-[8px] h-[8px] text-[#000000]" />
                                  </div>
                                  <div onClick={() => setFieldValue("skills", "Active Listening")} className='border w-[145px] cursor-pointer items-center gap-1 p-2 flex justify-center rounded-[76px]'>
                                    <p className='text-[11px] lg:text-sm text-[#000]'>Active Listening</p>
                                    <FaPlus className="w-[8px] h-[8px] text-[#000000]" />
                                  </div>
                                  <div onClick={() => setFieldValue("skills", "Stress management")} className='border w-[181px] cursor-pointer items-center gap-1 p-2 flex justify-center rounded-[76px]'>
                                    <p className='text-[11px] lg:text-sm text-[#000]'>Stress management</p>
                                    <FaPlus className="w-[8px] h-[8px] text-[#000000]" />
                                  </div>
                                  <div onClick={() => setFieldValue("skills", "Adaptability")} className='border w-[122px] cursor-pointer items-center gap-1 p-2 flex justify-center rounded-[76px]'>
                                    <p className='text-[11px] lg:text-smtext-[#000]'>Adaptability</p>
                                    <FaPlus className="w-[8px] h-[8px] text-[#000000]" />
                                  </div>
                                </div>
                              </div>
                            </div>
                            :
                            <div className='grid grid-cols-4 gap-2 mt-[19px] items-center'>
                              {
                                retrievedSoftSkills.map((skills, index) => (
                                  <div key={index} className='  h-[36px] flex items-center justify-between rounded-[9px] border p-2 border-[#29CFD6]'>
                                    <div className='flex items-center gap-2  '>
                                      <img 
                                        src={skills?.skillsLevel === "Expert" ? Expert : skills?.skillsLevel === "Intermediate" ? Intermediate : Beginner}
                                        alt='level' 
                                        className='w-[16px] h-[16px]'
                                      />
                                      <p className='font-mont text-[#000709] text-[13px] fontmedium'>{skills?.skillsName} </p>
                                    </div>
                                    <p className='w-[8px] h-[8px] text-[#667A81] flex items-center cursor-pointer' onClick={() => localStorage.removeItem("softSkills"[index])}>x</p>
                                  </div>
                                ))
                              }

                            </div>
                        }
                        
                      </div>

                  </Form>
              )}
          </Formik>

        </div>
      </div>

      <div className='lg:w-[756px] lg:h-[596px] bg-[#fff] rounded p-4 gap-5 '>
      <div className='flex flex-col gap-[4px]'>
          <p className='text-[#1B565B] font-semibold text-sm lg:text-lg'>Work Preferences</p>
          <p className='text-[#334D57] lg:w-[700px] text-xs lg:text-[15px] font-mont'>
            What are you looking for in a job? Share your desired job roles, 
            industry preferences, and work schedule to help us match you with the right opportunities.
          </p>
        </div>
        <div className='border border-[#E3E7E8] rounded-lg mt-[19px] flex flex-col gap-[40px] lg:w-[725px] py-[14px] px-[12px]'>

          <div className='flex flex-col gap-5'>
            <p className='text-[#334D57] font-mont text-[13px]' >What kind of employment are you looking for?</p>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
              <div className='flex items-center w-[200px] gap-[6px]'>
                <input type='checkbox'  name='fullTime' className='border border-[#42B8BD] rounded-xs'/>
                <p className='text-[13px] text-[#334D57] font-medium font-mont'>Full-time</p> 
              </div>
              <div className='flex items-center w-[200px] gap-[6px]'>
                <input type='checkbox'  name='partTime' className='border border-[#42B8BD] rounded-xs'/>
                <p className='text-[13px] text-[#334D57] font-medium font-mont'>Part-time</p> 
              </div>
              <div className='flex items-center w-[200px] gap-[6px]'>
                <input type='checkbox'  name='contract' className='border border-[#42B8BD] rounded-xs'/>
                <p className='text-[13px] text-[#334D57] font-medium font-mont'>Contract</p> 
              </div>
              <div className='flex items-center w-[200px] gap-[6px]'>
                <input type='checkbox'  name='temporary' className='border border-[#42B8BD] rounded-xs'/>
                <p className='text-[13px] text-[#334D57] font-medium font-mont'>Temporary</p> 
              </div>
              <div className='flex items-center w-[200px] gap-[6px]'>
                <input type='checkbox'  name='internship' className='border border-[#42B8BD] rounded-xs'/>
                <p className='text-[13px] text-[#334D57] font-medium font-mont'>Internship</p> 
              </div>
            </div>
          </div>

          <div className='flex flex-col gap-5'>
            <p className='text-[#334D57] font-mont text-[13px]' >What kind of work style would you prefer?</p>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
              <div className='flex items-center w-[200px] gap-[6px]'>
                <input type='checkbox'  name='onSite' className='border border-[#42B8BD] rounded-xs'/>
                <p className='text-[13px] text-[#334D57] font-medium font-mont'>On-site</p> 
              </div>
              <div className='flex items-center w-[200px] gap-[6px]'>
                <input type='checkbox'  name='remote' className='border border-[#42B8BD] rounded-xs'/>
                <p className='text-[13px] text-[#334D57] font-medium font-mont'>Remote</p> 
              </div>
              <div className='flex items-center w-[200px] gap-[6px]'>
                <input type='checkbox'  name='flexible' className='border border-[#42B8BD] rounded-xs'/>
                <p className='text-[13px] text-[#334D57] font-medium font-mont'>Flexible hours</p> 
              </div>
              <div className='flex items-center lg:w-[332px] gap-[6px]'>
                <input type='checkbox'  name='hybrid' className='border border-[#42B8BD] rounded-xs'/>
                <p className='text-[13px] text-[#334D57] font-medium font-mont'>Hybrid (combination of on-site and remote)</p> 
              </div>
            </div>
          </div>

          <div className='flex flex-col gap-5'>
            <p className='text-[#334D57] font-mont text-[13px]' >What is your job search status?</p>
            <div className='flex flex-col gap-4'>
              <div className='flex items-center w-full gap-[6px]'>
                <input type='radio'  name='status' />
                <p className='text-[13px] text-[#334D57] font-medium font-mont'>Actively looking for opportunities</p> 
              </div>
              <div className='flex items-center w-full gap-[6px]'>
                <input type='radio'  name='status'/>
                <p className='text-[13px] text-[#334D57] font-medium font-mont'>Open to new opportunities but not actively searching</p> 
              </div>
              <div className='flex items-center w-full gap-[6px]'>
                <input type='radio'  name='status'/>
                <p className='text-[13px] text-[#334D57] font-medium font-mont'>Currently employed but open to considering new roles</p> 
              </div>
              <div className='flex items-center w-full gap-[6px]'>
                <input type='radio'  name='status'/>
                <p className='text-[13px] text-[#334D57] font-medium font-mont'>Exploring options for future opportunities</p> 
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className='flex justify-end mb-10'>
        <button className='w-[201px] h-[52px] rounded-[4px] bg-[#00141B] flex justify-center items-center'>
          <p className='text-[#fff] text-base font-mont font-semibold'>Save and continue</p>
        </button>
      </div>

    </div>
  )
}

export default YourProfile

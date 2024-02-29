import React, { useState, useEffect } from 'react'
import { Formik, Form} from "formik"
import { FaPlus, FaMinus } from "react-icons/fa6";
import { SlLocationPin } from "react-icons/sl";
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from "yup";
import { toast } from 'react-toastify';

import ImagePlaceholder from "../../../../assets/img/imagePlaceholder.png"
import Flag from "../../../../assets/img/nigeria.png"
import Plus from "../../../../assets/img/plus.png"


import { allLocation } from '../../../../helpers/countries';

import { getProfile } from '../../../../features/profile/getProfileSlice';
import { updateProfile } from '../../../../features/profile/updateProfileSlice';
import { updateJobProfile } from '../../../../features/profile/updateJobProfileSlice';
import { CgSpinner } from 'react-icons/cg';

const YourProfile = ({ setActive }) => {
  const [profile, setProfile] = useState(null)
  const [file, setFile] = useState()
  const [text, setText] = useState('');
  const [count, setCount] = useState(0);
  const [experience, setExperience] = useState("");
  const [allCountries, setAllCountries] = useState([]);
  const [searchCountry, setSearchCountry] = useState("");
  const [locationClicked, setLocationClicked] = useState(false);
  const [errorCountry, setErrorCountry] = useState(false);

  const dispatch = useDispatch()

  const handleFileChange = async (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile)
    const imageUrl = URL.createObjectURL(selectedFile);
    setProfile(imageUrl);
  }

  const handleSelectCountry = (location) => {
    setSearchCountry(location);
    setLocationClicked(false)
  };

  function searchCountries(searchTerm) {
    const lowerCaseSearchTerm = searchTerm?.toLowerCase();

    const matchingCountries = allLocation?.filter((country) =>
      country?.toLowerCase()?.includes(lowerCaseSearchTerm)
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

  //For Profile
  const profileData = useSelector(state => state.fetchProfileData)
  const userData = profileData?.data?.data
  const updateProfileData = useSelector(state => state.updateProfileData)
  const updateProfileDataLoading = updateProfileData?.loading

  console.log(userData, "Jasper")

  useEffect(() => {
    dispatch(getProfile())
  }, [updateProfileDataLoading])

  const submitUpdateProfileForm = (values, action) => {
    const data = {
      country: searchCountry,
      gender: values?.gender,
      dob: values?.birthday,
      phone: values?.phone,
      bio: text,
      profile_photo: file
    };

    let formData = new FormData();
    formData.append("title", values?.jobTitle)
    formData.append("experience", count)
    formData.append("salary_range", values?.salary)

    if (values?.jobTitle || count || values?.salary) {
        dispatch(updateJobProfile(formData))
    }


    dispatch(updateProfile(data))
    .then((res) => {
      console.log(res, "AY")
      if(res?.meta?.requestStatus === "fulfilled") {
          setActive(2)
      }
    })
    // 
    action.resetForm()

  }

  

  return (
    <div className="flex flex-col gap-4 mt-4">
      <div className='w-full lg:w-[756px] bg-[#fff] rounded p-4 gap-5'>
        <div className='flex flex-col gap-[4px]'>
          <p className='text-[#1B565B] font-semibold text-sm'>Profile Information</p>
          <p className='text-[#334D57] text-xs font-mont'>Add information about yourself to make it easier for companies to know you</p>
        </div>
        <div className='mt-5 relative mb-14'>
          <Formik
            initialValues={{
              bio: "",
              salary: "",
              gender: "",
              birthday: "",
              phone: "",
              jobTitle: "",
              firstName: "",
              middleName: "",
              lastName: ""
            }}
                // validationSchema={formValidationSchema}
                onSubmit={(values, action) => {
                // window.scrollTo(0, 0);
                console.log(values, "market")
                submitUpdateProfileForm(values, action);
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
                      <div className="w-full flex flex-col gap-[32px]">
                        <div className='flex items-center gap-4'>
                          <div className='w-[84px] flex relative  rounded-full  border border-[#024355]'>
                            <label htmlFor="fileInput" className='cursor-pointer flex'>
                                <img 
                                  src={profile ? profile : userData?.profile_photo === null ? ImagePlaceholder : userData?.profile_photo} 
                                  alt='imagePlacehoder' 
                                  className='w-full rounded-full'
                                />
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
                            <div className='w-[144px] cursor-pointer h-[28px] bg-[#FBA599] flex items-center justify-center rounded-sm'>
                            <label htmlFor="fileInput" className='cursor-pointer flex text-xs font-semibold text-[#00141B]'>
                                Add Profile Image
                                <input
                                    type="file"
                                    accept="image/*"
                                    id="fileInput"
                                    style={{ display: 'none' }}
                                    onChange={handleFileChange}
                                />
                            </label>
                            </div>
                          </div> 
                        </div>
                        
                        <div className='w-full flex gap-[22px]'>

                          <div className='w-full flex flex-col gap-[6px]'>
                            <label htmlFor='First Name' className='font-mont font-medium text-[#334D57] text-sm'>First Name *</label>
                            <input
                                name="firstName"
                                placeholder=""  //{`${ || "Enter First Name"}`}
                                type="text" 
                                value={values?.firstName || userData?.first_name}
                                onChange={handleChange}
                                className="outline-none w-full lg:w-[214px] font-mont font-medium text-xs bg-[#F9FAFB] border rounded border-[#C6C6C6] p-3 h-[38px] border-solid "
                            />
                            {errors.firstName && touched.firstName ? (
                            <div className="text-RED-_100 text-xs">
                                {errors.firstName}
                            </div>
                            ) : null}
                          </div>
                          <div className='w-full flex flex-col gap-[6px]'>
                            <label htmlFor='Middle Name' className='font-mont font-medium text-[#334D57] text-sm'>Middle Name *</label>
                            <input
                                name="middleName"
                                placeholder=""  //{`${ || "Enter First Name"}`}
                                type="text" 
                                value={values?.middleName || userData?.middle_name}
                                onChange={handleChange}
                                className="outline-none w-full lg:w-[214px] font-mont font-medium text-xs bg-[#F9FAFB] border rounded border-[#C6C6C6] p-3 h-[38px] border-solid "
                            />
                            {errors.middleName && touched.middleName ? (
                            <div className="text-RED-_100 text-xs">
                                {errors.middleName}
                            </div>
                            ) : null}
                          </div>

                          <div className='w-full flex flex-col gap-[6px]'>
                            <label htmlFor='Last Name' className='font-mont font-medium text-[#334D57] text-sm'>Last Name *</label>
                            <input
                                name="lastName"
                                placeholder=""  //{`${ || "Enter First Name"}`}
                                type="text" 
                                value={values?.lastName || userData?.last_name}
                                onChange={handleChange}
                                className="outline-none w-full lg:w-[214px] font-mont font-medium text-xs bg-[#F9FAFB] border rounded border-[#C6C6C6] p-3 h-[38px] border-solid "
                            />
                            {errors.lastName && touched.lastName ? (
                            <div className="text-RED-_100 text-xs">
                                {errors.lastName}
                            </div>
                            ) : null}
                          </div>

                        </div>

                        <div className='w-full flex flex-col gap-2'>
                          <textarea
                              name="bio"
                              placeholder={userData?.bio === null ? "Add a bio so people can learn more about you" : userData?.bio}
                              disabled={text > 126 ? true : false }
                              type="text" 
                              rows="5"
                              value={text}
                              onChange={(e) => {
                                  const words =  setText(e.target.value);
                                  setFieldValue("bio", words)
                                  }
                              }
                              className="outline-none w-full  text-[#99A6AB] font-mont font-medium text-xs lg:w-[724px] bg-[#F5F5F5]  p-3  rounded "
                          ></textarea>
                          <div className='flex justify-end text-sm text-[#99A6AB]'>{`${countWords()}/125 words`}</div> 
                            {errors.bio && touched.bio ? (
                            <div className="text-RED-_100 text-xs">
                                {errors.bio}
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
                                  placeholder={userData?.country === null ? "Type in a country" : userData?.country}
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
                                    <option value="$">$</option>
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
                              <div className='flex lg:w-[350px] flex-col gap-2'>
                                <label htmlFor='gender' className='font-mont font-medium text-[#334D57] text-sm' >Gender</label>
                                <select name='gender' value={values?.gender} onChange={handleChange} className='bg-[#F9FAFB] w-full lg:w-[350px] border rounded border-[#C6C6C6] h-[38px] outline-none p-1 text-xs font-mont'>
                                    <option value="" defaultValue>{userData?.gender === null ? "Select" : userData?.gender}</option>
                                    <option value="Male" >Male</option>
                                    <option value="Female"  >Female</option>
                                    <option value="Prefer Not To Say" >Prefer Not To Say</option>
                                  </select>
                              </div>
                              <div className='flex flex-col lg:w-[350px] gap-2'>
                                <label htmlFor='birthday' className='font-mont font-medium text-[#334D57] text-sm' >Birthday</label>
                                  <input
                                    name="birthday"
                                    placeholder={userData?.dob === null ? "dd/mm/yyyy" : userData?.bio}
                                    type="date" 
                                    value={values?.birthday}
                                    onChange={handleChange}
                                    className="outline-none w-full lg:w-[350px] font-mont text-xs bg-[#F9FAFB] border rounded border-[#C6C6C6] p-3 h-[38px] border-solid "
                                  />
                              </div>

                              {/* <div className='flex flex-col w-full gap-2'>
                                <label htmlFor='phone' className='font-mont font-medium text-[#334D57] text-sm' >Phone Number</label>
                                <div className='flex items-center w-full lg:w-[225px]  bg-[#F9FAFB]  px-1 bg-[#E3E7E8] h-[38px] border  border-[#E3E7E8] rounded  '>
                                  <select
                                    className='bg-transparent outline-none p-1 text-xs font-mont'
                                  >
                                    <option value="NG" defaultValue>NG</option>
                                    <option value="US">US</option>
                                    {/* <img src={Flag} alt='flag' className='w-[12px] h-[12px]' /> 
                                    
                                  </select>
                                    <input
                                        name="phone"
                                        placeholder={userData?.phone === null ? "000 0000 0000" : userData?.phone}
                                        type="number" 
                                        value={values?.phone}
                                        onChange={handleChange}
                                        className="outline-none w-full  font-mont text-xs bg-transparent p-3  border-solid "
                                    /> 
                                </div>
                                {errors.phone && touched.phone ? (
                                <div className="text-RED-_100 text-xs">
                                    {errors.phone}
                                </div>
                                ) : null}
                              </div> */}

                            </div>

                         </div>

                         <div className='flex justify-end fixed right-[26%] top-[90%]'>
                            <button className='w-[251px] h-[52px] rounded-[4px] border border-[#000709] bg-[#BABABA] flex justify-center items-center' type='submit'>
                            <p className='text-[#00141B] text-base font-mont font-semibold'>{updateProfileDataLoading ? <CgSpinner className=" animate-spin text-lg " /> : 'Save & Continue'}</p>
                            </button>
                          </div>
                        
                      </div>

                  </Form>
              )}
          </Formik>
        </div>

      </div>

    </div>
  )
}

export default YourProfile

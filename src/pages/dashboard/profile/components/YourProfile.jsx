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
import { Skeleton } from '@mui/material';

const YourProfile = ({ setActive }) => {
  const [profile, setProfile] = useState(null)
  const [file, setFile] = useState()
  const [text, setText] = useState('');
  const [count, setCount] = useState(0);
  const [experience, setExperience] = useState("");
  const [allCountries, setAllCountries] = useState([]);
  const [searchCountry, setSearchCountry] = useState("");
  const [locationClicked, setLocationClicked] = useState(false);
  const [errorCountry, setErrorCountry] = useState("");

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

  const formValidationSchema = Yup.object().shape({
      bio: Yup.string().required(),
      experience: Yup.number().required(),
      jobTitle: Yup.string().required(),
      salary: Yup.number().required(),
      country: Yup.string().required()
  })

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
          localStorage.setItem("basicUnlocked", true)
          localStorage.setItem("skillsUnlocked", true)
          setActive(2)
      }
    })
    // 
    action.resetForm()

  }

  

  return (
    <div className="flex flex-col gap-4  mt-4">
      <div className='w-full lg:w-[756px] bg-[#fff] rounded lg:p-4 gap-5'>
        <div className='flex w-full flex-col gap-[4px]'>
          <p className='text-[#1B565B] font-semibold text-sm'>Basic Information</p>
          {/* <p className='text-[#334D57] text-xs font-mont'>Add information about yourself to make it easier for companies to know you</p> */}
        </div>
        <div className='mt-5 relative mb-14'>
          <Formik
            initialValues={{
              bio: "",
              salary: "",
              gender: "",
              birthday: "",
              jobTitle: "",
              firstName: "",
              middleName: "",
              lastName: "",
              country: "",
              experience: ""
            }}
                validationSchema={formValidationSchema}
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
                          {
                            profileData?.loading ?
                            <Skeleton variant='circular' width={74} height={74} style={{ backgroundColor: 'rgba(0,0,0, 0.06)' }} />
                            :
                            <div className='w-[74px] h-[74px] flex relative  rounded-full  border border-[#024355]'>
                              <label htmlFor="fileInput" className='cursor-pointer flex'>
                                {
                                  userData?.profile_photo === null && !!!profile ?
                                  <div className='flex items-center justify-center mx-[20px]'>
                                    <p className='font-mont text-[#667A81] text-[24px] font-semibold '>
                                      {`${userData?.first_name?.substring(0, 1)}${userData?.last_name?.substring(0, 1)}`}
                                    </p>
                                  </div>
                                  :
                                  <img 
                                    src={profile ? profile : userData?.profile_photo} 
                                    alt='imagePlacehoder' 
                                    className='w-full rounded-full'
                                  />
                                }
                                  <input
                                      type="file"
                                      accept="image/*"
                                      id="fileInput"
                                      style={{ display: 'none' }}
                                      onChange={handleFileChange}
                                  />
                              </label>
                              <img src={Plus} alt='plus' className='absolute flex top-14 left-14 w-[14px] h-[14px]' />
                            </div>
                          }
                          {
                            profileData?.loading ?
                            <div className='flex flex-col gap-[4px]'>
                              <Skeleton variant='rectangular' width={144} height={28} style={{ backgroundColor: 'rgba(0,0,0, 0.06)' }} />
                              <Skeleton variant='rectangular' width={144} height={28} style={{ backgroundColor: 'rgba(0,0,0, 0.06)' }} />
                            </div>
                            :
                            <div className='flex flex-col gap-[4px]'>
                              <p className='text-[#00141B] text-base font-semibold font-mont'>{`${userData?.first_name} ${userData?.last_name}`}</p>
                              <div className={` bg-[#FFEFE6] w-[144px] cursor-pointer h-[28px] flex items-center justify-center rounded-sm`}> {/* ${profile ? "bg-[#FBA599]" : "bg-[#FFEFE6]"} */}
                              <label htmlFor="fileInput" className='cursor-pointer flex text-xs font-semibold text-[#FDB181]'>
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
                          }
                        </div>
                        
                        <div className='w-full flex flex-col lg:flex-row gap-[22px]'>

                          <div className='w-full flex flex-col gap-[6px]'>
                            <label htmlFor='First Name' className='font-mont font-medium text-[#043246] text-sm'>First Name</label>
                            <input
                                name="firstName"
                                placeholder=""  //{`${ || "Enter First Name"}`}
                                type="text" 
                                value={userData?.first_name}
                                onChange={handleChange}
                                readOnly
                                contentEditable={false}
                                className="outline-none w-full cursor-pointer  lg:w-[214px] font-mont font-medium text-xs bg-[#F4F4F4]  rounded  p-3 h-[38px] "
                            />
                            {errors.firstName && touched.firstName ? (
                            <div className="text-RED-_100 text-xs">
                                {errors.firstName}
                            </div>
                            ) : null}
                          </div>
                          <div className='w-full flex flex-col gap-[6px]'>
                            <label htmlFor='Middle Name' className='font-mont font-medium text-[#043246] text-sm'>Middle Name</label>
                            <input
                                name="middleName"
                                placeholder=""  //{`${ || "Enter First Name"}`}
                                type="text" 
                                value={values?.middleName || userData?.middle_name}
                                onChange={handleChange}
                                className="hover:border-[#E0571233] outline-[#E0571233] w-full lg:w-[214px] font-mont font-medium text-xs bg-[#FFF] border rounded border-[#C6C6C6] p-3 h-[38px] border-solid "
                            />
                            {errors.middleName && touched.middleName ? (
                            <div className="text-RED-_100 text-xs">
                                {errors.middleName}
                            </div>
                            ) : null}
                          </div>

                          <div className='w-full flex flex-col gap-[6px]'>
                            <label htmlFor='Last Name' className='font-mont font-medium text-[#043246] text-sm'>Last Name</label>
                            <input
                                name="lastName"
                                placeholder=""  //{`${ || "Enter First Name"}`}
                                type="text" 
                                readOnly
                                value={values?.lastName || userData?.last_name}
                                onChange={handleChange}
                                className="outline-none w-full lg:w-[214px] font-mont font-medium text-xs bg-[#F4F4F4] rounded p-3 h-[38px] "
                            />
                            {errors.lastName && touched.lastName ? (
                            <div className="text-RED-_100 text-xs">
                                {errors.lastName}
                            </div>
                            ) : null}
                          </div>

                        </div>

                        <div className='w-full flex flex-col gap-2'>
                          <div className='flex justify-between'>
                            <label htmlFor='Career intro/bio' className='font-mont font-medium text-[#043246] text-sm'>Career intro/bio*</label>
                            <div className='flex justify-end text-sm text-[#99A6AB]'>{`${countWords()}/125 words`}</div> 
                          </div>
                          <textarea
                              name="bio"
                              placeholder= "Add a career intro so employers can learn more about you"    //{userData?.bio === null ? "Add a career intro so employers can learn more about you" : userData?.bio}
                              disabled={text > 126 ? true : false }
                              type="text" 
                              rows="5"
                              value={userData?.bio || text}
                              onChange={(e) => {
                                  const words =  setText(e.target.value);
                                  setFieldValue("bio", text)
                                  }
                              }
                              className="hover:border-[#E0571233] outline-[#E0571233] w-full  text-[#99A6AB] font-mont font-medium text-xs lg:w-[724px] bg-[#FFF] border border-[#C6C6C6] p-3  rounded "
                          ></textarea>
                            {errors.bio && touched.bio ? (
                            <div className="text-RED-_100 text-xs">
                                {errors.bio}
                            </div>
                            ) : null}
                          </div>
                            
                          <div className='flex flex-col lg:flex-row  gap-6'>
                            <div className='w-full flex flex-col gap-[6px]'>
                              <label htmlFor='jobTitle' className='font-mont font-medium text-[#043246] text-sm'>Job Title*</label>
                              <input
                                  name="jobTitle"
                                  placeholder="Enter Job Title"
                                  type="text" 
                                  value={values?.jobTitle}
                                  onChange={handleChange} //w-[519px]
                                  className="hover:border-[#E0571233] outline-[#E0571233] w-full lg:w-[350px] font-mont text-xs bg-[#FFF] border rounded border-[#C6C6C6] p-3 h-[38px] border-solid "
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
                                className="font-mont font-medium text-[#043246] text-sm"
                              >
                                Years of experience*
                              </label>
                              <div className="hover:border-[#E0571233] rounded-[4px] gap-28 flex justify-between lg:w-[350px] bg-[#FFF] border border-[#CCC] h-[38px] border-solid">
                                <div className="flex mx-2 items-center">
                                  <button
                                    disabled={count === 0 ? true : false}
                                    type="button"
                                    onClick={() => {setCount(count - 1); setFieldValue("experience", count)}}
                                    className=" w-[32px] h-[32px] border rounded-[6px] flex justify-center items-center  border-[#E5E5E5]"
                                  >
                                    <FaMinus className="font-medium text-[#043246] text-sm" />
                                  </button>
                                  <input
                                    name="level"
                                    disabled
                                    placeholder="0"
                                    type="number"
                                    value={count}
                                    className="w-[45px] text-[#00212D] flex justify-center items-center px-2 text-lg font-semibold text-center "
                                  />
                                  <button
                                    type="button"
                                    disabled={count === 10 ? true : false}
                                    onClick={() => {setCount(count + 1); setFieldValue("experience", count)}}
                                    className="w-[32px] h-[32px] border flex rounded-[6px] justify-center items-center border-[#CCC]"
                                  >
                                    <FaPlus className="font-medium text-[#043246] text-sm" />
                                  </button>
                                </div>
                                <p className="w-[144px] font-mont p-2 font-medium text-sm text-[#334D57]">
                                  {experience}
                                </p>
                              </div>
                              {errors.experience && touched.experience ? (
                                <div className="text-RED-_100 text-xs">
                                    {errors.experience}
                                </div>
                                ) : null}
                            </div>
                          </div>

                          <div className='flex flex-col lg:flex-row gap-6'>
                            <div className="flex flex-col gap-[6px]">
                              <label
                                htmlFor="location"
                                className="font-mont font-medium text-[#000709] lg:text-[#043246] text-sm"
                              >
                                Location*
                              </label>
                              <div className="hover:border-[#E0571233] flex items-center gap-3 lg:w-[350px] rounded-[4px] bg-[#FFF] border  border-[#CCC] p-3 h-[38px] border-solid ">
                                <SlLocationPin className="text-[#99A6AB] w-[16px] h-[16px]" />
                                <input
                                  name="country"
                                  placeholder= "Type in a country" //{userData?.country === null ? "Type in a country" : userData?.country}
                                  type="text"
                                  value={userData?.country || searchCountry}
                                  onChange={(e) => {
                                    const inputText = e.target.value;
                                    setSearchCountry(inputText);

                                    if (searchCountry) {
                                        setLocationClicked(false);
                                      }
                                  }}
                                  className="border-none text-xs bg-[#FFF] w-full outline-none"
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
                                        setFieldValue("country", location)
                                      }}
                                      className="cursor-pointer my-[14px] mx-[26px] "
                                    >
                                      {location}
                                    </p>
                                  );
                                })}
                              </div>: ''}
                              {errors.country && touched.country ? (
                              <div className="text-RED-_100 text-xs">
                                  {errors.country}
                              </div>
                              ) : null}
                              {/* {errorCountry && (
                                <p style={{ color: "red", fontSize: "14px" }}>{errorCountry}</p>
                              )} */}
                            </div>

                            <div className='flex flex-col gap-2'>
                                <label htmlFor='salary' className='font-mont font-medium text-[#043246] text-sm' >Salary Expectation <span className='hidden lg:inline-block '>(Monthly)*</span></label>
                                <div className='flex hover:border-[#E0571233] items-center lg:w-[350px]  bg-[#FFF]  px-1  h-[38px] border  border-[#E3E7E8] rounded  '>
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
                                <label htmlFor='gender' className='font-mont font-medium text-[#043246] text-sm' >Gender</label>
                                <select name='gender' value={values?.gender} onChange={handleChange} className='bg-[#FFF] w-full lg:w-[350px] border rounded border-[#C6C6C6] h-[38px] outline-none p-1 text-xs font-mont'>
                                    <option value="" defaultValue>{userData?.gender === null ? "Select" : userData?.gender}</option>
                                    <option value="Male" >Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Non-binary">Non-binary</option>
                                    <option value="Prefer Not To Say" >Prefer Not To Say</option>
                                  </select>
                              </div>
                              <div className='flex flex-col lg:w-[350px] gap-2'>
                                <label htmlFor='birthday' className='font-mont font-medium text-[#043246] text-sm' >Date of Birth</label>
                                  <input
                                    name="birthday"
                                    placeholder={userData?.dob === null ? "dd/mm/yyyy" : userData?.dob}
                                    type="date" 
                                    value={values?.birthday}
                                    onChange={handleChange}
                                    className="outline-none w-full lg:w-[350px] font-mont text-xs bg-[#FFF] border rounded border-[#C6C6C6] p-3 h-[38px] border-solid "
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

                         <div className='flex justify-end fixed  lg:right-[26%] top-[90%]'>
                            <button className={`${count && values?.salary && values?.jobTitle ? "bg-[#FDB181] text-[#00141B]" : "bg-[#BABABA] text-[#00141B]"} w-[300px] lg:w-[251px] h-[52px] rounded-[4px] border border-[#000709] flex justify-center items-center  `} type='submit'>
                              <p className=' text-base font-mont font-semibold'>{updateProfileDataLoading ? <CgSpinner className=" animate-spin text-lg " /> : 'Save & Continue'}</p>
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

import React, { useState, useEffect } from 'react'
import { Form, Formik } from 'formik'
import { toast } from 'react-toastify'
import * as Yup from "yup"
import { useSelector, useDispatch } from 'react-redux'
import { FaPlus, FaMinus } from "react-icons/fa6";

import Beginner from "../../../../assets/img/beginner.png"
import Intermediate from "../../../../assets/img/intermediate.png"
import Expert from "../../../../assets/img/expert.png"

import { allTechSkills } from '../../../../helpers/techSkills';
import { postTechnicalSkills } from '../../../../features/profile/postTechnicalSkillsSlice';
import { getTechnicalSkills } from '../../../../features/profile/getTechnicalSkillsSlice';
import { api } from '../../../../services/api';
import { allSoftSkills } from '../../../../helpers/softSkills';
import { postSoftSkills } from '../../../../features/profile/postSoftSkillsSlice';
import { getSoftSkills } from '../../../../features/profile/getSoftSkillsSlice';
import { getProfile } from '../../../../features/profile/getProfileSlice'


const Skills = ({ setActive }) => {
    const [showSkillsInput, setShowSkillsInput] = useState(false)
    const [allTechnicalSkill, setAllTechnicalSkills] = useState([])
    const [technicalSkillsClicked, setTechnicalSkillsClicked] = useState(false)
  
    const [showSoftSkillsInput, setShowSoftSkillsInput] = useState(false)
    const [allSoftSkill, setAllSoftSkills] = useState([])
    const [softSkillsClicked, setSoftSkillsClicked] = useState(false)

    const dispatch = useDispatch()

      //For Technical Skills
    const technicalSkillsFormValidationSchema = Yup.object().shape({
        skills: Yup.string().required(),
        level: Yup.string().required()
    })

    const fetchTechnicalSkills = useSelector(state => state.fetchTechnicalSkills);
    const postUserTechnicalSkills = useSelector(state => state.postTechnicalSkills);
    const postTechnicalSkillsLoading = postUserTechnicalSkills?.loading
    const getAllTechnicalSkills = fetchTechnicalSkills?.data?.data

    console.log(getAllTechnicalSkills, "getAllTechnicalSkills")

    const handleSelectTechnicalSkills = () => {
        setTechnicalSkillsClicked(false)
    };

    function loadAllTechnicalSkills(searchTerm) {
        const lowerCaseSearchTerm = searchTerm?.toLowerCase();

        const matchingSkills = allTechSkills.filter((skill) =>
        skill?.toLowerCase().includes(lowerCaseSearchTerm)
        );

        console.log(matchingSkills, "sos");

        setAllTechnicalSkills(matchingSkills);
        
    }

    useEffect(() => {
        loadAllTechnicalSkills();
    }, []);

    const submitSkills = (values, action ) => {
        const data = {
        skills: [values?.skills],
        skill_type: "core" 
        }
        dispatch(postTechnicalSkills(data))
        action.resetForm()
    }

    const deleteTechnicalSkills = async (values) => {
        let formData = new FormData()
        formData.append("skill_id", values)
        // const data = {
        //   skill_id: values
        // }
        await api.delete("/account/delete_skill", formData)
        .then((res) => {
        console.log(res, "res")
        toast("Deleted", {
            position: "top-right",
            autoClose: 3500,
            closeOnClick: true,
        })
        })
        .catch((err) => {
        console.log(err, "res")
        toast("error", {
            position: "top-right",
            autoClose: 3500,
            closeOnClick: true,
        })
        })
    }

    useEffect(() => {
        dispatch(getTechnicalSkills())
    },[postTechnicalSkillsLoading])


  
  
  //For Soft Skills
  const softSkillsFormValidationSchema = Yup.object().shape({
    skills: Yup.string().required(),
    level: Yup.string().required()
  })

  const fetchSoftSkills = useSelector(state => state.fetchSoftSkills);
  const postUserSoftSkills = useSelector(state => state.postSoftSkills);
  const postSoftSkillsLoading = postUserSoftSkills?.loading
  const getAllSoftSkills = fetchSoftSkills?.data?.data

  const handleSelectSoftSkills = () => {
    setSoftSkillsClicked(false)
  };

  function loadAllSoftSkills(searchTerm) {
    const lowerCaseSearchTerm = searchTerm?.toLowerCase();

    console.log(lowerCaseSearchTerm, "lowerCaseSearchTerm")

    const matchingSkills = allSoftSkills.filter((skill) =>
      skill?.toLowerCase()?.includes(lowerCaseSearchTerm)
    );

    console.log(matchingSkills, "sos");

    setAllSoftSkills(matchingSkills);
  }

  useEffect(() => {
    loadAllSoftSkills();
  }, []);


  const submitSoftSkills = (values, action ) => {
    const data = {
      skills: [values?.skills],
      skill_type: "soft" 
    }
    dispatch(postSoftSkills(data))
    action.resetForm()

  }

  const deleteSoftSkills = async (values) => {
    const data = {
      skill_id: values
    }
    await api.delete("/account/delete_skill", data)
    .then((res) => {
      console.log(res, "res")
      toast("Deleted", {
        position: "top-right",
        autoClose: 3500,
        closeOnClick: true,
      })
    })
    .catch((err) => {
      console.log(err, "res")
      toast("error", {
        position: "top-right",
        autoClose: 3500,
        closeOnClick: true,
      })
    })
  }

  useEffect(() => {
    dispatch(getSoftSkills())
  },[postSoftSkillsLoading])

  useEffect(() => {
    dispatch(getProfile())
  }, [])

  return (
    <div className="flex flex-col gap-4 mb-14 mt-4">
        <div className='w-full lg:w-[756px] overflow-x-hidden relative  bg-[#fff] rounded p-4 gap-5'>
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
                    // validationSchema={technicalSkillsFormValidationSchema}
                    onSubmit={(values, action) => {
                    console.log(values, "market")
                    setShowSkillsInput(prev => !prev)
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
                            {showSkillsInput || getAllTechnicalSkills?.length === 0  ? null : 
                                <button className='w-[28px] h-[28px] cursor-pointer bg-[#CCD3D566] p-[7px]' onClick={() => setShowSkillsInput(true)}>
                                <FaPlus className="w-[13px] h-[13px] text-[#000709]" />
                                </button>
                            } 
                            </div>
                            {
                            showSkillsInput || getAllTechnicalSkills?.length === 0 ?
                                <div className='flex flex-col mt-[19px]'>
                                <div className='flex lg:items-center flex-col lg:flex-row gap-[4.8px]'>
                                    <div className='flex flex-col gap-1'>
                                    <input
                                        name="skills"
                                        placeholder="Search or type in a skill"
                                        type="text" 
                                        value={values?.skills}
                                        accept='multiple'
                                        onChange={handleChange}
                                        onInput={(e) => loadAllTechnicalSkills(e.target.value)}
                                        className="outline-none w-full lg:w-[309px] text-[#667A81] font-mont text-xs bg-[#F9FAFB] border rounded border-[#C6C6C6] p-3 h-[40px] border-solid "
                                    />
                                    {allTechnicalSkill?.length > 0 ? <div
                                        style={{ marginTop: "1%" }}
                                        className={`${
                                        values?.skills === "" ||
                                        (values?.skills === ""
                                                        ? "hidden"
                                                        : technicalSkillsClicked && values?.skills !== "")
                                            ? "hidden"
                                            : "w-[310px] p-2.5 h-[100px] bg-[#F9FAFB] overflow-y-scroll absolute p-2 top-[auto] translate-y-[24%] "
                                        }`}
                                    >
                                        {allTechnicalSkill?.map((skill, index) => {
                                        return (
                                            <p
                                            key={index}
                                            onClick={() => {
                                                handleSelectTechnicalSkills();
                                                setFieldValue("skills", skill)
                                                setTechnicalSkillsClicked(true)
                                            }}
                                            className="cursor-pointer my-[14px] mx-[26px] "
                                            >
                                            {skill}
                                            </p>
                                        );
                                        })}
                                    </div>: ''}
                                    {errors.skills && touched.skills ? (
                                        <div className="text-RED-_100 text-xs">
                                            {errors.skills}
                                        </div>
                                        ) : null}
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
                                    {errors.level && touched.level ? (
                                        <div className="text-RED-_100 text-xs">
                                            {errors.level}
                                        </div>
                                        ) : null}
                                    </div>

                                    <button
                                    className={`${isValid ? " bg-[#000]" : "bg-[#BABABA]" } w-full lg:w-[81px] font-mont flex items-center rounded-[6px] justify-center  h-[40px] text-center`}
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
                                    getAllTechnicalSkills?.map((skills, index) => (
                                    <div key={index} className='w-[141px] h-[36px] flex items-center justify-between rounded-[9px] border p-2 border-[#29CFD6]'>
                                        <div className='flex items-center gap-2'>
                                        <img 
                                            src={skills?.level === "Expert" ? Expert : skills?.level === "Intermediate" ? Intermediate : Beginner}
                                            alt='level' 
                                            className='w-[16px] h-[16px]'
                                        />
                                        <p>{skills?.name}</p>
                                        </div>
                                        <p 
                                        className='w-[8px] h-[8px] text-[#667A81] mr-1 flex items-center cursor-pointer' 
                                        onClick={() => deleteTechnicalSkills(skills?.id)}
                                        >
                                            x
                                        </p>
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
                // validationSchema={softSkillsFormValidationSchema}
                onSubmit={(values, action) => {
                console.log(values, "market")
                setShowSoftSkillsInput(prev => !prev)
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
                            {showSoftSkillsInput || getAllSoftSkills?.length === 0 ? null : 
                                <button className='w-[28px] h-[28px] cursor-pointer bg-[#CCD3D566] p-[7px]' onClick={() => setShowSoftSkillsInput(true)}>
                                <FaPlus className="w-[13px] h-[13px] text-[#000709]" />
                                </button>
                            } 
                            </div>
                            {showSoftSkillsInput || getAllSoftSkills?.length === 0 ?
                                <div className='flex flex-col mt-[19px]'>
                                <div className='flex flex-col lg:flex-row lg:items-center gap-[4.8px]'>
                                    <div className='flex flex-col gap-1'>
                                    <input
                                        name="skills"
                                        placeholder="Search or type in a skill"
                                        type="text" 
                                        value={values?.skills}
                                        onChange={handleChange} 
                                        onInput={(e) => loadAllSoftSkills(e.target.value)}
                                        className="outline-none w-full lg:w-[309px] text-[#667A81] font-mont text-xs bg-[#F9FAFB] border rounded border-[#C6C6C6] p-3 h-[40px] border-solid "
                                    />
                                    {allSoftSkill?.length > 0 ? <div
                                        style={{ marginTop: "1%" }}
                                        className={`${
                                        values?.skills === "" ||
                                        (values?.skills === ""
                                                        ? "hidden"
                                                        : softSkillsClicked && values?.skills !== "")
                                            ? "hidden"
                                            : "w-[310px] p-2.5 h-[100px] bg-[#F9FAFB] overflow-y-scroll absolute p-2 top-[auto] translate-y-[24%] "
                                        }`}
                                    >
                                        {allSoftSkill?.map((skill, index) => {
                                        return (
                                            <p
                                            key={index}
                                            onClick={() => {
                                                handleSelectSoftSkills();
                                                setFieldValue("skills", skill)
                                                setSoftSkillsClicked(true)
                                            }}
                                            className="cursor-pointer my-[14px] mx-[26px] "
                                            >
                                            {skill}
                                            </p>
                                        );
                                        })}
                                    </div>: ''}
                                    {errors.skills && touched.skills ? (
                                        <div className="text-RED-_100 text-xs">
                                            {errors.skills}
                                        </div>
                                        ) : null}
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
                                    {errors.level && touched.level ? (
                                        <div className="text-RED-_100 text-xs">
                                            {errors.level}
                                        </div>
                                        ) : null}
                                    </div>

                                    <button
                                    className={`${isValid ? "bg-[#000]"  : "bg-[#BABABA]" } w-full lg:w-[81px] font-mont flex items-center rounded-[6px] justify-center  h-[40px] text-center`}
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
                                <div className='grid grid-cols-2 lg:grid-cols-4 gap-2 mt-[19px] items-center'>
                                {
                                    getAllSoftSkills?.map((skills, index) => (
                                    <div key={index} className='w-auto  h-[36px] flex items-center justify-between rounded-[9px] border p-2 border-[#29CFD6]'>
                                        <div className='flex items-center gap-2  '>
                                        <img 
                                            src={skills?.skillsLevel === "Expert" ? Expert : skills?.skillsLevel === "Intermediate" ? Intermediate : Beginner}
                                            alt='level' 
                                            className='w-[16px] h-[16px]'
                                        />
                                        <p className='font-mont text-[#000709] text-[13px] fontmedium'>{skills?.name} </p>
                                        </div>
                                        <p 
                                        className='w-[8px] h-[8px] text-[#667A81] flex items-center cursor-pointer' 
                                        onClick={() => deleteSoftSkills(skills?.id)}
                                        >
                                            x
                                        </p>
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

            <div className='flex justify-end fixed right-[26%] top-[90%]'>
                <button 
                    className='w-[251px] h-[52px] rounded-[4px] border border-[#000709] bg-[#BABABA] flex justify-center items-center' 
                    type='button'
                    onClick={() => setActive(3)}
                >
                    <p className='text-[#00141B] text-base font-mont font-semibold'>Save & Continue</p>
                </button>
            </div>
      </div>
    </div>
  )
}

export default Skills
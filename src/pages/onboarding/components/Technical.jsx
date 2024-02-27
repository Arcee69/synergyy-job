import React, { useEffect, useState } from 'react'
import { Form, Formik } from 'formik'
import { useSelector, useDispatch } from 'react-redux';
import * as Yup from "yup"
import { FaPlus } from 'react-icons/fa6';
import { CgSpinner } from 'react-icons/cg';

import { allTechSkills } from '../../../helpers/techSkills';
import { postTechnicalSkills } from '../../../features/profile/postTechnicalSkillsSlice';

const Technical = ({ handleButtonChange}) => {
    // const [showSkillsInput, setShowSkillsInput] = useState(false)
    const [allTechnicalSkill, setAllTechnicalSkills] = useState([])
    const [technicalSkillsClicked, setTechnicalSkillsClicked] = useState(false)

    const technicalSkillsFormValidationSchema = Yup.object().shape({
        skills: Yup.string().required(),
        level: Yup.string().required()
      })
  

    const dispatch = useDispatch()
    const postUserTechnicalSkills = useSelector(state => state.postTechnicalSkills);
    const postTechnicalSkillsLoading = postUserTechnicalSkills?.loading

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
        handleButtonChange("Soft")
        action.resetForm()
        // setShowSkillsInput(true)
      }

  return (
    <div className="mt-6 flex flex-col items-center gap-10">
        <div className='w-[90%] lg:w-full'>
            <div className='flex flex-col w-full gap-5'>
                <p className='font-mont text-lg text-[#00141B]'>Technical Skills</p>
                <div className='border border-[#E3E7E8] lg:border-none rounded-lg py-[14px] px-[12px]'>
                    <Formik
                        initialValues={{
                            skills: "",
                            level: ""
                        }}
                            validationSchema={technicalSkillsFormValidationSchema}
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
                                    <div className='flex flex-col '>
                                        <div className='flex flex-col w-full  gap-[4.8px]'>
                                            <div className='flex flex-col gap-1'>
                                                <input
                                                    name="skills"
                                                    placeholder="Search or type in a skill"
                                                    type="text" 
                                                    value={values?.skills}
                                                    accept='multiple'
                                                    onChange={handleChange}
                                                    onInput={(e) => loadAllTechnicalSkills(e.target.value)}
                                                    className="outline-none w-full lg:w-[391px] text-[#667A81] font-mont text-xs bg-[#F9FAFB] border rounded border-[#C6C6C6] p-3 h-[40px] border-solid "
                                                />
                                                {allTechnicalSkill.length > 0 ? <div
                                                    style={{ marginTop: "1%" }}
                                                    className={`${
                                                    values?.skills === "" ||
                                                    (values?.skills === ""
                                                                    ? "hidden"
                                                                    : technicalSkillsClicked && values?.skills !== "")
                                                        ? "hidden"
                                                        : "w-[391px] p-2.5 h-[100px] bg-[#F9FAFB] overflow-y-scroll absolute p-2 top-[auto] translate-y-[24%] "
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
                                                <div className='flex flex-col lg:flex-row gap-1'>
                                                    <select
                                                        className='outline-none w-full lg:w-[302px] text-[#667A81] font-mont text-xs bg-[#F9FAFB] border rounded border-[#C6C6C6] p-3 h-[40px] border-solid'
                                                        onChange={handleChange}
                                                        value={values?.level}
                                                        name='level'
                                                        >
                                                        <option value="" defaultValue>Select skill level</option>
                                                        <option value="Beginner">Beginner</option>
                                                        <option value="Intermediate">Intermediate</option>
                                                        <option value="Expert">Expert</option>
                                                    </select>
                                                    <button
                                                        className={`${isValid ? " bg-[#000]" : "bg-[#BABABA]" } w-full hidden lg:flex lg:w-[82px] font-mont items-center rounded-[6px] justify-center  h-[40px] text-center`}
                                                        type="submit"
                                                        disabled={!isValid}
                                                    >
                                                        <p className='text-[#fff] text-xs'>{postTechnicalSkillsLoading ? <CgSpinner className=" animate-spin text-lg " /> : 'Add Skills'}</p>
                                                    </button>
                                                </div>
                                                {errors.level && touched.level ? (
                                                    <div className="text-RED-_100 text-xs">
                                                        {errors.level}
                                                    </div>
                                                    ) : null}
                                            </div>

                                            <button
                                                className={`${isValid ? " bg-[#000]" : "bg-[#BABABA]" } w-full lg:w-[81px] font-mont flex lg:hidden items-center rounded-[6px] justify-center  h-[40px] text-center`}
                                                type="submit"
                                                disabled={!isValid}
                                            >
                                                <p className='text-[#fff] text-xs'>{postTechnicalSkillsLoading ? <CgSpinner className=" animate-spin text-lg " /> : 'Add Skills'}</p>
                                            </button>
                                        </div>
                                        <div className='flex flex-col w-full lg:w-[391px] mt-[28px] gap-[18px]'>
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
                                </div>

                            </Form>
                        )}
                    </Formik>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Technical
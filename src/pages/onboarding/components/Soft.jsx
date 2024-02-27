import React, { useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as Yup from "yup"
import { Form, Formik} from "formik"
import { FaPlus } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom'


import { allSoftSkills } from '../../../helpers/softSkills'
import { postSoftSkills } from '../../../features/profile/postSoftSkillsSlice'

const Soft = () => {
    const [showSoftSkillsInput, setShowSoftSkillsInput] = useState(false)
    const [allSoftSkill, setAllSoftSkills] = useState([])
    const [softSkillsClicked, setSoftSkillsClicked] = useState(false)

    const softSkillsFormValidationSchema = Yup.object().shape({
        skills: Yup.string().required(),
        level: Yup.string().required()
      })

      const navigate = useNavigate()

      const dispatch = useDispatch()

    const postUserSoftSkills = useSelector(state => state.postSoftSkills);
    const postSoftSkillsLoading = postUserSoftSkills?.loading

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
        navigate("/congratulations")
        action.resetForm()
        // setShowSoftSkillsInput(true)
      }

  return (
    <div className="mt-6 flex flex-col items-center gap-10">
        <div className='w-[90%] lg:w-full'>
            <div className='flex flex-col w-full gap-5'>
                <p className='font-mont text-lg text-[#00141B]'>Soft Skills</p>
                <div className='border border-[#E3E7E8] lg:border-none rounded-lg py-[14px] px-[12px]'>
                    <Formik
                        initialValues={{
                            skills: "",
                            level: ""
                        }}
                            validationSchema={softSkillsFormValidationSchema}
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
                                                    onInput={(e) => loadAllSoftSkills(e.target.value)}
                                                    className="outline-none w-full lg:w-[391px] text-[#667A81] font-mont text-xs bg-[#F9FAFB] border rounded border-[#C6C6C6] p-3 h-[40px] border-solid "
                                                />
                                                {allSoftSkill?.length > 0 ? <div
                                                    style={{ marginTop: "1%" }}
                                                    className={`${
                                                    values?.skills === "" ||
                                                    (values?.skills === ""
                                                                    ? "hidden"
                                                                    : softSkillsClicked && values?.skills !== "")
                                                        ? "hidden"
                                                        : "w-[391px] p-2.5 h-[100px] bg-[#F9FAFB] overflow-y-scroll absolute p-2 top-[auto] translate-y-[24%] "
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
                                                        <p className='text-[#fff] text-xs'>{postSoftSkillsLoading ? <CgSpinner className=" animate-spin text-lg " /> : 'Add Skills'}</p>
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
                                                <p className='text-[#fff] text-xs'>{postSoftSkillsLoading ? <CgSpinner className=" animate-spin text-lg " /> : 'Add Skills'}</p>
                                            </button>
                                        </div>
                                      
                                        <div className='flex flex-col w-full lg:w-[391px]  mt-[28px] gap-[18px]'>
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

export default Soft
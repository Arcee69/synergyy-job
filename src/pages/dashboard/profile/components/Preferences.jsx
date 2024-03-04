import React, { useState } from 'react'
import { updateProfile } from '../../../../features/profile/updateProfileSlice'
import { useDispatch, useSelector } from 'react-redux'
import { CgSpinner } from 'react-icons/cg'

const Preferences = ({ setActive }) => {
    const [employmentAvailability, setEmploymentAvailability] = useState("")
    const [employmentStyle, setEmploymentStyle] = useState("")
    const [employmentStatus, setEmploymentStatus] = useState("")
    const [workPreferenceLoading, setWorkPreferenceLoading] = useState(false)

    const dispatch = useDispatch()

    const { loading } = useSelector(state => state.updateProfileData)

    const employmentKind =[
        "Full-time", "Part-time", "Contract", "Temporary", "Internship"
      ]
    
      const handleEmploymentKindInputChange = (item) => {
        setEmploymentAvailability(item)
      }
    
      const handleEmploymentStyleInputChange = (item) => {
        setEmploymentStyle(item)
      }
    
      const handleStatus = (item) => {
        setEmploymentStatus(item)
      }
    
      const submitWorkPreferenceForm = () => {
        // setWorkPreferenceLoading(true)
          const data = {
            employment_style: employmentStyle,
            employment_type: employmentAvailability,
            employment_search_status: employmentStatus
          };
          dispatch(updateProfile(data))
          .then((res) => {
            console.log(res, "dandizzy")
            setActive(7)
          })
         
      }

  return (
    <div className="flex flex-col gap-4 mt-4">
         <div className='lg:w-[756px] relative bg-[#fff] mb-5 rounded p-4 gap-5 '>
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
                {
                    employmentKind.map((item, index) => (
                    <div className='flex items-center w-[200px] gap-[6px]' key={index}>
                        <input type='checkbox'  name='employmentKind' value={item} onChange={() => handleEmploymentKindInputChange(item)} className='border border-[#42B8BD] rounded-xs'/>
                        <p className='text-[13px] text-[#334D57] font-medium font-mont'>{item}</p> 
                    </div>
                    ))
                }
                </div>
            </div>

            <div className='flex flex-col gap-5'>
                <p className='text-[#334D57] font-mont text-[13px]' >What kind of work style would you prefer?</p>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
                <div className='flex items-center w-[200px] gap-[6px]'>
                    <input type='checkbox'  name='onSite' className='border border-[#42B8BD] rounded-xs' onChange={() => handleEmploymentStyleInputChange("On-site")}/>
                    <p className='text-[13px] text-[#334D57] font-medium font-mont'>On-site</p> 
                </div>
                <div className='flex items-center w-[200px] gap-[6px]'>
                    <input type='checkbox'  name='remote' className='border border-[#42B8BD] rounded-xs' onChange={() => handleEmploymentStyleInputChange("Remote")}/>
                    <p className='text-[13px] text-[#334D57] font-medium font-mont'>Remote</p> 
                </div>
                <div className='flex items-center w-[200px] gap-[6px]'>
                    <input type='checkbox'  name='flexible' className='border border-[#42B8BD] rounded-xs' onChange={() => handleEmploymentStyleInputChange("Flexible hours")}/>
                    <p className='text-[13px] text-[#334D57] font-medium font-mont'>Flexible hours</p> 
                </div>
                <div className='flex items-center lg:w-[332px] gap-[6px]'>
                    <input type='checkbox'  name='hybrid' className='border border-[#42B8BD] rounded-xs' onChange={() => handleEmploymentStyleInputChange("Hybrid")}/>
                    <p className='text-[13px] text-[#334D57] font-medium font-mont'>Hybrid (combination of on-site and remote)</p> 
                </div>
                </div>
            </div>

            <div className='flex flex-col gap-5'>
                <p className='text-[#334D57] font-mont text-[13px]' >What is your job search status?</p>
                <div className='flex flex-col gap-4'>
                <div className='flex items-center w-full gap-[6px]'>
                    <input type='radio'  name='status' onChange={() => handleStatus("Actively looking for opportunities")}/>
                    <p className='text-[13px] text-[#334D57] font-medium font-mont'>Actively looking for opportunities</p> 
                </div>
                <div className='flex items-center w-full gap-[6px]'>
                    <input type='radio'  name='status' onChange={() => handleStatus("Open to new opportunities but not actively searching")} />
                    <p className='text-[13px] text-[#334D57] font-medium font-mont'>Open to new opportunities but not actively searching</p> 
                </div>
                <div className='flex items-center w-full gap-[6px]'>
                    <input type='radio'  name='status' onChange={() => handleStatus("Currently employed but open to considering new roles")}/>
                    <p className='text-[13px] text-[#334D57] font-medium font-mont'>Currently employed but open to considering new roles</p> 
                </div>
                <div className='flex items-center w-full gap-[6px]'>
                    <input type='radio'  name='status' onChange={() => handleStatus("Exploring options for future opportunities")}/>
                    <p className='text-[13px] text-[#334D57] font-medium font-mont'>Exploring options for future opportunities</p> 
                </div>
                </div>
            </div>

            </div>
            
            <div className='flex justify-end mt-0 fixed lg:right-[26%] top-[90%]'>
            <button 
                className={`${employmentAvailability && employmentStyle && employmentStatus ? "bg-[#000] text-[#fff]" : "bg-[#BABABA] text-[#00141B]"} w-[300px] lg:w-[251px] h-[52px] rounded-[4px] border border-[#000709] flex justify-center items-center`}
                type='submit'
                onClick={() => submitWorkPreferenceForm()}
            >
                <p className=' text-base font-mont font-semibold'>{loading ? <CgSpinner className=" animate-spin text-lg " /> : 'Save & Continue'}</p>
            </button>
            </div>
      </div>
    </div>
  )
}

export default Preferences
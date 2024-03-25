import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Progress } from 'antd';

import ProfileSmall from "../../../assets/img/profile_small.png"
import Gift from "../../../assets/svg/gift.svg"

import YourProfile from './components/YourProfile';
import Credentials from './components/Credentials';
import Resume from './components/Resume';
import Career from './components/Career';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Preferences from './components/Preferences';
import { getSoftSkills } from '../../../features/profile/getSoftSkillsSlice';
import { getTechnicalSkills } from '../../../features/profile/getTechnicalSkillsSlice';
import { getExperience } from '../../../features/credentials/getExperienceSlice';
import { getEducation } from '../../../features/credentials/getEducationSlice';
import { getProfile } from '../../../features/profile/getProfileSlice';
import { getAllDocuments } from '../../../features/resume/getAllDocumentsSlice';
import ModalPop from '../../../components/modals/modalPop';
import Welcome from './components/Welcome';

const Profile = () => {
  const [active, setActive] = useState(1);
  const [stage, setStage] = useState(0);
  const [percent, setPercent] = useState(0);
  const [open, setOpen] = useState(false)


  const handleButtonClick = (buttonName) => {
    setActive(buttonName);
};

const dispatch = useDispatch()
console.log(active, "active")

  useEffect(() => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
  }, [active])

  const clicked = localStorage.getItem("clicked")

  const openWelcomeModal = () => {
    if(!!!userData?.profile_photo && !!!clicked) {
        setOpen(true)
    } 
  }

  useEffect(() => {
    openWelcomeModal()
  }, [])


  //Profile
  const profileData = useSelector(state => state.fetchProfileData)
  const userData = profileData?.data?.data
  console.log(userData, "userData")

  //Technical Skills
  const fetchTechnicalSkills = useSelector(state => state.fetchTechnicalSkills);
  const getAllTechnicalSkills = fetchTechnicalSkills?.data?.data

  //Soft Skills
  const fetchSoftSkills = useSelector(state => state.fetchSoftSkills);
  const getAllSoftSkills = fetchSoftSkills?.data?.data

  //Experience 
  const fetchExperience = useSelector(state => state.fetchExperience)
  const workData = fetchExperience?.data?.data

  //Education 
  const fetchEducation = useSelector(state => state.fetchEducation)
  const educationData = fetchEducation?.data?.data

  //Document
  const getDocuments = useSelector(state => state.getAllDocuments)
  const getUserDocuments = getDocuments?.data?.data

  useEffect(() => {
    dispatch(getSoftSkills())
    dispatch(getTechnicalSkills())
    dispatch(getExperience())
    dispatch(getEducation())
    dispatch(getAllDocuments())
  }, [])

  useEffect(() => {
    dispatch(getProfile())
  }, [active])
  
  const calculateProgress = () => {
    let newStage = 0;
    let newPercent = 0;

    if (userData?.profile_photo) {
      newStage = 1;
      newPercent = 13;
    }

    if (getAllTechnicalSkills?.length > 0 && getAllSoftSkills?.length > 0) {
      newStage = 2;
      newPercent = 26;

    }
    if (workData?.length > 0) {
      newStage = 3;
      newPercent = 39;
    }
    if (educationData?.length > 0) {
      newStage = 4;
      newPercent = 52;
    }

    if (userData?.employment_search_status && userData?.employment_style && userData?.employment_type) {
      newStage = 5;
      newPercent = 65;
    }

    if (getUserDocuments?.length > 0) {
      newStage = 6;
      newPercent = 78;
    }

    setStage(newStage);
    setPercent(newPercent);
  };

  useEffect(() => {
    calculateProgress();
  }, [userData, getAllTechnicalSkills, getAllSoftSkills, workData, educationData]);

  const basicUnlocked = localStorage.getItem("basicUnlocked");
  const skillsUnlocked = localStorage.getItem("skillsUnlocked");
  const experienceUnlocked = localStorage.getItem("experienceUnlocked");
  const educationUnlocked = localStorage.getItem("educationUnlocked");
  const contactUnlocked = localStorage.getItem("contactUnlocked");
  const preferenceUnlocked = localStorage.getItem("preferenceUnlocked");
  const resumeUnlocked = localStorage.getItem("resumeUnlocked");

  return (
    <>
      <div className='flex gap-6  relative mt-14 mb-5'>
        <div className='flex w-full lg:w-[75%] flex-col mt-8 gap-8'>
          <div className='flex flex-col gap-4 px-[6px] lg:px-[0px]'>
            <div className='flex flex-col gap-2'>
              <p className='font-mont text-[24px] lg:text-[30px] font-semibold text-[#000709]'>Let’s show you off to employers</p>
              <p className='hidden lg:flex font-mont text-[13px] lg:text-base text-[#00141B]'>Complete your profile and get discovered for top roles.</p>
              <div className='bg-[#D4F5F7] flex lg:hidden items-center justify-between w-full h-[44px] p-[8px] rounded-lg'>
                <div className='flex items-center gap-[4px]'>
                  <img src={Gift} alt='gift' />
                  <div className='flex flex-col'>
                    <p className='text-[#28C9D0] font-mont font-medium text-xs'>Earn points</p>
                    <p className='text-xs text-[#043246] font-mont font-medium'>Complete your profile</p>
                  </div>
                </div>
                <p className='text-[#00344ACC] font-mont text-xs font-semibold'>1,000 pts</p>
              </div>
            </div>
          </div>
          <div className='flex bg-[#fff] px-[6px] rounded-lg pt-[8px] flex-col gap-[18px]'>
            <div className='flex gap-3 px-[6px] py-[8px] items-center'>
              <img src={ProfileSmall} alt='Profile' className='w-[26px] h-[26px]'/>
              <p className='font-mont text-xl font-semibold text-[#000709]'>Edit your profile</p>
            </div>

            <div className=' lg:w-full border border-x-0 border-t-0 border-[#ccc] overflow-x-auto lg:overflow-hidden px-[6px] pt-[8px] gap-[12px] flex items-center'> {/* h-[50px] */}
              <div
                className={`${active === 1 ? "border border-x-0 border-t-0 border-[#E05712] text-[#00161F] " : "text-[#9C9C9C]"} bg-[#fff]  w-[90px] h-[34px] font-mont font-semibold  text-center justify-center p-[10px]  cursor-pointer flex items-center text-xs `}
                onClick={() => {basicUnlocked ? handleButtonClick(1) : null}}
              >
                Basic
              </div>
              <div
                className={`${active === 2 ? "border border-x-0 border-t-0 border-[#E05712] text-[#00161F]" : "text-[#9C9C9C]"} bg-[#fff]  w-[90px] h-[34px] font-mont font-semibold  text-center justify-center p-[10px]  cursor-pointer flex items-center text-xs `}
                onClick={() => {skillsUnlocked ? handleButtonClick(2) : null}}
              >
                Skills
              </div>
              <div
                className={`${active === 3 ? "border border-x-0 border-t-0 border-[#E05712] text-[#00161F]" : "text-[#9C9C9C]"} bg-[#fff]  w-[90px] h-[34px] font-mont font-semibold  text-center justify-center p-[10px]  cursor-pointer flex items-center text-xs `}
                onClick={() => {experienceUnlocked ? handleButtonClick(3) : null}}
              >
                Experience
              </div>
              <div
                className={`${active === 4 ? "border border-x-0 border-t-0 border-[#E05712] text-[#00161F]" : "text-[#9C9C9C]"} bg-[#fff]  w-[90px] h-[34px] font-mont font-semibold  text-center justify-center p-[10px]  cursor-pointer flex items-center text-xs `}
                onClick={() => {educationUnlocked ? handleButtonClick(4) : null}}
              >
                Education
              </div>
              <div
                className={`${active === 5 ? "border border-x-0 border-t-0 border-[#E05712] text-[#00161F]" : "text-[#9C9C9C]"} bg-[#fff]  w-[90px] h-[34px] font-mont font-semibold  text-center justify-center p-[10px]  cursor-pointer flex items-center text-xs `}
                onClick={() => {contactUnlocked ? handleButtonClick(5) : null}}
              >
                Contact
              </div>
              <div
                className={`${active === 6 ? "border border-x-0 border-t-0 border-[#E05712] text-[#00161F]" : "text-[#9C9C9C]"} bg-[#fff]  w-[90px] h-[34px] font-mont font-semibold  text-center justify-center p-[10px]  cursor-pointer flex items-center text-xs `}
                onClick={() => {preferenceUnlocked ? handleButtonClick(6) : null}}
              >
                Preferences
              </div>
              <div
                className={`${active === 7 ? "border border-x-0 border-t-0 border-[#E05712] text-[#00161F]" : "text-[#9C9C9C]"} bg-[#fff]  w-[90px] h-[34px] font-mont font-semibold  text-center justify-center p-[10px]  cursor-pointer flex items-center text-xs `}
                onClick={() => {resumeUnlocked ? handleButtonClick(7) : null}}
              >
                Resume
              </div>
            
              {/* <div
                className='cursor-pointer h-[34px] rounded-lg text-xs flex items-center py-[8px] px-[9.6px]'
                onClick={() => handleButtonClick(4)}
                style={active === 4 ? {background:'#fff',color:'#00161F'} : {background:"#EBEEEF80",color:'#616161'} }
              >
                Career Goals
              </div> */}
            </div>

            {active === 1 && <YourProfile setActive={setActive} /> }
            {active === 2 && <Skills setActive={setActive} /> }
            {active === 3 && <Experience  setActive={setActive} /> }
            {active === 4 && <Credentials setActive={setActive} /> }
            {active === 5 && <Contact setActive={setActive} /> }
            {active === 6 && <Preferences setActive={setActive} /> }
            {active === 7 && <Resume /> }
            {/* {active === 4 && <Career /> } */}

          </div>

        </div>
        <div className=' right-2 mt-[138px] hidden lg:flex'> {/* fixed */}
          <div className='w-[276px] h-[380px] bg-[#fff] border-[#E3E7E8] rounded-[12px] flex flex-col gap-4 items-center justify-center'>
            <div className='w-full flex px-[12px]  items-center justify-between'>
              <p className='font-mont text-[#043246] font-semibold'>Complete your profile</p>
              <div className='flex items-center gap-2'>
                <p className='text-[#667A81] font-mont font-semibold font-semibold'>
                  {`${stage}/7`}
                </p>
                <Progress type="circle" percent={percent} showInfo={false} size={20} strokeColor="#29CFD6" />
              </div>
            </div>
              <div className='flex flex-col items-center justify-center gap-[8px]'>
                  {
                      userData?.profile_photo === null ? (
                          <div className='relative'>
                            <Progress type="circle" percent={percent} showInfo={false} size={165} strokeColor="#29CFD6" />
                            <div className='w-[142px] h-[142px] rounded-full bg-[#fafafa] absolute right-3.5 bottom-3 flex items-center justify-center'>
                                <p className='text-[#000] text-4xl'>{`${userData?.first_name?.substring(0, 1)}${userData?.last_name?.substring(0, 1)}`}</p>
                            </div>
                          </div>
                      ) : (
                        <div className='relative'>
                          <Progress type="circle" percent={percent} showInfo={false} size={170} strokeColor="#29CFD6" />
                          <img src={userData?.profile_photo} alt='profile_photo' className='rounded-full absolute right-3.5 bottom-3 w-[142px] h-[142px]' />
                        </div>
                        
                      )
                  }
                  <p className='text-xs font-semibold font-mont text-[#667A81]'> 
                      {`${percent}% complete`}
                  </p>
              </div>
              <div className='flex flex-col justify-center items-center'>
                <p className='text-[#000709] font-mont text-lg font-semibold'>{`${userData?.first_name} ${userData?.last_name}`}</p>
                <p className='text-[#667A81] text-sm font-mont'>Product Designer</p>
              </div>
              <div className='bg-[#D4F5F7] flex items-center justify-between w-[252px] h-[44px] p-[8px] rounded-lg'>
                <div className='flex items-center gap-[4px]'>
                  <img src={Gift} alt='gift' />
                  <div className='flex flex-col'>
                    <p className='text-[#28C9D0] font-mont font-medium text-xs'>Earn points</p>
                    <p className='text-xs text-[#043246] font-mont font-medium'>Complete your profile</p>
                  </div>
                </div>
                <p className='text-[#00344ACC] font-mont text-xs font-semibold'>1,000 pts</p>
              </div>
          </div>
        </div>
      </div>

      <ModalPop isOpen={open}>
        <Welcome handleClose={() => setOpen(false)} />
      </ModalPop>
    </>
  )
}

export default Profile
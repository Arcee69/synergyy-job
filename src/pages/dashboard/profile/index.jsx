import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import { Progress } from 'antd';

import ProfileSmall from "../../../assets/img/profile_small.png"
import YourProfile from './components/YourProfile';
import Credentials from './components/Credentials';
import Resume from './components/Resume';
import Career from './components/Career';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Preferences from './components/Preferences';

const Profile = () => {
  const [active, setActive] = useState(1);


  const handleButtonClick = (buttonName) => {
    setActive(buttonName);
};

console.log(active, "active")

  useEffect(() => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
  }, [active])

  const profileData = useSelector(state => state.fetchProfileData)
  const userData = profileData?.data?.data

  return (
    <div className='flex gap-6  relative mt-14 mb-5'>
      <div className='flex w-full lg:w-[75%] flex-col mt-8 gap-8'>
        <div className='flex flex-col gap-4 px-[6px] lg:px-[0px]'>
          <div className='flex flex-col gap-2'>
            <p className='font-mont text-[24px] lg:text-[30px] font-semibold text-[#000709]'>Let’s show you off to employers</p>
            <p className='font-mont text-[13px] lg:text-base text-[#00141B]'>Complete your profile and get discovered for top roles.</p>
          </div>
          {/* <div className='flex items-center gap-4'>
            <div className='flex gap-1.5'>
                <div className='bg-[#FBA599] w-[71px] lg:w-[177px] h-[4px] lg:h-[8px]'></div>
                <div className={`${active > 1  ? "bg-[#FBA599]" : "bg-[#E3E7E8]"} w-[71px] lg:w-[177px] h-[4px] lg:h-[8px]`}></div>
                <div className={`${active > 2 ? "bg-[#FBA599]" : "bg-[#E3E7E8]"} w-[71px] lg:w-[177px] h-[4px] lg:h-[8px]`}></div>
                <div className={`${active > 3 ? "bg-[#FBA599]" : "bg-[#E3E7E8]"} w-[71px] lg:w-[177px] h-[4px] lg:h-[8px]`}></div>
            </div>
            <p>{active}/4</p>
          </div> */}
        </div>
        <div className='flex bg-[#fff] px-[6px] py-[8px] flex-col gap-[18px]'>
          <div className='flex gap-3 px-[6px] py-[8px] items-center'>
            <img src={ProfileSmall} alt='Profile' className='w-[26px] h-[26px]'/>
            <p className='font-mont text-xl font-semibold text-[#000709]'>Edit your profile</p>
          </div>

          <div className=' lg:w-full h-[50px]  overflow-x-auto lg:overflow-x-hidden px-[6px] py-[8px]   gap-[12px] flex items-center'>
            <div
              className={`${active === 1 ? "border border-[#000] text-[#00161F] rounded-[4px]" : "text-[#9C9C9C]"} bg-[#fff]  w-[90px] h-[34px] font-mont font-semibold  text-center justify-center p-[10px]  cursor-pointer flex items-center text-xs `}
              // onClick={() => handleButtonClick(1)}
            >
              Basic
            </div>
            <div
              className={`${active === 2 ? "border border-[#000] text-[#00161F] rounded-[4px]" : "text-[#9C9C9C]"} bg-[#fff]  w-[90px] h-[34px] font-mont font-semibold  text-center justify-center p-[10px]  cursor-pointer flex items-center text-xs `}
              // onClick={() => handleButtonClick(2)}
            >
              Skills
            </div>
            <div
              className={`${active === 3 ? "border border-[#000] text-[#00161F] rounded-[4px]" : "text-[#9C9C9C]"} bg-[#fff]  w-[90px] h-[34px] font-mont font-semibold  text-center justify-center p-[10px]  cursor-pointer flex items-center text-xs `}
              // onClick={() => handleButtonClick(3)}
            >
              Experience
            </div>
            <div
              className={`${active === 4 ? "border border-[#000] text-[#00161F] rounded-[4px]" : "text-[#9C9C9C]"} bg-[#fff]  w-[90px] h-[34px] font-mont font-semibold  text-center justify-center p-[10px]  cursor-pointer flex items-center text-xs `}
              // onClick={() => handleButtonClick(4)}
            >
              Education
            </div>
            {/* <div
              className={`${active === 5 ? "border border-[#000] text-[#00161F] rounded-[4px]" : "text-[#9C9C9C]"} bg-[#fff]  w-[90px] h-[34px] font-mont font-semibold  text-center justify-center p-[10px]  cursor-pointer flex items-center text-xs `}
              onClick={() => handleButtonClick(5)}
            >
              Contact
            </div> */}
            <div
              className={`${active === 6 ? "border border-[#000] text-[#00161F] rounded-[4px]" : "text-[#9C9C9C]"} bg-[#fff]  w-[90px] h-[34px] font-mont font-semibold  text-center justify-center p-[10px]  cursor-pointer flex items-center text-xs `}
              // onClick={() => handleButtonClick(6)}
            >
              Preferences
            </div>
            <div
              className={`${active === 7 ? "border border-[#000] text-[#00161F] rounded-[4px]" : "text-[#9C9C9C]"} bg-[#fff]  w-[90px] h-[34px] font-mont font-semibold  text-center justify-center p-[10px]  cursor-pointer flex items-center text-xs `}
              // onClick={() => handleButtonClick(7)}
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
          {/* {active === 5 && <Contact setActive={setActive} /> } */}
          {active === 6 && <Preferences setActive={setActive} /> }
          {active === 7 && <Resume /> }
          {/* {active === 4 && <Career /> } */}

        </div>

      </div>
      <div className='fixed right-0 hidden lg:flex'>
        <div className='w-[308px] h-[355px] bg-transparent rounded-[10px] flex flex-col gap-4 items-center justify-center'>
            <div className='flex flex-col items-center justify-center gap-[8px]'>
                {
                    userData?.profile_photo === null ? (
                        <div className='w-[142px] h-[142px] rounded-full border border-[#666] bg-[#fafafa] flex items-center justify-center'>
                            <p className='text-[#000] text-4xl'>{userData?.first_name?.substring(0, 1)}</p>
                        </div>
                    ) : (
                      <div className='relative'>
                        <Progress type="circle" percent={70} showInfo={false} size={170} />
                        <img src={userData?.profile_photo} alt='profile_photo' className='rounded-full absolute right-3.5 bottom-3 w-[142px] h-[142px]' />
                      </div>
                      
                    )
                }
                <p className='text-xs font-semibold font-mont text-[#667A81]'> 
                    {
                        userData?.profile_photo === null ? "0% complete" : "70% complete"
                    }
                </p>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <p className='text-[#000709] font-mont text-lg font-semibold'>{`${userData?.first_name} ${userData?.last_name}`}</p>
                <p className='text-[#667A81] text-sm font-mont'>Product Designer</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
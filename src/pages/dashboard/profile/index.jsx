import React, { useState } from 'react'

import ProfileSmall from "../../../assets/img/profile_small.png"
import YourProfile from './components/YourProfile';
import Credentials from './components/Credentials';
import Resume from './components/Resume';
import Career from './components/Career';

const Profile = () => {
  const [active, setActive] = useState("Your Profile");


  const handleButtonClick = (buttonName) => {
    setActive(buttonName);
};

  return (
    <div className='flex flex-col mt-8 gap-8'>
      <div className='flex flex-col gap-4'>
        <div className='flex flex-col gap-2'>
          <p className='font-mont text-[30px] font-semibold text-[#000709]'>Let’s show you off to employers</p>
          <p className='font-mont text-base text-[#00141B]'>Complete your profile and get discovered for top roles.</p>
        </div>
        <div className='flex items-center gap-4'>
          <div className='flex gap-1.5'>
              <div className='bg-[#FBA599] w-[177px] h-[4px] lg:h-[8px]'></div>
              <div className={`${active === "Credentials" ? "bg-[#FBA599]" : "bg-[#E3E7E8]"} w-[177px] h-[4px] lg:h-[8px]`}></div>
              <div className={`${active === "Resume/CV" ? "bg-[#FBA599]" : "bg-[#E3E7E8]"} w-[177px] h-[4px] lg:h-[8px]`}></div>
              <div className={`${active === "Career Goals" ? "bg-[#FBA599]" : "bg-[#E3E7E8]"} w-[177px] h-[4px] lg:h-[8px]`}></div>
          </div>
          <p>0/4</p>
        </div>
      </div>
      <div className='flex flex-col gap-[18px]'>
        <div className='flex gap-3 items-center'>
          <img src={ProfileSmall} alt='Profile' className='w-[26px] h-[26px]'/>
          <p className='font-mont text-xl font-semibold text-[#000709]'>Edit your profile</p>
        </div>

        <div className='w-[500px] h-[50px] px-[6px] py-[8px] bg-[#EBEEEF80] gap-[8px] rounded flex items-center'>
          <div
            className='cursor-pointer h-[34px] rounded-lg flex items-center py-[8px] px-[9.6px]'
            onClick={() => handleButtonClick("Your Profile")}
            style={active === "Your Profile" ? {background:'#fff',color:'#00161F'} : {background:"#EBEEEF80",color:'#616161'} }
          >
            Your Profile
          </div>
          <div
            className='cursor-pointer h-[34px] rounded-lg flex items-center py-[8px] px-[9.6px]'
            onClick={() => handleButtonClick("Credentials")}
            style={active === "Credentials" ? {background:'#fff',color:'#00161F'} : {background:"#EBEEEF80",color:'#616161'} }
          >
            Credentials
          </div>
          <div
            className='cursor-pointer h-[34px] rounded-lg flex items-center py-[8px] px-[9.6px]'
            onClick={() => handleButtonClick("Resume/CV")}
            style={active === "Resume/CV" ? {background:'#fff',color:'#00161F'} : {background:"#EBEEEF80",color:'#616161'} }
          >
            Resume/CV
          </div>
          <div
            className='cursor-pointer h-[34px] rounded-lg flex items-center py-[8px] px-[9.6px]'
            onClick={() => handleButtonClick("Career Goals")}
            style={active === "Career Goals" ? {background:'#fff',color:'#00161F'} : {background:"#EBEEEF80",color:'#616161'} }
          >
            Career Goals
          </div>
        </div>

        {active === "Your Profile" && <YourProfile /> }
        {active === "Credentials" && <Credentials /> }
        {active === "Resume/CV" && <Resume /> }
        {active === "Career Goals" && <Career /> }

      </div>

    </div>
  )
}

export default Profile
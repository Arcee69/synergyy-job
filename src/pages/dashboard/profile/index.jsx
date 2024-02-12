import React, { useState, useEffect } from 'react'

import ProfileSmall from "../../../assets/img/profile_small.png"
import YourProfile from './components/YourProfile';
import Credentials from './components/Credentials';
import Resume from './components/Resume';
import Career from './components/Career';

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



  return (
    <div className='flex flex-col mt-8 gap-8'>
      <div className='flex flex-col gap-4'>
        <div className='flex flex-col gap-2'>
          <p className='font-mont text-[24px] lg:text-[30px] font-semibold text-[#000709]'>Let’s show you off to employers</p>
          <p className='font-mont text-[13px] lg:text-base text-[#00141B]'>Complete your profile and get discovered for top roles.</p>
        </div>
        <div className='flex items-center gap-4'>
          <div className='flex gap-1.5'>
              <div className='bg-[#FBA599] w-[71px] lg:w-[177px] h-[4px] lg:h-[8px]'></div>
              <div className={`${active > 1  ? "bg-[#FBA599]" : "bg-[#E3E7E8]"} w-[71px] lg:w-[177px] h-[4px] lg:h-[8px]`}></div>
              <div className={`${active > 2 ? "bg-[#FBA599]" : "bg-[#E3E7E8]"} w-[71px] lg:w-[177px] h-[4px] lg:h-[8px]`}></div>
              <div className={`${active > 3 ? "bg-[#FBA599]" : "bg-[#E3E7E8]"} w-[71px] lg:w-[177px] h-[4px] lg:h-[8px]`}></div>
          </div>
          <p>{active}/4</p>
        </div>
      </div>
      <div className='flex flex-col gap-[18px]'>
        <div className='flex gap-3 items-center'>
          <img src={ProfileSmall} alt='Profile' className='w-[26px] h-[26px]'/>
          <p className='font-mont text-xl font-semibold text-[#000709]'>Edit your profile</p>
        </div>

        <div className='lg:w-[399px] h-[50px] text-xs px-[6px] py-[8px] bg-[#EBEEEF80] gap-[8px] rounded flex items-center'>
          <div
            className='cursor-pointer h-[34px] rounded-lg flex items-center py-[8px] px-[9.6px]'
            onClick={() => handleButtonClick(1)}
            style={active === 1 ? {background:'#fff',color:'#00161F'} : {background:"#EBEEEF80",color:'#616161'} }
          >
            Your Profile
          </div>
          <div
            className='cursor-pointer h-[34px] rounded-lg flex text-xs items-center py-[8px] px-[9.6px]'
            onClick={() => handleButtonClick(2)}
            style={active === 2 ? {background:'#fff',color:'#00161F'} : {background:"#EBEEEF80",color:'#616161'} }
          >
            Credentials
          </div>
          <div
            className='cursor-pointer h-[34px] rounded-lg text-xs flex items-center py-[8px] px-[9.6px]'
            onClick={() => handleButtonClick(3)}
            style={active === 3 ? {background:'#fff',color:'#00161F'} : {background:"#EBEEEF80",color:'#616161'} }
          >
            Resume/CV
          </div>
          <div
            className='cursor-pointer h-[34px] rounded-lg text-xs flex items-center py-[8px] px-[9.6px]'
            onClick={() => handleButtonClick(4)}
            style={active === 4 ? {background:'#fff',color:'#00161F'} : {background:"#EBEEEF80",color:'#616161'} }
          >
            Career Goals
          </div>
        </div>

        {active === 1 && <YourProfile setActive={setActive} /> }
        {active === 2 && <Credentials /> }
        {active === 3 && <Resume /> }
        {active === 4 && <Career /> }

      </div>

    </div>
  )
}

export default Profile
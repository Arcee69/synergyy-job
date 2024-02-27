import React from 'react'
import { useNavigate } from 'react-router-dom'


import WelcomePic from "../../assets/img/Illustration.png"
import WelcomePicMobile from "../../assets/img/Illustration_mobile.png"
import Onboarding from "../../assets/img/onboarding_img.png"
import LogoHome from "../../assets/svg/logo.svg"

import MiniHeader from '../../layouts/HompageLayout/MiniHeader';

const WelcomePage = () => {

    const navigate = useNavigate()

    const firstName = sessionStorage.getItem("firstName")

  return (
    <div className='bg-[#fff] w-full flex flex-col lg:flex-row overflow-x-hidden h-auto'>
        <div className='flex lg:hidden' >
          <MiniHeader />
        </div>
        <div className='h-auto hidden px-[68px]  lg:flex flex-col gap-[86px] py-[30px] w-[40%] bg-[#F6F6F6]'>
            <img src={LogoHome} alt='LogoHome' className='cursor-pointer w-[108px] h-[26px]' onClick={() => navigate("/")} />
            <img src={Onboarding} alt='Onboarding' className='w-[356px] h-[358px]' /> 
        </div>
        <div className="w-full lg:w-[55%] flex mt-[100px] mb-[40px] lg:mb-0 lg:mt-0 flex-col items-center animate__animated animate__fadeInUp  gap-6 lg:py-[44px]"> {/* ' w-[297px] lg:w-[430px] bg-[#fff]  px-6 py-8 flex flex-col items-center gap-6' */}
            <img src={WelcomePic} alt='Welcome' className='hidden lg:flex w-[330px] h-[330px]'/>
            <img src={WelcomePicMobile} alt='Welcome' className='w-[297px] h-[297px] flex lg:hidden'/>
            <div className='flex flex-col  w-[297px] lg:w-[430px]  gap-[8px] items-center mt-6'>
                <p className="font-bold lg:font-semibold font-mont text-[26px] lg:text-[32px]">{`Welcome ${firstName}`}</p>
                <p className='font-mont text-center text-[#000709] text-sm lg:text-base'>You’re one step closer to achieving your dreams. create your profile to begin.</p>
            </div>
            <div className='flex flex-col items-center w-[211px] lg:w-[243px] h-[95px] gap-[23px]'>
                <button
                    className= "lg:border lg:border-[#000709] w-[211px] lg:w-[243px] font-mont flex items-center  rounded-[6px] justify-center mt-2 h-[48px] bg-[#FDB181] text-base p-2  text-center"
                    type="submit"
                    onClick={() => {navigate("/onboarding-page"); window.scroll(0, 0)}}
                >
                    <p className='text-[#00141B] text-base font-bold'>Create Job Profile</p>
                </button>
                <p className='text-[#667A81] text-base font-semibold font-mont' onClick={() => {navigate("/congratulations"); window.scroll(0, 0)}}>
                    Skip
                </p>
            </div>
        </div>
        <div className='w-full h-full bg-[#F6F6F6] px-[38px] pb-24 lg:hidden flex flex-col gap-[86px] py-[40px]'>
            <img src={Onboarding} alt='Onboarding' className='w-[356px] h-[358px]' /> 
        </div>
    </div>
  )
}

export default WelcomePage
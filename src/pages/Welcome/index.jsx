import React from 'react'
import { useNavigate } from 'react-router-dom'


import WelcomePic from "../../assets/img/Illustration.png"
import WelcomePicMobile from "../../assets/img/Illustration_mobile.png"

const WelcomePage = () => {

    const navigate = useNavigate()

    const firstName = sessionStorage.getItem("firstName")

  return (
    <div className='lg:bg-[#FAFAFA] w-full flex justify-center py-[84px]'>
        <div className='rounded-lg w-[297px] lg:w-[430px] bg-[#fff] lg:border lg:border-[#CCD3D5] h-[676px] px-6 py-8 flex flex-col items-center gap-6'>
            <img src={WelcomePic} alt='Welcome' className='hidden lg:flex w-[330px] h-[330px]'/>
            <img src={WelcomePicMobile} alt='Welcome' className='w-[297px] h-[297px] flex lg:hidden'/>
            <div className='flex flex-col gap-[8px] items-center mt-6'>
                <p className="font-bold lg:font-semibold font-mont text-[26px] lg:text-[32px]">{`Welcome ${firstName}`}</p>
                <p className='font-mont text-center text-[#000709] text-sm lg:text-base'>You’re one step closer to achieving your dreams. create your profile to begin.</p>
            </div>
            <div className='flex flex-col items-center w-[211px] lg:w-[243px] h-[95px] gap-[23px]'>
                <button
                    className= "lg:border lg:border-[#000709] w-[211px] lg:w-[243px] font-mont flex items-center  rounded-[6px] justify-center mt-2 h-[48px] bg-[#FBA599] text-base p-2  text-center"
                    type="submit"
                    onClick={() => {navigate("/onboarding"); window.scroll(0, 0)}}
                >
                    <p className='text-[#00141B] text-base font-bold'>Create Job Profile</p>
                </button>
                <p className='text-[#667A81] text-base font-semibold font-mont' onClick={() => {navigate("/congratulations"); window.scroll(0, 0)}}>
                    Skip
                </p>
            </div>
        </div>
    </div>
  )
}

export default WelcomePage
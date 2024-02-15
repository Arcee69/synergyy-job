import React from 'react'
import Logo from "../../assets/svg/logo.svg"
import { MdKeyboardArrowDown } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();

  return (
    <div className='w-full flex items-center justify-between px-[40px] py-[24px] fixed z-10 bg-[#fff] '>
        <img src={Logo} alt='logo' className='cursor-pointer' />
        <div className='flex items-center gap-8'>
            <p className='text-primaryColor text-base font-medium cursor-pointer'>Home</p>
            <a href="#solutions" className='flex gap-1 items-center text-primaryColor text-base font-medium cursor-pointer'>Solutions </a>
            <p className='text-primaryColor text-base font-medium hidden cursor-pointer'>Pricing</p>
            <p className='text-primaryColor text-base font-medium cursor-pointer' onClick={() => navigate("/jobs")}>Talent Network</p>
        </div>
        <div className='flex items-center gap-3.5 '>
            {/* <button
                onClick={() => navigate("/pro")}
                type='submit' 
                className='w-[154px] border border-primaryColor p-2 bg-WHITE-_100 text-primaryColor rounded-lg font-mont font-semibold text-base'
            >
                Ask a Pro
            </button> */}
            <button
                onClick={() => navigate("/access")}
                type='submit' 
                className='w-[124px] border animate__animated  animate__repeat-2 animate__shakeX  border-primaryColor p-2 bg-secondaryColor text-primaryColor rounded-lg font-mont font-semibold text-base'
            >
                Start Hiring
            </button>
        </div>
    </div>
  )
}

export default Header
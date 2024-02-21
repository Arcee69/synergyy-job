import React, { useState } from 'react';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { useNavigate, Link } from 'react-router-dom';

import Logo from "../../assets/svg/logo.svg"
import { RxLightningBolt } from 'react-icons/rx';

const MobileNavbar = ({ handleClose }) => {
    const [isOpen, setIsOpen] = useState(false)
  

    const navigate = useNavigate()


  return (
    <div className='p-4'>
      <div className='w-full flex flex-row justify-between items-center'>
            <div className="w-full flex " onClick={() => {navigate("/"), handleClose()} }>
                <img src={Logo} alt="logo" loading="lazy" className="h-[30%] w-[30%] " />
            </div>
        </div>
      <div className='mx-auto flex flex-col gap-3 p-10 justify-center text-center items-center'>
        <div className='font-medium cursor-pointer text-lg' onClick={() => {navigate("/"), handleClose()}}>Home</div>
        <div className='font-medium cursor-pointer text-lg' onClick={() => {navigate("/about"), handleClose()}}>About us</div>
        <div className='font-medium cursor-pointer text-lg' onClick={() => {navigate("/services"), handleClose()}}>Services</div>
        <div className='font-medium cursor-pointer text-lg' onClick={() => {navigate("/contact"), handleClose()}}>Contact Us</div>
      </div>

      <div className='flex flex-col items-center mx-auto gap-4 w-[320px]'>
            <button className='border w-[145px] border-[#050505] h-[48px] rounded-lg p-2'>+44 7762 293319</button>
            <button className='flex items-center bg-[#109E92] p-2 w-[145px] h-[48px] rounded-lg justify-center text-[#fff]'>
                <RxLightningBolt className="" /> Get in touch
            </button>
        </div>

    </div>
  )

}

export default MobileNavbar;

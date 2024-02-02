import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";

import Logo from "../../assets/svg/logo.svg"

const MiniHeader = () => {
  return (
    <div className='w-full'>
        <div className='w-[358px] mx-auto mt-8 h-[58px] bg-[#FAFAFA] py-[16px] px-[24px] rounded-xl flex justify-between items-center'>
            <img src={Logo} alt='logo' className='w-[113px] h-[25px]' />
            <RxHamburgerMenu className='w-[21px] h-[16px]'/>
        </div>

    </div>
  )
}

export default MiniHeader
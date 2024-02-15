import React, { useState } from 'react'

import Hamburger from "../../assets/img/hamburger.png"
import Logo from "../../assets/svg/logo.svg"
import MobileNavBar from './MobileNavBar'

const MiniHeader = () => {
  const [open, setOpen] = useState(false)

  return (
    <div className='w-full fixed z-10'>
        <div className='w-[358px] mx-auto mt-8 h-[58px] bg-[#FAFAFA] py-[16px] px-[24px] rounded-xl flex justify-between items-center'>
            <img src={Logo} alt='logo' className='w-[113px] h-[25px]' />
            <img src={Hamburger} alt='logo'  className='w-[21px] h-[16px]' onClick={() => setOpen(true)}/>
        </div>
        {open && <MobileNavBar handleClose={() => setOpen(false)} /> }
    </div>
  )
}

export default MiniHeader
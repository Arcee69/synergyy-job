import React, { useState } from 'react'
import Track from './components/Track'
import Credentials from './components/Credentials'
import MiniHeader from '../../layouts/HompageLayout/MiniHeader'
import { useNavigate } from 'react-router-dom'

import Onboarding from "../../assets/img/onboarding_img.png"
import LogoHome from "../../assets/svg/logo.svg"
import Location from './components/Location'
import Skills from './components/Skills'
import Work from './components/Work'

const OnboardingPage = () => {
    const [active, setActive] = useState(4) 

    const navigate = useNavigate()

    const handleChangeButton = (value) => {
        setActive(value)
    }

  return (
    <div className='bg-[#fff] w-full flex flex-col lg:flex-row overflow-x-hidden h-auto'> {/*  w-full flex justify-center  lg:py-[84px] */}
        <div className='flex lg:hidden' >
          <MiniHeader />
        </div>
        <div className='h-auto hidden px-[68px]  lg:flex flex-col gap-[86px] py-[30px] w-[40%] bg-[#F6F6F6]'>
            <img src={LogoHome} alt='LogoHome' className='cursor-pointer w-[108px] h-[26px]' onClick={() => navigate("/")} />
            <img src={Onboarding} alt='Onboarding' className='w-[356px] h-[358px]' /> 
        </div>
        <div className={`${active === "Credentials" ? "lg:h-[606px] bg-[#FAFAFA] lg:bg-[#fff] " : " bg-[#fff]"}  lg:w-[55%] mt-[100px] lg:mt-0  py-8 flex flex-col items-center gap-6`}>
            <div className='flex gap-0.5'>
                <div className='bg-[#EB6E2C] w-[69px] h-[4px] lg:h-[12px]'></div>
                <div className={`${active > 1  ? "bg-[#EB6E2C]" : "bg-[#E3E7E8]"} w-[69px] h-[4px] lg:h-[12px]`}></div>
                <div className={`${active > 2  ? "bg-[#EB6E2C]" : "bg-[#E3E7E8]"} w-[69px] h-[4px] lg:h-[12px]`}></div>
                <div className={`${active > 3  ? "bg-[#EB6E2C]" : "bg-[#E3E7E8]"} w-[69px] h-[4px] lg:h-[12px]`}></div>
                <div className={`${active > 4  ? "bg-[#EB6E2C]" : "bg-[#E3E7E8]"} w-[69px] h-[4px] lg:h-[12px]`}></div>
            </div>
            {active === 1 && <Track handleChangeButton={handleChangeButton} />}
            {active === 2 && <Location handleChangeButton={handleChangeButton} />}
            {active === 3 && <Credentials handleChangeButton={handleChangeButton} />}
            {active === 4 && <Work handleChangeButton={handleChangeButton} />}
            {active === 5 && <Skills />}
        </div>
        <div className='w-full h-full bg-[#F6F6F6] px-[38px] pb-24 lg:hidden flex flex-col gap-[86px] py-[40px]'>
            <img src={Onboarding} alt='Onboarding' className='w-[356px] h-[358px]' /> 
        </div>
    </div>
  )
}

export default OnboardingPage
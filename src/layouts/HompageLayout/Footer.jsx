import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";

import Logo from "../../assets/svg/logo.svg"
import Apple from "../../assets/svg/apple-a.svg"
import Google from "../../assets/svg/google-play-a.svg"
// import Twitter from "../../assets/svg/twitter-a.svg"
// import Linkedin from "../../assets/svg/linkedin-a.svg"
// import Instagram from "../../assets/svg/instagram-a.svg"

import Twitter from "../../assets/svg/twitter_tiny.svg"
import Linkedin from "../../assets/svg/linkedin_tiny.svg"
import Instagram from "../../assets/svg/instagram_tiny.svg"

import Big from "../../assets/img/synergyy_big.png"

const Footer = () => {
    const [openSynergyy, setOpenSynergyy] = useState(false)
    const [openSolutions, setOpenSolutions] = useState(false)
    const [openResources, setOpenResources] = useState(false)

    const navigate = useNavigate()

    const handleSynergyy = () => {
        setOpenSynergyy(prev => !prev)
    }

    const handleSolutions = () => {
        setOpenSolutions(prev => !prev)
    }
    const handleResources = () => {
        setOpenResources(prev => !prev)
    }

  return (
    <div className='bg-WHITE-_100 w-full' >
                                        {/* Mobile */}
        <div className='mt-[8px] lg:hidden flex mx-[24px] flex-col gap-[32px] '>
            <img src={Logo} alt='logo' className='w-[268px] h-[59px]' />
            <div className='flex flex-col  gap-5'>
                <p className='font-mont text-base  font-semibold text-primaryColor'>Get in touch</p>
                <p className='text-base text-primaryColor  font-medium font-mont'>Hello@synergyy.io</p>
                <div className='flex gap-6'>
                    <img src={Twitter} alt='twitter' className='w-[22px] h-[18px]' />
                    <img src={Linkedin} alt='linkedin' className='w-[22px] h-[18px]'/>
                    <img src={Instagram} alt='instagram' className='w-[22px] h-[18px]'/>
                </div>
            </div>
            <div className="flex flex-col mt-[14px] cursor-pointer" onClick={() => handleSynergyy()} style={{    marginBottom:' -6%'}}>
                <div className='flex items-center justify-between'>
                    <p className='font-mont text-[18px] lg:text-base whitespace-nowrap font-semibold text-primaryColor'>Synergyy</p>
                    {openSynergyy ? <MdKeyboardArrowDown className="text-[#8D8D8D] w-4 h-4" /> : <MdKeyboardArrowRight className="text-[#8D8D8D] w-4 h-4"/>}
                </div>
                <div className='mt-5'>
                {
                    openSynergyy && (
                        <div className='flex flex-col gap-[18px]'>
                            <p className='text-sm lg:text-sm text-primaryColor font-medium font-mont' onClick={() => navigate("/")}>Home</p>
                            <p className='text-sm lg:text-sm text-primaryColor font-medium font-mont'>FAQ</p>
                        </div>
                    )
                }
                </div>
            </div>
            <div className="flex flex-col cursor-pointer" onClick={() => handleSolutions()}  style={{    marginBottom:' -6%'}}>
                <div className='flex items-center justify-between'>
                    <p className='font-mont text-[18px] lg:text-base font-semibold text-primaryColor'>Solutions</p>
                    {openSolutions ? <MdKeyboardArrowDown className="text-[#8D8D8D] w-4 h-4"/> : <MdKeyboardArrowRight className="text-[#8D8D8D] w-4 h-4" />}
                </div>
                <div className='mt-5'>
                {
                    openSolutions && (
                        <div className='flex flex-col gap-[18px]'>
                            <p onClick={() => navigate("/access")} className='whitespace-nowrap text-sm text-primaryColor cursor-pointer font-medium font-mont'>Source Talent</p>
                            <p className='text-sm lg:text-sm text-primaryColor font-medium font-mont'>Employer Of Record</p>
                            <p className='text-sm lg:text-sm text-primaryColor font-medium font-mont'>Global Payroll</p>
                        </div>
                    )
                }
                </div>
            </div>
            <div className="flex flex-col cursor-pointer" onClick={() => handleResources()}  style={{    marginBottom:' -6%'}}>
                <div className='flex items-center justify-between'>
                    <p className='font-mont text-[18px] lg:text-base font-semibold text-primaryColor'>Resources</p>
                    {openResources ? <MdKeyboardArrowDown className="text-[#8D8D8D] w-4 h-4"/> : <MdKeyboardArrowRight className="text-[#8D8D8D] w-4 h-4" />}
                </div>
                <div className='mt-5'>
                {
                    openResources && (
                        <div className='flex flex-col gap-[18px]'>
                            <p onClick={() => navigate("https://synergyy.hashnode.dev/")} className='text-sm whitespace-nowrap lg:text-sm cursor-pointer text-primaryColor font-medium font-mont'>Blog </p>
                            <p className='text-sm lg:text-sm text-primaryColor font-medium font-mont'>Hiring Guide </p>
                        </div>
                    )
                }
                </div>
            </div>

        </div>
                                        {/* Laptop */}
        <div className='mt-[56px] hidden lg:flex flex-col lg:flex-row gap-[40px] lg:gap-[154px] mx-[80px]'>
            <img src={Logo} alt='logo' className='w-[268px] h-[59px]' />
            <div className='flex flex-col lg:flex-row gap-[80px] '>
                <div className='flex flex-col items-center lg:items-start gap-5'>
                    <p className='font-mont text-[22px] lg:text-base whitespace-nowrap font-semibold text-primaryColor'>Synergyy</p>
                    <div className='flex flex-col items-center lg:items-start gap-[18px]'>
                        <p className='text-sm lg:text-sm text-primaryColor font-medium font-mont'>Home</p>
                        <p className='text-sm lg:text-sm text-primaryColor font-medium font-mont'>FAQ</p>
                    </div>
                </div>
                <div className='flex flex-col items-center lg:items-start gap-5'>
                    <p className='font-mont text-[22px] lg:text-base font-semibold text-primaryColor'>Solutions</p>
                    <div className='flex flex-col items-center lg:items-start gap-[18px]'>
                        <p onClick={() => navigate("/access")} className='text-[20px] whitespace-nowrap lg:text-sm text-primaryColor cursor-pointer font-medium font-mont'>Source Talent</p>
                        <p className='text-sm lg:text-sm text-primaryColor font-medium font-mont'>Employer Of Record</p>
                        <p className='text-sm lg:text-sm text-primaryColor font-medium font-mont'>Global Payroll</p>
                    </div>
                </div>
                <div className='flex flex-col items-center lg:items-start gap-5'>
                    <p className='font-mont text-[22px] lg:text-base font-semibold whitespace-nowrap text-primaryColor'>Resources</p>
                    <div className='flex flex-col items-center lg:items-start gap-[18px]'>
                        <p onClick={() => navigate("/register")} className='text-sm whitespace-nowrap lg:text-sm cursor-pointer text-primaryColor font-medium font-mont'>Blog </p>
                        <p className='text-sm lg:text-sm text-primaryColor font-medium font-mont'>Hiring Guide </p>
                    </div>
                </div>
            </div>

            <div className='flex flex-col items-center lg:items-start  gap-5'>
                <p className='font-mont text-[22px] lg:text-base mx-auto font-semibold text-primaryColor'>Get in touch</p>
                <p className='text-[20px] lg:text-sm text-primaryColor  mx-auto font-medium font-mont'>hello@synergyy.io</p>
                <div className='flex mx-auto gap-6'>
                    <img src={Twitter} alt='twitter' className='w-5 h-5' />
                    <img src={Linkedin} alt='linkedin' className='w-5 h-5'/>
                    <img src={Instagram} alt='instagram' className='w-5 h-5'/>
                </div>
            </div>

            {/* <div className='flex flex-col items-center lg:items-start  gap-5'>
                <p className='font-mont text-[22px] lg:text-base font-semibold text-primaryColor'>Job Seekers Apps</p>
                <div className='flex flex-col gap-3'>
                    <div className='bg-primaryColor animate__animated animate__repeat-2 animate__shakeX w-[187px] h-[56px] p-2 gap-4 flex items-center justify-center'>
                        <img src={Apple} alt='Apple-Logo' />
                        <p className='font-mont text-WHITE-_100 text-[13px]'>Get on Iphone</p>
                    </div>
                    <div className='bg-primaryColor animate__animated  animate__repeat-2 animate__shakeX w-[187px] h-[56px] p-2 gap-4 flex items-center justify-center'>
                        <img src={Google} alt='GooglePlay-Logo' />
                        <p className='font-mont text-WHITE-_100 text-[13px]'>Get on Android</p>
                    </div>
                </div>
                <p className='text-primaryColor text-base font-medium font-mont'>Hello@synergyng.com</p>
                <div className='flex w-full items-center gap-6 justify-center'>
                    <img src={Twitter} alt='twitter' className='w-5 h-5' />
                    <img src={Linkedin} alt='linkedin' className='w-5 h-5' />
                    <img src={Instagram} alt='instagram' className='w-5 h-5' />
                </div>
            </div> */}
        </div>

        <div className='flex flex-col lg:flex-row  lg:mt-[44px] items-center justify-between  py-[20px] lg:py-[20px]   lg:px-[80px] w-full '>
            <div className='lg:hidden flex justify-center mt-[24px] gap-[16px] items-center w-full'>
                <div className='flex items-center gap-[8px]'>
                    <p className='font-mont text-sm text-primaryColor'>Privacy Policy</p>
                </div>
                <p className='font-mont text-sm text-primaryColor'>Terms & Conditions</p>
            </div>
            <p className='text-[#667A81] font-mont font-medium text-sm'>© 2024 Synergyy, Inc. All rights reserved</p>
            <div className='hidden lg:flex items-center gap-3 '>
                <p className='font-mont text-sm text-primaryColor'>Privacy Policy</p>
                <p className='font-mont text-sm text-primaryColor'>Terms & Conditions</p>
            </div>
        </div>
        <div className='mt-[37px]'>
            <img src={Big} alt='synergy-text' />
        </div>
    </div>
  )
}

export default Footer
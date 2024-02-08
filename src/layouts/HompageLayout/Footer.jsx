import React from 'react'
import { useNavigate } from 'react-router-dom'

import Logo from "../../assets/svg/logo.svg"
import Apple from "../../assets/svg/apple-a.svg"
import Google from "../../assets/svg/google-play-a.svg"
import Twitter from "../../assets/svg/twitter-a.svg"
import Linkedin from "../../assets/svg/linkedin-a.svg"
import Instagram from "../../assets/svg/instagram-a.svg"

const Footer = () => {

    const navigate = useNavigate()

  return (
    <div className='bg-WHITE-_100 w-full' > {/* data-aos="fade-up" data-aos-duration="3000"   */}
        <div className='mt-[56px] flex flex-col lg:flex-row gap-[40px] lg:gap-[154px] mx-[80px]'>
            <img src={Logo} alt='logo' className='w-[268px] h-[59px]' />
            <div className='flex flex-col lg:flex-row gap-[80px] '>
                <div className='flex flex-col items-center lg:items-start gap-5'>
                    <p className='font-mont text-[22px] lg:text-base whitespace-nowrap font-semibold text-primaryColor'>Synergyy</p>
                    <div className='flex flex-col items-center lg:items-start gap-[18px]'>
                        <p className='text-[20px] lg:text-sm text-primaryColor hidden font-medium font-mont'>About us</p>
                        <p className='text-[20px] lg:text-sm text- whitespace-nowrap font-medium font-mont'>Contact us</p>
                        <p className='text-[20px] lg:text-sm text-primaryColor hidden font-medium font-mont'>FAQ</p>
                        <p className='text-[20px] lg:text-sm text-primaryColor hidden font-medium font-mont'>Updates</p>
                        <p className='text-[20px] lg:text-sm text-primaryColor hidden font-medium font-mont'>Testimonials</p>
                    </div>
                </div>
                <div className='flex flex-col items-center lg:items-start gap-5'>
                    <p className='font-mont text-[22px] lg:text-base font-semibold text-primaryColor'>Startups</p>
                    <div className='flex flex-col items-center lg:items-start gap-[18px]'>
                        <p onClick={() => navigate("/access")} className='text-[20px] whitespace-nowrap lg:text-sm text-primaryColor cursor-pointer font-medium font-mont'>Start Hiring</p>
                        <p className='text-[20px] lg:text-sm text-primaryColor hidden font-medium font-mont'>Job</p>
                        <p className='text-[20px] lg:text-sm text-primaryColor hidden font-medium font-mont'>Advice</p>
                        <p className='text-[20px] lg:text-sm text-primaryColor hidden font-medium font-mont'>Companies</p>
                    </div>
                </div>
                <div className='flex flex-col items-center lg:items-start gap-5'>
                    <p className='font-mont text-[22px] lg:text-base font-semibold whitespace-nowrap text-primaryColor'>Job Seekers</p>
                    <div className='flex flex-col items-center lg:items-start gap-[18px]'>
                        <p onClick={() => navigate("/register")} className='text-[20px] whitespace-nowrap lg:text-sm cursor-pointer text-primaryColor font-medium font-mont'>Get Hired </p>
                        <p className='text-[20px] lg:text-sm text-primaryColor font-medium hidden font-mont' >Start Hiring Today </p>
                        <p className='text-[20px] lg:text-sm text-primaryColor font-medium hidden font-mont'>Head Hunting Services</p>
                    </div>
                </div>
            </div>
            <div className='flex flex-col items-center lg:items-start  gap-5'>
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
            </div>
        </div>
        <div className='flex flex-col lg:flex-row mt-[44px] items-center justify-between border border-solid border-x-0 border-b-0 py-[20px] lg:py-[20px]  border-[#334D57] lg:px-[80px] w-full '>
            <p className='text-[#667A81] font-mont font-medium text-sm'>© Copyright Synergyy 2024.</p>
            <div className='lg:hidden flex flex-col mt-[24px] gap-[16px] items-center w-full'>
                <div className='flex items-center gap-[8px]'>
                    <p className='font-mont text-sm text-primaryColor'>Privacy Policy</p>
                </div>
                <p className='font-mont text-sm text-primaryColor'>Terms & Conditions</p>
            </div>
            <div className='hidden lg:flex items-center gap-3 '>
                <p className='font-mont text-sm text-primaryColor'>Privacy Policy</p>
                <p className='font-mont text-sm text-primaryColor'>Terms & Conditions</p>
            </div>
        </div>
    </div>
  )
}

export default Footer
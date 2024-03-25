import React from 'react'
import { useNavigate } from 'react-router-dom'


import WelcomePic from "../../assets/img/Illustration.png"
import WelcomePicMobile from "../../assets/img/Illustration_mobile.png"
import Onboarding from "../../assets/img/onboarding_img.png"
import LogoHome from "../../assets/svg/logo.svg"
import Handshake from "../../assets/img/handshake.png"
import Marvis from "../../assets/img/marvis.png"
import Chat from "../../assets/img/chat.png"
import Offer from "../../assets/img/offer.png"
import Logo from "../../assets/svg/auth_logo.svg"

import MiniHeader from '../../layouts/HompageLayout/MiniHeader';

const WelcomePage = () => {

    const navigate = useNavigate()

    const firstName = localStorage.getItem("firstName")

  return (
    <div className='bg-[#fff] w-full flex flex-col lg:flex-row overflow-x-hidden h-auto'>
        <div className='flex lg:hidden' >
          <MiniHeader />
        </div>
        <div 
            className='h-auto hidden px-[68px]  lg:flex flex-col gap-[86px] py-[30px] w-[40%]'
            style={{ background:"linear-gradient(to bottom, #FDB18180, #FDB18100)" }}
        >
            <img src={LogoHome} alt='LogoHome' className='cursor-pointer w-[183px] h-[60px]' onClick={() => navigate("/")} />
            <div className='w-[491px] h-[433px] relative'>
                <img src={Handshake} alt='Handshake' className=' w-[338px] h-[288px]' />
                <img src={Marvis} alt='Marvis' className='w-[241px] h-[50px] absolute -top-5 right-20' />
                <img src={Offer} alt='Offer' className='w-[140px] h-[90px] absolute top-40 -left-14' />
                <img src={Chat} alt='Chat' className='w-[241px] h-[211px] absolute right-20 top-48' />
            </div>
        </div>
        <div className="w-full lg:w-[55%] flex mt-[100px] mb-[40px] lg:mb-0 lg:mt-0 flex-col items-center animate__animated animate__fadeInUp  gap-6 lg:py-[44px]"> {/* ' w-[297px] lg:w-[430px] bg-[#fff]  px-6 py-8 flex flex-col items-center gap-6' */}
            <img src={Logo} alt='logo' className='flex lg:hidden' />
            <img src={WelcomePic} alt='Welcome' className='flex w-[137px] h-[188px] lg:w-[174px] lg:h-[238px]'/>
            <div className='flex flex-col  w-[297px] lg:w-[430px]  gap-[8px] items-center mt-6'>
                <p className="font-bold lg:font-semibold font-mont text-[26px] lg:text-[32px]">{`Welcome ${firstName}`}</p>
                <p className='font-mont text-center text-[#000709] text-sm lg:text-base'>You’re one step closer to achieving your dreams. create your profile to begin.</p>
            </div>
            <div className='flex flex-col items-center w-full lg:w-[420px] h-[48px] gap-[23px]'>
                <button
                    className= "border border-[#000709] w-[90%] lg:w-[420px] font-mont flex items-center  rounded-[6px] justify-center mt-2 h-[48px] bg-[#FDB181] text-base p-2  text-center"
                    type="submit"
                    onClick={() => {navigate("/onboarding-page"); window.scroll(0, 0)}}
                >
                    <p className='text-[#00141B] text-base font-bold'>Create Job Profile</p>
                </button>
                {/* <p className='text-[#667A81] text-base font-semibold font-mont' onClick={() => {navigate("/congratulations"); window.scroll(0, 0)}}>
                    Skip
                </p> */}
            </div>
        </div>
        {/* <div className='w-full h-full bg-[#F6F6F6] px-[38px] pb-24 lg:hidden flex flex-col gap-[86px] py-[40px]'>
            <img src={Onboarding} alt='Onboarding' className='w-[356px] h-[358px]' /> 
        </div> */}
    </div>
  )
}

export default WelcomePage
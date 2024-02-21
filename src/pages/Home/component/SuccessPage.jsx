import React from 'react'
import { useNavigate } from 'react-router-dom'
import DesktopBg from "../../../assets/img/Africa_Design.png"
import MobileBg from "../../../assets/img/Africa_Design_Mobile.png"
import Rafiki from "../../../assets/img/rafiki.png"
import Logo from "../../../assets/svg/logo.svg"

import Apple from "../../../assets/svg/apple_mobile.svg"
import Google from "../../../assets/svg/google-play-a.svg"

const SuccessPage = () => {
    const navigate = useNavigate()
  return (
    <div
        style={{ backgroundImage: `url(${window.innerWidth <= 1024 ? MobileBg : DesktopBg})`, backgroundSize: 'cover', backgroundRepeat: "no-repeat"}} 
        className='w-full flex flex-col pb-[127px]'
    >
        <div className='w-full py-[24px] cursor-pointer px-[20px]' onClick={() => navigate("/")}> {/* h-[74px] */}
            <img src={Logo} alt='logo' />
        </div>
        <div className='w-full mt-[12px] lg:mt-[22px]  flex items-center justify-center'> {/* lg:mt-[53px] mt-[42px] */}
            <div className='lg:w-[521px]  py-[32px] px-[56px] flex flex-col items-center gap-5 lg:rounded-[40px] lg:border lg:border-solid lg:border-[#00141B]'> {/* py-[72px] gap-10 lg:w-[721px] */}
                <p className='text-[#000] font-mont font-bold text-[24px] '>Request sent</p> {/* lg:text-[36px] */}
                <img src={Rafiki} alt='rafiki' className='w-[160px] h-[160px]  ' /> {/*  lg:w-[227px] lg:h-[227px] */}
                <p className='lg:w-[408px] text-sm font-medium text-center'> {/* lg:text-[19px] */}
                    You've successfully submitted your talent request. Our talent acquisition specialist will get
                    in touch. Happy hiring!
                </p>
                <p className='font-mont text-center text-sm  text-[#000] font-medium'>Find more exciting opportunities on Synergyy</p> {/* lg:text-[19px] */}
                <div className='flex flex-col lg:flex-row gap-6'>
                    <div onClick={() => window.open("https://apps.apple.com/ng/app/synergyy-jobs-trends-vibes/id6447760204")}  className='border cursor-pointer border-[#00141B] rounded-lg w-[200px] h-[56px] p-2 gap-4 flex items-center justify-center'> {/* w-[238px] */}
                        <img src={Apple} alt='Apple-Logo' />
                        <p className='font-mont font-medium text-[#00141B] text-[13px]'>Get on Iphone</p>
                    </div>
                    <div onClick={() => window.open("https://play.google.com/store/apps/details?id=com.synergyng.synergy&pli=1")} className='border cursor-pointer border-[#00141B] rounded-lg w-[200px] h-[56px] p-2 gap-4 flex items-center justify-center'> {/* w-[238px] */}
                        <img src={Google} alt='GooglePlay-Logo' />
                        <p className='font-mont font-medium text-[#00141B] text-[13px]'>Get on Android</p>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default SuccessPage
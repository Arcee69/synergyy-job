import React from 'react'

import Logo from "../../assets/svg/auth_logo.svg"
import Chill from "../../assets/svg/chill.png"
import Rocket from "../../assets/svg/rocket-a.svg"
import Apple from "../../assets/svg/apple.svg"
import AppleMobile from "../../assets/svg/apple_mobile.svg"
import Google from "../../assets/svg/google-play.svg"

const Congratulations = () => {

  return (
    <div className='lg:bg-[#FAFAFA] w-full flex justify-center py-[84px]'>
        <div className='rounded-lg w-[430px] bg-[#fff] lg:border lg:border-[#CCD3D5] h-[659px] px-6 lg:py-8 flex flex-col items-center gap-8'>
            <img src={Logo} alt='logo' />
            <div className='flex flex-col'>
                <p className='text-[#00141B] font-mont text-[24px] lg:text-[26px] font-bold'>Congratulations!</p>
                <p className='font-mont text-sm lg:text-base text-[#10303D]'>You've submitted your profile.</p>
            </div>
            <div className='flex flex-col items-center gap-6'>
                <img src={Chill} alt='chill' className='w-[200px] h-[201px] lg:w-[240px] lg:h-[240px]'/>
                <div className='flex w-[295px] lg:w-[350px] flex-col gap-[8px] mt-[24px] lg:mt-0 items-center'>
                    <div className='flex items-center gap-[8px]'>
                        <p className='text-base font-mont text-[#00141B] font-medium'>Get the Synergyy App</p>
                        <img src={Rocket} alt='rocket' />
                    </div>
                        {window.innerWidth <= 1024 ? <p className='text-center font-mont text-base text-[#001A24]'>We'll help you get discovered and find the perfect opportunity.</p> : <p className='text-center text-[#00212D] font-mont text-base'>Get discovered, make connections and find the perfect opportunity for you </p>}
                </div>
            </div>
            <div className='flex flex-col lg:flex-row items-center gap-3'>
                <div onClick={() => window.open("https://apps.apple.com/ng/app/synergyy-jobs-trends-vibes/id6447760204")} className='bg-[#E3E7E8] lg:bg-primaryColor w-[295px] lg:w-[167px] cursor-pointer rounded-lg h-[49px] p-2 gap-4 flex items-center justify-center'>
                    <img src={Apple} alt='Apple-Logo' className='hidden lg:flex' />
                    <img src={AppleMobile} alt='Apple-Logo' className='flex lg:hidden' />
                    <p className='font-mont text-[#00212D] font-semibold lg:font-normal lg:text-WHITE-_100 text-[13px]'>Get on Iphone</p>
                </div>
                <div onClick={() => window.open("https://play.google.com/store/apps/details?id=com.synergyng.synergy&pli=1")} className='bg-[#E3E7E8] lg:bg-primaryColor w-[295px] cursor-pointer lg:w-[167px] h-[49px] rounded-lg p-2 gap-4 flex items-center justify-center'>
                    <img src={Google} alt='GooglePlay-Logo' />
                    <p className='font-mont text-[#00212D] font-semibold lg:font-normal lg:text-WHITE-_100 text-[13px]'>Get on Android</p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Congratulations
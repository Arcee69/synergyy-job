import React from 'react'

import Synergyy from "../../../assets/img/SYNERGYY.png"
import SynergyySmall from "../../../assets/img/SYNERGYY_small.png"

import Logo from "../../../assets/svg/auth_logo.svg"
import Hand from "../../../assets/img/hand.png"

import Chill from "../../../assets/svg/chill.png"
import Rocket from "../../../assets/svg/rocket-a.svg"
import Apple from "../../../assets/svg/apple.svg"
import AppleMobile from "../../../assets/svg/apple_mobile.svg"
import Google from "../../../assets/svg/google-play.svg"

const Download = () => {
  return (
    <div className="bg-[#fff] flex items-center relative justify-center flex-col w-full">
      <div className='w-[90%] lg:w-[732px] flex lg:relative lg:top-24 mt-10 lg:mt-0 lg:z-10 bg-[#fff] flex-col items-center mx-auto p-10 gap-6 justify-center rounded-lg shadow-2xl'>
        <img src={Logo} alt='logo' className='w-[48px] h-[48px]' />
        <div className='w-full lg:w-[454px] mx-auto flex flex-col gap-4 items-center'>
          <p className='font-mont font-bold text-[32px] text-center leading-[32px] text-[#00141B]'>Welcome to Synergyy</p>
          <p className='text-center text-base text-[#00212D]'>
            Get the full experience on the go! Download our mobile app to unlock seamless access to all platform features
          </p>
          <img src={Hand} alt='hand' className='w-[218px]  lg:w-[275px] mx-auto '/>
          <p className='text-[#00212D] font-mont text-base text-center'>
            Download the synergyy app and log in with your account.
          </p>
        </div>
        <div className='w-full lg:w-[382px] mx-auto flex flex-row items-center justify-center gap-4'>
          <div onClick={() => window.open("https://apps.apple.com/ng/app/synergyy-jobs-trends-vibes/id6447760204")} className='bg-primaryColor w-[155px]  lg:w-[167px] cursor-pointer rounded-lg h-[49px] p-2 gap-2 lg:gap-4 flex items-center justify-center'>
              <img src={Apple} alt='Apple-Logo' className='flex  w-[16px] h-[21px]' />
              {/* <img src={AppleMobile} alt='Apple-Logo' className='flex lg:hidden' /> */}
              <p className='font-mont font-semibold lg:font-normal text-WHITE-_100 text-xs lg:text-[13px]'>Get on Iphone</p>
          </div>
          <div onClick={() => window.open("https://play.google.com/store/apps/details?id=com.synergyng.synergy&pli=1")} className='bg-primaryColor w-[155px] cursor-pointer lg:w-[167px] h-[49px] rounded-lg p-2 gap-2 lg:gap-4 flex items-center justify-center'>
              <img src={Google} alt='GooglePlay-Logo' />
              <p className='font-mont font-semibold text-xs lg:font-normal text-WHITE-_100 lg:text-[13px]'>Get on Android</p>
          </div>
      </div>
      </div>
      <img src={Synergyy} alt='Synergyy' className='hidden lg:flex' />
      <img src={SynergyySmall} alt='SynergyySmall' className='flex lg:hidden' />
    </div>
  )
}

export default Download 

{/* <div className='lg:bg-[#FAFAFA] w-full flex justify-center py-[84px]'> */}
// <div className='rounded-lg w-[430px] bg-[#fff] lg:border lg:border-[#CCD3D5] h-[659px] px-6 lg:py-8 flex flex-col items-center gap-8'>
//     <img src={Logo} alt='logo' />
//     <div className='flex flex-col'>
//         <p className='text-[#00141B] font-mont text-[24px] lg:text-[26px] font-bold'>Download Our App</p>
//     </div>
//     <div className='flex flex-col items-center gap-6'>
//         <img src={Chill} alt='chill' className='w-[200px] h-[201px] lg:w-[240px] lg:h-[240px]'/>
//         <div className='flex w-[295px] lg:w-[350px] flex-col gap-[8px] mt-[24px] lg:mt-0 items-center'>
//             <div className='flex items-center gap-[8px]'>
//                 <p className='text-base font-mont text-[#00141B] font-medium'>Get the Synergyy App</p>
//                 <img src={Rocket} alt='rocket' />
//             </div>
//                 {window.innerWidth <= 1024 ? <p className='text-center font-mont text-base text-[#001A24]'>We'll help you get discovered and find the perfect opportunity.</p> : <p className='text-center text-[#00212D] font-mont text-base'>Get discovered, make connections and find the perfect opportunity for you </p>}
//         </div>
//     </div>
//     <div className='flex flex-col lg:flex-row items-center gap-3'>
//         <div onClick={() => window.open("https://apps.apple.com/ng/app/synergyy-jobs-trends-vibes/id6447760204")} className='bg-[#E3E7E8] lg:bg-primaryColor w-[295px] lg:w-[167px] cursor-pointer rounded-lg h-[49px] p-2 gap-4 flex items-center justify-center'>
//             <img src={Apple} alt='Apple-Logo' className='hidden lg:flex' />
//             <img src={AppleMobile} alt='Apple-Logo' className='flex lg:hidden' />
//             <p className='font-mont text-[#00212D] font-semibold lg:font-normal lg:text-WHITE-_100 text-[13px]'>Get on Iphone</p>
//         </div>
//         <div onClick={() => window.open("https://play.google.com/store/apps/details?id=com.synergyng.synergy&pli=1")} className='bg-[#E3E7E8] lg:bg-primaryColor w-[295px] cursor-pointer lg:w-[167px] h-[49px] rounded-lg p-2 gap-4 flex items-center justify-center'>
//             <img src={Google} alt='GooglePlay-Logo' />
//             <p className='font-mont text-[#00212D] font-semibold lg:font-normal lg:text-WHITE-_100 text-[13px]'>Get on Android</p>
//         </div>
//     </div>

// </div>
// </div>
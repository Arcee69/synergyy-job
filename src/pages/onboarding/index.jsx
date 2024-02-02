import React, { useState } from 'react'
import Track from './components/Track'
import Credentials from './components/Credentials'

const OnboardingPage = () => {
    const [active, setActive] = useState("Track")

    const handleChangeButton = (value) => {
        setActive(value)
    }

  return (
    <div className='bg-[#FAFAFA] w-full flex justify-center  lg:py-[84px]'>
        <div className={`${active === "Credentials" ? "lg:h-[606px] bg-[#FAFAFA] lg:bg-[#fff] " : " bg-[#fff]"} rounded-lg w-[430px] lg:border lg:border-[#CCD3D5] py-8 flex flex-col items-center gap-6`}>
            <div className='flex gap-0.5'>
                <div className='bg-[#FBA599] w-[190px] h-[4px] lg:h-[12px]'></div>
                <div className={`${active === "Credentials" ? "bg-[#FBA599]" : "bg-[#E3E7E8]"} w-[190px] h-[4px] lg:h-[12px]`}></div>
            </div>
            {active === "Track" && <Track handleChangeButton={handleChangeButton} />}
            {active === "Credentials" && <Credentials />}
        </div>
    </div>
  )
}

export default OnboardingPage
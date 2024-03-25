import React, { useState } from 'react'
import Track from './components/Track'
import Credentials from './components/Credentials'
import MiniHeader from '../../layouts/HompageLayout/MiniHeader'
import { useNavigate } from 'react-router-dom'

import Onboarding from "../../assets/img/onboarding_img.png"
import LogoHome from "../../assets/svg/sidebar_logo.svg"
import Logo from "../../assets/svg/auth_logo.svg"
import Location from './components/Location'
import Skills from './components/Skills'
import Work from './components/Work'
import Adventure from './components/Adventure'
import Achievement from './components/Achievement'
import Level from './components/Level'
import Professional from './components/Professional'
import Chemistry from './components/Chemistry'

const OnboardingPage = () => {
    const [active, setActive] = useState(1) 

    const navigate = useNavigate()

    const handleChangeButton = (value) => {
        setActive(value)
    }

  return (
    <div className='bg-[#fff] lg:bg-[#F1F1F1] w-full h-screen flex pt-[40px] pl-4 lg:pl-[80px] flex-col lg:flex-row overflow-x-hidden h-auto'> 
        {/* <div className='flex lg:hidden' >
          <MiniHeader />
        </div> */}
        <img src={LogoHome} alt='LogoHome' className='cursor-pointer hidden lg:flex w-[183px] h-[60px]' onClick={() => navigate("/")} />
        <img src={Logo} alt='logo' className='flex lg:hidden w-[31px] h-[32px]' onClick={() => navigate("/")}/>

        <div className="bg-[#fff] lg:bg-[#F1F1F1] w-full py-8">
            {active === 1 && <Location handleChangeButton={handleChangeButton} />}
            {active === 2 && <Track handleChangeButton={handleChangeButton} />}
            {active === 3 && <Adventure handleChangeButton={handleChangeButton} />}
            {active === 4 && <Achievement handleChangeButton={handleChangeButton} />}
            {active === 5 && <Level handleChangeButton={handleChangeButton} />}
            {active === 6 && <Professional handleChangeButton={handleChangeButton} />}
            {/* {active === 7 && <Chemistry handleChangeButton={handleChangeButton} />} */}
            {/* {active === 3 && <Credentials handleChangeButton={handleChangeButton} />}
            {active === 4 && <Work handleChangeButton={handleChangeButton} />}
            {active === 5 && <Skills />} */}
        </div>
    </div>
  )
}

export default OnboardingPage
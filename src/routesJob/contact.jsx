import React from 'react'
import Navlight from '../ComponentsJob/nav/navlight'
import Background from '../assets/img/bg3.png'
import Background2 from '../assets/img/bg-res.png'
import ContactForm from '../ComponentsJob/forms/contactForm'
import  Twitter  from '../assets/svg/twitter3.svg'
import  Linkedin  from '../assets/svg/linkedin3.svg'
import  Instagram  from '../assets/svg/instagram2.svg'
import Footer from '../ComponentsJob/footer/footer'
import Foot from '../ComponentsJob/footer/foot'
import { Link } from 'react-router-dom'
import Hamburger from '../ComponentsJob/hamburger'

export default function Contact({hamburger, setHamburger}) {
    return (
        <div className='synergy-contact'>
            <Navlight setHamburger={setHamburger} buttons={true}/>
            {hamburger && <Hamburger hamburger={hamburger} setHamburger={setHamburger} /> }
            <div className='w-full flex lg:flex-row flex-col-reverse lg:px-10 px-[16px] mid:px-[40px] lg:pt-0 pt-6 pb-0 sm:pb-[43px] lg:gap-5 gap-6'>
                <div className='lg:w-[721px] w-full bg-white phone:bg-green-300  rounded-[40px] px-[16px] mid:px-[56px] pt-[26px] pb-[8.45px] items-center'>
                    <div className='flex flex-col gap-12'>
                        <h1 className='lg:text-[32px] text-[24px] font-bold text-background opacity-[0.8]'>CONTACT US</h1>
                        <ContactForm />
                        <div className='flex flex-col items-center gap-5'>
                            <div className='flex gap-4'>
                            <Link to={'https://twitter.com/TheSynergyNG?t=JljJq5kxUxMMGUYseXi9Lw&s=09'}><Twitter /></Link>
                        <Link to={'https://www.linkedin.com/company/synergy-ng'}><Linkedin /></Link>
                        <Link to={'https://instagram.com/synergy.ng?igshid=MzRlODBiNWFlZA=='}><Instagram /></Link>
                            </div>
                            <div className='items-center flex flex-col gap-[18px]'>
                                <p className='text-[14px] text-background opacity-[0.69] font-medium'>2A Osara Close, Maitama, Abuja</p>
                                <p className='text-[14px] text-background opacity-[0.69] font-medium lowercase'>Hello@synergyy.io </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='hidden phone:flex'>
                    <img src={Background} alt='synergyy contact' className='lg:block hidden h-full w-full object-fit' />
                    <img src={Background2} alt='synergyy contact' className='lg:hidden block w-full h-full object-fit' />
                </div>
            </div>
            <div className='hidden phone:block'>
            <Footer />
            <Foot />      
            </div>
        </div>
    )
}

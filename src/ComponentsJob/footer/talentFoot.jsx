import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import  Twitter  from '../../assets/svg/twitter.svg'
import  Instagram  from '../../assets/svg/instagram.svg'
import  Linkedin  from '../../assets/svg/linkedin.svg'
import Logo  from '../../assets/img/logo3.png'

export default function TalentFoot() {
    const navigate = useNavigate()
    const year = new Date().getFullYear();

    return (
        <div className='mid:pt-[67.5px] pt-[50px] pb-10'>
            <div className='px-20 lg:flex hidden justify-end gap-4'>
                <Link to={'https://twitter.com/TheSynergyNG?t=JljJq5kxUxMMGUYseXi9Lw&s=09'}><Twitter /></Link>
                <Link to={'https://www.linkedin.com/company/synergy-ng'}><Linkedin /></Link>
                <Link to={'https://instagram.com/synergy.ng?igshid=MzRlODBiNWFlZA=='}><Instagram /></Link>
            </div>
            <div className='pb-20 mid:px-20 '>
                <div className='lg:flex-row flex flex-col items-center lg:items-start'>
                    <div className='lg:w-[30%]'>
                        <img src={Logo} alt='synergyy logo' className='w-[162px]' />
                    </div>
                    <div className='flex flex-col lg:flex-row lg:gap-20 gap-16 mt-20 lg:mt-0 text-center lg:text-start'>
                        <div className='hidden cursor-pointer'>
                            <p className='mb-5 text-[16px] font-semibold'>About Us</p>
                            <p className='mb-[18px] text-[14px] opacity-[0.69] font-medium' onClick={() => navigate('/about')}>Our services</p>
                            <p className='text-[14px] opacity-[0.69] font-medium' onClick={()=> navigate('/#connection')}>Testimonials</p>
                        </div>
                        <div className='hidden cursor-pointer'>
                            <p className='mb-5 text-[16px] font-semibold'>Legal</p>
                            <p className='mb-[18px] text-[14px] opacity-[0.69] font-medium' onClick={()=> navigate('/privacypolicy')}>Privacy policy</p>
                            <p className='text-[14px] opacity-[0.69] font-medium' onClick={()=> navigate('/terms&condition')}>Terms & conditions</p>
                        </div>

                        <div className='lg:hidden flex gap-4 lg:justify-start justify-around'>
                            <Link to={'https://twitter.com/TheSynergyNG?t=JljJq5kxUxMMGUYseXi9Lw&s=09'}><Twitter /></Link>
                            <Link to={'https://www.linkedin.com/company/synergy-ng'}><Linkedin /></Link>
                            <Link to={'https://instagram.com/synergy.ng?igshid=MzRlODBiNWFlZA=='}><Instagram /></Link>
                        </div>
                    </div>
                    <div className='flex-1 lg:items-end items-center flex flex-col gap-[18px] lg:mt-5 mt-6'>
                        <p className='text-[14px] opacity-[0.69] font-medium'>2A Osara Close, Maitama, Abuja</p>
                        <p className='text-[14px] opacity-[0.69] font-medium item-center lowercase'>Hello@synergyy.io </p>
                    </div>
                </div>
            </div>
            <hr className='text-[#334D57]' />
            <div className='pt-10 mid:px-20'>
                <p className="lg:text-[16px] text-[14px] font-medium text-[#667A81] text-center">&copy; Copyright Synergyy {year}. All Rights Reserved!</p>
            </div>
        </div>
    )
}

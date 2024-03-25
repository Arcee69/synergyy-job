import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";
import { Link } from 'react-router-dom'

import  Twitter  from '../../assets/svg/twitter.svg'
import  Instagram  from '../../assets/svg/instagram.svg'
import  Linkedin  from '../../assets/svg/linkedin.svg'
// import Logo  from '../../assets/img/logo.png'
import Logo  from '../../assets/svg/2.svg'

export default function Footer() {
    const [openResources, setOpenResources] = useState(false)
    const [openCompany, setOpenCompany] = useState(false)

    const navigate = useNavigate();

    const handleResources = () => {
        setOpenResources(prev => !prev)
    }

    const handleCompany = () => {
        setOpenCompany(prev => !prev)
    }

    return (
        <div className='lg:py-[80.5px] py-[50px] lg:px-20 px-6 bg-background'>
            <div className='lg:flex hidden justify-end gap-4'>
                <Link to={'https://twitter.com/TheSynergyNG?t=JljJq5kxUxMMGUYseXi9Lw&s=09'}><img src={Twitter}  /></Link>
                <Link to={'https://www.linkedin.com/company/synergy-ng'}><img src={Linkedin} /></Link>
                <Link to={'https://instagram.com/synergy.ng?igshid=MzRlODBiNWFlZA=='}><img src={Instagram}  /></Link>
            </div>
            <div className='lg:flex-row flex flex-col items-start '>
                <div className='lg:w-[23%]'>
                    <img src={Logo} alt='synergyy logo' className='w-[162px]' />
                </div>
                <div className='flex flex-col mt-5 lg:hidden  gap-5'>
                    <p className='font-mont text-base  font-semibold text-[#FFF]'>Get in touch</p>
                    <p className='text-base text-[#FFF]  font-medium font-mont'>Hello@synergyy.io</p>
                    <div className='flex gap-6'>
                        <Link to={'https://twitter.com/TheSynergyNG?t=JljJq5kxUxMMGUYseXi9Lw&s=09'}> <img src={Twitter}  /></Link>
                        <Link to={'https://www.linkedin.com/company/synergy-ng'}><img src={Linkedin}  /></Link>
                        <Link to={'https://instagram.com/synergy.ng?igshid=MzRlODBiNWFlZA=='}><img src={Instagram}  /></Link>
                    </div>
                </div>
                <div className='flex flex-col w-[100%] lg:w-0 lg:flex-row lg:gap-20 gap-2 mt-10 lg:mt-0 lg:text-center lg:text-start'>
                                {/* Mobile */}
                    <div className='cursor-pointer flex lg:hidden flex-col'>
                        <div className='flex items-center justify-between' onClick={() => handleCompany()}  style={{    marginBottom:' -6%'}}>
                            <p className=' text-[16px] flex flex-col font-semibold text-white'>Company</p>
                            {openCompany ? <MdKeyboardArrowDown className="text-[#fff] w-4 h-4"/> : <MdKeyboardArrowRight className="text-[#fff] w-4 h-4" />}
                        </div>
                        <div className='mt-10'>
                            {
                                openCompany && (
                                    <div className='flex flex-col gap-[10px]'>
                                        <p className='mb-[18px] text-[14px] text-white opacity-[0.69] font-medium' onClick={() => navigate('/about')}>About us</p>
                                        <p className='text-[14px] text-white opacity-[0.69] font-medium' onClick={()=> navigate('/contact')}>Contact us</p>
                                    </div>
                                )
                            }
                        </div>
                        
                    </div>
                                {/* Laptop/Desktop */}
                    <div className='cursor-pointer hidden lg:flex flex-col'>
                            <p className='mb-5 text-[16px] flex flex-col font-semibold text-white'>Company</p>
                            <div className='flex flex-col gap-[10px]'>
                                <p className='mb-[18px] text-[14px] text-white opacity-[0.69] font-medium' onClick={() => navigate('/about')}>About us</p>
                                <p className='text-[14px] text-white opacity-[0.69] font-medium' onClick={()=> navigate('/contact')}>Contact us</p>
                            </div>
                    </div>
                                {/* Mobile */}
                    <div className='cursor-pointer flex lg:hidden flex-col'>
                        <div className='flex items-center justify-between' onClick={() => handleResources()}  style={{    marginBottom:' -6%'}}>
                            <p className=' text-[16px] flex flex-col font-semibold text-white'>Resources</p>
                            {openResources ? <MdKeyboardArrowDown className="text-[#fff] w-4 h-4"/> : <MdKeyboardArrowRight className="text-[#fff] w-4 h-4" />}
                        </div>
                        <div className='mt-10'>
                            {
                                openResources && (
                                    <div className='flex flex-col gap-[10px]'>
                                        <Link to='https://synergyy.hashnode.dev/'><p className='text-[14px] mb-[18px] text-white opacity-[0.69] font-medium'>Blog</p></Link>

                                        <Link to='https://chat.whatsapp.com/Eg7nmOpbZA30n4VX5DKhsn'><p className='text-[14px] text-white opacity-[0.69] font-medium'>Community</p></Link>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                                {/* Laptop/Desktop */}
                    <div className='cursor-pointer hidden lg:flex flex-col'>
                        <p className='mb-5 text-[16px] flex flex-col font-semibold text-white'>Resources</p>
                        <div className='flex flex-col gap-[10px]'>
                            <Link to='https://synergyy.hashnode.dev/'><p className='text-[14px] mb-[18px] text-white opacity-[0.69] font-medium'>Blog</p></Link>
                            <Link to='https://chat.whatsapp.com/Eg7nmOpbZA30n4VX5DKhsn'><p className='text-[14px] text-white opacity-[0.69] font-medium'>Community</p></Link>
                        </div>
                    </div>

                    {/* <div className='cursor-pointer'>
                        <p className='mb-5 text-[16px] font-semibold text-white'>Legal</p>
                        <p className='mb-[18px] text-[14px] text-white opacity-[0.69] font-medium' onClick={()=> navigate('/privacypolicy')}>Privacy policy</p>
                        <p className='text-[14px] text-white opacity-[0.69] font-medium' onClick={()=> navigate('/terms&condition')}>Terms & conditions</p>
                    </div> */}

                </div>
                <div className='flex-1 hidden lg:items-end items-start lg:flex flex-col gap-[18px] lg:mt-5 mt-6'>
                    <p className='font-mont text-base  font-semibold text-[#FFF]'>Get in touch</p>
                    <p className='text-base text-[#FFF]  font-medium font-mont'>Hello@synergyy.io</p>
                    {/* <p className='text-[14px] text-white opacity-[0.69] font-medium'>2A Osara Close, Maitama, Abuja</p>
                    <p className='text-[14px] text-white opacity-[0.69] font-medium item-center lowercase'>Hello@synergyy.io </p> */}
                </div>
            </div>      
        </div>
    )
}
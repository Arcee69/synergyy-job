import React from 'react'
import { useNavigate } from 'react-router-dom'
import  Twitter  from '../../assets/svg/twitter.svg'
import  Instagram  from '../../assets/svg/instagram.svg'
import  Linkedin  from '../../assets/svg/linkedin.svg'
import Logo  from '../../assets/img/logo.png'
import { Link } from 'react-router-dom'

export default function Footer() {
    const navigate = useNavigate();

    return (
        <div className='lg:py-[80.5px] py-[50px] lg:px-20 px-6 bg-background'>
            <div className='lg:flex hidden justify-end gap-4'>
                <Link to={'https://twitter.com/TheSynergyNG?t=JljJq5kxUxMMGUYseXi9Lw&s=09'}><img src={Twitter}  /></Link>
                <Link to={'https://www.linkedin.com/company/synergy-ng'}><img src={Linkedin} /></Link>
                <Link to={'https://instagram.com/synergy.ng?igshid=MzRlODBiNWFlZA=='}><img src={Instagram}  /></Link>
            </div>
            <div className='lg:flex-row flex flex-col items-center lg:items-start'>
                <div className='lg:w-[23%]'>
                    <img src={Logo} alt='synergyy logo' className='w-[162px]' />
                </div>
                <div className='flex flex-col lg:flex-row lg:gap-20 gap-16 mt-20 lg:mt-0 text-center lg:text-start'>
                    <div className='cursor-pointer'>
                        <p className='mb-5 text-[16px] font-semibold text-white'>Company</p>
                        {/* <p className='mb-[18px] text-[14px] text-white opacity-[0.69] font-medium' onClick={() => navigate('/faq')}>FAQ’s</p> */}
                        <p className='mb-[18px] text-[14px] text-white opacity-[0.69] font-medium' onClick={() => navigate('/about')}>About us</p>
                        <p className='text-[14px] text-white opacity-[0.69] font-medium' onClick={()=> navigate('/contact')}>Contact us</p>
                    </div>
                    <div className='cursor-pointer'>
                        <p className='mb-5 text-[16px] font-semibold text-white'>Resources</p>
                        {/* <p className='mb-[18px] text-[14px] text-white opacity-[0.69] font-medium'>Job Board</p> */}
                        <Link to='https://synergyy.hashnode.dev/'><p className='text-[14px] mb-[18px] text-white opacity-[0.69] font-medium'>Blog</p></Link>

                        <Link to='https://chat.whatsapp.com/Eg7nmOpbZA30n4VX5DKhsn'><p className='text-[14px] text-white opacity-[0.69] font-medium'>Community</p></Link>
                    </div>
                    <div className='cursor-pointer'>
                        <p className='mb-5 text-[16px] font-semibold text-white'>Legal</p>
                        <p className='mb-[18px] text-[14px] text-white opacity-[0.69] font-medium' onClick={()=> navigate('/privacypolicy')}>Privacy policy</p>
                        <p className='text-[14px] text-white opacity-[0.69] font-medium' onClick={()=> navigate('/terms&condition')}>Terms & conditions</p>
                    </div>

                    <div className='lg:hidden flex lg:gap-4 lg:justify-start justify-around'>
                        <Link to={'https://twitter.com/TheSynergyNG?t=JljJq5kxUxMMGUYseXi9Lw&s=09'}> <img src={Twitter}  /></Link>
                        <Link to={'https://www.linkedin.com/company/synergy-ng'}><img src={Linkedin}  /></Link>
                        <Link to={'https://instagram.com/synergy.ng?igshid=MzRlODBiNWFlZA=='}><img src={Instagram}  /></Link>
                    </div>
                </div>
                <div className='flex-1 lg:items-end items-center flex flex-col gap-[18px] lg:mt-5 mt-6'>
                    <p className='text-[14px] text-white opacity-[0.69] font-medium'>2A Osara Close, Maitama, Abuja</p>
                    <p className='text-[14px] text-white opacity-[0.69] font-medium item-center lowercase'>team@synergyy.io </p>
                </div>
            </div>      
        </div>
    )
}
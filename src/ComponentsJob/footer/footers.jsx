import React from 'react'
import { useNavigate } from 'react-router-dom'
import  Twitter  from '../../assets/svg/twitter2.svg'
import  Facebook  from '../../assets/svg/facebook.svg'
import  Linkedin  from '../../assets/svg/linkedin2.svg'
import Logo  from '../../assets/img/logo.png'

export default function Footers() {
    const navigate = useNavigate();

    return (
        <div className='flex pb-[94px]'>
            <div className='flex flex-col w-[25%] justify-between'>
                <div>
                    <img src={Logo} alt='synergyy logo'/>
                </div>
                {/* <p className='text-[16px] text-white capitalize'>Lorem ipsum dolor sit amet consectetur. Sed proin vitae vulputate phasellus imperdiet sed.</p> */}
            </div>
            <div className='flex flex-1 gap-20 justify-end'>
                <div className='cursor-pointer'>
                    <p className='mb-7 text-[18px] capitalize font-semibold text-white'>Partnerships</p>
                    <p className='mb-[18px] text-white capitalize'>Post a job</p>
                    <p className='mb-[18px] text-white capitalize'>Post an ad</p>
                    <p className='text-white capitalize'>Partner with us</p>
                </div>
                <div className='cursor-pointer'>
                    <p className='mb-7 text-[18px] capitalize font-semibold text-white'>Support</p>
                    <p className='mb-[18px] text-white capitalize'>Career centre</p>
                    <p className='mb-[18px] text-white capitalize'>FAQ's</p>
                    <p className='text-white capitalize' onClick={()=> navigate('/contact')}>Contact us</p>
                </div>
                {/* <div className='cursor-pointer'>
                    <p className='mb-7 text-[18px] capitalize font-semibold text-white'>Legal</p>
                    <p className='mb-[18px] text-white capitalize' onClick={()=> navigate('/terms&condition')}>Terms & conditions</p>
                    <p className='mb-[18px] text-white capitalize' onClick={()=> navigate('/privacypolicy')}>Privacy policy</p>
                    <p className='text-white capitalize'>Cookie policy</p>
                </div> */}
                <div className='cursor-pointer'>
                    <p className='mb-7 text-[18px] capitalize font-semibold text-white'>Resources</p>
                    <p className='mb-[49px] text-white capitalize'>Job board</p>
                    <div className='flex gap-4'>
                        <img src={Twitter} alt='twitter'/>
                        <img src={Facebook} alt='facebook'/>
                        <img src={Linkedin} alt='linkedin'/>
                        {/* <Twitter />
                        <Facebook />
                        <Linkedin /> */}
                    </div>  
                </div>
            </div>      
        </div>
    )
}
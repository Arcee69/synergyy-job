import React from 'react'
import { useNavigate } from 'react-router-dom';
import Box from '../ComponentsJob/box'
import Buttons from '../ComponentsJob/button';
import  Icon  from '../assets/svg/welcome.svg';

export default function Welcome({hamburger, setHamburger}) {
    const username = JSON.parse(localStorage.getItem('synergyyUser')).first_name;
    const navigate = useNavigate();

    return (
        <Box setHamburger={setHamburger} hamburger={hamburger} returns='welcome'>
            <div className='flex flex-col sm:gap-8 gap-10'>
                <div className='flex flex-col-reverse sm:gap-12 gap-10'>
                    <div>
                        <h1 className='mb-2 text-white text-center sm:text-[32px] text-[26px] sm:font-semibold font-bold'>Welcome {username},</h1>
                        <p className='sm:text-[16px] text-center text-[#F9FAFB]'>You’re one step closer to achieving your dreams. Create your profile to secure the bag.
                        </p>
                    </div>
                    <Icon className='flex self-center'/>
                </div>
                <div className='flex flex-col gap-4 w-full items-center'>
                    <Buttons padding={'12px 48px'} width={'318px'} functions={() => navigate('/onboarding')} text={'Create Job profile'} hoverColor={'#FBA599'} bgColor={'#FBA599'} color={'#00141B'} />
                    <p className='sm:text-[16px] text-sm font-semibold opacity-60 text-[#334D57] cursor-pointer' onClick={() => navigate('/onboarding/welcome')}>Skip</p>
                </div>
            </div>
        </Box>      
    )
}
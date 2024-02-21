import React from 'react'
import { useNavigate } from 'react-router-dom'
import Nav from './nav/nav'
import  Left  from '../assets/svg/chevron-left.svg'
import Navigation from './nav/navigation'
import Hamburger from './hamburger'

export default function Box({ children, nav, user, setHamburger, hamburger, returns }) {
    const navigate = useNavigate();

    const handleReturn = () => {
        if (returns === 'otp') {
            window.location.replace("https://new-syn.vercel.app/register");   
        }
        if (returns === 'career') {
            navigate('/otp')  
        }
        if (returns === 'location') {
            navigate('/select-career')  
        }
        if (returns === 'welcome') {
            navigate('/select-location')  
        }
    }

    return (
        <div className='bg-background flex flex-col box-form min-h-screen'>
            {/* {nav === 'nav' && <Nav user={user} />} */}
            {/* <Navigation setHamburger={setHamburger}/>
            {hamburger && <Hamburger setHamburger={setHamburger} />} */}
            <div className='phone:w-[650px] h-full justify-center sm:place-self-center flex flex-col'>
                {(returns === 'career' || returns === 'location' || returns === 'welcome') ? '' : (
                    <div className='flex gap-2 items-center justify-center mt-[73px] sm:mt-[100px]' onClick={handleReturn}>
                        <Left className='text-[#F9FAFB] opacity-50 cursor-pointer' />
                        <p className='text-[18px] text-[#F9FAFB] opacity-50 cursor-pointer'>Go back</p>
                    </div>
                )}
                <div className={`${!nav && 'sm:mt-[80px] mt-8'} ${returns === 'career' && 'mini:w-[705px]'} sm:py-10 sm:px-20 px-7 rounded-[24px] mb-[100px] lg:border lg:border-green-50`}>
                    {(returns === 'career' || returns === 'location') && (
                        <div className='flex gap-2 items-center sm:justify-center mb-[26.99px] sm:mb-[50.99px]' onClick={handleReturn}>
                            <Left className='text-[#F9FAFB] opacity-50 cursor-pointer' />
                            <p className='text-[18px] text-[#F9FAFB] opacity-50 cursor-pointer'>Go back</p>
                        </div>  
                    )}
                    {children}
                </div>
            </div>
        </div>
    )
}

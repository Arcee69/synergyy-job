import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import Logo from '../../assets/img/logo.png'
import Logo2 from '../../assets/img/logo.png'
import Buttons from '../button'
import Menu from '../../assets/svg/menu.svg'

export default function Navigation({setHamburger, view}) {
    const navigate = useNavigate();
    const location = useLocation()

    const getStarted = () => {
        window.location.replace("https://new-syn.vercel.app/register");;
        // if (location.pathname ==='/'){
        //     const element = document.querySelector('#download')
        //     console.log(element)
        //     element.scrollIntoView({ behavior: 'smooth' });
        // } else {
        //     navigate('/#download')
        // }
    }
    
    return (
        <div className='flex justify-between items-center lg:pb-6 pb-3 synergy-nav'>
            <div className='cursor-pointer'>
                <img src={Logo} alt='synerygy logo' className='lg:block hidden' onClick={() => navigate('/')} />
                <img src={Logo2} alt='synerygy logo' className='lg:hidden block w-[108px]' onClick={() => navigate('/')}/>
            </div>
            {!view && (
                <div className='gap-8 text-[16.5px] font-medium capitalize text-light cursor-pointer lg:flex hidden'>
                    <p>About Us</p>
                    <p onClick={() => navigate('/#connection')}>Success stories</p>
                    <p>Partnership</p>
                    {/* <p>Job Board</p> */}
                </div>
            )}
            <div className='lg:flex hidden'>
                <Buttons text={!view ? 'get started - it’s free' : 'get started'} bgColor='#EFF4F5' hoverColor='#024355' hoverText='#FFFFFF' color='#00212D' functions={getStarted}/>
            </div>
            {!view && (
      <img src={Menu} className='lg:hidden block' onClick={() => setHamburger(true)}/>
      )}
        </div>
    )
}

import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import  Menu  from '../../assets/svg/menu2.svg'
import Logo from '../../assets/img/logo3.png'
import Buttons from '../button'

export default function Navlight({buttons, setHamburger, talent}) {
    const navigate = useNavigate();
    const location = useLocation()
    const active = location.pathname.includes('/post');

    const getStarted = () => {
        if (talent) {
            const element = document.querySelector('#contactalent')
            element.scrollIntoView({ behavior: 'smooth' }) 
        } else {
            window.location.replace("/talent/register");;
        }
        // if (location.pathname ==='/'){
        //     const element = document.querySelector('#download')
        //     console.log(element)
        //     element.scrollIntoView({ behavior: 'smooth' });
        // } else {
        //     navigate('/#download')
        // }
    }

    return (
        <div className='lg:py-6 py-4 lg:px-10 px-6 flex justify-between items-center navlight'>
            <div className='flex items-center gap-16 cursor-pointer'>
                <img src={Logo} alt='synerygy logo' onClick={() => navigate('/')} className='w-[108px]'/>
                <div className='menu__link lg:flex hidden gap-8 text-[16.5px] font-medium capitalize text-background cursor-pointer'>
                    <p onClick={() => navigate('/about')}>About us</p>
                    <p onClick={() => navigate('/#connection')}>Success stories</p>
                    <p onClick={() => navigate('/partnership')}>Partnership</p>
                </div>
            </div>
            {buttons && <div className={`${active ? 'flex' : 'lg:flex hidden '} gap-2`}>
                {/* <Buttons text='Job board' bgColor='inherit' color='#00141B' border='1px solid #00141B' hoverColor='#00141B' hoverText='#FFFFFF'/> */}
                <Buttons text='get started' bgColor='#00141B' color='#FFFFFF' functions={getStarted} hoverColor='#024355' hoverText='#FFFFFF'/>
            </div>}
            <Menu className='lg:hidden block menu__link' onClick={() => setHamburger(true)}/>
        </div>
    )
}

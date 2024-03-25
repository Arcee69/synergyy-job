import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import Menu from '../../assets/svg/menu.svg'
// import Logo from '../../assets/img/logo.png'
import Logo from '../../assets/svg/2.svg'
import Buttons from '../button'
import NavPop from './navPop'

export default function Nav({ user,page, setHamburger }) {
  const navigate = useNavigate();
  const location = useLocation()
  const [menu, setMenu] = useState(false);

  const getStarted = () => {
    // window.location.replace("https://new-syn.vercel.app/talent/register");
      navigate("/talent/register")


    // if (location.pathname ==='/'){
    //   const element = document.querySelector('#download')
    //   console.log(element)
    //   element.scrollIntoView({ behavior: 'smooth' });
    // } else {
    //   navigate('/#download')
    // }
  }

  const handleMenu = () => {
    setMenu(!menu);
  }
  
  return (
    <div className='lg:py-6 py-4 lg:px-[43.2px] px-4 flex justify-between items-center'>
      <div className='flex items-center gap-16 cursor-pointer'>
        <img src={Logo} alt='synerygy logo' onClick={() => navigate('/')} className='w-[108px] mt-2'/>
        <div className='lg:flex hidden gap-8 text-[16.5px] font-medium capitalize text-light cursor-pointer'>
        { <>
          <p onClick={() => navigate('/about')}>About us</p>
          <p onClick={() => {
            if (location.pathname ==='/'){
                const element = document.querySelector('#connection')
                console.log(element)
                element.scrollIntoView({ behavior: 'smooth' });
            }else{
              navigate('/#connection')
            }
          }}>Success stories</p>
          {/* <p onClick={() => navigate('/partnership')}>Partnership</p> */}
          {/* <p onClick={() => navigate('/jobs')}>Jobs</p> */}
          </>}
{/* {  page==='about' &&        <>
          <p>About Us</p>
          <p>Success Stories</p>
          <p>Partnership</p>
          </>} */}
        </div>
      </div>
      <div className='gap-2 items-center lg:flex hidden'>
        {/* <Buttons text='Enter Design Quest' hoverColor='inherit' hoverText='#FFFFFF' bgColor='#42B8BD' color='#000709' border='1px solid #FFF' functions={() => navigate('/design-quest')}/> */}
        {/* {user ? (
          <div className='w-10 h-10 rounded-full ml-4 bg-white flex justify-center items-center cursor-pointer' onClick={handleMenu}>
            <p className='text-background font-semibold capiatlize'>TJ</p>
          </div>
        ) : (
          <Buttons text='get started' bgColor='#EFF4F5' hoverText='#FFFFFF' hoverColor='#024355' color='#00141B' functions={getStarted}/>
        )} */}
        <Buttons text='Join Synergyy' bgColor={`${page === 'about' ? '#42B8BD': 'inherit'}`} hoverText='#FFFFFF' hoverColor='#024355' color={`${page === 'about' ? '#00141B' : '#42B8BD'}`} border='1px solid #024355' functions={getStarted}/>
      </div>
      {menu && <NavPop />}
      <img src={Menu} className='lg:hidden block' onClick={() => setHamburger(true)}/>
    </div>
  )
}

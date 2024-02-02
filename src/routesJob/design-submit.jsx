import React from 'react'
import Background from '../assets/img/Africa Design Quest 2023.png'
import Background2 from '../assets/img/Africa Design Quest 2023 - Mobile.png'
import Logo from '../assets/img/logo4.png'
import { useNavigate } from 'react-router-dom'
import DesignSubmitForm from '../ComponentsJob/forms/designSubmitForm'

export default function DesignSubmit() {
    const navigate = useNavigate()
    return (
        <div className='design-quest min-h-screen'>
            <div className='absolute w-full mini:py-4 mini:px-10 p-6 z-20'>
                <img src={Logo} alt='logo' className='cursor-pointer w-[100px] mini:w-[150px]' onClick={() => navigate('/')} />
            </div>      
            <div className='design-container mini:min-h-screen h-full flex'>
                <img src={Background} alt='background' className='mini:block hidden'/>
                <img src={Background2} alt='background' className='mini:hidden block'/>
                <div className='absolute mini:top-[7%] top-[13%] w-full flex justify-center'>
                    <div className='mini:border-black mini:border rounded-[40px] flex justify-center'>
                        <div className='mini:my-[68.6px] mini:px-[86px] px-4'>
                            <h1 className='font-bold mini:text-[36px] text-[24px] opacity-90 mini:capitalize text-center'>Submit your design</h1>
                            <div className='mini:mt-7 mt-6'>
                                <DesignSubmitForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
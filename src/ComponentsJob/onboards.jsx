import React from 'react'
import { useNavigate } from 'react-router-dom'
import Logo from '../assets/img/logo.png';
import  Back  from '../assets/svg/chevron-left2.svg'
import  Moth  from '../assets/svg/moth.svg'

export default function Onboards({ children, rate, full, step, width }) {
    const navigate = useNavigate();

    return (
        <div className='bg-background min-h-screen flex flex-col gap-8 phone:gap-[22px]'>
            <div className={`px-6 py-10 ${rate && 'phone:block hidden'}`}>
                <img src={Logo} alt='synerygy logo' className='cursor-pointer phone:block hidden' onClick={() => navigate('/')} />
            </div>
            <div className={`${full && 'flex-1'} w-full flex justify-center`}>
                <div className={`${width ? 'phone:w-[802px]' :'phone:w-[480px]'} w-full flex flex-col phone:gap-14 gap-[30px]`}>
                    {step === 2 ? 
                        <>
                            {rate ? (
                                <div className='w-full phone:hidden flex flex-col'>
                                    <div className='flex items-center phone:py-[22.4px] phone:gap-0 gap-[90.5px] py-6 phone:px-[33.6px] px-4 justify-center'>
                                        {/* <Back className='phone:w-full cursor-pointer'  onClick={() => navigate(-1)}/> */}
                                        <p className='phone:w-full phone:text-[22.4px] text-[16px] font-semibold text-light'>Create profile</p>
                                        {/* <div className='phone:w-full'></div> */}
                                    </div>
                                    <div className={`bg-pink phone:h-3 h-1 ${rate}`}></div>
                                </div>
                            ) : (
                                <Moth className='cursor-pointer flex self-center' onClick={() => navigate('/')} />
                            )}
                        </>    
                    :   <>
                            {rate ? (
                                <div className={`${width ? 'w-auto phone:self-center' : 'w-full'} flex flex-col`}>
                                    <div className={`phone:w-[440px] ${width && 'phone:self-start self-center'} phone:self-center flex items-center phone:py-[22.4px] py-4 phone:px-[33.6px] px-6 justify-center`}>
                                        {/* <Back className='cursor-pointer w-6 h-6 phone:w-[33.6px] phone:h-[33.6px]' onClick={() => navigate(-1)}/> */}
                                        <p className='phone:text-[22.4px] text-[16px] font-semibold text-light'>Create profile</p>
                                    </div>
                                    <div className={`bg-pink phone:h-3 h-1 ${rate}`}></div>
                                </div>
                            ) : (
                                <Moth className='cursor-pointer flex self-center' onClick={() => navigate('/')} />
                            )}
                        </>    
                    }
                    {children}
                </div>
            </div>
        </div>
    )
}

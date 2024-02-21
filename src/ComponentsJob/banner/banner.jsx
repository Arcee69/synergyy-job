import React from 'react'
import Background from '../../assets/img/Banner.png';
import Background2 from '../../assets/img/Banner-sm.png';
import Buttons from '../button';
import { useNavigate } from 'react-router-dom';
import Countdown from './countdown';

export default function Banner() {
    const navigate = useNavigate();

    return (
        <div className='banner h-[120px] lg:h-20'>
            <div className='fixed flex z-[999] lg:h-20 h-[120px] w-full'>
                <img src={Background} alt='confetti' className='h-20 hidden lg:block w-full'/>
                <img src={Background2} alt='confetti' className='h-[120px] lg:hidden w-full'/>
                <div className='justify-center absolute flex flex-col lg:flex-row lg:justify-between w-full h-[120px] lg:h-20 lg:px-[130px] lg:px-[50px] px-0 lg:py-[13px] py-[10.5px] items-center'>
                    <div className='flex gap-12 items-center'>
                        <div className='hidden lg:block'>
                            {/* <p className='mb-2 text-[8.34px] text-[#000709] font-bold capitalize text-center'>Closing soon</p> */}
                            <Countdown />
                        </div>
                        <div>
                            <p className='text-[20px] font-extrabold text-center lg:text-start capitalize opacity-80 text-background'>Ready to Win $500?</p>
                            <p className='lg:text-[17px] text-[13px] mb-[14px] lg:mb-0 mt-[2px] font-semibold capitalize opacity-80 text-background'>Enter the Africa Design Quest 2023</p>
                        </div>
                    </div>

                    <div className='h-full flex gap-4 items-center'>
                        <div className='lg:hidden block'>
                            {/* <p className='lg:mb-2 mb-1 lg:text-[8.34px] text-[6.34px] text-[#000709] font-bold capitalize text-center'>Closing soon</p> */}
                            <Countdown />
                        </div>
                        <div className='lg:block hidden'>
                            <Buttons functions={() => navigate('/design-quest')} type='button' text='Enter Now, It’s Free ' width='100%' bgColor='linear-gradient(91deg, #F6A351 46.45%, #E3665E 99.37%)' color='#000000' />
                        </div>
                        <div className='lg:hidden'>
                            <Buttons size='11px' functions={() => navigate('/design-quest')} type='button' text='Enter Now' width='100%' bgColor='linear-gradient(91deg, #F6A351 46.45%, #E3665E 99.37%)' color='#000000' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
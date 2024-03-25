import React, { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import Frame from '../../assets/img/frame2.png'
import Buttons from '../button'
import { useNavigate, useLocation } from 'react-router-dom';

export default function Landdreamjob() {
    const navigate = useNavigate();
    const location = useLocation()
    const [ref, inView] = useInView({
        triggerOnce: true,
    });

    const [isAnimated, setIsAnimated] = useState(false);

    useEffect(() => {
        if (inView) {
          setIsAnimated(true);
        }
    }, [inView]);

    const handleStart = () => {
        window.location.replace("/talent/register");

        // if (location.pathname ==='/'){
        //     const element = document.querySelector('#download')
        //     console.log(element)
        //     element.scrollIntoView({ behavior: 'smooth' });
        // } else {
        //     navigate('/#download')
        // }
    }

    return (
        <div className='lg:p-20 px-[18px] py-[50px] flex lg:flex-row flex-col-reverse lg:gap-20 gap-10 items-center'>
            <div className='flex flex-col lg:w-[50%] lg:gap-6 gap-3'>
                <h2 className='sm:text-[40px] text-[24px] lg:text-start text-center font-bold text-light'>Land your dream job</h2>
                <p className='lg:text-justify text-center sm:text-[18px] text-[15px] text-white leading-[150%]'>At Synergyy, we believe that your work should be more than just a job; it should be a fulfilling and rewarding experience. That's why we go the extra mile to match you with opportunities that align with your skills, passions, and aspirations.</p>
                <div className='lg:mt-12 mt-6 lg:justify-start justify-center flex'>
                    <Buttons text='Get Started' hoverColor='#42b8bd7a' hoverText='#FFFFFF' functions={handleStart} width='200px' weight='500' size='13px' padding='16px 24px' color='#42B8BD' bgColor='#00141B' border='1px solid #42B8BD' />
                </div>
            </div>
            <div className='lg:w-[50%]'>
                <img src={Frame} alt='synergyy frame' ref={ref} className={`animate__animated ${isAnimated ? 'animate__fadeInRight' : ''}`}/>
            </div>
        </div>
    )
}

import React, { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import Frame from '../../assets/img/frame3.png'

export default function Joinexcitingcircles() {
    const [ref, inView] = useInView({
        triggerOnce: true,
    });

    const [isAnimated, setIsAnimated] = useState(false);

    useEffect(() => {
        if (inView) {
          setIsAnimated(true);
        }
    }, [inView]);

    return (
        <div className='lg:px-[80px] px-[18px] lg:pt-[62px] pt-[50px] lg:pb-[98px] pb-[50px] flex lg:flex-row flex-col lg:gap-20 gap-10 items-center'>
            <div className='lg:w-[50%] lg:hidden'>
                <img src={Frame} alt='synergyy frame' ref={ref} className={`animate__animated ${isAnimated ? 'animate__fadeInRight' : ''}`} />
            </div>
            <div className='flex flex-col lg:gap-6 gap-3 lg:w-[50%]'>
                <h2 className='sm:text-[40px] text-[24px] lg:text-start text-center font-bold text-light'>Join Exciting Circles</h2>
                <p className='lg:text-justify text-center sm:text-[18px] text-[15px] text-white leading-[150%]'>Stay continuously informed and in sync with your peers on topics that you are interested in. Engage with like-minded individuals and professionals within your industry.</p>
            </div>
            <div className='lg:w-[50%] hidden lg:flex'>
                <img src={Frame} alt='synergyy frame' ref={ref} className={`animate__animated ${isAnimated ? 'animate__fadeInRight' : ''}`} />
            </div>
            
        </div>
    )
}

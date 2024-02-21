import React, { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import Frame from '../../assets/img/frame.png'

export default function Upskill() {
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
        <div className='lg:p-20 px-[18px] py-[50px] flex lg:flex-row flex-col lg:gap-20 gap-10 items-center'>
            <div className='lg:w-[50%]'>
                <img src={Frame} alt='synergyy frame' ref={ref} className={`animate__animated ${isAnimated ? 'animate__fadeInLeft' : ''}`}/>
            </div>
            <div className='flex flex-col lg:gap-6 gap-3 lg:w-[50%]'>
                <h2 className='sm:text-[40px] text-[24px] lg:text-start text-center font-bold text-light'>Upskill on the go</h2>
                <p className='lg:text-justify text-center sm:text-[18px] text-[12px] text-white leading-[150%]'>In today's fast-paced world, staying relevant and up-to-date with the latest skills and knowledge is crucial for personal and professional growth.</p>
            </div>
        </div>
    )
}

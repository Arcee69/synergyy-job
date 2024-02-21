import React, { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import Background from '../../assets/img/bg2.png'
import Buttons from '../button'
import Apple from '../../assets/svg/apple.svg';
import Googleplay from '../../assets/svg/google-play.svg';
import { Link } from 'react-router-dom';

export default function Download() {
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
        <div className='lg:px-20 px-[29px] lg:py-[120px] py-[50px]' id='download'>
            <div className='download flex flex-col lg:flex-row'>
                <div className='lg:w-[46%] flex flex-col justify-center lg:pl-12 lg:mt-0 mt-[71px] lg:px-0 px-[13px]'>
                    <h1 className='mini:text-[32.9px] text-[23px] text-center lg:text-start font-bold mb-[21.33px] capitalize'>Like what you see? There’s more on the app</h1>
                    <p className='mini:text-[15.1px] text-[13px] font-medium capitalize text-center lg:text-start'>Take control of your career journey and tap into a world of opportunities with the Synergyy mobile app. </p>
                    <div ref={ref} className={`animate__animated animate__slow ${isAnimated ? 'animate__headShake' : ''} lg:mt-[42px] lg:mb-0 mb-[23px] mt-8 flex gap-6 flex-col lg:flex-row items-center`}>
                        <Link to={'https://apps.apple.com/ng/app/synergy-ng/id6447760204'}><Buttons text='Get on Iphone' hoverColor='#000000' width='238px' weight='500' size='13px' padding='16px 24px' color='#FFFFFF' bgColor='#00141B' border='1px solid #024355' icons={<img src={Apple}   />} /></Link>
                        <Link to={'https://play.google.com/store/apps/details?id=com.synergyng.synergy'}><Buttons text='Get on Android' hoverColor='#000000' width='238px' weight='500' size='13px' padding='16px 24px' color='#FFFFFF' bgColor='#00141B' border='1px solid #024355' icons={<img src={Googleplay}   />} /></Link>
                    </div>
                </div>
                <div>
                    <img src={Background} alt='synergyy background' className='rounded-br-[40px]' />
                </div>
            </div>
        </div>
    )
}

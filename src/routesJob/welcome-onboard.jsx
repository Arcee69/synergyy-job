import React from 'react'
import { Link } from 'react-router-dom';
import Buttons from '../../ComponentsJob/button';
import Welcome from '../assets/img/welcome.png';
import  Apple  from '../assets/svg/apple.svg';
import  Googleplay  from '../assets/svg/google-play.svg';
import Onboards from '../ComponentsJob/onboards';

export default function WelcomeOnboard() {    
    return (
        <Onboards>
            <div className='flex flex-col phone:gap-[57.6px] gap-12'>
                <div className='flex items-center flex-col'>
                    <h1 className='phone:mb-[14.4px] mb-3 text-light text-center phone:text-[28.8px] text-[24px] font-semibold'>You’re ready to go!</h1>
                    <p className='phone:w-[386.4px] w-[322px] phone:text-[16.8px] text-center text-[#BABABA]'>Congrats! you’ve submitted your profile. Sit back and relax and let Synergyy do the rest.</p>
                </div>
                <img src={Welcome} alt='welcome' className='flex self-center phone:w-[240px] w-[200px] phone:h-[240px] h-[200px]' />
                <div className='phone:mt-[15.6px] mb-12 flex flex-col phone:gap-6 gap-[19.2px] items-center'>
                    <p className='phone:w-[433px] w-[295px] phone:text-[20px] text-[16px] text-center text-white opacity-60 leading-[38.4px]'>Download the app to find thousands of opportunities tailored for you</p>
                    <div className='flex phone:gap-6 gap-[19.2px] justify-center phone:flex-row flex-col items-center'>
                        <Link to={'https://apps.apple.com/ng/app/synergy-ng/id6447760204'}>
                            <Buttons text='Get on Iphone' hoverColor='#024355' width='238px' weight='500' size='13px' padding='16px 24px' color='#FFFFFF' bgColor='#00141B' border='1px solid #024355' icons={<img src={Apple}  />} />
                        </Link>
                        <Link to={'https://play.google.com/store/apps/details?id=com.synergyng.synergy'}>
                            <Buttons text='Get on Android' hoverColor='#024355' width='238px' weight='500' size='13px' padding='16px 24px' color='#FFFFFF' bgColor='#00141B' border='1px solid #024355' icons={<img src={Googleplay}  />} />
                        </Link>
                    </div>
                </div>
            </div>
        </Onboards>
    )
}
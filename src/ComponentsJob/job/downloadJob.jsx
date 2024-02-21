import React from 'react'
import Buttons from '../button'
import { Link } from 'react-router-dom'
import  Apple  from '../../assets/svg/apple.svg';
import  Googleplay from '../../assets/svg/google-play.svg';

export default function DownloadJob() {
    return (
        <div className='flex flex-col gap-[14px] mb-10'>
            <div className='items-center gap-[9px] w-full flex justify-center'>
                <p className='text-[19px] mini:font-semibold font-bold text-center capitalize text-[#00141B]'>You’re not on Synergyy?</p>
            </div>
            <div>
                <p className='mini:text-[13px] text-[13px] font-medium mini:font-normal text-center text-[#00141B]'>Take control of your career journey and tap into a world of opportunities with Synergyy</p>
            </div>
            <div className='w-full mini:gap-[21.33px] gap-2 flex justify-center mt-[10px]'>
                <Link to={'https://apps.apple.com/ng/app/synergy-ng/id6447760204'}><Buttons gap={'8px'} text='Get on Iphone' hoverColor='#024355' width='100%' weight='500' size='12px' padding='10px 11px' color='#FFFFFF' bgColor='#00141B' icons={<img src={Apple}   className='w-4 h-[21px]'/>} /></Link>
                <Link to={'https://play.google.com/store/apps/details?id=com.synergyng.synergy'}> <Buttons gap={'8px'} text='Get on Android' hoverColor='#024355' width='100%' weight='500' size='12px' padding='10px 11px' color='#FFFFFF' bgColor='#00141B' icons={<img src={Googleplay}  className='w-4 h-[21px]'/>} /></Link>
            </div>
        </div>
    )
}

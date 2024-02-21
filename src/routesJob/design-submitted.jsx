import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Background from '../assets/img/Africa Design Quest 2023.png'
import Background2 from '../assets/img/Africa Design Quest 2023 - Mobile.png'
import Logo from '../assets/img/logo4.png'
import Buttons from '../ComponentsJob/button'
import  Rafiki  from '../assets/svg/rafiki.svg'
import  Apple  from '../assets/svg/apples.svg';
import  Googleplay  from '../assets/svg/google-play.svg';

export default function DesignSubmitted() {
    const navigate = useNavigate()
    return (
        <div className='design-quest min-h-full'>
            <div className='absolute w-full mini:py-4 mini:px-10 p-6 z-20'>
                <img src={Logo} alt='logo' className='cursor-pointer w-[100px] mini:w-[150px]' onClick={() => navigate('/')} />
            </div>      
            <div className='design-container mini:min-h-screen h-full flex'>
                <img src={Background} alt='background' className='mini:block hidden'/>
                <img src={Background2} alt='background' className='mini:hidden block'/>
                <div className='absolute top-[17%] w-full flex justify-center text-center'>
                    <div className='mini:border-black mini:border rounded-[40px] flex justify-center w-[651px]'>
                        <div className='mini:my-[68.6px] mini:px-[86px] px-4'>
                            <h1 className='font-bold mini:text-[30px] text-[24px] opacity-90'>Design submitted successfully</h1>
                            <div className='mini:mt-10 mt-6'>
                                <Rafiki className='w-full flex'/>
                                <p className='mini:mt-10 mt-6 text-center mini:text-[19px] text-[14px] font-medium opacity-80'>Congratulations! Your design submission for the Africa Design Quest 2023 has been received. Stay tuned for updates and developments regarding the competition.</p>
                                <p className='mt-10 text-center mini:text-[19px] text-[14px] font-medium'>Enjoyed the design quest? Find more exciting opportunities like this on Synergyy</p>
                                <div className='mt-12 flex mini:flex-row flex-col mini:gap-6 gap-[18px] justify-center items-center'>
                                    <Link to={'https://apps.apple.com/ng/app/synergy-ng/id6447760204'}><Buttons text='Get on Iphone' hoverColor='#024355' width='238px' weight='500' size='13px' padding='16px 24px' smpadding='12px 18px' color='#00141B' bgColor='inherit' border='1px solid #024355' icons={<Apple />} /></Link>
                                    <Link to={'https://play.google.com/store/apps/details?id=com.synergyng.synergy'}> <Buttons text='Get on Android' hoverColor='#024355' width='238px' weight='500' size='13px' padding='16px 24px' smpadding='12px 18px' color='#00141B' bgColor='inherit' border='1px solid #024355' icons={<Googleplay />} /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

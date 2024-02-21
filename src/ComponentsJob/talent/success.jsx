import React from 'react'
import Buttons from '../button'
import Mask from '../../assets/img/Synergy mask.png'

export default function Success() {
    const navigate = () => {
        const element = document.querySelector('#contactalent')
        element.scrollIntoView({ behavior: 'smooth' })
    } 

    return (
        <div className='lg:p-20 p-6 lg:flex-row flex-col flex items-center'>
            <div className='lg:w-[50%] w-full flex justify-center'>
                <img src="/images/love-pics.svg" alt="people smiling"  className='lg:block hidden w-[50%] h-[100%]'/>
                <img src={Mask} alt='mask' className='lg:hidden' />
            </div>
            <div className='lg:mt-0 mt-[58.9px] lg:flex-1 flex flex-col lg:gap-6 gap-[16px]'>
                <h1 className='lg:text-[40px] text-[32px] font-semibold'>Over<span className='text-[#42B8BD]'> 4,000</span> Vetted and Verified young professionals in our network</h1>
                {/* <Buttons functions={navigate} text={'Explore our talent pool'} bgColor={'#000'} width={'247px'} color={'#fff'} hoverColor={'#000'} /> */}
            </div>
        </div>
    )
}

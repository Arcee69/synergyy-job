import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Foots() {
    const year = new Date().getFullYear();
    const navigate = useNavigate();

    return (
        <footer className='foots py-6 lg:px-20 px-5 lg:h-[65px] items-center flex lg:flex-row flex-col lg:justify-between lg:gap-0 gap-6 h-full'>
            <div className='text-white capitalize text-center'>© Copyright Synergyy {year}. All rights reserved!</div>
            <div className='flex text-white gap-3 items-center cursor-pointer'>
                <p onClick={() => navigate('/privacypolicy')}>Privacy policy</p>
                <p className='h-[17px] w-[1px] bg-white'></p>
                <p onClick={() => navigate('/terms&condition')}>Terms & conditions</p>
                <p className='h-[17px] w-[1px] bg-white lg:block hidden'></p>
                <p className='lg:block hidden'>Join our community</p>
            </div>
        </footer>
    )
}

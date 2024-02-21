import React from 'react';
import Company from  '../../assets/img/company.png';
import  Bookmark  from '../../assets/svg/bookmark.svg';

export default function Herocard() {
    return (
        <div className='rounded-lg bg-[#fff] mid:py-3 py-[6.58px] mid:px-[10.2px] px-[6.58px] mid:ml-20 ml-7'>
            <div className='flex justify-between gap-6'>
                <div>
                    <div className='flex gap-2'>
                        <img src={Company} alt='company' className='object-none'/>
                        <div>
                            <p className='font-semibold text-[9px] capitalize text-secondary'>Product designer</p>
                            <p className='text-[7.2px] text-green-100 hero-card--text'>Paystack limited</p>
                        </div>
                    </div>
                    <div className='flex mt-[5.4px] gap-[3px] justify-end ml-[30px]'>
                        <div className='border-0 py-[2px] px-[7.5px] rounded-full bg-green-200 font-medium text-[6px] text-white'>Full-time</div>
                        <div className='border-0 py-[2px] px-[7.5px] rounded-full bg-green-200 font-medium text-[6px] text-white'>Remote</div>
                    </div>
                </div>
                
                <img src={Bookmark}   />
            </div>
            <div className='rounded-lg bg-green-100 text-[6px] font-medium py-[6px] text-white text-center mt-[9px]'>Apply</div>
        </div>
    )
}
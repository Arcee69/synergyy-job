import React from 'react'
import Polygon from '../../assets/svg/polygon.svg'
import Exit from '../../assets/svg/logout.svg'

export default function NavPop() {
    return (
        <div className='absolute top-[70px] right-0 flex flex-col'>
            <Polygon className='self-end mr-[55px]' />
            <div className='bg-white cursor-pointer py-[6px] px-5 rounded-[3px] mr-10 -mt-[3px] flex flex-col'>
                <div className='py-2 px-5 text-background capitalize opacity-[0.5] text-[14px] font-semibold'>Job Seekers</div>
                <div className='py-2 px-5 text-[14px] text-background capitalize'>Profile</div>
                <div className='flex py-2 px-5 gap-4 text-[14px] text-background capitalize'>
                    Log out
                    <Exit />
                </div>
            </div>
        </div>
    )
}

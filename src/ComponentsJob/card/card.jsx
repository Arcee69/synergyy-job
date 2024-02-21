import React from 'react'

export default function Card({ name, title, location, img, children }) {
    return (
        <div className='talents-card py-4 px-2 rounded-lg border border-background flex flex-col gap-3 w-full'>
            <div className='flex flex-col gap-2 items-center w-full justify-center'>
                <img src={`/images/${img}.png`} className='sm:w-[43px] w-10 sm:h-[52px] h-[50px]' alt='card' />
                <h1 className='sm:text-sm font-semibold opacity-90 text-black sm:leading-[19.6px] leading-[23px]'>{name}</h1>
                <p className='sm:text-[10px] text-[9px] font-medium opacity-80 text-black sm:leading-[14px] leading-[13px]'>{title}</p>
                <p className='text-[8px] font-medium opacity-80 text-black leading-[11.2px]'>{location}</p>
            </div>
            <div className='flex flex-col gap-2'>
                {children}
            </div>
        </div>
    )
}

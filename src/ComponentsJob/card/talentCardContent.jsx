import React from 'react'

export default function TalentCardContent({ title, content, children, center }) {
    return (
        <div className={`flex ${center ? 'justify-between items-center lg:gap-0 gap-12' : 'lg:gap-10 gap-12'} lg:flex-row lg:px-0 flex-col px-3`}>
            <div className='flex flex-col lg:gap-2 gap-6 lg:w-[470px] w-full lg:px-0 px-3'>
                <h1 className='text-[24px] font-extrabold text-background text-center lg:text-start'>{title}</h1>
                <p className='text-[15px] font-medium opacity-70 text-background text-center lg:text-start'>{content}</p>
            </div>
            <div className={`${!center && 'flex-1'}`}>
                <div className={`flex ${center ? 'px-1 sm:px-0 sm:gap-8 gap-4' : 'gap-3'} w-full items-center talent-content`}>
                    {children}
                </div>
            </div>
        </div>
    )
}

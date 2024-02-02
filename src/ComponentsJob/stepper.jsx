import React from 'react'
import { useLocation } from 'react-router-dom'

export default function Stepper() {
    const location = useLocation()
    const active = location.pathname

    return (
        <div className='flex gap-[6px] mb-[51px] w-full justify-center'>
            <div className={`rounded-[16px] ${active === '/select-career' || active === '/select-location' || active === '/welcome' ? 'bg-[#42B8BD]' : 'bg-[#00212D] border border-[#42B8BD]'} w-[108px] h-2`}></div>
            {/* <div className={`rounded-[16px] ${active === '/select-location' || active === '/welcome' ? 'bg-[#42B8BD]' : 'bg-[#00212D] border border-[#42B8BD]'} w-[108px] h-2`}></div> */}
            <div className={`rounded-[16px] ${active === '/welcome' ? 'bg-[#42B8BD]' : 'bg-[#00212D] border border-[#42B8BD]'} w-[108px] h-2`}></div>
        </div>
    )
}

import React from 'react'

export default function SkillRate({ rate }) {
    return (
        <div className='flex gap-[2.4px] items-end'>
            <div className='bg-[#42B8BD] h-2 w-[4.8px] rounded-[1.2px]'></div>
            <div className={`${(rate === 'Intermediate' || rate === 'Expert') ? 'bg-[#42B8BD]' : 'bg-[#10303D]'} h-3 w-[4.8px] rounded-[1.2px]`}></div>
            <div className={`${rate === 'Expert' ? 'bg-[#42B8BD]' : 'bg-[#10303D]'} h-4 w-[4.8px] rounded-[1.2px]`}></div>
        </div>
    )
}

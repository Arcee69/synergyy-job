import React from 'react'
import  Add  from '../../assets/svg/addition.svg'
import  Check  from '../../assets/svg/Checkboxed.svg'

export default function SkillCheck({ title, open, finish }) {
    return (
        <div 
            onClick={open}
            className={`cursor-pointer flex mid:flex-col mid:gap-[39.2px] gap-4 justify-center items-center mid:w-[234.6px] w-full mid:h-[227.2px] h-[104.75px] ${finish ? 'bg-[#28767C]' : 'bg-[#001A24]'} border-dotted border-[#024355] mid:border-[2.4px] border-[1.92px] rounded-[24px]`}
        >
            {finish ? <Check /> : 
                <div className='rounded-[4.915px] bg-[#00141B] w-9 h-9 flex items-center justify-center'>
                    <Add />
                </div>
            }
            <p className='mid:text-[17.6px] text-[14.88px] font-medium text-[#F9FAFB] capitalize mid:w-[135.8px] mid:text-center'>{title}</p>
        </div>
    )
}

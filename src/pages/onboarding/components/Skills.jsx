import React, { useState } from 'react'
import Technical from './Technical'
import Soft from './Soft'

const Skills = () => {
    const [activeSkill, setActiveSkill] = useState("Technical")

    const handleButtonChange = (activeButton) => {
        setActiveSkill(activeButton)
    }

  return (
    <div className="mt-6 flex flex-col items-center gap-10">
        <div className="w-[350px] gap-[6px] flex flex-col items-start lg:items-center">
            <p className="text-[#28767C] font-semibold font-mont text-[15px]">
                CAREER TRACK
            </p>
            <p className="text-[24px] lg:text-xl lg:leading-[32px] text-[#00141B] font-mont font-bold">
                Let’s showcase your talent
            </p>
            <p className="text-[#00212D] lg:text-[#667A81] text-base font-mont text-left lg:text-center">
                Get matched with opportunities that fit your future goals.
            </p>
        </div>
        <div className='flex gap-2 items-center '>
            <button onClick={() => handleButtonChange("Technical")} className={`${activeSkill === "Technical" ? "bg-[#EB6E2C]" : "bg-[#BABABA]"} font-mont text-base font-semibold w-[130px] h-[38px] rounded border border-[#000709] p-2`}>
                Technical
            </button>
            <button onClick={() => handleButtonChange("Soft")} className={`${activeSkill === "Soft" ? "bg-[#EB6E2C]" : "bg-[#BABABA]"}  font-mont text-base font-semibold w-[130px] h-[38px] rounded border border-[#000709] p-2`}>
                Soft
            </button>
        </div>
        {activeSkill === "Technical" && <Technical handleButtonChange={handleButtonChange} />}
        {activeSkill === "Soft" && <Soft />}
    </div>
  )
}

export default Skills
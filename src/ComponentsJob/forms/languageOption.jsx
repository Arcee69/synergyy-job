import React from 'react'
import { Radio } from '@mui/material';

export default function LanguageOption({ language, setLanguage, closeModal }) {
    const CheckedIcon = () => {
        return (
          <div className="w-6 h-6 rounded-lg flex justify-center items-center">
            <div className="bg-[#42B8BD] rounded-lg w-4 h-4"></div>
          </div>
        );
    };
    
    return (
        <div className='flex flex-col phone:gap-[19.2px] gap-4'>
            <div className='flex phone:gap-[14.4px] gap-3 items-center'>
                <Radio
                    sx={{
                        height: 24,
                        width: 24,
                        border: "3px solid #334D57",
                        background: "#00141B",
                    }}
                    checkedIcon={<CheckedIcon />}
                    checked={language === "Basic"}
                    onClick={() => {setLanguage('Basic'); closeModal()}}
                    name="radio-buttons"
                    inputProps={{ "aria-label": "A" }}
                />
                <div className='flex flex-col gap-[4.8px]'>
                    <p className='phone:text-[19.2px] text-[16px] font-medium text-[#CCD3D5]'>Basic</p>
                    <p className='text-[14.4px] text-[#99A6AB]'>I can manage everyday conversations in English.</p>
                </div>
            </div>
            
            <div className='flex phone:gap-[14.4px] gap-3 items-center'>
                <Radio
                    sx={{
                        height: 24,
                        width: 24,
                        border: "3px solid #334D57",
                        background: "#00141B",
                    }}
                    checkedIcon={<CheckedIcon />}
                    checked={language === "Good"}
                    onClick={() => {setLanguage('Good'); closeModal()}}
                    name="radio-buttons"
                    inputProps={{ "aria-label": "A" }}
                />
                <div className='flex flex-col gap-[4.8px]'>
                    <p className='phone:text-[19.2px] text-[16px] font-medium text-[#CCD3D5]'>Good</p>
                    <p className='text-[14.4px] text-[#99A6AB]'>I'm confident in most communication situations.</p>
                </div>
            </div>
            
            <div className='flex phone:gap-[14.4px] gap-3 items-center'>
                <Radio
                    sx={{
                        height: 24,
                        width: 24,
                        border: "3px solid #334D57",
                        background: "#00141B",
                    }}
                    checkedIcon={<CheckedIcon />}
                    checked={language === "Very Good"}
                    onClick={() => {setLanguage('Very Good'); closeModal()}}
                    name="radio-buttons"
                    inputProps={{ "aria-label": "A" }}
                />
                <div className='flex flex-col gap-[4.8px]'>
                    <p className='phone:text-[19.2px] text-[16px] font-medium text-[#CCD3D5]'>Very Good</p>
                    <p className='text-[14.4px] text-[#99A6AB]'>I can express complex thoughts and engage in professional discussions fluently.</p>
                </div>
            </div>
        </div>
    )
}

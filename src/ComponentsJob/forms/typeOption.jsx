import React from 'react'
import { Radio } from '@mui/material';

export default function TypeOption({ type, setType, closeModal }) {
    const CheckedIcon = () => {
        return (
            <div className="w-7 h-7 rounded-[3px] flex justify-center items-center">
                <div className="bg-[#42B8BD] rounded-[3px] w-[21px] h-[21px]"></div>
            </div>
        );
    };

    return (
        <div className='flex flex-col phone:gap-[19.2px] gap-4'>
            <div className='flex phone:gap-[14.4px] gap-3 items-center'>
                <Radio
                    sx={{
                        height: 28,
                        width: 28,
                        borderRadius: "20%",
                        border: "3px solid #FFFFFF",
                        background: "#00141B",
                    }}
                    checkedIcon={<CheckedIcon />}
                    checked={type === "Remote"}
                    onClick={() => {setType('Remote'); closeModal()}}
                    name="radio-buttons"
                    inputProps={{ "aria-label": "A" }}
                />
                <p className='phone:text-[19.2px] text-[16px] font-medium text-[#CCD3D5]'>Remote</p>
            </div>
            
            <div className='flex phone:gap-[14.4px] gap-3 items-center'>
                <Radio
                    sx={{
                        height: 28,
                        width: 28,
                        borderRadius: "20%",
                        border: "3px solid #FFFFFF",
                        background: "#00141B",
                    }}
                    checkedIcon={<CheckedIcon />}
                    checked={type === "Hybrid"}
                    onClick={() => {setType('Hybrid'); closeModal()}}
                    name="radio-buttons"
                    inputProps={{ "aria-label": "A" }}
                />
                <p className='phone:text-[19.2px] text-[16px] font-medium text-[#CCD3D5]'>Hybrid</p>
            </div>
            
            <div className='flex phone:gap-[14.4px] gap-3 items-center'>
                <Radio
                    sx={{
                        height: 28,
                        width: 28,
                        borderRadius: "20%",
                        border: "3px solid #FFFFFF",
                        background: "#00141B",
                    }}
                    checkedIcon={<CheckedIcon />}
                    checked={type === "Onsite"}
                    onClick={() => {setType('Onsite'); closeModal()}}
                    name="radio-buttons"
                    inputProps={{ "aria-label": "A" }}
                />
                <p className='phone:text-[19.2px] text-[16px] font-medium text-[#CCD3D5]'>Onsite</p>
            </div>
            
            {/* <div className='flex phone:gap-[14.4px] gap-3 items-center'>
                <Radio
                    sx={{
                        height: 28,
                        width: 28,
                        borderRadius: "20%",
                        border: "3px solid #FFFFFF",
                        background: "#00141B",
                    }}
                    checkedIcon={<CheckedIcon />}
                    checked={type === "All of the above"}
                    onClick={() => {setType('All of the above'); closeModal()}}
                    name="radio-buttons"
                    inputProps={{ "aria-label": "A" }}
                />
                <p className='phone:text-[19.2px] text-[16px] font-medium text-[#CCD3D5]'>All of the above</p>
            </div>             */}
        </div>
    )
}
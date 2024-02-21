import React, { useState } from 'react'
import  Add from '../../assets/svg/add.svg'
import { Radio } from '@mui/material';
import Buttons from '../button';
import { useNavigate } from 'react-router-dom';

export default function WorkExperienceForm({ setStep }) {
    const navigate = useNavigate()
    const title = sessionStorage.getItem('synergyy_career')
    const [experience, setExperience] = useState(false);

    const CheckedIcon = () => {
        return (
            <div className="w-6 h-6 rounded-lg flex justify-center items-center">
                <div className="bg-[#42B8BD] rounded-lg w-4 h-4"></div>
            </div>
        );
    };

    return (
        <div className='flex-1 flex flex-col phone:gap-16 gap-[150px]'>
            <div
                className="phone:w-[421px] w-full border-[#334D57] bg-backgroundDark border-[1.2px] rounded-[4.8px] flex items-center h-10 sm:h-12 sm:px-[19.2px] capitalize px-4 text-[16px] text-[#CCD3D5]"
            >
                <p>{title}</p>
            </div>
            <div className='flex flex-col items-center phone:gap-[40.8px] gap-[34px]'>
                <div onClick={() => setStep(2)} className='cursor-pointer phone:w-[381.6px] w-full rounded-[28.8px] border-[1.2px] border-[#99A6AB] phone:py-[14.4px] py-3 phone:px-[57.6px] px-12 flex phone:gap-3 gap-[10px] items-center justify-center'>
                    <p className='phone:text-[19.2px] text-[16px] font-medium text-[#99A6AB]'>Add Experience</p>
                    <Add />
                </div>
                <div className='flex phone:gap-[14.4px] gap-3 items-center w-full justify-center'>
                    <Radio
                        sx={{
                            height: 24,
                            width: 24,
                            border: "3px solid #334D57",
                            background: "#00141B",
                        }}
                        checkedIcon={<CheckedIcon />}
                        checked={experience}
                        onClick={() => setExperience(!experience)}
                        name="radio-buttons"
                        inputProps={{ "aria-label": "A" }}
                    />
                    <p onClick={() => setExperience(!experience)} className='cursor-pointer phone:text-[18px] text-[15px] font-medium text-[#CCD3D5]'>No, I don’t have any experience</p>
                </div>
            </div>
            <div className='phone:mt-0 -mt-[150px] pb-12 flex-1 items-end phone:flex hidden w-full justify-center'>
                <Buttons functions={() => navigate('/onboarding/education-history')} text={'Continue'} hoverColor={experience ? '#FBA599' : '#BABABA'} width={'318px'} color='#00141B' bgColor={experience ? '#FBA599' : '#BABABA'} />
            </div>
            <div className='phone:hidden pb-12 -mt-[150px] flex-1 items-end flex w-full justify-center'>
                <Buttons functions={() => navigate('/onboarding/education-history')} text={'Next'} hoverColor={experience ? '#FBA599' : '#BABABA'} width={'318px'} color='#00141B' bgColor={experience ? '#FBA599' : '#BABABA'}/>
            </div>
        </div>
    )
}

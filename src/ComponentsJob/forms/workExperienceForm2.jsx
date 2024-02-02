import React, { useState } from 'react'
import Buttons from '../button';
import  Down  from '../../assets/svg/chevron-green.svg';
import axios from 'axios';
import { baseURL } from '../../utils/baseURL';
import { months } from '../../libs/helperFunctions';
import { CircularProgress } from '@mui/material'

export default function WorkExperienceForm2() {
    const [tick, setTick] = useState(false);
    const initialValues = {role:'', company:''}
    const [workExperienceData, setWorkExperienceData] = useState(initialValues)
    const [isLoading, setIsLoading] = useState(false)
    const [yearStarted, setYearStarted] = useState('');
    const [yearEnded, setYearEnded] = useState('');
    const [monthStarted, setMonthStarted] = useState({});
    const [monthEnded, setMonthEnded] = useState({});
    const [isOpen, setIsOpen] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isMonthOpen, setIsMonthOpen] = useState(false);
    const [isMonthOpen2, setIsMonthOpen2] = useState(false);
    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: 50 }, (_, index) => currentYear - index);
    const accessToken = localStorage.getItem('access_token')
    
    const handleSubmit = async() => {
        setIsLoading(true)
        if (!workExperienceData.role || !workExperienceData.company || !monthStarted || !yearStarted){
            setIsLoading(false)
            return
        }
        const data = {
            role: workExperienceData.role,
            company: workExperienceData.company,
            start_date: yearStarted + '-' + monthStarted.number,
            ...!tick && {end_date: yearEnded + '-' + monthEnded.number}
        }
        
        try {
            const response = await axios.post(`${baseURL}account/add_experience`, data, {
                headers: {Authorization: `Bearer ${accessToken}`,}
            });
            if (response.data.status ==='success'){
                setIsLoading(false)
                setWorkExperienceData(initialValues)
                window.location.reload()
            }
        } catch (error) {
            setIsLoading(false)
        }
    }

    const Ticked = () => {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M15.6531 3.52344C15.4067 3.52344 15.1867 3.62024 15.0283 3.77864L6.85313 11.9626L3.95793 9.06744C3.79953 8.90024 3.57952 8.80344 3.33312 8.80344C2.84912 8.80344 2.45312 9.19944 2.45312 9.68344C2.45312 9.92984 2.54992 10.1498 2.70832 10.3082L6.22832 13.8282C6.38672 13.9866 6.60672 14.0834 6.85313 14.0834C7.09952 14.0834 7.31952 13.9866 7.47792 13.8282L16.2779 5.02824C16.4363 4.86984 16.5331 4.64984 16.5331 4.40344C16.5331 3.91944 16.1371 3.52344 15.6531 3.52344Z" fill="#F9FAFB"/>
            </svg>
        )
    }
    
    const handleYearStartSelect = (selectedYear) => {
        setYearStarted(selectedYear);
        setIsOpen(false);
    };
    
    const handleMonthStartSelect = (selectedMonth) => {
        setMonthStarted(selectedMonth);
        setIsMonthOpen(false);
    };

    const handleMonthEndSelect = (selectedMonth) => {
        setMonthEnded(selectedMonth);
        setIsMonthOpen2(false);
    };
    
    const handleYearEndSelect = (selectedYear) => {
        setYearEnded(selectedYear);
        setIsOpen2(false);
    }

    return (
        <div className='phone:mt-8 -mt-1 w-full flex flex-col phone:gap-[38.4px] gap-8 flex-1'>
            <div className='flex flex-col phone:gap-[9.6px] gap-2'>
                <label className='phone:text-[18px] text-[15px] text-[#99A6AB]'>Job title</label>
                <input
                    required
                    type="text"
                    placeholder="Add job title"
                    id="name"
                    name="role"
                    className="caret-[#42B8BD] w-full border-[#334D57] bg-backgroundDark border-[1.2px] rounded-[4.8px] sm:py-[14.4px] py-3 h-10 sm:h-12 sm:px-[19.2px] px-4 pr-4 focus:outline-none text-[16px] text-[#CCD3D5] placeholder:text-[#667A81]"
                    value={workExperienceData.role}
                    onChange={(e) => {
                        setWorkExperienceData(val => {
                            return {...val, [e.target.name]:e.target.value}
                        })
                    }}
                />
            </div>
            <div className='flex flex-col phone:gap-[9.6px] gap-2'>
                <label className='phone:text-[18px] text-[15px] text-[#99A6AB]'>Company Name</label>
                <input
                    required
                    type="text"
                    placeholder="Add company name"
                    id="name"
                    name="company"
                    className="caret-[#42B8BD] w-full border-[#334D57] bg-backgroundDark border-[1.2px] rounded-[4.8px] sm:py-[14.4px] py-3 h-10 sm:h-12 sm:px-[19.2px] px-4 pr-4 focus:outline-none text-[16px] text-[#CCD3D5] placeholder:text-[#667A81]"
                    value={workExperienceData.company}
                    onChange={(e) => {
                        setWorkExperienceData(val => {
                            return {...val, [e.target.name]:e.target.value}
                        })
                    }}
                />
            </div>
            <div className='flex phone:gap-[19.2px] gap-4 w-full'>
                <div className='w-full flex flex-col phone:gap-[9.6px] gap-2'>
                    <label className='phone:text-[18px] text-[15px] text-[#99A6AB]'>Start Month</label>
                    <div className='w-full'>
                        <div
                            onClick={() => setIsMonthOpen(!isMonthOpen)}
                            className="flex items-center justify-between cursor-pointer w-full border-[#334D57] bg-backgroundDark border-[1.2px] rounded-[4.8px] sm:py-[14.4px] py-3 h-10 sm:h-12 sm:px-[19.2px] px-4 text-[16px]"
                        >
                            {!monthStarted.name ? <p className='text-[#667A81]'>Month</p>
                            : <p className='text-[#CCD3D5]'>{monthStarted.name}</p>}
                            <Down className='w-6 h-6 phone:w-[28.8px] phone:h-[28.8px]'/>
                        </div>
                        {isMonthOpen && (
                            <div className="h-[200px] w-[155px] overflow-y-scroll absolute mt-[2%] bg-backgroundDark border border-[#334D57] rounded shadow-lg z-10">
                                {months.map((month) => (
                                    <div
                                        key={month.number}
                                        onClick={() => handleMonthStartSelect(month)}
                                        className="cursor-pointer p-2 hover:bg-gray-200 text-white"
                                    >
                                        {month.name}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
                <div className='w-full flex flex-col phone:gap-[9.6px] gap-2'>
                    <label className='phone:text-[18px] text-[15px] text-[#99A6AB]'>Year</label>
                    <div className='w-full'>
                        <div
                            onClick={() => setIsOpen(!isOpen)}
                            className="flex items-center justify-between cursor-pointer w-full border-[#334D57] bg-backgroundDark border-[1.2px] rounded-[4.8px] sm:py-[14.4px] py-3 h-10 sm:h-12 sm:px-[19.2px] px-4 text-[16px]"
                        >
                            {!yearStarted ? <p className='text-[#667A81]'>Year</p>
                            : <p className='text-[#CCD3D5]'>{yearStarted}</p>}
                            <Down className='w-6 h-6 phone:w-[28.8px] phone:h-[28.8px]'/>
                        </div>
                        {isOpen && (
                            <div className="h-[200px] w-[155px] overflow-y-scroll absolute mt-[2%] bg-backgroundDark border border-[#334D57] rounded shadow-lg z-10">
                                {years.map((year) => (
                                    <div
                                        key={year}
                                        onClick={() => handleYearStartSelect(year)}
                                        className="cursor-pointer p-2 hover:bg-gray-200 text-white"
                                    >
                                        {year}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className='flex items-center phone:gap-[9.6px] gap-2'>
                <div onClick={() => {setTick(!tick); setYearEnded(''); setMonthEnded('')}} className='rounded-[4.4px] bg-[#00141B] border-[#42B8BD] border-[1.1px] cursor-pointer phone:w-[26.4px] phone:h-[26.4px] w-[14.7px] h-[14.7px]'>
                    {tick && (
                        <div className='w-full h-full flex justify-center items-center'>
                            <Ticked />
                        </div>
                    )}
                </div>
                <p onClick={() => {setTick(!tick); setYearEnded(''); setMonthEnded('')}} className='cursor-pointer text-white phone:text-16.8px'>Currently employed</p>
            </div>
            {!tick && (
                <div className='flex phone:gap-[19.2px] gap-4 w-full'>
                    <div className='w-full flex flex-col phone:gap-[9.6px] gap-2'>
                        <label className='phone:text-[18px] text-[15px] text-[#99A6AB]'>End Month</label>
                        <div className='w-full'>
                            <div
                                onClick={() => setIsMonthOpen2(!isMonthOpen2)}
                                className="flex items-center justify-between cursor-pointer w-full border-[#334D57] bg-backgroundDark border-[1.2px] rounded-[4.8px] sm:py-[14.4px] py-3 h-10 sm:h-12 sm:px-[19.2px] px-4 text-[16px]"
                            >
                                {!monthEnded.name ? <p className='text-[#667A81]'>Month</p>
                                : <p className='text-[#CCD3D5]'>{monthEnded.name}</p>}
                                <Down className='w-6 h-6 phone:w-[28.8px] phone:h-[28.8px]'/>
                            </div>
                            {isMonthOpen2 && (
                                <div className="h-[200px] w-[155px] overflow-y-scroll absolute mt-[2%] bg-backgroundDark border border-[#334D57] rounded shadow-lg z-10">
                                    {months.map((month) => (
                                        <div
                                            key={month.number}
                                            onClick={() => handleMonthEndSelect(month)}
                                            className="cursor-pointer p-2 hover:bg-gray-200 text-white"
                                        >
                                            {month.name}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                    <div className='w-full flex flex-col phone:gap-[9.6px] gap-2'>
                        <label className='phone:text-[18px] text-[15px] text-[#99A6AB]'>Year</label>
                        <div className='w-full'>
                            <div
                                onClick={() => setIsOpen2(!isOpen2)}
                                className="flex items-center justify-between cursor-pointer w-full border-[#334D57] bg-backgroundDark border-[1.2px] rounded-[4.8px] sm:py-[14.4px] py-3 h-10 sm:h-12 sm:px-[19.2px] px-4 text-[16px]"
                            >
                                {!yearEnded ? <p className='text-[#667A81]'>Year</p>
                                : <p className='text-[#CCD3D5]'>{yearEnded}</p>}
                                <Down className='w-6 h-6 phone:w-[28.8px] phone:h-[28.8px]'/>
                            </div>
                            {isOpen2 && (
                                <div className="h-[200px] w-[155px] overflow-y-scroll absolute mt-[2%] bg-backgroundDark border border-[#334D57] rounded shadow-lg z-10">
                                    {years.map((year) => (
                                        <div
                                            key={year}
                                            onClick={() => handleYearEndSelect(year)}
                                            className="cursor-pointer p-2 hover:bg-gray-200 text-white"
                                        >
                                            {year}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
            <div className='mt-32 mb-6  w-full justify-center flex flex-1 items-end'>
                {isLoading ? (
                    <Buttons text='' icons={<CircularProgress size={34} sx={{ color: 'white' }}/>} hoverColor={'#FBA599'} width={'318px'} color='#00141B' bgColor={'#FBA599'} />
                ) : (
                    <Buttons functions={handleSubmit} text={'Save'} hoverColor={(workExperienceData.role && workExperienceData.company && monthStarted && yearStarted) ? '#FBA599' : '#BABABA'} width={'318px'} color='#00141B' bgColor={(workExperienceData.role && workExperienceData.company && monthStarted && yearStarted) ? '#FBA599' : '#BABABA'}/>
                )}
            </div>
        </div>
    )
}
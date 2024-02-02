import React, { useState } from 'react'
import axios from 'axios';
import { baseURL } from '../utils/baseURL';
import Onboards from '../ComponentsJob/onboards'
import  Exit  from '../assets/svg/adds.svg';
import  Add  from '../assets/svg/addition.svg';
import  Dropdown  from '../assets/svg/chevron-down.svg';
import  Adds  from '../assets/svg/add.svg'
import { useNavigate } from 'react-router-dom';
import Buttons from '../ComponentsJob/button';
import { popularSoftSkills, softSkills, level } from '../utils/data';
import SkillRate from '../ComponentsJob/skills/skillRate';
import { CircularProgress } from '@mui/material';

export default function SoftExperience() {
    const navigate = useNavigate()
    const getSkill = sessionStorage.getItem('complete')
    const localSoftSkill = getSkill && JSON.parse(getSkill);
    const [isLoading, setIsLoading] = useState(false);
    const [searchText, setSearchText] = useState('')
    const [showDropdown, setShowDropdown] = useState(false);
    const [searchResults, setSearchResults] = useState([])
    const [levelExperience, setLevelExperience] = useState('')
    const [showLevel, setShowLevel] = useState(false)
    const [selected, setSelected] = useState([])
    const accessToken = localStorage.getItem('access_token')

    const submitForm = async () => {
        setIsLoading(true)
        if (selected.length === 0) {
            setIsLoading(false)
            return;
        }

        const data = {
            skills: selected.map(skill => skill.name),
            skill_type: "soft"
        };

        try {
            const response = await axios.post(`${baseURL}account/add_skill`, data, {
                headers: {Authorization: `Bearer ${accessToken}`,}
            });
            if (response.data.status ==='success'){
                setIsLoading(false)
                const complete = [...(localSoftSkill || []), 'soft'];
                sessionStorage.setItem('complete', JSON.stringify(complete))
                navigate('/onboarding/technical-experience')
            }
        } catch (error) {
            setIsLoading(false)
        }
    }

    const simulateSearch = (input) => {
        const search = input.toLowerCase();
        const result = softSkills.filter((skill) => skill.toLowerCase().includes(search));
        return result;
    }

    const handleInputChange = async (e) => {
        const inputValue = e.target.value;
        setSearchText(inputValue);
        setShowDropdown(true)

        try {
            const searchResults = await simulateSearch(inputValue);
            setSearchResults(searchResults);
        } catch (error) {
          console.error('Search error:', error);
        }
    }

    const handleAdd = () => {
        if (!searchText && !levelExperience) {
            return;
        }
        const newSelect = {
            name: searchText,
            levels: levelExperience
        }
        setSelected([...selected, newSelect])
        setSearchText('')
        setLevelExperience('')
    }

    const handleRemove = (id) => {
        const updatedSelected = selected.filter((_, index) => index !== id);
        setSelected(updatedSelected);
    };

    return (
        <Onboards full={true} rate={'w-[44.44%]'} width={true}>
            <div className='flex mb-12 items-center justify-between px-8'>
                <h1 className='capitalize text-[18px] font-medium text-white'>Add soft skills</h1>
                <Exit onClick={() => navigate(-1)}/>
            </div>
            <div className='px-8'>
                <div className='w-full py-3 pl-4 pr-[6px] h-12 flex gap-[5.76px] items-center border-[1.44px] border-[#667A81] rounded-[4px]'>
                    <Add onClick={handleAdd}/>
                    <input 
                        placeholder='Add skill' 
                        className="caret-[#42B8BD] truncate focus:outline-none text-[#CCD3D5] placeholder:text-[#667A81] bg-transparent text-[16px]"
                        value={searchText}
                        onChange={handleInputChange}
                    />
                </div>
                {showDropdown && (
                    <div className="bg-backgroundDark w-full">
                        {searchResults?.map((s) => {
                            return (
                                <div key={s} onClick={() => {setSearchText(s); setShowDropdown(false)}} className='px-[22px] py-4 cursor-pointer rounded-[4px] sm:text-[16px] text-sm text-[#F9FAFB]'>{s}</div>
                            )
                        })}
                    </div>
                )}
                <div className='w-full mt-2'>
                    <div
                        onClick={() => setShowLevel(!showLevel)}
                        className="flex items-center justify-between cursor-pointer w-full border-[#334D57] bg-backgroundDark border-[1.2px] rounded-[4.8px] py-[14.4px] h-12 px-[19.2px] text-[16px]"
                    >
                        {!levelExperience ? <p className='text-[#667A81]'>Beginner, Intermediate,</p>
                        : <p className='text-[#CCD3D5]'>{levelExperience}</p>}
                        <Dropdown className='w-[19.2px] h-[19.2px]'/>
                    </div>
                    {showLevel && (
                        <div className="h-[auto] w-[310px] overflow-y-scroll absolute mt-[0%] bg-backgroundDark border border-[#334D57] rounded shadow-lg z-10">
                            {level.map((l) => (
                                <div
                                    key={l}
                                    onClick={() => {setLevelExperience(l); setShowLevel(false)}}
                                    className="cursor-pointer px-[26.4px] py-[14.4px] hover:bg-gray-200 text-[#F9FAFB]"
                                >
                                    {l}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
                <div className='min-h-[250px] w-full'>
                    {selected && 
                        <div className='mt-6 w-full flex items-center gap-4 flex-wrap'>
                            {selected.map((skill, index) => {
                                return (
                                    <div key={index} className='w-auto gap-4 flex items-center h-[34.1px] px-[12.8px] rounded-[12px] border border-[#42B8BD] bg-[#00141B]'>
                                        <div className='flex gap-[4.8px] items-center'>
                                            <SkillRate rate={skill.levels}/>
                                            <p className='text-[12.8px] text-[#CCD3D5]'>{skill.name}</p>
                                        </div>
                                        <Exit className='cursor-pointer' onClick={() => handleRemove(index)}/>
                                    </div>
                                )
                            })}
                        </div>
                    }
                </div>
                <div className='flex flex-col w-full gap-[26.35px] mb-10'>
                    <div className='flex flex-col gap-[19.2px]'>
                        <p className='text-[12.8px] text-[#CCD3D5]'>Popular Skills</p>
                        <div className='flex w-full gap-[10px] flex-wrap'>
                            {popularSoftSkills.map((skill) => {
                                return (
                                    <div className='w-auto py-[9.6px] px-[14.4px] h-[38.6px] border-[1.2px] border-[#10303D] cursor-pointer items-center justify-center flex gap-[4.8px] rounded-full bg-backgroundDark'>
                                        <p className='text-[12.8px] text-[#667A81]'>{skill}</p>
                                        <Adds className='opacity-40'/>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className='w-full flex justify-center'>
                        {isLoading ? 
                            <Buttons text={''} icons={<CircularProgress size={28} sx={{ color: 'white' }}/>} padding={'12px 48px'} width={'318px'} hoverColor={selected.length > 0 ? '#FBA599' : '#BABABA'} bgColor={selected.length > 0 ? '#FBA599' : '#BABABA'} color={'#00141B'}/>
                        :
                            <Buttons text={'Save'} padding={'12px 48px'} functions={submitForm} width={'318px'} hoverColor={selected.length > 0 ? '#FBA599' : '#BABABA'} bgColor={selected.length > 0 ? '#FBA599' : '#BABABA'} color={'#00141B'}/>
                        }
                    </div>
                </div>
            </div>
        </Onboards>
    )
}

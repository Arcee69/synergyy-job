import React, { useState } from 'react'
import axios from 'axios';
import { baseURL } from '../../utils/baseURL';
import  Add  from '../../assets/svg/addition.svg'
import  Adds  from '../../assets/svg/add.svg'
import  Dropdown  from '../../assets/svg/chevron-down.svg';
import  Exit  from '../../assets/svg/adds.svg';
import Buttons from '../button';
import { level, softSkills, popularSoftSkills } from '../../utils/data';
import SkillRate from './skillRate';
import { CircularProgress } from '@mui/material';

export default function SkillModal({ closeModal, setComplete, complete }) {
    const [isLoading, setIsLoading] = useState(false)
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
                const completed = [...complete, 'soft']
                localStorage.setItem('complete', JSON.stringify(completed))
                setComplete([...complete, 'soft'])
                closeModal()
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
        <div className='w-full flex flex-col justify-between flex-1'>
            <div className='flex flex-col gap-[30px]'>
                <div className='w-full flex gap-2'>
                    <div className='w-full'>
                        <div className='w-full py-3 pl-4 pr-[6px] h-12 flex gap-[5.76px] items-center border-[1.44px] border-[#667A81] rounded-[4px]'>
                            <Add className='cursor-pointer' onClick={handleAdd}/>
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
                    </div>
                    <div className='w-full'>
                        <div
                            onClick={() => setShowLevel(!showLevel)}
                            className="flex items-center justify-between cursor-pointer w-full border-[#334D57] bg-backgroundDark border-[1.2px] rounded-[4.8px] py-[14.4px] h-12 px-[19.2px] text-[16px]"
                        >
                            {!levelExperience ? <p className='text-[#667A81]'>Beginner, Intermediate,</p>
                            : <p className='text-[#CCD3D5]'>{levelExperience}</p>}
                            <Dropdown className='w-[19.2px] h-[19.2px]'/>
                        </div>
                        {showLevel && (
                            <div className="h-[auto] w-[274px] overflow-y-scroll absolute mt-[0%] bg-backgroundDark border border-[#334D57] rounded shadow-lg z-10">
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
                </div>
                {selected && 
                    <div className='w-full flex items-center gap-5 flex-wrap'>
                        {selected.map((skill, index) => {
                            return (
                                <div key={index} className='gap-5 flex items-center h-[42.6px] px-4 rounded-[12px] border border-[#42B8BD] bg-[#00141B] w-auto'>
                                    <div className='flex gap-[6px] items-center w-auto'>
                                        <SkillRate rate={skill.levels}/>
                                        <p className='text-[16px] text-[#CCD3D5]'>{skill.name}</p>
                                    </div>
                                    <Exit className='cursor-pointer w-full h-full' onClick={() => handleRemove(index)}/>
                                </div>
                            )
                        })}
                    </div>
                }
            </div>
            <div className='flex flex-col w-full gap-6'>
                <div className='flex flex-col gap-6'>
                    <p className='text-[16px] text-[#CCD3D5]'>Popular Skills</p>
                    <div className='flex w-full gap-[10px] flex-wrap'>
                        {popularSoftSkills.map((skill) => {
                            return (
                                <div className='w-auto py-[9.6px] px-[14.4px] h-[38.6px] border-[1.2px] border-[#10303D] cursor-pointer items-center justify-center flex gap-[4.8px] rounded-full bg-backgroundDark'>
                                    <p className='text-[16px] text-[#667A81]'>{skill}</p>
                                    <Adds className='opacity-40'/>
                                </div>
                            )}
                        )}
                    </div>
                </div>
                <div className='w-full flex justify-center'>
                    {isLoading ? 
                        <Buttons text={''} icons={<CircularProgress size={28} sx={{ color: 'white' }}/>} padding={'12px 48px'} width={'318px'} hoverColor={selected.length > 0 ? '#FBA599' : '#BABABA'} bgColor={selected.length > 0 ? '#FBA599' : '#BABABA'} color={'#00141B'}/>
                    :
                        <Buttons text={'Save'} functions={submitForm} padding={'12px 48px'} width={'318px'} hoverColor={selected.length > 0 ? '#FBA599' : '#BABABA'} bgColor={selected.length > 0 ? '#FBA599' : '#BABABA'} color={'#00141B'}/>
                    }
                </div>
            </div>
        </div>
    )
}
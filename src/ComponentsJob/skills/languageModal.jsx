import React, { useState } from 'react'
import axios from 'axios';
import { baseURL } from '../../utils/baseURL';
import  Adds  from '../../assets/svg/add.svg'
import  Dropdown  from '../../assets/svg/chevron-down.svg';
import Buttons from '../button';
import { level, worldLanguages } from '../../utils/data';
import { CircularProgress } from '@mui/material';

export default function LanguageModal({ closeModal, setComplete, complete }) {
    const [isLoading, setIsLoading] = useState(false)
    const [showDropdown, setShowDropdown] = useState();
    const [searchResults, setSearchResults] = useState([])
    const [showLevel, setShowLevel] = useState()
    const accessToken = localStorage.getItem('access_token')
    const [inputData, setInputData] = useState([{ searchText: '', levelExperience: '' }]);
    
    const submitForm = async () => {
        setIsLoading(true)
        if (inputData.length === 0) {
            setIsLoading(false)
            return;
        }

        const data = {
            language_proficiency: inputData.map(data => data.searchText)
        }

        try {
            const response = await axios.post(`${baseURL}account/update_profile`, data, {
                headers: {Authorization: `Bearer ${accessToken}`,}
            });
            if (response.data.status ==='success'){
                setIsLoading(false)
                const completed = [...complete, 'language']
                localStorage.setItem('complete', JSON.stringify(completed))
                setComplete([...complete, 'language'])
                closeModal()
            }
        } catch (error) {
            setIsLoading(false)
        }
    }

    const simulateSearch = (input) => {
        const search = input.toLowerCase();
        const result = worldLanguages.filter((skill) => skill.toLowerCase().includes(search));
        return result;
    }

    const handleInputChange = async (index, e) => {
        const inputValue = e.target.value;
        
        const newInputData = [...inputData];
        newInputData[index].searchText = inputValue;
        setInputData(newInputData);
      
        setShowDropdown(index);
      
        try {
          const searchResults = await simulateSearch(inputValue);
          setSearchResults(searchResults);
        } catch (error) {
          console.error('Search error:', error);
        }
    };
    
    const handleLevelChange = (index, value) => {
        const newInputData = [...inputData];
        newInputData[index].levelExperience = value;
        setInputData(newInputData);
        setShowLevel();
    };

    const handleAddInput = () => {
        setInputData([...inputData, { searchText: '', levelExperience: '' }]);
    };

    const handleSearchResultClick = (index, result) => {
        const newInputData = [...inputData];
        newInputData[index].searchText = result;
        setInputData(newInputData);
        setShowDropdown(false);
    };      
    
    return (
        <div className='w-full flex flex-col justify-between flex-1'>
            <div className='flex flex-col gap-8'>
                {inputData.map((input, index) => (
                    <div className='w-full flex gap-2' key={index}>
                        <div className='w-full'>
                            <div className='w-full py-3 pl-4 pr-[6px] h-12 flex gap-[5.76px] items-center border-[1.44px] border-[#667A81] rounded-[4px]'>
                                <input 
                                    placeholder='English' 
                                    className="caret-[#42B8BD] truncate focus:outline-none text-[#CCD3D5] placeholder:text-[#667A81] bg-transparent text-[16px]"
                                    value={input.searchText}
                                    onChange={(e) => handleInputChange(index, e)}
                                />
                            </div>
                            {showDropdown === index && (
                                <div className="bg-backgroundDark w-full">
                                    {searchResults?.map((s) => {
                                        return (
                                            <div key={s} onClick={() => handleSearchResultClick(index, s)} className='px-[22px] py-4 cursor-pointer rounded-[4px] sm:text-[16px] text-sm text-[#F9FAFB]'>{s}</div>
                                        )
                                    })}
                                </div>
                            )}
                        </div>
                        <div className='w-full'>
                            <div
                                onClick={() => setShowLevel(index)}
                                className="flex items-center justify-between cursor-pointer w-full border-[#334D57] bg-backgroundDark border-[1.2px] rounded-[4.8px] py-[14.4px] h-12 px-[19.2px] text-[16px]"
                            >
                                {!input.levelExperience ? <p className='text-[#667A81]'>Beginner, Intermediate,</p>
                                : <p className='text-[#CCD3D5]'>{input.levelExperience}</p>}
                                <Dropdown className='w-[19.2px] h-[19.2px]'/>
                            </div>
                            {showLevel === index && (
                                <div className="h-[auto] w-[274px] overflow-y-scroll absolute mt-[0%] bg-backgroundDark border border-[#334D57] rounded shadow-lg z-10">
                                    {level.map((l) => (
                                        <div
                                            key={l}
                                            onClick={() => handleLevelChange(index, l)}
                                            className="cursor-pointer px-[26.4px] py-[14.4px] hover:bg-gray-200 text-[#F9FAFB]"
                                        >
                                            {l}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                ))}
                <div className='flex justify-center gap-[7.68px] items-center'>
                    <div className='cursor-pointer border-[0.614px] border-[#334D57] flex justify-center items-center p-[4.92px] rounded-[2.458px]'>
                        <Adds onClick={handleAddInput}/>
                    </div>
                    <p className='text-[13.44px] text-[#667A81]'>Add another language</p>
                </div>
            </div>
            <div className='flex flex-col w-full gap-6'>
                <div className='w-full flex justify-center'>
                    {isLoading ? 
                        <Buttons text={''} icons={<CircularProgress size={28} sx={{ color: 'white' }}/>} padding={'12px 48px'} width={'318px'} hoverColor={inputData.length > 0 ? '#FBA599' : '#BABABA'} bgColor={inputData.length > 0 ? '#FBA599' : '#BABABA'} color={'#00141B'}/>
                    :
                        <Buttons text={'Save'} functions={submitForm} padding={'12px 48px'} width={'318px'} hoverColor={inputData.length > 0 ? '#FBA599' : '#BABABA'} bgColor={inputData.length > 0 ? '#FBA599' : '#BABABA'} color={'#00141B'}/>
                    }
                </div>
            </div>
        </div>
    )
}
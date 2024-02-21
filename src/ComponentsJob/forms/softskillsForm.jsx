import React, { useState } from 'react'
import axios from 'axios'
import { baseURL } from '../../utils/baseURL';
import Buttons from '../button'
import { useNavigate } from 'react-router-dom'
import  Add  from '../../assets/svg/addition.svg'
import  Remove  from '../../assets/svg/_RemoveButton_.svg'
import { CircularProgress } from '@mui/material'

export default function SoftSkillsForm() {
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false)
    const [skill, setSkill] = useState(false)
    const [searchText, setSearchText] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [showDropdown, setShowDropdown] = useState(false);
    const [selected, setSelected] = useState([])
    const accessToken = localStorage.getItem('access_token')

    const selectSoftSkill = async () => {
        setIsLoading(true)
        if (selected.length === 0) {
            setIsLoading(false)
            return;
        }

        const data = {
            skills: selected,
            skill_type: "soft"
        };

        try {
            const response = await axios.post(`${baseURL}account/add_skill`, data, {
                headers: {Authorization: `Bearer ${accessToken}`,}
            });
            if (response.data.status ==='success'){
                setIsLoading(false)
                navigate('/onboarding/portfolio')
            }
        } catch (error) {
            setIsLoading(false)
        }
    }
    
    const handleRemove = (job) => {
        setSelected(selected.filter((value) => value !== job));
    }
    
    const chooseTitle = (value) => {
        setShowDropdown(false)
        setSearchText('')
        setSelected([...selected, value]);
    }
    
    const filterUniqueJobTitles = (data) => {
        const uniqueTitles = new Set();
        const uniqueData = [];
      
        for (const item of data) {
            if (!uniqueTitles.has(item.title.toLowerCase())) {
                uniqueTitles.add(item.title.toLowerCase());
                uniqueData.push(item);
            }
        }
      
        return uniqueData;
    }
    
    const simulateSearch = async (search) => {
        const apiUrl = `https://api.synergyng.app/v1/opportunities/search`;
        const params = { search_term: search };
        const deviceModel = 'web';
        
        try {
            const response = await axios.get(apiUrl, {
                headers: {
                  Authorization: `Bearer ${accessToken}`,
                  device_model: deviceModel,
                },
                params,
            });
            const data = response.data.data;
            const uniqueData = filterUniqueJobTitles(data);
            return uniqueData;
        } catch (error) {
            console.error('API call error:', error);
        }
    }
    
    const handleInputChange = async (e) => {
        const inputValue = e.target.value;
        setSearchText(inputValue);
        setShowDropdown(true);
        setSkill(true)
      
        try {
            const searchResults = await simulateSearch(inputValue);
            setSearchResults(searchResults);
        } catch (error) {
          console.error('Search error:', error);
        }
    };
    
    return (
        <div className='flex-1 phone:mt-8 flex flex-col phone:gap-16 gap-[150px] w-full items-center'>
            <div className='flex flex-col w-full items-center'>
                <div className='flex flex-col phone:w-[421px] w-full'>
                    <div className='flex py-[11.52px] h-12 gap-[9.6px] w-full items-center border-b-[1.44px] border-[#667A81] pr-4'>
                        {searchText.length <= 0 && <Add className='cursor-pointer'/>}
                        <input 
                            placeholder='Click here to add a new skill'
                            className='border-0 caret-[#42B8BD] w-full bg-transparent h-full focus:outline-none text-[16px] text-[#CCD3D5] placeholder:text-[#667A81]'
                            type='text'
                            value={searchText}
                            onChange={handleInputChange}
                        />
                    </div>
                    {showDropdown && (
                        <div className="bg-backgroundDark w-full">
                            {searchResults?.map((s) => {
                                return (
                                    <div key={s.id} onClick={() => chooseTitle(s.title)} className='px-[22px] py-4 cursor-pointer rounded-[4px] sm:text-[16px] text-sm text-[#F9FAFB]'>{s.title}</div>
                                )
                            })}
                        </div>
                    )}
                </div>
                {selected?.length > 0 && (
                    <div className='mt-[57.6px] flex flex-wrap w-full gap-3 justify-center'>
                        {selected?.map((s) => {
                            return (
                                <div className='w-auto py-[9.6px] px-[14.4px] h-[38.6px] border-[1.2px] border-[#10303D] cursor-pointer items-center justify-center flex gap-[4.8px] rounded-full bg-backgroundDark'>
                                    <p className='text-sm text-[#ECE2DC]'>{s}</p>
                                    <Remove onClick={() => handleRemove(s)} />
                                </div>
                            )
                        })}
                    </div>
                )}
                {!skill && <p className='text-[16.8px] text-center text-[#334D57] mt-[57.6px]'>You haven’t added any skills yet</p>}
            </div>
            <div className='phone:mt-0 -mt-[150px] pb-12 flex-1 items-end phone:flex hidden w-full justify-center'>
                {isLoading ? (
                    <Buttons text={''} icons={<CircularProgress size={28} sx={{ color: 'white' }}/>} hoverColor={'#FBA599'} width={'318px'} color='#00141B' bgColor={'#FBA599'} />
                ) : (
                    <Buttons functions={selectSoftSkill} text={'Continue'} hoverColor={selected?.length > 0 ? '#FBA599' : '#BABABA'} width={'318px'} color='#00141B' bgColor={selected?.length > 0 ? '#FBA599' : '#BABABA'} />
                )}
            </div>
            <div className='phone:hidden pb-12 items-end flex w-full justify-center flex-1'>
                {isLoading ? (
                    <Buttons text={''} icons={<CircularProgress size={28} sx={{ color: 'white' }}/>} width={'318px'} color='#00141B' hoverColor={'#FBA599'} bgColor={'#FBA599'} />
                ) : (
                    <Buttons functions={selectSoftSkill} text={'Next'} hoverColor={selected?.length > 0 ? '#FBA599' : '#BABABA'} width={'318px'} color='#00141B' bgColor={selected?.length > 0 ? '#FBA599' : '#BABABA'}/>
                )}
            </div>
        </div>
    )
}
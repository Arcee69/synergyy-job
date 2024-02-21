import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import  Search  from '../../assets/svg/search.svg'
import  Add  from '../../assets/svg/add.svg'
import  Job  from '../../assets/svg/briefcase-job-suitcase-svgrepo-com 1.svg'
import  Mark  from '../../assets/svg/Mark.svg'
import  Remove  from '../../assets/svg/_RemoveButton_.svg'
import Buttons from '../button'
import { CircularProgress } from '@mui/material'

export default function CareerForm() {
    const navigate = useNavigate()
    const [searchText, setSearchText] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [showDropdown, setShowDropdown] = useState(false);
    const [selected, setSelected] = useState([])
    const [popular, setPopular] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const accessToken = localStorage.getItem('access_token')
    
    useEffect(() => {
        popularOpportunities();
    }, [])

    const saveJobInterest = async () => {
        setIsLoading(true);

        const apiUrl = `https://api.synergyng.app/v1/opportunities/save_multiple_job_interests`;
        const data = {
            interests: selected.map((title) => ({
                title,
                location: ""
            }))
        };
        
        try {
            const response = await axios.post(apiUrl, data, {
                headers: {
                  Authorization: `Bearer ${accessToken}`,
                },
            });
            if (response.status = "success") {
                setTimeout(() => {
                    setIsLoading(false);
                    // navigate('/select-location')
                    navigate('/welcome')
                }, [1000]);
            }
        } catch (error) {
            console.error('API call error:', error);
        }   
    }

    const toggleSelection = (value) => {
        if (selected.length < 3 && selected.includes(value)) {
          setSelected(selected.filter((item) => item !== value));
        } else if (selected.length < 3) {
          setSelected([...selected, value]);
        }
    };
      
    const chooseTitle = (value) => {
        toggleSelection(value);
        setShowDropdown(false)
    }

    const handleRemove = (job) => {
        setSelected(selected.filter((value) => value !== job));
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
    
    const popularOpportunities = async () => {
        const apiUrl = `https://api.synergyng.app/v1/opportunities/popular`;
        
        try {
            const response = await axios.get(apiUrl, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                }
            });
            const data = response.data.data;
            setPopular(data);
        } catch (error) {
            console.error('API call error:', error);
        }
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
    
    const handleInputChange = async (e) => {
        const inputValue = e.target.value;
        setSearchText(inputValue);
        setShowDropdown(true);
      
        try {
            const searchResults = await simulateSearch(inputValue);
            setSearchResults(searchResults);
        } catch (error) {
          console.error('Search error:', error);
        }
    };

    return (
        <div className='w-full flex flex-col sm:gap-[72px] gap-8'>
            <div className='w-full'>
                <div className='w-full flex'>
                    <input
                        type="text"
                        placeholder="Search Job title"
                        id="name"
                        name="name"
                        className="caret-[#42B8BD] w-full border-[#334D57] bg-backgroundDark border rounded-[4px] sm:py-4 py-3 h-10 sm:h-12 sm:pl-12 pl-10 pr-4 focus:outline-none text-[16px] text-[#F9FAFB] placeholder:text-[#667A81]"
                        value={searchText}
                        onChange={handleInputChange}
                    />
                    <div className='absolute sm:pt-4 pt-3 px-4'>
                        <Search />
                    </div>
                </div>
                {showDropdown && (
                    <div className="bg-backgroundDark">
                        {searchResults?.map((s) => {
                            return (
                                <div key={s.id} onClick={() => chooseTitle(s.title)} className='px-[22px] py-4 cursor-pointer rounded-[4px] sm:text-[16px] text-sm text-[#F9FAFB]'>{s.title}</div>
                            )
                        })}
                    </div>
                )}
                {selected?.length > 0 && (
                    <div className='mt-6 flex flex-col gap-1'>
                        {selected?.map((s) => {
                            return (
                                <div className='cursor-pointer items-center flex justify-between p-3 w-full rounded-lg bg-backgroundDark'>
                                    <div className='flex gap-2 items-center'>
                                        <Job />
                                        <p className='text-sm text-[#42B8BD]'>{s}</p>
                                    </div>
                                    <Remove onClick={() => handleRemove(s)} />
                                </div>
                            )
                        })}
                    </div>
                )}
            </div>
            <div className='mt-4 sm:mt-0 flex flex-col gap-6 w-full'>
                <h2 className='sm:text-[16.4px] text-[14.4px] font-semibold text-white'>Popular Jobs</h2>
                <div className='flex flex-wrap gap-y-3 gap-[10px] w-full'>
                    {popular?.map((p) => {
                        return (
                            <div key={p} onClick={() => toggleSelection(p.title)} className='items-center py-2 px-3 cursor-pointer flex gap-1 rounded-[100px] border border-[#024355]'>
                                <p className={`sm:text-[16px] text-sm ${selected.includes(p.title) ? 'text-[#42B8BD]' : 'text-white'}`}>{p.title}</p>
                                {selected.includes(p.title) ? <Mark /> : <Add />}
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className='flex flex-col gap-4 w-full items-center'>
                {isLoading ? (
                    <Buttons text='' icons={<CircularProgress size={34} sx={{ color: 'white' }}/>} hoverColor={selected?.length > 0 ? '#FBA599' : '#BABABA'} width={'318px'} color='#00141B' bgColor={selected?.length > 0 ? '#FBA599' : '#BABABA'} />
                ) : (
                    <Buttons padding={'12px 48px'} width={'318px'} hoverColor={selected ? '#FBA599' : '#BABABA'} functions={saveJobInterest} text={'Continue'} bgColor={selected?.length > 0 ? '#FBA599' : '#BABABA'} color={'#00141B'}/>
                )}
                <p className='sm:text-[16px] cursor-pointer text-sm font-semibold opacity-60 text-[#334D57]' onClick={() => navigate('/welcome')}>Skip</p>
            </div>
        </div>
    )
}

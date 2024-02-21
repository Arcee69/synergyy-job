import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import locationsData from '../../utils/cities.json'
import   Locate from '../../assets/svg/location-pin (1) 1.svg'
import   CloseIcon from '../../assets/svg/_RemoveButton_.svg'
import Buttons from '../button'
import CustomizedSwitches from '../switch'
import { CircularProgress } from '@mui/material'

export default function LocationForm() {
    const locations = locationsData.map((location) => ({
        code: location.country,
        name: location.name,
    }));
    
    const navigate = useNavigate()
    const [selected, setSelected] = useState('');
    const [filteredLocations, setFilteredLocations] = useState([]);
    const [searchText, setSearchText] = useState('')
    const [isLoading, setIsLoading] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    const accessToken = localStorage.getItem('access_token')


    const handleInputChange = async (e) => {
        const inputValue = e.target.value;
        setSearchText(inputValue);
        const filtered = locations.filter((location) =>
            location.name.toLowerCase().includes(inputValue.toLowerCase())
        );

        setFilteredLocations(filtered);
        setShowDropdown(true);
    };

    const handleselect = (location) => {
        setSelected(location.name)
        setFilteredLocations([]);
        setShowDropdown(false);
        setSearchText('')
    }

    const updateLocationProfile = async () => {
        setIsLoading(true);

        const apiUrl = `https://api.synergyng.app/v1/account/update_profile`;
        const deviceModel = 'web';
        const data = {
            location: selected
        }
        
        try {
            const response = await axios.post(apiUrl, data, {
                headers: {
                  Authorization: `Bearer ${accessToken}`,
                  device_model: deviceModel,
                },
            });
            if (response.status = "success") {
                setTimeout(() => {
                    setIsLoading(false);
                    navigate('/welcome')
                }, [1000]);
            }
        } catch (error) {
            console.error('API call error:', error);
        }
    }

    return (
        <div className='w-full flex flex-col sm:gap-[72px] gap-8'>
            <div className='w-full'>
                <div className='w-full flex'>
                    {selected ? (
                        <div className="flex justify-between w-full border-[#334D57] bg-backgroundDark border rounded-[4px] h-10 sm:h-12 items-center px-3 focus:outline-none text-[16px] text-[#F9FAFB] placeholder:text-[#667A81]">                            
                            <div className='flex items-center gap-1'>
                                <Locate />
                                <p>{selected}</p>
                            </div>
                            <CloseIcon className='cursor-pointer' onClick={() => setSelected('')}/>
                        </div>
                    ) : (
                        <input
                            type="text"
                            placeholder="City or State"
                            id="name"
                            name="name"
                            className="caret-[#42B8BD] w-full border-[#334D57] bg-backgroundDark border rounded-[4px] sm:py-4 py-3 h-10 sm:h-12 sm:pl-12 pl-10 pr-4 focus:outline-none text-[16px] text-[#F9FAFB] placeholder:text-[#667A81]"
                            value={searchText}
                            onChange={handleInputChange}
                        />
                    )}
                    {!selected && <div className='absolute sm:pt-3 pt-[9px] px-4'>
                        <Locate />
                    </div>}
                </div>
                {showDropdown && (
                    <div className="bg-backgroundDark">
                        {filteredLocations?.map((l) => {
                            return (
                                <div key={l.code} onClick={() => handleselect(l)} className='px-[22px] py-4 cursor-pointer rounded-[4px] sm:text-[16px] text-sm text-[#F9FAFB]'>{l.name}</div>
                            )
                        })}
                    </div>
                )}
            </div>
            <div className='mt-4 sm:mt-0 flex justify-between w-full items-center'>
                <p className='text-[14.4px] font-semibold text-[#E3E7E8]'>I’m open to remote work</p>
                <CustomizedSwitches />
            </div>
            <div className='mt-16 sm:mt-0 flex flex-col gap-4 w-full items-center'>
                {isLoading ? (
                    <Buttons text='' icons={<CircularProgress size={34} sx={{ color: 'white' }}/>} hoverColor={selected ? '#FBA599' : '#BABABA'} width={'318px'} color='#00141B' bgColor={selected ? '#FBA599' : '#BABABA'} />
                ) : (
                    <Buttons padding={'12px 48px'} width={'318px'} functions={updateLocationProfile} text={'Continue'} hoverColor={selected ? '#FBA599' : '#BABABA'} bgColor={selected ? '#FBA599' : '#BABABA'} color={'#00141B'}/>
                )}
                <p className='sm:text-[16px] text-sm font-semibold opacity-60 text-[#334D57] cursor-pointer' onClick={() => navigate('/welcome')}>Skip</p>
            </div>
        </div>
    )
}

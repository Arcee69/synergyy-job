import React, { useState } from 'react'
import  Dropdown  from '../../assets/svg/chevron-down.svg';
import Buttons from '../button';
import { useNavigate } from 'react-router-dom';
import SelectModal from '../select-modal';
import LanguageOption from './languageOption';
import axios from 'axios';
import { baseURL } from '../../utils/baseURL';
import { CircularProgress } from '@mui/material';

export default function AdditionalInfoForm2() {
    const [isLoading, setIsLoading] = useState(false)
    const [languageDisplay, setLanguageDisplay] = useState(false)
    const [language, setLanguage] = useState('')
    const navigate = useNavigate()
    const accessToken = localStorage.getItem('access_token')

    const handleSubmit = async() => {
        setIsLoading(true)
        if (!language){
            setIsLoading(false)
            return
        }

        const data = {
            language_proficiency: language
        }
        
        try {
            const response = await axios.post(`${baseURL}account/update_profile`, data, {
                headers: {Authorization: `Bearer ${accessToken}`,}
            });
            if (response.data.status ==='success'){
                setIsLoading(false)
                setLanguage('')
                navigate('/onboarding/profile-picture')
            }
        } catch (error) {
            setIsLoading(false)
        }
    }

    return (
        <div className='flex flex-col mt-[30px] w-[421px] flex-1'>
            <div className='w-full'>
                <p className='text-[19.2px] text-white font-semibold capitalize'>Language proficiency</p>
                <div 
                    onClick={() => setLanguageDisplay(true)}
                    className="mt-[28.8px] cursor-pointer flex justify-between items-center w-full border-[#334D57] bg-backgroundDark border-[1.2px] rounded-[4.8px] sm:py-[14.4px] py-3 h-10 sm:h-12 sm:px-[19.2px] px-4 pr-4  text-[16px] text-[#334D57]"
                >
                    {language ? <p className='text-[#CCD3D5]'>{language}</p> : 'My English skills are'}
                    <Dropdown />
                </div>
            </div>
            <div className='mt-10 mb-5 w-full flex justify-center flex-1 items-end'>
                {isLoading ? (
                    <Buttons text={''} icons={<CircularProgress size={28} sx={{ color: 'white' }}/>} hoverColor={'#FBA599'} width={'318px'} color='#00141B' bgColor={'#FBA599'} />
                ): (
                    <Buttons height={'44px'} padding={'12px 48px'} width={'318px'} functions={handleSubmit} text={'Continue'} hoverColor={language ? '#FBA599' : '#BABABA'} bgColor={language ? '#FBA599' : '#BABABA'} color={'#00141B'}/>
                )}
            </div>
            <SelectModal open={languageDisplay} title={'I can speak'} closeModal={() => setLanguageDisplay(false)}>
                <LanguageOption setLanguage={setLanguage} language={language} closeModal={() => setLanguageDisplay(false)}/>
            </SelectModal>
        </div>
    )
}

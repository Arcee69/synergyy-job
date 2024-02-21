import React, { useState } from 'react'
import  Profile  from '../../assets/svg/Profile.svg'
import  Profile2  from '../../assets/svg/Profile2.svg'
import  Add  from '../../assets/svg/add.svg'
import Buttons from '../button'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { baseURL } from '../../utils/baseURL'
import { CircularProgress } from '@mui/material'

export default function ProfilePictureForm() {
    const navigate = useNavigate()
    const accessToken = localStorage.getItem('access_token')
    const [picture, setPicture] = useState(null)

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPicture(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };
    
    const uploadPicture = async () => {
        const data = {
            profile_photo: picture
        }
        try {
            const response = await axios.post(`${baseURL}account/update_profile`, data, {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                },
            });
    
            if (response.data.status ==='success') {
                navigate('/onboarding/welcome')
            }
        } catch (error) {
            console.error(error, 'error removing picture')
        }
    }

    return (
        <div className='phone:mt-[27.6px] mt-4 flex flex-col items-center flex-1 w-full'>
            <div className='flex flex-col phone:gap-[57.6px] gap-12 items-center w-full'>
                {!picture ? <Profile /> : (<img src={picture} alt='profile' className='rounded-full phone:w-[172.8px] phone:h-[172.8px] w-[144px] h-[144px]' />)}
                <div className={`${picture && 'opacity-30'} cursor-pointer phone:w-[381.6px] w-full rounded-[28.8px] border-[1.2px] border-[#99A6AB] phone:py-[14.4px] py-3 phone:px-[57.6px] px-12 flex phone:gap-3 gap-[10px] items-center justify-center`}>
                    <Add />
                    <label htmlFor="fileInput" className='phone:text-[19.2px] text-[16px] font-medium text-[#99A6AB]'>Upload photo</label>
                    <input
                        id="fileInput"
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        style={{ display: 'none' }}
                    />
                </div>
                {picture && <p onClick={() => setPicture(null)} className='phone:-mt-[28.8px] -mt-6 phone:text-[16.8px] text-[14px] font-medium text-[#667A81]'>Remove Image</p>}
            </div>

            <div className='mt-10 mb-5 w-full flex justify-center flex-1 items-end'>
                <Buttons height={'44px'} padding={'12px 48px'} width={'318px'} functions={uploadPicture} text={'Next'} hoverColor={picture ? '#FBA599' : '#BABABA'} bgColor={picture ? '#FBA599' : '#BABABA'} color={'#00141B'}/>
            </div>
        </div>
    )
}

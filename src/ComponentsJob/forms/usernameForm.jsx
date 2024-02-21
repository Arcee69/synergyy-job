import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { baseURL } from '../../utils/baseURL';
import { CircularProgress } from '@mui/material';
import Box from '../box'
import  Tick  from '../../assets/svg/🦆 icon _tick circle_.svg'
import Buttons from '../button';

export default function UsernameForm({hamburger, setHamburger}) {
    const formValue = JSON.parse(localStorage.getItem('synergyyUser'));
    const name = formValue?.first_name;
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const [username, setUsername] = useState('');
    const [errorMessage, setErrorMessage] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        if (!username) {
            setError(true);
            setErrorMessage('Username is required!')
            return;
        }
        
        if (username.length <= 2) {
            setError(true);
            setErrorMessage('Too Short!')
            return;
        } 
        
        const state = {
            username: username
        }
        
        try {
            const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjE2NiwiaWF0IjoxNjkwMjk2NDI4fQ.js9zS9NPuB412gx4qFKgKU2Ug33MbHj7RZFB-I0T6iQ';
            const headers = {
                'Authorization': `Bearer ${token}`
            };
            const response = await axios.post(`${baseURL}account/check-username`, state, { headers });
            if (response.data.status === 'success') {
                setIsLoading(false);
                setSuccess(true);
                setTimeout(() => {
                    navigate('/welcome', { state })
                }, 1000)
            } 
        } catch (error) {
            console.log(error);
            setIsLoading(false);
            setErrorMessage(error.response.data.message);
        }
    };
    
    return (
        <Box setHamburger={setHamburger} hamburger={hamburger} returns='username'>
            <h1 className='mb-2 text-white text-center sm:text-[32px] sm:font-semibold text-[24px] font-bold'>Welcome {name}, </h1>
            <h3 className='text-center text-white opacity-[0.6]'>Let’s win together!</h3>
            <form onSubmit={handleSubmit}>
                <div className='lg:my-[72px] my-[121px]'>
                    <h4 className='text-[20px] text-center text-white'>Pick a <span className='italic'>username</span></h4>
                    <div className='mt-6 py-2 px-4 justify-center'>
                        <div className='flex'>
                            <input 
                                value={username}
                                onChange={(e) => {
                                    setUsername(e.target.value);
                                    setError(false);
                                }}
                                className={`${error ? 'border-[#E73131]' : 'border-gray'} w-full text-white bg-background border-[0.8px] rounded-[16px] px-4 py-3`} />
                            {success && <Tick className='-ml-10 my-[12.5px]' />}
                            {error && <p className='-ml-10 my-[12.5px] text-[19px] font-semibold text-[#E73131]'>!</p>}
                        </div>
                        {error && (<p className='mt-2 text-[#E73131]'>{errorMessage}</p>)}
                    </div>
                </div>
                <div className='flex justify-center'>
                    {isLoading ? (
                        <Buttons text='' icons={<CircularProgress size={28} sx={{ color: 'white' }}/>} hoverColor='#F56A6A' width='334px' weight='600' padding='14px 48px' bgColor='#FBA599' />
                    ) : (
                        <Buttons text='Proceed' hoverColor='#F56A6A' type='submit' width='334px' weight='600' padding='14px 48px' color='#00141B' bgColor={error ? '#BABABA' : '#FBA599'}/>
                    )}
                </div>
            </form>
        </Box>
    )
}

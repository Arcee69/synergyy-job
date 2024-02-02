import React, { useRef, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { baseURL } from '../../utils/baseURL';
import { useSnackbar } from 'notistack';
import { CircularProgress } from '@mui/material';
import Box from '../box'
import Buttons from '../button'
import { OtpInput } from '../input'

export default function OtpForm({setHamburger, hamburger}) {
    const formValue = JSON.parse(localStorage.getItem('synergyyReg'));
    const email = formValue?.email;
    const inputRefs = useRef([]);
    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();
    const [isLoading, setIsLoading] = useState(false);
    const [otp, setOtp] = useState('');
    const [countdown, setCountdown] = useState(60);

    useEffect(() => {
        const interval = setInterval(() => {
          setCountdown((prevCountdown) => prevCountdown - 1);
        }, 1000);
    
        return () => {
          clearInterval(interval);
        };
    }, []);
    
    useEffect(() => {
        if (countdown === 0) {
          setCountdown(60);
        }
    }, [countdown]);

    const handleResend = async () => {
        setCountdown(60);
        
        const formData = {
            email: email,
        }
        
        try {
            const response = await axios.post(`${baseURL}register/resend-email-verification`, formData);
            if (response.data.status === 'success') {
                enqueueSnackbar(`${response.data.message}`, {
                    variant: 'info',
                    anchorOrigin: {
                        vertical: 'top',
                        horizontal: 'center',
                    },
                    style: { 
                        fontSize: 16, 
                        backgroundColor: '#3DD368'
                    },
                });       
            } 
        } catch (error) {
            console.log(error.response.data.message);
            enqueueSnackbar(`${error.response.data.message}`, {
                variant: 'error',
                anchorOrigin: {
                    vertical: 'top',
                    horizontal: 'center',
                },
                style: { 
                    fontSize: 16, 
                    backgroundColor: '#F56A6A'
                },
            });
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        
        const formData = {
            email: email,
            token: otp
        }

        try {
            const response = await axios.post(`${baseURL}register/email-confirm`, formData);
            if (response.data.status === 'success') {
                localStorage.setItem('synergyyUser', JSON.stringify(response.data.user));
                setTimeout(() => {
                    setIsLoading(false);
                    enqueueSnackbar(`${response.data.message}`, {
                        variant: 'success',
                        anchorOrigin: {
                            vertical: 'top',
                            horizontal: 'center',
                        },
                        style: { 
                            fontSize: 16, 
                            backgroundColor: '#3DD368'
                        },
                    });
                    navigate('/welcome');
                    localStorage.removeItem('synergyyReg');
                }, [1000]);
            }
        } catch (error) {
            console.log(error.response.data.message);
            setIsLoading(false);
            enqueueSnackbar(`${error.response.data.message}`, {
                variant: 'error',
                anchorOrigin: {
                    vertical: 'top',
                    horizontal: 'center',
                },
                style: { 
                    fontSize: 16, 
                    backgroundColor: '#F56A6A'
                },
            });
        }
    }

    return (
        <Box setHamburger={setHamburger} hamburger={hamburger} returns='otp'>
            <h1 className='sm:mb-6 mb-8 text-white text-center text-[26px] sm:text-[32px] font-semibold'>Confirm your Email</h1>
            <h3 className='text-center text-white text-[15px]'>We sent your <span className='font-medium'>OTP</span> to {email}.</h3>
            {/* <h3 className='text-center text-white'>Please enter below</h3> */}
            <form onSubmit={handleSubmit} className='w-full'>
                <div className='sm:mt-12 mt-[25px] mb-8 sm:mb-[72px] flex sm:space-x-4 sm:justify-center justify-between px-[7px] sm:px-0 sm:w-full'>
                    {/* {Array(6)
                        .fill()
                        .map((_, idx) => {
                            return (
                                <OtpInput
                                    key={idx}
                                    ref={(el) => (inputRefs.current[idx] = el)}
                                    placeholder="-"
                                    onChange={(e) => {
                                        const value = e?.target?.value;
                                        if (value === "") return;
                                        if (idx === 5 && value === "") return;
                                        inputRefs?.current[idx + 1]?.focus();
                                        const inputValues = inputRefs.current?.map((value) => value?.value);
                                        const otpString = inputValues.filter(Boolean).join("");
                                        const otpNumber = parseInt(otpString, 10);
                                        setOtp(otpNumber);
                                    }}
                                    fullWidth
                                />
                            );
                        })
                    } */}
                    <input
                        type="text"
                        className="text-center text-[16px] font-normal w-full h-[58px] border border-[#ECE2DC] rounded-[4px] py-3 px-4 bg-inherit text-gray"
                        placeholder='Enter verification code.'
                        onChange={(e) => setOtp(e.target.value)}
                        value={otp}
                    />
                </div>
                <div className='flex justify-center'>
                    {isLoading ? (
                        <Buttons text='' icons={<CircularProgress size={28} sx={{ color: 'white' }}/>} hoverColor='#F56A6A' resWidth='100%' width='334px' weight='600' padding='14px 48px' bgColor='#FBA599' />
                    ) : (
                        <Buttons text='Verify' hoverColor='#F56A6A' type='submit' resWidth='100%' width='334px' weight='600' padding='14px 48px' color='#00141B' bgColor='#FBA599'/>
                    )}
                </div>
            </form>
            <div className='mt-6 flex gap-1 justify-center'>
                <p className='text-[14px] text-light'>Didn’t get the code?</p>
                <p className='text-[14px] font-semibold text-light cursor-pointer' onClick={handleResend}>Resend Code <span className='text-pink'>({countdown}s)</span></p>
            </div>
        </Box>      
    )
}

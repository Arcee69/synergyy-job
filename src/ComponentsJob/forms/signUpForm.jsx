import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { baseURL } from '../../utils/baseURL';
import { useSnackbar } from 'notistack';
import { CircularProgress } from '@mui/material';
import  Logo  from '../../assets/svg/moth.svg'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { signUpValidationSchema } from '../../libs/validationSchemas';
import  Eye  from '../../assets/svg/eye.svg';
import { PiEyeSlashLight } from 'react-icons/pi';
import Buttons from '../button';

export default function SignUpForm() {
    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = async (values, { resetForm }) => {
        setIsLoading(true);
        try {
            const response = await axios.post(`${baseURL}register`, values);
            if (response.data.status === 'success') {
                localStorage.setItem('synergyyReg', JSON.stringify(values));
                localStorage.setItem('access_token', response.data.access_token.token);
                resetForm();
                setTimeout(() => {
                    setIsLoading(false);
                    // enqueueSnackbar(`${response.data.message}`, {
                    //     variant: 'success',
                    //     anchorOrigin: {
                    //         vertical: 'top',
                    //         horizontal: 'center',
                    //     },
                    //     style: { 
                    //         fontSize: 16, 
                    //         backgroundColor: '#3DD368'
                    //     },
                    // });
                    navigate('/otp');
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
    };

    return (
        <div className='lg:w-[58%] w-full px-6 lg:py-[100px] pt-[26px] pb-14'>
            <div className='flex flex-col gap-6 items-center'>
                <Logo />
                <div>
                    <h1 className='text-center text-[26px] font-bold text-white'>Join Synergyy</h1>
                    <h3 className='mt-[6px] text-[15px] text-light text-center'>Achieve big dreams. Together</h3>
                </div>
            </div>
            <div className='mt-10'>
                <Formik
                    initialValues={{ first_name: '', last_name: '', email: '', password: '' }}
                    validationSchema={signUpValidationSchema}
                    onSubmit={handleSubmit}
                >
                    <Form>
                        <div className="flex flex-col mb-4 gap-2">
                            <label htmlFor="name" className="text-[15px] capitalize text-green-300">
                                First name
                            </label>
                            <Field
                                type="text"
                                id="first_name"
                                name="first_name"
                                className="text-[16px] border-gray text-white bg-background border-[0.8px] rounded-[16px] px-[35px] py-3"
                            />
                            <ErrorMessage name="first_name" component="div" className="text-[#F56A6A]" />
                        </div>
                        
                        <div className="flex flex-col mb-4 gap-2">
                            <label htmlFor="name" className="text-[15px] capitalize text-green-300">
                                Last name
                            </label>
                            <Field
                                type="text"
                                id="last_name"
                                name="last_name"
                                className="text-[16px] border-gray text-white bg-background border-[0.8px] rounded-[16px] px-[35px] py-3"
                            />
                            <ErrorMessage name="last_name" component="div" className="text-[#F56A6A]" />
                        </div>

                        <div className="flex flex-col mb-4 gap-2">
                            <label htmlFor="email" className="text-[15px] capitalize text-green-300">
                                Email
                            </label>
                            <Field
                                type="email"
                                id="email"
                                name="email"
                                className="text-[16px] border-gray text-white bg-background border-[0.8px] rounded-[16px] px-[35px] py-3"
                            />
                            <ErrorMessage name="email" component="div" className="text-[#F56A6A]" />
                        </div>
                        
                        <div className="flex flex-col mb-6 gap-2">
                            <label htmlFor="password" className="text-[15px] capitalize text-green-300">
                                Password
                            </label>
                            <div className="relative">
                                <Field
                                    type={showPassword ? 'text' : 'password'}
                                    id="password"
                                    name="password"
                                    className="border-gray w-full text-white bg-background border-[0.8px] rounded-[16px] px-[35px] py-3"
                                />
                                <div
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                                    onClick={togglePasswordVisibility}
                                >
                                    {showPassword ? <Eye /> : <PiEyeSlashLight className='w-6 h-6 fill-white' />}
                                </div>
                            </div>
                            <ErrorMessage name="password" component="div" className="text-[#F56A6A]" />
                        </div>

                        <p className='text-[12px] text-light mb-8'>By creating an account, I accept the <span className='underline cursor-pointer' onClick={() => navigate('/terms&condition')}>Terms & Conditions</span> And <span className='underline cursor-pointer' onClick={() => navigate('/privacypolicy')}>Privacy policy</span>.</p>
                        
                        {isLoading ? (
                            <Buttons text='' icons={<CircularProgress size={28} sx={{ color: 'white' }}/>} hoverColor='#F56A6A' width='100%' weight='600' padding='14px 48px' color='#00141B' bgColor='#FBA599' />
                        ) : (
                            <Buttons text='Continue' type='submit' hoverColor='#F56A6A' width='100%' weight='600' padding='14px 48px' color='#00141B' bgColor='#FBA599' />
                        )}
                    
                        <p className='mt-[23px] text-white text-center phone:text-[16px]'>Already a member? <span className='text-pink font-semibold'>Log In</span></p>
                    </Form>
                </Formik>
            </div>
        </div>
    )
}

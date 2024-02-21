import React, { useState } from 'react'
import Buttons from '../button'
import axios from 'axios';
import { CircularProgress } from "@mui/material"
import { useNavigate } from 'react-router-dom'
import { objectToFormData } from '../../utils/objectToFormData';
import { baseURL } from '../../utils/baseURL';

export default function DesignSubmitForm() {
    const navigate = useNavigate()
    const initialValues = { email: '', inspiration: '', field: '', external_url: '', experience: '' }
    const [contactData, setContactData] = useState(initialValues)
    const [validateFields, setValidateFields] = useState(false)
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('')

    const handleSubmit = async () => {
        setIsLoading(true)
        if (!contactData.email || !contactData.inspiration || !contactData.field || !contactData.external_url || !contactData.experience) {
            setValidateFields(true)
            setIsLoading(false)
            return
        }
        const formData = objectToFormData(contactData)
        try {
            const response = await axios.post(`${baseURL}contest/entry`, formData)
            console.log(response)
            if (response.data.status === 'success') {
                setIsLoading(false)
                setContactData(initialValues)
                navigate('/design-submitted')
            }
        } catch(error) {
            if (error.response.data.message === "unique validation failed on email") {
                setErrorMessage('This email is already registered for the competition.')
                setIsLoading(false)
            }
        }
        setIsLoading(false)   
    }

    return (
        <>
            <form>
                <div className="flex flex-col mini:mb-8 mb-6 gap-2">
                    <label htmlFor="role" className="text-[15px] capitalize text-background">
                        Email
                    </label>
                    <div className='flex'>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={contactData.email}
                            className={`${errorMessage ? 'border-red-500' : 'border-borders'} phone:w-[614px] w-full border-[0.8px] rounded-[16px] px-4 py-3 mini:bg-[#F6F6F6] bg-inherit focus:outline-none height-[38px]`}
                            onChange={(e) => {
                                setContactData(val => {
                                    return { ...val, [e.target.name]: e.target.value }
                                })
                                setErrorMessage('');
                            }}
                        />
                        {errorMessage && 
                            <div className='relative'>
                                <p className='absolute text-red-500 text-[19px] font-semibold right-0 top-0 mt-3 mr-4'>!</p>
                            </div>
                        }
                    </div>
                    {validateFields && !contactData.email && <p className="text-red-500">This field is required</p>}
                    {errorMessage && <p className="text-red-500">{errorMessage}</p>}
                </div>

                <div className="flex flex-col mini:mb-8 mb-6 gap-2">
                    <label htmlFor="role" className="text-[15px] capitalize text-background">
                        Submission category
                    </label>
                    <div className='border-borders border-[0.8px] rounded-[16px] px-[16px] py-[12px] mini:bg-[#F6F6F6] bg-inherit'>
                        <select placeholder="Select"
                            id="message"
                            name="field"
                            value={contactData.field}
                            className="focus:outline-none text-[16px] bg-transparent cursor-pointer h-full w-full custom-dropdown"
                            onChange={(e) => setContactData(prevData => {
                                return { ...prevData, field: e.target.value }
                            })}
                        >
                            <option value={''} className=''>Select</option>
                            <option value="UI/UX Design">UI/UX Design</option>
                            <option value="Graphic Design">Graphic Design</option>
                            <option value="Illustration">Illustration</option>
                            <option value="Motion Design">Motion Design</option>
                            <option value="Fashion Design">Fashion Design</option>
                            <option value="Architecture/Interior Design">Architecture/Interior Design</option>
                        </select>
                    </div>
                    {validateFields && !contactData.field && <p className="text-red-500">This field is required</p>}
                </div>
                
                <div className="flex flex-col mini:mb-8 mb-6 gap-2">
                    <label htmlFor="role" className="text-[15px] capitalize text-background">
                        How many years of design experience do you have?
                    </label>
                    <div className='border-borders border-[0.8px] rounded-[16px] px-[16px] py-[12px] mini:bg-[#F6F6F6] bg-inherit'>
                        <select placeholder="Select"
                            id="message"
                            name="experience"
                            value={contactData.experience}
                            className="focus:outline-none text-[16px] bg-transparent cursor-pointer h-full w-full custom-dropdown"
                            onChange={(e) => setContactData(prevData => {
                                return { ...prevData, experience: e.target.value }
                            })}
                        >
                            <option value={''} className=''>Select</option>
                            <option value="Beginner (0-1 year)">Beginner (0-1 year)</option>
                            <option value="Intermediate (2-3 years)">Intermediate (2-3 years)</option>
                            <option value="Advanced (4+ years)">Advanced (4+ years)</option>
                        </select>
                    </div>
                    {validateFields && !contactData.experience && <p className="text-red-500">This field is required</p>}
                </div>

                <div className="flex flex-col mini:mb-8 mb-6 gap-2">
                    <label htmlFor="name" className="text-[15px] capitalize text-background">
                        What was the inspiration behind this design?
                    </label>
                    <textarea 
                        className="border-borders border-[0.8px] rounded-[16px] px-4 py-3 focus:outline-none h-[98px] mini:bg-[#F6F6F6] bg-inherit"
                        value={contactData.inspiration}
                        onChange={(e) => {
                            setContactData(val => {
                                return { ...val, [e.target.name]: e.target.value }
                            })
                        }}
                        id="name"
                        name="inspiration"
                    />
                    {validateFields && !contactData.inspiration && <p className="text-red-500">This field is required</p>}
                </div>
                
                <div className="flex flex-col mini:mb-14 mb-8 gap-2">
                    <label htmlFor="name" className="text-[15px] capitalize text-background">
                        Link to submission
                    </label>
                    <input
                        type="url"
                        id="name"
                        name="external_url"
                        value={contactData.external_url}
                        onChange={(e) => {
                            setContactData(val => {
                                return { ...val, [e.target.name]: e.target.value }
                            })
                        }}
                        className="border-borders border-[0.8px] mini:bg-[#F6F6F6] bg-inherit rounded-[16px] px-4 py-3 focus:outline-none height-[38px]"
                    />
                    {validateFields && !contactData.external_url && <p className="text-red-500">This field is required</p>}
                </div>

                <Buttons frontIcon={isLoading && <CircularProgress backgroundColor='red' size={'27px'} style={{ color: "white" }} />} functions={handleSubmit} type='button' text={isLoading ? '' : 'Enter'} width='100%' bgColor='linear-gradient(91deg, #F6A351 46.45%, #E3665E 99.37%)' color='#000000' />
            </form>
        </>
    )
}
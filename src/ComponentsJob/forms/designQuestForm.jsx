import React, { useState } from 'react'
import Buttons from '../button'
import axios from 'axios';
import { CircularProgress } from "@mui/material"
import { useNavigate } from 'react-router-dom'
import { objectToFormData } from '../../utils/objectToFormData';
import { baseURL } from '../../utils/baseURL';
import PhoneInput from 'react-phone-input-2';
import "react-phone-input-2/lib/bootstrap.css";

export default function DesignQuestForm() {
    const navigate = useNavigate()
    const initialValues = { name: '', email: '', phone: '', field: '' }
    const [contactData, setContactData] = useState(initialValues)
    const [validateFields, setValidateFields] = useState(false)
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('')

    const handleSubmit = async () => {
        setIsLoading(true)
        if (!contactData.name || !contactData.email || !contactData.phone || !contactData.field) {
            setValidateFields(true)
            setIsLoading(false)
            return
        }
        const formData = objectToFormData(contactData)
        try {
            const response = await axios.post(`${baseURL}contest`, formData)
            console.log(response)
            if (response.data.status === 'success') {
                setIsLoading(false)
                setContactData(initialValues)
                navigate('/design-success')
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
                    <label htmlFor="name" className="text-[15px] capitalize text-background">
                        Full name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={contactData.name}
                        onChange={(e) => {
                            setContactData(val => {
                                return { ...val, [e.target.name]: e.target.value }
                            })
                        }}
                        className="border-borders border-[0.8px] rounded-[16px] px-4 py-3 focus:outline-none height-[38px]"
                    />
                    {validateFields && !contactData.name && <p className="text-red-500">This field is required</p>}
                </div>

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
                            className={`${errorMessage ? 'border-red-500' : 'border-borders'} w-full border-[0.8px] rounded-[16px] px-4 py-3 focus:outline-none height-[38px]`}
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
                        phone Number
                    </label>
                    <PhoneInput
                        id="phoneNumber"
                        name="phone"
                        country='ng'
                        enableSearch={true}
                        value={contactData.phone}
                        className="border-borders border-[0.8px] rounded-[16px] px-4 focus:outline-none"
                        onChange={(e) => {
                            setContactData(val => {
                                return { ...val, phone: e }
                            })
                        }}
                    />
                    {validateFields && !contactData.phone && <p className="text-red-500">This field is required</p>}
                </div>

                <div className="flex flex-col mini:mb-16 mb-10 gap-2">
                    <label htmlFor="role" className="text-[15px] capitalize text-background">
                        Design field
                    </label>
                    <div className='border-borders border-[0.8px] rounded-[16px] px-[16px] py-[12px]'>
                        <select placeholder="Select an option"
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

                <Buttons frontIcon={isLoading && <CircularProgress backgroundColor='red' size={'27px'} style={{ color: "white" }} />} functions={handleSubmit} type='button' text={isLoading ? '' : 'Enter'} width='100%' bgColor='linear-gradient(91deg, #F6A351 46.45%, #E3665E 99.37%)' color='#000000' />
            </form>
        </>
    )
}

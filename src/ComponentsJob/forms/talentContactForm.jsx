import React, { useState } from 'react'
import Buttons from '../button'
import axios from 'axios'
import { objectToFormData } from '../../utils/objectToFormData'
import { baseURL } from '../../utils/baseURL'
import { useSnackbar } from 'notistack'
import {CircularProgress} from "@mui/material"

export default function TalentContactForm() {
    const { enqueueSnackbar } = useSnackbar();
    const initialValues = {name:'', email:'', company:'', services:[]}
    const [talentData, setTalentData] = useState(initialValues);
    const [validateFields, setValidateFields] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [checked, setChecked] = useState([])
    console.log({checked})

    const handleSubmit = async() => {
        setIsLoading(true)
        if (!talentData.name || !talentData.email || !talentData.company || !talentData.services){
            setValidateFields(true)
            setIsLoading(false)
            return
        }
        const formData = objectToFormData(talentData)
        const response = await axios.post(`${baseURL}talent-interests`, formData)
        try {
            if (response.data.status ==='success'){
                setIsLoading(false)
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
                setTalentData(initialValues)
                setChecked('')
                setValidateFields(false)
            }
        } catch (error) {
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
            setIsLoading(false)
        }
    }

    return (
        <div id='contactalent' className='bg-[#F9F9F9] mid:px-20 px-6 py-[50px] mid:py-[11.7%] flex place-content-center'>
            <div className='mid:py-[67px] mid:px-6 px-4 mid:bg-[#F5F5F5] mid:rounded-[40px] mid:w-[684px] w-full'>
                <h1 className='hidden mid:block text-[35.8px] font-bold text-black mb-[21.33px] text-center'>Get in touch</h1>
                <h1 className='mid:hidden text-[27px] font-bold text-black mb-2 uppercase text-center'>Contact Us</h1>
                <h2 className='text-black font-medium text-[18.11px]'>Find the best talent and Take your organization to the next level with synergyy.</h2>
                <form className='mid:mt-[42.67px] mt-6 mid:px-6'>
                    <div className='flex mid:flex-row flex-col mid:gap-4 gap-6'>
                        <div className="flex flex-col mid:mb-8 gap-2 w-full">
                            <label htmlFor="name" className="mid:text-[15px] text-sm capitalize text-background">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="border-borders2 bg-[#EBEBEB] border-[0.8px] rounded-[16px] px-4 py-3 focus:outline-none"
                                value={talentData.name}
                                onChange={(e) => {
                                    setTalentData(val => {
                                        return {...val, [e.target.name]:e.target.value}
                                    })
                                } }
                            />
                            {validateFields && !talentData.name &&<p className="text-red-500">This field is required</p>}
                        </div>

                        <div className="flex flex-col mid:mb-8 mb-6 gap-2 w-full">
                            <label htmlFor="company" className="mid:text-[15px] text-sm capitalize text-background">
                                Company
                            </label>
                            <input
                                type="text"
                                id="company"
                                name="company"
                                className="border-borders2 bg-[#EBEBEB] border-[0.8px] rounded-[16px] px-4 py-3 focus:outline-none"
                                value={talentData.company}
                                onChange={(e) => {
                                    setTalentData(val => {
                                        return {...val, [e.target.name]:e.target.value}
                                    })
                                } }
                            />
                            {validateFields && !talentData.company &&<p className="text-red-500">This field is required</p>}
                        </div>
                    </div>

                    <div className="flex flex-col mb-6 mid:mb-8 gap-2 w-full">
                        <label htmlFor="email" className="mid:text-[15px] text-sm capitalize text-background">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="border-borders2 bg-[#EBEBEB] border-[0.8px] rounded-[16px] px-4 py-3 focus:outline-none"
                            value={talentData.email}
                            onChange={(e) => {
                                setTalentData(val => {
                                    return {...val, [e.target.name]:e.target.value}
                                })
                            } }
                        />
                        {validateFields && !talentData.email &&<p className="text-red-500">This field is required</p>}
                    </div>
                    
                    <div className="flex flex-col mid:mb-[42.67px] mb-[56px] gap-2 w-full">
                        <label htmlFor="message" className="mid:text-[15px] text-sm capitalize text-background">
                            Services you are interested in?
                        </label>
                        <div className="border-borders2 flex flex-col gap-4 bg-[#EBEBEB] border-[0.8px] rounded-[16px] px-6 py-4">
                            <div className='flex items-center gap-3'>
                                <input
                                    name="Talent Attraction"
                                    onChange={(e) => {
                                        if (e.target.checked) {
                                            setChecked([...checked, e.target.name]);
                                        } else {
                                            setChecked(checked.filter(item => item !== e.target.name));
                                        }
                                        setTalentData(val => {
                                            return { ...val, services: checked }
                                        });
                                    }} 
                                    type='checkbox' 
                                    checked={checked.includes('Talent Attraction')}
                                    className='w-[21.6px] h-[21.6px] cursor-pointer'
                                />
                                <p className='text-background capitalize text-sm'>Talent Attraction</p>
                            </div>
                            <div className='flex items-center gap-3'>
                                <input
                                    name="Outstaffing"
                                    onChange={(e) => {
                                        if (e.target.checked) {
                                            setChecked([...checked, e.target.name]);
                                        } else {
                                            setChecked(checked.filter(item => item !== e.target.name));
                                        }
                                        setTalentData(val => {
                                            return { ...val, services: checked }
                                        });
                                    }}
                                    type='checkbox' 
                                    checked={checked.includes('Outstaffing')}
                                    className='w-[21.6px] h-[21.6px] cursor-pointer'
                                />
                                <p className='text-background capitalize text-sm'>Outstaffing</p>
                            </div>
                            <div className='flex items-center gap-3'>
                                <input
                                    name="Upskilling"
                                    onChange={(e) => {
                                        if (e.target.checked) {
                                            setChecked([...checked, e.target.name]);
                                        } else {
                                            setChecked(checked.filter(item => item !== e.target.name));
                                        }
                                        setTalentData(val => {
                                            return { ...val, services: checked }
                                        });
                                    }}
                                    type='checkbox' 
                                    checked={checked.includes('Upskilling')}
                                    className='w-[21.6px] h-[21.6px] cursor-pointer'
                                />
                                <p className='text-background capitalize text-sm'>Upskilling</p>
                            </div>
                            <div className='flex items-center gap-3'>
                                <input
                                    name="Partner with Synergyy"
                                    onChange={(e) => {
                                        if (e.target.checked) {
                                            setChecked([...checked, e.target.name]);
                                        } else {
                                            setChecked(checked.filter(item => item !== e.target.name));
                                        }
                                        setTalentData(val => {
                                            return { ...val, services: checked }
                                        });
                                    }}
                                    type='checkbox' 
                                    checked={checked.includes('Partner with Synergyy')}
                                    className='w-[21.6px] h-[21.6px] cursor-pointer'
                                />
                                <p className='text-background capitalize text-sm'>Partner with Synergyy</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className='w-full flex justify-center'>
                        {isLoading ? (
                            <Buttons text='' icons={<CircularProgress size={28} sx={{ color: 'white' }}/>} bgColor={'#00141B'} hoverColor={'#00141B'} color={'#fff'} width={'211px'}/>
                        ) : (
                            <Buttons functions={handleSubmit} text={'Submit'} bgColor={'#00141B'} hoverColor={'#00141B'} color={'#fff'} width={'211px'}/>
                        )}
                    </div>
                </form>
            </div>
        </div>
    )
}

{/* <div className="flex flex-col mid:mb-[42.67px] mb-[56px] gap-2 w-full">
                        <label htmlFor="message" className="mid:text-[15px] text-sm capitalize text-background">
                            How did you hear about Synergyy
                        </label>
                        <select
                            id="message"
                            name="message"
                            className="text-[16px] cursor-pointer border-borders2 h-12 bg-[#EBEBEB] border-[0.8px] rounded-[16px] px-4 py-3 focus:outline-none"
                            value={contactData.message}
                            onChange={(e) => {
                                setContactData(val => {
                                    return {...val, [e.target.name]:e.target.value}
                                })
                            } }
                        >
                            <option className='text-background opacity-90 font-medium mid:text-[19px]' value={''}>Select</option>
                            <option className='text-background opacity-90 font-medium mid:text-[19px]' value="Social Media">Social Media</option>
                            <option className='text-background opacity-90 font-medium mid:text-[19px]' value="Social Engine (Google,Bing, etc)">Social Engine (Google,Bing, etc)</option>
                            <option className='text-background opacity-90 font-medium mid:text-[19px]' value="Newspaper/Online Newspaper">Newspaper/Online Newspaper</option>
                            <option className='text-background opacity-90 font-medium mid:text-[19px]' value="Referral">Referral</option>
                            <option className='text-background opacity-90 font-medium mid:text-[19px]' value="Internet Advertisement">Internet Advertisement</option>
                            <option className='text-background opacity-90 font-medium mid:text-[19px]' value="Others">Others</option>
                        </select>
                        {validateFields && !contactData.message &&<p className="text-red-500">This field is required</p>}
                    </div>
                     */}
import React, {useRef} from 'react';
import Buttons from '../button';
import { useState } from 'react';
import axios from 'axios';
import { baseURL } from '../../utils/baseURL';
import { objectToFormData } from '../../utils/objectToFormData';
import { SnackbarProvider, enqueueSnackbar } from 'notistack';
import {CircularProgress} from "@mui/material"

export default function ContactForm() {
    const initialValues = {name:'', email:'', phone:'', message:''}
    const buttonRef = useRef(null)
    const buttonRef2 = useRef(null)
    const [contactData, setContactData] = useState(initialValues)
    const [validateFields, setValidateFields] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = async() => {
        setIsLoading(true)
        if (!contactData.name || !contactData.email || !contactData.phone || !contactData.message){
            setValidateFields(true)
            setIsLoading(false)
            return
        }
        const formData = objectToFormData(contactData)
        const response = await axios.post(`${baseURL}contact`, formData)
        console.log(response.data)
        if (response.data.status ==='success'){
            buttonRef?.current.click()
            setIsLoading(false)
            setContactData(initialValues)
        }else{
            buttonRef2?.current.click()
            setIsLoading(false)
        }
    }

    const showTick1  = () => {
        enqueueSnackbar('Form Submitted', { autoHideDuration: 5000, variant:'success', SnackbarContentProps: {
            style: { backgroundColor: '#ff9800', color: '#fff' },
          }, })
    }
    const showTick2  = () => {
        enqueueSnackbar('Form Submission Failed!', { autoHideDuration: 5000, variant:'success', SnackbarContentProps: {
            style: { backgroundColor: '#ff9800', color: '#fff' },
          }, })
    }

    return (
        <div>
                        <SnackbarProvider
                  anchorOrigin={{
                    vertical: 'top', // Set to 'center'
                    horizontal: 'right', // Set to 'center'
                  }}
                  classes={{variantSuccess: {backgroundColor:'red'}}} />
                    <button className='hidden' ref={buttonRef} onClick={showTick1}>Show snackbar</button>
                    <button className='hidden' ref={buttonRef2} onClick={showTick2}>Show snackbar</button>
                {/* <form> */}
                    <div className="flex flex-col mb-8 gap-2">
                        <label htmlFor="name" className="text-[15px] capitalize text-background">
                            Name
                        </label>
                        <input
                            type="text"
                            placeholder="Enter name"
                            id="name"
                            name="name"
                            className="border-borders bg-green-300 border-[0.8px] rounded-[16px] px-4 py-3 focus:outline-none"
                            value={contactData.name}
                            onChange={(e) => {
                                setContactData(val => {
                                    return {...val, [e.target.name]:e.target.value}
                                })
                            } }
                        />
                          {validateFields && !contactData.name &&<p className="text-red-500">This field is required</p>}
                    </div>

                    <div className="flex flex-col mb-8 gap-2">
                        <label htmlFor="email" className="text-[15px] capitalize text-background">
                            Email
                        </label>
                        <input
                            placeholder="Enter email address"
                            type="email"
                            id="email"
                            name="email"
                            className="border-borders bg-green-300 border-[0.8px] rounded-[16px] px-4 py-3 focus:outline-none"
                            value={contactData.email}
                            onChange={(e) => {
                                setContactData(val => {
                                    return {...val, [e.target.name]:e.target.value}
                                })
                            } }
                        />
                         {validateFields && !contactData.email &&<p className="text-red-500">This field is required</p>}
                    </div>

                        <div className="flex flex-col mb-8 gap-2">
                            <label htmlFor="phoneNumber" className="text-[15px] capitalize text-background">
                                phone Number
                            </label>
                            <input
                                type="text"
                                placeholder="+234 808 0000 001"
                                id="phone"
                                name="phone"
                                className="border-borders bg-green-300 border-[0.8px] rounded-[16px] px-4 py-3 focus:outline-none"
                                value={contactData.phone}
                                onChange={(e) => {
                                    setContactData(val => {
                                        return {...val, [e.target.name]:e.target.value}
                                    })
                                } }
                            />
                             {validateFields && !contactData.phone &&<p className="text-red-500">This field is required</p>}
                        </div>

                    <div className="flex flex-col mb-8 gap-2">
                        <label htmlFor="message" className="text-[15px] capitalize text-background">
                            How can we help?
                        </label>
                        <textarea
                            placeholder="Write message here"
                            id="message"
                            name="message"
                            className="border-borders h-[131px] bg-green-300 border-[0.8px] rounded-[16px] px-4 py-3 focus:outline-none"
                            value={contactData.message}
                            onChange={(e) => {
                                setContactData(val => {
                                    return {...val, [e.target.name]:e.target.value}
                                })
                            } }
                        />
                         {validateFields && !contactData.message &&<p className="text-red-500">This field is required</p>}
                    </div>

                    <Buttons text={isLoading ?'':'Send message'} hoverColor='#F56A6A' type='button' width='100%' weight='600' size='13px' padding='14px 48px' color='#00141B' bgColor='#FBA599' frontIcon={isLoading && <CircularProgress backgroundColor='red' size={'27px'} style={{color:"white"}} />} functions={handleSubmit} />
                {/* </form> */}
        </div>
    );
}
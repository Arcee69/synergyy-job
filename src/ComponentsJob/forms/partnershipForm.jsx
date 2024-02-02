import React, { useRef } from 'react';
// import { Formik, Form, Field, ErrorMessage,useFormik} from 'formik';
// import { partnershipValidationSchema } from '../../libs/validationSchemas';
import Buttons from '../button';
import { useState } from 'react';
import axios from 'axios';
import { baseURL } from '../../utils/baseURL';
import { objectToFormData } from '../../utils/objectToFormData';
import { SnackbarProvider, enqueueSnackbar } from 'notistack';
import { CircularProgress } from '@mui/material';
import {styled} from "@mui/material/styles"



// const WhiteSpinner = styled(CircularProgress)({color:'white'})

export default function PartnershipForm(){
    const buttonRef = useRef(null)
    const buttonRef2 = useRef(null)
    const initialValues = {name:'', email:'', phone:'', message:''}
    const [validateFields, setValidateFields] = useState(false)
    const [partnerData, setPartnerData] = useState(initialValues)
    const [isLoading, setIsLoading] = useState(false)

    const handleCheck = (e) => {
        e.preventDefault();
        handleSubmit();
    }

    const handleSubmit = async() => {
        setIsLoading(true)
        if (!partnerData.email ||!partnerData.name || !partnerData.phone || !partnerData.message){
            setValidateFields(true)
            setIsLoading(false)
            return
        }
        const formData = objectToFormData(partnerData)
        const response = await axios.post(`${baseURL}partnership`, formData)
        if (response.data.status === 'success'){
            buttonRef?.current.click()
            setPartnerData(initialValues)
            setValidateFields(false)
            setIsLoading(false)
        }else{
            buttonRef2?.current.click()
            setIsLoading(false)
        }
        console.log(response.data)
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
                    <div className='mt-[24px] mid:mt-[40px] flex flex-col gap-y-[24px]'>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="name" className="text-[15px] capitalize text-background">
                                Name
                            </label>
                            <input
                            required
                                type="text"
                                id="name"
                                name="name"
                                className="border-borders border-[0.8px] rounded-[16px] px-4 py-3 focus:outline-none height-[38px]"
                                value={partnerData.name}
                                onChange={(e) => {
                                    setPartnerData(val => {
                                        return {...val, [e.target.name]:e.target.value}
                                    })
                                }}
                                
                            />
                             {validateFields && !partnerData.name &&<p className="text-red-500">This field is required</p>}
                        </div>

                        <div className='flex w-full justify-between gap-4 flex-col mid:flex-row'>
                            <div className="flex flex-col gap-2 w-full">
                                <label htmlFor="email" className="text-[15px] capitalize text-background">
                                    Email
                                </label>
                                <input
                                    required
                                    type="email"
                                    id="email"
                                    name="email"
                                    //bg-green-300
                                    className="border-borders border-[0.8px] rounded-[16px] px-4 py-3 focus:outline-none"
                                    value={partnerData.email}
                                    onChange={(e) => {
                                        setPartnerData(val => {
                                            return {...val, [e.target.name]:e.target.value}
                                        })
                                    }}
                                />
                                {validateFields && !partnerData.email &&<p className="text-red-500">This field is required</p>}
                            </div>

                            <div className="flex flex-col gap-2 w-full">
                                <label htmlFor="phoneNumber" className="text-[15px] capitalize text-background">
                                    phone
                                </label>
                                <input
                                    required
                                    type="text"
                                    placeholder="+234 808 0000 001"
                                    id="phone"
                                    name="phone"
                                    className="border-borders border-[0.8px] rounded-[16px] px-4 py-3 focus:outline-none"
                                    value={partnerData.phone}
                                    onChange={(e) => {
                                        setPartnerData(val => {
                                            return {...val, [e.target.name]:e.target.value}
                                        })
                                    }}/>
                                {validateFields && !partnerData.phone &&<p className="text-red-500">This field is required</p>}
                            </div>
                        </div>

                        <div className="flex flex-col gap-2 mb-[40px] mid:mb-[32px]">
                            <label htmlFor="message" className="text-[15px] capitalize text-background">
                                Message
                            </label>
                            <textarea
                            required
                                rowsMin={10}
                                type="text"
                                id="message"
                                name="message"
                                className="border-borders border-[0.8px] rounded-[16px] px-4 py-3 focus:outline-none min-h-[131px]"
                                value={partnerData.message}
                                onChange={(e) => {
                                    setPartnerData(val => {
                                        return {...val, [e.target.name]:e.target.value}
                                    })
                                }}
                            />
                             {validateFields && !partnerData.message &&<p className="text-red-500">This field is required</p>}
                        </div>
                    </div>

                    <div className='hidden mid:block relative'>
                        <Buttons functions={handleCheck} text={isLoading ? '': 'Send'} hoverColor='#F56A6A' type='button' width='100%' weight='600' size='16px' padding='14px 48px' color='#00141B' bgColor='#FBA599' frontIcon={isLoading &&  <CircularProgress style={{color:"white"}} size={'27px'}/>}  />
                        <p className='hidden mid:block mt-[23px] text-center text-[#00141B]'>Email us at <span className='cursor-pointer text-[#BF1E08]'>team@synergyy.io </span></p>
                    </div>
                    <div className='block mid:hidden relative'
                    onClick={(e) => {
                    e.preventDefault()
                    handleSubmit()
                    }}>
                    <Buttons text={ isLoading? '': 'Continue'} hoverColor='#F56A6A' type='button' width='100%' weight='600' size='16px' padding='14px 48px' color='#00141B' bgColor='#FBA599' frontIcon={isLoading &&  <CircularProgress style={{color:"white"}} size={'27px'}/>} />
                    </div>
        </div>
    )
}
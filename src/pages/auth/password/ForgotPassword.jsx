import React, { useEffect, useState } from 'react'
import { Form, Formik } from 'formik'
import { CgSpinner } from 'react-icons/cg';
import { BsEye, BsEyeSlash } from "react-icons/bs";
import * as Yup from "yup"
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import Logo from "../../../assets/svg/auth_logo.svg"
import Handshake from "../../../assets/img/handshake.png"
import Marvis from "../../../assets/img/marvis.png"
import Chat from "../../../assets/img/chat.png"
import Offer from "../../../assets/img/offer.png"
import LogoHome from "../../../assets/svg/sidebar_logo.svg"

import { api } from '../../../services/api';
import { appUrls } from '../../../services/urls';

const ForgotPassword = () => {
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate()

    const formValidationSchema = Yup.object().shape({
        email: Yup.string().email().required(),
    })

    const submitForm = async (values, action) => {
        setLoading(true);
        let formData = new FormData(); 
        formData.append('email', values?.email);


        localStorage.setItem("email", values?.email);

        await api.post(appUrls?.FORGOT_PASSWORD_URL, formData)
        .then((res) => {
            console.log(res, "toph")
            setLoading(false);
            toast(`${res?.data?.message}`, {
                position: "top-right",
                autoClose: 3500,
                closeOnClick: true,
            });
            navigate("/reset-password")
        })
        .catch((err) => {
            console.log(err, "toph")
            setLoading(false);
            toast(`${err?.data?.message}`, {
                position: "top-right",
                autoClose: 3500,
                closeOnClick: true,
            });
        })      
    }


  return (
    <div className='bg-[#fff]  w-full flex flex-col lg:flex-row overflow-x-hidden h-auto'>
        {/* <div className='flex lg:hidden' >
          <MiniHeader />
        </div> */}
        <div 
            className='h-screen hidden px-[68px] lg:flex flex-col gap-[127px] py-[30px] w-[40%]'
            style={{ background:"linear-gradient(to bottom, #FDB18180, #FDB18100)" }}
        >
            <img src={LogoHome} alt='LogoHome' className='cursor-pointer w-[183px] h-[60px]' onClick={() => navigate("/")} />
            <div className='w-[491px] h-[433px] relative'>
                <img src={Handshake} alt='Handshake' className=' w-[338px] h-[288px]' />
                <img src={Marvis} alt='Marvis' className='w-[241px] h-[50px] absolute -top-5 right-20' />
                <img src={Offer} alt='Offer' className='w-[140px] h-[90px] absolute top-40 -left-14' />
                <img src={Chat} alt='Chat' className='w-[241px] h-[211px] absolute right-20 top-48' />
            </div>
        </div>
        <div className='w-full lg:w-[55%] mt-[20px] lg:mt-10 flex justify-center lg:py-[84px] animate__animated animate__fadeInUp'>
            <div className='rounded-lg w-[342px] lg:w-[430px] bg-[#fff]   px-0  py-[57px] lg:py-8 flex flex-col items-start gap-6'>
                <img src={Logo} alt='logo' className='flex lg:hidden' />
                <div className='w-full flex flex-col gap-1'>
                    <p className='text-[#043246] font-mont text-[24px] lg:text-[32px] font-semibold'>Forgot your password?</p>
                    <p className='text-[#000709] font-mont text-sm lg:text-lg font-normal'>Please enter your registered email address to reset your password</p>
                </div>
                <div className='mt-2'>
                    <Formik
                        initialValues={{
                            email: "",
                        }}
                            validationSchema={formValidationSchema}
                            onSubmit={(values, action) => {
                            window.scrollTo(0, 0);
                            console.log(values, "market")
                            submitForm(values, action);
                        }}
                    >
                        {({
                            handleSubmit,
                            handleChange,
                            dirty,
                            isValid,
                            setFieldValue,
                            errors,
                            touched,
                            // setFieldTouched,
                            values,
                        }) => (
                            <Form onSubmit={handleSubmit} className="flex justify-center ">
                                <div className="flex flex-col gap-6">
                                    <div className='flex flex-col gap-2'>
                                        <label htmlFor='email' className='font-mont font-medium text-[#043246] text-sm' >Email address</label>
                                        <input
                                            name="email"
                                            placeholder="example@gmail.com"
                                            type="email" 
                                            value={values?.email}
                                            onChange={handleChange}
                                            className="outline-none w-[342px] rounded lg:w-[420px] bg-[#FFF] border  border-[#E5E5E5] p-3 h-[40px] border-solid "
                                        />
                                        {errors.email && touched.email ? (
                                        <div className="text-RED-_100 text-xs">
                                            {errors.email}
                                        </div>
                                        ) : null}
                                    </div>
                                 
                                    <button
                                        className={`${isValid ? "bg-[#FDB181]" : "bg-[#BABABA]"} w-full  lg:w-[420px] font-mont flex items-center border border-[#000709] rounded-[6px] justify-center mt-[16px] h-[45px] text-base text-center`}
                                        type="submit"
                                        disabled={!isValid}
                                    >
                                        <p className='text-[#000709] text-sm font-bold'>{loading ? <CgSpinner className=" animate-spin text-lg " /> : 'Continue'}</p>
                                        
                                    </button>
                                    <p 
                                        className='text-center font-mont font-semibold text-base mt-[8px] lg:mt-0'
                                        onClick={() => navigate("/talent/login")}
                                    >
                                        Back to Login
                                    </p>
                                </div>

                            </Form>
                        )}
                    </Formik>
                </div>

            </div>

        </div>    
        <div 
            className='w-full px-[38px] pb-24 lg:hidden flex flex-col gap-[86px] py-[40px]'
            style={{ background:"linear-gradient(to bottom, #FDB18180, #FDB18100)" }}
        >
            <div className='w-[352px] h-[310px] relative flex items-center justify-center'>
                <img src={Handshake} alt='Handshake' className=' w-[242.32px] h-[206.47px]' />
                <img src={Marvis} alt='Marvis' className='w-[154px] h-[32px] absolute top-10 right-8' />
                <img src={Offer} alt='Offer' className='w-[100.37px] h-[65.19px] absolute top-40 -left-1' />
                <img src={Chat} alt='Chat' className='w-[173.3px] h-[151.87px] absolute right-8 top-48' />
            </div>
        </div> 
    </div>
  )
}

export default ForgotPassword
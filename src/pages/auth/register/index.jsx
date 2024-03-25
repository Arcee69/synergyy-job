import React, { useState } from 'react'
import { Form, Formik } from 'formik'
import { CgSpinner } from 'react-icons/cg';
import { BsEye, BsEyeSlash } from "react-icons/bs";
import * as Yup from "yup"
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

import Logo from "../../../assets/svg/auth_logo.svg"
import Onboarding from "../../../assets/img/onboarding_img.png"
import Handshake from "../../../assets/img/handshake.png"
import Marvis from "../../../assets/img/marvis.png"
import Chat from "../../../assets/img/chat.png"
import Offer from "../../../assets/img/offer.png"
// import LogoHome from "../../../assets/svg/logo.svg"
import LogoHome from "../../../assets/svg/sidebar_logo.svg"

import { api } from '../../../services/api';
import { appUrls } from '../../../services/urls';
import MiniHeader from '../../../layouts/HompageLayout/MiniHeader';


const Register = () => {
    const [loading, setLoading] = useState(false)
    const [showPassword, setShowPassword] = useState(false);
    const [showPassE, setShowPassE] = useState('false');


    const formValidationSchema = Yup.object().shape({
        email: Yup.string().email().required(),
        firstName: Yup.string().required(),
        lastName: Yup.string().required(),
        password: Yup.string().min(7).required(),
    })

    const navigate = useNavigate()

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
      };

    const submitForm = async (values, action) => {
        setLoading(true)
      
        let formData = new FormData(); 
        formData.append('first_name', values?.firstName);
        formData.append('last_name', values?.lastName);
        formData.append('email', values?.email);
        formData.append('password', values?.password);
        formData.append('fcm_token', "");
        formData.append('device_type', "");
        formData.append('referral_token', "");

        localStorage.setItem("email", values?.email);
        localStorage.setItem("firstName", values?.firstName);

        await api.post(appUrls?.SIGNUP_URL, formData)
        .then((res) => {
            console.log(res, "polo")
            const { token } = res?.data?.access_token
            localStorage.setItem("token", token)
            setLoading(false)
            toast(`${res?.data?.message}`, {
                position: "top-right",
                autoClose: 3500,
                closeOnClick: true,
            });
            action.resetForm();
            navigate("/otp");
            window.scroll(0, 0)
        })
        .catch((err) => {
            console.log(err, "err")
            setLoading(false)
            toast(`${err?.data?.message}`, {
                position: "top-right",
                autoClose: 3500,
                closeOnClick: true,
            })
        })


    }

  return (
    <div className='bg-[#fff] w-full flex flex-col lg:flex-row overflow-x-hidden h-auto'>
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
        <div className='w-full lg:w-[55%] mt-[20px] lg:mt-0 flex justify-center lg:py-[44px] animate__animated animate__fadeInUp'>
            <div className='rounded-lg w-[342px] lg:w-[430px] bg-[#fff]  px-0  py-[57px] lg:py-8 flex flex-col items-start gap-6'>
                <img src={Logo} alt='logo' className='flex lg:hidden' />
                <div className='flex flex-col gap-1'>
                    <p className='text-[#043246] font-mont text-[26px] lg:text-[32px] font-semibold'>Get Started</p>
                    <p className='font-mont text-[18px] text-[#000709]'>Enter your details to continue</p>
                </div>
                <div>
                    <Formik
                        initialValues={{
                            firstName: "",
                            lastName: "",
                            email: "",
                            password: ""
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
                                <div className="flex flex-col gap-4">
                                    <div className='flex flex-row gap-4'>
                                        <div className='flex flex-col gap-3.5'>
                                            <label htmlFor='firstName' className='font-mont font-medium text-[#043246] text-sm' >First name</label>
                                            <input
                                                name="firstName"
                                                placeholder=""
                                                type="text" 
                                                value={values?.firstName}
                                                onChange={handleChange}
                                                className="outline-none w-full lg:w-[200px] rounded bg-[#FFF] border  border-[#CCC] p-3 h-[48px] border-solid "
                                            />
                                            {errors.firstName && touched.firstName ? (
                                            <div className="text-RED-_100 text-xs">
                                                {errors.firstName}
                                            </div>
                                            ) : null}
                                        </div>
                                        <div className='flex flex-col gap-3.5'>
                                            <label htmlFor='lastName' className='font-mont font-medium text-[#043246] text-sm'>Last name</label>
                                            <input
                                                name="lastName"
                                                placeholder=""
                                                type="text" 
                                                value={values?.lastName}
                                                onChange={handleChange}
                                                className="outline-none w-full lg:w-[200px] rounded bg-[#FFF] border border-[#CCC] p-3 h-[48px] border-solid "
                                            />
                                            {errors.lastName && touched.lastName ? (
                                            <div className="text-RED-_100 text-xs">
                                                {errors.lastName}
                                            </div>
                                            ) : null}
                                        </div>
                                    </div>
                                    <div className='flex flex-col gap-3.5'>
                                        <label htmlFor='email' className='font-mont font-medium text-[#043246] text-sm'>Email address</label>
                                        <input
                                            name="email"
                                            placeholder=""
                                            type="text" 
                                            value={values?.email}
                                            onChange={handleChange}
                                            className="outline-none w-[342px] rounded lg:w-[420px] bg-[#FFF] border  border-[#CCC] p-3 h-[48px] border-solid "
                                        />
                                        {errors.email && touched.email ? (
                                        <div className="text-RED-_100 text-xs">
                                            {errors.email}
                                        </div>
                                        ) : null}
                                    </div>
                                    <div className='flex flex-col gap-3.5'>
                                        <label htmlFor='password' className='font-mont font-medium text-[#043246] text-sm'>Password</label>
                                        <div className='relative'>
                                            <input
                                                name="password"
                                                placeholder=""
                                                type={showPassword ? "text" : "password"} 
                                                value={values?.password}
                                                onChange={handleChange}
                                                className="outline-none w-[342px] lg:w-[420px] rounded bg-[#FFF] border border-[#CCC] p-3 h-[48px] border-solid"
                                            />
                                                {showPassword ? (
                                                    <BsEyeSlash
                                                        className=" absolute top-[15px] right-4 lg:right-3 cursor-pointer text-[#828282]"
                                                        onClick={togglePasswordVisibility}
                                                    />
                                                    ) : (
                                                    <BsEye
                                                        className=" absolute top-[15px] right-4 lg:right-3 cursor-pointer text-[#828282]"
                                                        onClick={togglePasswordVisibility}
                                                    />
                                                )}
                                        </div>
                                        {errors?.password || touched?.password ? (
                                        <div className="text-RED-_100 text-xs">
                                            {errors?.password}
                                        </div>
                                        ) : null}
                                    </div>
                                    {/* <p className='w-full  text-[#00141B] mt-[25px] lg:mt-0 font-mont text-xs leading-[128%]'>By creating an account, I accept the <span className='underline cursor-pointer' onClick={() => window.open("https://www.synergyy.io/terms&condition", "_blank")}>Terms & conditions</span> And <span className='underline cursor-pointer' onClick={() => window.open("https://www.synergyy.io/privacypolicy", "_blank")}>Privacy policy.</span> </p> */}
                                    <button
                                        className={`${isValid ? "bg-[#FDB181]" : "bg-[#BABABA]"} w-full font-mont flex items-center border border-[#000709] rounded-[6px] justify-center mt-[32px] h-[46px] text-base text-center`}
                                        type="submit"
                                        disabled={!isValid}
                                    >
                                        <p className='text-[#000709] text-sm font-bold'>{loading ? <CgSpinner className=" animate-spin text-lg " /> : 'Continue'}</p>
                                        
                                    </button>
                                    <p className='text-center font-mont text-base mt-[8px] lg:mt-0'>Already a member? <span className='cursor-pointer font-semibold text-[#FF9166]' onClick={() => navigate("/talent/login")}>Log In</span></p>
                                </div>

                            </Form>
                        )}
                    </Formik>
                </div>

            </div>

        </div>
        <div 
            className='w-full bg-[#F6F6F6] px-[38px] pb-24 lg:hidden flex flex-col gap-[86px] py-[40px]'
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

export default Register
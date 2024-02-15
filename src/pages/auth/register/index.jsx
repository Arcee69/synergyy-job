import React, { useState } from 'react'
import { Form, Formik } from 'formik'
import { CgSpinner } from 'react-icons/cg';
import { BsEye, BsEyeSlash } from "react-icons/bs";
import * as Yup from "yup"
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

import Logo from "../../../assets/svg/auth_logo.svg"
import { api } from '../../../services/api';
import { appUrls } from '../../../services/urls';


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

        sessionStorage.setItem("email", values?.email);
        sessionStorage.setItem("firstName", values?.firstName);

        await api.post(appUrls?.SIGNUP_URL, formData)
        .then((res) => {
            console.log(res, "polo")
            const { token } = res?.data?.access_token
            sessionStorage.setItem("token", token)
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
    <div className='bg-[#fff] lg:bg-[#FAFAFA] w-full h-auto'>
        <div className='w-full flex justify-center lg:py-[84px]'>
            <div className='rounded-lg w-[342px] lg:w-[430px] bg-[#fff] lg:border lg:border-[#CCD3D5]  px-6  py-[57px] lg:py-8 flex flex-col items-center gap-6'>
                <img src={Logo} alt='logo' className='flex justify-center' />
                <div>
                    <p className='text-[#00141B] font-mont text-center text-[26px] font-bold'>Join Synergyy</p>
                    {window.innerWidth <= 1024 ? <p className='font-mont text-[15px] text-[#000709]'>Achieve big dreams. Together</p> : null}
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
                                    <div className='flex gap-4'>
                                        <div className='flex flex-col gap-3.5'>
                                            <label htmlFor='firstName' className='font-mont font-medium text-[#334D57] text-base' >First name</label>
                                            <input
                                                name="firstName"
                                                placeholder=""
                                                type="text" 
                                                value={values?.firstName}
                                                onChange={handleChange}
                                                className="outline-none w-[163px] lg:w-[167px] rounded bg-[#F9FAFB] border  border-[#CCC] p-3 h-[48px] border-solid "
                                            />
                                            {errors.firstName && touched.firstName ? (
                                            <div className="text-RED-_100 text-xs">
                                                {errors.firstName}
                                            </div>
                                            ) : null}
                                        </div>
                                        <div className='flex flex-col gap-3.5'>
                                            <label htmlFor='lastName' className='font-mont font-medium text-[#334D57] text-base'>Last name</label>
                                            <input
                                                name="lastName"
                                                placeholder=""
                                                type="text" 
                                                value={values?.lastName}
                                                onChange={handleChange}
                                                className="outline-none w-[163px] lg:w-[167px] rounded bg-[#F9FAFB] border border-[#CCC] p-3 h-[48px] border-solid "
                                            />
                                            {errors.lastName && touched.lastName ? (
                                            <div className="text-RED-_100 text-xs">
                                                {errors.lastName}
                                            </div>
                                            ) : null}
                                        </div>
                                    </div>
                                    <div className='flex flex-col gap-3.5'>
                                        <label htmlFor='email' className='font-mont font-medium text-[#334D57] text-base' >Email</label>
                                        <input
                                            name="email"
                                            placeholder=""
                                            type="text" 
                                            value={values?.email}
                                            onChange={handleChange}
                                            className="outline-none w-[342px] rounded lg:w-[350px] bg-[#F9FAFB] border  border-[#CCC] p-3 h-[48px] border-solid "
                                        />
                                        {errors.email && touched.email ? (
                                        <div className="text-RED-_100 text-xs">
                                            {errors.email}
                                        </div>
                                        ) : null}
                                    </div>
                                    <div className='flex flex-col gap-3.5'>
                                        <label htmlFor='password' className='font-mont font-medium text-[#334D57] text-base'>Password</label>
                                        <div className='relative'>
                                            <input
                                                name="password"
                                                placeholder=""
                                                type={showPassword ? "text" : "password"} 
                                                value={values?.password}
                                                onChange={handleChange}
                                                className="outline-none w-[342px] lg:w-[350px] rounded bg-[#F9FAFB] border border-[#CCC] p-3 h-[48px] border-solid"
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
                                        {errors.password || touched.password ? (
                                        <div className="text-RED-_100 text-xs">
                                            {errors.password}
                                        </div>
                                        ) : null}
                                    </div>
                                    <p className='w-[350px] text-[#00141B] mt-[25px] lg:mt-0 font-mont text-xs leading-[128%]'>By creating an account, I accept the <span className='underline cursor-pointer' onClick={() => window.open("https://www.synergyy.io/terms&condition", "_blank")}>Terms & conditions</span> And <span className='underline cursor-pointer' onClick={() => window.open("https://www.synergyy.io/privacypolicy", "_blank")}>Privacy policy.</span> </p>
                                    <button
                                        className={`${isValid ? "bg-[#FBA599]" : "bg-[#BABABA]"} w-[350px] font-mont flex items-center border border-[#000709] rounded-[6px] justify-center mt-[32px] h-[46px] text-base text-center`}
                                        type="submit"
                                        disabled={!isValid}
                                    >
                                        <p className='text-[#000709] text-sm font-bold'>{loading ? <CgSpinner className=" animate-spin text-lg " /> : 'Continue'}</p>
                                        
                                    </button>
                                    <p className='text-center font-mont text-base mt-[25px] lg:mt-0'>Already a member? <span className='cursor-pointer font-semibold' onClick={() => navigate("/login")}>Log In</span></p>
                                </div>

                            </Form>
                        )}
                    </Formik>
                </div>

            </div>

        </div>
    </div>
  )
}

export default Register
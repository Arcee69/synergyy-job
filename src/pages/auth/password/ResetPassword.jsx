import React, { useState, useEffect } from 'react'
import { Form, Formik } from 'formik'
import { CgSpinner } from 'react-icons/cg'
import * as Yup from "yup"
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import OtpInput from 'react-otp-input'
import { BsEye, BsEyeSlash } from "react-icons/bs";

import Logo from "../../../assets/svg/auth_logo.svg"
import Onboarding from "../../../assets/img/onboarding_img.png"
import LogoHome from "../../../assets/svg/sidebar_logo.svg"
import Handshake from "../../../assets/img/handshake.png"
import Marvis from "../../../assets/img/marvis.png"
import Chat from "../../../assets/img/chat.png"
import Offer from "../../../assets/img/offer.png"


import { api } from '../../../services/api'
import { appUrls } from '../../../services/urls'

const ResetPassword = () => {
    const [loading, setLoading] = useState()
    const [seconds, setSeconds] = useState(60);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const navigate = useNavigate()

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
      };

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
      };

    const getEmail = localStorage.getItem("email");

    const formValidationSchema = Yup.object().shape({
        otp: Yup.number().min(5).required(),
        password: Yup.string().min(7).required(),
        confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Confirm Password is required"),
    })

    const count = () => {
      if (seconds > 0) {
        setSeconds(prevSeconds => prevSeconds - 1);
      } else {
        console.log("Countdown complete!");
      }
    };

    useEffect(() => {
      const countdownInterval = setInterval(count, 1000);
      return () => clearInterval(countdownInterval); // Cleanup interval on component unmount
    }, [seconds]);

    useEffect(() => {
        // Function to paste OTP from clipboard when component mounts
        const pasteOTPFromClipboard = async () => {
            try {
                const clipboardData = await navigator.clipboard.readText();
                // Check if clipboard data is numeric and has 6 characters (assuming OTP is always 6 digits)
                if (/^\d{6}$/.test(clipboardData)) {
                    // Set OTP value in Formik
                    setFieldValue('otp', clipboardData);
                }
            } catch (error) {
                console.error('Error pasting OTP from clipboard:', error);
            }
        };

        // Call the function to paste OTP from clipboard when component mounts
        pasteOTPFromClipboard();
    }, []); // Empty dependency array to ensure useEffect runs only once on mount

    const resendOtp = async () => {
            // let emailData = new FormData();
            // emailData.append('email', getEmail); 

            const data = {
                email: getEmail
            }

            await api.get(appUrls?.RESEND_OTP_URL, data)
            .then((res) => {
                console.log(res, "polo")
                setLoading(false)
                toast(`Otp Sent Successfully`, {
                    position: "top-right",
                    autoClose: 3500,
                    closeOnClick: true,
                });
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


    const submitForm = async (values, action) => {
        setLoading(true)

        let formData = new FormData();
        formData.append('token', values?.otp);
        formData.append('email', getEmail); //
        formData.append('newPassword', values?.password);

        

        console.log(formData, "lopa")

        await api.put(appUrls?.RESET_PASSWORD_URL, formData)
        .then((res) => {
            console.log(res, "polo")
            setLoading(false)
            toast(`${res?.data?.message}`, {
                position: "top-right",
                autoClose: 3500,
                closeOnClick: true,
            });
            action.resetForm();
            navigate("/download");
            // navigate("/talent/login");
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
            className='h-auto hidden px-[68px]  lg:flex flex-col gap-[86px] py-[30px] w-[40%] bg-[#F6F6F6]'
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
        <div className="w-full lg:w-[55%] flex mt-[150px] mb-[40px] lg:mb-0 lg:mt-0 flex-col items-center animate__animated animate__fadeInUp  gap-6 lg:py-[44px]">
            <img src={Logo} alt='logo' className='flex mx-auto lg:hidden w-[48px] h-[48px]' />
            <div className='flex flex-col w-[90%] lg:w-[420px] items-center gap-2'>
                <p className='font-semibold text-[32px] text-[#043246]'>Reset Password</p>
                <p className='font-mont text-lg text-center '>Kindly Enter the verification code we just sent to <span className='font-medium'>{getEmail}</span></p>
            </div>

            <div className='lg:mt-[24px]'>
                <Formik
                    initialValues={{
                        otp: "",
                        password: "",
                        confirmPassword: ""
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
                        <Form onSubmit={handleSubmit} className="flex ">
                            <div className="flex flex-col gap-6">
                               
                                <div className='flex flex-col items-center justify-center'>
                                    <OtpInput
                                        name="otp"
                                        value={values.otp}
                                        onChange={(e) => setFieldValue("otp", e)}
                                        numInputs={6}
                                        renderSeparator={<span style={{ width: "10px" }}></span>}
                                        isInputNum={true}
                                        shouldAutoFocus={true}
                                        renderInput={(props) => 
                                            <input 
                                                {...props} 
                                                type='number'
                                                style={{ width: "48px", height: "56px"}} 
                                                className='border rounded border-[#FDB181] text-[#043246] font-mont text-center font-medium text-[32px] ' 
                                            />
                                        }
                                    />
                                    {errors.otp && touched.otp ? (
                                    <div className="text-RED-_100 text-xs">
                                        {errors.otp}
                                    </div>
                                    ) : null}
                                </div>

                                <p className='text-center font-mont text-base'><span className="text-[#000709] cursor-pointer" onClick={() => {seconds === 0 ? resendOtp() : null}}>Resend Code <span className="text-[#000709] font-semibold">{`00:${seconds}s`}</span></span></p>

                                <p className='font-mont text-lg text-center'>Please enter your new password</p>

                                <div className='flex flex-col gap-2'>
                                    <label htmlFor='password' className='font-mont font-medium text-[#043246] text-sm'>Password</label>
                                    <div className='relative'>
                                        <input
                                            name="password"
                                            placeholder="Enter new password"
                                            type={showPassword ? "text" : "password"} 
                                            value={values?.password}
                                            onChange={handleChange}
                                            className="outline-none w-[342px] lg:w-[420px] rounded bg-[#FFF] border border-[#E5E5E5] p-3 h-[40px] border-solid"
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

                                <div className='flex flex-col gap-2'>
                                    <label htmlFor='Confirm Password' className='font-mont font-medium text-[#043246] text-sm'>Confirm Password</label>
                                    <div className='relative'>
                                        <input
                                            name="confirmPassword"
                                            placeholder="confirm new Password"
                                            type={showConfirmPassword ? "text" : "password"} 
                                            value={values?.confirmPassword}
                                            onChange={handleChange}
                                            className="outline-none w-[342px] lg:w-[420px] rounded bg-[#FFF] border border-[#E5E5E5] p-3 h-[40px] border-solid"
                                        />
                                            {showConfirmPassword ? (
                                                <BsEyeSlash
                                                    className=" absolute top-[15px] right-4 lg:right-3 cursor-pointer text-[#828282]"
                                                    onClick={toggleConfirmPasswordVisibility}
                                                />
                                                ) : (
                                                <BsEye
                                                    className=" absolute top-[15px] right-4 lg:right-3 cursor-pointer text-[#828282]"
                                                    onClick={toggleConfirmPasswordVisibility}
                                                />
                                            )}
                                    </div>
                                    {errors.confirmPassword || touched.confirmPassword ? (
                                    <div className="text-RED-_100 text-xs">
                                        {errors.confirmPassword}
                                    </div>
                                    ) : null}
                                </div>

                                <button
                                    className={`${isValid ? "bg-[#FDB181]" : "bg-[#BABABA]"} w-full lg:w-[420px] font-mont flex items-center border border-[#000709] rounded-[6px] justify-center mt-2 h-[46px] text-base  text-center`}
                                    type="submit"
                                    disabled={loading}
                                >
                                    <p className='text-[#000709] text-sm font-bold'>{loading ? <CgSpinner className=" animate-spin text-lg " /> : 'Verify'}</p>
                                    
                                </button>
                            </div>

                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    </div>
  )
}

export default ResetPassword
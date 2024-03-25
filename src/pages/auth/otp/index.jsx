import React, { useState, useEffect } from 'react'
import { Form, Formik } from 'formik'
import { CgSpinner } from 'react-icons/cg'
import * as Yup from "yup"
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import OtpInput from 'react-otp-input'

import Mail from "../../../assets/img/mail.png"
import Logo from "../../../assets/svg/auth_logo.svg"
import Onboarding from "../../../assets/img/onboarding_img.png"
import LogoHome from "../../../assets/svg/sidebar_logo.svg"
import Handshake from "../../../assets/img/handshake.png"
import Marvis from "../../../assets/img/marvis.png"
import Chat from "../../../assets/img/chat.png"
import Offer from "../../../assets/img/offer.png"

import { api } from '../../../services/api'
import { appUrls } from '../../../services/urls'
import MiniHeader from '../../../layouts/HompageLayout/MiniHeader';

const Otp = () => {
    const [loading, setLoading] = useState()
    const [seconds, setSeconds] = useState(60);


    const navigate = useNavigate()
    const getEmail = localStorage.getItem("email");


    const formValidationSchema = Yup.object().shape({
        otp: Yup.number().min(5).required()
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
        formData.append('email', getEmail);

        console.log(formData, "lopa")

        await api.post(appUrls?.CONFIRM_EMAIL_URL, formData)
        .then((res) => {
            console.log(res, "polo")
            setLoading(false)
            toast(`${res?.data?.message}`, {
                position: "top-right",
                autoClose: 3500,
                closeOnClick: true,
            });
            action.resetForm();
            navigate("/welcome-page");
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
    <div className='bg-[#fff] w-full flex flex-col lg:flex-row overflow-x-hidden h-auto'> {/* className='lg:bg-[#FAFAFA] w-full flex justify-center py-[84px]' */}
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
        <div className="w-full lg:w-[55%] flex mt-[100px] mb-[40px] lg:mb-0 mx-5 lg:mx-0 lg:mt-0 flex-col lg:items-center animate__animated animate__fadeInUp  gap-6 lg:py-[44px]">
            <img src={Mail} alt='Mail' className='hidden lg:flex w-[107px] h-[120px]'/>
            <img src={Logo} alt='logo' className='flex mx-auto lg:hidden w-[48px] h-[48px]' />
            <p className='font-mont font-semibold flex text-[24px] lg:text-[32px]'>Check your Email</p>
            <p className='font-mont lg:text-center text-base'>Enter the 6 digit code we just sent to <br /> <span className='text-[#000D12] font-medium'>{getEmail}</span> to continue</p>
            <div className='lg:mt-[24px]'>
                <Formik
                    initialValues={{
                        otp: "",
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
                        <Form onSubmit={handleSubmit} className="flex w-[100%]">
                            <div className="flex w-full flex-col gap-4">
                               
                                <div className='flex flex-col items-center justify-center'>
                                    {/* <OtpInput
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
                                    /> */}
                                    <input 
                                        name="otp"
                                        type="text"
                                        onChange={handleChange}
                                        className="w-full lg:w-[420px] outline-[#FDB181] border border-[#E5E5E5] p-3 text-center rounded"

                                    />
                                    {errors.otp && touched.otp ? (
                                    <div className="text-RED-_100 text-xs">
                                        {errors.otp}
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
                                <p className='lg:text-center font-mont text-base'><span className="text-[#000709] cursor-pointer font-semibold" onClick={() => {seconds === 0 ? resendOtp() : null}}>Resend Code <span className="text-[#000709]">{`00:${seconds}s`}</span></span></p>
                            </div>

                        </Form>
                    )}
                </Formik>
            </div>
        </div>
        {/* <div className='w-full h-full bg-[#F6F6F6] px-[38px] pb-24 lg:hidden flex flex-col gap-[86px] py-[40px]'>
            <img src={Onboarding} alt='Onboarding' className='w-[356px] h-[358px]' /> 
        </div> */}
    </div>
  )
}

export default Otp
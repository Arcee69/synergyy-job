import React, { useState, useEffect } from 'react'
import { Form, Formik } from 'formik'
import { CgSpinner } from 'react-icons/cg'
import * as Yup from "yup"
import { toast } from 'react-toastify'

import Mail from "../../../assets/img/mail_desktop.png"
import MailMobile from "../../../assets/img/mail_mobile.png"
import { useNavigate } from 'react-router-dom'
import { api } from '../../../services/api'
import { appUrls } from '../../../services/urls'
import axios from 'axios'

const Otp = () => {
    const [loading, setLoading] = useState()
    const [seconds, setSeconds] = useState(60);


    const navigate = useNavigate()
    const getEmail = sessionStorage.getItem("email");

    console.log(getEmail, "fish")

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
                    autoClose: 5000,
                    closeOnClick: true,
                });
            })
            .catch((err) => {
                console.log(err, "err")
                setLoading(false)
                toast(`${err?.data?.message}`, {
                    position: "top-right",
                    autoClose: 5000,
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
                autoClose: 5000,
                closeOnClick: true,
            });
            action.resetForm();
            navigate("/dashboard");
            window.scroll(0, 0)
        })
        .catch((err) => {
            console.log(err, "err")
            setLoading(false)
            toast(`${err?.data?.message}`, {
                position: "top-right",
                autoClose: 5000,
                closeOnClick: true,
            })
        })

    }

  return (
    <div className='lg:bg-[#FAFAFA] w-full flex justify-center py-[84px]'>
        <div className='rounded-lg w-[440px] bg-[#fff] lg:border lg:border-[#CCD3D5] h-[616px] px-6 py-8 flex flex-col items-center gap-6'>
            <img src={Mail} alt='Mail' className='hidden lg:flex w-[295px] h-[213px]'/>
            <img src={MailMobile} alt='Mail' className='flex w-[177px] h-[127.8px] lg:hidden '/>
            <p className='font-mont font-semibold hidden lg:flex text-[32px]'>Confirm your Email</p>
            <p className='font-mont text-center text-base'>We sent your <span className='text-[#000D12] font-medium'>OTP</span>  to <br /> <span className='text-[#000D12] font-medium'>{getEmail}</span></p>
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
                        <Form onSubmit={handleSubmit} className="flex ">
                            <div className="flex flex-col gap-4">
                               
                                <div className='flex flex-col'>
                                    <input
                                        name="otp"
                                        placeholder={window.innerWidth <= 1024 ? "Enter verification code." : "Enter OTP"}
                                        type="number" 
                                        value={values?.otp}
                                        onChange={handleChange}
                                        className="outline-none w-[334px] mx-auto lg:w-[350px] text-center rounded bg-[#F9FAFB] border  border-[#CCC] p-3 h-[48px] border-solid "
                                    />
                                    {errors.otp && touched.otp ? (
                                    <div className="text-RED-_100 text-xs">
                                        {errors.otp}
                                    </div>
                                    ) : null}
                                </div>
                               
                                <button
                                    className={`${isValid ? "bg-[#FBA599]" : "bg-[#BABABA]"} w-[334px] lg:w-[350px] font-mont flex items-center border border-[#000709] rounded-[6px] justify-center mt-2 h-[46px] text-base  text-center`}
                                    type="submit"
                                    disabled={loading}
                                >
                                    <p className='text-[#000709] text-sm font-bold'>{loading ? <CgSpinner className=" animate-spin text-lg " /> : 'Verify'}</p>
                                    
                                </button>
                                <p className='text-center font-[#000709] font-mont text-sm'>Didn’t get the code? <span className={`${window.innerWidth <= 1024 ? "text-[#000D12]" : "text-[#667A81]"} cursor-pointer text-sm font-semibold`} onClick={() => {seconds === 0 ? resendOtp() : null}}>Resend Code <span className={`${window.innerWidth <= 1024 ? "text-[#FBA599]" : "text-[#667A81]"}`}>({`${seconds}s`})</span></span></p>
                            </div>

                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    </div>
  )
}

export default Otp
import React, { useState } from 'react'
import { Form, Formik } from 'formik'
import { CgSpinner } from 'react-icons/cg';
import { BsEye, BsEyeSlash } from "react-icons/bs";
import * as Yup from "yup"
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Logo from "../../../assets/svg/auth_logo.svg"
import { api } from '../../../services/api';
import { appUrls } from '../../../services/urls';
import { loginUser } from '../../../features/auth/loginSlice';


const Login = () => {
    // const [loading, setLoading] = useState(false)
    const [showPassword, setShowPassword] = useState(false);
    const [showPassE, setShowPassE] = useState('false');

    const dispatch = useDispatch()

    const formValidationSchema = Yup.object().shape({
        email: Yup.string().email().required(),
        password: Yup.string().min(7).required(),
    })

    const { loading } = useSelector(state => state.userLogin)
    const navigate = useNavigate()

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
      };

    const submitForm = async (values, action) => {
      
        let formData = new FormData(); 
        formData.append('email', values?.email);
        formData.append('password', values?.password);

        dispatch(loginUser(formData))
        .then((res) => {
            console.log(res, "apple")
            if(res?.payload?.status === "success"){
                navigate("/download")
            }
        })
   

      
        // .then((res) => {
        //     console.log(res, "polo")
        //     toast(`${res?.data?.status}`, {
        //         position: "top-right",
        //         autoClose: 3500,
        //         closeOnClick: true,
        //     });
        //     action.resetForm();
        //     navigate("/download");
        //     window.scroll(0, 0)
        // })
        // .catch((err) => {
        //     console.log(err, "err")
        //     toast(`${err?.data?.message}`, {
        //         position: "top-right",
        //         autoClose: 3500,
        //         closeOnClick: true,
        //     })
        // })


    }

  return (
    <div className='bg-[#fff] lg:bg-[#FAFAFA] w-full h-screen'>
        <div className='w-full flex justify-center lg:py-[84px]'>
            <div className='rounded-lg w-[342px] lg:w-[430px] bg-[#fff] lg:border lg:border-[#CCD3D5]  px-6  py-[57px] lg:py-8 flex flex-col items-center gap-6'>
                <img src={Logo} alt='logo' className='flex justify-center' />
                <div className='w-[351px]'>
                    <p className='text-[#00141B] font-mont text-center text-[26px] font-bold'>Login to your account</p>
                </div>
                <div className='mt-4'>
                    <Formik
                        initialValues={{
                            email: "",
                            password: ""
                        }}
                            // validationSchema={formValidationSchema}
                            onSubmit={(values, action) => {
                            window.scrollTo(0, 0);
                            console.log(values, "market")
                            submitForm(values, action);
                            // navigate("/download");
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
                                    <div className='flex flex-col gap-2'>
                                        <label htmlFor='email' className='font-mont font-medium text-[#334D57] text-base' >Email</label>
                                        <input
                                            name="email"
                                            placeholder="Email here"
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
                                    <div className='flex flex-col gap-2'>
                                        <label htmlFor='password' className='font-mont font-medium text-[#334D57] text-base'>Password</label>
                                        <div className='relative'>
                                            <input
                                                name="password"
                                                placeholder="Enter Password"
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
                                    <button
                                        className={`${isValid ? "bg-[#FBA599]" : "bg-[#BABABA]"} w-[350px] font-mont flex items-center border border-[#000709] rounded-[6px] justify-center mt-[32px] h-[46px] text-base text-center`}
                                        type="submit"
                                        disabled={!isValid}
                                    >
                                        <p className='text-[#000709] text-sm font-bold'>{loading ? <CgSpinner className=" animate-spin text-lg " /> : 'Login'}</p>
                                        
                                    </button>
                                    <p className='text-center font-mont text-base mt-[8px] lg:mt-0'>Don't have an account? <span className='cursor-pointer font-semibold' onClick={() => navigate("/register")}>Sign up</span></p>
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

export default Login
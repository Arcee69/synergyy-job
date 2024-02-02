import React, { useState } from 'react'
import { Form, Formik} from "formik"
import { CgSpinner } from 'react-icons/cg'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import * as Yup from "yup"

import Big from "../../assets/img/bg3.png"
import { appUrls } from '../../services/urls'
import { api } from '../../services/api'

const AskAPro = () => {
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()

    const formValidationSchema = Yup.object().shape({
        name: Yup.string().required(),
        email: Yup.string().email().required(),
        companyName: Yup.string().required(),
        role: Yup.string().required(),
    })

    const submitForm = async (values, action) => {
        setLoading(true)
        let formData = new FormData()
        formData.append('name', values?.name);
        formData.append('email', values?.email);
        formData.append('company', values?.companyName);
        formData.append('role', values?.role);

        await api.post(appUrls?.ASK_A_PRO, formData)
        .then((res) => {
            setLoading(false)
            console.log(res, "action")
            toast(`${res?.data?.message}`, {
                position: "top-right",
                autoClose: 5000,
                closeOnClick: true,
            })
            action.resetForm()
            navigate("/")
        })
        .catch((err) => {
            setLoading(false)
            console.log(err, "err")
            toast("error", {
                position: "top-right",
                autoClose: 5000,
                closeOnClick: true,
            })
        })

    }

  return (
    <div className='w-full flex gap-5 bg-[#fff] py-[42px] px-[40px]'>
        <div className='h-fit w-full bg-[#fff] lg:bg-[#F6F6F6] lg:w-[721px] py-[26px] lg:rounded-[40px]'>
            <div className='lg:px-[56px] py-[26px]'>
                <Formik
                    initialValues={{
                        name: "",
                        email: "",
                        companyName: "",
                        role: ""
                    }}
                        validationSchema={formValidationSchema}
                        onSubmit={(values, action) => {
                        window.scrollTo(0, 0);
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
                        <Form onSubmit={handleSubmit} className="flex  mt-8">
                            <div className="h-fit w-full flex flex-col gap-8">
                                <div className='text-2xl lg:text-[32px] font-mont font-bold '>Ask A Pro</div>
                                <div className='flex flex-col gap-1 mt-[16px]'>
                                    <label htmlFor='name' className='font-mont  text-[#00141B] text-[15px]' >Name</label>
                                    <input
                                        name="name"
                                        placeholder=""
                                        type="text" 
                                        value={values?.name}
                                        onChange={handleChange}
                                        className="outline-none w-full lg:w-[529px] text-left rounded-2xl lg:bg-[#F6F6F6] border  border-[#CCC] p-3 h-[48px] border-solid "
                                    />
                                    {errors.name && touched.name ? (
                                    <div className="text-RED-_100 text-xs">
                                        {errors.name}
                                    </div>
                                    ) : null}
                                </div>
                                <div className='flex flex-col gap-1 '>
                                    <label htmlFor='email' className='font-mont  text-[#00141B] text-[15px]' >Email</label>
                                    <input
                                        name="email"
                                        placeholder=""
                                        type="text" 
                                        value={values?.email}
                                        onChange={handleChange}
                                        className="outline-none w-full  lg:w-[529px] text-left rounded-2xl lg:bg-[#F6F6F6] border  border-[#CCC] p-3 h-[48px] border-solid "
                                    />
                                    {errors.email && touched.email ? (
                                    <div className="text-RED-_100 text-xs">
                                        {errors.email}
                                    </div>
                                    ) : null}
                                </div>
                                <div className='flex flex-col gap-1 '>
                                    <label htmlFor='companyName' className='font-mont  text-[#00141B] text-[15px]' >Company Name</label>
                                    <input
                                        name="companyName"
                                        placeholder=""
                                        type="text" 
                                        value={values?.companyName}
                                        onChange={handleChange}
                                        className="outline-none w-full  lg:w-[529px] text-left rounded-2xl lg:bg-[#F6F6F6] border  border-[#CCC] p-3 h-[48px] border-solid "
                                    />
                                    {errors.companyName && touched.companyName ? (
                                    <div className="text-RED-_100 text-xs">
                                        {errors.companyName}
                                    </div>
                                    ) : null}
                                </div>
                                <div className='flex flex-col gap-1 '>
                                    <label htmlFor='role' className='font-mont  text-[#00141B] text-[15px]' >Your Role</label>
                                    <input
                                        name="role"
                                        placeholder=""
                                        type="text" 
                                        value={values?.role}
                                        onChange={handleChange}
                                        className="outline-none w-full lg:w-[529px] text-left rounded-2xl lg:bg-[#F6F6F6] border  border-[#CCC] p-3 h-[48px] border-solid "
                                    />
                                    {errors.role && touched.role ? (
                                    <div className="text-RED-_100 text-xs">
                                        {errors.role}
                                    </div>
                                    ) : null}
                                </div>
                                
                                <button
                                    className={`${isValid ? "bg-[#FBA599]" : "bg-[#BABABA]"} w-full lg:w-[529px] font-mont flex items-center border border-[#000709] rounded-[6px] justify-center mt-2 h-[46px] text-base  text-center`}
                                    type="submit"
                                    disabled={loading}
                                >
                                    <p className='text-[#000709] text-sm font-bold'>{loading ? <CgSpinner className=" animate-spin text-lg " /> : 'Submit'}</p>
                                    
                                </button>
                            </div>

                        </Form>
                    )}
                </Formik>
            </div>

        </div>
        <div className='hidden lg:flex' style={{height:'89vh'}}>
            <img src={Big} alt='big_image' className='w-[619px]' loading='lazy' />
        </div>
    </div>
  )
}

export default AskAPro
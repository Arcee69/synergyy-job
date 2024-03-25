import React, { useState } from 'react'
import { Progress } from 'antd'
import { IoArrowBackSharp } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'
import { Radio } from '@mui/material'
import { CgSpinner } from 'react-icons/cg'

const Chemistry = ({ handleChangeButton }) => {
    const [picked, setPicked] = useState(null);
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()

    const options = [
        {
            id: 1,
            option: "Listening and valuing diverse perspectives"
        },
        {
            id: 2,
            option: "Collaborating and sharing knowledge"
        },
        {
            id: 3,
            option: "Fostering mutual respect"
        },
        {
            id: 4,
            option: "Adapting to different team dynamics"
        },
    ]

    
    const handleOptionChange = (item) => {
        setPicked(item);
    };

    const CheckedIcon = () => {
        return (
            <div 
                className='w-4 h-4 bg-[#FDB181] rounded-[999px] border border-[#ccc] flex justify-center items-center'>
                <div className='text-white w-4 h-4'></div>
            </div>
        )
    }

    const submitForm = () => {
        navigate("/dashboard")
    }


  return (
    <div className="flex flex-col w-full lg:w-[632px] lg:p-10 rounded-lg lg:mt-6 bg-[#fff] lg:mx-[90px]  gap-4">

        <div className='flex justify-between mr-4'>
            <div className="flex items-center gap-2" onClick={() => navigate(-1)}>
                <IoArrowBackSharp className="w-[16px] h-[12px]" />
                <p className="font-mont text-[#00141B] text-base">back</p>
            </div>
            <div className='flex items-center relative gap-2'>
                <p className='text-[#667A81] absolute right-2.5 text-[20px] font-mont font-semibold'>7/7</p>
                <Progress type="circle" percent={100} showInfo={false} size={52} strokeColor="#29CFD6" />
            </div>
        </div>

        <div className='w-full lg:w-[420px] flex flex-col mx-auto gap-10'>
            <p className='text-[#043246] font-semibold text-[18px] lg:text-[24px] font-mont'>
                How do you enhance team chemistry?
            </p>
            <div className='flex flex-col gap-4'>
                {
                    options?.map((item, index) => (
                        <div 
                            className='w-[90%] lg:w-[420px] hover:border-[#FDB181] flex items-center gap-4 border border-[#E5E5E5] h-[42px] rounded-lg p-2' 
                            key={index}
                            onClick={() => handleOptionChange(item?.id)}
                        >
                            <Radio
                                sx={{
                                    height: 20, width: 20, background: picked === item?.id ? "#ccc" : "#fff" , border: "#E6F8FF",   //color: "#FDB181"  // 
                                }}
                                checked={picked === item?.id}
                                checkedIcon={<CheckedIcon />}
                                name="checkbox-buttons"
                                inputProps={{ "aria-label": "A" }}
                            />
                            <p className="text-[16px] text-[#043246] font-mont font-medium cursor-pointer">
                                {item?.option}
                            </p>
                        </div>
                    ))
                }
            </div>
            <button
                className={`${
                    !picked  ? "bg-[#BABABA]" : "bg-[#FDB181]"
                } w-[90%] lg:w-[420px]  font-mont flex items-center border border-[#000709] rounded-[6px] justify-center  h-[46px]  text-base text-center`}
                type="submit"
                disabled={loading}
                onClick={() => submitForm()}
            >
                <p className="text-[#00141B] text-base font-semibold">
                {loading ? (
                    <CgSpinner className=" animate-spin text-lg " />
                ) : (
                    "Save and Continue"
                )}
                </p>
            </button>
        </div>
    </div>
  )
}

export default Chemistry
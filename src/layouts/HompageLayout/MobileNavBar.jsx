import React from 'react'
import Logo from "../../assets/svg/logo.svg"
import Close from "../../assets/svg/closeIcon.svg"
import { useNavigate } from 'react-router-dom'

const MobileNavBar = ({ handleClose}) => {
    const navigate = useNavigate()
  return (
    <div className="fixed top-0 w-[100%] left-0 h-[100vh] animate__animated  animate__bounceInDown animate__slow" style={{zIndex: 9999}}>
        <div className="bg-[#fff] w-[100%] h-full absolute pl-[29px] pr-[13px] py-[32px] right-0 top-0">
            <div className="flex justify-between items-center">
                <img src={Logo} alt='logo' className='w-[113px] h-[25px]' onClick={() => {navigate("/"); handleClose()}} />
                <img src={Close} alt="close" className="cursor-pointer" onClick={handleClose}/>
            </div>
            <ul class="mt-[32px] flex flex-col gap-y-[24px] pb-[16px]">
                <li onClick={() => {navigate("/"); handleClose()}} className="font-mont font-semibold text-[17px] p-[24px] text-[#00141B]">Home</li>
                <li className="font-mont font-semibold text-[17px] p-[24px] text-[#00141B]">Solutions</li>
                <li onClick={() => {navigate("/jobs"); handleClose()}} className="font-mont font-semibold text-[17px] p-[24px] text-[#00141B]">Talent Network</li>
            </ul>
            <div className="mt-[16px] flex flex-col gap-4">
                <button
                    onClick={() => {navigate("/pro"); handleClose()}} 
                    className="p-[9.6px] w-full rounded-[4.8px] bg-[#fff] font-mont border border-[#00141B] text-[16px] font-semibold"
                >
                    Ask a Pro
                </button>
                <button
                    onClick={() => {navigate("/access"); handleClose()}} 
                    className="p-[9.6px] w-full rounded-[4.8px] font-mont bg-[#42B8BD] border border-[#00141B] text-[16px] font-semibold"
                >
                    Start Hiring
                </button>
            </div>
        </div>
    </div>
  )
}

export default MobileNavBar
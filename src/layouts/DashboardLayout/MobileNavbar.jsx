import React from 'react'
import Logo from "../../assets/svg/logo.svg"
import UserMobile from "../../assets/svg/user_mobile.svg"
import Community from "../../assets/svg/community_mobile.svg"
import Analytics from "../../assets/svg/analytics_mobile.svg"
import Assessment from "../../assets/svg/assessment_mobile.svg"
import Logout from "../../assets/svg/logout_mobile.svg"
import Close from "../../assets/svg/closeIcon.svg"
import { useNavigate } from 'react-router-dom'
import { FiUser } from 'react-icons/fi'

const MobileNavbar = ({ handleClose }) => {
    // const [isOpen, setIsOpen] = useState(false)
  

    const navigate = useNavigate()

    const removeUser = () => {
      localStorage.removeItem("userObj");
      localStorage.removeItem("token")
      navigate("/login")
    }


  return (
    <div className="fixed top-0 w-[100%] left-0 h-[100vh] animate__animated  animate__bounceInDown animate__slow" style={{zIndex: 9999}}>
    <div className="bg-[#fff] w-[100%] h-full absolute pl-[29px] pr-[13px] py-[32px] right-0 top-0">
        <div className="flex justify-between items-center">
            {/* <img src={Logo} alt='logo' className='w-[113px] h-[25px]' onClick={() => {navigate("/"); handleClose()}} /> */}
            <p className='text-xs text-[#A0A0A0] font-mont font-semibold'>Menu</p>
            <img src={Close} alt="close" className="cursor-pointer w-[14px] h-[14px] text-[#292D32] " onClick={handleClose}/>
        </div>
        <div className="mt-[80px] flex flex-col gap-[42px] pb-[16px]">
          <div onClick={() => {navigate("/dashboard"); handleClose()}} className="flex justify-between">
              <p className="text-[#000000] text-sm font-mont font-semibold">Profile</p>
              <img src={UserMobile} alt='UserMobile' className='w-5 h-5' />
          </div>
          <div onClick={() => {navigate("/download"); handleClose()}} className="flex justify-between">
              <p className="text-[#000000] text-sm font-mont font-semibold">Community</p>
              <img src={Community} alt='UserMobile' className='w-5 h-5' />
          </div>
          <div className="flex justify-between">
            <div className='flex w-full items-center relative'>
                <p className="text-[#000000] text-sm font-mont font-semibold">Job Tracker</p>
                <div className='absolute left-20 bottom-4 flex items-center justify-center w-[67px] rounded h-[16px] bg-[#42B8BD4D] p-2'>
                    <p className="text-[#000709] whitespace-nowrap  font-semibold text-[8px]">Coming soon</p>
                </div>
            </div>
            <img src={Analytics} alt='Analytics' className='w-5 h-5' />
        </div>
          <div className="flex justify-between">
            <div className='flex w-full items-center relative'>
                <p className="text-[#000000] text-sm font-mont font-semibold">Assessment</p>
                <div className='absolute left-20 bottom-4 flex items-center justify-center w-[67px] rounded h-[16px] bg-[#42B8BD4D] p-2'>
                    <p className="text-[#000709] whitespace-nowrap  font-semibold text-[8px]">Coming soon</p>
                </div>
            </div>
            <img src={Assessment} alt='Assessment' className='w-5 h-5' />
        </div>
        </div>

        <div onClick={() => {removeUser(); handleClose()}} className="flex  mt-[406px] justify-between">
            <p className="text-[#000000] text-sm font-mont font-semibold">Logout</p>
            <img src={Logout} alt='Logout' className='w-5 h-5' />
        </div>
    </div>
</div>
  )

}

export default MobileNavbar;

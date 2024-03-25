import React, { useEffect } from 'react'
import { FiUser } from "react-icons/fi";
import { MdOutlineBusinessCenter, MdInsertChartOutlined, MdGroups, MdLogout   } from "react-icons/md";
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Logo from "../../assets/svg/sidebar_logo.svg"
import Photo from "../../assets/img/profile_photo.png"

import ProfileIcon from "../../assets/svg/profile_icon.svg"
import { getProfile } from '../../features/profile/getProfileSlice';

const SideBar = () => {

    const navigate = useNavigate()
    const location = useLocation()
    const dispatch = useDispatch()

    // const profileData = useSelector(state => state.userLogin)
    // const userData = profileData?.user?.user

    const fetchProfileData = useSelector(state => state.fetchProfileData)
    const userData = fetchProfileData?.data?.data
    console.log(fetchProfileData, "dodo")

    useEffect(() => {
        dispatch(getProfile())
    },[])

  return (
    <div className='bg-[#fff] flex flex-col pt-[32px] gap-[8px] items-center'>
        <img src={Logo} alt='logo' className='cursor-pointer' onClick={() => navigate("/talent")} /> {/* w-[141px]  */}
        <div className='flex flex-col items-center gap-[8px] mt-[32px]'>
            {
                userData?.profile_photo === null ? (
                    <div className='w-[89px] h-[89px] rounded-full border border-[#666] bg-[#fafafa] flex items-center justify-center'>
                        <p className='text-[#000] text-4xl'>{`${userData?.first_name?.substring(0, 1)}${userData?.last_name?.substring(0, 1)}`}</p>
                    </div>
                ) : (
                    <img src={userData?.profile_photo} alt='profile_photo' className='w-[89px] rounded-full h-[89px]' />
                )
            }
            
            <p className='text-[#000709] font-semibold text-[13px] font-mont'>{`Hello ${userData?.first_name}`}</p>
        </div>
        <div className='flex flex-col gap-6 mt-[24px] mx-2'>
            <div onClick={() => {userData?.profile_photo !== null ? navigate("/profile") : navigate("/dashboard")}} className={`${location?.pathname === "/dashboard" || location?.pathname === "/profile" ? "bg-[#E3F2F8]" : ""} w-[184px] h-[48px] rounded-2xl gap-2 flex items-center group cursor-pointer transition-all duration-300 p-[16px] hover:bg-[#E3F2F8]`}>
                <FiUser className={`${location.pathname === "/dashboard" || location?.pathname === "/profile" ? "text-[#1C1C1C]" : ""} w-5 h-5 text-[#1C1C1C] group-hover:text-[#1C1C1C] `}/>
                <p className={`${location.pathname === "/dashboard" || location?.pathname === "/profile" ? "text-[#1C1C1C]" : ""} text-[#1C1C1C] group-hover:text-[#1C1C1C] font-mont text-semibold `}>Profile</p>
            </div>
            {/* <div onClick={() => navigate("/job-board")} className={`${location?.pathname === "/job-board" || location.pathname === "/job-board/details" ? "bg-[#10303D]" : ""} w-[184px] h-[48px] rounded-2xl gap-2 flex items-center group p-[16px] cursor-pointer transition-all duration-300 hover:bg-[#10303D] `}>
                <MdOutlineBusinessCenter className={`${location.pathname === "/job-board" || location.pathname === "/job-board/details" ? "text-[#fff]" : ""} w-5 h-5 text-[#1C1C1C] group-hover:text-[#fff]`} />
                <p className={`${location.pathname === "/job-board" || location.pathname === "/job-board/details" ? "text-[#fff]" : ""} text-[#1C1C1C] group-hover:text-[#fff] font-mont text-semibold `}>Job Board</p>
            </div> */}
            <div onClick={() => navigate("/download")} className={`${location?.pathname === "/download" ? "bg-[#E3F2F8]" : ""} w-[184px] h-[48px] rounded-2xl gap-2 flex items-center group p-[16px] cursor-pointer transition-all duration-300 hover:bg-[#E3F2F8]`}>
                <MdGroups className={`${location.pathname === "/download" ? "text-[#1C1C1C]" : ""} w-5 h-5 text-[#1C1C1C] group-hover:text-[#1C1C1C]`} />
                <p className={`${location.pathname === "/download" ? "text-[#1C1C1C]" : ""} text-[#1C1C1C] group-hover:text-[#1C1C1C] font-mont text-semibold`}>Community</p>
            </div>
            <div  className={`${location?.pathname === "/job-tracker" ? "bg-[#E3F2F8]" : ""} relative w-[184px] h-[48px] rounded-2xl gap-2 flex items-center cursor-pointer group p-[16px] transition-all duration-300 hover:bg-[#E3F2F8]`}>
                <div className='flex items-center gap-2'>
                    <MdInsertChartOutlined  className={`${location.pathname === "/job-tracker" ? "text-[#1C1C1C]" : ""} w-5 h-5 text-[#1C1C1C] group-hover:text-[#1C1C1C]`} />
                    <p className={`${location.pathname === "/job-tracker" ? "text-[#1C1C1C]" : ""} text-[#1C1C1C] group-hover:text-[#1C1C1C] font-mont text-semibold`}>Job Tracker</p>
                </div>
                <div className='absolute right-1 bottom-8 flex items-center justify-center group-hover:bg-transparent rounded h-[16px] bg-[#42B8BD4D] p-2'>
                    <p className={`${location.pathname === "/job-tracker" ? "text-[#1C1C1C]" : ""} text-[#000709] group-hover:text-[#1C1C1C] font-semibold text-[8px]`}>Coming soon</p>
                </div>
            </div>
            <div className={`${location?.pathname === "/assessments" ? "bg-[#E3F2F8]" : ""} relative w-[184px] h-[48px] rounded-2xl gap-2 flex items-center  group transition-all duration-300 p-[16px] cursor-pointer hover:bg-[#E3F2F8]`}>
                <div className='flex items-center gap-2'>
                    <FiUser className={`${location.pathname === "/assessments" ? "text-[#1C1C1C]" : ""} w-5 h-5 text-[#1C1C1C] group-hover:text-[#1C1C1C]`} />
                    <p className={`${location.pathname === "/assessments" ? "text-[#1C1C1C]" : ""} text-[#1C1C1C] group-hover:text-[#1C1C1C] font-mont text-semibold`}>Assessments</p>
                </div>
                <div className='absolute right-1 bottom-8 flex items-center justify-center group-hover:bg-transparent rounded h-[16px] bg-[#42B8BD4D] p-2'>
                    <p className={`${location.pathname === "/assessments" ? "text-[#1C1C1C]" : ""} text-[#000709] group-hover:text-[#1C1C1C] font-semibold text-[8px]`}>Coming soon</p>
                </div>
            </div>
            <div onClick={() => navigate("/talent/login")} className='w-[184px] h-[48px] rounded-2xl gap-2 flex items-center group my-[100px] transition-all duration-300 cursor-pointer p-[16px] hover:bg-[#E3F2F8]'>
                <MdLogout  className='w-5 h-5 text-[#1C1C1C] group-hover:text-[#fff]' />
                <p className='text-[#1C1C1C] group-hover:text-[#fff] font-mont text-semibold'>Logout</p>
            </div>
        </div>
    </div>
  )
}

export default SideBar
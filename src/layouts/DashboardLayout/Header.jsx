import React, { useEffect, useState } from 'react'
import { Button, Menu, MenuItem } from '@mui/material';
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";
import { CiSearch } from "react-icons/ci";

import Activity from "../../assets/svg/activity.svg"
import ProfilePhoto from "../../assets/img/user_small.png"
import Notification from "../../assets/img/notification.png"
import HeaderSearch from "../../assets/img/header-search.png"
// import ProfilePhoto from "../../assets/img/profile_photo_small.png"
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProfile } from '../../features/profile/getProfileSlice';

const Header = () => {

  const dispatch = useDispatch()

  const { data } = useSelector(state => state.fetchProfileData)
  console.log(data, "iay")
  const userDetails = data?.data
  console.log(userDetails, "userDetails")

  const navigate = useNavigate()

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    navigate("/talent/login")
  };

  useEffect(() => {
    dispatch(getProfile())
  }, [])

  return (
    <div className='pt-[32px] w-full mb-5 fixed  bg-[#F5F5F5]  z-50 h-[88px]'> {/*  h-[74px]  fixed */}
      <div className='flex items-center fixed gap-[80%] justify-between'> {/*     */}
      <p className='w-[250px] whitespace-nowrap font-mont font-semibold text-[24px] flex gap-[8px] py-[4px] px-[0px]'>{`Hello, ${userDetails?.first_name}`}</p>
        {/* <div className='w-[268px] bg-[#E3E7E8] flex items-center gap-[8px] py-[4px] px-[16px] rounded-2xl '>
          <CiSearch  className="w-4 h-4"/>
          <input 
            className='bg-[#E3E7E8] outline-none font-mont'
            name='search'
            type='text'
            placeholder='Search'
          />
        </div> */}

        <div className='flex items-center w-[323px] gap-6'>  {/* ml-[240%]  */} 
          <div className='w-[154px] h-[42px] flex justify-center items-center rounded-lg bg-[#42B8BD] py-[8px] '>
            <Button
              id="basic-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              // onClick={handleClick}
              className='flex items-center gap-[4px]'
            >
              <img src={Activity} alt='activity' /> 
              <p className='text-[#00141B] text-sm font-medium font-mont'>Unverified</p>
              <MdKeyboardArrowDown className="w-[24px] h-[24px] text-[#00141B]" />
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
            </Menu>
          </div>
          <img src={HeaderSearch}  alt='search' className='w-[44px] h-[40px]'/>
          <img src={Notification}  alt='notification' className='w-[44px] h-[40px]'/>

          <div className='w-[203px] h-[48px] flex justify-center items-center rounded-2xl border border-[#1c1c1c1a] py-[8px] py-[16px]'>
            <Button
              id="basic-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
              className='flex items-center gap-[4px] w-[123px]'
            >
              <div>
                {
                  userDetails?.profile_photo === null ?
                  <div className='border rounded-full border-[#ccc] w-[28px] h-[28px]'>
                    <p>{userDetails?.first_name.substring(0, 1)}</p>
                  </div>
                  :
                  <img src={userDetails?.profile_photo} alt='activity' className='w-[28px] h-[28px] rounded-full' />   
                }
              </div>
              <p className='font-mont font-medium text-xs text-[#000]'>{userDetails?.first_name}</p>
              <IoMdArrowDropdown className="w-[20px] h-[20px] text-[#00141B]" />
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Header
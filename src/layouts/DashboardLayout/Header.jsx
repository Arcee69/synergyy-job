import React, { useState } from 'react'
import { Button, Menu, MenuItem } from '@mui/material';
import { MdKeyboardArrowDown } from "react-icons/md";
import { CiSearch } from "react-icons/ci";

import Activity from "../../assets/svg/activity.svg"
import Notification from "../../assets/img/notification.png"
import ProfilePhoto from "../../assets/img/profile_photo_small.png"
import { useNavigate } from 'react-router-dom';

const Header = () => {

  const navigate = useNavigate()

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    navigate("/login")
  };

  return (
    <div className='pt-[32px] w-full h-[78px]'>
      <div className='flex justify-between'>
        <div className='w-[268px] bg-[#E3E7E8] flex items-center gap-[8px] py-[4px] px-[16px] rounded-2xl '>
          <CiSearch  className="w-4 h-4"/>
          <input 
            className='bg-[#E3E7E8] outline-none font-mont'
            name='search'
            type='text'
            placeholder='Search'
          />
        </div>

        <div className='flex items-center w-[323px] gap-6'>
          <div className='w-[139px] h-[36px] flex justify-center items-center rounded-2xl bg-[#42B8BD] py-[8px] py-[16px]'>
            <Button
              id="basic-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              // onClick={handleClick}
              className='flex items-center gap-[8px]'
            >
              <img src={Activity} alt='activity' /> 
              <p className='text-[#fff] text-base font-mont'>Active</p>
              <MdKeyboardArrowDown className="w-[20px] h-[20px] text-[#fff]" />
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
          <img src={Notification}  alt='notification' className='w-[44px] h-[40px]'/>

          <div className='w-[92px] h-[44px] flex justify-center items-center rounded-2xl border border-[#1c1c1c1a] py-[8px] py-[16px]'>
            <Button
              id="basic-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
              className='flex items-center gap-[8px]'
            >
              <img src={ProfilePhoto} alt='activity' className='w-[28px] h-[28px]' /> 
              <MdKeyboardArrowDown className="w-[20px] h-[20px] text-[#1C1C1C66]" />
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
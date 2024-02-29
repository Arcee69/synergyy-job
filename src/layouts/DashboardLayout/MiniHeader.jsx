import React, { useState, useEffect } from 'react'
import Logo from "../../assets/svg/logo.svg"
// import ProfilePhoto from "../../assets/img/profile_photo_small.png"
import ProfilePhoto from "../../assets/img/user_small.png"
import Notification from "../../assets/img/notification.png"

import MobileNavbar from './MobileNavbar';
import { Button, Menu, MenuItem } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProfile } from '../../features/profile/getProfileSlice';

const MiniHeader = () => {
    const [openModal, setOpenModal] = useState(false);

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
    <>
    <div className='w-full flex  justify-between items-center'>
        <div className='flex items-center gap-2' >
            {
                userData?.profile_photo === null ? (
                    <div className='w-[44px] h-[44px] rounded-full border border-[#666] bg-[#fafafa] flex items-center justify-center'>
                        <p className='text-[#000] text-4xl'>{userData?.first_name?.substring(0, 1)}</p>
                    </div>
                ) : (
                    <img src={userData?.profile_photo} alt='profile_photo' className='lg:hidden rounded-full xs:block w-[44px] h-[44px]' />
                )
            }
            <div className='flex flex-col'>
                <p className='text-[#000000] font-mont text-lg font-semibold'>{`${userData?.first_name} ${userData?.last_name}`}</p>
                <p className='font-mont text-[#8D8D8D] text-sm'>Product Designer</p>
            </div>
        </div>
        <div className=' flex gap-[12px] items-center' >
            <img src={Notification}  alt='notification' className='w-[44px] h-[40px]'/>
            <div className='w-[48px] h-[44px] hidden lg:flex  justify-center items-center rounded-full border border-[#1c1c1c1a] py-[8px] py-[10px]'>
                <Button
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                    className='flex items-center '
                >
                    <img src={ProfilePhoto} alt='activity' className='w-[28px] h-[28px] ' />
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
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="16" viewBox="0 0 22 16" fill="none" onClick={() => setOpenModal(true)}>
            <path d="M2.00008 6.66667C1.64646 6.66667 1.30732 6.80714 1.05727 7.05719C0.807224 7.30724 0.666748 7.64638 0.666748 8C0.666748 8.35362 0.807224 8.69276 1.05727 8.94281C1.30732 9.19286 1.64646 9.33333 2.00008 9.33333V6.66667ZM20.6667 9.33333C21.0204 9.33333 21.3595 9.19286 21.6096 8.94281C21.8596 8.69276 22.0001 8.35362 22.0001 8C22.0001 7.64638 21.8596 7.30724 21.6096 7.05719C21.3595 6.80714 21.0204 6.66667 20.6667 6.66667V9.33333ZM2.00008 0C1.64646 0 1.30732 0.140476 1.05727 0.390525C0.807224 0.640573 0.666748 0.979711 0.666748 1.33333C0.666748 1.68696 0.807224 2.02609 1.05727 2.27614C1.30732 2.52619 1.64646 2.66667 2.00008 2.66667V0ZM20.6667 2.66667C21.0204 2.66667 21.3595 2.52619 21.6096 2.27614C21.8596 2.02609 22.0001 1.68696 22.0001 1.33333C22.0001 0.979711 21.8596 0.640573 21.6096 0.390525C21.3595 0.140476 21.0204 0 20.6667 0V2.66667ZM2.00008 13.3333C1.64646 13.3333 1.30732 13.4738 1.05727 13.7239C0.807224 13.9739 0.666748 14.313 0.666748 14.6667C0.666748 15.0203 0.807224 15.3594 1.05727 15.6095C1.30732 15.8595 1.64646 16 2.00008 16V13.3333ZM20.6667 16C21.0204 16 21.3595 15.8595 21.6096 15.6095C21.8596 15.3594 22.0001 15.0203 22.0001 14.6667C22.0001 14.313 21.8596 13.9739 21.6096 13.7239C21.3595 13.4738 21.0204 13.3333 20.6667 13.3333V16ZM2.00008 9.33333H20.6667V6.66667H2.00008V9.33333ZM2.00008 2.66667H20.6667V0H2.00008V2.66667ZM2.00008 16H20.6667V13.3333H2.00008V16Z" fill="#334D57"/>
          </svg>
        </div>
    </div>
    {openModal && <MobileNavbar handleClose={() => setOpenModal(false)} /> }
    </>
  )
}

export default MiniHeader
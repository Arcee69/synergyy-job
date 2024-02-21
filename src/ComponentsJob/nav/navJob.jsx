import React from 'react'
import Logo from '../../assets/img/logo.png'
import { useNavigate } from 'react-router-dom'
import  Briefcase  from '../../assets/svg/Briefcase.svg'
import  Profile  from '../../assets/svg/Profiles.svg'
import  Bookmark  from '../../assets/svg/Bookmarks.svg'

export default function NavJob() {
    const navigate = useNavigate()
    return (
        <div className='px-[5.5%] py-6 w-full flex justify-between items-center'>
            <div>
                <img src={Logo} alt='synerygy logo' onClick={() => navigate('/')} className='cursor-pointer w-[108px]'/>
            </div>   
            <div className='flex gap-[38.4px] items-center'>
                <Briefcase className='cursor-pointer'/>
                <Bookmark className='cursor-pointer'/>
                <Profile className='cursor-pointer'/>
            </div>     
        </div>
    )
}

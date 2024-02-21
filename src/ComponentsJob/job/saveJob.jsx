import React from 'react'
import  Exit  from '../../assets/svg/action-cancel-close-delete-exit-remove-x-icon 1.svg'
import Buttons from '../button'
import { useNavigate } from 'react-router-dom'

export default function SaveJob({ setDrawer }) {
    const navigate = useNavigate()
    
    return (
        <div className='flex flex-col gap-6'>
            <div className='items-center gap-[9px] w-full flex justify-center'>
                <p className='mini:text-[24px] text-[20px] w-[80%] font-bold text-center capitalize text-[#EFF4F5]'>Create an account to get full access</p>
            </div>
            <div>
                <p className='mini:text-[16px] text-[13px] text-center text-[#F9FAFB]'>You’ll need to join Synergyy to enjoy full access and a host of members only benefits.</p>
            </div>
            <div className='w-full flex justify-center'>
                <Buttons functions={() => navigate('/#download')} text={'Join Synergyy'} padding='12px 11px' height={'40px'} radius={'8px'} hoverColor='#024355' hoverText='#FFFFFF' type='button' width='149px' weight='600' size='14px' color='#00141B' bgColor='#EFF4F5' />
            </div>
        </div>
    )
}

{/* <div className='flex flex-col gap-12'>
<div className='flex justify-between items-center gap-[9px]'>
    <p className='mini:text-[20.25px] font-medium capitalize w-[90%]'>Save this job with your existing synergy profile or create a new one</p>
    <Exit className='cursor-pointer' onClick={() => setDrawer(false)}/>
</div>
<div className='flex flex-col gap-2'>
    <label className='text-[15px] text-[#CCCCCC]'>Email</label>
    <input type='email' className='p-4 rounded border border-[#667A81] h-12 bg-inherit focus:outline-none text-[#667A81]' placeholder='Enter email' />
</div>
<div className='w-full flex justify-center'>
    <Buttons text={'Save Job'} padding='8px 40px' height={'40px'} radius={'4.5px'} hoverColor='#F56A6A' type='button' width='208.25px' weight='600' size='15px' color='#041F29' bgColor='#FBA599' />
</div>
</div> */}
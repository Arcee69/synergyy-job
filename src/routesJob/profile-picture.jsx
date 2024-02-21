import React from 'react'
import Onboards from '../ComponentsJob/onboards'
import ProfilePictureForm from '../ComponentsJob/forms/profilePictureForm'

export default function ProfilePicture() {
    return (
        <Onboards returns='career' rate={'w-[99.99%]'} full={true}>
            <div className='w-full phone:px-0 px-5 flex flex-col phone:items-center gap-8 flex-1'>
                <div className='flex flex-col phone:gap-[14.4px] gap-3'>
                    <h1 className='font-semibold text-[#F9FAFB] phone:text-[28.8px] text-[24px] phone:text-center'>Add a profile picture</h1>
                    <h2 className='text-[16px] text-[#BABABA] phone:text-center'>Make it easier for people to find you. Build trust with professional images.</h2>
                </div>
                <ProfilePictureForm />
            </div>
        </Onboards>
    )
}

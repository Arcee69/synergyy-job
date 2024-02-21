import React from 'react'
import Box from '../ComponentsJob/box'
import Stepper from '../ComponentsJob/stepper'
import LocationForm from '../ComponentsJob/forms/locationForm'

export default function Location({ hamburger, setHamburger }) {
    return (
        <Box setHamburger={setHamburger} hamburger={hamburger} returns='location'>
            <Stepper />
            <div className='flex flex-col sm:gap-[72px] gap-8'>
                <div className='flex flex-col gap-2'>
                    <h1 className='font-semibold text-[#F9FAFB] text-[24px] capitalize'>What’s your <span className='text-[#42B8BD]'>location?</span></h1>
                    <h2 className='text-[16px] text-white opacity-60'>This will help us tailor your experience and recommendations</h2>
                </div>
                <LocationForm />
            </div>
        </Box>
    )
}

import React from 'react'

export default function JobDescription({ info }) {
    return (
        <div className='text-[#CCD3D5] sm:text-[13px] text-[14px] px-8 lg:px-0'>
            <div dangerouslySetInnerHTML={{__html:info?.description}} />
        </div>
    )
}

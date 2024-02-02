import React from 'react'
import  Exit  from '../../assets/svg/action-cancel-close-delete-exit-remove-x-icon 1.svg'
import Buttons from '../button'
import  Copy  from '../../assets/svg/copy.svg'
import { useCopy } from '../../utils/useCopy'
import { sliceWordAndAddEllipse } from '../../libs/helperFunctions'

export default function ShareJob({ setShare, info }) {
    const { copyToClipBoard } = useCopy();

    return (
        <div className='flex flex-col gap-12'>
            <div className='flex justify-between items-center'>
                <p className='text-[20.25px] font-medium capitalize'>Share Job</p>
                <Exit className='cursor-pointer' onClick={() => setShare(false)}/>
            </div>
            <div>
                <p className='text-[16px] text-[#ECE2DC] font-light'>Check out this {info?.title} job at {info?.company}: {sliceWordAndAddEllipse(info?.link)}</p>
            </div>
            <div className='w-full flex justify-center'>
                <Buttons functions={() => copyToClipBoard(info?.link)} text={'Copy Link'} icons={<Copy />} padding='8px 40px' height={'40px'} radius={'4.5px'} hoverColor='#F56A6A' type='button' width='208.25px' weight='600' size='15px' color='#041F29' bgColor='#FBA599' />
            </div>
        </div>
    )
}

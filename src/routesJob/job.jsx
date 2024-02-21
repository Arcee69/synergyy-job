import React from 'react'
import NavJob from '../ComponentsJob/nav/navJob'
import  Search  from '../assets/svg/Vector (4).svg'
import Buttons from '../ComponentsJob/button'
import Download2 from '../ComponentsJob/download/download2'
import PopularJob from '../ComponentsJob/job/popularJob'

export default function Job() {
    return (
        <div className='bg-background'>
            <NavJob />
            <div className='mt-[31.6px] px-[5.5%]'>
                <div className='bg-black flex justify-center items-center h-[289px] w-full mb-20'>
                    <div className='flex flex-col gap-8 w-[601px] items-center'>
                        <div className='flex flex-col gap-3'>
                            <h1 className='text-[40px] text-white capitalize font-bold'>Secure the bag</h1>
                            <h2 className='text-[17px] font-medium text-white opacity-80'>Begin your journey to financial freedom</h2>
                        </div>
                        <div className='flex gap-4 items-center w-full'>
                            <div className='w-full h-12 rounded-[6px] border-[1.5px] border-[#F9FAFB] px-4 bg-white flex items-center gap-3'>
                                <Search />
                                <input className='h-full focus:outline-none w-full' placeholder='Search jobs, scholarships and more...'/>
                            </div>
                            <Buttons text={'Search'} width={'121px'} bgColor={'#FBA599'} hoverColor={'#FBA599'} color={'#00141B'}/>
                        </div>
                    </div>
                </div>
                <div className='flex gap-6 w-full'>
                    <div className='h-[409px] w-[304px] rounded-[10px] border border-green-50 flex flex-col gap-4 items-center justify-center'>
                        <div className='w-[142px] h-[142px] rounded-full border-[5px] border-[#FE9730] bg-[#B8C3C6]'></div>
                        <div className='flex flex-col gap-[10px]'>
                            <p className='text-[22px] font-semibold text-white'>Tosin Jegede</p>
                            <p className='capitalize text-[16px] text-green-50'>Product designer</p>
                        </div>
                        <div className='w-full flex justify-center'>
                            <Buttons text={'Edit Profile'} width={'auto'} bgColor={'#FBA599'} hoverColor={'#FBA599'} color={'#00141B'}/>
                        </div>
                    </div>
                    <div className='flex-1 h-screen'>
                        <PopularJob />
                    </div>
                    <div>
                        <Download2 />
                    </div>
                </div>
            </div>
        </div>
    )
}

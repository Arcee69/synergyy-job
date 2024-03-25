import React from 'react'
import SideBar from './SideBar'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import MiniHeader from './MiniHeader'

const DashboardLayout = () => {
  return (
    <div className='overflow-x-hidden flex relative  w-full'>
        <div className='w-[18%] hidden fixed lg:flex'>
            <SideBar/>
        </div>
        <div className='flex flex-col bg-[#F5F5F5] lg:bg-[#F5F5F5] gap-4 lg:w-[100%] lg:ml-52  w-full  px-[12px] lg:px-[40px]'> {/* lg:rounded-tl-3xl */}
            <div className='hidden lg:flex'>
                <Header />
            </div>
            <div className="flex lg:hidden fixed  overflow-x-hidden z-50 bg-[#F5F5F5] w-full h-[76px] py-4">
                <MiniHeader />
            </div>
            <div>
                <Outlet />
            </div>
        </div>

    </div>
  )
}

export default DashboardLayout
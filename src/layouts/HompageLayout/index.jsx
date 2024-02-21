import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import MiniHeader from './MiniHeader'

const HomePageLayout = () => {
  return (
    <div className='overflow-x-hidden w-full'>
        <div className='hidden lg:flex' > {/* data-aos="fade-up" data-aos-duration="3000" */}
          <Header />
        </div>
        <div className='xs:flex lg:hidden' > {/* data-aos="fade-up" data-aos-duration="3000"*/}
          <MiniHeader />
        </div>
        <div>
            <Outlet />
        </div>
        <div>
            <Footer />
        </div>
    </div>
  )
}

export default HomePageLayout
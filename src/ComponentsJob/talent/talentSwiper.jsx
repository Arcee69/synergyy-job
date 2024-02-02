import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Swipe from './swipe';

export default function TalentSwiper() {
    return (
        <div className='bg-[#F5F5F5] lg:px-[46px] px-6 py-12 flex flex-col lg:gap-[55px] gap-12'>
            <div>
                <h1 className='mini:w-[634px] w-[296px] mini:leading-[61.639px] leading-[39.6px] font-raleway mini:text-[56px] text-[36px] font-semibold opacity-90 text-background'>Why Cool Organizations Bank On Us</h1>
            </div>
            <div className='lg:hidden block talent-swiper'>
                <Swiper
                    modules={[Navigation, Pagination, Autoplay, A11y]}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    speed={1200}
                >
                    <SwiperSlide>
                        <Swipe />    
                    </SwiperSlide>
                    <SwiperSlide>
                        <Swipe />        
                    </SwiperSlide>
                    <SwiperSlide>
                        <Swipe />        
                    </SwiperSlide>
                    <SwiperSlide>
                        <Swipe />       
                    </SwiperSlide>
                    <SwiperSlide>
                        <Swipe />       
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className='lg:block hidden talent-swiper'>
                <Swiper
                    modules={[Navigation, Pagination, Autoplay, A11y]}
                    slidesPerView={2}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    speed={1200}
                >
                    <SwiperSlide>
                        <Swipe />    
                    </SwiperSlide>
                    <SwiperSlide>
                        <Swipe />        
                    </SwiperSlide>
                    <SwiperSlide>
                        <Swipe />        
                    </SwiperSlide>
                    <SwiperSlide>
                        <Swipe />       
                    </SwiperSlide>
                    <SwiperSlide>
                        <Swipe />       
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

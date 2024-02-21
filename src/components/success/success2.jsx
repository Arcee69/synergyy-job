import React, {useEffect} from 'react'
import Slidebox from './slide'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useLocation } from 'react-router-dom';
import Slidebox2 from './slide2';
export default function Success2() {
    const location = useLocation()

    useEffect(() => {
        if (location.hash) {
          const targetElement = document.querySelector(location.hash);
          if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }, [location]);




    return (
        <div className='success lg:pt-20 pt-[50px] lg:px-[92px] px-6 lg:pb-[47px] pb-[50px] hidden'>
            <h3 className='text-center sm:text-[32px] text-[20px] font-semibold' id='connection'>Success Stories</h3>
            <h2 className='mt-[18px] text-center sm:text-[40px] text-[24px] font-bold text-gray text-center' >How we’re revolutionizing Talent Acquisition</h2>
            <div className='lg:mt-[104px] mt-[33px] flex justify-center'>
                <div className='swiper-lg mid:flex hidden justify-center w-full'>
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
                            <Slidebox2 testimony={'Synergyy has really helped my company save time and effort. We started out with hiring for an accounting intern and now we’ve managed to hire 40% of our staff through Synergyy.'}
                            name={'Folusho Joshua'} job={'CEO, Transmission holdings'} image={'/images/success21.svg'} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Slidebox2 testimony={'Synergyy has really helped my company save time and effort. We started out with hiring for an accounting intern and now we’ve managed to hire 40% of our staff through Synergyy.'} 
                            name={'Folusho Joshua'} job={'CEO, Transmission holdings'} image={'/images/success21.svg'} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Slidebox2 testimony={'Synergyy has really helped my company save time and effort. We started out with hiring for an accounting intern and now we’ve managed to hire 40% of our staff through Synergyy.'}
                            name={'Folusho Joshua'} job={'CEO, Transmission holdings'} image={'/images/success21.svg'}  />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Slidebox2 testimony={"Synergyy has really helped my company save time and effort. We started out with hiring for an accounting intern and now we’ve managed to hire 40% of our staff through Synergyy."}
                            name={'Folusho Joshua'} job={'CEO, Transmission holdings'} image={'/images/success21.svg'}  />
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className='swiper-mobile mid:hidden block w-full' id='connection'>
                    <Swiper
                        modules={[Pagination, Autoplay]}
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        speed={1200}
                    >
                        <SwiperSlide>
                            <Slidebox2 testimony={'Synergyy has really helped my company save time and effort. We started out with hiring for an accounting intern and now we’ve managed to hire 40% of our staff through Synergyy.'}
                            name={'Folusho Joshua'} job={'CEO, Transmission holdings'} image={'/images/success21.svg'} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Slidebox2 testimony={'Synergyy has really helped my company save time and effort. We started out with hiring for an accounting intern and now we’ve managed to hire 40% of our staff through Synergyy.'} 
                            name={'Folusho Joshua'} job={'CEO, Transmission holdings'} image={'/images/success21.svg'} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Slidebox2 testimony={'Synergyy has really helped my company save time and effort. We started out with hiring for an accounting intern and now we’ve managed to hire 40% of our staff through Synergyy.'}
                            name={'Folusho Joshua'} job={'CEO, Transmission holdings'} image={'/images/success21.svg'}  />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Slidebox2 testimony={"Synergyy has really helped my company save time and effort. We started out with hiring for an accounting intern and now we’ve managed to hire 40% of our staff through Synergyy."}
                            name={'Folusho Joshua'} job={'CEO, Transmission holdings'} image={'/images/success21.svg'}  />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

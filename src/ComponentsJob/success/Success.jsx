import React, {useEffect} from 'react'
import Slidebox from './slide'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useLocation } from 'react-router-dom';

import SuccessA from "../../assets/svg/success1.svg"
import SuccessB from "../../assets/svg/success2.svg"
import SuccessC from "../../assets/svg/success3.svg"
import SuccessD from "../../assets/svg/success4.svg"


export default function Success() {
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
        <div className='success lg:pt-20 pt-[50px] lg:px-[92px] px-6 lg:pb-[47px] pb-[50px]'>
            <h3 className='text-center sm:text-[32px] text-[20px] font-semibold' id='connection'>Success Stories</h3>
            <h2 className='mt-[18px] text-center sm:text-[40px] text-[24px] font-bold text-gray' >Hear how Synergyy is changing lives</h2>
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
                            <Slidebox testimony={'Synergyy is a life-saver. Ever since I joined the youth community, I have been exposed to opportunities and resources that have impacted my job search and how I put out applications. – '}
                            name={'Ayomide Anita Nejo'} job={'Student'} image={SuccessD} />  {/* {'/images/success1.svg'}  */}
                        </SwiperSlide>
                        <SwiperSlide>
                            <Slidebox testimony={'If you’re a recent graduate or someone looking to transition into a new career path, I highly recommend Synergyy. They are are the best at what they do. I owe a significant part of my career growth to their platform.'} 
                            name={'Ebubechukwu Agnes'} job={'Ethical Hacker'} image={SuccessC} />  {/* {'/images/success2.svg'}  */}
                        </SwiperSlide>
                        <SwiperSlide>
                            <Slidebox testimony={'One exciting thing I like about Synergyy is their exhaustive list of entry level opportunities for young graduates. I don’t know how they do it but their team perfectly curates these opportunities and roll them out daily. And not just that, they provide us with tips to put out good applications.'}
                            name={'Alonge Abiodun'} job={'Google Ads Specialist'}  image={SuccessB} />   {/* {'/images/success3.svg'}  */}
                        </SwiperSlide>
                        <SwiperSlide>
                            <Slidebox testimony={"Synergyy has been a lifesaver for me! As a recent graduate, I was struggling to find a job that matched my skills and interests. But with the help of Synergyy's job search platform, I was able to find my dream job within weeks."}
                            name={'Folusho Joshua'} job={'Business Development Associate'} image={SuccessA} /> {/* {'/images/success4.svg'}  */}
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
                        <Slidebox testimony={'Synergyy is a life-saver. Ever since I joined the youth community, I have been exposed to opportunities and resources that have impacted my job search and how I put out applications. – '}
                            name={'Ayomide Anita Nejo'} job={'Student'} image={SuccessD} /> {/* {'/images/success1.svg'}  */}
                        </SwiperSlide>
                        <SwiperSlide>
                        <Slidebox testimony={'If you’re a recent graduate or someone looking to transition into a new career path, I highly recommend Synergyy. They are are the best at what they do. I owe a significant part of my career growth to their platform.'} 
                            name={'Ebubechukwu Agnes'} job={'Ethical Hacker'} image={SuccessC} /> {/* {'/images/success2.svg'}  */}
                        </SwiperSlide>
                        <SwiperSlide>
                        <Slidebox testimony={'One exciting thing I like about Synergyy is their exhaustive list of entry level opportunities for young graduates. I don’t know how they do it but their team perfectly curates these opportunities and roll them out daily. And not just that, they provide us with tips to put out good applications.'}
                            name={'Alonge Abiodun'} job={'Google Ads Specialist'} image={SuccessB} /> {/* {'/images/success3.svg'}  */}
                        </SwiperSlide>
                        <SwiperSlide>
                        <Slidebox testimony={"Synergyy has been a lifesaver for me! As a recent graduate, I was struggling to find a job that matched my skills and interests. But with the help of Synergyy's job search platform, I was able to find my dream job within weeks."}
                            name={'Folusho Joshua'} job={'Business Development Associate'} image={SuccessA} /> {/* {'/images/success4.svg'}  */}
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

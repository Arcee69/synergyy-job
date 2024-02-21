import React from 'react'
import { SwiperSlide, Swiper } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import SignUpForm from '../ComponentsJob/forms/signUpForm';
import Successtart from '../ComponentsJob/success/successtart';
import Navigation from '../ComponentsJob/nav/navigation';
import Hamburger from '../ComponentsJob/hamburger';

export default function Auth({setHamburger, hamburger}) {
    return (
        <div className='bg-background auth'>
            {/* <Navigation setHamburger={setHamburger}/>
            {hamburger && <Hamburger setHamburger={setHamburger} />} */}
            <div className="w-full flex">
                <div className="w-[43.1%] bg-backgroundBlack py-[56px] px-[120px] lg:flex flex-col hidden">
                    <h3 className='text-center text-[20px] font-semibold text-white opacity-[0.5]'>Success Stories</h3>
                    <h2 className='mt-[9.9px] text-center text-[26px] font-extrabold text-white'>How Synergyy is changing lives</h2>
                    <div className='flex-1 flex justify-center synergy-swiper'>
                        <Swiper
                            slidesPerView={1}
                            pagination={{ clickable: true }}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                            }}
                            modules={[Autoplay, Pagination]}
                        >
                            <SwiperSlide>
                                <Successtart testimony={'Synergyy is a life-saver. Ever since I joined the youth community, I have been exposed to opportunities and resources that have impacted my job search and how I put out applications. – '}
                                name={'Ayomide Anita Nejo'} job={'Student'} image={'/images/success1.svg'} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Successtart testimony={'If you’re a recent graduate or someone looking to transition into a new career path, I highly recommend Synergyy. They are are the best at what they do. I owe a significant part of my career growth to their platform.'} 
                                name={'Ebubechukwu Agnes'} job={'Ethical Hacker'} image={'/images/success2.svg'} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Successtart testimony={'One exciting thing I like about Synergyy is their exhaustive list of entry level opportunities for young graduates. I don’t know how they do it but their team perfectly curates these opportunities and roll them out daily. And not just that, they provide us with tips to put out good applications.'}
                                name={'Alonge Abiodun'} job={'Google Ads Specialist'} image={'/images/success3.svg'} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Successtart testimony={"Synergyy has been a lifesaver for me! As a recent graduate, I was struggling to find a job that matched my skills and interests. But with the help of Synergyy's job search platform, I was able to find my dream job within weeks."}
                                name={'Folusho Joshua'} job={'Business Development Associate'} image={'/images/success4.svg'} />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
                <div className="lg:flex-1 flex w-full">
                    <div className="w-full flex-1 flex lg:items-center justify-center">
                        <SignUpForm />
                    </div>
                </div>
            </div>
        </div>
    )
}
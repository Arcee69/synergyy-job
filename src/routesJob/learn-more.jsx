import React, { useState } from "react"
import Nav from "../ComponentsJob/nav/nav"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import { EasyWay } from "../ComponentsJob/easyWay";
import { Solutions } from "../ComponentsJob/solutions";
import Success2 from "../ComponentsJob/success/success2";
import Footer from "../ComponentsJob/footer/footer";
import Hamburger from "../ComponentsJob/hamburger";
import { useNavigate } from "react-router-dom";


export default function LearnMore(){
    const navigate = useNavigate()
const [hamburger, setHamburger] = useState(false)


    return (
        <div className='bg-background'>
            {hamburger && <Hamburger setHamburger={setHamburger} />}
            <Nav hamburger={hamburger} setHamburger={setHamburger} />
            <div className="py-[58px] sm:mt-[86px] px-[24px] sm:px-[80px] sm:pb-[67px] lg:grid lg:grid-cols-2">
                <div>
                    <h1 className="font-bold text-[32px] mid:text-[64px] text-white">Hire Top Verified and Trusted Talent</h1>
                    <p className="font-medium text-[14px] mid:text-[17px] opacity-70 mt-[15px] mid:mt-[30px] text-white">Synergyy is the Multiverse of Opportunity helping young people access the future of their dreams.</p>
                    <div className='flex gap-2 items-center p-[16px] rounded-[8px]  cursor-pointer hover:motion-safe:animate-pulse bg-[#42B8BD] xs:justify-start justify-center mt-[15px] mid:mt-[30px] w-fit' onClick={() => navigate('/get-access')}>
                        <p className='font-medium text-[14px] text-[#00141B] capitalize'>Get Access</p>
                        <img src="/images/learn.svg" alt="arrow" />
                    </div>
                </div>
                <div className="hidden lg:block animate__animated animate__backInDown animate__slow">
                    <img src="/images/learnImage.svg" alt="learn-more" style={{transform:'translateX(75px)'}} />
                </div>
            </div>
            <div className="px-[24px] sm:px-[103px] py-[50px] sm:pt-[55px] sm:pb-[149px]">
                <h1 className="text-[24px] text-white sm:text-[40px] font-bold text-center">Hire <span className="about-about">The Easy Way</span></h1>
                <div className='swiper-mobile mid:hidden block w-full pt-[33px] pb-[50px]' id="connection">
                    {/* <Swiper
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
                        <EasyWay image={'/images/request-talent.svg'} text={'Request Talent'}/>
                        </SwiperSlide>
                        <SwiperSlide>
                        <EasyWay image={'/images/synergy-magic.svg'} text={'Synergyy Magic'} />
                        </SwiperSlide>
                        <SwiperSlide>
                        <EasyWay image={'/images/hired.svg'} text={'Hired'}  />
                        </SwiperSlide>
                    </Swiper> */}
                </div>
                <div className="hidden mid:block mt-[82px]">
                    <img src="/images/hired-group.svg" alt="hired" />
                </div>

            </div>
                <div className="py-[48px] px-[24px] mid:py-[80px] mid:px-[80px]">
                    <div className="rounded-[30px] px-[16px] py-[32px] bg-[#00212D] sm:py-[80px] sm:px-[64px] items-center lg:grid grid-cols-5">
                        <div className="col-span-3">
                        <h3 className="text-[20px] sm:text-[40px] font-bold text-white">Our Solutions</h3>
                        <div className="mt-[42px] lg:mt-[56px] flex flex-col gap-y-[31px] lg:gap-y-[43.5px]">
                            <Solutions number={'01'} title={'Recruitment'} text={'Optimize your hiring process and save valuable time and resources. Tap into our extensive network of top-vetted tech talent across Africa for swift and seamless recruitment.'} />
                            <Solutions number={'02'} title={'Outstaffing'} text={`Unlock unparalleled scalability with Synergyy's outstaffing solutions. Say goodbye to hiring complexities and welcome a flexible workforce that seamlessly integrates into your team.`}
                            text2={`Boost productivity, reduce costs, and accelerate your business growth with our skilled professionals supporting you every step of the way. Let's take your business to new heights together!`} />
                            <Solutions number={'03'} badge={true} title={'Staff Trainings'} text={`Unleash your team's true potential with Synergyy's transformative staff training. Equip your workforce with cutting-edge skills, actionable insights, and personalized development plans.`}
                            text2={`Witness immediate improvements in productivity, collaboration, and job satisfaction as your team embraces a culture of continuous learning. Don't miss out on this opportunity to accelerate your company's success. Let's empower your team to lead the way!`} />
                        </div>
                        </div>
                        <div className="mt-[56px] col-span-2">
                            <img src="/images/solutionImage.svg" alt="solution" className="w-full" />
                        </div>
                    </div>
                </div>
                <Success2 />
                <div className="px-[24px] py-[50px]  lg:py-[120px] sm:px-[80px]">
                    <div className="rounded-[40px] sm:pt-[90.39px] sm:px-[48px] bg-[#FBA599] lg:py-[90.39px] pt-[71.55px] px-[13px] sm:flex sm:flex-col sm:items-center lg:grid grid-cols-5 items-center relative">
                        <div className="col-span-3 lg:pr-[120px]">
                        <h3 className="font-bold text-[20px] text-center sm:text-[36px] lg:text-left">Ready to secure top talent? Synergyy got you covered</h3>
                        <p className="text-[13px] font-medium mt-[18px] text-center sm:text-[18px] sm:mt-[21px] lg:text-left">Find the best talent and Take your <br className="phone:hidden"/> organization to the next level with synergyy.</p>
                        <div className="mt-[32px] sm:mt-[43px] flex justify-center lg:justify-start">
                        <div className='flex gap-2 items-center px-[45px] py-[20px] rounded-[8px] cursor-pointer hover:motion-safe:animate-pulse bg-[#00141B] xs:w-auto w-[50%] xs:justify-start justify-center mt-[15px] w-fit' onClick={() => navigate('/get-access')}>
                        <p className='font-medium text-[16px] text-white capitalize'>Get Access</p>
                        <img src="/images/access-white.svg" alt="arrow" />
                    </div>
                        </div>
                        </div>
                        <div className="mt-[52.36px] relative col-span-2 w-fit mx-auto sm:bottom-0 lg:absolute lg:bottom-0 lg:right-[50px]">
                            <img src="/images/crown.svg" alt="crown" className="absolute top-[-26px] left-[55%]" />
                    <img src="/images/pink-lady.svg" alt="lady" />
                </div>

                    </div>

                </div>
               <Footer />
        </div>
    )
}
import React, { useState, useEffect} from 'react'
import { GoArrowUpRight } from "react-icons/go";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { MdOutlineArrowBackIosNew, MdOutlineArrowForwardIos } from "react-icons/md";
import { FaPlay } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import { ReactTyped } from 'react-typed';

import Star from "../../assets/img/star.png"
import Dots from "../../assets/img/dots.png"
import DotsB from "../../assets/img/dots-b.png"
import Top from "../../assets/img/top-right-pic.png"
import Bottom from "../../assets/img/bottom-left-pic.png"
import Mid from "../../assets/img/mid-pic.png"
import Check from "../../assets/img/verified-check.png"
import Dollar from "../../assets/img/dollar.png"
import Time from "../../assets/img/time.png"
import Data from "../../assets/img/data.png"
import Outreach from "../../assets/img/outreach.png"
import Discover from "../../assets/img/discover.png"
import Engineer from "../../assets/img/engineer.png"
import Candidates from "../../assets/img/candidates.png"
import Kwame from "../../assets/img/kwame.png"
import KwameB from "../../assets/img/kwame_mobile.png"
import Client from "../../assets/img/client.png"
import Girl from "../../assets/img/girl.png"
import Two from "../../assets/img/twoplus.png"
import Fave from "../../assets/img/fave.png"
import GirlMobile from "../../assets/img/girlmobile.png"
import GirlDev from "../../assets/img/girl_dev.png"
import Stock from "../../assets/img/stock.png"
import Pay from "../../assets/img/pay.png"
import FaveMobile from "../../assets/img/favemobile.png"
import SouthAfrica from "../../assets/img/southy.png"
import Rwanda from "../../assets/img/rwanda.png"
import Togo from "../../assets/img/togo.png"
import Tunisia from "../../assets/img/tunisia.png"
import Car from "../../assets/img/car.png"
import Chad from "../../assets/img/chad.png"
import Nigeria from "../../assets/img/nigeria_two.png"

import "./component/Scroll.css"
import "./component/Dot.css"



const LandingHome = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

    console.log(scrollPosition, "jasper")

    const navigate = useNavigate()

    useEffect(() => {
      const handleScroll = () => {
        setScrollPosition(window.scrollY);
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    const items = [
        {
            id: 1,
            title: "“There’s no tool like Synergyyy”",
            subtitle: "“Synergyy saved me weeks of recruiting time and helped me find the perfect candidate for my open position.  You honestly cannot find a better talent management product.”",
            img: Client,
            fullName: "Ella Wiston",
            company: "Calendy"
        },
        {
            id: 2,
            title: "“There’s no tool like Synergyyy”",
            subtitle: "“Synergyy saved me weeks of recruiting time and helped me find the perfect candidate for my open position.  You honestly cannot find a better talent management product.”",
            img: Client,
            fullName: "Ella Wiston",
            company: "Calendy"
        },
        {
            id: 3,
            title: "“There’s no tool like Synergyyy”",
            subtitle: "“Synergyy saved me weeks of recruiting time and helped me find the perfect candidate for my open position.  You honestly cannot find a better talent management product.”",
            img: Client,
            fullName: "Ella Wiston",
            company: "Calendy"
        },
        {
            id: 4,
            title: "“A There’s no tool like Synergyyy”",
            subtitle: "“Synergyy saved me weeks of recruiting time and helped me find the perfect candidate for my open position.  You honestly cannot find a better talent management product.”",
            img: Client,
            fullName: "Ella Wiston",
            company: "Calendy"
        },

    ]

    const CustomPrevArrow = (props) => (
        <div
          {...props}
          style={{
            // display: 'block',
            position: 'absolute',
            width: "36px",
            height: "36px",
            borderRadius: "50%",
            backgroundColor: "#BDBDBD",
            left: '10px',
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 1,
            cursor: 'pointer',
          }}
          className='flex flex-col justify-center items-center hidden lg:flex'
        >
          {/* Your custom previous arrow icon or content */}
          <span><MdOutlineArrowBackIosNew className="text-[#02577E]" /></span>
        </div>
      );
      
      const CustomNextArrow = (props) => (
        <div
          {...props}
          style={{
            // display: 'block',
            position: 'absolute',
            width: "36px",
            height: "36px",
            borderRadius: "50%",
            backgroundColor: "#BDBDBD",
            right: '10px',
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 1,
            cursor: 'pointer',
          }}
          className='flex flex-col justify-center items-center hidden lg:flex'
        >
          {/* Your custom next arrow icon or content */}
          <span><MdOutlineArrowForwardIos className="text-[#02577E]" /></span>
        </div>
      );

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 20000,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
              }
            },
            // {
            //   breakpoint: 600,
            //   settings: {
            //     slidesToShow: 2,
            //     slidesToScroll: 2,
            //     initialSlide: 2
            //   }
            // },
            {
              breakpoint: 320,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                // dots: true
              }
            }
          ]
      };

     const SecondSettingsCustomPrevArrow = (props) => (
        <div
          {...props}
          style={{
            // display: 'block',
            position: 'absolute',
            width: "36px",
            height: "36px",
            borderRadius: "50%",
            backgroundColor: "#fff",
            left: '94%',
            top: '-55%',
            transform: 'translateY(-50%)',
            zIndex: 1,
            cursor: 'pointer',
          }}
          className='flex flex-col justify-center items-center border border-BLACK-_100 hidden lg:flex'
        >
          {/* Your custom previous arrow icon or content */}
          <span><MdOutlineArrowBackIosNew className="text-[#000]" /></span>
        </div>
      );

      const SecondSettingsCustomNextArrow = (props) => (
        <div
          {...props}
          style={{
            // display: 'block',
            position: 'absolute',
            width: "36px",
            height: "36px",
            borderRadius: "50%",
            backgroundColor: "#000",
            right: '0px',
            top: '-55%',
            transform: 'translateY(-50%)',
            zIndex: 1,
            cursor: 'pointer',
          }}
          className='flex flex-col justify-center items-center hidden lg:flex'
        >
          {/* Your custom next arrow icon or content */}
          <span><MdOutlineArrowForwardIos className="text-WHITE-_100" /></span>
        </div>
      );

      const secondSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: <SecondSettingsCustomPrevArrow />,
        nextArrow: <SecondSettingsCustomNextArrow />, 
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
              }
            },
            // {
            //   breakpoint: 600,
            //   settings: {
            //     slidesToShow: 2,
            //     slidesToScroll: 2,
            //     initialSlide: 2
            //   }
            // },
            {
              breakpoint: 320,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
              }
            }
          ]
      };

      const flagSettings = {
        dots: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 5,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: true
                }
              },
            {
                breakpoint: 320,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  dots: false,
                }
              }
        ]
       
      };
    


  return (
    <div className='w-full'>
                                        {/* First Section data-aos="fade-up" data-aos-duration="3000" */}
        <div className='w-full flex flex-col gap-[50px] px-[24px] pt-[32px] lg:pt-[0px] lg:px-[0px] lg:flex-row lg:gap-[0px] items-center lg:mt-[86px] '>
            <div className='flex flex-col w-full items-center lg:items-start lg:w-[640px] h-[382px] gap-[20px] lg:ml-[80px]  '>
                <div className='flex gap-1 items-center'>
                    <img src={Star} alt='Star' className='w-[26px] h-[26px]' />
                    <p className='xs:text-base lg:text-2xl font-mont text-primaryColor'>Talent Multiverse</p>
                </div>
                <p className='text-[32px] text-center lg:text-left lg:text-[42px] font-mont font-bold'>
                    Build Smart Teams 
                    <ReactTyped 
                        strings={[
                            "Pricisely",
                            "Swiftly",
                            "On-Demand"
                        ]} 
                        typeSpeed={20} 
                        backSpeed={40}
                        className='font-mont ml-2 inline-block lg:text-[42px] font-bold text-[32px]'
                    />
                </p>
                <p className='w-[300px] lg:w-[500px] text-[#172041] text-center :text-[15px] lg:text-left lg:text-[17px] font-mont'>
                    Synergyy helps you verify, hire, pay and manage Africa’s top high-performing talent. 
                    Accelerate growth, save 80% on payroll and experience the future of smart HR.
                </p>
                <button 
                    type='submit' 
                    onClick={() => navigate("/access")}
                    className='w-[210px] animate__animated animate__shakeX border flex items-center gap-[3px] border-primaryColor p-3  bg-secondaryColor text-primaryColor rounded-lg font-mont font-semibold text-base'
                >
                   Find your next hire <GoArrowUpRight />
                </button>
            </div>
            <div className='bg-[#FCFCFC] w-[350px] h-[265px] mt-[50px] lg:mt-[0px]  lg:w-[720px] lg:h-[547px] relative'>
                <img src={Dots} alt='' className='absolute w-[66px] h-[62px] left-[57px] top-[20px] lg:w-[136px] lg:h-[128px] lg:left-[122px] lg:top-[42px]' />
                <img src={Top} alt='' className='absolute w-[43px] h-[45px] left-[262px] top-[22px]  lg:left-[544px] lg:top-[42px] lg:w-[90px] lg:h-[93px]' />
                <div className='absolute left-[98px] top-[56px] lg:left-[207px] lg:top-[117px] flex flex-col gap-4'>
                    <img src={Mid} alt='' className="w-[156px] h-[160px] lg:w-[321px] lg:h-[331px]" />
                    <div className='flex justify-center gap-[4px] lg:gap-[22px] items-center'>
                        <p className='text-primaryColor font-mont text-[7px] lg:text-sm font-bold'>Software Developer</p>
                        <img src={Check} alt='' className='w-[12px] h-[12px] lg:w-[34px] lg:h-[34px]' />
                    </div>
                </div>
                <img src={Bottom} alt='' className='absolute w-[43px] h-[45px] top-[210px] left-[43px] lg:w-[90px] lg:h-[93px] lg:top-[429px] lg:left-[99px]' />
                <img src={DotsB} alt='' className='absolute w-[48px] h-[45px] top-[199px] left-[249px] lg:w-[98px] lg:h-[93px] lg:top-[411px] lg:left-[517px]' />
            </div>
        </div> 
        
                                        {/* Second Section data-aos="fade-up" data-aos-duration="3000" */}
        <div className='bg-[#F1F1F1] w-full py-[50px] px-[24px] hidden  mt-[67px] h-[716px] lg:h-[720px] flex flex-col gap-[94px] lg:py-[80px] lg:px-[120px]'>
            <div className='flex flex-col w-[312px] gap-[20px] mx-auto items-center justify-center  lg:w-[575px] lg:gap-[25px]'>
                <p 
                    style={{ 
                        background: "linear-gradient(91deg, #F97D01 46.45%, #FB5046 99.37%)",
                        WebkitTextFillColor: "transparent",
                        WebkitBackgroundClip: "text",
                        backgroundClip: "text",
                        whiteSpace:'nowrap'
                    }}
                    className='text-[16px] lg:text-xl font-bold font-mont'
                >
                    HERE’S THE PROBLEM...
                </p>
                <p className='font-mont text-[29px] lg:text-[36px] text-center lg:text-left text-primaryColor font-bold'>Traditional Recruitment Sucks</p>
            </div>
            <div style={{ width: "100%" }}>
                <Slider {...settings}>
                    <div className='flex mb-[60px]'>
                        <div className='flex flex-col items-center mx-auto lg:flex-row lg:justify-between lg:items-start lg:mx-[52px]'>
                            <div className='flex lg:hidden'>
                                <img src={Dollar} alt='Dollar' className='w-[197px] h-[177px]'/>
                            </div>
                            <div className='flex w-[335px] lg:w-[582px] mt-[32px] flex-col ml-[0px] mr-[0px] lg:ml-[52px] mr-[44px]'>
                                {/* <p className='text-[19px] lg:text-lg font-semibold text-center lg:text-left font-mont'>#1</p> */}
                                <p className='mt-[8px] lg:mt-[18px] text-[24px] lg:text-[50px] text-center lg:text-left font-semibold'>Expensive Process ❌</p>
                                <p className='mt-[11px] lg:mt-[24px] text-sm lg:text-lg text-center lg:text-left font-medium text-BLACK-_100'>
                                    Conventional hiring practices can be costly. Posting job openings, reviewing resumes, 
                                    and holding interviews can be expensive and time-consuming processes.
                                </p>
                            </div>
                            <div className='hidden lg:flex'>
                                <img src={Dollar} alt='Dollar' className='w-[292px] h-[263px]'/>
                            </div>
                        </div>
                    </div>
                    <div className='flex mb-[60px]'>
                        <div className='flex flex-col items-center mx-auto lg:flex-row lg:justify-between lg:items-start lg:mx-[52px]'>
                            <div className='flex lg:hidden'>
                                <img src={Time} alt='Time' className='w-[194px] h-[174px]'/>
                            </div>
                            <div className='flex w-[335px] lg:w-[582px] mt-[32px] flex-col ml-[0px] mr-[0px] lg:ml-[52px] lg:mr-[11px]'>
                                {/* <p className='text-[19px] lg:text-lg font-semibold text-center lg:text-left font-mont'>#2</p> */}
                                <p className='mt-[8px] lg:mt-[18px] text-[24px] lg:text-[50px] text-center lg:text-left font-semibold'>Time Consuming ❌</p>
                                <p className='mt-[11px] lg:mt-[24px] text-sm lg:text-lg text-center lg:text-left font-medium text-BLACK-_100'>
                                    Traditional recruitment is labor-intensive because it is a manual process. 
                                    HR’s and hiring managers have to invest a lot of time and resources in tasks 
                                    like screening resumes, holding interviews, and communicating with candidates.
                                </p>
                            </div>
                            <div className='hidden lg:flex'>
                                <img src={Time} alt='Time' className='w-[362px] h-[325px]'/>
                            </div>
                        </div>
                    </div>
                    <div className='flex mb-[60px]'>
                        <div className='flex flex-col items-center mx-auto lg:flex-row lg:justify-between lg:items-start lg:mx-[52px]'>
                            <div className='flex lg:hidden'>
                                <img src={Data} alt='Data' className='w-[189px] h-[170px]'/>
                            </div>
                            <div className='flex w-[335px] lg:w-[582px] mt-[32px] flex-col ml-[0px] mr-[0px] lg:ml-[52px] lg:mr-[12px]'>
                                {/* <p className='text-[19px] lg:text-lg font-semibold text-center lg:text-left font-mont'>#3</p> */}
                                <p className='mt-[8px] lg:mt-[18px] text-[24px] lg:text-[50px] text-center lg:text-left font-semibold'>Data Deficient ❌</p>
                                <p className='mt-[11px] lg:mt-[24px] text-sm lg:text-lg text-center lg:text-left font-medium text-BLACK-_100'>
                                    Conventional hiring practices can be costly. Posting job openings, reviewing resumes, 
                                    and holding interviews can be expensive and time-consuming processes. 
                                </p>
                            </div>
                            <div className='hidden lg:flex'>
                                <img src={Data} alt='Data' className='w-[362px] h-[325px]'/>
                            </div>
                        </div>
                    </div>
                    <div className='flex mb-[60px]'>
                        <div className='flex flex-col items-center mx-auto lg:flex-row lg:justify-between lg:items-start lg:mx-[52px]'>
                            <div className='flex lg:hidden'>
                                <img src={Outreach} alt='Outreach' className='w-[190px] h-[170px]'/>
                            </div>
                            <div className='flex w-[335px] lg:w-[582px] mt-[32px] flex-col ml-[0px] mr-[0px] lg:ml-[52px] lg:mr-[12px]'>
                                {/* <p className='text-[19px] lg:text-lg font-semibold text-center lg:text-left font-mont'>#4</p> */}
                                <p className='mt-[8px] lg:mt-[18px] text-[24px] lg:text-[50px] text-center lg:text-left font-semibold'>Limited Outreach ❌</p>
                                <p className='mt-[11px] lg:mt-[24px] text-sm lg:text-lg text-center lg:text-left font-medium text-BLACK-_100'>
                                    Inadequate outreach poses a serious challenge to the hiring process, 
                                    making it challenging to get job openings in front of the right candidates. 
                                    This makes it more difficult to draw in competent candidates and find the right fit.
                                </p>
                            </div>
                            <div className='hidden lg:flex'>
                                <img src={Outreach} alt='Outreach' className='w-[362px] h-[325px]'/>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>

                                        {/* Third Section data-aos="fade-up" data-aos-duration="3000"*/}
        <div className='w-full lg:mt-14 flex bg-[#00141B] flex-col lg:flex-row items-center justify-between py-[58px] px-[24px]  lg:h-[645px] lg:pt-[96px] lg:pb-[52px] lg:px-[80px]' >
            <div className='w-[555px] hidden lg:block'>
                <img src={Discover} alt="" />
            </div>
            <div className='w-[342px] lg:w-[629px] flex flex-col gap-[24px]'>
                <p className='text-[#fff] text-[25px] text-center lg:text-left  lg:text-[36px] font-semibold font-mont'>Discover World-Class Talent And Save Up To 80% On Payroll</p>
                <p className='text-base font-mont font-medium text-center lg:text-left text-[#fff]'>
                    Our carefully vetted talent, handpicked and screened for the skills you need, 
                    delivers top-notch results without top-dollar costs. Save up to 80% and unlock a global workforce 
                    like never before.
                </p>
                <div className='flex flex-col lg:flex-row items-center mt-[40px] lg:mt-[0px] gap-4'>
                    <button
                        onClick={() => {navigate("/access"); window.scroll(0, 0)}} 
                        className='bg-[#fff] text-base font-semibold w-[180px] h-[46px] lg:w-[169px] lg:h-[56px] text-[#000] rounded-lg gap-[10px] p-2 flex justify-center items-center'
                    >
                        Start Hiring <GoArrowUpRight className="text-[#000]" />
                    </button>
                    <button
                        onClick={() => {navigate("/pro"); window.scroll(0, 0)}}  
                        className='w-[180px] h-[46px] lg:w-[183px] lg:h-[56px] flex items-center justify-center gap-[10px] text-base font-semibold p-2 rounded-lg border border-[#fff] border-solid text-[#fff]'
                    >
                        Ask a Pro <FaPlay className="text-[#fff]" />
                    </button>
                </div>
            </div>
            <div className='w-[312px] mt-[56px] lg:mt-[0px] flex lg:hidden'>
                <img src={Discover} alt="" />
            </div>
        </div>

        <div className='flex flex-col lg:gap-[96px]' id='solutions'>
            <p className='font-mont text-[#000] font-bold mt-[61px] text-[25px] lg:text-[36px] w-full lg:w-[719px] mx-auto text-center'>Powering the Future of Work for Founders who get it.</p>
            <div class="lg:p-20 px-[18px] py-[50px] flex lg:flex-row flex-col lg:gap-20 gap-10 items-center">
                <div class="lg:w-[50%] lg:hidden flex">
                    <img src={GirlDev} alt="synergyy frame" class="animate__animated animate__fadeInRight"/>
                </div>
                <div class="flex flex-col lg:gap-6 gap-3 lg:w-[50%]">
                    <h2 class="lg:text-[36px] font-mont text-[24px] lg:text-start text-center font-semibold text-[#00141B]">Unlock your Borderless Super Team with Dedicated Talent Management</h2>
                    <p class="lg:text-justify font-mont text-center text-base text-[#172041] leading-[150%]">Navigating the complexities of global talent acquisition just got easier. Our Employer of Record service ensures that you have dedicated support every step of the way, from hiring to onboarding and ongoing management.</p>
                </div>
                <div class="lg:w-[50%] hidden lg:flex">
                    <img src={GirlDev} alt="synergyy frame" class="animate__animated animate__fadeInRight"/>
                </div>
            </div>
            <div class="lg:p-20 px-[18px] py-[50px] flex lg:flex-row flex-col lg:gap-20 gap-10 items-center">
                <div class="lg:w-[50%]">
                    <img src={Stock} alt="synergyy frame" class="animate__animated animate__fadeInLeft"/>
                </div>
                <div class="flex flex-col lg:gap-6 gap-3 lg:w-[50%]">
                    <h2 class="lg:text-[36px] font-mont text-[24px] lg:text-start text-center font-semibold text-[#00141B]">Supercharge Your Growth with a Risk-Free 360 Solution that works</h2>
                    <p class="lg:text-justify font-mont text-center text-base text-[#172041] leading-[150%]">Unlock unprecedented growth and take your business to new heights with Synergyy's comprehensive 360 solution. We've meticulously crafted a risk-free approach that covers every angle of talent management, empowering your business to thrive.</p>
                </div>
            </div>
            <div class="lg:p-20 px-[18px] py-[50px] flex lg:flex-row flex-col lg:gap-20 gap-10 items-center">
                <div class="lg:w-[50%] lg:hidden flex">
                    <img src={Pay} alt="synergyy frame" class="animate__animated animate__fadeInRight"/>
                </div>
                <div class="flex flex-col lg:gap-6 gap-3 lg:w-[50%]">
                    <h2 class="lg:text-[36px] font-mont text-[24px] lg:text-start text-center font-semibold text-[#00141B]">Unlock your Borderless Super Team with Dedicated Talent Management</h2>
                    <p class="lg:text-justify font-mont text-center text-base text-[#172041] leading-[150%]">Navigating the complexities of global talent acquisition just got easier. Our Employer of Record service ensures that you have dedicated support every step of the way, from hiring to onboarding and ongoing management.</p>
                </div>
                <div class="lg:w-[50%] hidden lg:flex">
                    <img src={Pay} alt="synergyy frame" class="animate__animated animate__fadeInRight"/>
                </div>
            </div>

        </div>



                                        {/* Fourth Section data-aos="fade-up" data-aos-duration="3000"*/}
        <div className='w-full flex flex-col py-[0px] px-[0px] lg:pt-[35px] lg:pb-[0px] lg:pl-[80px] lg:pr-[0px]'> 
            <div className='flex flex-col w-[342px] mx-auto lg:mx-[0px] gap-[24px] lg:w-[960px] lg:gap-[25px]'>
                <p className='text-[#F97D01] text-center lg:text-left text-[19px] lg:text-2xl font-mont font-bold'>HOW IT WORKS</p>
                <p className='text-[25px] w-[274px] lg:w-[960px] mx-auto lg:mx-[0px] text-center leading-[140%] lg:leading-[102%]  lg:text-left lg:text-[64px] font-bold font-mont '>A Talent Experience That Is Faster, Better & Super Easy</p>
                <p className='font-mont text-base w-[314px] mx-auto text-center lg:mx-[0px] lg:text-left lg:text-[21px] font-semibold lg:w-[776px] text-[#172041]'>
                    With Synergyy, experience fast & seamless talent acquisition unlike anything you’ve experienced 
                    before. Our process is specially designed to ensure you find the best fit when and where you need it,
                    effortless.
                </p>
            </div>

                                {/* Mobile */}
            <div className='mt-[56px] w-full flex lg:hidden flex-col gap-[60px]'>
                <div className='flex flex-col w-[319px] mx-auto gap-[38px]'>
                    <img src={Engineer} alt='Engineer'  className='w-[236px] h-[168px] mx-auto'/>
                    <div className='flex flex-col gap-[17px] w-[319px] h-[209px]'>
                        <p className='p-1 rounded-full w-[23px] h-[23px] font-bold border flex items-center justify-center border-[#000] text-BLACK-_100 bg-[#FBA599] '>1</p>
                        <p className='text-primaryColor font-mont font-bold text-[28px] lg:text-[32px]'>Submit a talent request</p>
                        <p className='text-[#172041] text-[15px] font-semibold font-mont'>
                            Share your staffing needs by submitting a talent request. 
                            Provide role details, required skills, and preferences to 
                            connect with qualified candidates.
                        </p>
                    </div>
                </div>
                <div className='flex flex-col w-[319px] mx-auto gap-[38px] bg-[#F1F1F1] py-[48px] w-full'>
                    <img src={Candidates} alt='Candidates'  className='w-[320px] h-[213px] mx-auto'/>
                    <div className='flex flex-col gap-[14px] mx-auto w-[266px] '>
                        <p className='p-1 rounded-full w-[19px] h-[19px] font-bold border flex items-center justify-center border-[#000] text-BLACK-_100 bg-[#FBA599] '>2</p>
                        <p className='text-primaryColor font-mont font-bold text-[24px]'>Get intelligent matches vetted for technical and soft skills.</p>
                        <p className='text-[#172041] text-[13px] font-medium font-mont'>
                            Receive curated matches with expertise in both technical and soft skills. 
                            Our intelligent matching process ensures you find the right talent for your needs 
                            effortlessly.
                        </p>
                    </div>
                </div>
                <div className='flex flex-col w-[319px] mx-auto gap-[0px]'>
                    <img src={KwameB} alt='Hire Candidate'  className='w-[308px]  mx-auto'/>
                    <div className='flex flex-col gap-4 w-[266px]  '>
                        <p className='p-1 rounded-full w-[19px] h-[19px] font-bold border flex items-center justify-center border-[#000] text-BLACK-_100 bg-[#FBA599] '>3</p>
                        <p className='text-primaryColor font-mont font-bold text-[24px]'>Land your star candidate.</p>
                        <p className='text-[#172041] text-[13px] font-medium font-mont'>
                            Seal the deal with your ideal candidate. 
                            Our tailored matches bring you one step closer to securing the star 
                            talent your team deserves.
                        </p>
                    </div>
                </div> 
            </div>
                                {/* lg/Laptop */}
            <div className='hidden lg:flex'>
                <div className='flex justify-between gap-[104px] mt-[80px]'>
                    <div className='flex flex-col items-center'>
                        <img src={Engineer} alt='Engineer'  className='w-[328px] ml-[164px] h-[233px]'/>
                        <div className='flex flex-col gap-6 mt-[93px] ml-[97px]  w-[433px] h-[246px]'>
                            <p className='p-1 rounded-full w-[32px] h-[32px] font-bold border flex items-center justify-center border-[#000] text-BLACK-_100 bg-[#FBA599] '>2</p>
                            <p className='text-primaryColor font-mont font-bold leading-[38px] text-[32px]'>Get intelligent matches vetted for technical and soft skills.</p>
                            <p className='text-[#172041] text-sm font-semibold font-mont'>
                                Receive curated matches with expertise in both technical and soft skills. 
                                Our intelligent matching process ensures you find the right talent for your needs 
                                effortlessly.
                            </p>
                        </div>
                        <img src={Kwame} alt='Engineer'  className='w-[328px] mt-[45px] ml-[66px] mb-10 h-[233px]'/>
                    </div>
                    <div className='relative'>
                        <div
                            className='line'
                            style={{
                                backgroundColor: scrollPosition > 200 ? '#f6f6f6' : '#000',
                            }}
                        ></div>
                    </div>
                    <div className='flex flex-col'>
                        <div className='flex flex-col gap-6 w-[433px] h-[170px] '>
                            <p className='p-1 rounded-full w-[32px] h-[32px] font-bold border flex items-center justify-center border-[#000] text-BLACK-_100 bg-[#FBA599] '>1</p>
                            <p className='text-primaryColor font-mont font-bold text-[32px]'>Submit a talent request</p>
                            <p className='text-[#172041] text-sm font-semibold font-mont'>
                                Share your staffing needs by submitting a talent request. 
                                Provide role details, required skills, and preferences to 
                                connect with qualified candidates.
                            </p>
                        </div>
                        <img src={Candidates} alt='Candidates'  className='w-[400px] mt-[147px] h-[227.75px] ml-[100px]'/>
                        <div className='flex flex-col gap-4 w-[433px] h-[170px]  mt-[140px]'>
                            <p className='p-1 rounded-full w-[32px] h-[32px] font-bold border flex items-center justify-center border-[#000] text-BLACK-_100 bg-[#FBA599] '>3</p>
                            <p className='text-primaryColor font-mont font-bold text-[32px]'>Land your star candidate.</p>
                            <p className='text-[#172041] text-sm font-semibold font-mont'>
                                Seal the deal with your ideal candidate. 
                                Our tailored matches bring you one step closer to securing the star 
                                talent your team deserves.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className='flex flex-col items-center gap-[80px] mt-[80px]'>
            <p className='font-bold lg:text-[36px] text-[32px] text-center font-mont text-[#00141B]'>Hire with Confidence in 34+ Countries</p>
            <div style={{ width: "100%"}}>
                <Slider {...flagSettings} style={{ marginRight: "0px" }}>
                    <div style={{ marginRight: "0px" }}>
                        <img src={Rwanda} alt="Rwanda-flag" className='w-[154px]' loading='lazy' />   
                    </div>
                    <div style={{ marginRight: "0px" }}>
                        <img src={SouthAfrica} alt="SouthAfrica-flag" className='w-[154px]' style={{ marginRight: "10px" }}  loading='lazy'/>
                    </div>
                    <div style={{ marginRight: "0px" }}>
                        <img src={Togo} alt="Togo-flag" className='w-[154px]' style={{ marginRight: "10px" }} loading='lazy'/>
                    </div>
                    <div style={{ marginRight: "0px" }}>
                        <img src={Tunisia} alt="Tunisia-flag" className='w-[154px]' style={{ marginRight: "10px" }} loading='lazy' />
                    </div>
                    <div style={{ marginRight: "0px" }}>
                        <img src={Car} alt="Car-flag" className='w-[154px]' loading='lazy'/>
                    </div>
                    <div style={{ marginRight: "0px" }}>
                        <img src={SouthAfrica} alt="SouthAfrica-flag" className='w-[154px]' loading='lazy' />
                    </div>
                    <div style={{ marginRight: "0px" }}>
                        <img src={Chad} alt="Chad-flag" className='w-[154px]'  loading='lazy'/>
                    </div>
                    <div style={{ marginRight: "0px" }}>
                    <img src={Nigeria} alt="Nigeria-flag"  className='w-[154px]' loading='lazy'/>
                    </div>
                   
                   
                    
                    
                </Slider>
            </div>
        </div>
                                        {/* Fifth Section*/}
        <div 
            style={{
                backgroundImage: `url(${window.innerWidth <= 1024 ? GirlMobile  : Girl})`, backgroundSize: "100%", backgroundRepeat: "no-repeat"
            }}
            className='lg:w-11/12 h-[537px] lg:h-[635px] pt-[54px] lg:pt-[0px] lg:mx-auto lg:rounded-2xl mt-[80px] lg:relative'
           
        >
            <div className='flex flex-col lg:absolute lg:left-[55%] lg:top-16'>
                <div className='flex items-center justify-center w-[231px] lg:w-[456px] lg:h-[72px] mx-auto lg:mx-[0px] gap-[24px] '>
                    <img src={Two} alt='2K' className='w-[88px] h-[35px]  lg:w-[180px] lg:h-[64px] mx-auto lg:mx-[0px]' />
                    <p className={`${window.innerWidth <= 1024 ? "text-[#fff]" : "text-[#FF0]"} font-mont lg:w-[252px] font-semibold text-xs lg:text-lg`}>HOURS SAVED ON RECRUITMENT</p>
                </div>
                <p className='font-bold mt-[20px] font-mont text-WHITE-_100 w-[340px] mx-auto lg:mx-[0px] text-center lg:text-left text-[26px] lg:text-[44px] lg:w-[557px]'>Get Trusted Talent In Days, Not Months.</p>
                <button
                    className={`${window.innerWidth <= 1024 ? "bg-secondaryColor text-primaryColor border border-primaryColor" : "bg-[#000] text-WHITE-_100 "} mt-[40px] w-[136px] h-[56px]  mx-auto lg:mx-[0px] font-mont text-base font-semibold text-center rounded-lg`}
                >
                    Start Hiring 
                </button>
            </div>

        </div>
                                        {/* Sixth Section data-aos="fade-up" data-aos-duration="3000"*/}
        <div className='w-full py-[58px] px-[24px] lg:mt-[40px] hidden  lg:px-[80px] lg:py-[40px]' >
            <div className='flex justify-between'>
                <div className='flex flex-col gap-2'>
                    <p 
                        className='text-[16px] lg:text-[18px] font-mont font-semibold'
                        style={{ 
                            background: "linear-gradient(91deg, #F97D01 46.45%, #FB5046 99.37%)",
                            WebkitTextFillColor: "transparent",
                            WebkitBackgroundClip: "text",
                            backgroundClip: "text",
                            whiteSpace:'nowrap'
                        }}
                    >
                        Testimonials
                    </p>
                    <p className='text-[32px] lg:text-[54px] font-semibold font-mont text-BLACK-_100'>Why cool startups bank on Synergyy</p>
                </div>
                {/* <div className='flex items-center gap-1.5'>
                    <div onClick={() => {prevSlide(); console.log(currentIndex, "apple")}} className='w-[36px] h-[36px] rounded-full flex items-center justify-center '>
                        <MdOutlineArrowBackIosNew />
                    </div>
                    <div onClick={() => {nextSlide();  console.log(currentIndex, "apple")}} className='w-[36px] h-[36px] bg-BLACK-_100 rounded-full flex items-center justify-center border border-BLACK-_100'>
                        <MdOutlineArrowForwardIos className="text-WHITE-_100" />
                    </div>
                </div> */}
            </div>
            <div style={{ width: "100%" }}>
                <Slider {...secondSettings}  className= "mt-[56px] lg:mt-[56px]">
                    {items.map((item, index) => (
                        <div
                            className='slick-slide '
                            key={index}
                            style={{ margin: '0 8px' }}
                        >
                            <div
                                
                                style={{ background: '#FFFF', color: '#000' }}
                                className={`w-[333px] h-[256px] lg:h-[237px] lg:w-[626px] shadow-xl p-[23px] lg:p-[29px] gap-[14px] rounded-lg border flex flex-col`}
                            >
                                <p className='text-[19px] lg:text-[24px] font-mont font-semibold'>{item?.title}</p>
                                <p className='text-xs lg:text-[15px] opacity-70 font-mont'>{item?.subtitle}</p>
                                <div className='flex items-center justify-end gap-[12px]'>
                                    <img src={item?.img} alt='Client' />
                                    <div className='flex flex-col '>
                                        <p className='text-[#000] text-xs lg:text-base font-mont font-semibold'>{item?.fullName}</p>
                                        <p className='text-[#42B8BD] text-xs lg:text-base font-semibold font-mont'>{item?.company}</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    ))}
                </Slider>

            </div>
        </div>
                                        {/* Seventh Section   data-aos="fade-up" data-aos-duration="3000"*/}
        <div
            style={{
                backgroundImage: `url(${window.innerWidth <= 1024 ? FaveMobile : Fave })`, backgroundSize: "cover", backgroundRepeat: "no-repeat"
            }}
            className='w-full h-[597px] lg:h-screen lg:mt-[80px] pt-[95px]'
          
        >
            <div className='w-[320px] lg:w-[647px] mx-auto flex flex-col gap-[48px] items-center'>
                <p className={`${window.innerWidth <= 1024 ? "text-WHITE-_100 text-[30px]" : "text-[#45EEF6] text-[60px] w-full " }  text-center font-mont  font-bold`}>Let’s Find Your Next Favourite Employee</p>
                <button
                    onClick={() => {navigate("/access"); window.scroll(0, 0)}} 
                    className={`${window.innerWidth <= 1024 ? "w-[129px] h-[42px] bg-secondaryColor text-sm" : "w-[149px] bg-[#FBA599] h-[56px] border border-[#fff] border-solid text-base"} text-BLACK-_100 rounded-lg font-mont font-bold`}
                >
                    Start Hiring
                </button>
            </div>
        </div>

    </div>
  )
}

export default LandingHome
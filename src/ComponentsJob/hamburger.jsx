import React from "react";
import { useNavigate } from "react-router-dom";

export default function Hamburger({setHamburger, hamburger}){
const navigate = useNavigate()


    return (
            <div className="fixed top-0 w-[100%] left-0 h-[100vh] animate__animated  animate__bounceInDown animate__slow" style={{zIndex:9999}} onClick={(e) => {
                e.stopPropagation()
                setHamburger(false)
            }}>
                <div  className="bg-[#00141B] w-[80%] h-full absolute pl-[29px] pr-[13px] py-[32px] right-0 top-0" onClick={(e) => {
                    e.stopPropagation()
                    setHamburger(true)
                }}>
                <div className="flex justify-between items-center">
                    <h2 className="font-bold text-[18px] text-white">Menu</h2>
                    <img src="/images/close.svg" alt="close" className="cursor-pointer" onClick={(e) => {
                        e.stopPropagation()
                        setHamburger(false)
                    }} />
                </div>
                <ul className="mt-[32px] flex flex-col gap-y-[24px] pb-[16px]" style={{borderBottom:'1px solid #024355'}}>
                    <li className="font-medium text-[16px] text-white" onClick={(e) => {
                        e.stopPropagation()
                        setHamburger(false)
                        navigate('/about')
                    }}>About Us</li>
                    <li className="font-medium text-[16px] text-white" onClick={(e) => {
                        e.stopPropagation()
                        setHamburger(false)
                        navigate('/#connection')
                    }}>Success Stories</li>
                    <li className="font-medium text-[16px] text-white" onClick={(e) => {
                        e.stopPropagation()
                        setHamburger(false)
                        navigate('/partnership')
                    }}>Partnership</li>
                    <li className="font-medium text-[16px] text-white" onClick={(e) => {
                        e.stopPropagation()
                        setHamburger(false)
                        navigate('/jobs')
                    }}>Jobs</li>
                    {/* <li className="font-medium text-[16px] text-white" onClick={() => navigate('/')}>Job Board</li> */}
                </ul>
                <div className="mt-[16px] flex flex-col gap-4">
                    {/* <button className="p-[9.6px] w-[176px] rounded-[4.8px] bg-[#42B8BD] border border-[#FFF] text-[14px] font-semibold" onClick={(e) => {
                        e.stopPropagation()
                        setHamburger(false)
                        navigate('/design-quest')
                    }}>
                        Enter Design Quest
                    </button> */}
                    
                    {/* <button className="p-[9.6px] w-[176px] rounded-[4.8px] bg-white text-[14px] font-semibold" onClick={(e) => {
                        e.stopPropagation()
                        setHamburger(false)
                        navigate('/#download')
                    }}>
                        Get Started - <span className="font-medium">It's Free</span>
                    </button> */}
                    
                    <button className="p-[9.6px] w-[176px] rounded-[4.8px] bg-[#42B8BD] border border-[#FFF] text-[14px] font-semibold" onClick={(e) => {
                        e.stopPropagation()
                        setHamburger(false)
                        window.location.replace("/register");
                    }}>
                        Join Synergyy
                    </button>
                </div>
                </div>
            </div>
    )
}
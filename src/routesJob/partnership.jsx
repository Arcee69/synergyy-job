import React from "react";
import Navlight from "../ComponentsJob/nav/navlight";
import Buttons from "../ComponentsJob/button";
import PartnershipForm from "../ComponentsJob/forms/partnershipForm";
import { useNavigate, useLocation } from "react-router-dom";
import Hamburger from "../ComponentsJob/hamburger";



export default function Partnership({hamburger, setHamburger}){
    const navigate = useNavigate()
    const location = useLocation()

    const getStarted = () => {
        // window.location.replace("https://new-syn.vercel.app/register");;
        if (location.pathname ==='/'){
            const element = document.querySelector('#download')
            console.log(element)
            element.scrollIntoView({ behavior: 'smooth' });
        } else {
            navigate('/#download')
        }
    }

    return (
        <>
            {hamburger && <Hamburger setHamburger={setHamburger} />}
            <Navlight buttons={true} setHamburger={setHamburger} />
            <div className="mid:grid grid-cols-7">
                <div className="mid:col-span-4">
            <div className="pb-[40px] mid:pb-[84px] pt-[30px] px-[32px] lg:pl-[70px] lg:pr-[133px]">
              <div className="mx-auto">
              <h1 className="font-bold text-[24px] mid:text-[32px] opacity-90">Partner with us</h1>
                <p className="text-[12px] mid:text-[16px]" style={{lineHeight:'170%'}}>We specialize in curating the perfect initiative for your organization. With our vibrant community and deep understanding of Gen Z, we tailor impactful solutions specific to your unique needs. Get in touch.</p>
              </div>
                <PartnershipForm />
            </div>
            </div>
            <div className="bg-[#FFE9E6] hidden mid:block mid:col-span-3 relative">
                {/* <div className="lg:flex hidden justify-end gap-x-[14px] py-[24px] px-[40px]">
                    <Buttons text='Job board' bgColor='inherit' color='white' border='1px solid white'   padding={'12px 17px'}/>
                    <Buttons text='get started' bgColor='#00141B' color='white' functions={getStarted} padding={'12px 17px'} hoverColor='#000'/>
                </div> */}
                <img src="/images/handshake.svg" alt="handshake" className="absolute bottom-[1%] handshake-synn"/>

            </div>
        </div>
        </>
    )
}
import React from "react"
import Navlight from "../ComponentsJob/nav/navlight"
import { getAccessValidationSchema } from "../libs/validationSchemas"
import GetAccessForm from "../ComponentsJob/forms/getAccessForm"
import Nav from "../ComponentsJob/nav/nav"
import Hamburger from "../ComponentsJob/hamburger"

export default function GetAccess({hamburger, setHamburger}){
    return (
        <>
            {hamburger && <Hamburger setHamburger={setHamburger} />}
            <Navlight buttons={true} setHamburger={setHamburger} />
            <div className="mid:grid grid-cols-7">
                <div className="mid:col-span-4">
                    <div className="pb-[40px] mid:pb-[84px] pt-[36px] mid:pt-[56px] px-[32px] lg:px-[103px]">
                        <div className="mid:w-[85%] mx-auto mid:text-center">
                            <h1 className="font-bold text-[24px] mid:text-[31px] opacity-90">Get Access</h1>
                            <p className="text-[12px] mid:text-[16px]" style={{lineHeight:'170%'}}>Join our Talent Bank and unlock global opportunities!</p>
                        </div>
                        <GetAccessForm />
                    </div>
                </div>
                <div className="px-[65px] bg-[#F6F6F6] hidden mid:grid place-items-center mid:col-span-3">
                <div>
                    <div>
                    <h2 className="font-semibold text-[32px]" style={{color:'rgba(0, 20, 27, 0.5)'}}>Connect with Top Talent, <br/> <span style={{color:'#00141B'}}>Seamlessly</span> </h2>
                    <div className="flex flex-col gap-y-[26px] mt-[48px] w-[75%]">
                    <div className="relative connection">
                        <img src="/images/tick-circle-ash.svg" alt="bullet" className="absolute left-[-30px] top-[5px]"/>
                        <h3 className="text-[20.48px] font-medium">Expanded Talent Pool</h3>
                        <p className="text-[12px] font-medium mt-[10.24px] text-[#00141B] opacity-50">Access a diverse global network of professionals for a wider range of skills and expertise.</p>
                    </div>
                    <div className="relative connection">
                        <img src="/images/tick-circle-ash.svg" alt="bullet" className="absolute left-[-30px] top-[5px]"/>
                        <h3 className="text-[20.48px] font-medium">Streamlined Hiring Process</h3>
                        <p className="text-[12px] font-medium mt-[10.24px] text-[#00141B] opacity-50"> User-friendly interface and advanced search capabilities save time and resources.</p>
                    </div>
                    <div className="relative connection">
                        <img src="/images/tick-circle-ash.svg" alt="bullet" className="absolute left-[-30px] top-[5px]"/>
                        <h3 className="text-[20.48px] font-medium">Quality Assurance</h3>
                        <p className="text-[12px] font-medium mt-[10.24px] text-[#00141B] opacity-50">Pre-vetted candidates ensure high-caliber talent with the necessary skills and experience.</p>
                    </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
            </>
    )
}
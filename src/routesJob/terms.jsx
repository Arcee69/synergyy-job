import React from 'react'
import Navigation from '../ComponentsJob/nav/navigation'
import Footers from '../ComponentsJob/footer/footers'
import Foots from '../ComponentsJob/footer/foots'
import Hamburger from '../ComponentsJob/hamburger'

export default function Terms({hamburger, setHamburger}) {
    const today = new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    const handleRedirect = () => {
        window.location.href = "https://www.synergyy.io";
    };
    
    return (
        <>
            <div className='bg-backgroundDark lg:pt-6 pt-3 lg:px-[81px] px-6'>
                <Navigation setHamburger={setHamburger}/> 
                {hamburger && <Hamburger hamburger={hamburger} setHamburger={setHamburger} />} 
                <div className='lg:py-6 py-[18px] lg:pl-6 pl-[18px] lg:mt-6 mt-[39px] bg-background'>
                    <h1 className='mb-3 lg:text-[40px] text-[30px] font-medium capitalize text-gradient'>Terms & conditions</h1>
                    <p className='font-medium text-green-600 lg:text-[16px] text-[12px]'>Last updated {today}</p>
                </div>
                <div className='mt-12 pb-[72px] flex flex-col gap-10'>
                    <div className='flex flex-col gap-4'>
                        <h1 className='font-montaga text-[32px] text-light ml-[14px]'>1. Introduction</h1>
                        <p className='leading-[140%] text-light text-justify'>
                            Welcome to <small className='font-semibold text-[16px]'>Synergyy</small>, a mobile application and website, hereinafter referred to as <small className='font-semibold text-[16px]'>"Synergyy"</small> or "Application" or "Service" that offers its services, described later in this document, through the Website <span className='cursor-pointer text-gradient' onClick={handleRedirect}>www.synergyy.io</span>. You and all persons using <small className='font-semibold text-[16px]'>Synergyy</small>, whether or not registered, will be referred to herein as User. The User and Synergyy shall together be referred to herein as “The Parties.” 
                        </p>
                        <p className='leading-[140%] text-light text-justify'>
                            The User using and enjoying <small className='font-semibold text-[16px]'>Synergyy</small> must know and accept the following Terms and Conditions of Use and Privacy Policies (hereinafter referred to as the "TERMS"). SYNERGYY TECHNOLOGY LTD is the owner and promoter of <small className='font-semibold text-[16px]'>Synergyy</small> and is committed to protecting the information of the User according to the laws, legal provisions and other rules that regulate the protection of data, the privacy or handling information and other norms that are in accordance with the public order.
                        </p>
                        <p className='leading-[140%] text-light text-justify'>
                            Please read these terms of service carefully, as they contain an agreement to mediate and other important information regarding your legal rights, remedies, and obligations. The agreement to mediate requires (with limited exception) that you submit claims you have against us to binding and final mediation, and further (1) you will only be permitted to pursue claims against NG SYNERGYY TECHNOLOGY LTD on an individual basis, not as a plaintiff or class member in any class or representative action or proceeding, (2) you will only be permitted to seek relief (including monetary, injunctive, and declaratory relief) on an individual basis, and (3) you may not be able to have any claims you have against us resolved by a jury or in a court of law.
                        </p>
                        <p className='leading-[140%] text-light text-justify'>
                            In addition, when using certain services, you will be subject to any additional terms applicable to such services that may be posted on the Service from time to time, including, without limitation. All such terms are hereby incorporated by reference into these Terms of Service.
                        </p>
                        <p className='leading-[140%] text-light text-justify'>
                            The Terms and Conditions of Service are the following:
                        </p>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <h1 className='font-montaga text-[32px] text-light ml-[14px]'>2. Acceptance of Terms</h1>
                        <p className='leading-[140%] text-light text-justify'>At the time a user logs in, connects or use the Application and Website, the User understands and accepts the Terms and Conditions including the Privacy Policy of <small className='font-semibold text-[16px]'>Synergyy</small>. The User accepts all applicable laws and regulations regarding the access and connectivity to <small className='font-semibold text-[16px]'>Synergyy</small> Application. If the User does not accept any of the Terms and Conditions, the User should not connector access <small className='font-semibold text-[16px]'>Synergyy</small> Application and Website in any way. The User has the responsibility to comply with all laws, regulations, or any other obligations related to the service. <small className='font-semibold text-[16px]'>Synergyy</small> recommends the User to carefully review the Terms and Conditions prior to make any activity on the Application. The person who logs in, connects, accesses or uses the <small className='font-semibold text-[16px]'>Synergyy</small> Application</p>
                    </div>
                </div>
                <div className='mt-[94px] lg:block hidden'>
                    <Footers />
                </div>    
            </div>
            <Foots />
        </>
    )
}

//                <h1>
//                         PLEASE READ THE TERMS OF USE AS THEY CONTAIN IMPORTANT INFORMATION REGARDING THE USER'S LEGAL RIGHTS AND OBLIGATIONS WHEN USING SYNERGYY.
//                     </h1>
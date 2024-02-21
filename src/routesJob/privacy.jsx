import React from 'react'
import Navigation from '../ComponentsJob/nav/navigation'
import Footers from '../ComponentsJob/footer/footers'
import Foots from '../ComponentsJob/footer/foots'
import Hamburger from '../ComponentsJob/hamburger'

export default function Privacy({setHamburger, hamburger}) {
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
                {hamburger && <Hamburger setHamburger={setHamburger} hamburger={hamburger} />} 
                <div className='lg:py-6 py-[18px] lg:pl-6 pl-[18px] lg:mt-6 mt-[39px] bg-background'>
                    <h1 className='mb-3 lg:text-[40px] text-[30px] font-medium capitalize text-gradient'>Privacy policy</h1>
                    <p className='font-medium text-green-600 lg:text-[16px] text-[12px]'>Last updated {today}</p>
                </div>
                <div className='mt-12 pb-[72px] flex flex-col gap-10'>
                    <div className='flex flex-col gap-4'>
                        <h1 className='font-montaga text-[32px] text-light ml-[14px]'>1. Introduction</h1>
                        <p className='leading-[140%] text-light text-justify'>
                            Welcome to <small className='font-semibold text-[16px]'>Synergyy</small>, an opportunity platform available at <span className='cursor-pointer text-gradient' onClick={handleRedirect}>www.synergyy.io</span>. <small className='font-semibold text-[16px]'>Synergyy</small> is a social network designed to foster connections between young Nigerians and provide access to various opportunities for them. The User accepts that they are entering into a binding contract with SYNERGYY TECHNOLOGY LTD (hereinafter Synergyy). <small className='font-semibold text-[16px]'>Synergyy</small> is committed to protecting the information of its users and their customers.
                        </p>
                        <p className='leading-[140%] text-light text-justify'>
                            Therefore, <small className='font-semibold text-[16px]'>Synergyy</small> respects and protects the data of the Users to ensure proper compliance with the Law, by which the right of all persons and other constitutional rights, freedoms and guarantees are developed, as well as the right to information. The User who uses and enjoys <small className='font-semibold text-[16px]'>Synergyy</small> must know and accept the following Privacy Policies ("Privacy Policies").
                        </p>
                        <p className='leading-[140%] text-light text-justify'>
                            The person who logs in, connects, accesses or uses the <small className='font-semibold text-[16px]'>Synergyy</small> Website and Application, recognizes that the conditions constitute abinding and enforceable legal agreement between <small className='font-semibold text-[16px]'>Synergyy</small> and the User.
                        </p>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <h1 className='font-montaga text-[32px] text-light ml-[14px]'>2. Definitions</h1>
                        <p className='leading-[140%] text-light text-justify'><h6 className='font-semibold'>Holder:</h6> Each of the natural persons acting on their behalf or acting on behalf of a corporation, with whom the personal data is related may be the Users of the Website.</p>
                        <p className='leading-[140%] text-light text-justify'><h6 className='font-semibold'>Personal Data:</h6>A set of information likely to be related to one or more natural persons.</p>
                        <p className='leading-[140%] text-light text-justify'><h6 className='font-semibold'>Sensitive Data:</h6> Sensitive data are those that affect the privacy of the Holder or whose improper use can generate discrimination, such as those that reveal racial or ethnic origin, political orientation, religious or philosophical convictions, membership of unions, social organizations, human rights organizations or those that promote the interests of any political party, as well as data related to health, sexual life, and biometric data.</p>
                        <p className='leading-[140%] text-light text-justify'><h6 className='font-semibold'>Data Processing (or "Treatment"):</h6> Any operation or set of operations on personal data, such as collection, storage, use, circulation or deletion.</p>
                        <p className='leading-[140%] text-light text-justify'><h6 className='font-semibold'>Treatment Controller:</h6> Natural or legal person, public or private, that by itself for in association with others, decides on the database and/or the treatment of the data.</p>
                        <p className='leading-[140%] text-light text-justify'><h6 className='font-semibold'>Treatment Processor:</h6> Natural or legal person, public or private, that by itself for in association with others performs the processing of personal data on behalf of the Treatment Manager.</p>
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

//  <h1>
//     PLEASE READ THIS PRIVACY POLICY. THEY CONTAIN IMPORTANT INFORMATION ABOUT THE TERMS AND CONDITIONS ON INFORMATION MANAGEMENT, AS WELL AS THE OBLIGATIONS, LAWS AND REGULATIONS RELATING TO THE USE OF THE WEBSITE AND APPLICATION SYNERGYY
// </h1>
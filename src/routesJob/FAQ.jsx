import React from "react";
import Hamburger from "../ComponentsJob/hamburger";
import Nav from "../ComponentsJob/nav/nav";
import { Frequent } from "../ComponentsJob/frequent";
import Footer from "../ComponentsJob/footer/footer";
import Foot from "../ComponentsJob/footer/foot";


export default function FAQ({hamburger, setHamburger}){
    return (
        <div className='bg-background relative' style={hamburger ? {height:'100vh', overflow:'hidden'}: {}}>
        {hamburger && <Hamburger setHamburger={setHamburger} />}
          <Nav hamburger={hamburger} setHamburger={setHamburger} />

          <div className="px-[45px] pt-[115px] pb-[155px] sm:py-[120px] sm:px-[80px] lg:px-[336px]">
            <h1 className="font-bold text-[32px] text-white text-center sm:text-[64px]">Frequently Asked Questions</h1>
          </div>

          <div className="px-[16px] py-[24px] sm:px-[80px] lg:px-[160px]">
            <Frequent title={'What is Synergyy?'} content={'Synergyy is a technology startup focused on helping African Youth discover, harness and achieve their full potential at scale. Our innovative platform accelerates access to skills, opportunities & connectivity for young people to thrive in the digital era.'}/>
            <Frequent border={true} title={'Do I need to pay before applying for a job? '} content={'Applying to any job on Synergyy is absolutely free. All you need to do is create an account and submit your application with the tap of a few buttons at no extra cost. '} />
            <Frequent border={true} title={'How do I create an account on Synergyy? '} content={'It’s simple. To create an account, simply click on the sign up button to register via email or google account. Choose a password and submit to receive a verification message sent to your email. '} />
            <Frequent border={true} title={'Do I need a laptop before I can use Synergyy?'} content={'No. You don’t need a laptop to access Synergyy’s platform. You can download the Synergyy app on your mobile phone and use it on the go. It is both available for android and iOS. '} />
            <Frequent border={true} title={'Can I search for jobs on Synergyy without creating an account? '} content={'Yes, you can browse job listings on our platform without creating an account. However, to apply for jobs or access some features, such as setting up your profile for easy job recommendations, you need to create an account. '} />
            <Frequent border={true} title={'Can I get jobs recommended for me based on my experience? '} content={'Absolutely. Just set up your profile and you will get a list of recommended jobs just for you. '} />
            <Frequent border={true} title={'Do I have to be in tech to use Synergyy?'} content={'Absolutely not. Our job listing is exhaustive as well as diverse. You can find jobs from almost every industry and sector when using our platform. '} />
            <Frequent border={true} title={'Will Synergyy take a part of my salary when I get a job on the platform? '} content={'Never! Synergyy does not demand any payment from securing a job on our platform. '} />
            <Frequent border={true} title={'Is there a community that I can be a part of?'} content={'Yes. You can join circles on the app and network with young professionals like yourself. Synergyy helps provide you with the connectivity you need to build your career.'} />
          </div>
          <Footer />
          <Foot />

      </div>
    )
}
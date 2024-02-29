import React, {useEffect, useState, useRef} from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'

import LandingHome from '../pages/Home'
import HomePageLayout from '../layouts/HompageLayout'
import Register from '../pages/auth/register'
import Otp from '../pages/auth/otp'
import WelcomePage from '../pages/Welcome'
import OnboardingPage from '../pages/onboarding'
import Congratulations from '../pages/congratulations'
import Login from '../pages/auth/login'
import Download from '../pages/congratulations/component/download'
import DashboardLayout from '../layouts/DashboardLayout'
import Profile from '../pages/dashboard/profile'
import JobBoard from '../pages/dashboard/board'
import JobTracker from '../pages/dashboard/tracker'
import Community from '../pages/dashboard/community'
import Assessments from '../pages/dashboard/assessment'
import Details from '../pages/dashboard/board/component/Details'
import AskAPro from '../pages/Home/AskAPro'
import GetAccess from '../pages/Home/GetAccess'
import SuccessPage from '../pages/Home/component/SuccessPage'


import axios from 'axios';
import '../App.css';
import Home from '../routesJob/home';
import Terms from '../routesJob/terms';
import Privacy from '../routesJob/privacy';
import Contact from '../routesJob/contact';
// import Auth from '../routesJob/auth';
// import Welcome from '../routesJob/welcome';
import About from '../routesJob/about';
// import Partnership from '../routesJob/partnership';
// import LearnMore from '../routesJob/learn-more';
// import FAQ from '../routesJob/FAQ';
// import DesignQuest from '../routesJob/design-quest';
// import DesignSuccess from '../routesJob/design-success';
import ViewJobs from '../routesJob/view-jobs';
import Post from '../routesJob/post';
// import DesignSubmit from '../routesJob/design-submit';
// import DesignSubmitted from '../routesJob/design-submitted';
// import Career from '../routesJob/career';
// import Location from '../routesJob/location';
// import TalentVault from '../routesJob/talent-vault';
// import Onboarding from '../routesJob/onboarding';
// import Job from '../routesJob/job';


const Routers = () => {

  const location = useLocation();
  const [hamburger, setHamburger] = useState(false)
  const referralCodeRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    const extractReferralToken = () => {
      const searchParams = new URLSearchParams(window.location.search);
      const referralToken = searchParams.get('referral_token');
      if (referralToken) {
        referralCodeRef.current = referralToken;
        referral();
      }
    };

    extractReferralToken();
  }, []);
  
  const referral = async (referralToken) => {
    const apiUrl = `https://api.synergyng.app/v1/platform/onboard`;
    const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjE2NiwiaWF0IjoxNjkwMjk2NDI4fQ.js9zS9NPuB412gx4qFKgKU2Ug33MbHj7RZFB-I0T6iQ';
    const deviceModel = 'web';
    const params = { referral_token: referralToken };

    try {
      const response = await axios.get(apiUrl, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          device_model: deviceModel,
        },
        params,
      });
      window.open(response.data.link, "_blank");
    } catch (error) {
      console.error('API call error:', error);
    }
  };

    return (
      <Routes>
          <Route element={<HomePageLayout />}>
            <Route path='/' element={<LandingHome />} />
          </Route>
          <Route element={<DashboardLayout />}>
            <Route path='/dashboard' element={<Profile />} />
            {/* <Route path='/job-board' element={<JobBoard />} /> */}
            <Route path='/job-board/details' element={<Details />} />
            <Route path='/job-tracker' element={<JobTracker />} />
            <Route path='/community' element={<Community />} />
            <Route path='/assessments' element={<Assessments />} />
          </Route>
          <Route path='/pro' element={<AskAPro />} />
          <Route path='/access' element={<GetAccess />} />
          <Route path='/success' element={<SuccessPage />} />

          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/otp' element={<Otp />} />
          <Route path='/welcome-page' element={<WelcomePage />} />
          <Route path='/onboarding-page' element={<OnboardingPage />} />
          <Route path='/congratulations' element={<Congratulations />} />
          <Route path='/download' element={<Download />} />



          <Route path='/talent' element={<Home hamburger={hamburger} setHamburger={setHamburger} />} />
      <Route path='/terms&condition' element={<Terms hamburger={hamburger} setHamburger={setHamburger}/>} />
      <Route path='/privacypolicy' element={<Privacy hamburger={hamburger} setHamburger={setHamburger}/>} />
      <Route path='/contact' element={<Contact hamburger={hamburger} setHamburger={setHamburger}/>} />
      {/* <Route path='/getstarted' element={<Auth hamburger={hamburger} setHamburger={setHamburger} />} /> */}
      {/* <Route path='/otp' element={<OtpForm hamburger={hamburger} setHamburger={setHamburger}/>} /> */}
      {/* <Route path='/onboarding/*' element={<Onboarding hamburger={hamburger} setHamburger={setHamburger}/>} /> */}
      {/* <Route path='/select-location' element={<Location hamburger={hamburger} setHamburger={setHamburger}/>} /> */}
      {/* <Route path='/username' element={<UsernameForm hamburger={hamburger} setHamburger={setHamburger}/>} /> */}
      {/* <Route path='/welcome' element={<Welcome hamburger={hamburger} setHamburger={setHamburger}/>} /> */}
      <Route path='/about' element={<About hamburger={hamburger} setHamburger={setHamburger} />} />
      {/* <Route path='/get-access' element={<GetAccess hamburger={hamburger} setHamburger={setHamburger} />} /> */}
      {/* <Route path='/design-quest' element={<DesignQuest hamburger={hamburger} setHamburger={setHamburger} />} /> */}
      {/* <Route path='/design-submit' element={<DesignSubmit hamburger={hamburger} setHamburger={setHamburger} />} /> */}
      {/* <Route path='/design-success' element={<DesignSuccess hamburger={hamburger} setHamburger={setHamburger} />} /> */}
      {/* <Route path='/design-submitted' element={<DesignSubmitted hamburger={hamburger} setHamburger={setHamburger} />} /> */}
      {/* <Route path='/partnership' element={<Partnership hamburger={hamburger} setHamburger={setHamburger} />} /> */}
      {/* <Route path='/learn-more' element={<LearnMore />} /> */}
      {/* <Route path='/talent-vault' element={<TalentVault hamburger={hamburger} setHamburger={setHamburger} />} /> */}
      <Route path='/view-jobs/:id' element={<ViewJobs hamburger={hamburger} setHamburger={setHamburger}/>} />
      <Route path='/post/:id' element={<Post hamburger={hamburger} setHamburger={setHamburger}/>} />
      {/* <Route path='/faq' element={<FAQ hamburger={hamburger} setHamburger={setHamburger} />} /> */}
      {/* <Route path='/job' element={<Job hamburger={hamburger} setHamburger={setHamburger} />} /> */}
      </Routes>
    )
  }
  
  export default Routers
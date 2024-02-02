import React, {useEffect} from 'react'
import Hero from '../ComponentsJob/hero/hero';
import Upskill from '../ComponentsJob/upskill/upskill';
import Landdreamjob from '../ComponentsJob/upskill/landdreamjob';
import Joinexcitingcircles from '../ComponentsJob/upskill/joinexcitingcircles';
import Success from '../ComponentsJob/success/Success';
import Hire from '../ComponentsJob/hire/hire';
import Platform from '../ComponentsJob/platform/platform';
import Download from '../ComponentsJob/download/download';
import Footer from '../ComponentsJob/footer/footer';
import Foot from '../ComponentsJob/footer/foot';
import { useLocation } from 'react-router-dom';
import Hamburger from '../ComponentsJob/hamburger';

export default function Home({hamburger, setHamburger}) {

    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
          const targetElement = document.querySelector(location.hash);
          if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }, [location]);

    return (
      <div className='bg-background relative' style={hamburger ? {height:'100vh', overflow:'hidden'}: {}}>
        {hamburger && <Hamburger setHamburger={setHamburger} />}
          <Hero hamburger={hamburger} setHamburger={setHamburger} />
          <Upskill />
          <Landdreamjob />
          <Joinexcitingcircles />
          <Success />
          <Hire />
          <Platform />
          <Download />
          <Footer />
          <Foot />
      </div>
    )
}

import React from 'react'
import Navlight from '../ComponentsJob/nav/navlight'
import HeroTalent from '../ComponentsJob/hero/Herotalent'
import SuccessTalent from '../ComponentsJob/success/successTalent'
import TalentSwiper from '../ComponentsJob/talent/talentSwiper'
import Success from '../ComponentsJob/talent/success'
import TalentContactForm from '../ComponentsJob/forms/talentContactForm'
import TalentFoot from '../ComponentsJob/footer/talentFoot'
import Hamburger from '../ComponentsJob/hamburger'

export default function TalentVault({ hamburger, setHamburger }) {
    return (
        <div className='talent'>
            {hamburger && <Hamburger setHamburger={setHamburger} />}
            <Navlight talent={true} buttons={true} setHamburger={setHamburger}/>
            <HeroTalent />
            {/* <SuccessTalent /> */}
            {/* <TalentSwiper /> */}
            <Success />
            <TalentContactForm />
            <TalentFoot />
        </div>
    )
}

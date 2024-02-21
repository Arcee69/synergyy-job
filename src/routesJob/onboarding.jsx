import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Career from './career'
import WelcomeOnboard from './welcome-onboard'
import WorkExperience from './work-experience'
import EducationalHistory from './educational-history'
import Skills from './skills'
import SoftSkills from './soft-skills'
import Portfolio from './portfolio'
import AdditionalInfo from './additionalInfo'
import LanguageProficiency from './language-proficiency'
import ProfilePicture from './profile-picture'
import TechnicalExperience from './technicalExperience'
import TechnicalSkill from './technicalSkill'
import SoftExperience from './softExperience'
import LanguageExperience from './languageExperience'

export default function Onboarding() {
    return (
        <Routes>
            <Route exact path='/' element={<Career />} />
            <Route exact path='/welcome' element={<WelcomeOnboard />} />
            <Route exact path='/work-experience' element={<WorkExperience />} />
            <Route exact path='/education-history' element={<EducationalHistory />} />
            <Route exact path='/skills' element={<Skills />} />
            <Route exact path='/portfolio' element={<Portfolio />} />
            <Route exact path='/additional-information' element={<AdditionalInfo />} />
            {/* <Route exact path='/soft-skills' element={<SoftSkills />} />
            <Route exact path='/language-proficiency' element={<LanguageProficiency />} /> */}
            <Route exact path='/soft-skills' element={<SoftExperience />} />
            <Route exact path='/language-proficiency' element={<LanguageExperience />} />
            <Route exact path='/profile-picture' element={<ProfilePicture />} />
            <Route exact path='/technical-experience' element={<TechnicalExperience />} />
            <Route exact path='/technical-skill' element={<TechnicalSkill />} />
        </Routes>
    )
}

import React, { useState } from 'react'
import SkillCheck from './skillCheck'
import Buttons from '../button'
import SelectModal from '../select-modal';
import TechnicalModal from './technicalModal';
import { useNavigate } from 'react-router-dom';
import SkillModal from './skillModal';
import LanguageModal from './languageModal';

export default function SkillBox() {
    const completed = sessionStorage.getItem('complete');
    const status = completed && JSON.parse(completed);
    const [complete, setComplete] = useState(status || []);
    const [techDisplay, setTechDisplay]  = useState(false);
    const [skillDisplay, setSkillDisplay]  = useState(false);
    const [languageDisplay, setLanguageDisplay]  = useState(false);
    const navigate = useNavigate();

    const handleNext = () => {
        if (complete.length !== 3) {
            return;
        }
        navigate('/onboarding/portfolio')   
    }

    return (
        <div className='w-full flex flex-col phone:gap-[113px] gap-[38.24px] mb-10'>
            <div className='w-full hidden mid:flex mid:flex-row gap-6 mid:gap-0 items-center justify-between'>
                <SkillCheck title={'Add your Technical skills'} open={() => setTechDisplay(true)} finish={complete.includes('technical')}/>
                <SkillCheck title={'Add your Soft skills'} open={() => setSkillDisplay(true)} finish={complete.includes('soft')}/>
                <SkillCheck title={'Language proficiency'} open={() => setLanguageDisplay(true)} finish={complete.includes('language')}/>
            </div>
            <div className='w-full mid:hidden flex flex-col gap-6 mid:gap-0 items-center justify-between'>
                <SkillCheck title={'Add your Technical skills'} open={() => navigate('/onboarding/technical-skill')} finish={complete.includes('technical')}/>
                <SkillCheck title={'Add your Soft skills'} open={() => navigate('/onboarding/soft-skills')} finish={complete.includes('soft')}/>
                <SkillCheck title={'Language proficiency'} open={() => navigate('/onboarding/language-proficiency')} finish={complete.includes('language')}/>
            </div>
            <div className='w-full phone:flex hidden justify-center'>
                <Buttons text={'Continue'} padding={'12px 48px'} width={'318px'} functions={handleNext} hoverColor={complete.length === 3 ? '#FBA599' : '#BABABA'} bgColor={complete.length === 3 ? '#FBA599' : '#BABABA'} color={'#00141B'}/>
            </div>
            <div className='w-full phone:hidden flex justify-center'>
                <Buttons text={'Next'} padding={'12px 48px'} width={'318px'} functions={handleNext} hoverColor={complete.length === 3 ? '#FBA599' : '#BABABA'} bgColor={complete.length === 3 ? '#FBA599' : '#BABABA'} color={'#00141B'}/>
            </div>

            <SelectModal experience={true} open={techDisplay} title={'Add technical skills'} closeModal={() => setTechDisplay(false)}>
                <TechnicalModal closeModal={() => setTechDisplay(false)} setComplete={setComplete} complete={complete}/>
            </SelectModal>
            <SelectModal experience={true} open={skillDisplay} title={'Add soft skills'} closeModal={() => setSkillDisplay(false)}>
                <SkillModal closeModal={() => setSkillDisplay(false)} setComplete={setComplete} complete={complete}/>
            </SelectModal>
            <SelectModal experience={true} open={languageDisplay} title={'Language proficiency'} closeModal={() => setLanguageDisplay(false)}>
                <LanguageModal closeModal={() => setLanguageDisplay(false)} setComplete={setComplete} complete={complete}/>
            </SelectModal>
        </div>
    )
}

import React, { useState } from 'react'
import TalentCard from '../card/talentCard'
import TalentCardContent from '../card/talentCardContent';
import Card from '../card/card';
import Skill from '../../assets/img/C++.png'
import Skill1 from '../../assets/img/framer.png'
import Skill2 from '../../assets/img/html.png'
import User from '../../assets/img/user.png'
import Steps from '../../assets/img/step3.png'
import  Skill3  from '../../assets/svg/certificate-2-svgrepo-com 1.svg';
import  Skill4  from '../../assets/svg/progress-svgrepo-com 1.svg';
import  Check  from '../../assets/svg/Checkbox.svg';
import  Arrow  from '../../assets/svg/Arrow 8.svg';
import  Plus  from '../../assets/svg/+.svg';
import  Search  from '../../assets/svg/research-svgrepo-com 1.svg';
import  Design  from '../../assets/svg/design-svgrepo-com (1) 1.svg';

export default function SuccessTalent() {
    const [step, setStep] = useState(1);

    return (
        <div className='lg:py-14 py-[50px] lg:px-[9.4%] flex flex-col gap-[51px]'>
            <div className='talent-card mx-6 lg:mx-0 lg:p-6 lg:bg-[#F5F5F5] bg-white lg:rounded-[40px] rounded-[26px]'>
                <TalentCard step={step} setStep={setStep} />
            </div>
            {step === 1 && (
                <TalentCardContent title={'Supercharge your hiring process'} content={' Synergyy allows your company to save time and money as well as  resources. Tap into our extensive network of top-vetted tech talent across Africa for swift and seamless recruitment.'}>
                    <Card img={'card2'} name={'Folake Osunbo'} title={'Product Designer'} location={'Lagos, Nigeria'}>
                        <div className='items-center background-gradient p-1 rounded-[5px] border-[0.5px] border-background flex justify-between'>
                            <div className='flex gap-1 items-center'>
                                <img src='/images/figma.png' className='w-[10px] h-[10px]' alt='figma' />
                                <p className='text-[7px] font-medium'>Figma</p>
                            </div>
                            <div className='flex gap-1 items-center'>
                                <p className='text-[6px] font-semibold text-black'>Rated</p>
                                <img src='/images/rate.png' alt='rate' />
                            </div>
                        </div>        
                        <div className='items-center background-gradient p-1 rounded-[5px] border-[0.5px] border-background flex justify-between'>
                            <div className='flex gap-1 items-center'>
                                <Search />
                                <p className='text-[7px] font-medium'>Research</p>
                            </div>
                            <div className='flex gap-1 items-center'>
                                <p className='text-[6px] font-semibold text-black'>Rated</p>
                                <img src='/images/rate.png' alt='rate' />
                            </div>
                        </div>        
                        <div className='items-center background-gradient p-1 rounded-[5px] border-[0.5px] border-background flex justify-between'>
                            <div className='flex gap-1 items-center'>
                                <Design />
                                <p className='text-[7px] font-medium'>Design thinking</p>
                            </div>
                            <div className='flex gap-1 items-center'>
                                <p className='text-[6px] font-semibold text-black'>Rated</p>
                                <img src='/images/rate.png' alt='rate' />
                            </div>
                        </div>        
                    </Card>
                    <Card img={'card3'} name={'Adeola Adebayo'} title={'Software Development Manager'} location={'Kwara, Ilorin'}>
                        <div className='items-center background-gradient p-1 rounded-[5px] border-[0.5px] border-background flex justify-between'>
                            <div className='flex gap-1 items-center'>
                                <img src={Skill} className='w-[10px] h-[10px]' alt='figma' />
                                <p className='text-[7px] font-medium'>C++</p>
                            </div>
                            <div className='flex gap-1 items-center'>
                                <p className='text-[6px] font-semibold text-black'>Rated</p>
                                <img src='/images/rate.png' alt='rate' />
                            </div>
                        </div>     
                        <div className='items-center background-gradient p-1 rounded-[5px] border-[0.5px] border-background flex justify-between'>
                            <div className='flex gap-1 items-center'>
                                <img src={Skill2} className='w-[10px] h-[10px]' alt='figma' />
                                <p className='text-[7px] font-medium'>HTML</p>
                            </div>
                            <div className='flex gap-1 items-center'>
                                <p className='text-[6px] font-semibold text-black'>Rated</p>
                                <img src='/images/rate.png' alt='rate' />
                            </div>
                        </div>     
                        <div className='items-center background-gradient p-1 rounded-[5px] border-[0.5px] border-background flex justify-between'>
                            <div className='flex gap-1 items-center'>
                                <img src={Skill1} className='w-[10px] h-[10px]' alt='figma' />
                                <p className='text-[7px] font-medium'>Framer</p>
                            </div>
                            <div className='flex gap-1 items-center'>
                                <p className='text-[6px] font-semibold text-black'>Rated</p>
                                <img src='/images/rate.png' alt='rate' />
                            </div>
                        </div>     
                    </Card>
                    <Card img={'card1'} name={'Ngozi Obi'} title={'Chartered Accountant'} location={'Wuse, Abuja'}>
                        <div className='items-center background-gradient p-1 rounded-[5px] border-[0.5px] border-background flex justify-between'>
                            <div className='flex gap-1 items-center'>
                                <Skill3 />
                                <p className='text-[7px] font-medium'>ICANN</p>
                            </div>
                            <div className='flex gap-1 items-center'>
                                <p className='text-[6px] font-semibold text-black'>Passed</p>
                                <Check />
                            </div>
                        </div>     
                        <div className='items-center background-gradient p-1 rounded-[5px] border-[0.5px] border-background flex justify-between'>
                            <div className='flex gap-1 items-center'>
                                <Skill3 />
                                <p className='text-[7px] font-medium'>CFA</p>
                            </div>
                            <div className='flex gap-1 items-center'>
                                <p className='text-[6px] font-semibold text-black'>Passed</p>
                                <Check />
                            </div>
                        </div>     
                        <div className='items-center background-gradient p-1 rounded-[5px] border-[0.5px] border-background flex justify-between'>
                            <div className='flex gap-1 items-center'>
                                <Skill3 />
                                <p className='text-[7px] font-medium'>CIMA </p>
                            </div>
                            <div className='flex gap-1 items-center'>
                                <p className='text-[6px] font-semibold text-black'>in view</p>
                                <Skill4 />
                            </div>
                        </div>
                    </Card>
                </TalentCardContent>
            )}
            {step === 2 && (
                <TalentCardContent center={true} title={'Save Time and Money with Outstaffing'} content={'Synergyy is a leading provider of outsourced staffing solutions, helping businesses of all sizes to access the top talent they need to grow and succeed. Our team of experienced professionals can provide a wide range of services. '}>
                    <div className='flex flex-col sm:gap-2 gap-[6px] justify-center items-center'>
                        <img src={User} alt='user' className='sm:w-[73px] w-[56.38px] sm:h-[73px] h-[56.38px]' />
                        <p className='sm:text-[13.7px] text-[10.5px] text-background font-extrabold'>Client</p>
                    </div>
                    <Arrow className='w-[34.3px] sm:w-[45px]'/>
                    <div className='flex flex-col sm:gap-2 gap-[6px] justify-center items-center'>
                        <img src={User} alt='user' className='sm:w-[73px] w-[56.38px] sm:h-[73px] h-[56.38px]' />
                        <p className='sm:text-[13.7px] text-[10.5px] text-background font-extrabold text-center'>Client’s Team</p>
                    </div>
                    <Plus className='w-[18.6px] sm:w-[24.3px] h-[18.5px] sm:h-[24.3px]'/>
                    <div className='flex flex-col sm:gap-2 gap-[6px] justify-center items-center'>
                        <img src={User} alt='user' className='sm:w-[73px] w-[56.38px] sm:h-[73px] h-[56.38px]' />
                        <p className='sm:text-[13.7px] text-[10.5px] text-background font-extrabold text-center'>Outsourced Team</p>
                    </div>
                </TalentCardContent>
            )}
            {step === 3 && (
                <TalentCardContent center={true} title={'Experience Reskilling and Upskilling in action'} content={'In todays dynamic business world, staying competitive takes more than ever before. Synergyy understands the pivotal role upskilling plays in maintaining a high-performing workforce. Our tailored upskilling programs are designed to empower your team with the knowledge and skills necessary to excel in an ever-changing world.'}>
                    <img src={Steps} alt='steps' className='sm:w-[609px] w-full sm:h-[215px] h-[102px] object-contain' />
                </TalentCardContent>
            )}
        </div>
    )
}

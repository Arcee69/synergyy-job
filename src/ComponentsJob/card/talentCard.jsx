import React from 'react'

export default function TalentCard({ step, setStep }) {
    return (
        <>
            <div className='lg:flex hidden justify-between'>
                <div onClick={() => setStep(1)} className={`cursor-pointer px-[70px] ${step === 1 && 'py-2 bg-green-50 rounded-[20px] border border-[#03414E]'} flex lg:flex-col items-center justify-center gap-[3px]`}>
                    <p className='text-[20px] font-semibold text-[#00000080]'>01</p>
                    <p className='text-[20px] font-medium text-black'>Talent Attraction</p>
                </div>
                <div onClick={() => setStep(2)} className={`cursor-pointer px-[70px] ${step === 2 && 'py-2 bg-green-50 rounded-[20px] border border-[#03414E]'} flex flex-col items-center justify-center gap-[3px]`}>
                    <p className='text-[20px] font-semibold text-[#00000080]'>02</p>
                    <p className='text-[20px] font-medium text-black'>Outstaffing</p>
                </div>
                <div onClick={() => setStep(3)} className={`cursor-pointer px-[70px] ${step === 3 && 'py-2 bg-green-50 rounded-[20px] border border-[#03414E]'} flex flex-col items-center justify-center gap-[3px]`}>
                    <p className='text-[20px] font-semibold text-[#00000080]'>03</p>
                    <div className='flex gap-2 items-center'>
                        <p className='text-[20px] font-medium text-black'>Upskilling</p>
                        {step === 3 
                        ?
                            <img src="/images/comings.png" alt="coming" />
                        :
                            <img src="/images/talents.png" alt="coming" />
                        }
                    </div>
                </div>
            </div>
            <div className='lg:hidden flex justify-between w-full h-[66px]'>
                {step === 1 ? (
                    <div className='flex p-[10px] border-r border-[#fff] talent-card rounded-[26px]'>
                        <div className='cursor-pointer px-[16.1px] talent-card py-[10.71px] bg-green-50 rounded-[20px] border border-[#03414E] flex items-center justify-center gap-[3px]'>
                            <p className='text-sm font-semibold text-[#00000080]'>01</p>
                            <p className='text-sm font-medium text-black'>Talent Attraction</p>
                        </div>
                    </div>
                ) : (
                    <div onClick={() => setStep(1)} className='py-[7.1px] px-[16.07px] flex items-center justify-center rounded-[26px] talent-cards w-[55px]'>
                        <p className='font-semibold text-sm text-[#00000080]'>01</p>
                    </div>
                )}

                {step === 2 ? (
                    <div className='flex p-[10px] border-r border-[#fff] talent-card rounded-[26px]'>
                        <div className='cursor-pointer px-[16.1px] talent-card py-[10.71px] bg-green-50 rounded-[20px] border border-[#03414E] flex items-center justify-center gap-[3px]'>
                            <p className='text-sm font-semibold text-[#00000080]'>02</p>
                            <p className='text-sm font-medium text-black'>Outstaffing</p>
                        </div>
                    </div>
                ) : (
                    <div onClick={() => setStep(2)} className='py-[7.1px] px-[16.07px] flex items-center justify-center rounded-[26px] talent-cardss w-[55px]'>
                        <p className='font-semibold text-sm text-[#00000080]'>02</p>
                    </div>
                )}

                {step === 3 ? (
                    <div className='flex p-[10px] border-r border-[#fff] talent-card rounded-[26px]'>
                        <div className='cursor-pointer px-[16.1px] talent-card py-[10.71px] bg-green-50 rounded-[20px] border border-[#03414E] flex items-center justify-center gap-[3px]'>
                            <p className='text-sm font-semibold text-[#00000080]'>03</p>
                            <p className='text-sm font-medium text-black'>Upskilling</p>
                        </div>
                    </div>
                ) : (
                    <div onClick={() => setStep(3)} className='py-[7.1px] px-[16.07px] flex items-center justify-center rounded-[26px] talent-cardss w-[55px]'>
                        <p className='font-semibold text-sm text-[#00000080]'>03</p>
                    </div>
                )}
            </div>
        </>
    )
}

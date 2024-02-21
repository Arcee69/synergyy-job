import React from 'react'
import Plat from '../../assets/img/plat.png'
import Plat2 from '../../assets/img/plat2.png'
import Plat3 from '../../assets/img/plat3.png'
import Plat4 from '../../assets/img/plat4.png'

export default function Platform() {
    return (
        <div className='lg:px-20 px-[29px] lg:py-[100px] py-[50px] platform'>
            <h2 className='sm:text-[40px] text-[30px]'>One Platform.  <span className='text-primary'>Everything you need</span></h2>

            <div className='mt-16 lg:flex sm:gap-4 gap-2 justify-center grid grid-cols-2'>
                <div>
                    <div className='platform-card py-6 px-[21.647px] md:py-8 md:px-10 md:gap-[7.22px] gap-[3.907px]'>
                        <div className='platform-box w-[88px] h-[88px] md:w-[188px] md:h-[156px]'>
                            <img src={Plat} alt='synergyy platform' />
                        </div>
                    </div>
                    <p className='sm:mt-8 mt-4 font-semibold capitalize text-white text-center lg:text-[16px] text-[10px]'>Learn a New skill</p>
                </div>
                
                <div>
                    <div className='platform-card py-6 px-[21.647px] md:py-8 md:px-10 md:gap-[7.22px] gap-[3.907px]'>
                        <div className='platform-box w-[88px] h-[88px] md:w-[188px] md:h-[156px]'>
                            <img src={Plat2} alt='synergyy platform' />
                        </div>
                    </div>
                    <p className='sm:mt-8 mt-4 font-semibold capitalize lg:text-[16px] text-[10px] text-white text-center'>Find top Jobs</p>
                </div>
                
                <div className='sm:mt-0 mt-3'>
                    <div className='platform-card py-6 px-[21.647px] md:py-8 md:px-10 md:gap-[7.22px] gap-[3.907px]'>
                        <div className='platform-box w-[88px] h-[88px] md:w-[188px] md:h-[156px]'>
                            <img src={Plat3} alt='synergyy platform' />
                        </div>
                    </div>
                    <p className='sm:mt-8 mt-4 font-semibold capitalize lg:text-[16px] text-[10px] text-white text-center'>Connect with Friends</p>
                </div>

                <div className='sm:mt-0 mt-3'>
                    <div className='platform-card py-6 px-[21.647px] md:py-8 md:px-10 md:gap-[7.22px] gap-[3.907px]'>
                        <div className='platform-box w-[88px] h-[88px] md:w-[188px] md:h-[156px]'>
                            <img src={Plat4} alt='synergyy platform' />
                        </div>
                    </div>
                    <p className='sm:mt-8 mt-4 font-semibold capitalize lg:text-[16px] text-[10px] text-white text-center'>Enjoy exciting rewards</p>
                </div>
            </div>
        </div>
    )
}

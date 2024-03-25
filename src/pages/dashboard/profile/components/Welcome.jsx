import React from 'react'
import Confetti from "../../../../assets/img/confetti.png"

const Welcome = ({ handleClose }) => {

    const pressed = () => {
        localStorage.setItem("clicked", true)
        handleClose()
    }

  return (
    <div className='w-[90%] lg:w-[400px] h-[344px] bg-[#fff] rounded-lg flex flex-col items-center gap-6 justify-center p-6'>
        <img src={Confetti} alt='confetti' className='w-[114px] h-[114px]' />
        <div className='flex flex-col items-center justify-center'>
            <p className='font-semibold font-mont text-[24px]'>Welcome to synergyy</p>
            <p className='font-mont font-medium text-sm text-center'>Please complete your profile</p>
        </div>
        <button 
            className='w-full lg:w-[352px] h-[44px] rounded-lg bg-[#FDB181] border border-[#00141B] flex items-center justify-center'
            onClick={() => pressed()}
        >
            <p className='font-mont font-semibold text-base'>Complete Profile</p>
        </button>
    </div>
  )
}

export default Welcome
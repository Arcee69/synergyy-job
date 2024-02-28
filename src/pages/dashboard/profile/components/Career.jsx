import React from 'react'

const Career = ({ setActive }) => {
  return (
    <div className="flex flex-col gap-4 mt-4 mb-10">
      <div className='w-full lg:w-[815px] flex flex-col bg-[#fff] rounded-lg p-4'>
        <p className='font-semibold text-[14px] lg:text-lg font-mont text-[#1B565B]'>Career Goals</p>
        <p className='text-[#334D57] font-mont text-[12px] lg:text-[15px]'>Information about you, how you work and why you work will help us find companies that best fit your goals and aspirations.</p>
      </div>

      <div className='w-full lg:w-[815px]  flex gap-[19px] flex-col bg-[#fff] rounded-lg px-[19px] py-[40px]'> 
        <p className='text-[#00141B] font-semibold font-mont text-sm lg:text-lg'>Question 1: Future Plans</p>
        <p className='text-[#334D57] font-medium text-[11px] lg:text-sm  font-mont'>Where do you see yourself in your career five years from now?</p>
        <div className='flex flex-col gap-[16px] mt-[15px]'>
          <div className='flex gap-[7px] items-center'>
            <input type='radio' name='optionGroup' />
            <p className='font-medium font-mont text-[11px] lg:text-sm  text-[#334D57]'>Advancing into a leadership role within my current field</p>
          </div>
          <div className='flex gap-[7px] items-center'>
            <input type='radio' name='optionGroup' />
            <p className='font-medium font-mont text-[11px] lg:text-sm  text-[#334D57]'>Building expertise in my current role and contributing to long-term projects</p>
          </div>
          <div className='flex gap-[7px] items-center'>
            <input type='radio' name='optionGroup' />
            <p className='font-medium font-mont text-[11px] lg:text-sm text-[#334D57]'>Exploring new industries and expanding my skill set</p>
          </div>
          <div className='flex gap-[7px] items-center'>
            <input type='radio' name='optionGroup' />
            <p className='font-medium font-mont text-[11px] lg:text-sm  text-[#334D57]'>Entrepreneurial pursuits and starting my own venture</p>
          </div>
        </div>

        <div className='flex flex-col lg:flex-row justify-between lg:items-center gap-[19px] lg:gap-0 '>
          <p className='text-[#001A24] font-medium text-[15px] font-mont'>0/10 Questions answered</p>
          <div className='flex flex-col lg:flex-row items-center gap-[8px]'>
            <button
              className='w-full lg:w-[86px] h-[39px] bg-[#E3E7E8] p-2 text-xs text-[#678087] font-mont rounded-[4px] flex items-center justify-center '
            >
              Previous
            </button>
            <button
              className='w-full lg:w-[111px] h-[39px] bg-[#00141B] text-xs text-[#FFFFFF] font-mont p-2 rounded-[4px] flex items-center justify-center '
            >
              Next Section
            </button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Career
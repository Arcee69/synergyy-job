import React from 'react'
import { CgSpinner } from 'react-icons/cg'

const Success = ({ loading, handleClose }) => {
  return (
    <div className='bg-[#fff] w-[443px] gap-6 p-6 rounded-xl flex flex-col items-center'>
        {
            loading ? (
                <>
                    <CgSpinner className="w-[113px] h-[113px] animate-spin text-[#000709]" />
                    <div className='flex flex-col gap-[8px]'>
                        <p className='text-2xl font-mont font-semibold text-[#001A24]'>Application In Progress</p>
                        <p className='text-sm font-mont font-medium text-[#334D57]'>Hold on, we’re sending your application</p>
                    </div>
                </>
            ) : (
                <>
                    <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 121 120" fill="none">
                        <circle opacity="0.4" cx="60.5" cy="60" r="60" fill="#00141B"/>
                        <circle cx="60.4999" cy="59.9992" r="46.257" fill="#00141B"/>
                        <path d="M43.7402 62.414L53.3939 72.0677L77.5279 47.9336" stroke="white" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <div className='flex flex-col items-center justify-center'>
                        <p className='font-semibold font-mont text-2xl text-[#001A24]'>Application Sent</p>
                        <p className='text-sm font-mont font-medium text-center'>
                            Netflix technologies has received your application. If you’re a good fit they’ll be in touch.
                        </p>
                    </div>
                    <button
                        type='button'
                        onClick={handleClose}
                        className="bg-[#FBA599] w-full font-mont flex items-center border border-[#000] py-[14px] font-mont font-semibold rounded-[6px] justify-center mt-[8px] h-[48px] text-base text-center"
                    >
                        Find More Jobs Like This 
                    </button>
                </>
            )
        }
        
    </div>
  )
}

export default Success
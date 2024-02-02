import React, { useEffect, useState } from 'react'

export default function Countdown() {
    const targetDate = new Date('2023-10-18T00:00:00');
    const [remainingTime, setRemainingTime] = useState(calculateTimeRemaining());

    function calculateTimeRemaining() {
        const currentDate = new Date();
        const timeRemaining = targetDate - currentDate;

        if (timeRemaining <= 0) {
            return {
                days: 0,
                hours: 0,
                mins: 0,
                secs: 0,
            };
        }

        const remainingDays = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const remainingHours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const remainingMinutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const remainingSeconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        return {
            days: remainingDays,
            hours: remainingHours,
            mins: remainingMinutes,
            secs: remainingSeconds,
        };
    }

    useEffect(() => {
        const interval = setInterval(() => {
            const newRemainingTime = calculateTimeRemaining();
            setRemainingTime(newRemainingTime);

            if (newRemainingTime.days === 0 && newRemainingTime.hours === 0 && newRemainingTime.mins === 0 && newRemainingTime.secs === 0) {
                clearInterval(interval);
            }
        }, 1000);

        return () => {
            clearInterval(interval);
        }
    }, []);
    
    return (
        <div className='flex lg:gap-[7.2px] gap-[3.5px] items-center'>
            <div className='w-auto lg:h-[42px] flex items-center h-6 py-[2.04px] px-[6px] lg:border-[2.1px] border-[1.2px] lg:rounded-[4.5px] rounded-[2.186px] lg:py-[3.574px] lg:px-[10.5px]'>
                <p className='lg:text-[16px] text-[10px] font-bold'>{remainingTime.days}<span className='font-medium'>d</span></p>
            </div>
            <p className='lg:text-[13.05px] text-[6.34px] font-bold text-[#000709]'>:</p>
            <div className='w-auto lg:h-[42px] flex items-center h-6 py-[2.04px] px-[6px] lg:border-[2.1px] border-[1.2px] lg:rounded-[4.5px] rounded-[2.186px] lg:py-[3.574px] lg:px-[10.5px]'>
                <p className='lg:text-[16px] text-[10px] font-bold'>{remainingTime.hours}<span className='font-medium'>h</span></p>
            </div>
            <p className='lg:text-[13.05px] text-[6.34px] font-bold text-[#000709]'>:</p>
            <div className='w-auto lg:h-[42px] flex items-center h-6 py-[2.04px] px-[6px] lg:border-[2.1px] border-[1.2px] lg:rounded-[4.5px] rounded-[2.186px] lg:py-[3.574px] lg:px-[10.5px]'>
                <p className='lg:text-[16px] text-[10px] font-bold'>{remainingTime.mins}<span className='font-medium'>m</span></p>
            </div>
            <p className='lg:text-[13.05px] text-[6.34px] font-bold text-[#000709]'>:</p>
            <div className='w-auto lg:h-[42px] flex items-center h-6 py-[2.04px] px-[6px] lg:border-[2.1px] border-[1.2px] lg:rounded-[4.5px] rounded-[2.186px] lg:py-[3.574px] lg:px-[10.5px]'>
                <p className='lg:text-[16px] text-[10px] font-bold'>{remainingTime.secs}<span className='font-medium'>s</span></p>
            </div>
        </div>
    )
}

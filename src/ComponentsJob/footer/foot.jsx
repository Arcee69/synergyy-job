export default function Foot() {
    const year = new Date().getFullYear();
    
    return (
        <div className='py-10 lg:px-20 foot bg-background flex flex-col'>
            <div className='lg:hidden flex justify-center mt-[24px] gap-[16px] items-center w-full'>
                <div className='flex items-center gap-[8px]'>
                    <p className='font-mont text-sm text-[#fff]'>Privacy Policy</p>
                </div>
                <p className='font-mont text-sm text-[#fff]'>Terms & Conditions</p>
            </div>
            <p className="lg:text-[16px] text-[#fff] text-[14px]">&copy; Copyright Synergyy {year}. All Rights Reserved!</p>
        </div>
    )
}
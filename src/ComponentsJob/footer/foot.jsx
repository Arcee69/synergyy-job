export default function Foot() {
    const year = new Date().getFullYear();
    
    return (
        <div className='py-10 lg:px-20 foot bg-background'>
            <p className="lg:text-[16px] text-[14px]">&copy; Copyright Synergyy {year}. All Rights Reserved!</p>
        </div>
    )
}
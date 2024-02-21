import React from 'react';

export default function Dialogs({ open, children }) {
    return (
        <>
            {open && (
                <div className='mini:mb-[55px] mb-10 absolute z-[9999] left-0 right-0 px-[39px]'>
                    {children}
                </div>
            )}
        </>
    )
}
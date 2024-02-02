import React from 'react'
import "react-phone-input-2/lib/bootstrap.css";
import PhoneInput from 'react-phone-input-2';

export default function PhoneDropdown({country, phone, setPhone}) {
    return (
        <>
            <PhoneInput
                country={country}
                enableSearch={true}
                placeholder='+234'
                value={phone}
                name='phone'
                onChange={(phone) => {
                    setPhone(val => {
                        return {...val, 'phone': phone}
                    })
                }} 
                className="caret-[#42B8BD] w-full border-[#334D57] bg-backgroundDark border-[1.2px] rounded-[4.8px] h-10 sm:h-12 focus:outline-none"
            />
        </>
    )
}
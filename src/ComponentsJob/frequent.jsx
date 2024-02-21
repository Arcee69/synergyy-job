import React, { useState } from "react";


export function Frequent({title, content, border}){

    const [showContent, setShowContent] = useState(false)


    return (
        <div className="py-[40px] relative" style={border ? {borderTop:'1px solid #10303D'}: {}}>
            <img src="/images/arrow-down-white.svg" alt="arrow-down" className="absolute top-[50%] right-0 cursor-pointer" style={{transform:'translateY(-50%)'}} onClick={() => setShowContent(val => !val)} />
            <p className="text-[15px] font-medium text-white w-[93%] phone:w-[95%] sm:text-[19px]">{title}</p>
           {showContent && <p className="text-[13px] text-white mt-[24px] w-[95%] sm:text-[17px]" style={{lineHeight:'150%'}}>{content}</p>}

        </div>
    )
}
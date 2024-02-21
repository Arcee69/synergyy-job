import React from "react";


export function EasyWay({image, text}){
    return (
        <div className="pb-[24px] pt-[48px] px-[48px] rounded-[8.9px] w-[60%] h-[215px] mb-[33px]  phone:w-[40%] flex flex-col gap-y-[24px] items-center mx-auto relative" style={{border:'1px solid rgba(251, 165, 153, 0.30)'}}>
            <img src="/images/blue-arrow.svg" alt="arrow" className="absolute top-[50%] right-[-35%]" style={{transform:'translateY(-50%)'}} />
            <img src={image} alt="talent" />
            <p className="text-[18px] font-semibold text-white text-center w-fit">{text}</p>
        </div>
    )
}
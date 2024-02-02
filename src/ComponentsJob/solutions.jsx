import React, { useState } from "react";

export function Solutions({number, title, text, text2, badge}){

const [showText, setShowText] = useState(false)

    return (
        <div className="grid grid-cols-8">
                                <div className="col-span-1">
                                    <p className="text-[18px] font-semibold" style={{color:'rgba(239, 244, 245, 0.50)'}}>{number}</p>
                                </div>
                                <div className="col-span-6">
                                <p className="font-medium text-[19px] sm:text-[24px] text-white relative w-fit">{title}{badge &&<span><img src="/images/badge.svg" alt="badge" className="absolute top-[50%] right-[-80%] hidden xs:block" style={{transform:'translateY(-50%)'}} /></span>}</p>
                    {showText &&<p className="mt-[15.29px] sm:mt-[20.39px] font-medium text-[13px] sm:text-[16px] text-white opacity-50" style={{lineHeight:'140%'}}>{text} {text2 && <span><br/><br/>{text2}</span>}</p>}
                                </div>
                                <div className="col-span-1">
                                    <img src={showText ? "/images/arrow-up-white.svg" : "/images/arrow-down-white.svg"} alt="arrow" onClick={() => setShowText(val => !val)}/>
                                </div>
                            </div>
    )
}
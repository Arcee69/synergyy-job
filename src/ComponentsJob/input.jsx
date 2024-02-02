import React, { forwardRef } from "react";

export const OtpInput = forwardRef(function OtpRefInput(props, ref) {
    return (
        <div>
            <input
                ref={ref}
                type="text"
                maxLength={1}
                className="otp-input text-center text-[19.2px] font-bold w-12 h-14 border border-[#ECE2DC] rounded-[4.8px] p-[9.6px] bg-inherit text-gray"
                {...props}
            />
        </div>
    )
});
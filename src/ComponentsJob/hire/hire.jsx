import React from "react";
import  Arrow  from "../../assets/svg/arrow3.svg";
import  Arrow2  from "../../assets/svg/arrow4.svg";
import About from "../../assets/img/hire.png";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Hire() {
	const navigate = useNavigate();
	return (
		<div className="flex lg:flex-row flex-col-reverse items-center lg:pl-20 pl-6 lg:pt-0 pt-[50px] lg:pb-[100px] pb-[50px] lg:gap-20 gap-10">
			<div className="sm:w-[50%] lg:pr-0 pr-6">
				<h2 className="mb-5 sm:text-[40px] text-[32px] text-white font-bold capitalize">
					Join <span className="text-gradient">Talent Bank</span>
				</h2>
				<p className="sm:text-[18px] text-[14px] text-white">
					Join our Talent Bank and unlock a realm of exciting global
					opportunities! Whether you're actively pursuing a new adventure or
					open to embracing fresh challenges, our exclusive talent bank ensures
					you're on our radar when exciting possibilities arise. Let's propel
					your career forward – become part of Synergyy's thriving community
					today!
				</p>
				<div className="flex mt-12 gap-6 sm:justify-start justify-center">
		
					<div
						className="flex gap-2 items-center p-4 rounded-lg cursor-pointer hover:motion-safe:animate-pulse bg-green-50 xs:justify-start justify-center xs:w-auto w-[50%]"
						onClick={() => navigate("/register")}
					>
						<p className="font-medium text-[14px] text-background">
							Get Access
						</p>
						<img src={Arrow2}  />
					</div>
					{/* </Link> */}
					{/* <div className='flex gap-2 items-center p-4 rounded-lg cursor-pointer hover:motion-safe:animate-pulse border border-green-50 xs:w-auto w-[50%] xs:justify-start justify-center' onClick={() => navigate('/learn-more')}>
                        <p className='font-medium text-[14px] text-green-50 capitalize'>Learn more</p>
                        <Arrow />
                    </div> */}
				</div>
			</div>
			<div className="hire sm:w-[50%]">
				<img src={About} alt="synergyy hire" className="mt-[70px]" />
			</div>
		</div>
	);
}

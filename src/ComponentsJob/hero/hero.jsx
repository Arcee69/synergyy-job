import React from "react";
import  Arrow  from "../../assets/svg/arrow.svg";
import  Arrow2  from "../../assets/svg/arrow2.svg";
import  Rocket  from "../../assets/svg/rocket.svg";
import  Apple  from "../../assets/svg/apple.svg";
import  Googleplay  from "../../assets/svg/google-play.svg";
import  Frame  from "../../assets/svg/frame-a.svg";
import Herocard from "./herocard";
import Buttons from "../button";
import { Link }  from "react-router-dom";
import Nav from "../nav/nav";
import Banner from "../banner/banner";
import { useState } from "react";

export default function Hero({ hamburger, setHamburger }) {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);
	return (
		<div>
			{/* <Banner /> */}
			<Nav hamburger={hamburger} setHamburger={setHamburger} />
			<div className="lg:mt-[17px] mt-[21px] hero">
				<div className="flex justify-between mid:gap-0 gap-[50px]">
					<div className="lg:block hidden">
						<img src={Arrow}/>
						<Herocard  />
					</div>

					<div className="lg:hidden block mt-[10px]">
						<div className="capitalize gap-3 flex flex-col mid:w-[263px] w-[180px] border-[0.7px] border-secondary rounded-lg p-[11px] bg-background">
							<p className="font-semibold text-[13px] text-white">
								Offer letter
							</p>
							<p className="text-[10px] text-green-50">
								Congratulations Tosin!
							</p>
						</div>
						
						<img src={Arrow2}  className="mt-2" />
					</div>

					<div className="lg:absolute lg:right-[12%] lg:mr-0 mr-6 lg:top-[3%]">

						<img src={Rocket}   className="w-full mid:w-auto animate__animated animate__rollIn animate__slow" />
					</div>
				</div>

				<div className="lg:mt-[1%] mt-12 flex flex-col justify-center mid:px-0 px-[50px]">
					<div className="flex justify-center">
						<div className="w-[767px] flex flex-col gap-6">
							<h1 className="text-primary text-center sm:text-[61px] text-[32px] font-bold animate__animated animate__pulse animate__slow">
								Unlock Your
								<span className="text-[#42B8BD]"> Dream Job</span>
							</h1>
							<h2 className="text-white text-center sm:text-[19px] text-[14px] w-[270px] sm:w-full break-normal xs:whitespace-normal">
								Tired of job hunting? Discover a better way to showcase your
								skills and secure the bag with Synergyy. {windowWidth < 501 && <br />} Easy, exciting &
								entirely free. 
							</h2>
						</div>
					</div>

					<div className="animate__animated animate__fadeInUp animate__slower mt-12 flex justify-center items-center">
						<a href="/register">

						
							<Buttons
								text="Join Synergyy"
								hoverColor="#42b8bd7a"
								hoverText="#FFFFFF"
								// functions={handleStart}
								width="200px"
								weight="500"
								size="13px"
								padding="16px 24px"
								color="#42B8BD"
								bgColor="#00141B"
								border="1px solid #42B8BD"
							/>
						</a>
					</div>
					{/* <div className="animate__animated animate__fadeInUp animate__slower mt-12 flex gap-6 justify-center mid:flex-row flex-col items-center">
						<Link to={"https://apps.apple.com/ng/app/synergy-ng/id6447760204"}>
							<Buttons
								text="Get on Iphone"
								hoverColor="#024355"
								width="238px"
								weight="500"
								size="13px"
								padding="16px 24px"
								color="#FFFFFF"
								bgColor="#00141B"
								border="1px solid #024355"
								icons={<Apple />}
							/>
						</Link>
						<Link
							to={
								"https://play.google.com/store/apps/details?id=com.synergyng.synergy"
							}
						>
							{" "}
							<Buttons
								text="Get on Android"
								hoverColor="#024355"
								width="238px"
								weight="500"
								size="13px"
								padding="16px 24px"
								color="#FFFFFF"
								bgColor="#00141B"
								border="1px solid #024355"
								icons={<Googleplay />}
							/>
						</Link>
					</div> */}
				</div>

				<div className="flex justify-between lg:pl-20 lg:pr-14 pr-6 lg:mt-0 mt-10 items-center">
					<div className="mt-[10px] lg:block hidden">
						<div className="animate__animated animate__fadeInUp animate__slower capitalize gap-3 flex flex-col w-[263px] border-[0.7px] border-secondary rounded-lg p-[11px] bg-background">
							<p className="font-semibold text-[13px] text-white">
								Offer letter
							</p>
							<p className="text-[10px] text-green-50">
								Congratulations Tosin!
							</p>
						</div>
						
						<img src={Arrow2}  className="mt-2" />
					</div>
					<div className="lg:hidden block">
						<img src={Arrow}  className="sm:ml-0 -ml-[30px]" />
						<Herocard />
					</div>

					<img src={Frame}  className="w-[109px] sm:w-auto animate__animated animate__slideInUp animate__slow" />
				</div>
			</div>
		</div>
	);
}

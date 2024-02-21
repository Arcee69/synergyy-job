import React, { useEffect, useState } from "react";
import Nav from "../ComponentsJob/nav/nav";
// import Buttons from "../ComponentsJob/button";
import  ArrowRightBlack  from "../../src/assets/svg/arrow-right-black.svg";
import  AboutTrio  from "../../src/assets/img/collage.png";
import  LovePic  from "../../src/assets/img/love_pic.png";
import Footer from "../ComponentsJob/footer/footer";
import Foot from "../ComponentsJob/footer/foot";
import { useInView } from "react-intersection-observer";
import Hamburger from "../ComponentsJob/hamburger";
import { useNavigate } from "react-router-dom";

export default function About({ hamburger, setHamburger }) {
	const navigate = useNavigate();

	const [ref, inView] = useInView({
		triggerOnce: true,
	});
	const [flag, viewFlag] = useInView({
		triggerOnce: true,
	});

	const [start, viewStart] = useInView({
		triggerOnce: true,
	});

	const [isAnimated, setIsAnimated] = useState(false);
	const [flagView, setFlagView] = useState(false);
	const [buttonView, setButtonView] = useState(false);

	useEffect(() => {
		if (inView) {
			setIsAnimated(true);
		}
		if (viewFlag) {
			setFlagView(true);
		}
		if (viewStart) {
			setButtonView(true);
		}
	}, [inView, viewFlag, viewStart]);

	return (
		<div className="bg-background auth relative" style={{ width: "fit-content"}}>
			{hamburger && <Hamburger setHamburger={setHamburger} />}
			<Nav page={"about"} hamburger={hamburger} setHamburger={setHamburger} />
			<div className="pt-[48px] pb-[33px] px-[29px]">
				<p
					className={`hidden sm:block text-[22.4px] mb-[16px] font-semibold about-about`}
				>
					ABOUT SYNERGYY
				</p>
				<h1
					className="font-semibold sm:text-[40px] mid:text-[45px] md:text-left  lg:text-[65px] lg:text-[80px] text-[22px] xs:text-[24px] text-center text-white" //mid:text-[58px]
					style={{ lineHeight: "120%" }}
				>
					Empowering{" "}
					<span className="text-primary opacity-40">
						Young Talent <br /> To Achieve{" "}
					</span>
					Big Dreams
				</h1>
			</div>
			<div className="dekstop:px-[40px] lg:my-[24px]">
				<div className="grid place-items-center animate__animated animate__fadeInLeft animate__slow">
					<img
						src={AboutTrio}         //"/images/about-trio.svg"
						alt="man smiling"
						className="" //w-[500px] xs:w-[100%]
					/>
				</div>
			</div>
			<div className="flex flex-col gap-y-[35px] lg:flex-row-reverse md:p-[80px] lg:gap-x-[100px]">
				<div className="p-[24px] lg:p-0" style={{ flex: 0.5 }}>
					<h3 className="font-semibold text-[14px] text-[#42B8BD] lg:text-[24px]">
						OUR STORY
					</h3>
					<h1
						className="font-semibold text-[24px] mt-[12px] lg:mt-[24px] text-white lg:text-[40px]"
						style={{ lineHeight: "120%" }}
					>
						{" "}
						<span className="text-primary opacity-40">
							How we’re building <br />
						</span>
						Africa’s Biggest Platform
					</h1>
					<p className="text-[13px] mt-[16px] lg:mt-[24px] text-white opacity-90 lg:text-[16px]">
						Synergyy is Africa’s Multiverse of opportunity, on a mission to
						empower the next generation of African talent. Our social
						opportunity network helps young people navigate life and unlock
						their full potential by offering vital access to resources,
						opportunities, and conversations.
						<br /> <br />
						At the core of our philosophy lies a strong belief in the potential
						of youthful ingenuity, serving as the driving force behind all
						sustainable progress.
						<br /> <br />
						We envision a thriving continent fuelled by the creativity,
						imagination and synergy of young people from various diverse
						backgrounds learning together, working together, and advancing
						together.
						<br /> <br />
						Welcome to Synergyy; let’s achieve big dreams together!
					</p>
				</div>
				<div
					className={`grid place-items-center lg:flex lg:items-center overflow-hidden animate__animated animate__slow ${
						isAnimated ? "animate__fadeInLeft" : ""
					}`}
					style={{ flex: 0.5 }}
					ref={ref}
				>
					<img
						src={LovePic}       //"/images/love-pics.svg"
						alt="people smiling"
						className={`w-[90%] h-[90%] md:w-[100%] md:h-[100%]`}
					/>
				</div>
			</div>
			<div className="py-[40px] px-[24px] sm:text-center mid:p-[80px] lg:w-[918px] mx-auto lg:px-0">
				<h3 className="font-semibold text-[14px] text-[#42B8BD] sm:text-center sm:text-[24px]">
					OUR VISION
				</h3>
				<h1 className="font-semibold text-[24px] mt-[12px] text-white sm:text-[40px]">
					<span className="opacity-40">A More</span>{" "}
					<span className="opacity-100">Connected</span>{" "}
					<span className="opacity-40">Africa</span>{" "}
				</h1>
				{/* <p className="text-[13px] mt-[16px] text-white opacity-90 sm:text-[16px] sm:text-center">Synergyy is an African technology start-up on a mission to empower young Nigerians in the digital era, helping them navigate life and unlock their full potential. 

                <br/> <br/>Our dedicated community offers vital resources, opportunities, and connections for young people to thrive and succeed.

                <br/> <br/>We firmly believe that youth-driven innovation is the key to progress. That's why we are transforming the NYSC experience for young graduates, making it easier, better, more exciting, and ultimately more rewarding. Get ready to embark on an unforgettable Youth Service Adventure with us!</p> */}
			</div>
			{/* <div className="px-[20px] pt-[32px] pb-[48px] lg:px-[180px] mid:pt-[80px] mid:pb-[120px]">
				<div className="flex items-center justify-between sm:grid sm:grid-cols-2">
					<div>
						<h1 className="text-[24px] font-semibold text-white sm:text-[48px] lg:text-[72px]">
							The <span className="text-[#ED7832]">Team</span>
						</h1>
						<p className="text-[12px]  text-white sm:text-[18px] lg:text-[24px]">
							Young & Impact driven
						</p>
					</div>
					<div className="sm:grid sm:place-items-center animate__animated animate__slow animate__backInLeft sm:h-[100%]">
						<img
							src="/images/logo-flag.png"
							alt="logo"
							className={`animate__animated animate__slow h-[40px] sm:h-[80px] lg:w-[80px] sm:ml-auto ${
								flagView ? "animate__swing" : ""
							}`}
							ref={flag}
						/>
					</div>
				</div>
				<div className="mt-[32px] lg:mt-[96px] grid grid-cols-3 gap-[32px] mini:grid-cols-4  lg:gap-[64px]">
					<div className="text-center flex flex-col items-center">
						<div className="w-full">
							<img
								src="/images/team1.png"
								alt="team member"
								className="w-full"
							/>
						</div>
						<p className="text-[9.75px] xs:text-[13px] mini:text-[19.5px] font-semibold text-white opacity-90 mt-[12px]">
							Alexander Ehanire
						</p>
						<p className="text-[8.9px] xs:text-[11px] mini:text-[18px] text-[#FBA599]">
							Founder/Strategy
						</p>
					</div>

                    <div className="text-center flex flex-col items-center">
						<div className="w-full">
							<img
								src="/images/team3.png"
								alt="team member"
								className="w-full"
							/>
						</div>
						<p className="text-[9.75px] xs:text-[13px] mini:text-[19.5px] font-semibold text-white opacity-90 mt-[12px]">
							Abdul-Fatah Dirisu
						</p>
						<p className="text-[8.9px] xs:text-[11px] mini:text-[18px] text-[#FBA599]">
							Co-founder/Partnerships
						</p>
					</div>

					<div className="text-center flex flex-col items-center">
						<div className="w-full">
							<img
								src="/images/team1.png"
								alt="team member"
								className="w-full"
							/>
						</div>
						<p className="text-[9.75px] xs:text-[13px] mini:text-[19.5px] font-semibold text-white opacity-90 mt-[12px]">
							Folusho Joshua
						</p>
						<p className="text-[8.9px] xs:text-[11px] mini:text-[18px] text-[#FBA599]">
							Youth Development
						</p>
					</div>

					<div className="text-center flex flex-col items-center">
						<div className="w-full">
							<img
								src="/images/team1.png"
								alt="team member"
								className="w-full"
							/>
						</div>
						<p className="text-[9.75px] xs:text-[13px] mini:text-[19.5px] font-semibold text-white opacity-90 mt-[12px]">
							Ademola Kolawole
						</p>
						<p className="text-[8.9px] xs:text-[11px] mini:text-[18px] text-[#FBA599]">
							Tech
						</p>
					</div>

					<div className="text-center flex flex-col items-center">
						<div className="w-full">
							<img
								src="/images/team2.png"
								alt="team member"
								className="w-full"
							/>
						</div>
						<p className="text-[9.75px] xs:text-[13px] mini:text-[19.5px] font-semibold text-white opacity-90 mt-[12px]">
							Daniel Ishola
						</p>
						<p className="text-[8.9px] xs:text-[11px] mini:text-[18px] text-[#FBA599]">
							Tech
						</p>
					</div>

					

					<div className="text-center flex flex-col items-center">
						<div className="w-full">
							<img
								src="/images/team4.png"
								alt="team member"
								className="w-full"
							/>
						</div>
						<p className="text-[9.75px] xs:text-[13px] mini:text-[19.5px] font-semibold text-white opacity-90 mt-[12px]">
							Daniel Owolabi
						</p>
						<p className="text-[8.9px] xs:text-[11px] mini:text-[18px] text-[#FBA599]">
							Design
						</p>
					</div>

					{/* hidden on larger screens */}
					{/* <div className="text-center flex flex-col items-center ">
						<div className="w-full">
							<img
								src="/images/team5.png"
								alt="team member"
								className="w-full"
							/>
						</div>
						<p className="text-[9.75px] xs:text-[13px] mini:text-[19.5px] font-semibold text-white opacity-90 mt-[12px]">
							Shalom Matthew
						</p>
						<p className="text-[8.9px] xs:text-[11px] mini:text-[18px] text-[#FBA599]">
							Tech
						</p>
					</div>
					<div className="text-center flex flex-col items-center ">
						<div className="w-full">
							<img
								src="/images/team6.png"
								alt="team member"
								className="w-full"
							/>
						</div>
						<p className="text-[9.75px] xs:text-[13px] mini:text-[19.5px] font-semibold text-white opacity-90 mt-[12px]">
							Zainab Idris
						</p>
						<p className="text-[8.9px] xs:text-[11px] mini:text-[18px] text-[#FBA599]">
							Product Design
						</p>
					</div> */}
					{/* <div className="text-center flex flex-col items-center mini:hidden">
						<div className="w-full">
							<img
								src="/images/team5.png"
								alt="team member"
								className="w-full"
							/>
						</div>
						<p className="text-[9.75px] xs:text-[13px] mini:text-[19.5px] font-semibold text-white opacity-90 mt-[12px]">
							Shalom Matthew
						</p>
						<p className="text-[8.9px] xs:text-[11px] mini:text-[18px] text-[#FBA599]">
							Tech
						</p>
					</div>
					<div className="text-center flex flex-col items-center mini:hidden">
						<div className="w-full">
							<img
								src="/images/team6.png"
								alt="team member"
								className="w-full"
							/>
						</div>
						<p className="text-[9.75px] xs:text-[13px] mini:text-[19.5px] font-semibold text-white opacity-90 mt-[12px]">
							Zainab
						</p>
						<p className="text-[8.9px] xs:text-[11px] mini:text-[18px] text-[#FBA599]">
							Product
						</p>
					</div> */}

					{/* <div
						className="mini:grid mini:grid-cols-2 hidden justify-center gap-x-[64px] mx-auto w-[50%]"
						style={{ gridColumn: "-1/1" }}
					>
						<div className="text-center flex flex-col items-center">
							<div className="w-full">
								<img
									src="/images/team5.png"
									alt="team member"
									className="w-full"
								/>
							</div>
							<p className="text-[9.75px] xs:text-[13px] mini:text-[19.5px] font-semibold text-white opacity-90 mt-[12px]">
								Shalom
							</p>
							<p className="text-[8.9px] xs:text-[11px] mini:text-[18px] text-[#FBA599]">
								Web development
							</p>
						</div>
						<div className="text-center flex flex-col items-center">
							<div className="w-full">
								<img
									src="/images/team6.png"
									alt="team member"
									className="w-full"
								/>
							</div>
							<p className="text-[9.75px] xs:text-[13px] mini:text-[19.5px] font-semibold text-white opacity-90 mt-[12px]">
								Zainab
							</p>
							<p className="text-[8.9px] xs:text-[11px] mini:text-[18px] text-[#FBA599]">
								Product
							</p>
						</div>
					</div> */}
				{/* </div> */}
			{/* </div>  */}
			<div className="py-[16px] px-[24px] md:px-[80px]">
				<div className="px-[24px] py-[48px] bg-[#4FACB0] rounded-[32px] flex flex-col gap-y-[16px] lg:grid lg:grid-cols-2 lg:gap-x-[20px] mid:gap-x-0 lg:px-[80px] lg:py-[51px]">
					<div className="md:grid place-items-start">
						<h1 className="font-semibold text-[48px] join-synergy1 md:text-[60px] lg:text-[96px] md:w-[50%] my-auto">
							Join <br /> <span className="text-[#024355]">Synergyy</span>
						</h1>
					</div>
					<div>
						<p
							className="font-medium text-[12px] lg:text-[18px] text-justify"
							style={{ lineHeight: "170%" }}
						>
							Ready to unlock your full potential and seize exciting
							opportunities? Join Synergyy today and register on our
							revolutionary app to embark on a transformative journey towards
							personal and professional success.
							<br />
							Synergyy is more than just an app—it's your gateway to a world of
							possibilities.{" "}
						</p>
						<div className="mt-[23px]">
							<button
								onClick={() => window.location.replace("https://new-syn.vercel.app/register")}
								className={`py-[8px] px-[12px] text-[#00141B] flex items-center gap-x-[4px] rounded-[4px] text-[12px] phone:text-[16px] font-semibold animate__animated animate__slow ${
									buttonView ? "animate__headShake" : ""
								}`}
								style={{
									border: "1px solid #00141B",
									transition: "all 0.3s ease-in-out",
								}}
								ref={start}
							>
								Get Started
								<img src={ArrowRightBlack}  />
							</button>
							{/* <Buttons text={'Get Started'} color={'#00141B'} border={'1px solid #00141B'} padding={'8px 12px'} icons={<ArrowRightBlack />} /> */}
						</div>
					</div>
				</div>
			</div>
			<Footer />
			<Foot />
		</div>
	);
}

import React, { useState, useEffect } from "react";
import axios from "axios";
import { baseURL } from "../../utils/baseURL";
import  Add  from "../../assets/svg/add.svg";
import  Dropdown  from "../../assets/svg/chevron-down.svg";
import  Search  from "../../assets/svg/search2.svg";
import Buttons from "../button";
import { useNavigate } from "react-router-dom";
import SelectModal from "../select-modal";
import LanguageOption from "./languageOption";
import PhoneDropdown from "../phone";
import { CircularProgress } from "@mui/material";

export default function AdditionalInfoForm() {

	const navigate = useNavigate();
	const initialValues = { location: "", phone: "", linkedin: "", twitter: "" };
	const [profileData, setProfileData] = useState(initialValues);
	const [isLoading, setIsLoading] = useState(false);
	const [languageDisplay, setLanguageDisplay] = useState(false);
	const [language, setLanguage] = useState("");
	const accessToken = localStorage.getItem("access_token");

	const handleSubmit = async (nav) => {
		setIsLoading(true);
		if (!profileData.location || !profileData.phone) {
			setIsLoading(false);
			return;
		}
		const data = {
			location: profileData.location,
			phone: profileData.phone,
			linkedIn: profileData.linkedin,
			twitter: profileData.twitter,
			...(language && { language_proficiency: language }),
		};

		try {
			const response = await axios.post(
				`${baseURL}account/update_profile`,
				data,
				{
					headers: { Authorization: `Bearer ${accessToken}` },
				}
			);
			if (response.data.status === "success") {
				setIsLoading(false);
				setProfileData(initialValues);
				navigate(nav);
			}
		} catch (error) {
			setIsLoading(false);
		}
	};

	const [suggestedCities, setSuggestedCities] = useState([]);
	const [inputValue, setInputValue] = useState("");

	const nigerianCities = [
		"Lagos",
		"Abuja",
		"Kano",
		"Ibadan",
		"Port Harcourt",
		"Benin City",
		"Kaduna",
		"Enugu",
		"Aba",
		"Maiduguri",
		"Zaria",
		"Abeokuta",
		"Jos",
		"Ilorin",
		"Owerri",
		"Calabar",
		"Katsina",
		"Akure",
		"Bauchi",
		"Uyo",
		"Ondo",
		"Warri",
		"Ebute-Metta",
		"Ado Ekiti",
		"Umuahia",
		"Yenagoa",
		"Awka",
		"Sokoto",
		"Minna",
		"Lokoja",
		"Gombe",
		"Asaba",
		"Gusau",
		"Jalingo",
		"Dutse",
		"Birnin Kebbi",
		"Lafia",
		"Makurdi",
		"Osogbo",
		"Abakaliki",
		"Ijebu-Ode",
		"Sapele",
		"Keffi",
		"Onitsha",
		"Okene",
		"Epe",
		"Auchi",
		"Bama",
		"Gboko",
		"Hadejia",
		"Bida",
		"Iseyin",
		"Abeokuta",
	];

	useEffect(() => {
		// Filter cities based on the input value
		const filteredCities = nigerianCities.filter((city) =>
			city.toLowerCase().includes(profileData.location.toLowerCase())
		);

		// Set the filtered cities as suggestions
		setSuggestedCities(filteredCities);
	}, [profileData.location]);

	// const handleInputChange = (e) => {
	// 	setInputValue(e.target.value);
	// };

    // const clear = (city) => {
    
    // }

	const handleSuggestionClick = (city) => {
        setProfileData((val) => {
            return { ...val, location: city };
        });
        setSuggestedCities([]);

	};
    

	console.log(profileData);
	console.log(suggestedCities);

	return (
		<div className="w-full flex flex-col phone:gap-6 gap-10">
			<div className="flex flex-col phone:gap-[14.4px] gap-3">
				<label className="phone:text-[16.8px] text-[14px] text-[#99A6AB]">
					Where are you currently?
				</label>
				<div className="w-full flex items-center border-[#334D57] sm:px-[19.2px] px-4 bg-backgroundDark border-[1.2px] rounded-[4.8px] sm:py-[14.4px] py-3 h-10 sm:h-12">
					<Search className="mr-4 " />
					<input
						type="text"
						placeholder="Type or search for a location"
						id="name"
						name="location"
						value={profileData.location}
						onChange={(e) => {
							setProfileData((val) => {
								return { ...val, [e.target.name]: e.target.value };
							});
						}}
						className="caret-[#42B8BD] bg-transparent w-full focus:outline-none text-[16px] text-[#CCD3D5] placeholder:text-[#667A81]"
					/>
				</div>
			</div>

			{profileData.location !== "" && (
				<div className="flex w-full gap-[10px] flex-wrap">
					{suggestedCities.map((city, index) => {
						return (
							<div
								className="w-auto py-[9.6px] px-[14.4px] h-[38.6px] border-[1.2px] border-[#10303D] cursor-pointer items-center justify-center flex gap-[4.8px] rounded-full bg-backgroundDark"
								key={index}
                                onClick={() => handleSuggestionClick(city)}
							>
								<p className="text-[12.8px] text-[#667A81]">{city}</p>
								{/* <Adds className="opacity-40" /> */}
							</div>
						);
					})}
				</div>
			)}

			<div className="additional-info flex flex-col phone:gap-[14.4px] gap-3">
				<label className="phone:text-[16.8px] text-[14px] text-[#99A6AB]">
					phone number
				</label>
				<PhoneDropdown
					country="ng"
					phone={profileData.phone}
					setPhone={setProfileData}
				/>
			</div>
			{/* <p className='text-[19.2px] text-white font-semibold capitalize phone:block hidden'>Professional links</p>
            <div className='w-full hidden gap-[14.4px] items-center phone:flex'>
                <div className="w-[40%] flex justify-center items-center border-[#334D57] bg-backgroundDark border-[1.2px] rounded-[4.8px] h-10 sm:h-12 text-[16px] text-[#CCD3D5]">
                    Linkedin
                </div>
                <input 
                    value={profileData.linkedin}
                    onChange={(e) => {
                        setProfileData(val => {
                        return {...val, [e.target.name]:e.target.value}
                    })}}
                    name='linkedin'
                    className="caret-[#42B8BD] w-full border-[#334D57] bg-backgroundDark border-[1.2px] rounded-[4.8px] sm:py-[14.4px] py-3 h-10 sm:h-12 sm:px-[19.2px] px-4 pr-4 focus:outline-none text-[16px] text-[#CCD3D5] placeholder:text-[#667A81]" 
                    placeholder='Add link'
                />
            </div>
            <div className='phone:mt-[18px] -mt-3 phone:flex justify-center gap-[9.6px] items-center hidden'>
                <div className='cursor-pointer border-[0.768px] border-[#334D57] flex justify-center items-center p-[6.14px] rounded-[3.072px]'>
                    <Add />
                </div>
                <p className='phone:text-[16.8px] text-[14px] text-[#667A81]'>Add another link</p>
            </div>
            <p className='text-[19.2px] text-white font-semibold capitalize phone:block hidden'>Social media</p>
            <p className='text-[19.2px] text-white font-semibold capitalize phone:hidden'>Add social media</p>
            <div className='flex flex-col phone:gap-[19.2px] gap-4'>
                <div className='w-full phone:hidden flex gap-[14.4px] items-center'>
                    <div className="w-[40%] flex justify-center items-center border-[#334D57] bg-backgroundDark border-[1.2px] rounded-[4.8px] h-10 sm:h-12 text-[16px] text-[#CCD3D5]">
                        Linkedin
                    </div>
                    <input 
                        value={profileData.linkedin}
                        onChange={(e) => {
                            setProfileData(val => {
                            return {...val, [e.target.name]:e.target.value}
                        })}}
                        name='linkedin'
                        className="caret-[#42B8BD] w-full border-[#334D57] bg-backgroundDark border-[1.2px] rounded-[4.8px] sm:py-[14.4px] py-3 h-10 sm:h-12 sm:px-[19.2px] px-4 pr-4 focus:outline-none text-[16px] text-[#CCD3D5] placeholder:text-[#667A81]" 
                        placeholder='Add link'
                    />
                </div>
                <div className='w-full phone:flex hidden gap-[14.4px] items-center'>
                    <div className="w-[40%] flex justify-center items-center border-[#334D57] bg-backgroundDark border-[1.2px] rounded-[4.8px] h-10 sm:h-12 text-[16px] text-[#CCD3D5]">
                        Instagram
                    </div>
                    <input 
                        value={profileData.instagram}
                        onChange={(e) => {
                            setProfileData(val => {
                            return {...val, [e.target.name]:e.target.value}
                        })}}
                        name='instagram'
                        className="caret-[#42B8BD] w-full border-[#334D57] bg-backgroundDark border-[1.2px] rounded-[4.8px] sm:py-[14.4px] py-3 h-10 sm:h-12 sm:px-[19.2px] px-4 pr-4 focus:outline-none text-[16px] text-[#CCD3D5] placeholder:text-[#667A81]" 
                        placeholder='@'
                    />
                </div>
                <div className='w-full phone:flex hidden gap-[14.4px] items-center'>
                    <div className="w-[40%] flex justify-center items-center border-[#334D57] bg-backgroundDark border-[1.2px] rounded-[4.8px] h-10 sm:h-12 text-[16px] text-[#CCD3D5]">
                        Twitter
                    </div>
                    <input 
                        value={profileData.twitter}
                        onChange={(e) => {
                            setProfileData(val => {
                            return {...val, [e.target.name]:e.target.value}
                        })}}
                        name='twitter'
                        className="caret-[#42B8BD] w-full border-[#334D57] bg-backgroundDark border-[1.2px] rounded-[4.8px] sm:py-[14.4px] py-3 h-10 sm:h-12 sm:px-[19.2px] px-4 pr-4 focus:outline-none text-[16px] text-[#CCD3D5] placeholder:text-[#667A81]" 
                        placeholder='@'
                    />
                </div>
                <div className='w-full phone:hidden flex gap-[14.4px] items-center'>
                    <div className="w-[40%] flex justify-center items-center border-[#334D57] bg-backgroundDark border-[1.2px] rounded-[4.8px] h-10 sm:h-12 text-[16px] text-[#CCD3D5]">
                        Twitter
                    </div>
                    <input 
                        value={profileData.twitter}
                        onChange={(e) => {
                            setProfileData(val => {
                            return {...val, [e.target.name]:e.target.value}
                        })}}
                        name='twitter'
                        className="caret-[#42B8BD] w-full border-[#334D57] bg-backgroundDark border-[1.2px] rounded-[4.8px] sm:py-[14.4px] py-3 h-10 sm:h-12 sm:px-[19.2px] px-4 pr-4 focus:outline-none text-[16px] text-[#CCD3D5] placeholder:text-[#667A81]" 
                        placeholder='Add link'
                    />
                </div>
            </div>
            <div className='phone:mt-[18px] -mt-3 flex justify-center gap-[9.6px] items-center'>
                <div className='cursor-pointer border-[0.768px] border-[#334D57] flex justify-center items-center p-[6.14px] rounded-[3.072px]'>
                    <Add />
                </div>
                <p className='phone:text-[16.8px] text-[14px] text-[#667A81]'>Add another account</p>
            </div> */}
			{/* <div className='phone:hidden '>
                <p className='text-[16px] text-white font-semibold capitalize'>English proficiency</p>
                <p className='mt-4 text-[#99A6AB]'>Synergyy has a global list of recruiters. Knowing the proficiency level could increase your chance of being reached out to.</p>
                <div 
                    onClick={() => setLanguageDisplay(true)}
                    className="mt-6 cursor-pointer flex justify-between items-center w-full border-[#334D57] bg-backgroundDark border-[1.2px] rounded-[4.8px] sm:py-[14.4px] py-3 h-10 sm:h-12 sm:px-[19.2px] px-4 pr-4  text-[16px] text-[#334D57]"
                >
                    {language ? <p className='text-[#CCD3D5]'>{language}</p> : 'My English skills are'}
                    <Dropdown />
                </div>
            </div> */}
			<div className="my-[26.2px] w-full flex justify-center">
				{isLoading ? (
					<Buttons
						text={""}
						icons={<CircularProgress size={28} sx={{ color: "white" }} />}
						hoverColor={"#FBA599"}
						width={"318px"}
						color="#00141B"
						bgColor={"#FBA599"}
					/>
				) : (
					<Buttons
						padding={"12px 48px"}
						width={"318px"}
						functions={() => handleSubmit("/onboarding/welcome")}
						text={"Next"}
						hoverColor={"#BABABA"}
						bgColor={"#BABABA"}
						color={"#00141B"}
					/>
				)}
			</div>
			{/* <div className='hidden my-[26.2px] phone:my-[38px] w-full phone:flex justify-center'>
                {isLoading ? (
                    <Buttons text={''} icons={<CircularProgress size={28} sx={{ color: 'white' }}/>} hoverColor={'#FBA599'} width={'318px'} color='#00141B' bgColor={'#FBA599'} />
                ): (
                    <Buttons padding={'12px 48px'} width={'318px'} functions={() => handleSubmit('/onboarding/language-proficiency')} text={'Next'} hoverColor={'#BABABA'} bgColor={'#BABABA'} color={'#00141B'}/>
                )}
            </div> */}
			<SelectModal
				open={languageDisplay}
				title={"I can speak"}
				closeModal={() => setLanguageDisplay(false)}
			>
				<LanguageOption
					setLanguage={setLanguage}
					language={language}
					closeModal={() => setLanguageDisplay(false)}
				/>
			</SelectModal>
		</div>
	);
}

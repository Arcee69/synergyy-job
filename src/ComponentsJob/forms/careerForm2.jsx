import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { baseURL } from "../../utils/baseURL";
import SelectModal from "../select-modal";
import  Dropdown  from "../../assets/svg/chevron-down.svg";
import CareerOption from "./careerOption";
import TypeOption from "./typeOption";
import Buttons from "../button";
import { CircularProgress } from "@mui/material";
import CustomizedSwitches from "../switch";

export default function CareerForm2() {
	const navigate = useNavigate();
	const [isLoading, setIsLoading] = useState(false);
	const [years, setYears] = useState(1);
	const [type, setType] = useState("");
	const [style, setStyle] = useState("");
	const [typeDisplay, setTypeDisplay] = useState(false);
	const [styleDisplay, setStyleDisplay] = useState(false);
	const accessToken = localStorage.getItem("access_token");
	const [showDropdown, setShowDropdown] = useState(false);
	const [searchResults, setSearchResults] = useState([]);
	const [searchText, setSearchText] = useState("");
	const [isChecked, setIsChecked] = useState("Actively");

	useEffect(() => {
		if (years < 0) {
			setYears(0);
		}
	}, [years]);

	const filterUniqueJobTitles = (data) => {
		const uniqueTitles = new Set();
		const uniqueData = [];

		for (const item of data) {
			if (!uniqueTitles.has(item.title.toLowerCase())) {
				uniqueTitles.add(item.title.toLowerCase());
				uniqueData.push(item);
			}
		}

		return uniqueData;
	};

	const simulateSearch = async (search) => {
		const apiUrl = `https://api.synergyng.app/v1/opportunities/search`;
		const params = { search_term: search };
		const deviceModel = "web";

		try {
			const response = await axios.get(apiUrl, {
				headers: {
					Authorization: `Bearer ${accessToken}`,
					device_model: deviceModel,
				},
				params,
			});
			const data = response.data.data;
			const uniqueData = filterUniqueJobTitles(data);
			return uniqueData;
		} catch (error) {
			console.error("API call error:", error);
		}
	};

	const handleInputChange = async (e) => {
		const inputValue = e.target.value;
		setSearchText(inputValue);
		setShowDropdown(true);

		try {
			const searchResults = await simulateSearch(inputValue);
			setSearchResults(searchResults);
		} catch (error) {
			console.error("Search error:", error);
		}
	};

	const handleSwitchChange = () => {
		setIsChecked((prev) => (prev === "Actively" ? "" : "Actively"));
	};

	const handleSubmit = async () => {
		console.log(typeof searchText);
		setIsLoading(true);
		if (!searchText && !type && !style && !years) {
			setIsLoading(false);
			return;
		}
		const data = {
			title: searchText,
			job_style_name: type,
			job_type_name: style,
			experience: years.toString(),
			search_status: isChecked,
		};

		try {
			const response = await axios.post(
				`${baseURL}opportunities/save_job_interest`,
				data,
				{
					headers: { Authorization: `Bearer ${accessToken}` },
				}
			);
			if (response.data.status === "success") {
				sessionStorage.setItem("synergyy_career", searchText);
				setIsLoading(false);
				navigate("/onboarding/technical-experience");
			}
		} catch (error) {
			setIsLoading(false);
		}
	};

	return (
		<div className="w-full flex flex-col phone:gap-8 gap-[38px] phone:w-[441px]">
			<div className="flex flex-col phone:gap-[14.4px] gap-3">
				<label className="phone:text-[16.8px] text-[14px] text-[#99A6AB]">
					Job title
				</label>
				<div>
					<input
						type="text"
						placeholder="Product Designer, Accountant..."
						id="name"
						name="title"
						value={searchText}
						onChange={handleInputChange}
						className="caret-[#42B8BD] w-full border-[#334D57] bg-backgroundDark border-[1.2px] rounded-[4.8px] sm:py-[14.4px] py-3 h-10 sm:h-12 sm:px-[19.2px] px-4 pr-4 focus:outline-none text-[16px] text-[#CCD3D5] placeholder:text-[#667A81]"
					/>
					{showDropdown && (
						<div className="bg-backgroundDark w-full">
							{searchResults?.map((s) => {
								return (
									<div
										key={s.id}
										onClick={() => {
											setSearchText(s.title);
											setShowDropdown(false);
										}}
										className="px-[22px] py-4 cursor-pointer rounded-[4px] sm:text-[16px] text-sm text-[#F9FAFB]"
									>
										{s.title}
									</div>
								);
							})}
						</div>
					)}
				</div>
			</div>
			<div className="w-full flex items-center phone:gap-8 gap-2">
				<div className="flex flex-col phone:gap-[14.4px] gap-3 phone:w-[204px] w-[49%]">
					<label className="phone:text-[16.8px] text-[14px] text-[#99A6AB]">
						Job Type
					</label>
					<div
						onClick={() => setStyleDisplay(true)}
						className="cursor-pointer flex justify-between items-center w-full border-[#334D57] bg-backgroundDark border-[1.2px] rounded-[4.8px] sm:py-[14.4px] py-3 h-10 sm:h-12 sm:px-[19.2px] px-4 pr-4 text-[#334D57] text-[16px]"
					>
						{style ? (
							<p className="text-[#ECE2DC]">{style}</p>
						) : (
							<p className="truncate w-[80%]">Fulltime, Contract, etc</p>
						)}
						<Dropdown />
					</div>
				</div>
				<div className="flex flex-col phone:gap-[14.4px] gap-3 phone:w-[204px] w-[49%]">
					<label className="phone:text-[16.8px] text-[14px] text-[#99A6AB]">
						Work style
					</label>
					<div
						onClick={() => setTypeDisplay(true)}
						className="cursor-pointer flex justify-between items-center w-full border-[#334D57] bg-backgroundDark border-[1.2px] rounded-[4.8px] sm:py-[14.4px] py-3 h-10 sm:h-12 sm:px-[19.2px] px-4 pr-4 text-[#334D57] text-[16px]"
					>
						{type ? (
							<p className="text-[#ECE2DC]">{type}</p>
						) : (
							<p className="truncate w-[80%]">Remote, Hybrid, Onsite</p>
						)}
						<Dropdown />
					</div>
				</div>
			</div>
			<div className="flex flex-col phone:gap-[14.4px] gap-3">
				<label className="phone:text-[16.8px] text-[14px] text-[#99A6AB]">
					Experience level
				</label>
				<div className="cursor-pointer flex justify-between items-center w-full border-[#334D57] bg-backgroundDark border-[1.2px] rounded-[4.8px] sm:py-[14.4px] py-3 h-10 sm:h-12 sm:pl-[19.2px] pl-4 text-[16px] text-[#334D57]">
					{years >= 0 && years < 3 && <p>Entry Level</p>}
					{years >= 3 && years < 5 && <p>Intermediate Level</p>}
					{years >= 5 && <p>Advanced Level</p>}

					<div className="flex sm:gap-[41px] gap-[30px] items-center">
						<div
							onClick={() => setYears(years + 1)}
							className="px-4 sm:h-12 h-10 flex justify-center items-center rounded-[4px] border border-[#334D57] text-[16px] font-semibold text-[#F9FAFB]"
						>
							+
						</div>
						<p className="text-[16px] font-semibold text-[#F9FAFB]">{years}</p>
						<div
							onClick={() => setYears(years - 1)}
							className="px-4 sm:h-12 h-10 flex justify-center items-center rounded-[4px] border border-[#334D57] text-[16px] font-semibold text-[#F9FAFB]"
						>
							-
						</div>
					</div>
				</div>
			</div>

			<p className="text-[16px] text-[#CCD3D5]">Job Search status</p>
			<div className="-mt-[17.6px] flex justify-between w-full items-center">
				<p className="text-[16.8px] text-[#ECE2DC]">I’m actively searching</p>
				<CustomizedSwitches
					checked={isChecked === "Actively"}
					onChange={handleSwitchChange}
				/>
			</div>

			<div className="my-6 w-full flex justify-center">
				{isLoading ? (
					<Buttons
						padding={"12px 48px"}
						width={"318px"}
						text={""}
						icons={<CircularProgress size={28} sx={{ color: "white" }} />}
						bgColor={"#FBA599"}
						color={"#00141B"}
						boxShadow="0px 4px 24px 2px rgba(251,165,153,0.44)"
					/>
				) : (
					<Buttons
						padding={"12px 48px"}
						width={"318px"}
						functions={handleSubmit}
						text={"Save & Continue"}
						hoverColor={
							searchText && type && style && years >= 0 ? "#FBA599" : "#BABABA"
						}
						bgColor={
							searchText && type && style && years >= 0 ? "#FBA599" : "#BABABA"
						}
						color={"#00141B"}
						boxShadow="0px 4px 24px 2px rgba(251,165,153,0.44)"
					/>
				)}
			</div>

			<SelectModal
				open={styleDisplay}
				title={"What type of job are you looking for?"}
				closeModal={() => setStyleDisplay(false)}
			>
				<CareerOption
					setStyle={setStyle}
					style={style}
					closeModal={() => setStyleDisplay(false)}
				/>
			</SelectModal>

			<SelectModal
				open={typeDisplay}
				title={"How would you like to work?"}
				closeModal={() => setTypeDisplay(false)}
			>
				<TypeOption
					setType={setType}
					type={type}
					closeModal={() => setTypeDisplay(false)}
				/>
			</SelectModal>
		</div>
	);
}

{
	/* <select 
    onChange={(e) => {
        setCareerData(val => {
            return {...val, [e.target.name]:e.target.value}
        })
    }}
    name='search_status'
    className="focus:outline-none phone:-mt-2 -mt-[14px] cursor-pointer flex justify-between items-center w-full border-[#334D57] bg-backgroundDark border-[1.2px] rounded-[4.8px] sm:py-[14.4px] h-10 sm:h-12 sm:px-[19.2px] px-4 pr-4  text-[16px] text-[#334D57]"
>
    <option value={''} className=''>I’m searching...</option>
    <option value="Actively">Actively</option>
</select> */
}
{
	/* <div className='flex flex-col phone:gap-[14.4px] gap-3'>
    <label className='phone:text-[16.8px] text-[14px] text-[#99A6AB]'>Salary goal (Monthly) </label>
    <div className='w-full flex gap-1'>
        <div 
            className="cursor-pointer flex justify-between items-center w-[15%] border-[#334D57] bg-backgroundDark border-[1.2px] rounded-[4.8px] sm:py-[14.4px] py-3 h-10 sm:h-12 sm:px-[19.2px] px-4 pr-4  text-[16px] text-[#334D57]"
        >
            <Currency className='w-[60%]'/>
            <Dropdown className='flex-1'/>
        </div>
        <input 
            name="salary_range"
            value={careerData.salary_range}
            onChange={(e) => {
                setCareerData(val => {
                    return {...val, [e.target.name]:e.target.value}
                })
            }}
            className="caret-[#42B8BD] focus:outline-none text-[#CCD3D5] placeholder:text-[#667A81] flex-1 border-[#334D57] bg-backgroundDark border-[1.2px] rounded-[4.8px] sm:py-[14.4px] py-3 h-10 sm:h-12 sm:px-[19.2px] px-4 pr-4 text-[16px]"
            type="number"
        />
    </div>
</div> */
}

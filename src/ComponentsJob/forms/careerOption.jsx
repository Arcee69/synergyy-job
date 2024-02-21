import React from "react";
import { Radio } from "@mui/material";
import Checkbox from '@mui/material/Checkbox';

export default function CareerOption({ setStyle, style, closeModal }) {
	const CheckedIcon = () => {
		return (
			<div className="w-7 h-7 rounded-[3px] flex justify-center items-center">
				<div className="bg-[#42B8BD] rounded-[3px] w-[21px] h-[21px]"></div>
			</div>
		);
	};

	// import * as React from 'react';
	// import Checkbox from '@mui/material/Checkbox';

	// export default function ControlledCheckbox() {
	//   const [checked, setChecked] = React.useState(true);

	//   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
	//     setChecked(event.target.checked);
	//   };

	//   return (
	//     <Checkbox
	//       checked={checked}
	//       onChange={handleChange}
	//       inputProps={{ 'aria-label': 'controlled' }}
	//     />
	//   );
	// }

	return (
		<div className="flex flex-col phone:gap-[19.2px] gap-4">
			{/* <div className="flex phone:gap-[14.4px] gap-3 items-center">
				<Checkbox
					sx={{
						height: 28,
						width: 28,
						borderRadius: "20%",
						border: "3px solid #FFFFFF",
						background: "#00141B",
					}}
					checkedIcon={<CheckedIcon />}
					checked={style === "Full time"}
					onClick={() => {
						setStyle("Full time");
						closeModal();
					}}
					name="radio-buttons"
					inputProps={{ "aria-label": "A" }}
				/>

				<p className="phone:text-[19.2px] text-[16px] font-medium text-[#CCD3D5]">
					Full time check
				</p>
			</div> */}

			<div className="flex phone:gap-[14.4px] gap-3 items-center">
				<Radio
					sx={{
						height: 28,
						width: 28,
						borderRadius: "20%",
						border: "3px solid #FFFFFF",
						background: "#00141B",
					}}
					checkedIcon={<CheckedIcon />}
					checked={style === "Full time"}
					onClick={() => {
						setStyle("Full time");
						closeModal();
					}}
					name="radio-buttons"
					inputProps={{ "aria-label": "A" }}
				/>
				<p className="phone:text-[19.2px] text-[16px] font-medium text-[#CCD3D5]">
					Full time
				</p>
			</div>

			<div className="flex phone:gap-[14.4px] gap-3 items-center">
				<Radio
					sx={{
						height: 28,
						width: 28,
						borderRadius: "20%",
						border: "3px solid #FFFFFF",
						background: "#00141B",
					}}
					checkedIcon={<CheckedIcon />}
					checked={style === "Part time"}
					onClick={() => {
						setStyle("Part time");
						closeModal();
					}}
					name="radio-buttons"
					inputProps={{ "aria-label": "A" }}
				/>
				<p className="phone:text-[19.2px] text-[16px] font-medium text-[#CCD3D5]">
					Part time
				</p>
			</div>

			<div className="flex phone:gap-[14.4px] gap-3 items-center">
				<Radio
					sx={{
						height: 28,
						width: 28,
						borderRadius: "20%",
						border: "3px solid #FFFFFF",
						background: "#00141B",
					}}
					checkedIcon={<CheckedIcon />}
					checked={style === "Contract"}
					onClick={() => {
						setStyle("Contract");
						closeModal();
					}}
					name="radio-buttons"
					inputProps={{ "aria-label": "A" }}
				/>
				<p className="phone:text-[19.2px] text-[16px] font-medium text-[#CCD3D5]">
					Contract
				</p>
			</div>
			<div className="flex phone:gap-[14.4px] gap-3 items-center">
				<Radio
					sx={{
						height: 28,
						width: 28,
						borderRadius: "20%",
						border: "3px solid #FFFFFF",
						background: "#00141B",
					}}
					checkedIcon={<CheckedIcon />}
					checked={style === "Internships"}
					onClick={() => {
						setStyle("Internships");
						closeModal();
					}}
					name="radio-buttons"
					inputProps={{ "aria-label": "A" }}
				/>
				<p className="phone:text-[19.2px] text-[16px] font-medium text-[#CCD3D5]">
					Internship
				</p>
			</div>
		</div>
	);
}

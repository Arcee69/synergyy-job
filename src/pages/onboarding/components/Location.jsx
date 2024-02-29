import React, { useState, useEffect } from 'react'
import { SlLocationPin } from 'react-icons/sl';

import { allLocation } from "../../../helpers/countries";
import { CgSpinner } from 'react-icons/cg';
import { toast } from 'react-toastify';
import axios from 'axios';

const Location = ({ handleChangeButton }) => {
    const [locationClicked, setLocationClicked] = useState(false);
    const [errorCountry, setErrorCountry] = useState(false);
    const [allCountries, setAllCountries] = useState([]);
    const [searchCountry, setSearchCountry] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSelectCountry = (location) => {
        setSearchCountry(location);
        setLocationClicked(false)
      };
    
      function searchCountries(searchTerm) {
        const lowerCaseSearchTerm = searchTerm.toLowerCase();
    
        const matchingCountries = allLocation.filter((country) =>
          country.toLowerCase().includes(lowerCaseSearchTerm)
        );
    
        console.log(matchingCountries, "sos");
    
        setAllCountries(matchingCountries);
        
      }
    
      useEffect(() => {
        searchCountries(searchCountry);
      }, [searchCountry]);

      const count = localStorage.getItem("count");
      const searchJobs = localStorage.getItem("searchJobs")

    //For Submitting the Form
  const submitForm = async () => {
    if (searchCountry === "") {
      setErrorCountry("Country is required");
    } else {
      setLoading(true);
     
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Methods": "*",
          "Access-Control-Allow-Credentials": true,
          "Authorization": `Bearer ${token}`,
        },
      };

      const data = {
        interests: [
          {
            title: searchJobs,
            experience: count,
            location: searchCountry,
          },
        ],
      };
      await axios
        .post(
          "https://api.synergyng.app/v1/opportunities/save_multiple_job_interests",
          data,
          config
        )
        .then((res) => {
          setLoading(false);
          handleChangeButton(3);
          window.scroll(0, 0);
          toast(`${res?.data?.message}`, {
            position: "top-right",
            autoClose: 3500,
            closeOnClick: true,
          });
         
          console.log(res,'test')
          
        })
        .catch((err) => {
          console.log(err, "err");
          setLoading(false);
          toast(`${err?.data?.message}`, {
            position: "top-right",
            autoClose: 3500,
            closeOnClick: true,
          });
        });
    }
  };  

  return (
    <div className="mt-6 flex flex-col items-center gap-10">
        <div className="w-[350px] gap-[6px] flex flex-col items-start lg:items-center">
            <p className="text-[#28767C] font-semibold font-mont text-[15px]">
            CAREER TRACK
            </p>
            <p className="text-[24px] lg:text-xl lg:leading-[32px] text-[#00141B] font-mont font-bold">
                Where are you located?
            </p>
            <p className="text-[#00212D] lg:text-[#667A81] text-base font-mont text-left lg:text-center">
                Get matched with opportunities that fit your future goals.
            </p>
        </div>
        <div className='flex flex-col w-full gap-8'>
            <div className="flex flex-col gap-3.5">
                <label
                    htmlFor="city"
                    className="font-mont font-medium text-[#000709] lg:text-[#334D57] text-sm lg:text-base"
                >
                    What Country do you reside in
                </label>
                <div className="outline-none flex items-center gap-3 w-full lg:w-[420px] rounded-[4px] bg-[#F9FAFB] border  border-[#CCC] p-3 h-[48px] border-solid ">
                <SlLocationPin className="text-[#667A81] w-[21.6px] h-[21.6px]" />
                <input
                    name="country"
                    placeholder="Type in a country"
                    type="text"
                    value={searchCountry}
                    onChange={(e) => {
                    const inputText = e.target.value;
                    setSearchCountry(inputText);

                    if (searchCountry) {
                        setLocationClicked(false);
                        }
                    // const filteredCountries = allLocation.filter(job => job.toLowerCase().includes(inputText.toLowerCase()));
                    // console.log(filteredCountries, "lamba")
                    // setAllCountries(filteredCountries);
                    }}
                    className="border-none bg-[#F9FAFB] w-full outline-none"
                />
                </div>
                {allCountries.length > 0 ? <div
                style={{ marginTop: "1%" }}
                className={`${
                    searchCountry === "" ||
                    (searchCountry === ""
                                ? "hidden"
                                : locationClicked && searchCountry !== "")
                    ? "hidden"
                    : "w-full lg:w-[420px] p-2.5 h-[100px] bg-[#F9FAFB] overflow-y-scroll absolute p-2 top-[auto] translate-y-[76%] "
                }`}
                >
                {allCountries?.map((location, index) => {
                    return (
                    <p
                        key={index}
                        onClick={() => {
                        handleSelectCountry(location);
                        setLocationClicked(true)
                        }}
                        className="cursor-pointer my-[14px] mx-[26px] "
                    >
                        {location}
                    </p>
                    );
                })}
                </div>: ''}
                {errorCountry && (
                <p style={{ color: "red", fontSize: "14px" }}>{errorCountry}</p>
                )}
            </div>
            <button
                className={`${
                    !searchCountry  ? "bg-[#BABABA]" : "bg-[#FBA599]"
                } w-full lg:w-[420px] mt-[140px] lg:mt-0 font-mont flex items-center border border-[#000709] rounded-[6px] justify-center  h-[46px]  text-base text-center`}
                type="submit"
                disabled={loading}
                onClick={() => submitForm()}
            >
                <p className="text-[#00141B] text-base font-semibold">
                {loading ? (
                    <CgSpinner className=" animate-spin text-lg " />
                ) : (
                    "Save & Continue"
                )}
                </p>
            </button>

        </div>

    </div>
  )
}

export default Location
import React, { useState, useEffect } from 'react'
import { SlLocationPin } from 'react-icons/sl';

import { allLocation } from "../../../helpers/countries";
import { CgSpinner } from 'react-icons/cg';
import { toast } from 'react-toastify';
import axios from 'axios';
import { Progress } from 'antd';

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

      // const count = localStorage.getItem("count");
      // const searchJobs = localStorage.getItem("searchJobs")

    //For Submitting the Form
  const submitForm = async () => {
    if (searchCountry === "") {
      setErrorCountry("Country is required");
    } else {
      setLoading(true);
      localStorage.setItem("searchCountry",  searchCountry)
      handleChangeButton(2);
     
    //   const token = localStorage.getItem("token");
    //   const config = {
    //     headers: {
    //       "Content-Type": "application/json",
    //       "Access-Control-Allow-Methods": "*",
    //       "Access-Control-Allow-Credentials": true,
    //       "Authorization": `Bearer ${token}`,
    //     },
    //   };

    //   const data = {
    //     interests: [
    //       {
    //         title: searchJobs,
    //         experience: count,
    //         location: searchCountry,
    //       },
    //     ],
    //   };
    //   await axios
    //     .post(
    //       "https://api.synergyng.app/v1/opportunities/save_multiple_job_interests",
    //       data,
    //       config
    //     )
    //     .then((res) => {
    //       setLoading(false);
    //       handleChangeButton(3);
    //       window.scroll(0, 0);
    //       toast(`${res?.data?.message}`, {
    //         position: "top-right",
    //         autoClose: 3500,
    //         closeOnClick: true,
    //       });
         
    //       console.log(res,'test')
          
    //     })
    //     .catch((err) => {
    //       console.log(err, "err");
    //       setLoading(false);
    //       toast(`${err?.data?.message}`, {
    //         position: "top-right",
    //         autoClose: 3500,
    //         closeOnClick: true,
    //       });
    //     });
     }
  };  

  return (
    <div className="flex flex-col w-full lg:w-[632px] lg:h-[510px] rounded-lg lg:mt-6 bg-[#fff]  lg:mx-[90px]  gap-4">
      <div className='flex justify-end my-4 mr-4'>
        <div className='flex items-center relative gap-2'>
          <p className='text-[#667A81] absolute right-4 font-mont font-semibold'>1/6</p>
          <Progress type="circle" percent={13} showInfo={false} size={52} strokeColor="#29CFD6" />
        </div>
      </div>
      <div className='flex flex-col justify-center mx-1 items-center gap-10'>
        <div className="gap-[6px] w-full lg:w-[420px] flex flex-col items-start ">
            <p className="text-[24px]  lg:leading-[28px] text-[#00141B] font-mont font-bold">
                Where are you located
            </p>
            <p className="text-[#667A81] text-lg font-mont text-left">
                Get matched with opportunities that fit your future goals.
            </p>
        </div>
        <div className='flex flex-col w-full lg:w-[420px] gap-8'>
            <div className="flex flex-col gap-3.5">
                <label
                    htmlFor="city"
                    className="font-mont font-medium text-[#000709] lg:text-[#043246] text-sm"
                >
                    What Country do you reside in
                </label>
                <div className="outline-none flex items-center gap-3 w-full lg:w-[420px] rounded-[4px] bg-[#FFF] border  border-[#CCC] p-3 h-[48px] border-solid ">
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
                      className="border-none bg-[#FFF] w-full outline-none"
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
                    !searchCountry  ? "bg-[#BABABA]" : "bg-[#FDB181]"
                } w-full lg:w-[420px]  font-mont flex items-center border border-[#000709] rounded-[6px] justify-center  h-[46px]  text-base text-center`}
                type="submit"
                disabled={loading}
                onClick={() => submitForm()}
            >
                <p className="text-[#00141B] text-base font-semibold">
                {loading ? (
                    <CgSpinner className=" animate-spin text-lg " />
                ) : (
                    "Continue"
                )}
                </p>
            </button>

        </div>

      </div>

    </div>
  )
}

export default Location
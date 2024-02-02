import React, { useEffect, useState } from "react";
import { CgSpinner } from "react-icons/cg";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { SlLocationPin } from "react-icons/sl";
import { toast } from "react-toastify";
import axios from "axios";
import { Skeleton } from "@mui/material";

import { api } from "../../../services/api";
import { appUrls } from "../../../services/urls";
import { allLocation } from "../../../helpers/countries";

const Track = ({ handleChangeButton }) => {
  const [loading, setLoading] = useState(false);
  const [loadingJobs, setLoadingJobs] = useState(false);
  const [count, setCount] = useState(0);
  const [allJobs, setAllJobs] = useState([]);
  const [searchJobs, setSearchJobs] = useState("");
  const [errorJobs, setErrorJobs] = useState("");
  const [allCountries, setAllCountries] = useState([]);
  const [searchCountry, setSearchCountry] = useState("");
  const [clicked, setClicked] = useState(false);
  const [locationClicked, setLocationClicked] = useState(false);
  const [errorCountry, setErrorCountry] = useState(false);
  const [experience, setExperience] = useState("");


  //For Jobs
  const fetchJobs = async () => {
    setLoadingJobs(true)
    try {
      const res = await api.get(
        appUrls?.FETCH_JOBS_URL + `?search_term=${searchJobs}`
      );
      setLoadingJobs(false)
      console.log(res, "res");
      const jobs = res?.data?.data;
      setAllJobs(jobs);
    } catch (error) {
        setLoadingJobs(false)
      console.error(error);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, [searchJobs]);

  const handleSelectJob = (jobTitle) => {
    setSearchJobs(jobTitle);
  };


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

  // For Experience
  function calculateExperienceLevel(yearsOfExperience) {
    if (yearsOfExperience <= 1) {
      return setExperience("Entry Level");
    } else if (yearsOfExperience <= 3) {
      return setExperience("Intermediate");
    } else if (yearsOfExperience <= 5) {
      return setExperience("Advanced");
    } else {
      return setExperience("Expert");
    }
  }

  useEffect(() => {
    calculateExperienceLevel(count);
  }, [count]);

  //For Submitting the Form
  const submitForm = async () => {
    if (searchJobs === "") {
      setErrorJobs("Job is required");
    } else if (searchCountry === "") {
      setErrorCountry("Country is required");
    } else {
      setLoading(true);
      //let formData = new FormData();
      // formData.append('title', searchJobs);
      // formData.append('experience', count);
      // await api.post(appUrls?.SAVE_JOB_URL, formData)
      const token = sessionStorage.getItem("token");
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
          handleChangeButton("Credentials");
          window.scroll(0, 0);
          setCount(0);
          console.log(res,'test')
          
        })
        .catch((err) => {
          console.log(err, "err");
          setLoading(false);
          toast(`${err?.data?.message}`, {
            position: "top-right",
            autoClose: 5000,
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
          What is your desired job role?
        </p>
        <p className="text-[#00212D] lg:text-[#667A81] text-base font-mont text-left lg:text-center">
          Get matched with opportunities that fit your future goals.
        </p>
      </div>
      <div>
        <div className="flex ">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-3.5 relative">
              <label
                htmlFor="jobTitle"
                className="font-mont font-medium text-[#000709] lg:text-[#334D57] text-sm lg:text-base"
              >
                Job Title
              </label>
              <input
                name="jobTitle"
                placeholder="Product Designer, Accountant..."
                type="text"
                value={ searchJobs} //
                onChange={(e) => {
                  const inputText = e.target.value;
                  setSearchJobs(inputText);

                  if (searchJobs) {
                    setClicked(false);
                  }

                  // Filter jobs based on the input text
                  const filteredJobs = allJobs.filter((job) =>
                    job.toLowerCase().includes(inputText.toLowerCase())
                  );
                  // setAllJobs(filteredJobs);
                }}
                className="outline-none w-[350px] rounded-[4px] bg-[#F9FAFB] border  border-[#CCC] p-3 h-[48px] border-solid "
              />
             {allJobs.length > 0 ?  <div
             style={{    zIndex: "999999999"  }}
                className={`
                            ${
                              searchJobs === ""
                                ? "hidden"
                                : clicked && searchJobs !== ""
                                ? "hidden"
                                : "w-[350px] p-2.5 h-[165px] bg-[#F9FAFB] overflow-y-scroll absolute top-[100%]"
                            }
                        `}
              >
                {allJobs.map((job, index) => (
                  <p
                    key={index}
                    onClick={() => {
                      handleSelectJob(job?.title);
                      setClicked(true);
                    }}
                    className="cursor-pointer my-[14px] mx-[26px] "
                    >
                    {loadingJobs ? <Skeleton variant="rectangular" width={200} height={20} style={{ backgroundColor: '#0000004d'  }}/> : job?.title}
                  </p>
                ))}
              </div>: ''}
              {errorJobs && (
                <p style={{ color: "red", fontSize: "14px" }}>{errorJobs}</p>
              )}
            </div>
            <div className="flex flex-col gap-3.5">
              <label
                htmlFor="title"
                className="font-mont font-medium text-[#000709] lg:text-[#334D57] text-sm lg:text-base"
              >
                Experience level
              </label>
              <div className="outline-none rounded-[4px] flex justify-between  w-[350px] bg-[#F9FAFB] border border-[#CCC] h-[48px] border-solid">
                <p className="w-[144px] p-3 font-mont text-base text-[#000709]">
                  {experience}
                </p>
                <div className="flex ">
                  <button
                    disabled={count === 0 ? true : false}
                    type="button"
                    onClick={() => setCount(count - 1)}
                    className=" w-[67px] border rounded-[4px] flex justify-center items-center border-r-0 border-y-0 border-[#CCC]"
                  >
                    <FaMinus className="font-medium text-[#00212D] text-base" />
                  </button>
                  <input
                    name="level"
                    disabled
                    placeholder="0"
                    type="number"
                    value={count}
                    className="w-[67px] text-[#00212D] text-lg font-semibold text-center border border-r-0 border-y-0 border-[#CCC]"
                  />
                  <button
                    type="button"
                    disabled={count === 10 ? true : false}
                    onClick={() => setCount(count + 1)}
                    className="w-[67px] border border-r-0 border-y-0 flex justify-center items-center border-[#CCC]"
                  >
                    <FaPlus className="font-medium text-[#00212D] text-base" />
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3.5">
              <label
                htmlFor="country"
                className="font-mont font-medium text-[#000709] lg:text-[#334D57] text-sm lg:text-base"
              >
                What Country do you reside in
              </label>
              <div className="outline-none flex items-center gap-3 w-[350px] rounded-[4px] bg-[#F9FAFB] border  border-[#CCC] p-3 h-[48px] border-solid ">
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
                    : "w-[350px] p-2.5 h-[100px] bg-[#F9FAFB] overflow-y-scroll absolute p-2 top-[auto] translate-y-[76%] "
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
                !searchCountry && !searchJobs ? "bg-[#BABABA]" : "bg-[#FBA599]"
              } w-[350px] mt-[140px] lg:mt-0 font-mont flex items-center border border-[#000709] rounded-[6px] justify-center  h-[46px]  text-base text-center`}
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
      </div>
    </div>
  );
};

export default Track;

import React, { useEffect, useState } from "react";
import { CgSpinner } from "react-icons/cg";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { toast } from "react-toastify";
import axios from "axios";
import { Skeleton } from "@mui/material";
import { IoArrowBackSharp } from "react-icons/io5";

import { api } from "../../../services/api";
import { appUrls } from "../../../services/urls";
import { Progress } from "antd";
import { useNavigate } from "react-router-dom";


const Track = ({ handleChangeButton }) => {
  const [loading, setLoading] = useState(false);
  const [loadingJobs, setLoadingJobs] = useState(false);
  const [count, setCount] = useState(0);
  const [allJobs, setAllJobs] = useState([]);
  const [searchJobs, setSearchJobs] = useState("");
  const [errorJobs, setErrorJobs] = useState("");
  
  const [clicked, setClicked] = useState(false);

  const [experience, setExperience] = useState("");

  const navigate = useNavigate()

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


  

  // For Experience
  function calculateExperienceLevel(yearsOfExperience) {
    if (yearsOfExperience <= 1) {
    return setExperience("Entry Level");
    } else if (yearsOfExperience <= 2) {
    return setExperience("Intermediate");
    } else if (yearsOfExperience <= 4) {
    return setExperience("Mid Level");
    } else if (yearsOfExperience <= 8) {
    return setExperience("Expert");
    } else {
    return setExperience("Executive");
    }
  }

  useEffect(() => {
    calculateExperienceLevel(count);
  }, [count]);

  const searchCountry = localStorage.getItem("searchCountry");

  //For Submitting the Form
  const submitForm = async () => {
    if (searchJobs === "") {
      setErrorJobs("Job is required");
    }  else {
      // localStorage.setItem("searchJobs",  searchJobs)
      // localStorage.setItem("count",  count)
      setLoading(true);
      handleChangeButton(3);
      window.scroll(0, 0)
     
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
        
          window.scroll(0, 0);
          setCount(0);
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
    <div className="flex flex-col w-full lg:w-[632px] lg:p-10 rounded-lg lg:mt-6 bg-[#fff] lg:mx-[90px]  gap-4">

      <div className='flex justify-between mr-4'>
        <div className="flex items-center gap-2" onClick={() => navigate(-1)}>
          <IoArrowBackSharp className="w-[16px] h-[12px]" />
          <p className="font-mont text-[#00141B] text-base">back</p>
        </div>
        <div className='flex items-center relative gap-2'>
          <p className='text-[#667A81] absolute right-4 font-mont font-semibold'>2/6</p>
          <Progress type="circle" percent={26} showInfo={false} size={52} strokeColor="#29CFD6" />
        </div>
      </div>

      <div className='flex flex-col justify-center mx-1 items-center gap-10'>
        <div className="gap-[6px] w-full lg:w-[420px] flex flex-col items-start ">
          <p className="lg:text-[24px] text-base lg:leading-[28px] text-[#00141B] font-mont font-bold">
            What is your desired job role?
          </p>
          <p className="text-[#667A81] text-sm lg:text-lg font-mont text-left">
            Get matched with opportunities that fit your future goals.
          </p>
        </div>

        <div className="w-full lg:w-[420px]">
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
                className="outline-none w-full lg:w-[420px] rounded-[4px] bg-[#FFF] border  border-[#CCC] p-3 h-[48px] border-solid "
              />
            {allJobs.length > 0 ?  <div
            style={{    zIndex: "999999999"  }}
                className={`
                            ${
                              searchJobs === ""
                                ? "hidden"
                                : clicked && searchJobs !== ""
                                ? "hidden"
                                : "w-full lg:w-[420px] p-2.5 h-[165px] bg-[#F9FAFB] overflow-y-scroll absolute top-[100%]"
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
              <div className="outline-none rounded-[4px] flex justify-between w-full lg:w-[420px] bg-[#FFF] border border-[#CCC] h-[48px] border-solid">
                
                <div className="flex mx-2 items-center ">
                  <button
                    disabled={count === 0 ? true : false}
                    type="button"
                    onClick={() => setCount(count - 1)}
                    className="  w-[32px] h-[32px] border rounded-[6px] flex justify-center items-center  border-[#E5E5E5]"
                  >
                    <FaMinus className="font-medium text-[#00212D] text-base" />
                  </button>
                  <input
                    name="level"
                    disabled
                    placeholder="0"
                    type="number"
                    value={count}
                    className="w-[50px] text-[#00212D] flex justify-center items-center px-2 text-lg font-semibold text-center"
                  />
                  <button
                    type="button"
                    disabled={count === 10 ? true : false}
                    onClick={() => setCount(count + 1)}
                    className="w-[32px] h-[32px] border flex rounded-[6px] justify-center items-center border-[#CCC]"
                  >
                    <FaPlus className="font-medium text-[#00212D] text-base" />
                  </button>
                </div>
                  <p className="w-[144px] p-3 font-mont text-base text-[#000709]">
                    {experience}
                  </p>
              </div>
            </div>
          
            <button
              className={`${
              !searchJobs ? "bg-[#BABABA]" : "bg-[#FDB181]"
              } w-full lg:w-[420px] font-mont flex items-center border border-[#000709] rounded-[6px] justify-center  h-[46px]  text-base text-center`}
              type="submit"
              disabled={loading}
              onClick={() => submitForm()}
            >
              <p className="text-[#00141B] text-base font-semibold">
                {loading ? (
                  <CgSpinner className=" animate-spin text-lg " />
                ) : (
                  "Next"
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

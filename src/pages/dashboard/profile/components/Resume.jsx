import React, { useEffect, useState } from 'react'
import { IoDocumentTextOutline } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { Progress } from 'antd';
import { RiDeleteBinLine } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';
import { CgSpinner } from 'react-icons/cg';

import Upload from "../../../../assets/img/small_upload.png"
import Success from "../../../../assets/img/success_check.png"
import Bin from "../../../../assets/img/bin.png"
import { getAllDocuments } from '../../../../features/resume/getAllDocumentsSlice';
import { uploadAllDocuments } from '../../../../features/resume/uploadAllDocumentSlice';
import { deleteDocument } from '../../../../features/resume/deleteDocumentSlice';



const Resume = () => {
  const [error, setError] = useState('');
  const [additionalFileError, setAdditionalFileError] = useState('');
  const [text, setText] = useState("")
  const [fileUpload, setFileUpload] = useState(null);
  const [additionalFileUpload, setAdditionalFileUpload] = useState(null);
  const [file, setFile] = useState(null);
  const [showFileSize, setShowFileSize] = useState();
  const [progress, setProgress] = useState(0)


  const dispatch = useDispatch();

  const document = [
    { 
      name: "Resume.PDF",
      size: "500kb"
    }
  ]

  console.log(file, "file")
  const getDocuments = useSelector(state => state.getAllDocuments)
  const getUserDocuments = getDocuments?.data?.data
   console.log(getDocuments, "getAllDocuments")

   const { loading } = useSelector(state => state.uploadAllDocument)

   const navigate = useNavigate()

  useEffect(() => {
    dispatch(getAllDocuments())
  }, [loading])

  const uploadFile = () => {
    let formData  = new FormData()
    formData.append("document_type", `${text ? text : "document"}`)
    formData.append("file", file)

    dispatch(uploadAllDocuments(formData))
    .then((res) => {
      console.log(res, "salo")
      if(res?.meta?.requestStatus === "fulfilled") {
        setFile(null)
        setFileUpload(null)
        setAdditionalFileUpload(null)
        navigate("/profile")
      }
    })
  }

  const formatFileSize = (sizeInBytes) => {
    const units = ['Bytes', 'KB', 'MB', 'GB', 'TB'];

    let size = sizeInBytes;
    let unitIndex = 0;

    while (size >= 1024 && unitIndex < units.length - 1) {
        size /= 1024;
        unitIndex++;
    }

    return setShowFileSize(`${size.toFixed(2)} ${units[unitIndex]}`);
};

  const handleFileChange = async (event) => {
    const selectedFile = event.target.files[0];
    console.log(selectedFile, "lamba");

    if (selectedFile) {
        // Check if the file type is either PDF or DOC
        if (
            selectedFile.type === 'application/pdf' ||
            selectedFile.type === 'application/msword' ||
            selectedFile.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
        ) {
            setFile(selectedFile);
            const imageUrl = URL.createObjectURL(selectedFile);
            setFileUpload(imageUrl);
            setError('');
        } else {
            setFile(null);
            setError('Please upload a valid PDF or DOC file.');
        }

        // Check file size
        const maxFileSize = 5 * 1024 * 1024; // 5 megabytes in bytes
        if (selectedFile.size > maxFileSize) {
            setError(`File size (${formatFileSize(selectedFile.size)}) exceeds the maximum allowed size (${formatFileSize(maxFileSize)}).`);
        }

        // Return the formatted file size
        return formatFileSize(selectedFile.size);
    }

    // If no file is selected, return null
    return null;
};

const handleAdditionalFileChange = async (event) => {
  const selectedFile = event.target.files[0];
  console.log(selectedFile, "lamba");

  if (selectedFile) {
      // Check if the file type is either PDF or DOC
      if (
          selectedFile.type === 'application/pdf' ||
          selectedFile.type === 'application/msword' ||
          selectedFile.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
      ) {
          setFile(selectedFile);
          const imageUrl = URL.createObjectURL(selectedFile);
          setAdditionalFileUpload(imageUrl);
          setAdditionalFileError('');
      } else {
          setFile(null);
          setAdditionalFileError('Please upload a valid PDF or DOC file.');
      }

      // Check file size
      const maxFileSize = 5 * 1024 * 1024; // 5 megabytes in bytes
      if (selectedFile.size > maxFileSize) {
        setAdditionalFileError(`File size (${formatFileSize(selectedFile.size)}) exceeds the maximum allowed size (${formatFileSize(maxFileSize)}).`);
      }

      // Return the formatted file size
      return formatFileSize(selectedFile.size);
  }

  // If no file is selected, return null
  return null;
}

  const deleteUserDocument = (values) => {
    console.log(values, "lala")
      let formData = new FormData();
      formData.append("document_id", values)

      dispatch(deleteDocument(formData))
  };


  const count = () => {
    if ((progress === 0) && (progress <= 100)) {
      setProgress(prevProgress => prevProgress + 1);
    } else {
      console.log("Progress complete!");
    }
  };

  useEffect(() => {
    const progressInterval = setInterval(count, 2500);
    return () => clearInterval(progressInterval); // Cleanup interval on component unmount
  }, [progress]);



  return (
    <div className="flex lg:w-[732px] flex-col gap-4 mt-4 mb-10">
      <div className='w-full bg-[#fff] rounded p-4 gap-5'>
        <div className='flex flex-col'>
          <p className='font-semibold text-[#1B565B] text-lg font-mont'>Resume</p>
          <p className='text-[#334D57] font-mont text-[15px] '>Upload your CV or resume to provide a comprehensive overview of your professional experience.</p>
        </div>
        {
            fileUpload ? (
              <div className='w-full flex flex-col bg-[#fff] mt-[19px] '>
                <div className='w-full lg:w-[512px] mx-auto  flex flex-col  rounded-lg  border border-dashed border-[#E5E5E5] '> 
                  <div className=' cursor-pointer h-[177px]  flex gap-[5px] flex-col items-center justify-center  rounded-tr-2xl '>
                    <img src={Success} alt='Success' className="w-[44px] h-[44px]"/>
                    <p className='font-inter font-semibold text-sm'>Upload Successful</p>
                    <div className='flex items-center gap-1.5'>
                      <p className='font-inter text-[12px] text-[#99A6AB]'>{file?.name}</p>
                      <div className='h-[10px] w-[1.5px] bg-[#99A6AB]'></div>
                      <p className='text-[12px] text-[#99A6AB] font-inter'>{`${showFileSize}.`}</p>
                      <p className='text-[12px] text-[#99A6AB] font-inter'>{new Date(file?.lastModifiedDate).toDateString().slice(3)}</p>
                    </div>
                    <div className='flex gap-2 items-center'  onClick={() => setFileUpload(null)}>
                      <RiDeleteBinLine className="text-[#F56630] w-[9px] h-[13px]" />
                      <p className='font-semibold text-[#F56630] text-[11px] font-inter'>Clear Upload</p>
                    </div>
                  </div>
              
                </div>
              </div>
              ) : (
                <div className='w-full flex flex-col bg-[#fff] mt-[19px]  '>
                  <div className='w-full lg:w-[512px] mx-auto flex flex-col  rounded-lg  border border-dashed border-[#E5E5E5] '> {/* lg:w-[775px] */}
                    <div className=' cursor-pointer h-[177px]  flex gap-[5px] flex-col items-center justify-center  rounded-tr-2xl '>
                      <img src={Upload} alt='upload' className="w-[44px] h-[44px]"/>
                        <div className='h-[5px] w-full'>
                            <input
                                type="file"
                                multiple={false}
                                accept=".pdf,.doc,.docx"
                                id="fileInput"
                                className='opacity-0'
                                // style={{ display: 'none' }}
                                onChange={handleFileChange}
                            />
                        </div>
                        <div className='flex flex-col items-center'>
                            <p className='text-[#E05712] font-semibold text-xs lg:text-sm font-mont'>Click to upload <span className='font-mont text-[#475367] text-sm'>or drag and drop.</span></p>
                            <p className='text-[#99A6AB] font-inter text-[11px]'>PDF, DOCX (max.5mb)</p>
                        </div>
                    </div>
                    {error && <p style={{ color: 'red', fontSize: "14px" }}>{error}</p>}
                  </div>
                </div>
              )
            
        }

      </div>
      
      {
        // getUserDocuments?.length === 0 ?
        // (
        //   <div className='w-full  gap-[28px] lg:gap-0 flex flex-col lg:flex-row justify-between items-center bg-[#fff] rounded-lg p-4'>
        //     <div className='lg:w-[421px] flex flex-col'>
        //       <p className='font-semibold text-[14px] lg:text-lg font-mont text-[#1B565B]'>Additional documents</p>
        //       <p className='text-[#334D57] font-mont text-[12px] lg:text-[15px]'>Upload additional documents that may help your application here (Cover letter, portfolio, etc)</p>
        //     </div>
        //     <p className='text-[#000709] font-mont font-semibold text-sm cursor-pointer'>Add Document</p>
        //   </div>
        // ) 
        // :
      <div className='flex flex-col gap-[18px]'>
          <div className='w-full  gap-[28px] lg:gap-[19px] flex flex-col  bg-[#fff] rounded-lg py-[15px] px-[9px]'>
            <div className='w-full flex flex-col'>
              <p className='font-semibold text-[14px] lg:text-lg font-mont text-[#1B565B]'>Additional documents</p>
              <p className='text-[#334D57] font-mont text-[12px] lg:text-[15px]'>Upload additional documents that may help your application here (Cover letter, portfolio, etc)</p>
            </div>
            {
              additionalFileUpload ? (
                <div className='w-full flex flex-col bg-[#fff] mt-[19px]  '>
                    <div className='w-full lg:w-[512px] mx-auto  flex flex-col  rounded-lg  border border-dashed border-[#E5E5E5] '> 
                      <div className=' cursor-pointer h-[177px]  flex gap-[5px] flex-col items-center justify-center  rounded-tr-2xl '>
                        <img src={Success} alt='Success' className="w-[44px] h-[44px]"/>
                        <p className='font-inter font-semibold text-sm'>Upload Successful</p>
                        <div className='flex items-center gap-1.5'>
                          <p className='font-inter text-[12px] text-[#99A6AB]'>{file?.name}</p>
                          <div className='h-[10px] w-[1.5px] bg-[#99A6AB]'></div>
                          <p className='text-[12px] text-[#99A6AB] font-inter'>{`${showFileSize}.`}</p>
                          <p className='text-[12px] text-[#99A6AB] font-inter'>{new Date(file?.lastModifiedDate).toDateString().slice(3)}</p>
                        </div>
                        <div className='flex gap-2 items-center'  onClick={() => setAdditionalFileUpload(null)}>
                          <RiDeleteBinLine className="text-[#F56630] w-[9px] h-[13px]" />
                          <p className='font-semibold text-[#F56630] text-[11px] font-inter'>Clear Upload</p>
                        </div>
                      </div>
                  
                    </div>
                </div>
                ) : (
                  <div className='flex flex-col gap-[7px]'>
                    <p>Document Title</p>
                    <input
                      name='document' 
                      placeholder='Title'
                      className='w-full  rounded bg-[#FFF] h-[38px] p-2 border outline-none border-[#cccc]' //lg:w-[775px]
                      onChange={(e) => setText(e.target.value)}
                    />
                    <div className='w-full flex flex-col bg-[#fff] mt-[19px]  '>
                      <div className='w-full lg:w-[512px] mx-auto  flex flex-col  rounded-lg  border border-dashed border-[#E5E5E5] '> 
                        <div className=' cursor-pointer h-[177px]  flex gap-[5px] flex-col items-center justify-center  rounded-tr-2xl '>
                          <img src={Upload} alt='upload' className="w-[44px] h-[44px]"/>
                            <div className='h-[5px] w-full'>
                                <input
                                    type="file"
                                    multiple={false}
                                    accept=".pdf,.doc,.docx"
                                    id="fileInput"
                                    className='opacity-0'
                                    // style={{ display: 'none' }}
                                    onChange={handleAdditionalFileChange}
                                />
                            </div>
                            <div className='flex flex-col items-center'>
                              <p className='text-[#E05712] font-semibold text-xs lg:text-sm font-mont'>Click to upload <span className='font-mont text-[#475367] text-sm'>or drag and drop.</span></p>
                              <p className='text-[#99A6AB] font-inter text-[11px]'>PDF, DOCX (max.5mb)</p>
                            </div>
                        </div>
                        {additionalFileError && <p style={{ color: 'red', fontSize: "14px" }}>{additionalFileError}</p>}
                      </div>
                    </div>
                </div>
                )
            
          }
          

          </div>
          <div className={`${fileUpload ? "hidden" : "" } w-full lg:w-[200px] rounded-lg flex p-[8px] items-center justify-center bg-[#FFEFE6] `}>
            <p className='text-[#FDB181] font-mont font-medium text-sm cursor-pointer'>Add another document</p>
          </div>
      </div>
      }

      <div className='flex justify-end fixed lg:right-[26%] top-[90%]'>
        <button 
          className={`${fileUpload || additionalFileUpload ? "bg-[#FDB181] text-[#00141B]"  : "bg-[#BABABA] text-[#00141B]"} w-[300px] lg:w-[251px] h-[52px] rounded-[4px] border border-[#000709] bg-[#BABABA] flex justify-center items-center`}
          type='button'
          onClick={() => uploadFile() }
        >
          <p className='text-base font-mont font-semibold'>{loading ? <CgSpinner className=" animate-spin text-lg " /> : 'Save & Continue'}</p>
        </button>
      </div>
    </div>
  )
}

export default Resume
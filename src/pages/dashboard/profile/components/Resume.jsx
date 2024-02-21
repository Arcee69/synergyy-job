import React, { useEffect, useState } from 'react'
import { IoDocumentTextOutline } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { Progress } from 'antd';

import Upload from "../../../../assets/img/small_upload.png"
import Bin from "../../../../assets/img/bin.png"
import { getAllDocuments } from '../../../../features/resume/getAllDocumentsSlice';
import { uploadAllDocuments } from '../../../../features/resume/uploadAllDocumentSlice';
import { deleteDocument } from '../../../../features/resume/deleteDocumentSlice';


const Resume = () => {
  const [error, setError] = useState('');
  const [text, setText] = useState("")
  const [fileUpload, setFileUpload] = useState(null);
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
  const getUserDocuments = [] //getDocuments?.data?.data
   console.log(getDocuments, "getAllDocuments")

  useEffect(() => {
    dispatch(getAllDocuments())
  }, [])

  const uploadFile = () => {
    let formData  = new FormData()
    formData.append("document_type", `${text ? text : "document"}`)
    formData.append("file", file)

    dispatch(uploadAllDocuments(formData))
    setFile(null)
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

  const deleteUserDocument = (values) => {
    console.log(values, "lala")
      let formData = new FormData();
      formData.append("document_id", values)

      dispatch(deleteDocument(formData))
  };

  // function countTo100() {
  //   for (let i = 1; i <= 100; i++) {
  //       setProgress(i);
  //   }
  // }

  // useEffect(() => {
  //   countTo100()
  // }, [fileUpload])

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
    <div className="flex flex-col gap-4 mt-4 mb-10">
      <div className='w-full lg:w-[815px] bg-[#fff] rounded p-4 gap-5'>
        <div className='flex flex-col'>
          <p className='font-semibold text-[#1B565B] text-lg font-mont'>Resume</p>
          <p className='text-[#334D57] font-mont text-[15px] '>Upload your CV or resume to provide a comprehensive overview of your professional experience.</p>
        </div>
        {
          getUserDocuments?.length > 0 ?
          getUserDocuments?.map((item, index) => (
                <div key={index} className='mt-[19px] flex justify-between rounded-lg w-full py-[13px] px-[15px] border border-[#CCCCCC] bg-[#F9FAFB]'>
                  <div className='flex items-center gap-[13px]'>
                    <div className='w-[56px] h-[56px] bg-[#fff] rounded-full flex items-center justify-center' >
                        <IoDocumentTextOutline className="w-[24px] h-[24px]" />
                    </div>
                    <div className='flex flex-col gap-1'>
                      <p className='font-mont font-semibold text-[16px] text-[#001A24]'>{item?.name}</p>
                      {/* <p className='font-medium text-[12px] text-[#000D12] font-mont'>{item?.size}</p> */}
                      <p className='font-mont text-sm font-medium text-[#42B8BD]' onClick={() => window.open(item?.url, "_blank") }>Click to view</p>
                      
                    </div>
                  </div>
                  <img src={Bin} alt='delete' className='w-[27px] h-[27px] cursor-pointer' onClick={() => deleteUserDocument(item?.id)} />
                </div>
            ))
            : 
            fileUpload ? (
              <div className='flex flex-col bg-[#fff]'>
              <div className='mt-[19px] flex justify-between rounded-lg w-full py-[13px] px-[15px] border border-[#CCCCCC] bg-[#F9FAFB]'>
                <div className='flex items-center gap-[13px]'>
                  <div className='w-[56px] h-[56px] bg-[#fff] rounded-full flex items-center justify-center' >
                      <IoDocumentTextOutline className="w-[24px] h-[24px]" />
                  </div>
                  <div className='flex flex-col gap-1'>
                    <p className='font-mont font-semibold text-[16px] text-[#001A24]'>{file?.name}</p>
                    <p className='font-medium text-[12px] text-[#000D12] font-mont'>{showFileSize}</p>
                    <p className='font-mont text-sm font-medium text-[#42B8BD]' onClick={() => window.open(item?.url, "_blank") }>Click to view</p>
                    <Progress percent={100} className='w-[150px] lg:w-[500px]' />
                  </div>
                </div>
                <img src={Bin} alt='delete' className='w-[27px] h-[27px] cursor-pointer' onClick={() => setFileUpload(null)} />
              </div>
              <div className='flex justify-end mt-5'>
                <button 
                  onClick={uploadFile}
                  className='w-[151px] h-[52px] rounded-[4px] bg-[#00141B] flex justify-center items-center' type='submit'
                >
                  <p className='text-[#fff] text-base font-mont font-semibold'>Upload</p>
                </button>
              </div>

            </div>
              ) : (
                <div className='w-full flex flex-col bg-[#fff] mt-[19px]  '>
                  <div className='w-full lg:w-[775px] flex flex-col  rounded-lg  border border-[#E3E7E8] '>
                    <div className=' cursor-pointer h-[177px]  flex gap-[5px] flex-col items-center justify-center  rounded-tr-2xl '>
                        <IoDocumentTextOutline className="w-[44px] h-[44px]" />
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
                            <p className='text-[#000709] font-semibold text-xs lg:text-[14.4px] font-mont'>Click to upload or Drag and drop your file here.</p>
                            <p className='text-[#285E6A] font-mont text-[11px]'>5MB max file size. PDF, Docx</p>
                        </div>
                    </div>
                    {error && <p style={{ color: 'red', fontSize: "14px" }}>{error}</p>}
                  </div>
                </div>
              )
            
        }

      </div>
      
      {
        getUserDocuments?.length === 0 ?
        (
          <div className='w-full lg:w-[815px] gap-[28px] lg:gap-0 flex flex-col lg:flex-row justify-between items-center bg-[#fff] rounded-lg p-4'>
            <div className='lg:w-[521px] flex flex-col'>
              <p className='font-semibold text-[14px] lg:text-lg font-mont text-[#1B565B]'>Additional documents</p>
              <p className='text-[#334D57] font-mont text-[12px] lg:text-[15px]'>Upload additional documents that may help your application here (Cover letter, portfolio, etc)</p>
            </div>
            <p className='text-[#000709] font-mont font-semibold text-sm cursor-pointer'>Add Document</p>
          </div>
        ) 
        :
      <div className='flex flex-col gap-[18px]'>
          <div className='w-full lg:w-[815px] gap-[28px] lg:gap-[19px] flex flex-col  bg-[#fff] rounded-lg py-[15px] px-[9px]'>
            <div className='w-full flex flex-col'>
              <p className='font-semibold text-[14px] lg:text-lg font-mont text-[#1B565B]'>Additional documents</p>
              <p className='text-[#334D57] font-mont text-[12px] lg:text-[15px]'>Upload additional documents that may help your application here (Cover letter, portfolio, etc)</p>
            </div>
            {
              fileUpload ? (
                <div className='flex flex-col bg-[#fff]'>
                  <div className='mt-[19px] flex justify-between rounded-lg w-full py-[13px] px-[15px] border border-[#CCCCCC] bg-[#F9FAFB]'>
                    <div className='flex items-center gap-[13px]'>
                      <div className='w-[56px] h-[56px] bg-[#fff] rounded-full flex items-center justify-center' >
                          <IoDocumentTextOutline className="w-[24px] h-[24px]" />
                      </div>
                      <div className='flex flex-col gap-1'>
                        <p className='font-mont font-semibold text-[16px] text-[#001A24]'>{file?.name}</p>
                        <p className='font-medium text-[12px] text-[#000D12] font-mont'>{showFileSize}</p>
                        <p className='font-mont text-sm font-medium text-[#42B8BD]' onClick={() => window.open(item?.url, "_blank") }>Click to view</p>
                        <Progress percent={progress} className='w-[150px] lg:w-[500px]' />
                      </div>
                    </div>
                    <img src={Bin} alt='delete' className='w-[27px] h-[27px] cursor-pointer' onClick={() => setFileUpload(null)} />
                  </div>
                  <div className='flex justify-end mt-5'>
                    <button 
                      onClick={uploadFile}
                      className='w-[151px] h-[52px] rounded-[4px] bg-[#00141B] flex justify-center items-center' type='submit'
                    >
                      <p className='text-[#fff] text-base font-mont font-semibold'>Upload</p>
                    </button>
                  </div>

                </div>
                ) : (
                  <div className='flex flex-col gap-[7px]'>
                  <p>Document Title</p>
                  <input
                    name='document' 
                    className='w-full lg:w-[775px] rounded bg-[#F9FAFB] h-[38px] border outline-none border-[#cccc]'
                    onChange={(e) => setText(e.target.value)}
                  />
                  <div className='w-full flex flex-col bg-[#fff] mt-[19px]  '>
                        <div className='w-full lg:w-[775px] flex flex-col  rounded-lg  border border-[#E3E7E8] '>
                          <div className=' cursor-pointer h-[177px]  flex gap-[5px] flex-col items-center justify-center  rounded-tr-2xl '>
                              <IoDocumentTextOutline className="w-[44px] h-[44px]" />
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
                                  <p className='text-[#000709] font-semibold text-xs lg:text-[14.4px] font-mont'>Click to upload or Drag and drop your file here.</p>
                                  <p className='text-[#285E6A] font-mont text-[11px]'>5MB max file size. PDF, Docx</p>
                              </div>
                          </div>
                          {error && <p style={{ color: 'red', fontSize: "14px" }}>{error}</p>}
                        </div>
                    </div>
                </div>
                )
            
          }
          

          </div>
          <div className={`${fileUpload ? "hidden" : "" } w-full lg:w-[815px] h-[60px] flex justify-center items-center bg-[#fff] `}>
            <p className='text-[#000709] font-mont font-semibold text-sm cursor-pointer'>Add Another Document</p>
          </div>
      </div>
      }


    </div>
  )
}

export default Resume
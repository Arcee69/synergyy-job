import React, { useState } from 'react'
import { IoDocumentTextOutline } from "react-icons/io5";

import Upload from "../../../../assets/img/small_upload.png"

const Resume = () => {
  const [error, setError] = useState('');
  const [file, setFile] = useState(null);
  const [showFileSize, setShowFileSize] = useState()


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

  return (
    <div className="flex flex-col gap-4 mt-4 mb-10">
      <div className='w-full lg:w-[815px] bg-[#fff] rounded p-4 gap-5'>
        <div className='flex flex-col'>
          <p className='font-semibold text-[#1B565B] text-lg font-mont'>Resume</p>
          <p className='text-[#334D57] font-mont text-[15px] '>Upload your CV or resume to provide a comprehensive overview of your professional experience.</p>
        </div>

        <div className='w-full lg:w-[775px] flex flex-col items-center bg-[#fff] rounded-lg  border border-[#E3E7E8] mt-[19px]'>
          <div className=' cursor-pointer h-[177px]  flex gap-[5px] flex-col items-center justify-center  rounded-tr-2xl '>
              {/* <img src={Upload} alt='upload' className='w-[44px] h-[44px]' /> */}
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

      <div className='w-full lg:w-[815px] gap-[28px] lg:gap-0 flex flex-col lg:flex-row justify-between items-center bg-[#fff] rounded-lg p-4'>
        <div className='lg:w-[521px] flex flex-col'>
          <p className='font-semibold text-[14px] lg:text-lg font-mont text-[#1B565B]'>Additional documents</p>
          <p className='text-[#334D57] font-mont text-[12px] lg:text-[15px]'>Upload additional documents that may help your application here (Cover letter, portfolio, etc)</p>
        </div>
        <p className='text-[#000709] font-mont font-semibold text-sm cursor-pointer'>Add Document</p>
      </div>
    </div>
  )
}

export default Resume
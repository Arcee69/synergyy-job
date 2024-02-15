import React, { useState } from 'react'
import { CgSpinner } from 'react-icons/cg'
import { toast } from 'react-toastify'

import Upload from "../../../assets/svg/cloud-upload-a.svg"
import UploadB from "../../../assets/svg/upload_b.svg"
import Delete from "../../../assets/svg/delete.svg"
import { useNavigate } from 'react-router-dom'
import { api } from '../../../services/api'
import { appUrls } from '../../../services/urls'

const Credentials = () => {
    const [loading, setLoading] = useState(false)
    const [fileUpload, setFileUpload] = useState(null);
    const [file, setFile] = useState(null);
    const [error, setError] = useState('');
    const [showFileSize, setShowFileSize] = useState()

    const navigate = useNavigate()


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

    console.log(fileUpload, "fileUpload")

    const submitFile = async() => {
        setLoading(true)
        let formData = new FormData(); 
        formData.append('document_type', "resume");
        formData.append('file', file);

        await api.post(appUrls?.UPLOAD_DOCUMENT_URL, formData)
        .then((res) => {
            console.log(res, "polo")
            setLoading(false)
            // toast(`${res?.data?.message}`, {
            //     position: "top-right",
            //     autoClose: 3500,
            //     closeOnClick: true,
            // });
            navigate("/congratulations")
            window.scroll(0, 0)
        })
        .catch((err) => {
            console.log(err, "err")
            setLoading(false)
            toast(`${err?.data?.message}`, {
                position: "top-right",
                autoClose: 3500,
                closeOnClick: true,
            })
        })
    }

  return (
    <div className='mt-6 flex flex-col items-center gap-10'>
        <div className='w-[350px] gap-[6px] flex flex-col items-start lg:items-center'>
            {fileUpload && window.innerWidth <= 1024 
                ? 
                 <p className='text-[#28767C] font-semibold font-mont text-[13px]'>ADDITIONAL DOCUMENTS</p>
                 :
                 <p className='text-[#28767C] font-semibold font-mont text-[13px] lg:text-[15px]'>CREDENTIALS</p>
            }
            {/* <p className='text-[#28767C] font-semibold font-mont text-[13px] lg:text-[15px]'>CREDENTIALS</p> */}
            <p className='text-2xl lg:text-xl leading-[32px] font-mont font-bold text-[#00141B]'>Submit your resume</p>
            {fileUpload 
                ? (
                    <p className='text-base font-mont text-left lg:text-center text-[#667A81]'>We’ll use this to find opportunities for you.</p>
                ) 
                : (
                    <p className='text-base font-mont text-left lg:text-center text-[#667A81]'>We'll use this to recommend you to employers.</p>
                ) 
            }
        </div>
        {
            fileUpload 
                ? (
                    <div className='flex items-center gap-[9.6px]'>
                        <div className='w-[244.4px] h-[43.2px] rounded-[4.8px] border border-[#ccc] lg:border-none flex items-center justify-between p-2 bg-[#F9FAFB]'>
                            <p className='text-[#000D12] text-base font-mont'>{file?.name?.substring(0, 10)}</p>
                            <p className='text-[#667A81] text-base font-mont'>{showFileSize}</p>
                        </div>
                        <div className='bg-[#CCCCCC] w-[43px] h-[43px] rounded-[4.8px] flex flex-col items-center justify-center'>
                            <img src={UploadB} alt='upload' className='w-6 h-6' />
                        </div>
                        <div className='bg-[#00212D] w-[43px] h-[43px] flex flex-col items-center rounded-[4.8px] justify-center'>
                            <img onClick={() => setFileUpload(null)} src={Delete} alt='delete' className='w-6 h-6' />
                        </div>
                    </div>
                )
                : (
                    <div className='flex flex-col items-center mt-[37px] lg:mt-0'>
                        <div className='w-[162px] cursor-pointer h-[177px] border border-dashed flex gap-[5px] flex-col items-center justify-center border-[#024355] rounded-tr-2xl bg-[#FAFAFA]'>
                            <img src={Upload} alt='upload' className='w-6 h-6' />
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
                                <p className='text-[#000709] font-semibold text-[14.4px] font-mont'>Upload Resume</p>
                                <p className='text-[#285E6A] font-mont text-[11px]'>PDF, DOCX</p>
                                <p className='text-[#285E6A] font-mont text-[11px]'>Max 5 mb</p>
                            </div>
                        </div>
                        {error && <p style={{ color: 'red', fontSize: "14px" }}>{error}</p>}
                    </div>
                ) 
        }
        <div className={`${fileUpload ? "mt-[180px]" : ""} flex mt-[147px] lg:mt-0 flex-col items-center w-[243px] h-[95px] gap-[23px]`}>
            <button
                className={`${fileUpload ? " bg-[#FBA599]" : "bg-[#BABABA]"} w-[318px] lg:w-[350px] font-mont flex items-center lg:border lg:border-[#000709] rounded-[6px] justify-center mt-2 h-[44px] lg:h-[48px] text-base  text-center`}
                type="submit"
                disabled={loading}
                onClick={() => {fileUpload ? submitFile() : null}}
            >
                <p className='text-[#00141B] text-sm font-semibold'>{loading ? <CgSpinner className=" animate-spin text-lg " /> : 'Next'}</p>
            </button>
            {fileUpload ? null :  <p className='text-[#99A6AB] text-base font-semibold' onClick={() => navigate("/congratulations")}>Skip</p>}
        </div>
       
    </div>
  )
}

export default Credentials
import React, { useState, useRef } from 'react'
import  Cloud  from '../../assets/svg/cloud-upload.svg'
import  Add  from '../../assets/svg/add.svg'
import  Bin  from '../../assets/svg/trash 1.svg'
import Buttons from '../button';
import axios from 'axios';
import { baseURL } from '../../utils/baseURL';
import { useNavigate } from 'react-router-dom';
import { CircularProgress } from '@mui/material';

export default function PortfolioForm() {
    const navigate = useNavigate()
    const [others, setOthers] = useState(2);
    const [documentData, setDocumentData] = useState(Array.from({ length: others }, () => ({ name: '', size: '' })));
    const [document, setDocument] = useState(null);
    const [allDocuments, setAllDocuments] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
    const fileInputRef = useRef(null);
    const accessToken = localStorage.getItem('access_token')
    
    const handleSubmit = async () => {
        setIsLoading(true);

        if (!document) {
            setIsLoading(false)
            return;
        }

        const formData = new FormData();
        allDocuments.forEach((doc) => {
            formData.append('files', doc, 'file');
        });

        try {
            const response = await axios.post(`${baseURL}account/documents/upload-multiple`, formData, {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            });
            if (response.data.status === "success") {
                setIsLoading(false)
                navigate('/onboarding/additional-information')
            }
        } catch(error) {
            setIsLoading(false)
            console.error(error, "can't send files")
        }
    }
   
    const handleFileChange = () => {
        setDocument(
            {
                name: fileInputRef.current.files[0].name,
                size: fileInputRef.current.files[0].size
            }
        );
        setAllDocuments([fileInputRef.current.files[0], ...allDocuments])
    };

    const handleAddDocument = () => {
        setOthers((prev) => prev + 1);
        setDocumentData((prev) => [...prev, { name: '', size: '' }]);
    };
    
    const handleFileChangeIndex = (index, event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile) {
            setAllDocuments([selectedFile, ...allDocuments])
            const updatedData = [...documentData];
            updatedData[index] = {
                name: selectedFile.name,
                size: selectedFile.size,
            };
            setDocumentData(updatedData);
        }
    };

    const deleteDocument = (index) => {
        const updatedData = [...documentData];
        updatedData[index] = {
            name: '',
            size: ''
        }
        setDocumentData(updatedData);
    }

    const generateDocumentElements = () => {
        return documentData.map((data, index) => (
            <div key={index} className='w-full gap-[9.6px] flex items-center h-[43.2px]'>
                <div className='bg-[#00212D] justify-between rounded-[4.8px] phone:w-[330px] w-[68%] py-[14.4px] h-full text-[#667A81] flex items-center phone:text-[16.8px] text-[14px] px-[19.2px] border-[1.2px] border-[#334D57]'>
                    {data.name ? (
                        <p className='truncate w-[70%] text-[#BABABA]'>
                            {data.name}
                        </p>
                    )
                    : 'Name of document'
                    }
                    {data.size && 
                        <p className='text-[#BABABA]'>{(data.size / (1024 * 1024)).toFixed(2) + 'mb'}</p>
                    }
                </div>
                <label htmlFor={`fileInput-${index}`} className={`${data.name && 'opacity-30'} bg-[#00212D] h-full cursor-pointer border-[0.768px] border-[#334D57] flex justify-center items-center p-[9.6px] rounded-[3.072px]`}>
                    <Cloud />
                    <input
                        id={`fileInput-${index}`}
                        type='file'
                        accept=".pdf, .docx"
                        style={{ display: 'none' }}
                        onChange={(event) => handleFileChangeIndex(index, event)}
                    />
                </label>
                <div onClick={() => deleteDocument(index)} className={`${!data.name && 'opacity-30'} bg-[#00212D] h-full cursor-pointer border-[0.768px] border-[#334D57] flex justify-center items-center p-[9.6px] rounded-[3.072px]`}>
                    <Bin />
                </div>
            </div>
        ));
    };

    return (
        <div className='flex flex-col phone:gap-10 gap-[98px] items-center phone:w-[440px] w-full'>
            {!document ? (
                <div onClick={() => fileInputRef.current.click()} className='cursor-pointer bg-[#00212D] rounded-tr-[35px] w-[162px] h-[177px] flex justify-center items-center border-dotted border-[5px] border-[#024355]'>
                    <div className='flex flex-col gap-[15px] items-center w-full justify-center'>
                        <Cloud />
                        <div>
                            <p className='text-[14.4px] font-semibold text-white capitalize'>Upload resume</p>
                            <p className='text-[11px] text-[#BBD4DD] text-center'>
                                PDF, DOCX
                                <br />
                                Max 5 mb
                            </p>
                        </div>
                    </div>
                    <input
                        ref={fileInputRef}
                        id="resumeInput"
                        type="file"
                        accept=".pdf, .docx"
                        onChange={handleFileChange}
                        style={{ display: 'none' }}
                    />
                </div>
            ) : (
                <div className='phone:w-[440px] w-full h-[177px]'>
                    <div className='w-full gap-2 phone:gap-[9.6px] flex items-center h-[43.2px]'>
                        <div className='rounded-[4.8px] bg-[#00212D] justify-between w-[68%] phone:w-full py-[14.4px] h-full text-[#ECE2DC] flex items-center phone:text-[16.8px] text-[14px] px-[19.2px] border-[1.2px] border-[#334D57]'>
                            <p className='truncate w-[70%]'>
                                {document.name}
                            </p>
                            <p className='text-[#BABABA]'>{(document.size / (1024 * 1024)).toFixed(2) + 'mb'}</p>
                        </div>
                        <div className='bg-[#00212D] opacity-30 h-full cursor-pointer border-[0.768px] border-[#334D57] flex justify-center items-center p-[9.6px] rounded-[3.072px]'>
                            <Cloud />
                        </div>
                        <div onClick={() => setDocument(null)} className='bg-[#00212D] h-full cursor-pointer border-[0.768px] border-[#334D57] flex justify-center items-center p-[9.6px] rounded-[3.072px]'>
                            <Bin />
                        </div>
                    </div>
                </div>
            )}
            <div className={`${!document && 'opacity-30'} flex flex-col gap-[19.2px] self-start w-full`}>
                <p className='phone:text-[17.28px] text-[14.4px] font-semibold capitalize text-white'>Other documents</p>
                <div className='flex flex-col gap-[19.2px] w-full'>
                    {generateDocumentElements()}
                </div>
                <div className='flex justify-center gap-[9.6px] items-center'>
                    <div onClick={handleAddDocument} className='cursor-pointer border-[0.768px] border-[#334D57] flex justify-center items-center p-[6.14px] rounded-[3.072px]'>
                        <Add />
                    </div>
                    <p className='phone:text-[16.8px] text-[14px] text-[#667A81]'>Add another document</p>
                </div>
            </div>
            <div className='phone:my-10 -mt-[66px] mb-12 flex justify-center w-full'>
                {isLoading ? (
                    <Buttons text={''} icons={<CircularProgress size={28} sx={{ color: 'white' }}/>} hoverColor={'#FBA599'} width={'318px'} color='#00141B' bgColor={'#FBA599'} />
                ) : (
                    <Buttons functions={handleSubmit} text={'Next'} hoverColor={document ? '#FBA599' : '#BABABA'} width={'318px'} color='#00141B' bgColor={document ? '#FBA599' : '#BABABA'}/>
                )}
            </div>
        </div>
    )
}

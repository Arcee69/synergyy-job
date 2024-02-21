import React, { useState } from 'react'
import Send from "../../../../assets/img/send.png"
import { Formik, Form } from 'formik';
import { CgSpinner } from 'react-icons/cg';
import ModalPop from '../../../../components/modals/modalPop';
import Success from '../../../../components/success';

const Apply = ({ handleClose, data }) => {
    const [loading, setLoading] = useState(false)
    const [openSuccess, setOpenSuccess] = useState(true)
    const [text, setText] = useState('');
    const [fileUpload, setFileUpload] = useState(null);
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

  const countWords = () => {
    // Remove leading and trailing whitespaces
    const trimmedText = text.trim();

    // Count words by splitting the text by whitespaces
    const words = trimmedText.split(/\s+/);

    // Filter out empty strings (caused by multiple whitespaces)
    const filteredWords = words.filter(word => word !== '');

    return filteredWords.length;
  };

  return (
    <div className='lg:w-[661px] mt-[20px] bg-[#fff] flex flex-col gap-6 rounded-xl p-6'>
        <div className='flex items-center gap-2'>
            <img src={Send} alt='Send' className='w-[32px] h-[32px] lg:w-[40px] lg:h-[40px]' />
            <p className='text-base lg:text-2xl font-mont font-semibold text-[#001A24]'>Apply to Netflix Technologies</p>
        </div>
        <div>
            <Formik
                initialValues={{
                    keyWord: "",
                    location: ""
                }}
                    // validationSchema={formValidationSchema}
                    onSubmit={(values, action) => {
                    window.scrollTo(0, 0);
                    console.log(values, "market")
                    handleClose()
                    setOpenSuccess(true)
                    // submitForm(values, action);
                    // navigate("/download");
                }}
            >
                {({
                    handleSubmit,
                    handleChange,
                    dirty,
                    isValid,
                    setFieldValue,
                    errors,
                    touched,
                    // setFieldTouched,
                    values,
                }) => (
                    <Form onSubmit={handleSubmit} className="flex justify-center ">
                        <div className="flex flex-col gap-6">
                            <div className='flex gap-6 items-center'>
                                <div className='flex flex-col gap-2'>
                                    <label htmlFor='name' className='font-mont font-medium text-[#334D57] text-sm' >Name</label>
                                    <input
                                        name="name"
                                        placeholder="Enter Your Name"
                                        type="text" 
                                        value={values?.name}
                                        onChange={handleChange}
                                        className="outline-none w-full text-[#F9FAFB] font-mont font-medium text-xs rounded lg:w-[294px] bg-[#E3E7E8] border  border-[#E3E7E8] p-3 h-[38px] border-solid "
                                    /> 
                                    {errors.name && touched.name ? (
                                    <div className="text-RED-_100 text-xs">
                                        {errors.name}
                                    </div>
                                    ) : null}
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <label htmlFor='email' className='font-mont font-medium text-[#334D57] text-sm' >Email</label>
                                    <input
                                        name="email"
                                        placeholder="Enter Email"
                                        type="text" 
                                        value={values?.email}
                                        onChange={handleChange}
                                        className="outline-none w-full  text-[#F9FAFB] font-mont font-medium text-xs rounded lg:w-[294px] bg-[#E3E7E8] border  border-[#E3E7E8] p-3 h-[38px] border-solid "
                                    /> 
                                    {errors.email && touched.email ? (
                                    <div className="text-RED-_100 text-xs">
                                        {errors.email}
                                    </div>
                                    ) : null}
                                </div>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <label htmlFor='salary' className='font-mont font-medium text-[#334D57] text-sm' >Desired Salary (₦)</label>
                                <div className='flex items-center w-full  px-1 bg-[#E3E7E8] border border-solid border-[#E3E7E8] rounded  '>
                                    <p>₦</p>
                                    <input
                                        name="salary"
                                        placeholder="Enter Email"
                                        type="text" 
                                        value={values?.salary}
                                        onChange={handleChange}
                                        className="outline-none w-full  text-[#111111E5] font-mont font-medium text-xs lg:w-[276px] bg-[#E3E7E8]  p-3 h-[38px] border-solid "
                                    /> 
                                </div>
                                {errors.salary && touched.salary ? (
                                <div className="text-RED-_100 text-xs">
                                    {errors.salary}
                                </div>
                                ) : null}
                            </div>
                            <div className='flex flex-col gap-2'>
                                <label htmlFor='letter' className='font-mont font-medium text-[#334D57] text-sm' >Cover Letter</label>
                                <textarea
                                    name="letter"
                                    placeholder="Tell us why you’re a good fit"
                                    disabled={text > 126 ? true : false }
                                    type="text" 
                                    rows="5"
                                    value={values?.letter}
                                    onChange={(e) => {
                                        const words =  setText(e.target.value);
                                        setFieldValue("letter", words)
                                        }
                                    }
                                    className="outline-none w-full  text-[#111111E5] font-mont font-medium text-xs lg:w-[613px] bg-[#E3E7E8]  p-3 border border-[#E3E7E8] rounded border-solid "
                                ></textarea>
                                <div className='flex justify-end text-sm text-[#111111E5]'>{`${countWords()}/125 words`}</div> 
                                {errors.letter && touched.letter ? (
                                <div className="text-RED-_100 text-xs">
                                    {errors.letter}
                                </div>
                                ) : null}
                            </div>
                            <div className='flex flex-col gap-2'>
                                <label htmlFor='letter' className='font-mont font-medium text-[#334D57] text-sm' >Resume</label>
                                {
                                    fileUpload ? (
                                        <div className='flex items-center w-full border justify-between border-[#1c1c1c1a] h-[44px]'>
                                            <div className='w-full h-[43.2px]  lg:border-none flex items-center justify-between p-2 bg-[#F9FAFB]'>
                                                <p className='text-[#000D12] text-base font-mont'>{file?.name}</p>
                                                <p className='text-[#667A81] text-base font-mont'>{showFileSize}</p>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className=' border w-full rounded flex cursor-pointer text-center p-2 border-[#1c1c1c1a] h-[44px]'>
                                            <div className='h-[5px] w-full'>
                                            {/* <p className='text-sm'>Click to upload</p> */}
                                                <input
                                                    type="file"
                                                    multiple={false}
                                                    accept=".pdf,.doc,.docx"
                                                    id="fileInput"
                                                    // className='opacity-0'
                                                    // style={{ display: 'none' }}
                                                    onChange={handleFileChange}
                                                />
                                            </div>
                                            
                                        </div>
                                    )
                                }
                            </div>
                            
                            <button
                                className={`${isValid ? "bg-[#FBA599]" : "bg-[#BABABA]"} w-full font-mont flex items-center border border-[#000] py-[14px]  rounded-[6px] justify-center mt-[8px] h-[48px] text-base text-center`}
                                type="submit"
                                disabled={!isValid}
                            >
                                <p className=' font-mont text-[#00141B] text-base  font-semibold'>{loading ? <CgSpinner className=" animate-spin text-lg " /> : 'Apply'}</p>
                                
                            </button>
                        </div>

                    </Form>
                )}
            </Formik>
        </div>
        <ModalPop isOpen={openSuccess}>
            <Success handleClose={() => setOpenSuccess(false)}  loading={loading}/>
        </ModalPop>
    </div>
  )
}

export default Apply
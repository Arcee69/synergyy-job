import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { baseURL } from '../utils/baseURL'
import Navlight from '../ComponentsJob/nav/navlight'
import { formatTimeDifference } from '../libs/helperFunctions'
import  Ellipse  from '../assets/svg/Ellipse 2768.svg'
import  Love  from '../assets/svg/Group 1000002832.svg'
import  Message  from '../assets/svg/message.svg'
import  Like  from '../assets/svg/Component 7.svg'
import  Share  from '../assets/svg/Send.svg'
import DownloadJob from '../ComponentsJob/job/downloadJob'
import Hamburger from '../ComponentsJob/hamburger'
import Dialogs from '../ComponentsJob/dialog'

export default function Post({ hamburger, setHamburger }) {
    const id = useParams();
    const postId = id?.id;
    const [postData, setPostData] = useState(null);
    const [postError, setPostError] = useState(false);
    const [interact, setInteract] = useState(false);
    
    useEffect(() => {
        fetchPost()
    }, [])
    
    const fetchPost = async () => {
        try{
            const response = await axios.get(`${baseURL}timeline/feeds/view/?id=${postId}`);
            if (response.data.status === 'success'){
                setPostData(response?.data?.data)
                setPostError(false)
            }
        } catch(error) {
            console.log(error)
            if (error.response?.data?.message === "exists validation failed on id") {
                setPostError(!postError)
            } else {
                setPostError(!postError)
            }
        }
    }

    return (
        <div className='synergyy__post min-h-screen flex flex-col'>
            {interact && <div className='cover' onClick={() => setInteract(false)}></div>}
            <Navlight buttons={true} setHamburger={setHamburger}/>
            {hamburger && <Hamburger setHamburger={setHamburger} />}
            {postError && <p className='error__job text-black'>Oops! Post doesn't exist</p>}
            {postData && (
                <div className='flex-1 bg-[#F9FAFB]'>
                    <div className='w-full flex justify-center mb-[55px]'>
                        <div className='post__box phone:w-[626px] w-full'>
                            <div className='flex gap-2 pt-[18px] px-4 items-center'>
                                <img src={postData?.user?.profile_photo} alt='profile' className='w-[34px] h-9 rounded-[36px]' />
                                <div>
                                    <h1 className='font-semibold text-[14px] capitalize'>{postData?.user?.display_name}</h1>
                                    <p className='flex items-center text-[#42B8BD] text-[14px]'>@{postData?.user?.username} <span className='ml-[5px] mr-2'><Ellipse /></span><span className='text-[12px]'>{formatTimeDifference(postData?.created_at)}</span></p>
                                </div>
                            </div>
                            {postData?.images && (
                                <div className={`phone:hidden mt-[10px] px-[18px] ${postData.images.length > 1 ? 'grid grid-cols-2' : 'w-full'} gap-1`}>
                                    {postData?.images?.map((img, index) => {
                                        return (
                                            <div key={index} className='w-full'>
                                                <a href={img.url} target="_blank" rel="noopener noreferrer">
                                                    <img src={img.url} alt='post' className={`${postData.images.length > 1 ? 'h-[181.755px]' : 'h-[290px]'} w-full border-[0.5px] border-[#285E6A]`}/>
                                                </a>
                                            </div>
                                        )
                                    })}
                                </div>
                            )}
                            <div className='phone:mt-[13px] mt-[10px] px-[18px]'>
                                <p className='text-[15px]'>{postData?.content}</p>
                            </div>
                            {postData?.images && (
                                <div className={`phone:grid hidden mt-[13px] px-[18px] ${postData.images.length > 1 ? 'grid grid-cols-2' : 'w-full'} gap-1`}>
                                {postData?.images?.map((img, index) => {
                                    return (
                                        <div key={index}>
                                            <a href={img.url} target="_blank" rel="noopener noreferrer">
                                                <img src={img.url} alt='post' className={`${postData.images.length > 1 ? 'w-[247px] h-[247px]' : 'w-[494px] h-[290px]'} object-cover cursor-pointer border-[0.5px] border-[#285E6A]`} />
                                            </a>
                                        </div>
                                    );
                                })}
                                </div>
                            )}
                            <div className='phone:mt-6 synergyy__activity px-4'>
                                <p className='flex items-center'><Love /><span className='ml-2 text-[14px] font-medium text-[#BBD4DD]'>{postData?.__meta__?.likes_count}</span><span className='mx-2'><Ellipse /></span><Message /><span className='ml-2 text-[14px] font-medium text-[#BBD4DD]'>{postData?.__meta__?.comments_count}</span></p>
                            </div>

                            <div className='flex px-4 gap-12 items-center w-full justify-center'>
                                <div className='flex gap-1 items-center cursor-pointer' onClick={() => setInteract(!interact)}>
                                    <Like />
                                    <p className='text-[13px] font-medium text-[#EFEFEF]'>Like</p>
                                </div>
                                <div className='flex gap-1 items-center cursor-pointer' onClick={() => setInteract(!interact)}>
                                    <Message />
                                    <p className='text-[13px] font-medium text-[#EFEFEF]'>Comment</p>
                                </div>
                                <div className='flex gap-1 items-center cursor-pointer' onClick={() => setInteract(!interact)}>
                                    <Share />
                                    <p className='text-[13px] font-medium text-[#EFEFEF]'>Share</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Dialogs open={interact}>
                        <DownloadJob />
                    </Dialogs>
                </div>
            )}
        </div>
    )
}

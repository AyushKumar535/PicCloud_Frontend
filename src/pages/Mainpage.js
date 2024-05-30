import React, { useEffect, useState } from 'react'
import './Search.css'
import { CiSearch } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import Card from '../Imgcard/Card';
const Mainpage = () => {
    const navigate = useNavigate()
    const [posts, setPosts] = useState([])
    const getAllPosts = async () => {
        try {
            const res = await fetch("https://piccloud-backend.onrender.com/upload/getAllImages", {
                method: 'GET',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                },
            });

            const data = await res.json();

            if (res.ok && data.allposts) {

                setPosts(data.allposts)
            } else {
                toast.error(data.message || "Failed to fetch posts");
            }
        } catch (error) {
            toast.error("An error occurred. Please try again.");
        }
    };
    useEffect(() => {
        getAllPosts()
    }, [])

    return (
        <div>
            <Toaster />
            {/* <div className='inputdiv gap-2'>
                <input type="text" name="text" placeholder="Search images with name..." class="input" />
                <CiSearch className=' cursor-pointer' size={40} />
            </div> */}
            <div>
                <button onClick={() => navigate('/upload')} className='upload'>Upload</button>
            </div>
            <div className='flex justify-between items-center flex-wrap my-10 mx-4'>

                {
                    posts.map((post, index) => {
                        return (
                            <div key={index} className='flex m-2'>
                                <Card post={post.mylink} />
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default Mainpage

import React from 'react'
import { FaLink } from "react-icons/fa6";
import { FaCloudDownloadAlt } from "react-icons/fa";
import toast from 'react-hot-toast';
const Card = ({ post }) => {
    const copyImage = (url) => {
        navigator.clipboard.writeText(url)
            .then(() => {
                toast.success('Image url copied to clipboard!');
            })
            .catch(err => {
                toast.error('Failed to copy URL.');
            });
    }
    const downLoadImage = (url) => {
        const link = document.createElement('a');
        link.href = url;
        link.download = 'image.jpg'; 
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
    return (
        <div className='flex flex-col shadow-md border rounded-xl p-4'>
            <img src={post} alt='images' width={200} height={200} />
            <div className='flex justify-between items-center gap-3 mt-3'>
                <FaCloudDownloadAlt className=' cursor-pointer' onClick={() => downLoadImage(post)} size={50} />
                <FaLink className=' cursor-pointer' onClick={() => copyImage(post)} size={50} />

            </div>
        </div>
    )
}

export default Card

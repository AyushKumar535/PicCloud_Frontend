import React from 'react'
import { FaLink } from "react-icons/fa6";
import { FaCloudDownloadAlt } from "react-icons/fa";
const Card = ({ post }) => {
    const copyImage = (post) => {
        navigator.clipboard.writeText(post)
    }
    return (
        <div className='flex flex-col shadow-md border rounded-xl p-4'>
            <img src={post} alt='images' width={200} height={200} />
            <div className='flex justify-between items-center gap-3 mt-3'>
                <FaCloudDownloadAlt size={50} />
                <FaLink onClick={copyImage(post)} size={50} />

            </div>
        </div>
    )
}

export default Card

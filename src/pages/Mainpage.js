import React from 'react'
import './Search.css'
import { CiSearch } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';
const Mainpage = () => {
    const navigate = useNavigate()
    return (
        <div>
            <div className='inputdiv gap-2'>
                <input type="text" name="text" placeholder="Search images with name..." class="input" />
                <CiSearch className=' cursor-pointer' size={40} />
            </div>
            <div>
                <button onClick={() => navigate('/upload')} className='upload'>Upload</button>
            </div>
        </div>
    )
}

export default Mainpage

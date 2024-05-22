import React from 'react'
import './Search.css'
import { CiSearch } from "react-icons/ci";
const Mainpage = () => {
    return (
        <div>
            <div className='inputdiv gap-2'>
                <input type="text" name="text" placeholder="Search images with name..." class="input" />
                <CiSearch className=' cursor-pointer' size={40} />
            </div>
            <div>
                <button className='upload'>Upload</button>
            </div>
        </div>
    )
}

export default Mainpage

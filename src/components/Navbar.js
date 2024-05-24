import React from 'react'
import logo from '../images/logo2.jpg'
import { useNavigate } from "react-router-dom";
const Navbar = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        // We will do here 
    }
    return (
        <div className="text-gray-600 body-font">
            <div className="container mx-auto flex flex-wrap justify-between p-5 flex-col md:flex-row items-center">
                <div onClick={() => navigate('/')} className=" cursor-pointer flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <img className='bg-[#FEC400] rounded-full' src={logo} alt="logo" width={70} height={70} />
                    <span className="ml-3 text-2xl font-bold ">PicCloud</span>
                </div>
                <div className=' flex gap-2 text-white'>
                    <button onClick={() => navigate('/login')} className="inline-flex items-center bg-[#4ddfa7] border-0 py-1 px-3 focus:outline-none hover:bg-[#7ce4bc] rounded text-base mt-4 md:mt-0">Login</button>
                    <button onClick={() => navigate('/register')} className="inline-flex items-center bg-[#4ddfa7] border-0 py-1 px-3 focus:outline-none hover:bg-[#7ce4bc] rounded text-base mt-4 md:mt-0">Sign up</button>
                    <button onClick={handleLogout} className="inline-flex items-center bg-[#4ddfa7] border-0 py-1 px-3 focus:outline-none hover:bg-[#7ce4bc] rounded text-base mt-4 md:mt-0">Logout</button>
                </div>
            </div>

        </div >
    )
}

export default Navbar

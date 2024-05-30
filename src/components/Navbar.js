import React from 'react'
import logo from '../images/logo2.jpg'
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../redux/features/auth-slice';
const Navbar = () => {
    const navigate = useNavigate();
    const auth = useSelector((state) => state.auth.isAuth)
    const dispatch = useDispatch();
    const handleLogout = () => {
        // We will do here 
        dispatch(logOut(false))
        localStorage.removeItem('token')
    }
    return (
        <div className="text-gray-600 body-font">
            <div className="container mx-auto flex justify-between p-5 items-center">
                <div onClick={() => navigate('/')} className=" cursor-pointer flex title-font font-medium items-center justify-between text-gray-900  sm:flex md:flex lg:flex ">
                    <img className='bg-[#FEC400] rounded-full w-[50px] mt-4 sm:mt-0 md:mt-0 lg:mt-0 sm:w-[40px] md:w-[60px] lg:w-[70px]' src={logo} alt="logo" />
                    <span className="ml-3 text-xl font-bold sm:text-xl md:text-2xl lg:text-2xl hidden sm:hidden lg:block md:block">PicCloud</span>
                </div>
                {
                    auth ?
                        <div className=' flex gap-2 text-white'>
                            <button onClick={handleLogout} className="inline-flex items-center bg-[#4ddfa7] border-0 py-1 px-3 focus:outline-none hover:bg-[#7ce4bc] rounded text-base mt-4 md:mt-0">Logout</button>
                        </div>
                        :
                        <div className=' flex justify-center items-center gap-2 text-white'>
                            <button onClick={() => navigate('/login')} className="inline-flex items-center bg-[#4ddfa7] border-0 py-1 px-3 focus:outline-none hover:bg-[#7ce4bc] rounded text-base mt-4 md:mt-0">Login</button>
                            <button onClick={() => navigate('/register')} className="inline-flex items-center bg-[#4ddfa7] border-0 py-1 px-3 focus:outline-none hover:bg-[#7ce4bc] rounded text-base mt-4 md:mt-0">Sign up</button>
                        </div>
                }

            </div>

        </div >
    )
}

export default Navbar

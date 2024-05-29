import React, { useEffect } from 'react'
import Lottie from "lottie-react";
import './landing.css'
import Animation from "../images/HDOskFySHs (1).json";
import { useNavigate } from 'react-router-dom';
const Landing = () => {
    const navigate = useNavigate()
    const checkForLogin = async () => {
        try {
            const token = localStorage.getItem('token');
            console.log(token)
            const res = await fetch("http://localhost:5000/auth/checkLogin", {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
            });

            const data = await res.json();

            if (res.ok && data.isLogged) {
                console.log("User is logged in");
                setTimeout(() => {
                    navigate('/main');
                }, 3000);
            } else {
                console.log("User is not logged in");
            }
        } catch (error) {
            console.error("Error while checking login status:", error);
        }
    };

    useEffect(() => {
        checkForLogin();
    }, [])
    return (
        <div className="text-gray-600 body-font mt-16 ">
            <div className="container mx-auto px-4 lg:px-10 py-12 md:flex md:flex-row md:items-center md:justify-between">
                <div className="lg:flex-grow md:w-1/2 lg:pr-12 md:pr-8 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-5xl text-4xl mb-4 font-bold text-gray-900">One platform, Endless Possibilities.</h1>
                    <p className="mb-8 text-lg leading-relaxed font-medium">Seamless collaboration, share instantly with anyone worldwide.</p>

                    <div className="flex justify-center" onClick={() => navigate('/main')}>
                        <a className="swipe">Get Started <span className="container2"><svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor"></path></svg></span> </a>

                    </div>
                </div>
                <div className="lg:max-w-xl lg:w-full md:w-1/2 w-full">
                    <Lottie animationData={Animation} loop={true} />
                </div>
            </div>
        </div>

    )
}

export default Landing

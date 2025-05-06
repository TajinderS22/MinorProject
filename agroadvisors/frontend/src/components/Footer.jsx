import React from "react";
import {Link } from 'react-router'

const Footer =()=>{
    return(
        <div className="footer-container w-12/12 rounded-md  h-fit flex-col justify-between pt-6">
            <div className=" flex justify-between ">
                <div className="w-5/12 text-left">
                    <h1 className=" brand-text text-2xl sm:text-4xl font-mono font-extrabold">
                        AgroAdvisors
                    </h1>
                    <p className="text-xs font-medium  lg:text-lg w-10/12 pt-4">
                    To revolutionize agriculture by enabling sustainable and intelligent fertilizer usage, empowering farmers and gardeners worldwide to maximize yields, minimize environmental impact, and build a greener future for generations to come
                    </p>
                </div>
                <div className="w-6/12" >   
                    <div>
                        <ul className='text-xs lg:text-lg text-left font-medium footer-nav-links '>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/About">About Us</Link>
                            </li>
                            <li>
                                <Link to="/Contact">Contact Us </Link>
                            </li>
                            <li>
                                <Link to="/Privicy-policy">Privicy Policy</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="py-6">
                © Tajinder Singh 2025
            </div>
        </div>
    )
}
export default Footer;
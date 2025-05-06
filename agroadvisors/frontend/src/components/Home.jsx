
import React from 'react';
import {Link} from 'react-router';
import farmerImage from '../public/images/farmer-fertilizer.jpg'
import rightArrow from '../public/Icons/right-arrow.png'
import Navbar from './Navbar';
import Footer from './Footer'

const Home= ()=>{
    return(
        <div>
            <Navbar></Navbar>
            <div className='pt-16 text-left w-11/12 max-w-7xl mx-auto  '>
            <div className='md:flex not-md:flex-col-reverse  justify-between mb-4'>
                <div className="md:w-7/12 w-full mx-auto pt-6" >
                    <h1 className="text-3xl font-bold">
                    Welcome to the Agro Advisors The Smart Fertilizer Recommendation System

                    </h1>
                    < h2 className="text-2xl font-semibold pt-6">
                    "Grow Smarter, Not Harder"
                    </h2>
                    <p className='pt-6 text-xl'>
                        Empowering Farmers and Gardeners with Smarter Fertilizer Solutions
                        Healthy soil, thriving crops, and a greener planet start with informed choices. Discover how AgroAdvisor can transform your agricultural journey.
                    </p>

                    {/* <Link to="/"> */}
                        <button className=" rounded-3xl m-6 p-6 flex font-semibold items-center border-2 border-green-800 hover:bg-amber-600  hover:shadow-lg">
                            Let's Get Started 
                            <img className="w-8 pl-2" src={rightArrow} alt="" />
                        </button>
                    {/* </Link> */}

                </div>
                <div className=' md:w-5/12 mx-auto w-12/12 pl-6'>
                    <img className=' home-image-farmer rounded-md left-30 ' src={farmerImage} alt="" />    
                </div>
            </div>

            {/* First part ends and Horizontal line <hr/> */}

            <hr className=' horizontal-row :' />

            {/* Second part starts */}
            <div className='px-auto pt-8 w-12/12 mb-8'>
                <h1 className='text-4xl font-semibold'>
                    Why AgroAdvisors?
                </h1>
                <div>
                    <ol className=' home-page-list-2 text-xl  flex-col list-decimal columns-1'>
                        <li>
                            <span className='font-bold'>Save Resources</span>: Achieve optimal results by using only what your soil needs, reducing overuse, and cutting costs.
                        </li>
                        <li>
                            <span className='font-bold'>Boost Productivity</span>: Receive expert-recommended fertilizer plans tailored to your crop and region.
                        </li>
                        <li>
                            <span className='font-bold'>Protect the</span> Environment: Reduce runoff and its harmful effects on waterways with eco-friendly practices.
                        </li>
                        <li>
                            <span className='font-bold'>User-Friendly</span> Tools: Intuitive solutions designed for farmers, gardeners, and enthusiasts of all levels.
                        </li>
                        <li>
                            <span className='font-bold'>Stay Ahead</span>: Keep up with the latest in soil science, sustainability, and fertilizer technology.
                        </li>
                    </ol>
                </div>
            </div>

            {/* Second part ends and Hr */}
            
            <hr className=' horizontal-row :' />

            {/* Third part starts */}

            <div className=' pt-6'>

                <h1 className='text-4xl font-semibold '>
                Features You'll Love
                </h1>
                <div>
                    <ol className=' flex-col text-xl list-decimal justify-between home-page-list-2 '>
                        <li>
                            AI-powered tools that analyze your soil and provide personalized fertilizer suggestions.
                        </li>
                        <li>
                            Practical tips to maintain healthy soil and reduce environmental impact.
                        </li>
                        <li>
                             Access a growing network of like-minded growers sharing their experiences and advice.
                        </li>
                    </ol>
                </div>

            </div>

            {/* Third part ends and Fourth part starts */}

            <div className='pt-12'>
                <h1 className='text-4xl font-bold'>
                    How It Works
                </h1>
                <ul className='home-page-list-2 list-decimal'>
                    <li>
                        <span className='font-bold'> 
                            Analyze Your Soil
                        </span>
                        : Enter your soil details or use our testing services for accurate data.

                    </li>
                    <li>
                        <span className='font-bold'>
                            Get Recommendations 
                        </span>
                        : Receive a tailored fertilizer plan based on your crop, soil type, and goals.
                    </li>
                    <li>
                        <span className='font-bold'>
                             Apply Smarter
                        </span> 
                        : Implement our recommendations to save resources and improve yields.

                    </li>
                </ul>
            </div>


            </div>
            <Footer></Footer>

        </div>
    )
}

export default Home;
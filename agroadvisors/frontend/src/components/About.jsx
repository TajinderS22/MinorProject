import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const About=()=>{
    return(
    <div>
        <Navbar/>
        <div className=''>
            <div className=' px-6 mx-auto pt-12 w-10/12 text-left '>
            {/* Who are we? */}
            <h1 className=' text-4xl font-bold py-6'>
                Who We Are?
            </h1>
            <div className='  font-medium w-10/12  text-xl'>
                <p className=' body-page-block-design leading-8 ml-32 '>
                At Agro Advisors, we're passionate about revolutionizing the way fertilizers are used. Our mission is to empower farmers, gardeners, and agricultural enthusiasts with knowledge and tools to optimize their fertilizer application, enhancing productivity while protecting the environment.
                </p>
            </div>
            {/* Vision */}
            <div className=' pt-12'>
                <h className='text-4xl font-bold '>
                    Our Vision
                </h>
                <p className='body-page-block-design font-medium w-9/12 text-xl'>
                    To create a future where agriculture is sustainable, efficient, and environmentally friendly.
                </p>
            </div>
            {/* Why US */}
            <div className='pt-12 w-10/12 text-lg font-medium'>
                <h1 className='text-4xl font-bold'>
                Why Choose Us:
                </h1>
                <ul className='home-page-list-2'>
                    <li>
                        Expert-Driven Solutions: Backed by agronomists and environmental scientists.
                    </li>
                    <li>
                        User-Friendly Tools: Simplifying complex data for everyday use.
                    </li>
                    <li>
                        Commitment to Sustainability: Balancing productivity with eco-conscious practices.
                    </li>
                </ul>
            </div>
            {/* Our Journey */}
            <div className=' text-lg w-10/12 leading-8 font-medium px-2'>
                <h1 className='text-4xl font-bold pt-12'>
                    Our Journey:
                </h1>
                <p className=' body-page-block-design '>
                    Founded in 2025, AgroAdvisors began as a small initiative to address the global challenge of over-fertilization. Today, we serve a growing community of users dedicated to making smarter choices for their land and our planet.
                </p>
            </div>
            </div>
        </div>
        <Footer/>
    </div>)
}
export default About;
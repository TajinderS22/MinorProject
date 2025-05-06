import React, { useContext, } from 'react';
import {Link} from 'react-router';
import UserContext,{ UserContextProvider } from '../Utils/UserContext';




const Navbar =()=>{
    // const {isLogin}=useContext(UserContext);
    const {isLogin,setisLogin, isUserLogedIn ,}=useContext(UserContext)
    return(

        isUserLogedIn? <div>

    <div className=" sticky nav-container max-w-7xl w-11/12 h-16 items-center flex justify-between mx-auto rounded-md px-2 ">
           <Link to='/'> 
                <div>
                    <h1 className='brand-text font-bold font-serif flex items-center text-2xl' >Agro Advisors</h1>
                </div>
            </Link>
            <div className=" nav-links mt-1 pr-2">
                <ul className=" flex font-medium text-lg items-center  ">
                    <li >
                        <Link to="/">Home</Link>
                    </li>
                    <li className='md:block hidden'>
                        <Link to="/About">About</Link>
                    </li>
                    <li>
                        <Link to="/dashboard">Dashboard</Link>
                    </li>
                    
                    <li>
                        Profile
                    </li>
                    
                </ul>
            </div>
        </div>

        </div>
        :

        <div>
            <div className=" sticky nav-container max-w-7xl w-11/12 h-16 items-center flex justify-between mx-auto rounded-md px-2 ">
           <Link to='/'> 
                <div>
                    <h1 className='brand-text font-bold font-serif flex items-center text-2xl' >Agro Advisors</h1>
                </div>
            </Link>
            <div className=" nav-links mt-1 pr-2">
                <ul className=" flex font-medium text-lg items-center ">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li className='hidden md:block'>
                        <Link to="/About">About</Link>
                    </li>
                    <li>
                        <Link to="/Contact">Contact</Link>
                    </li>
                    
                    <li>
                        <Link to={"/auth"}  
                             onClick={()=>{ setisLogin(!isLogin)    }}

                        >
                            <button className='nav-entry-button '>
                                
                                                  
                                {isLogin?  'Sign Up': "Login"} 
                                
                                
                            </button>
                        </Link>
                    </li>
                    
                </ul>
            </div>
        </div>
        </div>

    )
}

export default Navbar;
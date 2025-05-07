import React, { useContext, useState, useEffect } from "react";
import { Link,useNavigate } from "react-router";
import UserContext from "../../Utils/UserContext";
import Navbar from "../Navbar";
import Footer from "../Footer";




const Signup = () => {

    


    const {isLogin,setisLogin,isUserLogedIn,setisUserLogedIn}=useContext(UserContext);
    const [username,setusername]=useState(null);
    const [password,setpassword]=useState(null);
    const navigate = useNavigate();
    useEffect(() => {
       console.log("isUser loged in ",isUserLogedIn)
       if(isUserLogedIn){
        navigate('/dashboard')
       }
    }, [isUserLogedIn, navigate]);
    console.log("loging",isLogin)

    const handleSubmitClick= async (event)=>{
        event.preventDefault()
        const data={
            username:username,
            password:password
        }
        try{
            if(isLogin){
                const response= await fetch('http://localhost:3000/api/login',{
                    method:'post',
                    headers:{
                        "content-type":"application/json"
                    },
                    body:JSON.stringify(data)
                })
        
                const result= await response.json();
                alert(result.message)
        
                if(response.ok){
                    console.log(isUserLogedIn)
                    setisUserLogedIn(true)
                }
                
            }else{
                const response= await fetch('http://localhost:3000/api/signup',{
                    method:'post',
                    headers:{
                        "content-type":"application/json"
                    },
                    body:JSON.stringify(data)
                })
        
                const result= await response.json();
                alert(result.message)
        
                if(response.ok){
                    console.log(isUserLogedIn)
                    setisUserLogedIn(true)
                }



            }
        }

        catch(error){
            console.log('error:',error)
        }
        
    }
    return (

        <div>
            <Navbar/>
            <div>
                <div className="bg-[#a9d3e8ad] min-h-[85svh] mt-4 rounded-md">
            <div>
            <div className="flex flex-col justify-center h-[70svh] mx-6 items-center p-4">
                <div className="w-[300px] sm:w-[400px]">
                <div className="w-full bg-[#68575740] pl-2 pr-4 py-4 rounded-lg">
                    <div className="m-4 font-bold text-2xl font-serif text-left">
                    {isLogin? 'Login':"SignUp"} to Smartness
                    </div>
    
                    <form className=" " method='POST' action={isLogin?'/api/auth/login':'/api/auth/signup'}>
                    <input
                        className="m-2 p-2 w-11/12 rounded-lg  bg-green-200/70 border-1 border-green-700"
                        placeholder="Email"
                        type="email"
                        autoComplete="on"
                        onChange={e=>setusername(e.target.value)}
                    />
                    <input
                        className="m-2 p-2 w-11/12 rounded-lg bg-green-200/70 border-1 border-green-700"
                        placeholder="Password"
                        type="password"
                        autoComplete="on"
                        onChange={ e=>setpassword(e.target.value)}
                    />
                    <br />
    
                    <div className="text-right pr-6">
                        <button
                        className="text-left bg-cyan-700 rounded-lg p-2 mt-4 w-[100px]"
                        type="submit"
                        onClick={handleSubmitClick}
                        >
                        Submit
                        </button>
                    </div>
                    </form>
                </div>
                </div>
    
                {/* Login Button */}
                <Link to="/auth">
                <div
                    className="bg-[#9d5f5f55] w-[200px] sm:w-[300px] font-semibold rounded-xl m-4 h-[30px] text-xl flex items-center justify-center"
                    onClick={()=>{setisLogin(!isLogin)}}
                >
                    {isLogin? "Sign UP":"Login"}
                </div>
                </Link>
            </div>
            </div>
            </div>
            </div>
            <Footer/>
        </div>
    );
  };
  

export default Signup;
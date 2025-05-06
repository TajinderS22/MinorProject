/* eslint-disable react-hooks/exhaustive-deps */
import React,{useContext, useEffect} from "react";
import axios from "axios";
import WeatherTile from "./WeatherTile";
import MainWorker from "./MainWorker";
// import {APIProvider, Map, } from '@vis.gl/react-google-maps';
import Navbar from "./Navbar";
// MapCameraChangedEvent
import Footer from './Footer'
import UserContext from "../Utils/UserContext";
import ProtectedRoute from "./Authentication/ProtectedRoute";




const Dashboard=()=>{
    const {weatherDataExternal,setweatherDataExternal}=useContext(UserContext);

    useEffect(() => {
        const getWeatherDataFromServer= async()=>{
            const response=await axios('http://localhost:3000/api/weather');
            // console.log(response)
            setweatherDataExternal(response.data);
    
        }
        getWeatherDataFromServer();
    }, []);
    
    const weatherData=weatherDataExternal

    let forecast=weatherData? weatherData?.forecast: "wait";
    forecast=forecast.forecastday;

    if(!weatherData) return null;

    return(

        <ProtectedRoute>
            <div >
            <Navbar/>
            <div className="flex justify-between not-md:flex-col min-h-[800px] max-w-7xl mt-2 mx-auto">
                {/* Input data  */}
                <MainWorker/>
                {/* Weather Data and map thing  */}
                <div className='md:w-max-[300px] md:w-[300px] w-[375px] h-full'>
                    {/* weather */}
                    <div className='bg-indigo-300  m-2 rounded-md overflow-y-auto overflow-x-auto h-[400px]'>
                        <div className='current-weather '>

                        <div className="Location" >
                            <div className='m-2 my-2  font-medium text-xl'>
                                <h3>
                                    {weatherData?.location?.name }, { weatherData?.location?.region}
                                </h3>
                            </div>
                        </div>
                        {/* current weathe tile */}
                        <div className="weather-tile  mx-[16px] p-2 " >
                            <div className="font-medium">
                                Current
                            </div>
                            <div className='flex justify-between'>
                            <div className='text-left'  >
                                <p className="text-2xl font-bold">
                                    {weatherData?.current?.temp_c} °C
                                </p>
                                <p className="text-xl">
                                    {weatherData?.current?.wind_kph} Km/h
                                </p>
                                <p className="font-medium ">
                                    humidity: {weatherData?.current?.humidity} %
                                </p>
                            </div>

                            <div>
                                <div className="text-lg font-medium text-right ">
                                    <img className='h-[58px] ' src={weatherData?.current?.condition?.icon} alt="" />
                                    <p>{weatherData?.current?.condition?.text}</p>
                                </div>
                            </div>
                            </div>


                        </div>

                        {/* weather forcast Tiles */}

                        <div >

                            {forecast.map((data)=>
                            (
                                <WeatherTile key={data?.date} weatherData={data}></WeatherTile>
                                
                            ))}

                        </div>

                        </div>
                    </div>
                    {/* Map */}
                    <div className='bg-orange-200  m-2 rounded-md md:w-max-[300px] md:w-[275px] w-[375px] h-[50%] '>
                        
                    {/* <APIProvider apiKey={'AIzaSyCtbinxkbIch6_Kn7B3RI8i1F_kGtqVruY'} onLoad={() => console.log('Maps API has loaded.')}>
                    <Map
                        zoom={13}
                        center={{ lat: -33.860664, lng: 151.208138 }}
                        className="h-[300px] my-6"
                    />
                    </APIProvider> */}
                   <iframe width="275" height="400" src="https://api.maptiler.com/maps/satellite/?key=VQTfFpkpYwZO5sjlduJy#14.1/31.39774/75.53641" className="rounded-xl" ></iframe>



                    </div>


                </div>
            </div> 
            <Footer></Footer>
        </div>
        </ProtectedRoute>
    )
}

export default Dashboard;
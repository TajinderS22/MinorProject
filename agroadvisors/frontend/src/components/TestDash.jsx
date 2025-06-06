/* eslint-disable react-hooks/exhaustive-deps */
import React,{useContext, useState,useEffect} from "react";
import axios from "axios";
import WeatherTile from "./WeatherTile";
import MainWorker from "./MainWorker";
import Navbar from "./Navbar";
// MapCameraChangedEvent
import Footer from './Footer'
import UserContext from "../Utils/UserContext";
import { MAP_TILER_API_KEY } from "../Utils/SecretConstants";




const TestDash=()=>{
    const {weatherDataExternal,setweatherDataExternal}=useContext(UserContext);
    const [Longitude,setLongitude]=useState(null)
    const [Latitude,setLatitude]=useState(null)
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setLatitude(position.coords.latitude);
            setLongitude(position.coords.longitude);
          },
          (error) => {
            console.error("Error getting location:", error);
          },
          {
            enableHighAccuracy: true, // Set to true for better accuracy
            timeout: 5000, // Time limit for the request
            maximumAge: 0, // Don't use cached location
          }
        );
      } else {
        console.log("Geolocation is not available on this device/browser.");
      }


      useEffect(() => {
        const getWeatherDataFromServer = async () => {
            const data = { latitude: Latitude, longitude: Longitude };
            try {
                const response = await axios.post('http://localhost:3000/api/weather', data, {
                    headers: {
                        "Content-Type": "application/json"
                    }
                });
                setweatherDataExternal(response.data);
            } catch (error) {
                console.log.error("Error fetching weather data:", error);
            }
        };

        getWeatherDataFromServer();
    }, [Latitude, Longitude]); 
    
    const weatherData=weatherDataExternal

    let forecast=weatherData? weatherData?.forecast: "wait";
    forecast=forecast.forecastday;

    if(!weatherData) return null;

    return(

        <div >
            <Navbar/>
            <div className="flex justify-between not-md:flex-col min-h-[800px] max-w-7xl mt-2 mx-auto">
                {/* Input data  */}
                <MainWorker/>
                {/* Weather Data and map thing  */}
                <div className='md:w-max-[300px] md:w-[300px] w-[375px] h-full not-md:w-[96%]'>
                    {/* weather */}
                    <div className='bg-indigo-300 not-md:w-full  m-2 rounded-md overflow-y-auto overflow-x-auto h-[400px]'>
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
                    <div className='bg-orange-200  m-2 rounded-md md:w-max-[300px] md:w-[275px] w-[375px] h-[50%] not-md:w-[100%] '>
            
                       <iframe className='w-[100%] rounded-xl' height="400" src={"https://api.maptiler.com/maps/satellite/?key="+ MAP_TILER_API_KEY+"#14.1/"+Latitude+"/"+Longitude } ></iframe>



                    </div>


                </div>
            </div> 
            <Footer></Footer>
    </div>
    )
}

export default TestDash;

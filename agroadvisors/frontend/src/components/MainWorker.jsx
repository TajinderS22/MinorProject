import React, { useContext, useState } from 'react';
import { useRef } from 'react';
import axios from 'axios'
import Loading from './Loading'
import UserContext from '../Utils/UserContext';


const MainWorker=()=>{

    const {setisResultsLoaded,setPredictionResults,weatherDataExternal,fertilizerModelSelected,setfertilizerModelSelected}=useContext(UserContext)

    let N
    let P
    let K
    let SoilType
    let Moisture
    let CropType
    let SoilHumidity
    let [Temperature, setTemperature] =useState(weatherDataExternal?.current?.temp_c)
    let [AirHumidity, setAirHumidity] =useState(weatherDataExternal?.current?.humidity)
    let [Pressure, setPressure] =useState(weatherDataExternal?.current?.pressure_mb/10)

    // console.log(weatherDataExternal)

    const handleFertilizerPredictionClick = async (e) => {
        e.preventDefault();
        if(fertilizerModelSelected){

            (N==""||P==""||K==""||Moisture=="")? alert("Please fill all the Fields")
            :  
            setisLoadingPredictionResults(true)
            
            const data = {N:N, P:P, K:K, SoilType:SoilType, Moisture:Moisture, CropType:CropType ,      Temperature: weatherDataExternal.current.temp_c,Humidity:weatherDataExternal.current?.   humidity}; // Your data to be sent
            console.log(data)

            try {
                const result = await axios.post('/predict/predict-fertilizer', data);
                // console.log(result.data);
                console.log(result?.data?.result)
                setisResultsLoaded(true);
                setPredictionResults(result.data?.result)  

            } catch (error) {
                console.error("Error:", error);  // Log any error that occurs
            }
        }
        else{
            (SoilHumidity==""||Moisture=="")? alert("Please fill all the Fields")
            :  
            setisLoadingPredictionResults(true)
            
            const data = {SoilHumidity:parseInt(SoilHumidity),Moisture:parseInt(Moisture),Temperature: Temperature,AirHumidity: AirHumidity,Pressure:Pressure}; // Your data to be sent
            console.log(data)

            try {
                const result = await axios.post('/predict/predict-irrigation', data);
                // console.log(result.data);
                console.log(result.data?.result)
                setisResultsLoaded(true);
                setPredictionResults(result.data?.result)  

            } catch (error) {
                console.error("Error:", error);  // Log any error that occurs
            }
        }
    };

    const Nref=useRef(null)
    const Pref=useRef(null)
    const Kref=useRef(null)
    const SoilTyperef=useRef(null)
    const CropTyperef=useRef(null)
    const Moistureref=useRef(null)
    const SoilHumidityref=useRef(null)
    // const AirHumidityref=useRef(weatherDataExternal.current?.humidity)
    // const Temperatureref=useRef(weatherDataExternal.current?.temp_c)
    // const Pressureref=useRef(weatherDataExternal.current.pressure_mb/10)
    

    const handleChangeTemp=(e)=>{
        setTemperature(e.target.value)
        // console.log(Temperature)

    }
    const handleChangeAirHumidity=(e)=>{
        setAirHumidity(e.target.value)
        // console.log(AirHumidity)

    }

    const handleChangePressure=(e)=>{
        setPressure(e.target.value)
        // console.log(Pressure)

    }
    
    const handleChange=()=>{
        N=Nref?.current?.value
        P=Pref?.current?.value
        K=Kref?.current?.value
        SoilType=SoilTyperef?.current?.value
        Moisture=Moistureref?.current?.value
        CropType=CropTyperef?.current?.value
        SoilHumidity=SoilHumidityref?.current?.value


        // console.log(N)
        // console.log(P)
        // console.log(K)
        // console.log(SoilType)
        // console.log(Moisture)
        // console.log(CropType)
        // console.log(SoilHumidity)
    }
    

    const [isLoadingPredictionResults,setisLoadingPredictionResults]=useState(false);
    
    return(

        <div className='p-auto bg-sky-300/70 py-4 rounded-lg  min-w-[300px] max-w-[1000px] w-[75%] not-md:w-[96%] m-2'>
            <div>

            </div>
            <div className='w-11/12 mx-auto'>
                <p className='md:text-5xl text-2xl font-bold text-green-700' >
                    {fertilizerModelSelected? "Fertilizer Recommendation System" : "Irrigation Recommendation System" }
                </p>
                {}
                
                {isLoadingPredictionResults?<Loading/> :
                
                    // input FORM
                <form action="" className=' ' >
                <div className=' pt-8 w-full m-auto border-1 border-green-900 rounded-xl mt-6 hover:shadow-2xl shadow-amber-700 px-6 min-h-[400px]' >
                    <div className='md:flex not-md:flex-col justify-between min-h-[300px] max-w-[800px]'>
                        {

                            fertilizerModelSelected?

                            <div className='flex flex-col my-6 mx-2 '>
                            <div className='flex justify-between not-md:flex-col ' >
                                <label className ='my-auto mx-2' htmlFor="Nitrogen">Nitrogen (N) </label>
                                <input  ref={Nref}  onChange={handleChange} id='Nitrogen' type="number" className='bg-gray-300  p-2  rounded-lg border-1 border-green-600 my-4 min-w-44 hover:shadow-2xl hover:shadow-amber-700 '   placeholder='Nitrogen' />
                            </div>
                            <div className='flex justify-between not-md:flex-col ' >
                                <label className='my-auto mx-2' htmlFor="Phosphorous">Phosphorous(p)</label>
                                <input  ref={Pref} onChange={handleChange} id='Phosphorous' type="number" className='bg-gray-300 p-2  rounded-lg border-1 border-green-600 my-4 min-w-44  hover:shadow-2xl hover:shadow-amber-700'   placeholder='Phosphorous' />
                            </div>
                            <div className='flex justify-between not-md:flex-col ' >
                                <label className='my-auto mx-2' htmlFor="Potassium">Potassium (K)</label>
                                <input  ref={Kref} onChange={handleChange} id='Potassium' type="number" className='bg-gray-300  p-2  rounded-lg border-1 border-green-600 my-4 min-w-44  hover:shadow-2xl hover:shadow-amber-700'   placeholder='Potassium' />
                            </div>
                        </div>


                        :
                        
                        <div>
                        <div className='flex flex-col my-6 mx-2 '>
                            <div className='flex justify-between not-md:flex-col ' >
                                <label className='my-auto mx-2' htmlFor="Soilhumidity">Soilhumidity</label>
                                <input  ref={SoilHumidityref} onChange={handleChange} id='Soilhumidity' type="number" className='bg-gray-300 p-2  rounded-lg border-1 border-green-600 my-4 min-w-44  hover:shadow-2xl hover:shadow-amber-700'   placeholder='Soilhumidity' />
                            </div>
                        </div>

                        <div className='flex flex-col my-6 mx-2 '>
                            <div className='flex justify-between not-md:flex-col ' >
                                <label className='my-auto mx-2' htmlFor="Temperature">Temperature</label>
                                <input onChange={handleChangeTemp} id='Temperature' type="number" value={Temperature} className='bg-gray-300 p-2  rounded-lg border-1 border-green-600 my-4 min-w-44  hover:shadow-2xl hover:shadow-amber-700'   placeholder='Soilhumidity' />
                            </div>
                        </div>

                        <div className='flex flex-col my-6 mx-2 '>
                            <div className='flex justify-between not-md:flex-col ' >
                                <label className='my-auto mx-2' htmlFor="AirHumidity">Air Humidity</label>
                                <input  onChange={handleChangeAirHumidity} id='AirHumidity' type="number" value={AirHumidity} className='bg-gray-300 p-2  rounded-lg border-1 border-green-600 my-4 min-w-44  hover:shadow-2xl hover:shadow-amber-700'   placeholder='Soilhumidity' />
                            </div>
                        </div>

                        

                        
                        </div>


                        }
                        {/* 2nd co */}
                        {
                            fertilizerModelSelected?

                            <div className="flex flex-col my-6 mx-2  ">

                            <div className='flex justify-between not-md:flex-col mt-1 ' >
                                <label className='my-auto mx-2' htmlFor="Moisture">Moisture</label>
                                <input  ref={Moistureref} onChange={handleChange} id='Moisture' type="number" className='bg-gray-300  p-2  rounded-lg border-1 border-green-600 my-4  min-w-44 hover:shadow-2xl hover:shadow-amber-700'   placeholder='Moisture' />
                            </div>

                            <div className='flex justify-between not-md:flex-col ' >
                                <label className ='my-auto mx-2' htmlFor="SoilType">SoilType</label>
                                <select  ref={SoilTyperef} onChange={handleChange} id='SoilType' type="number" className='bg-gray-300  p-2  rounded-lg border-1 border-green-600 my-4  min-w-44 hover:shadow-2xl hover:shadow-amber-700'   placeholder='SoilType' >
                                    <option value="Sandy">Sandy</option>
                                    <option value="Loomy">Loomy</option>
                                    <option value="Black">Black</option>
                                    <option value="Red">Red</option>
                                    <option value="Clayey">Clayey</option>

                                </select>
                            </div>
                                <div className='flex justify-between not-md:flex-col' >
                                <label  className ='my-auto mx-2' htmlFor="CropType">Crop Type</label>
                                <select  ref={CropTyperef} onChange={handleChange} id='CropType' type="number" className='bg-gray-300 p-2  rounded-lg border-1 border-green-600 my-4  min-w-44 hover:shadow-2xl hover:shadow-amber-700'  placeholder ='Nitrogen' >
                                    <option value="Maize">Maize</option>
                                    <option value="Sugarcane">Sugarcane</option>
                                    <option value="Cotton">Cotton</option>
                                    <option value="Tobacco">Tobacco</option>
                                    <option value="Paddy">Paddy</option>
                                    <option value="Barley">Barley</option>
                                    <option value="Pulses">Pulses</option>
                                    <option value="Ground Nuts">Ground Nuts</option>
                                    <option value="Millets">Millets</option>
                                    <option value="Oil Seeds">Oil Seeds</option>
                                    <option value="Wheat">Wheat</option>

                                </select>
                            </div>


                        </div>

                        :

                        <div className="flex flex-col my-6 mx-2  ">
                            <div className='flex justify-between not-md:flex-col mt-1 ' >
                                <label className='my-auto mx-2' htmlFor="Moisture">Moisture</label>
                                <input  ref={Moistureref} onChange={handleChange} id='Moisture' type="number" className='bg-gray-300  p-2  rounded-lg border-1 border-green-600 my-4  min-w-44 hover:shadow-2xl hover:shadow-amber-700'   placeholder='Moisture' />
                            </div>

                            <div className='flex flex-col my-6 mx-2 '>
                            <div className='flex justify-between not-md:flex-col ' >
                                <label className='my-auto mx-2' htmlFor="Pressure">Pressure</label>
                                <input onChange={handleChangePressure} id='Pressure' type="number" value={Pressure} className='bg-gray-300 p-2  rounded-lg border-1 border-green-600 my-4 min-w-44  hover:shadow-2xl hover:shadow-amber-700'   placeholder='Soilhumidity' />
                            </div>

                        </div>

                        </div>

                        }
                    </div>
                    <button className='bg-green-700/80 w-[200px] rounded-xl mb-14 p-2 border-1 border-black hover:bg-green-700/60 ' onClick={handleFertilizerPredictionClick} >  Submit </button>
                </div>
                
                </form>

                }

                <div className='mt-24' >
                    <button className='bg-amber-800 p-3 rounded-lg text-2xl font-bold text-white min-w-[300px]' onClick={()=>{
                        setfertilizerModelSelected(!fertilizerModelSelected);
                        setisResultsLoaded(false);
                        setisLoadingPredictionResults(false)
                    }} >
                        {fertilizerModelSelected?"Irrigation System":"Fertilizer Prediction"}
                    </button>
                </div>

            </div>
        </div>
        

    )
}

export default MainWorker;

import React, { useContext, useEffect, useState } from 'react'
import UserContext from '../Utils/UserContext'
import client from '../Utils/Gemini'

const Loading = () => {
  const {isResultsLoaded,PredictionResults,fertilizerModelSelected}=useContext(UserContext)
  console.log(isResultsLoaded)
  console.log(PredictionResults)
  const [fertInfoLoaded,setfertInfoLoaded]=useState(false)
  const [data1,setdata1]=useState(null)
  const getGPTResults = async () => {
    const response = await client.models.generateContent({
      model: 'gemini-2.0-flash',
      contents: `give me information about fertilizer ${PredictionResults} and how to use it in how much area of soil in 200 words give answer in plain text no formatting. `,
    });
    return response?.text || "No response";
  };

  useEffect(() => {
    const fetchData = async () => {
      if(PredictionResults && fertilizerModelSelected){
      const result = await getGPTResults();
      setdata1(result);
      setfertInfoLoaded(true)
      }
    };
    fetchData();
  }, [PredictionResults]);
  

  console.log(data1)

 
  if(fertilizerModelSelected){
    return (
    <div>
      {
        isResultsLoaded?

        <div>
            <div className='bg-sky-300 min-h-[500px] shadow-2xl py-8 shadow-amber-700 mt-6 rounded-xl h-3/6 w-full'>
              <div>
                <div className=" mx-4 mt-4 p-6 bg-green-200/70 hover:bg-green-200/30 border-1 border-green-500 rounded-2xl shadow-lg shadow-green-700 text-center">
                <h2 className="text-2xl font-semibold text-green-800">✅ Recommendation: <span className="font-bold text-red-700">{PredictionResults}</span></h2>
                <p className="mt-4 text-green-700 text-base">Carefully use the fertilizer as per you Crop and Soil Type</p>
                <p className="text-green-700 text-base">We here help you Identify the right Type of Fertilizer as per your availability</p>
                </div>
                
                  {fertInfoLoaded?
                  <div className='bg-green-200/70 mt-6 mx-4 rounded-lg shadow-2xl shadow-green-700 px-4'>

                    <p className="p-2">
                      {data1}
                    </p>

                  </div>
                  
                  :

                    <div className="loader-container mt-10">
                    <div className="spinner" />
                    </div>

                  }
              </div>
          </div>
        </div>
        :

        <div>
        <div className='bg-sky-300 min-h-[500px] shadow-2xl shadow-amber-700 rounded-xl h-3/6 w-full'>
        <div className="loader-container mt-10">
        <div className="spinner" />
        </div>

        </div>
      </div>
    
    

      }
    </div>
  )
  }
  else{

    return (
    <div>
      {
        isResultsLoaded?
        
        <div>
            <div className='bg-sky-300 min-h-[500px] shadow-2xl py-8 shadow-amber-700 mt-6 rounded-xl h-3/6 w-full'>
              <div className='flex flex-col justify-between h-[100px]' >
              
              <p className="text-green-800 font-bold text-2xl" >
              {console.log(PredictionResults)}
                {PredictionResults==1?
                
                <div>
                  <div className=" mx-4 mt-4 p-6  border-1 bg-green-200/70 hover:bg-green-200/30 border-green-500 rounded-2xl shadow-lg shadow-green-700 text-center">
                  <h2 className="text-3xl font-semibold text-blue-800">🌱 Recommendation: <span className="font-bold text-green-800">IRRIGATE</span></h2>
                  <p className="mt-4 text-blue-700 text-base">Your soil moisture is below the threshold.</p>
                  <p className="text-blue-700 text-base">We recommend watering your crops today to maintain healthy growth.</p>
                  </div>
                </div>
              :
              
              <div>
                <div className=" mx-4 mt-4 p-6 bg-red-200/70 hover:bg-red-200/30 border-1 border-red-500 rounded-2xl shadow-lg shadow-red-700 text-center">
                <h2 className="text-2xl font-semibold text-green-800">✅ Recommendation: <span className="font-bold text-red-700">DO NOT IRRIGATE</span></h2>
                <p className="mt-4 text-red-700 text-base">Soil moisture is adequate.</p>
                <p className="text-red-700 text-base">Hold off on watering to conserve water and avoid over-saturation.</p>
                </div>
              </div>
              
              }
              </p>
              </div>
          </div>
        </div>
        :

        <div>
        <div className='bg-sky-300 min-h-[500px] shadow-2xl shadow-amber-700 rounded-xl h-3/6 w-full'>
        <div className="loader-container mt-10">
        <div className="spinner" />
        </div>

        </div>
      </div>
    
    

      }
    </div>
  )

  }
}

export default Loading
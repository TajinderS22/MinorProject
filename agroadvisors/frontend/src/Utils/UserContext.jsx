import React ,{createContext, useState } from 'react'

const UserContext=createContext('');

export const UserContextProvider=({children})=>{
  const [isLogin ,setisLogin] = useState(false);
    const [isUserLogedIn,setisUserLogedIn]=useState(false);
    const [isResultsLoaded,setisResultsLoaded]= useState(false);
    const [PredictionResults,setPredictionResults]=useState('')
    const [weatherDataExternal,setweatherDataExternal]=useState('')
    const [fertilizerModelSelected, setfertilizerModelSelected] = useState(true);
    const value={isLogin,setisLogin,isUserLogedIn,setisUserLogedIn,isResultsLoaded,setisResultsLoaded,PredictionResults,setPredictionResults,weatherDataExternal,setweatherDataExternal,fertilizerModelSelected,setfertilizerModelSelected} 

    return(
      <UserContext.Provider value={value} >
        {children}
      </UserContext.Provider>
    )
}

export default UserContext;

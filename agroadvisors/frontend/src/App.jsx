import {  } from 'react'
import Home from './components/Home'
import './App.css';
import MainContainer from './components/MainContainer';
import { UserContextProvider } from './Utils/UserContext';


function App() {


  return (
    <div className=' app-container w-11/12 h-full  mx-auto  rounded-xl  shadow-md '>
      <UserContextProvider>
        <MainContainer/>  
      </UserContextProvider> 
    </div>
  )
}

export default App

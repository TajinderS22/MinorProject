import React from 'react'
import {createBrowserRouter, Router, RouterProvider, Outlet} from 'react-router-dom'
import Home from './Home'
import Navbar from './Navbar'
import { UserContextProvider } from '../Utils/UserContext'
import TestDash from './TestDash'
import About from './About'
import Signup from './Authentication/Signup'
import Dashboard from './Dashboard'

const MainContainer = () => {
    const AppRouter=createBrowserRouter([
        {
            path:"/",
            element:<Home/>
        },
        {
            path:'/testdash',
            element:<TestDash/>
        },
        {
            path:"/about",
            element:<About/>
        },
        {
            path:"/auth",
            element:<Signup/>
        },{
            path:"/dashboard",
            element:<Dashboard/>
        }
    ])
  return (
        <div className='home-screen h-full max-w-[1700px] w-full mx-auto mt-0' >
        <RouterProvider router={AppRouter}>
        </RouterProvider>
        </div>
        

  )
}

export default MainContainer
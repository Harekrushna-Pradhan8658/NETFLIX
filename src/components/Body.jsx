import React from 'react'
import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Signin from './Signin'

function Body() {

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/signin",
      element: <Signin />,
    },
  ])



  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  )
}

export default Body;
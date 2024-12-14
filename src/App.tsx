// import { BrowserRouter, Routes, Route } from "react-router-dom"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"
import Filter from "./pages/Filter"
import Details from "./pages/Details"

import './scss/index.scss'
import DashboardLayout from "./pages/DashboardLayout"

const router = createBrowserRouter([
 
  {
    path: '/',
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <Login />,
      },
      {
        path: '/dashboard',
        element: <Dashboard />,
      },
      {
        path: '/filter',
        element: <Filter />,
      },
      {
        path: '/details/:id',
        element: <Details />,
      },
    ]
  },
])

function App() {
  return (
    <RouterProvider router={router}/>
  )
}

export default App;



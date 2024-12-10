import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"
import Filter from "./pages/Filter"
import Details from "./pages/Details"

import './scss/index.scss'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="filter" element={<Filter />} />
        <Route path="details" element={<Details />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

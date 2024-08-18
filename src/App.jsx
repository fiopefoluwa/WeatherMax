import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react'
import React from 'react'
import './App.css'
import { Homepage } from './pages/homepage'
import { SPage } from "./pages/SPage";

function App() {
  const [count, setCount] = useState(0)
  // const routes = [

  // ]

  return (
    <>
        <BrowserRouter>
      <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="/spage" element={<SPage/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}


export default App

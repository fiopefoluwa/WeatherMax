import { useState } from 'react'
import React from 'react'
import './App.css'
import { Homepage } from './homepage'

function App() {
  const [count, setCount] = useState(0)
  // const routes = [

  // ]

  return (
    <>
        <Homepage/>
    </>
  )
}


export default App

import { useState } from 'react'
import Cloud  from './Components/images/Cloud.png'
import SearchIcon from './Components/images/Search.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <div className='flex text-3xl justify-center'>
          <p>Weather</p>
          <p>Max</p>
        </div>
        <div className='translate-y-2 transform' >
          <p className='text-xs'>Fast, precise weather prediction and forecasts</p>
        </div>
        <div className='relative flex translate-y-6 transform'>
          <input 
          type="text" 
          placeholder= 'City or state' className='text-4x1 bg-inherit border rounded-lg w-[120%] pl-8 p-1'/>
          <img src={SearchIcon} 
          width={15}
          alt="Search Icon" className='absolute left-2 top-1/2 transform -translate-y-1/2'/>
        </div>
        <div className='translate-y-16 transform'>
          <div className='justify-center flex'>
              <img src={Cloud} 
            alt="Cloud Image" 
            width={60}
            />
          </div>
          <div className='text-center'>
            <p>Type in your city to get</p>
            <span>weather forecasts.</span>
          </div>            
        </div>
    </>
  )
}

export default App

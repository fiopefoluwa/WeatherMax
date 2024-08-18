import { useState } from 'react'
import Cloud  from './Components/images/Cloud.png'
import { MyButton } from './Components/button'
import SearchIcon from './Components/images/Search.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <div className='flex justify-center text-4xl font-semibold'>
          <p>Weather</p>
          <p className='text-[#31A9ED]'>Max</p>
        </div>
        <div className='translate-y-2 transform text-[#7E839A]' >
          <p className='text-xs'>Fast, precise weather prediction and forecasts</p>
        </div>
        <div className='relative flex translate-y-6 transform'>
          <input 
          type="text" 
          placeholder= 'City or state' className='text-4x1 bg-inherit border rounded-lg w-[120%] pl-8 p-1 text-[#CACACA] bg-[#11131C]'/>
          <img src={SearchIcon} 
          width={15}
          alt="Search Icon" className='absolute left-2 top-1/2 transform -translate-y-1/2'/>
          <MyButton textContent="Go"/>
        </div>
        <div className='translate-y-16 transform'>
          <div className='justify-center flex'>
              <img src={Cloud} 
            alt="Cloud Image" 
            width={60}
            />
          </div>
          <div className='text-center text-[#7E839A] transform translate-y-2'>
            <p>Type in your city to get</p>
            <span>weather forecasts.</span>
          </div>            
        </div>
    </>
  )
}

export default App

import { useState } from 'react'
import data from './data'
import Lists from './Lists'

import './App.css'

function App() {
const [people, setPoeple] = useState(data)

  return (
    <section 
    className='
    h-auto w-auto 
    p-[1rem]
    bg-white 
    rounded-sm
    m-[2rem]
    mx-auto
    shadow-lg
    '>
      <h1 className='text-center font-[Poppins] text-lg mt-2'>
        {people.length} birthdays today
      </h1>
      <Lists people={people} />
      <div className='flex align-center justify-center mb-2'>
      <button onClick={()=> setPoeple([])} className="bg-violet-700 p-3 rounded-md text-slate-50 active:scale-110 transition-transform">Clear all</button>
      </div>
    </section>
  )
}

export default App

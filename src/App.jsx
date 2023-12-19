import { useState, useEffect } from 'react'
import Loading from './Loading'
import Tour from './Tour'
import './App.css'
const url = 'https://api.themoviedb.org/3/movie/popular?api_key=38eda4ed2c898e1adbeca7313af23a04'



function App() {
const [loading, setLoading] = useState(true)
const [data, setData] = useState([])
useEffect(()=>{
  fetchData();
}, [])


async function fetchData() {
  try{
  const res = await fetch(url);
  const  tours = await res.json();
  setData(tours.results)
  setLoading(false);
  console.log(data);
}
catch(error){
  setLoading(false);
  console.log(error);
}
}
return (
  <section className='flex items-center justify-center mx-auto bg-gradient-to-tr bg-slate-900'>
      {loading ? <Loading /> : <Tour info={data} />} 
    </section>
  )
}

export default App

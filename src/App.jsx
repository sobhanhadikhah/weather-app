import { useState } from 'react'
import { useQuery } from 'react-query'
import fetchCities from './api/fetchcities'
import { City } from './components/';
function App() {
  const { status, data } = useQuery("cities", fetchCities);

  if (status === "loading") {
    return (<div className='h-screen grid place-content-center bg-purple-600 ' >
      <h1 className='text-4xl md:text-8xl text-center grid place-content-center font-bold grid-cols-2 text-white  font-mono' >Loading <span className='animate-spin' >|</span> </h1>
    </div>)

  } else if (status === "error" || status === "idle") {
    return (<div className='h-screen grid place-content-center bg-purple-600 ' >
      <h1 className='text-4xl md:text-8xl text-center grid place-content-center font-bold grid-rows-1 text-red-500 font-mono ' >somthing went Wrong !!! <span className='animate-spin' >|</span> </h1>
    </div>)
  }
  return (
    <div className='bg-slate-800 h-screen' >
      <div className='max-w-[1240px] mx-auto' >
        <h1 className='text-center  font-mono font-extrabold text-3xl pt-6 text-white ' >Citys</h1>
        {status === "error" && <h1>something wrong</h1>}
        {status === "loading" && <h1>something loading</h1>}
        {status === "success" && (
          <div>
            {data && data.map(mdata => {
              const { id } = mdata;
              return <City key={id} {...mdata} />
            })}
          </div>
        )}

      </div>
    </div>
  )
}

export default App

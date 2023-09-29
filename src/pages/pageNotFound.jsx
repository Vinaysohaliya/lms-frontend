import React from 'react'
import { useNavigate } from 'react-router-dom'

const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <div className=' w-full h-screen flex flex-col justify-center items-center bg-[#1A2238]'>
      <h1 className=' text-9xl font-extrabold text-white tracking-wider'>404</h1>
      <div className=' bg-black text-white px-2 text-sm rounded rotate-12 absolute'>Page Not Found....</div>
      <button onClick={() => navigate(-1)} className=' mt-5'>
        <a className=' relative inline-block text-sm font-medium text-[#FF6A3D] group active:text-yellow-500 focus:outline-none focus:ring'>
          <span className=' relative block px-8 py-3 bg-[#1A2238] border-current'>Go Back</span>0
        </a>
      </button>

    </div>
  )
}

export default PageNotFound
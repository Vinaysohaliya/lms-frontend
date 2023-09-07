import React from 'react'
import HomeLayout from '../layout/HomeLayout'
import { Link } from 'react-router-dom'
import Homeimg from '../assets/Images/homePageMainImage.png'

const HomePage = () => {
  return (
    <HomeLayout >
      <div className=' bg-gray-900 p-10 text-white flex items-center justify-center gap-10   h-[90vh]'>
        <div className=' w-1/2 space-y-6'>
          <h1 className=' text-5xl font-semibold'>Find Out Best
            <span className='text-yellow-500 font-bold '>online coures</span>
          </h1>
          <p className=' text-xl '>
            
          </p>
          <div className=' space-x-6'>
            <Link to="/courses">
              <button className=' bg-yellow-500 px-5 py-3 rounded-md font-semibold text-lg cursor-pointer hover:bg-yellow-600 transition-all ease-in-out'>
                Exlpore Coures
              </button>
            </Link>
            <Link to="/contatc">
              <button className=' border  px-5 py-3 rounded-md font-semibold text-lg cursor-pointer hover:bg-yellow-600 transition-all ease-in-out duration-300'>
                Contact
              </button>
            </Link>
          </div>

        </div>
        <div className=' w-1/2 flex items-center justify-center'>
          <img alt='home' src={Homeimg}></img>
        </div>
      </div>
    </HomeLayout>
  )
}

export default HomePage

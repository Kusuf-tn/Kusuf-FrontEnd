import React from 'react'
import Sliders from '../components/LandingPage/Elements/Sliders'

const Home = () => {
  return (
    <div className="w-screen h-screen  bg-gray-900 ">
      <div className="flex flex-rox justify-center text-center align-middle ">
        <h1 className="flex text-[10vw] font-semibold text-secondary">
          Hello <span className="ml-6 animate-wave">👋🏻</span>, Kusuf
        </h1>
      </div>
      <div className="flex flex-col gap-4   overflow-hidden ">
        <Sliders color="bg-purple-600" className="animate-slider" />
        <Sliders color="bg-purple-500" className="delay-100 animate-slider" />
        <Sliders color="bg-blue-300" />
      </div>
    </div>
  )
}

export default Home

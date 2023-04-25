import React from 'react'
import Button from '../components/Buttons/Button'
const Error = () => {
  return (
    <div className="flex flex-col justify-between align-middle text-center ">
      <div className="  w-full">
        <h1 className="text-[10vw] text-red-800 font-extrabold">404</h1>
        <p className="font-thin text-gray-800 text-2xl ">Page not found</p>
      </div>
      <div className="mt-5">
        <Button className="text-blue-100" to="/">
          Go back home
        </Button>
      </div>
    </div>
  )
}

export default Error

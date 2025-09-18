import React from 'react'
import Connectpic from '../../../assets/images/Connectpic.png'

const Connectwithus = () => {
  return (
    <div className="w-full h-[100vh] bg-gray-100 flex items-center justify-center">
      <div className="flex flex-col items-center text-center px-4">
        <img
          src={Connectpic}
          alt="Connect with us"
          className="max-w-[500px] max-h-[300px] mb-6"
        />
        <h1 className="max-w-[552px]   text-xl md:text-3xl font-bold text-gray-900 mb-2">
          Connect With Us – Let's Shape Your YouTooArt Experience.
        </h1>
        <h4 className="text-gray-600 mb-6">
          Have questions, suggestions, or need assistance? We're here for you!
        </h4>
        <button className="px-6 py-3 bg-gray-100 text-black rounded-[40px] border border-black shadow bg-gray-100 transition">
          Contact Us
        </button>
      </div>
    </div>
  )
}

export default Connectwithus

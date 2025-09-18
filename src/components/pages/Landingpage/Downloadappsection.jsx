import React from 'react'
import mobilepicture from '../../../assets/images/mobilepicture.png'

const Downloadappsection = () => {
  return (
    <div className="h-auto md:h-[100vh] bg-white flex flex-col md:flex-row items-center justify-center px-6 md:px-16">
      
      {/* Left side */}
      <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
        <img
          src={mobilepicture}
          alt="Mobile App Preview"
          className="h-[400px] md:h-[540px] object-contain"
        />
      </div>

      {/* Right side */}
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Download The <br /> YouTooArt App
        </h1>
        <p className="text-gray-600 max-w-md mb-6">
          Elevate your artistry with the YouTooArt app. Download now to explore casting calls, connect with fellow artists, and collaborate on the go. Your masterpiece awaits — take the first step today.
        </p>

        {/* App store buttons */}
        <div className="flex gap-4">
          <img
            src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
            alt="App Store"
            className="h-12"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
            alt="Google Play"
            className="h-12"
          />
        </div>
      </div>
    </div>
  )
}

export default Downloadappsection

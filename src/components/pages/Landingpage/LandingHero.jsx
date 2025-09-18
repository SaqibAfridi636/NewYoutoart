import React from "react";
// import HeroImage from "../assets/images/hero-illustration.png"; // replace with your actual image path
import HeroImage from '../../../assets/images/HeroImage.png'
const LandingHero = () => {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col md:flex-row items-center">

        {/* Left content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
            Connect, Collaborate, Create:{" "}
            <span className="text-red-500">YouTooArt</span> – Your Artistic
            Marketplace.
          </h1>
          <p className="mt-4 text-gray-600 max-w-md">
            Empowering artists to forge meaningful connections and bring
            creative visions to life. Join the artistic revolution at YouTooArt.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-4">
            <button className="px-6 py-3 bg-white text-black rounded-lg shadow hover:bg-gray-800">
              Get Started
            </button>
          </div>

          {/* App store buttons */}
          <div className="mt-6 flex gap-4 justify-center md:justify-start">
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

        {/* Right image */}
        <div className="w-full md:w-1/2  flex justify-center mb-8 md:mb-0">
          <img
            src={HeroImage}
            alt="Artists illustration"
            className="max-w-full h-auto sm:w-[100%]"
          />
        </div>
      </div>
    </section>
  );
};

export default LandingHero;

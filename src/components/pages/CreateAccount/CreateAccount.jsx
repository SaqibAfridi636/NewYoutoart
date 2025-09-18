import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../../assets/Logos/Logo.png";
import Loginpic from "../../../assets/images/Loginpic.png";

const Signup = () => {
  const navigate = useNavigate();

  const handleSendOtp = () => {
    navigate("/otp"); // always go to OTP page
  };

  return (
    <div className="flex h-screen relative">
      {/* Left Section */}
      <div className="w-full md:w-1/2 flex flex-col px-10 md:px-20">
        {/* Logo at Top */}
        <div className="py-6 flex items-center">
          <img src={Logo} alt="Logo" className="h-10" />
          <h1 className="ml-2 text-lg font-semibold">YOUTOOART</h1>
        </div>

        {/* Form (centered vertically but below logo) */}
        <div className="flex flex-col justify-center flex-1">
          {/* Title */}
          <h2 className="text-2xl font-bold mb-6">Create Account</h2>

          {/* Contact Number */}
          <label className="text-sm mb-2">Contact Number</label>
          <div className="flex items-center border rounded-md mb-4">
            <span className="px-3">🇮🇳 +91</span>
            <input
              type="text"
              placeholder="Enter Contact"
              className="flex-1 px-3 py-2 outline-none focus:ring focus:ring-indigo-300 border-l"
            />
          </div>

          {/* Send OTP Button */}
          <button
            onClick={handleSendOtp}
            className="w-full h-10 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition"
          >
            Send OTP
          </button>

          {/* Create Account */}
          <p className="text-sm mt-4">
            Already have an account yet?{" "}
            <a href="/login" className="text-blue-600 font-medium">
              Login
            </a>
          </p>

          {/* Terms */}
          <p className="text-xs text-gray-500 mt-6">
            By <span className="font-semibold">Signing In</span>, you agree with the{" "}
            <a href="#" className="text-blue-600">
              Terms & Conditions
            </a>{" "}
            of You2Art
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="hidden md:flex w-1/2">
        <img
          src={Loginpic}
          alt="Login visual"
          className="w-full h-full object-cover rounded-xl"
        />
      </div>
    </div>
  );
};

export default Signup;

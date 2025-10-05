import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../../assets/Logos/Logo.png";
import Loginpic from "../../../assets/images/Loginpic.png";
import AlreadyAccountLogo from "../../../assets/Logos/AlreadyAccountLogo.png";

const OTP = () => {
    const navigate = useNavigate();
    const [otp, setOtp] = useState("");
    const [showCreatedPopup, setShowCreatedPopup] = useState(false);
    const [showCompleteProfilePopup, setShowCompleteProfilePopup] = useState(false);
    const [showStep2Popup, setShowStep2Popup] = useState(false);
    const [showVerifySuccess, setShowVerifySuccess] = useState(false);


    const handleVerify = () => {
        if (otp.length === 6) {
            // show green success popup first
            setShowVerifySuccess(true);

            // after a short moment, hide success and open "Account Created"
            setTimeout(() => {
                setShowVerifySuccess(false);
                setShowCreatedPopup(true);
            }, 1200); // feel free to tweak the duration
        } else {
            alert("Please enter a valid 6-digit OTP");
        }
    };

    const handleCreateProfile = () => {
        setShowCreatedPopup(false);
        setShowCompleteProfilePopup(true);
    };

    const handleSaveAndNext = () => {
        setShowCompleteProfilePopup(false);
        setShowStep2Popup(true);
    };

    // When user wants to skip completing profile for now
    const handleSkipProfile = () => {
        // Close any profile-related popups
        setShowCompleteProfilePopup(false);
        setShowStep2Popup(false);
        setShowCreatedPopup(false);
        // Optionally navigate to home or keep user on the same page. We'll keep them on the same page.
    };

    return (
        <div className="flex h-screen relative">
            {/* Left Section */}
            <div className="w-full md:w-1/2 flex flex-col px-10 md:px-20">
                {/* Logo fixed at the top */}
                <div className="py-6 flex items-center">
                    <img src={Logo} alt="Logo" className="h-10" />
                    <h1 className="ml-2 text-lg font-semibold">YOUTOOART</h1>
                </div>

                {/* Form content */}
                <div className="flex flex-col justify-center flex-1">
                    <button
                        onClick={() => navigate(-1)}
                        className="text-2xl  font-bold mb-2 pr-[500px]"
                    >
                        ←
                    </button>

                    <h2 className="text-2xl font-bold mb-2">Verify Your Account</h2>
                    <p className="w-[270px] text-sm text-gray-600 mb-6 max-w-sm leading-relaxed">
                        Please enter 6 digits OTP you received on your registered phone{" "}
                        <span className="text-blue-600 font-medium">+91325******41</span>
                    </p>

                    <label className="text-sm mb-2">Enter OTP</label>
                    <input
                        type="text"
                        maxLength="6"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                        placeholder="000000"
                        className="w-full px-3 py-2 mb-4 border rounded-md outline-none focus:ring focus:ring-indigo-300 text-center"
                    />

                    <button
                        onClick={handleVerify}
                        className="w-full h-10 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition"
                    >
                        Verify
                    </button>

                    <p className="w-[270px] text-xs text-gray-500 pt-[150px]">
                        By <span className="font-semibold">Sign In</span>, you agree with{" "}
                        <a href="#" className="text-blue-600">
                            Terms & Conditions
                        </a>{" "}
                        of You2Art
                    </p>
                </div>

                {/*  Account Created Popup */}
                {showCreatedPopup && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                        <div className="max-w-[364px] max-h-[269px] bg-white p-6 rounded-lg shadow-lg text-center">
                            <div className="flex justify-center mb-4">
                                <img
                                    src={AlreadyAccountLogo}
                                    alt="Account Created"
                                    className="h-16 w-16"
                                />
                            </div>
                            <h3 className="text-lg font-bold mb-2">Account Created</h3>
                            <p className="text-sm text-gray-600 mb-4">
                                Your account has been created successfully. You can now start
                                exploring Talent and post casting calls.
                            </p>
                            <button
                                onClick={handleCreateProfile}
                                className="w-full h-10 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition"
                            >
                                Create Profile
                            </button>
                        </div>
                    </div>
                )}

                {/* Verification Success Popup */}
                {showVerifySuccess && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                        <div className="bg-white rounded-xl shadow-lg p-8 text-center">
                            <div className="mx-auto mb-4 h-20 w-20 rounded-full bg-emerald-500 grid place-items-center">
                                {/* Checkmark (SVG) */}
                                <svg viewBox="0 0 24 24" className="h-10 w-10 text-white">
                                    <path
                                        fill="currentColor"
                                        d="M9.0 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold">Verification Successful</h3>
                        </div>
                    </div>
                )}





                {/*  Step 1 - Choose Category Popup */}
                {showCompleteProfilePopup && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                        <div className="w-[580px] h-[580px] bg-white p-6 rounded-lg shadow-lg flex flex-col">
                            {/* Header */}
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="text-lg font-bold">Complete your Profile</h3>
                                <span className="text-blue-500">Step 1 of 2</span>
                            </div>
                            <hr className="w-full mt-4 mb-4" />

                            <div className="flex-1 overflow-y-auto text-left pr-2">
                                <h1 className="text-base font-semibold mb-4">Choose Category</h1>
                                <div className="grid grid-cols-2 gap-4">
                                    {[
                                        "Production House",
                                        "Director",
                                        "Actor",
                                        "Singer",
                                        "Musician",
                                        "Dancer",
                                        "Cinematographer",
                                        "Still Photographer",
                                        "Sound Mixing",
                                        "VFX",
                                        "Producer",
                                        "Stunt Director",
                                        "Art Director",
                                        "Dubbing Artist",
                                    ].map((category) => (
                                        <label
                                            key={category}
                                            className="flex items-center border rounded-md px-4 py-3 cursor-pointer hover:border-blue-500"
                                        >
                                            <input
                                                type="radio"
                                                name="category"
                                                value={category}
                                                className="mr-3 accent-blue-500"
                                            />
                                            <span className="text-gray-700">{category}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <div className="mt-6 ml-auto flex gap-4">
                                <button onClick={handleSkipProfile} className="w-[150px] h-10 bg-gray-200 rounded-full">
                                    Skip For Now
                                </button>
                                <button
                                    onClick={handleSaveAndNext}
                                    className="w-[150px] h-10 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition"
                                >
                                    Save and Next
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* Step 2 - Complete Profile Form Popup */}
                {showStep2Popup && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                        <div className="w-[580px] h-[580px] bg-white p-6 rounded-lg shadow-lg flex flex-col">
                            {/* Header */}
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="text-lg font-bold">Complete Profile</h3>
                                <span className="text-blue-500">Step 2 of 2</span>
                            </div>
                            <hr className="w-full mt-4 mb-4" />

                            {/* Upload Profile */}
                            <div className="w-full h-[140px] flex flex-col items-center border-2 border-dashed border-gray-300 rounded-lg p-10 mb-4">
                                <p className="text-gray-500">
                                    Drag and Drop or <span className="text-blue-600 cursor-pointer">Browse</span> an image
                                </p>
                                <p className="text-xs text-gray-400">File Size Limit: 2 MB</p>
                            </div>

                            {/* Form Inputs */}
                            <div className="grid grid-cols-2 gap-4 mb-4">
                                <label>
                                    First Name <span className="text-red-500">*</span>
                                    <input type="text" placeholder="Enter First Name" className="border px-3 py-2 rounded-md w-full" />
                                </label>
                                <label>
                                    Last Name <span className="text-red-500">*</span>
                                    <input type="text" placeholder="Enter Last Name" className="border px-3 py-2 rounded-md w-full" />
                                </label>
                            </div>

                            <div className="grid grid-cols-2 gap-4 mb-4">
                                <label>
                                    Country <span className="text-red-500">*</span>
                                    <select className="border px-3 py-2 rounded-md w-full">
                                        <option>Choose Country</option>
                                    </select>
                                </label>
                                <label>
                                    City <span className="text-red-500">*</span>
                                    <select className="border px-3 py-2 rounded-md w-full">
                                        <option>Choose City</option>
                                    </select>
                                </label>
                            </div>

                            <label>
                                Short Bio <span className="text-red-500">*</span>
                            </label>
                            <textarea placeholder="Enter Bio" rows="3" className="border px-3 py-2 rounded-md w-full mb-4"></textarea>

                            {/* Buttons */}
                            <div className="mt-auto flex justify-between">
                                <button className="w-[100px] h-10 bg-gray-200 text-blue-500 rounded-full">Back</button>
                                <div className="flex gap-4">
                                    <button onClick={() => { handleSkipProfile(); navigate('/home'); }} className="w-[120px] h-10 bg-gray-200 rounded-full">Skip For Now</button>
                                    <button
                                        onClick={() => navigate("/home")}  // Navigate to home
                                        className="w-[110px] h-10 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

            </div>

            {/* Right Section */}
            <div className="hidden md:flex w-1/2">
                <img
                    src={Loginpic}
                    alt="OTP visual"
                    className="w-full h-full object-cover rounded-xl"
                />
            </div>
        </div>
    );
};

export default OTP;

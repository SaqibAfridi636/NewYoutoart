import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Logo from "../../../assets/Logos/Logo.png";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

       const navigate = useNavigate();

    // const handleSignUpClick = () => {
    //     navigate("/signup"); // ⬅️ Navigate to signup route
    // };

    return (
        <nav className="relative bg-white border-b border-gray-200">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    
                    {/* Logo + Name */}
                    <div className="flex flex-1 items-center justify-start sm:items-stretch sm:justify-start">
                        <div className="flex shrink-0 items-center">
                            <img src={Logo} alt="Logo..." className="h-8 w-auto" />
                            <h1 className="ml-2 text-lg font-semibold">YOUTOOART</h1>
                        </div>

                        {/* Desktop menu */}
                        <div className="hidden sm:ml-6 sm:block pl-[60px]">
                            <div className="flex space-x-6">
                                <a href="#" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-black">Home</a>
                                <a href="#" className="px-3 py-2 text-sm font-medium text-gray-500 hover:text-black">Talent</a>
                                <a href="#" className="px-3 py-2 text-sm font-medium text-gray-500 hover:text-black">Casting Call</a>
                                <a href="#" className="px-3 py-2 text-sm font-medium text-gray-500 hover:text-black">Categories</a>
                                <a href="#" className="px-3 py-2 text-sm font-medium text-gray-500 hover:text-black">Content</a>
                                <a href="#" className="px-3 py-2 text-sm font-medium text-gray-500 hover:text-black">How it Works</a>
                                <a href="#" className="px-3 py-2 text-sm font-medium text-gray-500 hover:text-black">Download</a>
                                <a href="#" className="px-3 py-2 text-sm font-medium text-gray-500 hover:text-black">Contact Us</a>
                            </div>
                        </div>
                    </div>

                    {/* Right side (desktop only) */}
                    <div className="hidden sm:flex items-center">
                        <button
                            onClick={() => navigate("/Login")}
                            type="button"
                            className="w-[92px] h-[33px] rounded-[20px] bg-gray-200 text-sm font-medium text-black"
                        >
                            Sign Up
                        </button>
                    </div>

                    {/* Mobile menu button (on the right side) */}
                    <div className="sm:hidden flex items-center">
                        <button
                            type="button"
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-600 hover:bg-gray-100 hover:text-black focus:outline-2 focus:outline-indigo-500"
                        >
                            <span className="sr-only">Open main menu</span>
                            {menuOpen ? (
                                // X icon
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    className="size-6"
                                >
                                    <path
                                        d="M6 18L18 6M6 6l12 12"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            ) : (
                                // Hamburger
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    className="size-6"
                                >
                                    <path
                                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile dropdown menu */}
            {menuOpen && (
                <div className="sm:hidden absolute left-0 right-0 mt-2 w-full rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 z-20">
                    <div className="py-2">
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Home</a>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Talent</a>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Casting Call</a>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Categories</a>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Content</a>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">How it Works</a>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Download</a>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Contact Us</a>

                        {/* Sign Up button inside dropdown */}
                        <div className="px-4 mt-2">
                            <button
                                type="button"
                                className="w-full h-[40px] rounded-[20px] bg-gray-200 text-sm font-medium text-black mt-[50px]"
                            >
                                Sign Up
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;

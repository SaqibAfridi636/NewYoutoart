import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

// Images
import Logo from "../../../../assets/Logos/Logo.png";
import Homeicon from "../../../../assets/Icons/Homeicon.png";
import Talenticon from "../../../../assets/Icons/Talenticon.png";
import Networkticon from "../../../../assets/Icons/Networkicon.png";
import Castingticon from "../../../../assets/Icons/Castingicon.png";
import Chaticon from "../../../../assets/Icons/Chaticon.png";
import Contenticon from "../../../../assets/Icons/Contenticon.png";
import Profileicon from "../../../../assets/Icons/Profileicon.png";
import Transactionicon from "../../../../assets/Icons/Transactionicon.png";
import Supporticon from "../../../../assets/Icons/Supporticon.png";
import Abouticon from "../../../../assets/Icons/Abouticon.png";
import Conditionsicon from "../../../../assets/Icons/Conditionsicon.png";
import Logouticon from "../../../../assets/Icons/Logouticon.png";

const Sidebar = () => {
  const [showAccount, setShowAccount] = useState(true);

  // NEW: logout modal state
  const [logoutOpen, setLogoutOpen] = useState(false);

  // (Optional) close on ESC
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setLogoutOpen(false);
    if (logoutOpen) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [logoutOpen]);

  // TODO: Wire this to your auth/logout flow
  const handleConfirmLogout = () => {
    setLogoutOpen(false);
    // e.g. await api.logout(); navigate("/login");
    console.log("Logged out");
  };

  const linkClasses =
    "flex items-center gap-3 px-3 py-2 rounded-md whitespace-nowrap";

  return (
    <div className="w-64 h-full bg-white flex flex-col shadow-sm">
      {/* Top - Logo */}
      <div className="flex items-center px-4 py-4 border-b">
        <img src={Logo} alt="Logo" className="h-8 w-auto" />
        <h1 className="ml-2 text-lg font-bold">YOUTOOART</h1>
      </div>

      {/* Main Navigation */}
      <nav className="flex-1 py-4 space-y-1 text-gray-700">
        <NavLink
          to="/home"
          className={({ isActive }) =>
            `${linkClasses} ${
              isActive
                ? "bg-blue-50 text-blue-600"
                : "hover:bg-blue-50 hover:text-blue-600"
            }`
          }
        >
          <img src={Homeicon} alt="Home" />
          Home
        </NavLink>

        <NavLink
          to="/talent"
          className={({ isActive }) =>
            `${linkClasses} ${
              isActive
                ? "bg-blue-50 text-blue-600"
                : "hover:bg-blue-50 hover:text-blue-600"
            }`
          }
        >
          <img src={Talenticon} alt="Talent" />
          Talent
        </NavLink>

        <NavLink
          to="/network"
          className={({ isActive }) =>
            `${linkClasses} ${
              isActive
                ? "bg-blue-50 text-blue-600"
                : "hover:bg-blue-50 hover:text-blue-600"
            }`
          }
        >
          <img src={Networkticon} alt="Network" />
          Network
        </NavLink>

        <NavLink
          to="/casting"
          className={({ isActive }) =>
            `${linkClasses} ${
              isActive
                ? "bg-blue-50 text-blue-600"
                : "hover:bg-blue-50 hover:text-blue-600"
            }`
          }
        >
          <img src={Castingticon} alt="Casting" />
          Casting
        </NavLink>

        <NavLink
          to="/chat"
          className={({ isActive }) =>
            `${linkClasses} ${
              isActive
                ? "bg-blue-50 text-blue-600"
                : "hover:bg-blue-50 hover:text-blue-600"
            }`
          }
        >
          <img src={Chaticon} alt="Chat" />
          Chat
        </NavLink>

        <NavLink
          to="/create-content"
          className={({ isActive }) =>
            `${linkClasses} ${
              isActive
                ? "bg-blue-50 text-blue-600"
                : "hover:bg-blue-50 hover:text-blue-600"
            }`
          }
        >
          <img src={Contenticon} alt="Create Content" />
          Create Content
        </NavLink>

        {/* Account Section */}
        <div className="mt-6">
          <p
            onClick={() => setShowAccount(!showAccount)}
            className="px-3 flex items-center justify-between text-xs font-semibold text-gray-500 uppercase cursor-pointer"
          >
            Account
            <span>{showAccount ? "˄" : "˅"}</span>
          </p>

          {showAccount && (
            <>
              <NavLink
                to="/profile"
                className={({ isActive }) =>
                  `${linkClasses} ${
                    isActive
                      ? "bg-blue-50 text-blue-600"
                      : "hover:bg-blue-50 hover:text-blue-600"
                  }`
                }
              >
                <img src={Profileicon} alt="Profile" />
                Profile
              </NavLink>

              <NavLink
                to="/transactions"
                className={({ isActive }) =>
                  `${linkClasses} ${
                    isActive
                      ? "bg-blue-50 text-blue-600"
                      : "hover:bg-blue-50 hover:text-blue-600"
                  }`
                }
              >
                <img src={Transactionicon} alt="Transaction History" />
                Transaction History
              </NavLink>

              <NavLink
                to="/support"
                className={({ isActive }) =>
                  `${linkClasses} ${
                    isActive
                      ? "bg-blue-50 text-blue-600"
                      : "hover:bg-blue-50 hover:text-blue-600"
                  }`
                }
              >
                <img src={Supporticon} alt="Support" />
                Support
              </NavLink>

              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `${linkClasses} ${
                    isActive
                      ? "bg-blue-50 text-blue-600"
                      : "hover:bg-blue-50 hover:text-blue-600"
                  }`
                }
              >
                <img src={Abouticon} alt="About Us" />
                About Us
              </NavLink>

              <NavLink
                to="/terms"
                className={({ isActive }) =>
                  `${linkClasses} ${
                    isActive
                      ? "bg-blue-50 text-blue-600"
                      : "hover:bg-blue-50 hover:text-blue-600"
                  }`
                }
              >
                <img src={Conditionsicon} alt="Terms" />
                Terms & Conditions
              </NavLink>

              <NavLink
                to="/privacy"
                className={({ isActive }) =>
                  `${linkClasses} ${
                    isActive
                      ? "bg-blue-50 text-blue-600"
                      : "hover:bg-blue-50 hover:text-blue-600"
                  }`
                }
              >
                <img src={Conditionsicon} alt="Privacy Policy" />
                Privacy Policy
              </NavLink>
            </>
          )}
        </div>
      </nav>

      {/* Logout at bottom */}
      <div className="px-2 py-4 border-t">
        <button
          onClick={() => setLogoutOpen(true)}
          className="flex items-center gap-3 px-3 py-2 text-red-500 hover:bg-red-50 rounded-md w-full text-left"
        >
          <img src={Logouticon} alt="Logout" />
          Logout
        </button>
      </div>

{/* Logout Confirmation Modal */}
{logoutOpen && (
  <div
    className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
    onClick={() => setLogoutOpen(false)} // close on backdrop click
  >
    <div
      className="bg-white rounded-xl w-full max-w-md mx-3 p-6 min-h-[240px]"
      onClick={(e) => e.stopPropagation()} // don't close when clicking inside
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold">Logout?</h3>
        <button
          onClick={() => setLogoutOpen(false)}
          className="h-8 w-8 rounded-full hover:bg-gray-100 grid place-items-center text-lg"
          aria-label="Close"
        >
          ×
        </button>
      </div>

      {/* Body */}
      <p className="text-sm text-gray-600 mb-6">
        Are you sure you want to log out of your account?
      </p>

      {/* Actions */}
      <div className="flex justify-end mt-[100px] gap-3">
        <button
          type="button"
          onClick={() => setLogoutOpen(false)}
          className="px-5 py-2 rounded-full bg-blue-100 text-blue-500 text-sm font-medium"
        >
          Stay
        </button>
        <button
          type="button"
          onClick={handleConfirmLogout}
          className="px-5 py-2  rounded-full bg-red-100 text-red-500 text-sm font-medium"
        >
          Yes, Logout
        </button>
      </div>
    </div>
  </div>
)}
{/* End Modal */}

 </div>
  );
};

export default Sidebar;

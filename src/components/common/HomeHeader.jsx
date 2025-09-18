import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import Notificationicon from "../../assets/icons/Notificationicon.png";
import NotificationSection from "./NotificationSection"; // ✅ path adjust karo

const HomeHeader = () => {
  const [showNotifications, setShowNotifications] = useState(false);

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };

  return (
    <div className="relative w-full bg-white shadow-sm">
      {/* Header Bar */}
      <div className="h-[60px] flex items-center justify-between px-6">
        {/* Left side: Greeting */}
        <h1 className="text-lg font-medium">Hi Wajahat!</h1>

        {/* Right side: Search + Notification */}
        <div className="flex items-center gap-4">
          {/* Search bar */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="w-[220px] lg:w-[300px] pl-8 pr-3 py-2 rounded-full bg-gray-100 text-sm focus:outline-none"
            />
            <FiSearch className="absolute left-2.5 top-2.5 text-gray-500" />
          </div>

          {/* Notification Bell */}
          <button onClick={toggleNotifications}>
            <img
              src={Notificationicon}
              alt="Notifications"
              className="w-6 h-6 cursor-pointer"
            />
          </button>
        </div>
      </div>

      {/* Notification Panel */}
      {showNotifications && (
        <div className="absolute right-0 top-[60px] h-[calc(100vh-60px)] w-[320px] bg-white border-l shadow-lg z-50">
          <NotificationSection />
        </div>
      )}
    </div>
  );
};

export default HomeHeader;

import React, { useState, useEffect } from "react";
import Sidebar from "../../common/layout/Sidebar/Sidebar";
import HomeHeader from "../../common/HomeHeader";
import NotificationSection from "../../common/NotificationSection";
import ContentSection from "./HomeContentSection"; // Your main feed content

const Home = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);

  // Prevent background scroll when mobile drawer is open
  useEffect(() => {
    if (isSidebarOpen || isNotificationOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isSidebarOpen, isNotificationOpen]);

  return (
    <div className="h-screen flex bg-gray-50">
      {/* Sidebar - Desktop */}
      <div className="hidden md:flex md:w-1/5 bg-white border-r flex-shrink-0">
        <Sidebar />
      </div>

      {/* Sidebar - Mobile Drawer */}
      {isSidebarOpen && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setIsSidebarOpen(false)}
          ></div>
          <div className="fixed top-0 left-0 w-64 h-full bg-white shadow-lg z-50">
            <Sidebar />
          </div>
        </>
      )}

      {/* Main Content - 80% */}
      <div className="flex-1 md:w-4/5 flex flex-col">
        {/* Header */}
        <div className="w-[100%] h-[60px] flex-shrink-0">
          <HomeHeader
            onMenuClick={() => setIsSidebarOpen(true)}
            onNotificationClick={() => setIsNotificationOpen(true)}
          />
        </div>

        {/* Feed Content */}
        <div className="flex-1  overflow-y-auto p-2">
          <ContentSection />
        </div>
      </div>

      {/* Notification Drawer */}
      {isNotificationOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setIsNotificationOpen(false)}
          />

          {/* Drawer */}
          <div className="fixed top-0 right-0 w-80 h-full bg-white z-50 shadow-lg p-4 overflow-y-auto">
            <NotificationSection />
          </div>
        </>
      )}
    </div>
  );
};

export default Home;

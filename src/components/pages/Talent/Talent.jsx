import React, { useState, useEffect } from "react";
import Sidebar from "../../common/layout/Sidebar/Sidebar";
import NotificationSection from "../../common/NotificationSection";
import HomeHeader from "../../common/HomeHeader";
import TalentContentSection from "./TalentContentSection";

const Talent = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);

  // Prevent body scroll when sidebar or notification drawer is open
  useEffect(() => {
    if (isSidebarOpen || isNotificationOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isSidebarOpen, isNotificationOpen]);

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar - Desktop */}
      <div className="hidden md:flex md:w-1/5 bg-white border-r flex-shrink-0">
        <Sidebar />
      </div>

      {/* Mobile Sidebar Drawer */}
      {isSidebarOpen && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setIsSidebarOpen(false)}
          />
          <div className="fixed top-0 left-0 w-64 h-full bg-white z-50 shadow-lg transform transition-transform duration-300">
            <Sidebar />
          </div>
        </>
      )}

      {/* Center Content - 80% */}
      <div className="flex-1 md:w-4/5 flex flex-col">
        {/* Header */}
        <div className="h-16 border-b flex-shrink-0">
          <HomeHeader
            onMenuClick={() => setIsSidebarOpen(true)}
            onNotificationClick={() => setIsNotificationOpen(true)}
          />
        </div>

        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto p-2">
          <TalentContentSection />
        </div>
      </div>

      {/* Notification Drawer - Desktop & Mobile */}
      {isNotificationOpen && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setIsNotificationOpen(false)}
          />
          <div className="fixed top-0 right-0 w-80 h-full bg-white z-50 shadow-lg p-4 overflow-y-auto">
            <NotificationSection />
          </div>
        </>
      )}
    </div>
  );
};

export default Talent;

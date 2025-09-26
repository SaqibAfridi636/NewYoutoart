// src/pages/ProfilePage/Profile.jsx
import React, { useState } from "react";
import { FiSearch, FiMenu } from "react-icons/fi";
import Sidebar from "../../common/layout/Sidebar/Sidebar";
import NotificationSection from "../../common/NotificationSection";

import UserLogo from "../../../assets/Logos/UserLogo.png";
import Activityicon from "../../../assets/Icons/Activityicon.png";
import ProfileAbouticon from "../../../assets/Icons/ProfileAbouticon.png";
import Workicon from "../../../assets/Icons/Workicon.png";
import Notificationicon from "../../../assets/Icons/Notificationicon.png";
import Connecticon from "../../../assets/Icons/Connecticon.png";
import Posticon from "../../../assets/Icons/Posticon.png";
import Moreicon from "../../../assets/Icons/Moreicon.png";
import Editicon from "../../../assets/Icons/Editicon.png";
import { FaCheckCircle } from "react-icons/fa";

import TabContent from "./TabContent";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("activity");
  const [showNotifications, setShowNotifications] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
        <Sidebar />
    

      {/* Mobile Sidebar */}
      {showSidebar && (
        <div className="fixed inset-0 z-40 flex">
          <div className="w-64 bg-white shadow-lg">
            <Sidebar />
          </div>
          <div
            className="flex-1 bg-black bg-opacity-50"
            onClick={() => setShowSidebar(false)}
          />
        </div>
      )}

      {/* Main Content */}
      <div className="flex-1 ml-0 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-white border-b">
          <div className="flex items-center space-x-3">
            <button
              onClick={() => setShowSidebar(true)}
              className="md:hidden text-2xl"
            >
              <FiMenu />
            </button>
            <h2 className="text-lg md:text-xl font-semibold">My Profile</h2>
          </div>
          <div className="flex items-center space-x-3">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="w-[220px] lg:w-[300px] pl-8 pr-3 py-2 rounded-full bg-gray-100 text-sm focus:outline-none"
              />
              <FiSearch className="absolute left-2.5 top-2.5 text-gray-500" />
            </div>
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className="relative"
            >
              <img
                src={Notificationicon}
                alt="notifications"
                className="w-6 h-6"
              />
            </button>
          </div>
        </div>

        {/* Profile Card */}
        <div className="bg-white shadow p-6 flex flex-col md:flex-row items-center md:items-start justify-between">
          <div className="flex flex-col md:flex-row items-center md:space-x-4">
            <div className="relative">
              <img
                src={UserLogo}
                alt="profile"
                className="w-24 h-24 rounded-full"
              />
              <FaCheckCircle className="absolute bottom-2 right-1 text-blue-500 bg-white rounded-full" />
            </div>
            <div className="text-center md:text-left mt-4 md:mt-0">
              <h2 className="text-xl font-semibold">Muhammad Wajahat</h2>
              <p className="text-gray-600">Actor, Director</p>

              {/* Stats */}
              <div className="flex flex-col sm:flex-row gap-3 mt-3">
                <div className="px-4 py-2 rounded-full border flex items-center space-x-3">
                  <img src={Connecticon} alt="" className="w-8 h-8" />
                  <div>
                    <p className="text-lg font-bold">124.7K</p>
                    <p className="text-sm text-gray-500">Connects</p>
                  </div>
                </div>

                <div className="px-4 py-2 rounded-full border flex items-center space-x-3">
                  <img src={Posticon} alt="" className="w-8 h-8" />
                  <div>
                    <p className="text-lg font-bold">252</p>
                    <p className="text-sm text-gray-500">Posts</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side Buttons */}
          <div className="flex items-center space-x-3 mt-4 md:mt-0">
            <button className="bg-black text-white px-4 py-2 rounded-full flex items-center">
              <img src={Editicon} alt="Edit" className="inline w-5 h-5 mr-2" />
              Edit Profile
            </button>
            <button>
              <img src={Moreicon} alt="" />
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap border-b bg-white mt-2">
          {[
            { id: "activity", label: "Activity", icon: Activityicon },
            { id: "about", label: "About", icon: ProfileAbouticon },
            { id: "work", label: "My Work", icon: Workicon },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 md:px-6 py-2 flex items-center space-x-2 text-sm md:text-base ${activeTab === tab.id
                  ? "border-b-2 border-black font-semibold text-black"
                  : "text-gray-500"
                }`}
            >
              <img src={tab.icon} alt={tab.label} className="w-5 h-5" />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <TabContent activeTab={activeTab} />
      </div>

      {/* Notifications */}
      {showNotifications && (
        <>
          {/* Desktop */}
          <div className="hidden lg:block w-[20%] min-w-[250px] border-l bg-white p-4">
            <NotificationSection />
          </div>
          {/* Mobile */}
          <div className="fixed inset-0 z-50 lg:hidden flex">
            <div className="w-64 bg-white shadow-lg">
              <NotificationSection />
            </div>
            <div
              className="flex-1 bg-black bg-opacity-50"
              onClick={() => setShowNotifications(false)}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Profile;

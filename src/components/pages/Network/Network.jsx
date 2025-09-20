import React, { useState } from "react";
import Sidebar from "../../common/layout/Sidebar/Sidebar";
import Accepticon from "../../../assets/Icons/Accepticon.png";
import Closeicon from "../../../assets/Icons/Closeicon.png";
import HomeHeader from "../../common/HomeHeader";
import NotificationSection from "../../common/NotificationSection";
import Messaageicon from "../../../assets/Icons/Messageicon.png";
import Jeremiahgreenimage from "../../../assets/images/Jeremiahgreenimage.png";
import Ali from "../../../assets/images/Aliimage.png";
// Dummy Data
const requests = [
  { id: 1, name: "Muhammad Ali Nizam", role: "Designer", image: "/assets/images/user1.png" },
  { id: 2, name: "Ali Sheikh", role: "UI/UX", image: "/assets/images/user2.png" },
  { id: 3, name: "Saqib Khan", role: "Developer", image: "/assets/images/user2.png" },
  { id: 4, name: "Bilal Ahmed", role: "Manager", image: "/assets/images/user2.png" },
  { id: 5, name: " Raza", role: "Artist", image: "/assets/images/user2.png" },
  { id: 6, name: "Usman Tariq", role: "Engineer", image: "/assets/images/user2.png" },
];

const connections = [
  { id: 1, name: "James Phillips", role: "Consultant, FinTech", image: "/assets/images/user3.png" },
  { id: 2, name: "Barbara Gordon", role: "Marketing Specialist", image: "/assets/images/user4.png" },
  { id: 3, name: "Diana Prince", role: "Creative Director", image: "/assets/images/user5.png" },
  { id: 4, name: "Lois Lane", role: "Journalist", image: "/assets/images/user6.png" },
  { id: 5, name: "Kaden Fane", role: "Tech Enthusiast", image: "/assets/images/user7.png" },
];

const Network = () => {
  const [showNotifications, setShowNotifications] = useState(false);

  const handleMenuClick = () => {
    console.log("Menu clicked");
  };

  const handleNotificationClick = () => {
    setShowNotifications(!showNotifications);
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-50">
      {/* Sidebar (hidden on small screens) */}
      <div className="hidden md:flex md:w-1/5 bg-white border-r flex-shrink-0">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="relative flex-1 w-full md:w-4/5 bg-gray-50">
        {/* Header */}
        <HomeHeader
          onMenuClick={handleMenuClick}
          onNotificationClick={handleNotificationClick}
        />

        {/* Notification Section (toggle) */}
        {showNotifications && (
          <div className="absolute right-4 md:right-6 top-16 z-50 w-72 sm:w-80">
            <NotificationSection />
          </div>
        )}

        {/* Page Content */}
        <div className="p-4 sm:p-6">
          {/* Requests */}
          <div className="mb-10">
            <h3 className="text-base sm:text-lg font-semibold mb-4">
              Requests ({requests.length})
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              {requests.map((req) => (
                <div
                  key={req.id}
                  className="bg-white p-4 rounded-xl shadow-md text-center"
                >
                  <img
                    src={Ali}
                    alt={req.name}
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover mx-auto mb-3"
                  />
                  <h4 className="font-medium text-sm sm:text-base">{req.name}</h4>
                  <p className="text-xs sm:text-sm text-gray-500">{req.role}</p>
                  <div className="flex justify-center gap-2 sm:gap-3 mt-3 sm:mt-4">
                    <button className="flex items-center gap-1 px-2 sm:px-3 py-1 text-xs bg-green-100 text-green-600 rounded-full hover:bg-green-200">
                      <img src={Accepticon} alt="Accept" className="w-3 h-3" />
                      Accept
                    </button>
                    <button className="flex items-center gap-1 px-2 sm:px-3 py-1 text-xs bg-red-100 text-[#FF4E4E] rounded-full hover:bg-red-200">
                      <img src={Closeicon} alt="Reject" className="w-3 h-3" />
                      Reject
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Connections */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-4">
              Connections ({connections.length})
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
              {connections.map((con) => (
                <div
                  key={con.id}
                  className="bg-white p-4 rounded-xl shadow-md text-center"
                >
                  <img
                    src={Jeremiahgreenimage}
                    alt={con.name}
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover mx-auto mb-3"
                  />
                  <h4 className="font-medium text-sm sm:text-base">{con.name}</h4>
                  <p className="text-xs sm:text-sm text-gray-500">{con.role}</p>
                  <div className="flex justify-center gap-2 sm:gap-3 mt-3 sm:mt-4">
                    <button className="px-2 sm:px-3 py-1 bg-gray-800 text-white text-xs sm:text-sm rounded-md hover:bg-gray-900">
                      Remove
                    </button>
                    <button className=" px-2 sm:px-3 py-1 rounded-md  hover:bg-gray-100">
                      <img src={Messaageicon} alt="Message" className="w-6 h-6" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Network;

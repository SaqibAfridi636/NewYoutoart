// src/pages/TransactionHistory.jsx
import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import Sidebar from "../../common/layout/Sidebar/Sidebar";
import Accept from "../../../assets/Icons/Accept.png";
import Rejecticon from "../../../assets/Icons/Rejecticon.png";
import NotificationSection from "../../common/NotificationSection";
import Notificationicon from "../../../assets/Icons/Notificationicon.png";

const transactions = [
  {
    id: 1,
    date: "Today",
    amount: "₹500",
    items: [
      {
        id: "TID1212-1",
        title: "6 Months Subscription to apply for Casting Call.",
        time: "12:00 Am",
        status: "success",
        amount: "₹500",
      },
      {
        id: "TID1212-2",
        title: "6 Months Subscription to apply for Casting Call.",
        time: "11:53 Am",
        status: "failed",
        amount: "₹500",
      },
    ],
  },
  {
    id: 2,
    date: "26 May",
    amount: "₹1000",
    items: [
      {
        id: "TID1212-3",
        title: "6 Months Subscription to apply for Casting Call.",
        time: "12:00 Am",
        status: "success",
        amount: "₹500",
      },
      {
        id: "TID1212-4",
        title: "6 Months Subscription to apply for Casting Call.",
        time: "12:00 Am",
        status: "success",
        amount: "₹500",
      },
      {
        id: "TID1212-5",
        title: "6 Months Subscription to apply for Casting Call.",
        time: "11:53 Am",
        status: "failed",
        amount: "₹500",
      },
    ],
  },
  {
    id: 3,
    date: "25 May",
    amount: "₹1000",
    items: [
      {
        id: "TID1212-6",
        title: "6 Months Subscription to apply for Casting Call.",
        time: "12:00 Am",
        status: "success",
        amount: "₹500",
      },
    ],
  },
];

const TransactionHistory = () => {
  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-[5px]">
        {/* Page Header */}
        <div className="w-full h-[60px] rounded flex justify-between items-center bg-white px-4 shadow mb-2">
          <h2 className="text-xl font-semibold">Transaction History</h2>

          <div className="flex items-center gap-4">
            {/* Search */}
            <div className="relative">
                       <input
                         type="text"
                         placeholder="Search"
                         className="w-[220px] lg:w-[300px] pl-8 pr-3 py-2 rounded-full bg-gray-100 text-sm focus:outline-none"
                       />
                       <FiSearch className="absolute left-2.5 top-2.5 text-gray-500" />
                     </div>

            {/* Notifications */}
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className="relative"
            >
              <img
                src={Notificationicon}
                alt="notifications"
                className="w-6 h-6"
              />
              {showNotifications && (
                <div className="absolute right-0 mt-2">
                  <NotificationSection />
                </div>
              )}
            </button>
          </div>
        </div>

        {/* Transactions Card */}
        <div className="bg-white rounded-md shadow p-4">
          {transactions.map((day) => (
            <div key={day.id} >
              {/* Date + Amount */}
              <div className="flex justify-between items-center border-b pb-1 mb-3">
                <span className="text-sm font-medium text-gray-600">
                  {day.date}
                </span>
                <span className="text-blue-600 font-semibold">{day.amount}</span>
              </div>

              {/* Transactions List */}
              <div className="space-y-4">
                {day.items.map((tx) => (
                  <div
                    key={tx.id}
                    className="flex justify-between items-start"
                  >
                    <div className="flex items-start gap-2">
                      {tx.status === "success" ? (
                        <img src={Accept} alt="success" />
                      ) : (
                        <img src={Rejecticon} alt="failed" />
                      )}
                      <div>
                        <p className="text-sm font-medium">{tx.title}</p>
                        <p className="text-xs text-gray-500">#{tx.id}</p>
                        <p className="text-xs text-gray-400">{tx.time}</p>
                      </div>
                    </div>
                    <span
                      className={`font-semibold ${
                        tx.status === "success"
                          ? "text-green-600"
                          : "text-red-500"
                      }`}
                    >
                      {tx.amount}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TransactionHistory;

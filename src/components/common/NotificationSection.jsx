// common/NotificationSection.jsx
import React from "react";
import UserImg from "../../assets/Logos/UserLogo.png";
import Accepticon from "../../assets/Icons/Accepticon.png";
import Closeicon from "../../assets/Icons/Closeicon.png";

const notifications = [
  { id: 1, name: "Ranveer Singh", message: "just posted a new casting call.", time: "Just Now", profile: UserImg },
  { id: 2, name: "Ranveer Singh", message: "liked your post.", time: "5 mins ago", profile: UserImg },
  { id: 3, name: "Filmfare", message: "liked your post.", time: "1 hour ago", profile: UserImg },
  { id: 4, name: "Don 3", message: "50 People applied to your casting call.", time: "3 hours ago", profile: UserImg },
];

const connectionRequests = [
  { id: 1, name: "Muhammad Ali Nizami", profession: "Actor | Director | Producer", profile: UserImg },
  { id: 2, name: "Ayesha Khan", profession: "Designer | Illustrator", profile: UserImg },
  { id: 3, name: "Rahul Sharma", profession: "Software Engineer", profile: UserImg },
  { id: 4, name: "Sara Ahmed", profession: "Content Creator", profile: UserImg },
];

export default function NotificationSection({ variant = "panel" }) {
  const isDropdown = variant === "dropdown";

  return (
    <div
      className={
        isDropdown
          ? // dropdown: compact card
            "bg-white rounded-md shadow border p-4 max-h-[70vh] overflow-y-auto w-full"
          : // panel: right-side column
            "hidden md:flex flex-col h-[550px] w-[30%] min-w-[300px] bg-white"
      }
      style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
    >
      {/* hide WebKit scrollbar */}
      <style>{`.no-scrollbar::-webkit-scrollbar{display:none}`}</style>

      <div className={isDropdown ? "" : "flex-1 overflow-y-auto p-4 no-scrollbar"}>
        {/* Notifications */}
        <h2 className="font-semibold mb-4 text-base">Notifications</h2>
        <div className="space-y-4">
          {notifications.map((n) => (
            <div key={n.id} className="flex items-start gap-3">
              <img src={n.profile} alt={n.name} className="w-8 h-8 rounded-full" />
              <div className="text-sm">
                <p><span className="font-medium">{n.name}</span> {n.message}</p>
                <span className="text-xs text-gray-500">{n.time}</span>
              </div>
            </div>
          ))}
        </div>

        <button className="w-full mt-3 py-2 text-sm font-medium text-blue-600 bg-gray-100 rounded hover:bg-gray-200">
          Show All
        </button>

        <hr className="my-4" />

        {/* Connection Requests */}
        <h2 className="font-semibold mb-4 text-base">Connection Requests</h2>
        <div>
          {connectionRequests.map((u) => (
            <div key={u.id} className="flex items-start gap-3 py-3">
              <img src={u.profile} alt={u.name} className="w-12 h-12 rounded-full" />
              <div className="flex-1">
                <h3 className="font-medium text-sm">{u.name}</h3>
                <p className="text-xs text-gray-500 mb-2">{u.profession}</p>
                <div className="flex gap-2">
                  <button className="flex items-center gap-1 px-3 py-1 text-xs bg-green-100 text-green-600 rounded-full hover:bg-green-200">
                    <img src={Accepticon} alt="Accept" className="w-3 h-3" />
                    Accept
                  </button>
                  <button className="flex items-center gap-1 px-3 py-1 text-xs bg-red-100 text-[#FF4E4E] rounded-full hover:bg-red-200">
                    <img src={Closeicon} alt="Reject" className="w-3 h-3" />
                    Reject
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="w-full mt-3 py-2 text-sm font-medium text-blue-600 bg-gray-100 rounded hover:bg-gray-200">
          Show All
        </button>
      </div>
    </div>
  );
}

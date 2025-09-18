// src/components/Chat/ChatList.jsx
import React, { useState, useEffect } from "react";
import Jeremiahgreenimage from "../../../assets/images/Jeremiahgreenimage.png";
import { formatTime } from "./TimeFormatter";

const ChatList = ({ chats, selectedChat, onSelectChat }) => {
  const [timeUpdate, setTimeUpdate] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeUpdate((prev) => prev + 1);
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  const handleClick = (chat) => {
    const updatedChat = { ...chat, unread: 0 };
    onSelectChat(updatedChat);
  };

  return (
    <div className="w-[30%] border-r mt-[2px] bg-white flex flex-col">
      <div className="flex-1 overflow-y-auto">
        {chats.map((chat) => (
          <div
            key={chat.id}
            onClick={() => handleClick(chat)}
            className={`flex items-center px-4 py-3 cursor-pointer border-b border-gray-200 ${
              selectedChat?.id === chat.id
                ? "bg-gray-200"
                : "hover:bg-gray-100"
            }`}
          >
            {/* User Image */}
            <img
              src={Jeremiahgreenimage}
              alt="profile"
              className="w-[42px] h-[42px] rounded-full mr-3"
            />

            {/* User Details */}
            <div className="flex-1 flex flex-col">
              <div className="flex justify-between items-center">
                <h4 className="font-medium">{chat.name}</h4>
                <span className="text-xs text-gray-400">
                  {formatTime(chat.createdAt)}
                </span>
              </div>
              <p className="text-sm text-gray-500 truncate max-w-[180px] ">{chat.message}</p>
            </div>

            {/* Unread Badge */}
            {chat.unread > 0 && (
              <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full ml-2">
                {chat.unread}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatList;

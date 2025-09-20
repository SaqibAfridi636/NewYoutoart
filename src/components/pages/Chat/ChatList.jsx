import React, { useState, useEffect } from "react";
import { formatTime } from "./TimeFormatter";

const ChatList = ({ chats, selectedChat, onSelectChat }) => {
  const [, setTick] = useState(0);
  useEffect(() => {
    const i = setInterval(() => setTick((t) => t + 1), 60000);
    return () => clearInterval(i);
  }, []);

  const handleClick = (chat) => onSelectChat({ ...chat, unread: 0 });

  return (
    <aside className="w-[300px] border-r bg-white flex flex-col">
      <div className="flex-1 overflow-y-auto">
        {chats.map((chat) => {
          const active = selectedChat?.id === chat.id;
          return (
            <button
              key={chat.id}
              onClick={() => handleClick(chat)}
              className={`w-full text-left px-4 py-3 border-b flex items-center gap-3 transition-colors
                ${active ? "bg-blue-100" : "hover:bg-gray-100"}`}
            >
              {/* Avatar */}
              <img src={chat.image} alt="" className="w-10 h-10 rounded-full object-cover" />

              {/* Meta */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium truncate">{chat.name}</h4>
                  <span className="text-[11px] text-gray-400">
                    {chat.createdAt ? formatTime(chat.createdAt) : chat.time || ""}
                  </span>
                </div>
                <p className="text-sm text-gray-500 truncate">{chat.message}</p>
              </div>

              {/* Unread */}
              {chat.unread > 0 && (
                <span className="ml-2 inline-flex items-center justify-center h-6 min-w-[24px] px-1 rounded-full bg-blue-500 text-white text-xs">
                  {chat.unread}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </aside>
  );
};

export default ChatList;

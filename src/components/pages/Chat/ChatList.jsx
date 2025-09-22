// src/components/Chat/ChatList.jsx
import React, { useEffect, useState } from "react";
import { formatTime } from "./TimeFormatter";

const ChatList = ({ chats, selectedChat, onSelectChat }) => {
  // tick to refresh relative times every minute
  const [, setTick] = useState(0);
  useEffect(() => {
    const i = setInterval(() => setTick((t) => t + 1), 60000);
    return () => clearInterval(i);
  }, []);

  const handleClick = (chat) => onSelectChat({ ...chat, unread: 0 });

  return (
    <aside className="w-[270px] md:w-[300px] bg-white border-r flex flex-col">
      <div className="flex-1 overflow-y-auto">
        {chats.map((chat) => {
          const active = selectedChat?.id === chat.id;

          return (
            <button
              key={chat.id}
              onClick={() => handleClick(chat)}
              className={`w-full text-left px-4 py-3 flex items-start gap-3 transition-colors border-b border-gray-100
                ${active ? "bg-blue-100" : "hover:bg-gray-100/70"}`}
            >
              {/* Avatar */}
              <img
                src={chat.image}
                alt={chat.name}
                className="mt-0.5 w-10 h-10 rounded-full object-cover"
              />
              {/* Text block */}
              <div className="flex-1 min-w-0">
                {/* Top row: name + time + unread */}
                <div className="flex items-center gap-2">
                  <h4 className="font-medium truncate">{chat.name}</h4>

                  <div className="ml-auto flex items-center gap-2 shrink-0">
                    {/* time on the far right, tiny + gray */}
                    <span className="text-[11px] text-gray-400">
                      {chat.createdAt ? formatTime(chat.createdAt) : chat.time || ""}
                    </span>

                    {/* unread badge */}
                    {chat.unread > 0 && (
                      <span className="inline-grid place-items-center h-5 min-w-[20px] px-1 rounded-full bg-blue-500 text-white text-[11px]">
                        {chat.unread}
                      </span>
                    )}
                  </div>
                </div>

                {/* Preview line */}
                <p className="mt-0.5 text-[13px] text-gray-500 truncate">
                  {chat.message}
                </p>
              </div>
            </button>
          );
        })}
      </div>
    </aside>
  );
};

export default ChatList;


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
    <aside className="w-[270px] md:w-[300px] bg-white border-r flex flex-col min-h-0">
      
      <div className="flex-1 overflow-y-auto overscroll-contain">
        {chats.map((chat) => {
          const active = selectedChat?.id === chat.id;

          return (
            <button
              key={chat.id}
              onClick={() => handleClick(chat)}
              className={`relative w-full text-left px-4 py-3 flex items-start gap-3 transition-colors border-b border-gray-100
                ${active ? "bg-blue-100" : "hover:bg-gray-100/70"}`}
            >
              {/* tiny blue indicator dot on the LEFT for the active row */}
              {active && (
                <span className="absolute left-1 top-1/2 -translate-y-1/2 h-2 w-2 rounded-full bg-blue-500" />
              )}

              {/* Avatar */}
              <img
                src={chat.image}
                alt={chat.name}
                className="mt-0.5 w-10 h-10 rounded-full object-cover"
              />

              {/* Text block */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <h4 className="font-medium truncate">{chat.name}</h4>

                  <div className="ml-auto flex items-center gap-2 shrink-0">
                    <span className="text-[11px] text-gray-400">
                      {chat.createdAt ? formatTime(chat.createdAt) : chat.time || ""}
                    </span>

                    {chat.unread > 0 && (
                      <span className="inline-grid place-items-center h-5 min-w-[20px] px-1 rounded-full bg-blue-500 text-white text-[11px]">
                        {chat.unread}
                      </span>
                    )}
                  </div>
                </div>

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

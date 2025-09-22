import React, { useEffect, useRef, useState } from "react";
import Moreicon from "../../../assets/Icons/Moreicon.png";

const CenterTimeChip = ({ text }) => (
  <div className="w-full flex justify-center my-2">
    <span className="text-[11px] text-gray-400">{text}</span>
  </div>
);

const ChatSection = ({ selectedChat, newMessage, setNewMessage, sendMessage }) => {
  const endRef = useRef(null);
  const [, setTick] = useState(0);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [selectedChat, newMessage]);

  // keep “Just now / 1 min ago” fresh
  useEffect(() => {
    const i = setInterval(() => setTick((x) => x + 1), 60000);
    return () => clearInterval(i);
  }, []);

  if (!selectedChat) {
    return (
      <div className="flex-1 flex items-center justify-center text-gray-400">
        Select a chat
      </div>
    );
  }

  return (
    <section className="flex flex-col flex-1 overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between border-b p-4 bg-white">
        <div className="flex items-center gap-3">
          <img
            src={selectedChat.image}
            alt=""
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h3 className="font-semibold">{selectedChat.name}</h3>
            <p className="text-xs text-gray-500">Last online, 2 mins ago</p>
          </div>
        </div>
        <button className="text-2xl leading-none"><img src={Moreicon} alt="" /></button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-3 bg-gray-100">
        {selectedChat.messages.map((m, idx) => {
          const isMe = m.sender === "me";

          return (
            <React.Fragment key={m.id}>
              {/* Centered time chips for OTHER/neutral entries (e.g., “4 hours ago”, “Just Now”) */}
              {m.timeChip && !isMe && <CenterTimeChip text={m.timeChip} />}

              <div className={`flex ${isMe ? "justify-end" : "justify-start"} mb-2`}>
                <div
                  className={`max-w-[60%] px-4 py-2 rounded-2xl text-sm shadow-sm
                    ${
                      isMe
                        ? "bg-blue-500 text-white rounded-br-md"
                        : "bg-white text-gray-800 rounded-bl-md"
                    }`}
                >
                  {m.text}
                </div>
              </div>

              {/* Right-aligned tiny timestamp for MY last bubble (as in the screenshot) */}
              {m.timeChip && isMe && (
                <div className="flex justify-end -mt-1 pr-1">
                  <span className="text-[11px] text-gray-400">{m.timeChip}</span>
                </div>
              )}
            </React.Fragment>
          );
        })}
        <div ref={endRef} />
      </div>

      {/* Composer */}
      <div className="border-t bg-white p-3">
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Enter your message"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            className="flex-1 bg-gray-100 rounded-full px-4 py-2 text-sm focus:outline-none"
          />
          <button
            onClick={sendMessage}
            className="shrink-0 h-10 w-10 rounded-full bg-black text-white grid place-items-center"
            aria-label="Send"
          >
            ➤
          </button>
        </div>
      </div>
    </section>
  );
};

export default ChatSection;

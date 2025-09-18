// src/components/Chat/ChatSection.jsx
import React, { useState, useRef, useEffect } from "react";
import Jeremiahgreenimage from '../../../assets/images/Jeremiahgreenimage.png';
import { formatTime } from "./TimeFormatter";
const ChatSection = ({ selectedChat, newMessage, setNewMessage, sendMessage }) => {
    const messagesEndRef = useRef(null);
    const [timeUpdate, setTimeUpdate] = useState(0);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [selectedChat]);

    //   Update "last online" every minute
    useEffect(() => {
        const interval = setInterval(() => {
            setTimeUpdate((prev) => prev + 1);
        }, 60000); // 60000 ms = 1 minute
        return () => clearInterval(interval);
    }, []);

    if (!selectedChat) {
        return (
            <div className="flex-1 flex items-center justify-center text-gray-400">
                Select a chat to start messaging
            </div>
        );
    }

    return (
        <div className="flex flex-col flex-1 overflow-hidden">
            {/* Chat Header */}
            <div className="flex items-center justify-between border-b p-4 bg-white flex-shrink-0">
                <div className="flex items-center space-x-3">
                    <img
                        src={Jeremiahgreenimage}
                        alt="profile"
                        className="w-10 h-10 rounded-full"
                    />
                    <div>
                        <h3 className="font-semibold">{selectedChat.name}</h3>
                        <p className="text-xs text-gray-500">Last online, 2 mins ago</p>
                    </div>
                </div>
                <button className="text-xl">⋮</button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 bg-gray-100">
                {selectedChat.messages.map((msg) => (
                    <div
                        key={msg.id}
                        className={`flex ${msg.sender === "me" ? "justify-end" : "justify-start"
                            } mb-3`}
                    >
                        <div
                            className={`px-4 py-2 rounded-lg max-w-xs ${msg.sender === "me"
                                    ? "bg-blue-500 text-white"
                                    : "bg-gray-200 text-gray-800"
                                }`}
                        >
                            <p>{msg.text}</p>
                            <span className="block text-xs mt-1 opacity-70">
                                {formatTime(msg.createdAt)}
                            </span>
                        </div>
                    </div>
                ))}
                <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="flex items-center p-4 border-t bg-white flex-shrink-0">
                <input
                    type="text"
                    placeholder="Enter your message"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                    className="flex-1 border rounded-full px-4 py-2 focus:outline-none"
                />
                <button
                    onClick={sendMessage}
                    className="ml-2 bg-black text-white p-3 rounded-full"
                >
                    ➤
                </button>
            </div>
        </div>
    );
};

export default ChatSection;

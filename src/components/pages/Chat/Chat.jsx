// src/pages/ChatPage.jsx
import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import Sidebar from "../../common/layout/Sidebar/Sidebar";
import ChatList from "../Chat/ChatList";
import ChatSection from "../Chat/ChatSection";
import Jeremiahgreenimage from '../../../assets/images/Jeremiahgreenimage.png';
const chatsData = [
    {
        id: 1,
        name: "Ranveer Singh",
        message: "Good Job Wajahat! I'm proud of you.",
        time: "Just Now",
        unread: 2,
        image: Jeremiahgreenimage,
        messages: [
            { id: 1, text: "Hello Wajahat!", sender: "other", time: "5 mins ago" },
            { id: 2, text: "Hi Ranveer!", sender: "me", time: "3 mins ago" },
            { id: 3, text: "I’m proud of your work.", sender: "other", time: "Just now" },
        ],
    },
    {
        id: 2,
        name: "Muhammad Ali Nizami",
        message: "Hi Wajahat! Hope you’re doing well.",
        time: "1 hour ago",
        unread: 0,
        image: Jeremiahgreenimage,
        messages: [
            { id: 1, text: "Hi Wajahat! Hope you’re doing well.", sender: "other", time: "4 hours ago" },
            { id: 2, text: "Hi Ali! I’m fine.", sender: "me", time: "1 min ago" },
            { id: 3, text: "What about you?", sender: "me", time: "1 min ago" },
            { id: 4, text: "I’m good, thanks!", sender: "other", time: "Just now" },
        ],
    },
];

const ChatPage = () => {
    const [chats, setChats] = useState(chatsData);
    const [selectedChat, setSelectedChat] = useState(chatsData[0]);
    const [newMessage, setNewMessage] = useState("");

    const sendMessage = () => {
        if (!newMessage.trim()) return;
        
        const now = Date.now();
        const newMsg = {
            id: newMessage,
            text: newMessage,
            sender: "me",
            createdAt: Date.now(),
        }

        const updatedChats = chats.map((chat) =>
            chat.id === selectedChat.id
                ? {
                    ...chat,
                    messages: [...chat.messages, {
                        id: chat.messages.length + 1,
                        text: newMessage,
                        sender: "me",
                        createdAt: now,
                    }
                ],
                    message: newMessage,
                    createdAt: now,
                }
                : chat
        );

        setChats(updatedChats);
        setSelectedChat(updatedChats.find((chat) => chat.id === selectedChat.id));
        setNewMessage("");
    };

    const handleSelectChat = (chat) => {
        const updatedChats = chats.map((c) =>
            c.id === chat.id ? { ...c, unread: 0 } : c
        );
        setChats(updatedChats);
        setSelectedChat(updatedChats.find((c) => c.id === chat.id));
    }

    return (
        <div className="flex h-screen bg-gray-50 overflow-hidden">
            {/* Sidebar */}
            <Sidebar />

            {/* Main Chat Area */}
            <div className="flex flex-col flex-1 overflow-hidden">
                {/* Global Header */}
                <div className="flex items-center justify-between border-b p-4 bg-white flex-shrink-0">
                    <h2 className="text-lg font-semibold">Chats</h2>
                    <div className="flex items-center space-x-3">
                          {/* Search bar */}
                                 <div className="relative">
                                   <input
                                     type="text"
                                     placeholder="Search"
                                     className="w-[220px] lg:w-[300px] pl-8 pr-3 py-2 rounded-full bg-gray-100 text-sm focus:outline-none"
                                   />
                                   <FiSearch className="absolute left-2.5 top-2.5 text-gray-500" />
                                 </div>
                        <button className="bg-black text-white px-4 py-1 rounded-full text-sm hover:bg-gray-800">
                            + New Chat
                        </button>
                    </div>
                </div>

                {/* Split Content */}
                <div className="flex flex-1 overflow-hidden">
                    <ChatList
                        chats={chats}
                        selectedChat={selectedChat}
                        onSelectChat={handleSelectChat}
                    />
                    <ChatSection
                        selectedChat={selectedChat}
                        newMessage={newMessage}
                        setNewMessage={setNewMessage}
                        sendMessage={sendMessage}
                    />
                </div>
            </div>
        </div>
    );
};

export default ChatPage;

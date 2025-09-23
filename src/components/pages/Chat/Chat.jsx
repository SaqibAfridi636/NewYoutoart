// src/pages/ChatPage.jsx
import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import Sidebar from "../../common/layout/Sidebar/Sidebar";
import ChatList from "../Chat/ChatList";
import ChatSection from "../Chat/ChatSection";
import Jeremiahgreenimage from "../../../assets/images/Jeremiahgreenimage.png";

const chatsData = [
  {
    id: 1,
    name: "Ranveer Singh",
    message: "Good Job Wajahat! I'm proud of you.",
    time: "Just Now",
    unread: 2,
    image: Jeremiahgreenimage,
    createdAt: Date.now(),
    messages: [
      { id: 1, text: "Hi Wajahat! Hope you’re doing well.", sender: "other", timeChip: "4 hours ago" },
      { id: 2, text: "Hi Ali! I’m fine.", sender: "me" },
      { id: 3, text: "What about you?", sender: "me" },
      { id: 4, text: "Have you posted a Casting Call for your next project?", sender: "me", timeChip: "1 min ago" },
      { id: 5, text: "I’m good.", sender: "other" },
      { id: 6, text: "Yes exactly, that’s what I wanted to discuss with you.", sender: "other", timeChip: "Just Now" },
    ],
  },
  {
    id: 2,
    name: "Muhammad Ali Nizami",
    message: "Hi Wajahat! Hope you’re doing well.",
    time: "1 hour ago",
    unread: 0,
    image: Jeremiahgreenimage,
    createdAt: Date.now() - 3600 * 1000,
    messages: [
      { id: 1, text: "Hi Wajahat! Hope you’re doing well.", sender: "other", timeChip: "4 hours ago" },
      { id: 2, text: "Hi Ali! I’m fine.", sender: "me" },
      { id: 3, text: "What about you?", sender: "me" },
      { id: 4, text: "I’m good, thanks!", sender: "other", timeChip: "Just now" },
    ],
  },
];

const ChatPage = () => {
  const [chats, setChats] = useState(chatsData);
  const [selectedChat, setSelectedChat] = useState(chatsData[0]);
  const [newMessage, setNewMessage] = useState("");

  const sendMessage = () => {
    if (!newMessage.trim()) return;

    const updated = chats.map((chat) =>
      chat.id === selectedChat.id
        ? {
            ...chat,
            messages: [
              ...chat.messages,
              {
                id: chat.messages.length + 1,
                text: newMessage,
                sender: "me",
                timeChip: "Just Now",
              },
            ],
            message: newMessage,
            createdAt: Date.now(),
          }
        : chat
    );

    setChats(updated);
    setSelectedChat(updated.find((c) => c.id === selectedChat.id));
    setNewMessage("");
  };

  const handleSelectChat = (chat) => {
    const updated = chats.map((c) =>
      c.id === chat.id ? { ...c, unread: 0 } : c
    );
    setChats(updated);
    setSelectedChat(updated.find((c) => c.id === chat.id));
  };

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      {/* Sidebar */}
      <Sidebar />

  {/* Main */}
  <div className="flex flex-col flex-1 min-h-0 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between border-b p-3 bg-white">
          <h2 className="text-sm md:text-base font-semibold">Chat</h2>
          <div className="flex items-center gap-3">
            <div className="relative">
              <input
                type="text"
                placeholder="Search Messages"
                className="w-[220px] lg:w-[300px] pl-8 pr-3 py-2 rounded-full bg-gray-100 text-sm focus:outline-none"
              />
              <FiSearch className="absolute left-2.5 top-2.5 text-gray-500" />
            </div>
            <button className="bg-black text-white px-4 py-1 rounded-full text-sm">
              New Chat
            </button>
          </div>
        </div>

  {/* Content */}
  <div className="flex flex-1 min-h-0 overflow-hidden">
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

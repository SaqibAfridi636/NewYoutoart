// src/pages/Support.jsx
import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";
import Sidebar from "../../common/layout/Sidebar/Sidebar";
import NotificationSection from "../../common/NotificationSection";
import Notificationicon from "../../../assets/Icons/Notificationicon.png"; // 👈 adjust path

const faqs = [
  { question: "What is the You2Art?", answer: "You2Art is a creative platform where users can share, discover, and interact with various forms of art." },
  { question: "How do I create an account on the You2Art?", answer: "You can create an account by signing up with your email, phone, or social media login on the app." },
  { question: "What types of content can I share on the app?", answer: "You can share photos, videos, artwork, and creative content to connect with the community." },
  { question: "How can I interact with other users?", answer: "You can like, comment, follow, and send messages to interact with other users." },
  { question: "Is my personal information safe on the app?", answer: "We take your privacy seriously. Your personal information is protected through security measures and data encryption." },
  { question: "How can I discover actors and directors?", answer: "You can use the search feature or explore categories to discover actors, directors, and other artists." },
  { question: "Can I customize my feed to see specific types of art?", answer: "Yes, you can customize your feed by following categories or creators you’re interested in." },
  { question: "How can I provide feedback or report inappropriate content?", answer: "You can provide feedback or report content directly through the app settings or report option on each post." },
];

const Support = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [showNotifications, setShowNotifications] = useState(false);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const filteredFaqs = faqs.filter((faq) =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-6 relative">
        {/* Local Header */}
        <div className="w-full h-[80px] flex justify-between items-center bg-white px-4 shadow mb-6">
          <h1 className="text-xl font-semibold text-gray-800">Help & Support</h1>

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
              <img src={Notificationicon} alt="notifications" className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-md shadow mb-6">
          <div className="border-b px-4 py-2 bg-gray-100 text-sm font-medium text-gray-600">
            Frequently Asked Questions
          </div>
          <div>
            {filteredFaqs.map((faq, index) => (
              <div key={index} className="border-b">
                <button
                  className="w-full flex justify-between items-center px-4 py-3 text-left text-gray-800 text-sm focus:outline-none"
                  onClick={() => toggleFAQ(index)}
                >
                  <span>{faq.question}</span>
            <span>
  {activeIndex === index ? <FiChevronUp /> : <FiChevronDown />}
</span>
                </button>
                {activeIndex === index && (
                  <div className="px-4 pb-3 text-sm text-gray-600">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Show Notification Section when toggled */}
        {showNotifications && (
          <div className="absolute top-20 right-6 w-96 z-50">
            <NotificationSection />
          </div>
        )}
      </div>
    </div>
  );
};

export default Support;

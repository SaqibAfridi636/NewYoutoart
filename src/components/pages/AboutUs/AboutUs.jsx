// src/pages/AboutUs.jsx
import React, { useState, useEffect, useRef } from "react";
import { FiSearch, FiBell, FiMenu, FiX } from "react-icons/fi";
import Sidebar from "../../common/layout/Sidebar/Sidebar";
import NotificationSection from "../../common/NotificationSection";

const AboutUs = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const notificationRef = useRef(null);

  // Close notifications when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        notificationRef.current &&
        !notificationRef.current.contains(e.target)
      ) {
        setShowNotifications(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar (Desktop) */}
      <div className="hidden md:block">
        <Sidebar />
      </div>

      {/* Sidebar (Mobile Overlay) */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black opacity-40"
            onClick={() => setSidebarOpen(false)}
          ></div>

          {/* Sidebar Drawer */}
          <div className="relative bg-white w-64 h-full shadow-lg z-50">
            <button
              onClick={() => setSidebarOpen(false)}
              className="absolute top-4 right-4 text-gray-600 hover:text-black"
            >
              <FiX size={22} />
            </button>
            <Sidebar />
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="flex-1 p-4 sm:p-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 relative gap-4">
          <div className="flex items-center justify-between sm:justify-start w-full sm:w-auto">
            {/* Hamburger for Mobile */}
            <button
              className="md:hidden p-2 rounded-md hover:bg-gray-100"
              onClick={() => setSidebarOpen(true)}
            >
              <FiMenu className="text-gray-700" size={22} />
            </button>
            <h1 className="text-xl font-semibold text-gray-800 ml-2 sm:ml-0">
              About Us
            </h1>
          </div>

          <div className="flex items-center space-x-2 sm:space-x-4 w-full sm:w-auto">
            {/* Search Bar */}
            <div className="relative flex-1 sm:flex-none sm:w-64">
              <input
                type="text"
                placeholder="Search"
                className="w-full border rounded-md pl-8 pr-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
              <FiSearch className="absolute left-2.5 top-3 text-gray-400" />
            </div>

            {/* Notification Icon */}
            <div className="relative" ref={notificationRef}>
              <button
                onClick={() => setShowNotifications(!showNotifications)}
                className="p-2 rounded-full hover:bg-gray-100"
              >
                <FiBell className="text-gray-600 text-lg" />
              </button>

              {showNotifications && (
                <div className="absolute right-0 mt-2 z-50 w-72 sm:w-80">
                  <NotificationSection />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* About Us Content */}
        <div className="bg-white p-4 sm:p-6 rounded-md shadow text-gray-700 text-sm leading-relaxed">
          <h2 className="text-lg font-bold mb-4">About Us</h2>

          <p className="mb-4">
            <strong>Our Vision</strong> <br />
            At You2Art, we believe that art has the power to inspire, provoke
            thought, and foster connections that transcend boundaries. Our
            vision is to create an inclusive community where artists of all
            backgrounds and disciplines can showcase their creations, receive
            recognition, and find inspiration in the work of others.
          </p>

          <p className="mb-4">
            <strong>Who We Are</strong> <br />
            We are a team of artists, technologists, and dreamers who are
            passionate about nurturing a thriving artistic ecosystem. Our
            diverse backgrounds allow us to blend creativity with innovation,
            ensuring that the You2Art app is a place where imagination knows no
            limits.
          </p>

          <p className="mb-4">
            <strong>What We Offer</strong> <br />
            Through the You2Art app, you can explore a diverse spectrum of art
            forms—from mesmerizing paintings and captivating photographs to
            exhilarating performances and soul-stirring poetry. Connect with
            like-minded individuals who share your passion, engage in
            conversations that spark creativity, and discover hidden gems from
            emerging talents.
          </p>

          <p className="mb-4">
            <strong>Empowerment Through Connection</strong> <br />
            We believe that art thrives in an environment of collaboration and
            shared experiences. With You2Art, you can connect with fellow
            artists, exchange ideas, and support each other’s artistic journeys.
            Whether you’re a seasoned creator or someone just dipping their toes
            into the world of art, you’ll find a welcoming community that
            embraces uniqueness and celebrates expression.
          </p>

          <p className="mb-4">
            <strong>Your Art, Your Story</strong> <br />
            Every artist has a story to tell, and we’re here to help you share
            it with the world. Use the You2Art app to tell your story through
            your art, connect with an appreciative audience, and embark on a
            journey of self-discovery and growth.
          </p>

          <p className="mb-4">
            <strong>Join Us</strong> <br />
            We invite you to become a part of the You2Art community. Whether
            you’re here to share your creations, engage in conversations, or
            simply immerse yourself in the diverse world of art, we’re excited
            to have you on board. Together, let’s ignite creativity, foster
            connections, and make the world a more colorful place through the
            magic of art.
          </p>

          <p>
            <strong>Contact Us</strong> <br />
            Have questions, suggestions, or feedback? We’d love to hear from
            you! Reach out to us at [Contact Email] and let’s continue building
            this artistic journey together.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

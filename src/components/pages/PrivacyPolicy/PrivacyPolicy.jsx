// src/pages/PrivacyPolicy.jsx
import React, { useState } from "react";
import { FiSearch, FiBell } from "react-icons/fi";
import Sidebar from "../../common/layout/Sidebar/Sidebar";
import NotificationSection from "../../common/NotificationSection";
import Notificationicon from "../../../assets/Icons/Notificationicon.png";

const PrivacyPolicy = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} />

  {/* Main Content */}
      <div className="flex-1 flex flex-col min-h-0">
        {/* Header */}
        <header className="w-full bg-white shadow-sm p-2 flex items-center justify-between relative">
          <h1 className="text-lg font-semibold text-gray-800">Privacy & Policy</h1>

          <div className="flex items-center space-x-4">
            {/* Search Bar */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="w-[220px] lg:w-[300px] pl-8 pr-3 py-2 rounded-full bg-gray-100 text-sm focus:outline-none"
              />
              <FiSearch className="absolute left-2.5 top-2.5 text-gray-500" />
            </div>

            {/* Notification */}
            <div className="relative">
              <button
                onClick={() => setShowNotifications(!showNotifications)}
                className="p-2 rounded-full hover:bg-gray-100"
              >
                <img src={Notificationicon} alt="" />
              </button>

              {/* Dropdown */}
              {showNotifications && (
                <div className="absolute right-0 mt-2 z-50">
                  <NotificationSection />
                </div>
              )}
            </div>
          </div>
        </header>

  {/* Content */}
  <main className="flex-1 overflow-auto md:px-2 py-2">
    <div className="w-[100%] mx-auto bg-white p-6 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-2">Privacy Policy</h2>
      <p className="text-sm text-gray-500 mb-6">Effective Date: 25 Nov, 2022</p>

          {/* Section 1 */}
          <section className="mb-6">
            <h3 className="font-semibold mb-2">1. Introduction</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Welcome to the You2Art App ("App," "We," "Us," or "Our"). This
              Privacy Policy explains how we collect, use, disclose, and
              safeguard your information when you use our services. By using the
              App, you agree to the practices described in this Privacy Policy.
            </p>
          </section>

          {/* Section 2 */}
          <section className="mb-6">
            <h3 className="font-semibold mb-2">2. Information We Collect</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              2.1 Personal Information: We may collect personal details such as
              your name, email address, phone number, profile picture, and
              location when you create an account.
              <br />
              <br />
              2.2 Usage Data: We automatically collect data about your
              interactions with the App, including IP address, device
              information, and activity logs.
              <br />
              <br />
              2.3 User Content: Any content (posts, comments, uploads) you share
              may be stored and visible to other users, depending on your
              privacy settings.
            </p>
          </section>

          {/* Section 3 */}
          <section className="mb-6">
            <h3 className="font-semibold mb-2">3. How We Use Your Information</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              3.1 Service Delivery: We use the information to operate, maintain,
              and improve our services.
              <br />
              <br />
              3.2 Communication: We may send updates, promotional messages, and
              account-related notifications to your registered email address.
              <br />
              <br />
              3.3 Analytics: We analyze user activity to understand engagement
              and enhance the user experience.
            </p>
          </section>

          {/* Section 4 */}
          <section className="mb-6">
            <h3 className="font-semibold mb-2">4. Sharing of Information</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              4.1 Third-Party Services: We may share information with trusted
              service providers who perform services on our behalf.
              <br />
              <br />
              4.2 Legal Requirements: We may disclose your data if required by
              law, regulation, or legal proceedings.
              <br />
              <br />
              4.3 Business Transfers: In the event of a merger or acquisition,
              your information may be transferred to the new entity.
            </p>
          </section>

          {/* Section 5 */}
          <section className="mb-6">
            <h3 className="font-semibold mb-2">5. Your Privacy Choices</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              5.1 Account Settings: You can update or delete your information
              through your account settings at any time.
              <br />
              <br />
              5.2 Communication Preferences: You can opt out of marketing emails
              by clicking "unsubscribe" in our messages.
              <br />
              <br />
              5.3 Data Retention: We retain your information only as long as
              necessary to provide services or as required by law.
            </p>
          </section>
    </div>
  </main>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

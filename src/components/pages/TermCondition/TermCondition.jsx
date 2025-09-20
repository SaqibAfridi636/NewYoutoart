// src/pages/TermsConditions.jsx
import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import Sidebar from "../../common/layout/Sidebar/Sidebar";
import NotificationSection from "../../common/NotificationSection";
import Notificationicon from "../../../assets/Icons/Notificationicon.png";

const TermsConditions = () => {
  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* ✅ Keep your old Header */}
        <header className="w-full bg-white shadow-sm p-2 flex items-center justify-between relative">
          <h1 className="text-lg font-semibold text-gray-800">
            Terms & Conditions
          </h1>

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

            {/* Notification Icon */}
            <div className="relative">
              <button
                onClick={() => setShowNotifications(!showNotifications)}
                className="p-2 rounded-full hover:bg-gray-100"
              >
                <img src={Notificationicon} alt="" />
              </button>

              {showNotifications && (
                <div className="absolute right-0 mt-2 z-50">
                  <NotificationSection />
                </div>
              )}
            </div>
          </div>
        </header>

        {/* ✅ Content updated to match screenshot */}
      
<main className="w-full flex-1 px-6 md:px-12 py-8">
  <h2 className="text-2xl font-bold mb-1">Terms & Conditions</h2>
  <p className="text-sm text-gray-500 mb-6">Effective Date: 25 Nov, 2022</p>

  {/* Section 1 */}
  <section className="mb-6">
    <h3 className="font-semibold mb-2">1. Introduction</h3>
    <p className="text-[13px] text-gray-700 leading-7">
      Welcome to the You2Art App ("App", "We", "Us," or "Our"). This Privacy Policy
      outlines how we collect, use, disclose, and protect your personal information
      when you use the App. By using the App, you agree to the terms and practices
      described in this Privacy Policy.
    </p>
  </section>

  {/* Section 2 */}
  <section className="mb-6">
    <h3 className="font-semibold mb-2">2. Information We Collect</h3>
    <p className="text-[13px] text-gray-700 leading-7">
      <strong>2.1 Personal Information:</strong> When you create an account, we may
      collect personal information such as your name, email address, profile picture,
      and location.
      <br /><br />
      <strong>2.2 User Content:</strong> The App allows you to post and share User
      Content. This content may contain personal information that you choose to share
      with others.
      <br /><br />
      <strong>2.3 Usage Data:</strong> We collect information about your interactions
      with the App, including log data, device information, and usage patterns.
    </p>
  </section>

  {/* Section 3 */}
  <section className="mb-6">
    <h3 className="font-semibold mb-2">3. How We Use Your Information</h3>
    <p className="text-[13px] text-gray-700 leading-7">
      <strong>3.1 Providing Services:</strong> We use your information to provide and
      improve the services offered by the App, including personalized content and
      recommendations.
      <br /><br />
      <strong>3.2 Communication:</strong> We may use your email address to send you
      notifications, updates, and marketing materials related to the App. You can opt
      out of these communications at any time.
      <br /><br />
      <strong>3.3 Analytics:</strong> We analyze user interactions to improve the App’s
      functionality, user experience, and performance.
    </p>
  </section>

  {/* Section 4 */}
  <section className="mb-6">
    <h3 className="font-semibold mb-2">4. Sharing and Disclosure</h3>
    <p className="text-[13px] text-gray-700 leading-7">
      <strong>4.1 User Content:</strong> Your User Content may be visible to other users
      of the App according to your privacy settings.
      <br /><br />
      <strong>4.2 Service Providers:</strong> We may share your information with
      third-party service providers who assist in operating the App or providing
      related services.
      <br /><br />
      <strong>4.3 Legal Compliance:</strong> We may disclose your information if required
      by law, regulation, legal process, or governmental request.
    </p>
  </section>
</main>

      </div>
    </div>
  );
};

export default TermsConditions;

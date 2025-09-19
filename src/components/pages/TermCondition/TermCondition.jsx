// src/pages/TermsConditions.jsx
import React, { useState } from "react";
import { FiSearch, FiBell } from "react-icons/fi";
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
      <div className=" flex-1 flex flex-col">
        {/* Header */}
        <header className="w-full bg-white shadow-sm p-4 flex items-center justify-between relative">
          <h1 className="text-lg font-semibold text-gray-800">
            Terms & Conditions
          </h1>

          <div className="flex items-center space-x-4">
            {/* Search Bar */}
            <div className="relative w-64">
              <input
                type="text"
                placeholder="Search"
                className="w-full border rounded-md pl-8 pr-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
              <FiSearch className="absolute left-2.5 top-3 text-gray-400" />
            </div>

            {/* Notification Icon */}
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
        <main className="w-[100%]  flex-1 p-5 md:p-8  ">
          <h2 className="text-2xl font-bold mb-2">Terms & Conditions</h2>
          <p className="text-sm text-gray-500 mb-6">
            Effective Date: 25 Nov, 2022
          </p>

          {/* Section 1 */}
          <section className="mb-6">
            <h3 className="font-semibold mb-2">1. Introduction</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Welcome to the You2Art App ("App", "We", "Us," or "Our"). This
              Privacy Policy outlines how we collect, use, disclose, and protect
              your personal information when you use the App. By using the App,
              you agree to the terms and practices described in this Privacy
              Policy.
            </p>
          </section>

          {/* Section 2 */}
          <section className="mb-6">
            <h3 className="font-semibold mb-2">2. Information We Collect</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              2.1 Personal Information: When you create an account, we may
              collect personal information such as your name, email address,
              profile picture, and location.
              <br />
              <br />
              2.2 User Content: The App allows you to post and share User
              Content. This content may contain personal information that you
              choose to share with others.
              <br />
              <br />
              2.3 Usage Data: We collect information about your interactions
              with the App, including log data, device information, and usage
              patterns.
            </p>
          </section>

          {/* Section 3 */}
          <section className="mb-6">
            <h3 className="font-semibold mb-2">3. How We Use Your Information</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              3.1 Providing Services: We use your information to provide and
              improve the services offered by the App, including personalized
              content and recommendations.
              <br />
              <br />
              3.2 Communication: We may use your email address to send you
              notifications, updates, and marketing materials related to the
              App. You can opt out of these communications at any time.
              <br />
              <br />
              3.3 Analytics: We analyze user interactions to improve the App’s
              functionality, user experience, and performance.
            </p>
          </section>

          {/* Section 4 */}
          <section className="mb-6">
            <h3 className="font-semibold mb-2">4. Sharing and Disclosure</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              4.1 User Content: Your User Content may be visible to other users
              of the App according to your privacy settings.
              <br />
              <br />
              4.2 Service Providers: We may share your information with
              third-party service providers who assist in operating the App or
              providing related services.
              <br />
              <br />
              4.3 Legal Compliance: We may disclose your information if required
              by law, regulation, legal process, or governmental request.
            </p>
          </section>
        </main>
      </div>
    </div>
  );
};

export default TermsConditions;

// src/pages/tabs/AboutTab.jsx
import React from "react";
import PakistanFlag from "../../../assets/images/Pakistanflag.png"; // add your flag image path

const AboutTab = () => {
  return (
    <div className="bg-white p-4 shadow rounded">
      {/* Bio */}
      <div className="mb-4">
        <h2 className=" text-gray-400 text-lg mb-2">Bio</h2>
        <p className="text-gray-600 text-sm">
          Netus vel neque vulputate nam nam sit amet a pulvinar. Vitae consequat
          sed sit interdum nulla. Libero viverra facilisis.
        </p>
      </div>

      {/* Personal Website */}
      <div className="py-2 border-t">
        <p className=" text-gray-400 text-lg mb-2">Personal Website</p>
        <a
          href="https://www.be.net/WajahatUIUX"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 text-sm hover:underline"
        >
          www.be.net/WajahatUIUX
        </a>
      </div>

      {/* Experience */}
      <div className="py-2 border-t">
        <p className=" text-gray-400 text-lg mb-2">Experience</p>
        <p className="text-sm text-gray-700">5+ Years</p>
      </div>

      {/* Location */}
      <div className="py-2 border-t">
        <p className=" text-gray-400 text-lg mb-2">Location</p>
        <div className="flex items-center space-x-2">
          <img src={PakistanFlag} alt="Pakistan Flag" className="w-5 h-5" />
          <span className="text-sm text-gray-700">Islamabad, Pakistan</span>
        </div>
      </div>
    </div>
  );
};

export default AboutTab;

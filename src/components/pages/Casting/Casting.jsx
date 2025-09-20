// src/components/pages/Casting/Casting.jsx
import { useState } from "react";
import Sidebar from "../../common/layout/Sidebar/Sidebar";
import HomeHeader from "../../common/HomeHeader";
import CastingHeader from "./CastingHeader";
import CastingCall from "./CastingCall";
import Applied from "./Applied";
import MyCastingCall from "./MyCastingCall";

const Casting = () => {
  const [activeTab, setActiveTab] = useState("casting");

  return (
    <div className="h-screen flex flex-col md:flex-row bg-gray-50">
      {/* Sidebar */}
      <div className="hidden md:flex md:w-1/5 bg-white border-r flex-shrink-0">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="relative flex-1 md:w-4/5 bg-gray-50 min-h-screen flex flex-col">
        {/* Top Header */}
        <HomeHeader />

        {/* Casting Tabs Header */}
        <CastingHeader activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* Content Switch */}
        <div className="flex-1 p-2 md:p-4">
          {activeTab === "casting" && <CastingCall />}
          {activeTab === "applied" && <Applied />}
          {activeTab === "my" && <MyCastingCall />}
        </div>
      </div>
    </div>
  );
};

export default Casting;

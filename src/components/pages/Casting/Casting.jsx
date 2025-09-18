// src/components/pages/Casting/Casting.jsx
import { useState } from "react";
import Sidebar from "../../common/layout/Sidebar/Sidebar";
import HomeHeader from "../../common/HomeHeader";
import CastingTabs from "./CastingTabs";
import CastingList from "./CastingList";
import CastingDetails from "./CastingDetails";

// Dummy datasets
import { CASTING_CALLS, APPLIED_CALLS, MY_CASTINGS } from "./CastingData";

const Casting = () => {
  const [activeTab, setActiveTab] = useState("casting");
  const [selectedCall, setSelectedCall] = useState(CASTING_CALLS[0]);

  const datasets = {
    casting: CASTING_CALLS,
    applied: APPLIED_CALLS,
    my: MY_CASTINGS,
  };

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

        {/* Tabs */}
        <CastingTabs
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          setSelectedCall={setSelectedCall}
          datasets={datasets}
        />

        {/* Content */}
        <div className="flex flex-col md:flex-row flex-1 p-2 md:p-4 space-y-4 md:space-y-0 md:space-x-4 overflow-hidden h-[calc(100vh-280px)] md:h-[calc(100vh-200px)]">
          <CastingList
            activeTab={activeTab}
            data={datasets[activeTab]}
            selectedCall={selectedCall}
            setSelectedCall={setSelectedCall}
          />
          <CastingDetails call={selectedCall} />
        </div>
      </div>
    </div>
  );
};

export default Casting;

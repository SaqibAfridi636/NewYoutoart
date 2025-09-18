import React from "react";
import ActivityTab from "./ActivityTab";
import AboutTab from "./AboutTab";
import WorkTab from "./WorkTab";

const TabContent = ({ activeTab }) => {
  return (
    <div className="mt-3">
      {activeTab === "activity" && <ActivityTab />}
      {activeTab === "about" && <AboutTab />}
      {activeTab === "work" && <WorkTab />}
    </div>
  );
};

export default TabContent;

// src/components/pages/Casting/CastingTabs.jsx
import Castingicon from "../../../assets/Icons/Castingicon.png";
import Appliedicon from "../../../assets/Icons/Appliedicon.png";

const CastingTabs = ({ activeTab, setActiveTab, setSelectedCall, datasets }) => {
  return (
    <div className="bg-white shadow-sm px-4 md:px-6 py-3 md:py-4 m-2 flex items-center border-b space-x-4 md:space-x-6">
      <div
        className={`flex items-center space-x-2 font-semibold cursor-pointer ${
          activeTab === "casting" ? "text-black" : "text-gray-700"
        }`}
        onClick={() => {
          setActiveTab("casting");
          setSelectedCall(datasets.casting[0]);
        }}
      >
        <img src={Castingicon} alt="casting" className="w-5 h-5" />
        <span>Casting Call</span>
      </div>

      <div
        className={`flex items-center space-x-2 font-semibold cursor-pointer ${
          activeTab === "applied" ? "text-black" : "text-gray-700"
        }`}
        onClick={() => {
          setActiveTab("applied");
          setSelectedCall(datasets.applied[0]);
        }}
      >
        <img src={Appliedicon} alt="applied" className="w-5 h-5" />
        <span>Applied</span>
      </div>

      <div
        className={`flex items-center space-x-2 font-semibold cursor-pointer ${
          activeTab === "my" ? "text-black" : "text-gray-700"
        }`}
        onClick={() => {
          setActiveTab("my");
          setSelectedCall(datasets.my[0]);
        }}
      >
        <img src={Castingicon} alt="my casting" className="w-5 h-5" />
        <span>My Casting Calls</span>
      </div>
    </div>
  );
};

export default CastingTabs;

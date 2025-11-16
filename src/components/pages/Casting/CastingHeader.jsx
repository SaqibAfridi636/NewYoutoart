// src/components/pages/Casting/CastingHeader.jsx
import Castingicon from "../../../assets/Icons/Castingicon.png";
import Appliedicon from "../../../assets/Icons/Appliedicon.png";

const Tab = ({ id, active, onClick, iconSrc, label }) => (
  <button
    onClick={() => onClick(id)}
    className={`flex items-center gap-2 text-sm md:text-[15px] font-semibold whitespace-nowrap transition-colors
      ${active ? "text-black" : "text-gray-600 hover:text-gray-800"}`}
  >
    {/* icon with blue ring when active */}
    <span
      className={`inline-flex items-center justify-center rounded-full
        ${active ? "ring-2 ring-blue-500/80 ring-offset-2 ring-offset-white" : ""}`}
    >
      <img
        src={iconSrc}
        alt={label}
        className={`w-5 h-5 ${active ? "" : "opacity-70"}`}
      />
    </span>
    <span>{label}</span>
  </button>
);

const Separator = () => (
  <span className="mx-3 text-gray-300 select-none">✧</span>
);

const CastingHeader = ({ activeTab, setActiveTab }) => {
  return (
    <div className="bg-white px-3 md:px-5 py-2 md:py-3 border-b shadow-sm/0 flex items-center">
      <div className="flex items-center gap-4">
        <Tab
          id="casting"
          active={activeTab === "casting"}
          onClick={setActiveTab}
          iconSrc={Castingicon}
          label="Casting Calls"
        />
        {/* <Separator /> */}
        <Tab
          id="applied"
          active={activeTab === "applied"}
          onClick={setActiveTab}
          iconSrc={Appliedicon}
          label="Applied"
        />
        {/* <Separator /> */}
        <Tab
          id="my"
          active={activeTab === "my"}
          onClick={setActiveTab}
          iconSrc={Castingicon}
          label="My Casting Calls"
        />
      </div>
    </div>
  );
};


export default CastingHeader;

// src/components/pages/Casting/Applied.jsx
import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import Moreicon from "../../../assets/Icons/Moreicon.png";
import PakistanFlag from "../../../assets/images/PakistanFlag.png";
import Appliedicon from "../../../assets/Icons/Appliedicon.png";

// Sample data (duplicated rows to fill the left list like the screenshot)
const APPLIED_CALLS = [
  {
    id: 1,
    title: "The Next Short Film",
    postedBy: "James Geidt",
    location: "Islamabad",
    type: "Short Film",
    shoot: "25 Days",
    budget: "$20K",
    publishedOn: "24th April, 2023",
    appliedAgo: "Applied, 2 Days Ago",
    description: [
      "Lorem ipsum dolor sit amet consectetur. Augue mi ut velit vitae. Lectus felis faucibus dolor facilisis tellus. Nisl morbi sem lacus eget ut sit pharetra tincidunt.",
      "Nunc elit sit ac consequat posuere id nunc vitae etiam.",
      "Posuere id nunc vitae etiam.",
    ],
    crewRequired: 1,
    shootDetails:
      "Shoot will be of 30 days at the Centaurus Mall Islamabad.",
    budgetFull: "$20,000",
    req: { age: "23 Years", height: "5.9 Feet", gender: "Male Only" },
  },
  // duplicates for the left column
  { id: 2, ...this?.id, title: "The Next Short Film" }, // will be overwritten below
  { id: 3, ...this?.id, title: "The Next Short Film" },
  { id: 4, ...this?.id, title: "The Next Short Film" },
].map((row, i, arr) =>
  i === 0
    ? row
    : {
      ...arr[0],
      id: i + 1,
    }
);

const Stat = ({ label, value }) => (
  <div>
    <div className="text-[12px] text-gray-500">{label}</div>
    <div className="font-semibold">{value}</div>
  </div>
);

const Applied = () => {
  const [selectedCall, setSelectedCall] = useState(APPLIED_CALLS[0]);

  return (
    <div className="flex flex-col md:flex-row gap-4 h-[calc(100vh-120px)]">
      {/* Left list */}
      <aside className="w-full md:w-1/3 p-4 bg-white rounded-lg shadow-md overflow-y-auto">
        <div className="space-y-3">
          {APPLIED_CALLS.map((call) => {
            const active = selectedCall?.id === call.id;
            return (
              <div
                key={call.id}
                onClick={() => setSelectedCall(call)}
                className={`p-4 rounded-lg cursor-pointer border transition-colors ${active
                  ? "bg-blue-100/70 border-blue-200"
                  : "border-transparent hover:bg-gray-50"
                  }`}
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <FaUserCircle className="text-gray-400 text-3xl" />
                    <div>
                      <h3 className="font-semibold leading-5">{call.title}</h3>
                      <p className="text-sm text-gray-500">{call.postedBy}</p>
                    </div>
                  </div>
                  <img src={Moreicon} alt="More" className="w-6 h-6" />
                </div>

                <div className="mt-3 grid grid-cols-2 gap-3">
                  <Stat label="Location" value={call.location} />
                  <Stat label="Type" value={call.type} />
                  <Stat label="Shoot" value={call.shoot} />
                  <Stat label="Budget" value={call.budget} />
                </div>
              </div>
            );
          })}
        </div>
      </aside>

   {/* Right Details */}
<section className="flex-1 bg-white rounded-lg shadow-md p-4 overflow-y-auto">
  {selectedCall ? (
    <div className="space-y-6">
      {/* Title Row */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold">{selectedCall.title}</h1>
          <p className="text-gray-600 mt-1">
            Published on{" "}
            <span className="text-blue-500">{selectedCall.publishedOn}</span>
          </p>
        </div>
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-2 rounded-full bg-green-100 text-green-700 text-sm px-3 py-1">
            <img src={Appliedicon} alt="Applied" className="w-4 h-4" />
            {selectedCall.appliedAgo}
          </span>
          <button className="px-4 py-1 bg-black text-white rounded-full text-sm">
            Withdraw
          </button>
          <img src={Moreicon} alt="More" className="w-6 h-6" />
        </div>
      </div>

      {/* Posted By */}
      <div className="flex items-center gap-3 p-4 bg-gray-100 rounded">
        <FaUserCircle className="text-gray-400 text-3xl" />
        <div>
          <p className="text-gray-500 text-sm">Posted by</p>
          <p className="font-semibold">{selectedCall.postedBy}</p>
        </div>
      </div>

      {/* Description */}
      <div>
        <h3 className="text-gray-600 text-sm mb-2">Description</h3>
        <div className="space-y-2 text-gray-700 text-sm">
          {selectedCall.description.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>

      {/* Location */}
      <div>
        <h3 className="text-gray-600 text-sm mb-2">Location</h3>
        <div className="flex items-center gap-2">
          <img src={PakistanFlag} alt="Flag" className="w-5 h-5" />
          <span>{selectedCall.location}, Pakistan</span>
        </div>
      </div>

      {/* Shoot Details */}
      <div>
        <h3 className="text-blue-500 text-sm font-medium mb-2">Shoot Details</h3>
        <div className="grid md:grid-cols-3 gap-4 text-gray-700 text-sm">
          <div>
            <p className="text-gray-500">Crew Required</p>
            <p>{selectedCall.crewRequired}</p>
          </div>
          <div>
            <p className="text-gray-500">Shoot Details</p>
            <p>{selectedCall.shootDetails}</p>
          </div>
          <div>
            <p className="text-gray-500">Budget</p>
            <p>{selectedCall.budgetFull}</p>
          </div>
        </div>
      </div>

      {/* Requirements */}
      <div>
        <h3 className="text-blue-500 text-sm font-medium mb-2">Requirements</h3>
        <div className="grid md:grid-cols-3 gap-4 text-gray-700 text-sm">
          <div>
            <p className="text-gray-500">Age</p>
            <p>{selectedCall.req.age}</p>
          </div>
          <div>
            <p className="text-gray-500">Height</p>
            <p>{selectedCall.req.height}</p>
          </div>
          <div>
            <p className="text-gray-500">Gender</p>
            <p>{selectedCall.req.gender}</p>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <p className="text-gray-500">Select an applied casting to view details.</p>
  )}
</section>

    </div>
  );
};

export default Applied;

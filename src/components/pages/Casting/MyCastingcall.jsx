import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import Moreicon from "../../../assets/Icons/Moreicon.png";
import PakistanFlag from "../../../assets/images/PakistanFlag.png";
import Deleteicon from "../../../assets/Icons/Deleteicon.png";

// Use your own assets exactly as requested. No third‑party icon sets besides react-icons (FaUserCircle).
// The UI mirrors your screenshot and original structure.

const MY_CASTINGS = [
  {
    id: 1,
    title: "The Next Short Film",
    location: "Islamabad",
    type: "Short Film",
    shoot: "25 Days",
    budget: "$20K",
    publishedOn: "24th April, 2023",
    applicants: 520,
    description: [
      "Lorem ipsum dolor sit amet consectetur. Augue mi ut velit vitae. Lectus felis faucibus dolor facilisis tellus. Nisl morbi sem lacus eget ut sit pharetra tincidunt.",
      "Nunc elit sit ac consequat posuere id nunc vitae etiam.",
      "Posuere id nunc vitae etiam.",
    ],
    crewRequired: 1,
    shootDetails: "Shoot will be of 30 days at the Centaurus Mall Islamabad.",
    budgetFull: "$20,000",
    req: { age: "23 Years", height: "5.9 Feet", gender: "Male Only" },
  },
  // Duplicates for the left list
  { id: 2, title: "The Next Short Film", location: "Islamabad", type: "Short Film", shoot: "25 Days", budget: "$20K", publishedOn: "24th April, 2023", applicants: 520, description: [], crewRequired: 1, shootDetails: "", budgetFull: "$20,000", req: { age: "23 Years", height: "5.9 Feet", gender: "Male Only" } },
  { id: 3, title: "The Next Short Film", location: "Islamabad", type: "Short Film", shoot: "25 Days", budget: "$20K", publishedOn: "24th April, 2023", applicants: 520, description: [], crewRequired: 1, shootDetails: "", budgetFull: "$20,000", req: { age: "23 Years", height: "5.9 Feet", gender: "Male Only" } },
  { id: 4, title: "The Next Short Film", location: "Islamabad", type: "Short Film", shoot: "25 Days", budget: "$20K", publishedOn: "24th April, 2023", applicants: 520, description: [], crewRequired: 1, shootDetails: "", budgetFull: "$20,000", req: { age: "23 Years", height: "5.9 Feet", gender: "Male Only" } },
];

const Stat = ({ label, value }) => (
  <div>
    <div className="text-[13px] text-gray-500">{label}</div>
    <div className="font-semibold">{value}</div>
  </div>
);

const MyCastingCall = () => {
  const [selected, setSelected] = useState(MY_CASTINGS[0]);

  return (
    <div className="min-h-screen ">
      {/* Tabs row (like the screenshot header) */}
      {/* <div className="mx-auto w-full max-w-[1200px] px-4 pt-4">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <span>Casting Calls</span>
          <span>•</span>
          <span>Applied</span>
          <span>•</span>
          <span className="font-medium">My Casting Calls</span>
        </div>
      </div> */}

      {/* Main two-column layout */}
      <div className="mx-auto mt-3 flex w-full max-w-[1200px] gap-4 px-4 pb-6">
        {/* Left column */}
        <aside className="w-full md:w-1/3 rounded-lg bg-white shadow-md p-4 h-[calc(100vh-180px)] overflow-y-auto">
          <div className="flex justify-center mb-4">
            <button className="h-10 w-[230px] rounded-full bg-black text-white text-sm font-medium">
              + Create Casting Call
            </button>
          </div>

          <ul className="space-y-3">
            {MY_CASTINGS.map((call) => {
              const active = selected?.id === call.id;
              return (
                <li
                  key={call.id}
                  onClick={() => setSelected(call)}
                  className={`cursor-pointer rounded-lg border p-4 ${
                    active ? "bg-blue-50 border-blue-100" : "border-transparent hover:bg-gray-50"
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-3">
                      <FaUserCircle className="h-8 w-8 text-gray-400" />
                      <div>
                        <h3 className="font-semibold leading-5">{call.title}</h3>
                        <div className="text-[13px] text-gray-500 mt-1">
                          Published, 2 Days Ago
                        </div>
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
                </li>
              );
            })}
          </ul>
        </aside>

        {/* Right column */}
        <section className="flex-1 rounded-lg bg-white shadow-md p-4 h-[calc(100vh-180px)] overflow-y-auto">
          {selected ? (
            <div className="space-y-6">
              {/* Title + actions */}
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-bold">{selected.title}</h2>
                  <div className="mt-1 text-sm text-gray-600">
                    Published on <span className="text-blue-600">{selected.publishedOn}</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <button className="inline-flex items-center gap-2 rounded-full border border-red-300 bg-red-50 px-4 py-2 text-sm font-medium text-red-600">
                    <img src={Deleteicon} alt="Delete" className="h-4 w-4" />
                    Delete
                  </button>
                  <img src={Moreicon} alt="More" className="w-8 h-8" />
                </div>
              </div>

              {/* Applicants */}
              <div className="flex items-center justify-between rounded bg-blue-100 px-4 py-3">
                <div>
                  <div className="text-sm font-semibold text-gray-800">Applicants</div>
                  <div className="text-lg font-bold text-gray-800">{selected.applicants}</div>
                </div>
                <button className="text-blue-600 text-sm font-medium hover:underline">View Applications →</button>
              </div>

              <hr />

              {/* Description */}
              <div>
                <div className="font-semibold text-gray-800">Description</div>
                <div className="mt-2 space-y-2 text-gray-700 text-[15px]">
                  {(selected.description && selected.description.length > 0) ? (
                    selected.description.map((p, i) => <p key={i}>{p}</p>)
                  ) : (
                    <>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga temporibus quibusdam
                        nobis odit aspernatur quo tempore sunt impedit!
                      </p>
                      <p>Nunc elit sit ac consequent posuere id nunc etiam.</p>
                      <p>Posuere id nunc vitae etiam.</p>
                    </>
                  )}
                </div>
              </div>

              <hr />

              {/* Location */}
              <div className="flex items-center gap-2">
                <div className="font-semibold text-gray-800">Location:</div>
                <img src={PakistanFlag} alt="Flag" className="w-5 h-5" />
                <div className="text-gray-700">Islamabad, Pakistan</div>
              </div>

              <hr />

              {/* Shoot details */}
              <div>
                <div className="mb-3 font-semibold text-blue-600">Shoot Details</div>
                <div className="grid gap-4 md:grid-cols-3 text-gray-700">
                  <div><span className="font-semibold">Crew Required:</span> {selected.crewRequired}</div>
                  <div><span className="font-semibold">Shoot Details:</span> {selected.shootDetails}</div>
                  <div><span className="font-semibold">Budget:</span> {selected.budgetFull}</div>
                </div>
              </div>

              <hr />

              {/* Requirements */}
              <div>
                <div className="mb-3 font-semibold text-blue-600">Requirements</div>
                <div className="grid gap-4 md:grid-cols-3 text-gray-700">
                  <div><span className="font-semibold">Age:</span> {selected.req.age}</div>
                  <div><span className="font-semibold">Height:</span> {selected.req.height}</div>
                  <div><span className="font-semibold">Gender:</span> {selected.req.gender}</div>
                </div>
              </div>

              <hr />
            </div>
          ) : (
            <div className="text-gray-500">Select your casting call to view details.</div>
          )}
        </section>
      </div>
    </div>
  );
};

export default MyCastingCall;
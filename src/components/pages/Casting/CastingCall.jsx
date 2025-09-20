// src/components/pages/Casting/CastingCall.jsx
import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import Moreicon from "../../../assets/Icons/Moreicon.png";
import Pakistanflag from "../../../assets/images/Pakistanflag.png";
import Closeicon from "../../../assets/Icons/Closeicon.png";  
// Data (duplicated rows to populate the left list like the mock)
const BASE = {
  title: "The Next Short Film",
  postedBy: "James Geidt",
  location: "Islamabad",
  type: "Short Film",
  shoot: "25 Days",
  budget: "$20K",
  publishedOn: "24th April, 2023",
  description: [
    "Lorem ipsum dolor sit amet consectetur. Augue mi ut velit vitae. Lectus felis faucibus dolor facilisis tellus. Nisl morbi sem lacus eget ut sit pharetra tincidunt.",
    "Nunc elit sit ac consequat posuere id nunc vitae etiam.",
    "Posuere id nunc vitae etiam.",
  ],
  crewRequired: 1,
  shootDetails: "Shoot will be of 30 days at the Centaurus Mall Islamabad.",
  budgetFull: "$20,000",
  req: { age: "23 Years", height: "5.9 Feet", gender: "Male Only" },
};
const CASTING_CALLS = Array.from({ length: 5 }, (_, i) => ({ id: i + 1, ...BASE }));

const Stat = ({ label, value }) => (
  <div>
    <div className="text-[12px] text-gray-500">{label}</div>
    <div className="font-semibold">{value}</div>
  </div>
);

export default function CastingCall() {
  const [selectedCall, setSelectedCall] = useState(CASTING_CALLS[0]);

  // NEW: modal open/close + simple form state
  const [isApplyOpen, setIsApplyOpen] = useState(false);
  const [form, setForm] = useState({ phone: "", email: "", note: "" });

  const onChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    // TODO: send form to API
    setIsApplyOpen(false);
  };

  return (
    <div className="flex flex-col md:flex-row gap-4 h-[calc(100vh-120px)]">
      {/* Left List */}
      <aside className="w-full md:w-1/3 p-4 bg-white rounded-lg shadow-md overflow-y-auto">
        <div className="space-y-3">
          {CASTING_CALLS.map((call) => {
            const active = selectedCall?.id === call.id;
            return (
              <div
                key={call.id}
                onClick={() => setSelectedCall(call)}
                className={`cursor-pointer rounded-lg border p-4 ${active ? "bg-blue-100/70 border-blue-200" : "border-transparent hover:bg-gray-50"
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
            {/* Title row */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div>
                <h1 className="text-2xl font-bold">{selectedCall.title}</h1>
                <p className="text-gray-600 mt-1">
                  Published on{" "}
                  <span className="text-blue-600">{selectedCall.publishedOn}</span>
                </p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => setIsApplyOpen(true)}
                  className="rounded-full bg-black text-white text-sm px-4 py-1.5"
                >
                  Apply Now
                </button>
                <button
                  className="h-9 w-9 flex items-center justify-center rounded-full hover:bg-gray-100"
                  aria-label="More options"
                >
                  <img src={Moreicon} alt="More" className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Posted by */}
            <div className="px-4 py-3 flex items-center gap-3 bg-gray-50 rounded">
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
                {(selectedCall.description || []).map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>

            {/* Location */}
            <div>
              <h3 className="text-gray-600 text-sm mb-2">Location</h3>
              <div className="flex items-center gap-2">
                <img src={Pakistanflag} alt="Pakistan" className="w-5 h-5" />
                <span>{selectedCall.location}, Pakistan</span>
              </div>
            </div>

            {/* Shoot Details */}
            <div>
              <h3 className="text-blue-600 text-sm font-medium mb-2">Shoot Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-gray-700 text-sm">
                <div>
                  <div className="text-gray-500">Crew Required</div>
                  <div>{selectedCall.crewRequired}</div>
                </div>
                <div>
                  <div className="text-gray-500">Shoot Details</div>
                  <div>{selectedCall.shootDetails}</div>
                </div>
                <div>
                  <div className="text-gray-500">Budget</div>
                  <div>{selectedCall.budgetFull}</div>
                </div>
              </div>
            </div>

            {/* Requirements */}
            <div>
              <h3 className="text-blue-600 text-sm font-medium mb-2">Requirements</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-gray-700 text-sm">
                <div>
                  <div className="text-gray-500">Age</div>
                  <div>{selectedCall.req.age}</div>
                </div>
                <div>
                  <div className="text-gray-500">Height</div>
                  <div>{selectedCall.req.height}</div>
                </div>
                <div>
                  <div className="text-gray-500">Gender</div>
                  <div>{selectedCall.req.gender}</div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <p className="text-gray-500">Select a casting call to view details.</p>
        )}
      </section>

      {/* ===== Apply to Call Modal ===== */}
      {isApplyOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
          onClick={() => setIsApplyOpen(false)}
        >
          <div
            className="bg-white rounded-xl w-full max-w-md mx-3 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-3">
              <h2 className="text-base font-semibold">Apply to Call</h2>
              <button
                onClick={() => setIsApplyOpen(false)}
                className="h-7 w-7 rounded-full hover:bg-gray-100 grid place-items-center"
                aria-label="Close"
              >
                <img src={Closeicon} alt="" />
              </button>
            </div>

            {/* Summary */}
            <div className="bg-gray-50 px-4 py-2">
              <div className="flex items-start gap-2">
                <FaUserCircle className="text-gray-400 text-2xl" />
                <div className="flex-1">
                  <div className="font-semibold text-sm">{selectedCall.title}</div>
                  <div className="text-xs text-gray-500">{selectedCall.postedBy}</div>

                  <div className="grid grid-cols-2 gap-3 mt-2 text-xs">
                    <div>
                      <div className="text-gray-500">Location</div>
                      <div className="font-medium">{selectedCall.location}</div>
                    </div>
                    <div>
                      <div className="text-gray-500">Type</div>
                      <div className="font-medium">{selectedCall.type}</div>
                    </div>
                    <div>
                      <div className="text-gray-500">Shoot</div>
                      <div className="font-medium">{selectedCall.shoot}</div>
                    </div>
                    <div>
                      <div className="text-gray-500">Budget</div>
                      <div className="font-medium">{selectedCall.budget}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <form className="p-4 space-y-3" onSubmit={onSubmit}>
              <div>
                <label className="text-xs text-gray-600">Contact Number</label>
                <input
                  name="phone"
                  type="text"
                  value={form.phone}
                  onChange={onChange}
                  placeholder="Enter Contact"
                  className="w-full mt-1 rounded-full bg-gray-100 px-3 py-1.5 text-sm outline-none focus:ring-2 focus:ring-blue-200"
                />
              </div>

              <div>
                <label className="text-xs text-gray-600">Contact Email</label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={onChange}
                  placeholder="Enter Email"
                  className="w-full mt-1 rounded-full bg-gray-100 px-3 py-1.5 text-sm outline-none focus:ring-2 focus:ring-blue-200"
                />
              </div>

              <div>
                <label className="text-xs text-gray-600">Note to Makers</label>
                <textarea
                  name="note"
                  rows={3}   // reduced rows
                  value={form.note}
                  onChange={onChange}
                  placeholder="Write your note"
                  className="w-full mt-1 rounded-lg bg-gray-100 px-3 py-2 text-sm outline-none resize-none focus:ring-2 focus:ring-blue-200"
                />
              </div>

              {/* Actions */}
              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setIsApplyOpen(false)}
                  className="px-4 py-1.5 rounded-full bg-red-100 text-red-600 text-sm font-medium"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-1.5 rounded-full bg-black text-white text-sm font-medium"
                >
                  Apply
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ===== End Modal ===== */}
    </div>
  );
}

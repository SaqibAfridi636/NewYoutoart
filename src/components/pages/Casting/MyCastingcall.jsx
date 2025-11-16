import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import Moreicon from "../../../assets/Icons/Moreicon.png";
import PakistanFlag from "../../../assets/images/Pakistanflag.png";
import Deleteicon from "../../../assets/Icons/Deleteicon.png";

const MY_CASTINGS = [
  {
    id: 1,
    title: "The Next Short Film",
    postedBy: "James Geidt",
    location: "Islamabad",
    type: "Short Film",
    shoot: "25 Days",
    budget: "$20K",
    publishedOn: "24th April, 2023",
    applicants: 520,
    description: [
      "Lorem ipsum dolor sit amet consectetur. Augue mi ut velit vitae.",
      "Nunc elit sit ac consequat posuere id nunc vitae etiam.",
      "Posuere id nunc vitae etiam.",
    ],
    crewRequired: 1,
    shootDetails: "Shoot will be of 30 days at the Centaurus Mall Islamabad.",
    budgetFull: "$20,000",
    req: { age: "23 Years", height: "5.9 Feet", gender: "Male Only" },
  },
  { id: 2, title: "The Next Short Film", postedBy: "James Geidt", location: "Islamabad", type: "Short Film", shoot: "25 Days", budget: "$20K", publishedOn: "24th April, 2023", applicants: 520, description: [], crewRequired: 1, shootDetails: "", budgetFull: "$20,000", req: { age: "23 Years", height: "5.9 Feet", gender: "Male Only" } },
  { id: 3, title: "The Next Short Film", postedBy: "James Geidt", location: "Islamabad", type: "Short Film", shoot: "25 Days", budget: "$20K", publishedOn: "24th April, 2023", applicants: 520, description: [], crewRequired: 1, shootDetails: "", budgetFull: "$20,000", req: { age: "23 Years", height: "5.9 Feet", gender: "Male Only" } },
  { id: 4, title: "The Next Short Film", postedBy: "James Geidt", location: "Islamabad", type: "Short Film", shoot: "25 Days", budget: "$20K", publishedOn: "24th April, 2023", applicants: 520, description: [], crewRequired: 1, shootDetails: "", budgetFull: "$20,000", req: { age: "23 Years", height: "5.9 Feet", gender: "Male Only" } },
];

const Stat = ({ label, value }) => (
  <div>
    <div className="text-[13px] text-gray-500">{label}</div>
    <div className="font-semibold">{value}</div>
  </div>
);

const MyCastingCall = () => {
  const [castings, setCastings] = useState(MY_CASTINGS);
  const [selected, setSelected] = useState(MY_CASTINGS[0]);

  const [createOpen, setCreateOpen] = useState(false);
  const [form, setForm] = useState({ title: "", description: "", crew: "", city: "", email: "", phone: "", roleTitle: "" });

  const [deleteOpen, setDeleteOpen] = useState(false);

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  const onSubmit = (e) => { e.preventDefault(); setCreateOpen(false); };

  const handleConfirmDelete = () => {
    setCastings((prev) => {
      const next = prev.filter((c) => c.id !== selected.id);
      setSelected(next[0] ?? null);
      return next;
    });
    setDeleteOpen(false);
  };

  return (
    <div className="flex flex-col md:flex-row gap-4">
      <div className="mx-auto flex flex-col md:flex-row w-full max-w-[1400px] gap-3 sm:px-3 pb-6">
        {/* Left column */}
        <aside className="w-full md:w-1/3 rounded-lg bg-white shadow-md px-3 py-4
                          h-auto md:h-[calc(100vh-220px)] overflow-visible md:overflow-y-auto">
          <div className="flex justify-center mb-4">
            <button
              className="h-10 w-[230px] rounded-full bg-black text-white text-sm font-medium"
              onClick={() => setCreateOpen(true)}
            >
              + Create Casting Call
            </button>
          </div>

          <ul className="space-y-3">
            {castings.map((call) => {
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
                        <div className="text-[13px] text-gray-500 mt-1">Published, 2 Days Ago</div>
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
        <section className="flex-1 rounded-lg bg-white shadow-md px-3 py-4
                            h-auto md:h-[calc(100vh-220px)] overflow-visible md:overflow-y-auto">
          {selected ? (
            <div className="space-y-6">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-bold">{selected.title}</h2>
                  <div className="mt-1 text-sm text-gray-600">
                    Published on <span className="text-blue-600">{selected.publishedOn}</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    className="inline-flex items-center gap-2 rounded-full border border-red-300 bg-red-50 px-4 py-2 text-sm font-medium text-red-600"
                    onClick={() => setDeleteOpen(true)}
                  >
                    <img src={Deleteicon} alt="Delete" className="h-4 w-4" />
                    Delete
                  </button>
                  <img src={Moreicon} alt="More" className="w-8 h-8" />
                </div>
              </div>

              <div className="flex items-center justify-between rounded bg-blue-100 px-4 py-3">
                <div>
                  <div className="text-sm font-semibold text-gray-800">Applicants</div>
                  <div className="text-lg font-bold text-gray-800">{selected.applicants}</div>
                </div>
                <button className="text-blue-600 text-sm font-medium hover:underline">
                  View Applications →
                </button>
              </div>

              <hr />

              <div>
                <div className="font-semibold text-gray-800">Description</div>
                <div className="mt-2 space-y-2 text-gray-700 text-[15px]">
                  {selected.description && selected.description.length > 0 ? (
                    selected.description.map((p, i) => <p key={i}>{p}</p>)
                  ) : (
                    <>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga temporibus quibusdam nobis odit aspernatur quo tempore sunt impedit!</p>
                      <p>Nunc elit sit ac consequent posuere id nunc etiam.</p>
                      <p>Posuere id nunc vitae etiam.</p>
                    </>
                  )}
                </div>
              </div>

              <hr />

              <div className="flex items-center gap-2">
                <div className="font-semibold text-gray-800">Location:</div>
                <img src={PakistanFlag} alt="Flag" className="w-5 h-5" />
                <div className="text-gray-700">Islamabad, Pakistan</div>
              </div>

              <hr />

              <div>
                <div className="mb-3 font-semibold text-blue-600">Shoot Details</div>
                <div className="grid gap-4 md:grid-cols-3 text-gray-700">
                  <div><span className="font-semibold">Crew Required:</span> {selected.crewRequired}</div>
                  <div><span className="font-semibold">Shoot Details:</span> {selected.shootDetails}</div>
                  <div><span className="font-semibold">Budget:</span> {selected.budgetFull}</div>
                </div>
              </div>

              <hr />

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

      {/* Create Modal */}
      {createOpen && (
        <div className="fixed inset-0 z-50 flex items-start md:items-center justify-center bg-black/50 p-3"
             onClick={() => setCreateOpen(false)}>
          <div className="bg-white rounded-2xl w-full max-w-md md:max-w-lg overflow-hidden flex flex-col max-h-[95vh] min-h-0"
               onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between px-4 py-2 flex-shrink-0">
              <h3 className="text-base font-semibold">Create Casting Call</h3>
              <button onClick={() => setCreateOpen(false)} className="h-8 w-8 rounded-full hover:bg-gray-100 grid place-items-center text-xl" aria-label="Close">×</button>
            </div>

            <form onSubmit={onSubmit} className="px-4 pb-4 space-y-3 overflow-y-auto">
              <div>
                <label className="text-sm font-medium">Project Title <span className="text-red-500">*</span></label>
                <input name="title" value={form.title} onChange={onChange} placeholder="Enter Project Title"
                       className="mt-1 w-full rounded-full bg-gray-100 px-4 py-2 text-sm outline-none" required/>
              </div>

              <div>
                <label className="text-sm font-medium">Short Description <span className="text-red-500">*</span></label>
                <textarea name="description" value={form.description} onChange={onChange} placeholder="Enter short description" rows={3}
                          className="mt-1 w-full rounded-xl bg-gray-100 px-4 py-2 text-sm outline-none resize-none" required/>
              </div>

              <div>
                <label className="text-sm font-medium">Crew Required <span className="text-red-500">*</span></label>
                <select name="crew" value={form.crew} onChange={onChange}
                        className="mt-1 w-full appearance-none rounded-full bg-gray-100 px-4 py-2 text-sm outline-none" required>
                  <option value="" disabled>Crew Type</option>
                  <option value="1">1</option><option value="2">2</option><option value="3+">3+</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-medium">City Name <span className="text-red-500">*</span></label>
                <input name="city" value={form.city} onChange={onChange} placeholder="Enter City Name"
                       className="mt-1 w-full rounded-full bg-gray-100 px-4 py-2 text-sm outline-none" required/>
              </div>

              <div>
                <label className="text-sm font-medium">Contact Email</label>
                <input type="email" name="email" value={form.email} onChange={onChange} placeholder="Enter Contact Email"
                       className="mt-1 w-full rounded-full bg-gray-100 px-4 py-2 text-sm outline-none"/>
              </div>

              <div>
                <label className="text-sm font-medium">Contact Number</label>
                <input name="phone" value={form.phone} onChange={onChange} placeholder="Enter Contact Number"
                       className="mt-1 w-full rounded-full bg-gray-100 px-4 py-2 text-sm outline-none"/>
              </div>

              <div>
                <label className="text-sm font-medium">Role Title</label>
                <input name="roleTitle" value={form.roleTitle} onChange={onChange} placeholder="Role Title"
                       className="mt-1 w-full rounded-full bg-gray-100 px-4 py-2 text-sm outline-none"/>
              </div>

              <div className="flex justify-end gap-3 pt-2">
                <button type="button" onClick={() => setCreateOpen(false)}
                        className="px-6 py-2 rounded-full bg-red-100 text-red-600 text-sm font-medium">Cancel</button>
                <button type="submit" className="px-6 py-2 rounded-full bg-black text-white text-sm font-medium">Submit</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Delete Modal */}
      {deleteOpen && selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-3"
             onClick={() => setDeleteOpen(false)}>
          <div className="bg-white rounded-2xl w-full max-w-md md:max-w-lg overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between px-4 py-3">
              <h3 className="text-base font-semibold">Delete Casting Call</h3>
              <button onClick={() => setDeleteOpen(false)} className="h-8 w-8 rounded-full hover:bg-gray-100 grid place-items-center text-xl" aria-label="Close">×</button>
            </div>

            <p className="px-4 text-sm text-gray-700">Are you sure, you want to delete this casting call?</p>

            <div className="mt-3 bg-gray-50 px-4 py-3">
              <div className="flex items-start gap-3">
                <FaUserCircle className="text-gray-400 text-3xl" />
                <div className="flex-1">
                  <div className="font-semibold">{selected.title}</div>
                  <div className="text-sm text-gray-500">{selected.postedBy}</div>

                  <div className="grid grid-cols-2 gap-4 mt-3 text-sm">
                    <div><div className="text-gray-500">Location</div><div className="font-semibold">{selected.location}</div></div>
                    <div><div className="text-gray-500">Type</div><div className="font-semibold">{selected.type}</div></div>
                    <div><div className="text-gray-500">Shoot</div><div className="font-semibold">{selected.shoot}</div></div>
                    <div><div className="text-gray-500">Budget</div><div className="font-semibold">{selected.budget}</div></div>
                  </div>
                </div>
              </div>
            </div>

            <p className="px-4 py-3 text-xs text-gray-600">
              Deleting a casting call is an irreversible action and will remove all associated information and submissions.
            </p>

            <div className="px-4 pb-4 flex justify-end gap-3">
              <button onClick={() => setDeleteOpen(false)} className="px-6 py-2 rounded-full bg-blue-100 text-blue-600 text-sm font-medium">Keep</button>
              <button onClick={handleConfirmDelete} className="px-6 py-2 rounded-full bg-red-100 text-red-600 text-sm font-medium">Delete</button>
            </div>
          </div>
        </div>
      )}

      
    </div>
  );
};

export default MyCastingCall;

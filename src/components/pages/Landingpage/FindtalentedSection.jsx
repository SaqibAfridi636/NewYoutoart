import React from "react";
import Jeremiahgreenimage from '../../../assets/images/Jeremiahgreenimage.png' // replace with your actual image

const FindTalentSection = () => {
  // Fake data array (you can replace with dynamic data later)
  const talents = [
    { id: 1, name: "Jeremiah Green", role: "Actor | Model | Director", img: Jeremiahgreenimage },
    { id: 2, name: "Jeremiah Green", role: "Actor | Model | Director", img: Jeremiahgreenimage },
    { id: 3, name: "Jeremiah Green", role: "Actor | Model | Director", img: Jeremiahgreenimage },
    { id: 4, name: "Jeremiah Green", role: "Actor | Model | Director", img: Jeremiahgreenimage },
    { id: 5, name: "Jeremiah Green", role: "Actor | Model | Director", img: Jeremiahgreenimage },
  ];

  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-24">
      {/* Heading */}
      <div className="text-center md:text-left mb-12">
        <h2 className="text-4xl font-bold text-gray-900">Find The Right Talent</h2>
        <p className="text-gray-600 mt-2">Find the right Talent for your new project</p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {talents.map((talent) => (
          <div
            key={talent.id}
            className="bg-gray-50 rounded-lg shadow-md p-6 flex flex-col items-center text-center"
          >
            <img
              src={talent.img}
              alt={talent.name}
              className="w-20 h-20 rounded-full object-cover mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-900">{talent.name}</h3>
            <p className="text-sm text-gray-500 mt-1">{talent.role}</p>
            <div className="mt-4 flex flex-col gap-2 w-full">
              <button className="bg-black text-white rounded-full py-2 px-4 hover:bg-gray-800 transition">
                Connect
              </button>
              <button className="border border-gray-300 rounded-full py-2 px-4 hover:bg-gray-100 transition">
                ✉️
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Discover More Button */}
      <div className="mt-12 lg:text-start text-center ">
        <button className="px-6 py-3 border border-black rounded-full hover:bg-black hover:text-white transition">
          Discover More
        </button>
      </div>
    </section>
  );
};

export default FindTalentSection;

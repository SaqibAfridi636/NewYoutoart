import React from "react";
import Jeremiahgreenimage from "../../../assets/images/Jeremiahgreenimage.png"; 
import Messageicon from "../../../assets/Icons/Messageicon.png";

const FindTalentSection = () => {
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
      <div className="text-start mb-12">
        <h2 className="text-4xl  text-gray-900">Find The Right Talent</h2>
        <p className="text-gray-600 mt-2">Find the right Talent for your new project</p>
      </div>


      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 auto-rows-fr">
        {talents.map((talent) => (
          <div
            key={talent.id}
            className="bg-[#F5F9FF] rounded-xl p-6 flex flex-col justify-between items-center text-center h-full"
          >
            <img
              src={talent.img}
              alt={talent.name}
              className="w-20 h-20 rounded-full object-cover mb-4"
            />
            <h3 className="text-base font-semibold text-gray-900">{talent.name}</h3>
            <p className="text-sm text-gray-500 mt-1">{talent.role}</p>

            {/* Buttons: stack on small screens, inline on md+ */}
            <div className="mt-6 w-full">
              <div className="hidden md:flex items-center justify-center gap-3">
                <button className="flex-1 bg-black text-white rounded-full py-2 px-4 hover:bg-gray-800 transition">
                  Connect
                </button>
                <button className="h-10 w-10 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100 transition">
                  <img src={Messageicon} alt="Message" className="h-5 w-5" />
                </button>
              </div>
              <div className="flex md:hidden flex-col gap-3">
                <button className="w-full bg-black text-white rounded-full py-2 px-4 hover:bg-gray-800 transition">
                  Connect
                </button>
                <button className="w-full h-10 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100 transition">
                  <img src={Messageicon} alt="Message" className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Discover More */}
      <div className="mt-12 flex justify-center lg:justify-start">
        <button className="px-6 py-2 border border-black rounded-full hover:bg-black hover:text-white transition">
          Discover More
        </button>
      </div>
    </section>
  );
};

export default FindTalentSection;

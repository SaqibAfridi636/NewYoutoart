import React from "react";
import Messageicon from '../../../assets/Icons/Messageicon.png'
import Jeremiahpic from '../../../assets/images/Jeremiahpic.png'

const users = Array(8).fill({
    name: "Jeremiah Green",
    role: "Actor | Model | Director",
    image: "/assets/images/user1.png",
});

const productionHouses = Array(4).fill({
    name: "FilmFare",
    logo: "/assets/images/filmfare.png",
});

const TalentContentSection = () => {
    const renderCard = (item, isUser = true) => (
        <div className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center gap-3 w-48 sm:w-40 xs:w-36 flex-shrink-0">
            <img
                src={Jeremiahpic}
                alt={item.name}
                className={`w-20 h-20 sm:w-16 sm:h-16 xs:w-14 xs:h-14 ${isUser ? "rounded-full" : "rounded-lg"} object-cover`}
            />
            <div className="text-center">
                <h3 className="text-sm font-semibold text-gray-800 truncate">{item.name}</h3>
                {isUser ? (
                    <p className="text-xs text-gray-500 truncate">{item.role}</p>
                ) : (
                    <p className="text-xs text-gray-500">Production House</p>
                )}
            </div>
            <div className="flex gap-2 mt-2 justify-center items-center">
                <button className="bg-black text-white text-xs px-4 py-1 rounded-full shadow">
                    Connect
                </button>
                <button className="text-gray-600 border border-gray-300 p-1.5 rounded-full">
                    <img src={Messageicon} alt="" className="w-4 h-4" />
                </button>
            </div>
        </div>
    );

    return (
        <div className="flex flex-col   h-full overflow-y-auto hide-scrollbar">
            {["People in the Drama Industry", "Popular Production Houses", "Suggested Profiles"].map(
                (section, idx) => (
                    <div key={idx} className="bg-gray-50 p-4 rounded-xl">
                        <h2 className="text-base font-semibold mb-4 text-gray-700">{section}</h2>

                        {/* Horizontal scroll */}
                        <div className="flex gap-6 overflow-x-auto pb-3 hide-scrollbar">
                            {(idx === 0 || idx === 2 ? users : productionHouses).map((item) =>
                                renderCard(item, idx !== 1)
                            )}
                        </div>
                    </div>
                )
            )}

            {/* Hide scrollbar CSS */}
            <style>
                {`
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .hide-scrollbar {
            -ms-overflow-style: none;  /* IE and Edge */
            scrollbar-width: none;  /* Firefox */
          }
        `}
            </style>
        </div>
    );
};

export default TalentContentSection;

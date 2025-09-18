// src/components/pages/Casting/CastingList.jsx
import { FaUserCircle } from "react-icons/fa";
import Moreicon from "../../../assets/Icons/Moreicon.png";

const CastingList = ({ activeTab, data, selectedCall, setSelectedCall }) => {
    return (
        <div className="w-full md:w-1/3 p-4 bg-white rounded-lg shadow-md overflow-y-auto max-h-[40vh] md:max-h-none md:h-auto">
        

            {data.map((call) => (
                <div
                    key={call.id}
                    className={`p-4 border-l-4 rounded-lg cursor-pointer transition-colors duration-200 mb-3 ${selectedCall?.id === call.id
                        ? "border-blue-500 bg-blue-50"
                        : "border-transparent hover:bg-gray-100"
                        }`}
                    onClick={() => setSelectedCall(call)}
                >
                    <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center space-x-3">
                            <FaUserCircle className="text-gray-400 text-3xl" />
                            <div>
                                <h3 className="font-semibold text-gray-800">{call.title}</h3>
                                <p className="text-sm text-gray-500">{call.postedBy}</p>
                            </div>
                        </div>
                        <button className="text-blue-600 text-sm font-semibold ">
                            <img src={Moreicon} alt="" />
                        </button>
                    </div>
                    <div className="text-sm text-gray-600 space-y-4">
                        {/* Row 1: Location + Type */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <div className="sm:w-1/2">
                                <span className="font-medium block">Location</span>
                                <span className="font-bold block">{call.location}</span>
                            </div>
                            <div className="sm:w-1/2">
                                <span className="font-medium block">Type</span>
                                <span className="font-bold block">{call.type}</span>
                            </div>
                        </div>

                        {/* Row 2: Shoot + Budget */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <div className="sm:w-1/2">
                                <span className="font-medium block">Shoot</span>
                                <span className="font-bold block">{call.shoot}</span>
                            </div>
                            <div className="sm:w-1/2">
                                <span className="font-medium block">Budget</span>
                                <span className="font-bold block">{call.budget}</span>
                            </div>
                        </div>
                    </div>



                </div>
            ))}
        </div>
    );
};

export default CastingList;

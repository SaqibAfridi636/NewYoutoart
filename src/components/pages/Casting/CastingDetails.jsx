// src/components/pages/Casting/CastingDetails.jsx
import { FaUserCircle } from "react-icons/fa";
import Moreicon from "../../../assets/Icons/Moreicon.png";
import Pakistanflag from "../../../assets/images/Pakistanflag.png";
const CastingDetails = ({ call }) => {
  if (!call) {
    return (
      <div className="flex-1 p-8 text-center text-gray-500">
        <p>Select a casting call to view details.</p>
      </div>
    );
  }

  return (
    <div className="flex-1 bg-white rounded-lg shadow-md flex flex-col overflow-y-auto scrollbar-hide p-4 sm:p-6 space-y-4 text-sm sm:text-base">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">{call.title}</h1>
          <p className="text-sm text-gray-500">
            Published on{" "}
            <span className="text-blue-600">{call.publishedOn || "N/A"}</span>
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <button className="px-6 py-2 text-sm font-semibold text-white bg-black rounded-full hover:bg-gray-800 transition-colors">
            Apply Now
          </button>
          <img src={Moreicon} alt="More options" className="w-6 h-6 cursor-pointer" />
        </div>
      </div>

      {/* Posted By */}
      <div className="flex items-center space-x-3 text-sm text-gray-600">
        {call.postedByAvatar ? (
          <img
            src={call.postedByAvatar}
            alt={call.postedBy}
            className="w-10 h-10 rounded-full object-cover"
          />
        ) : (
          <FaUserCircle className="w-10 h-10 text-gray-400" />
        )}
        <div>
          <p className="font-semibold text-gray-400">Posted By</p>
          <p>{call.postedBy || "Unknown"}</p>
        </div>
      </div>

      {/* Description */}
      <div>
        <h4 className="font-semibold text-gray-400 mb-2">Description</h4>
        <p className="text-gray-600">{call.description || "No description provided."}</p>
      </div>

      {/* Location */}
      <div>
        <h4 className="font-semibold text-gray-400 mb-2">Location</h4>
        <p className="text-gray-600">
          <img src={Pakistanflag} alt="Pakistan" className="inline w-4 h-4 mr-1" /> 
          {call.location ? `${call.location}, Pakistan` : "Not specified"}
        </p>
      </div>

      {/* Shoot Info Section */}
      <div className="bg-gray-50 p-6 rounded-lg">
        <h4 className="font-semibold text-blue-400 mb-4">Shoot Details</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
          <div>
            <h4 className="font-semibold text-gray-400 mb-2">Crew Required</h4>
            <p>{call.details?.crewRequired || "N/A"}</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-400 mb-2">Shoot Details</h4>
            <p>{call.details?.shootDetails || "Not specified"}</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-400 mb-2">Budget</h4>
            <p className="text-lg font-bold text-gray-900">{call.budget || "—"}</p>
          </div>
        </div>
      </div>

      {/* Requirements */}
      <div className="bg-gray-50 p-6 rounded-lg">
        <h4 className="font-semibold text-blue-400 mb-2">Requirements</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
          <div>
            <p className="font-medium">Age</p>
            <p>{call.requirements?.age || "Any"}</p>
          </div>
          <div>
            <p className="font-medium">Height</p>
            <p>{call.requirements?.height || "Any"}</p>
          </div>
          <div>
            <p className="font-medium">Gender</p>
            <p>{call.requirements?.gender || "Any"}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CastingDetails;

import { FaUserCircle } from "react-icons/fa";

const CastingCard = ({ call, selectedCall, onSelect }) => (
  <div
    className={`p-4 border-l-4 rounded-lg cursor-pointer transition-colors duration-200 ${
      selectedCall?.id === call.id
        ? "border-blue-500 bg-blue-50"
        : "border-transparent hover:bg-gray-100"
    }`}
    onClick={() => onSelect(call)}
  >
    <div className="flex items-start justify-between mb-2">
      <div className="flex items-center space-x-3">
        <FaUserCircle className="text-gray-400 text-4xl" />
        <div>
          <h3 className="font-semibold text-gray-800">{call.title}</h3>
          <p className="text-sm text-gray-500">{call.postedBy}</p>
        </div>
      </div>
      <button className="text-gray-400 hover:text-gray-600">...</button>
    </div>
    <div className="text-sm space-y-1 text-gray-600">
      <div className="flex justify-between">
        <span className="font-medium">Location</span>
        <span>{call.location}</span>
      </div>
      <div className="flex justify-between">
        <span className="font-medium">Type</span>
        <span>{call.type}</span>
      </div>
      <div className="flex justify-between">
        <span className="font-medium">Shoot</span>
        <span>{call.shoot}</span>
      </div>
      <div className="flex justify-between">
        <span className="font-medium">Budget</span>
        <span>{call.budget}</span>
      </div>
    </div>
  </div>
);

export default CastingCard;

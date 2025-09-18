import React from "react";
import { BsThreeDots } from "react-icons/bs";
import UserLogo from "../../../assets/Logos/UserLogo.png";
import Postpicture from "../../../assets/images/Postpicture.png";
import Likeicon from "../../../assets/Icons/Likeicon.png";
import Commenticon from "../../../assets/Icons/Commenticon.png";
import Shareicon from "../../../assets/Icons/Shareicon.png";

const ActivityTab = () => {
  return (
    <div className="bg-white p-4 shadow">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img src={UserLogo} alt="profile" className="w-10 h-10 rounded-full" />
          <div>
            <h4 className="font-semibold">Muhammad Wajahat</h4>
            <p className="text-xs text-gray-500">2 Days Ago</p>
          </div>
        </div>
        <BsThreeDots className="text-gray-500 cursor-pointer" />
      </div>

      <p className="mt-3 text-gray-700 text-sm md:text-base">
        Hi Guys! Something interesting is on its way! 3 Days to Go.{" "}
        <span className="text-blue-500">#Reveal #Audition #FawadKhan</span>
      </p>

      <img
        src={Postpicture}
        alt="post"
        className="w-full mt-3 rounded-lg max-h-80 object-cover"
      />

      <div className="flex items-center gap-3 mt-4 text-gray-600 text-sm">
        <div className="flex items-center space-x-1">
          <img src={Likeicon} alt="like" />
          <span>141.2K</span>
        </div>
        <div className="flex items-center space-x-1">
          <img src={Commenticon} alt="comment" />
          <span>14K</span>
        </div>
        <div className="flex items-center space-x-1">
          <img src={Shareicon} alt="share" />
          <span>14K</span>
        </div>
      </div>
    </div>
  );
};

export default ActivityTab;

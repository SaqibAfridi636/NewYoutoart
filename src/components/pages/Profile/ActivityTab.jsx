import React from "react";
import UserLogo from "../../../assets/Logos/UserLogo.png";
import Postpicture from "../../../assets/images/Postpicture.png";
import Likeicon from "../../../assets/Icons/Likeicon.png";
import Commenticon from "../../../assets/Icons/Commenticon.png";
import Shareicon from "../../../assets/Icons/Shareicon.png";
import Moreicon from "../../../assets/Icons/Moreicon.png";

const ActivityTab = () => {
  const [isLikesModalOpen, setIsLikesModalOpen] = React.useState(false);
  const [isCommentsModalOpen, setIsCommentsModalOpen] = React.useState(false);

  // Dummy Data
  const likes = [
    { id: 1, name: "Ali Khan", avatar: UserLogo },
    { id: 2, name: "Sara Ahmed", avatar: UserLogo },
    { id: 3, name: "Wajahat Ali", avatar: UserLogo },
  ];

  const comments = [
    { id: 1, name: "Ali Khan", text: "Wow! Can't wait 🔥" },
    { id: 2, name: "Sara Ahmed", text: "This is amazing 👏" },
    { id: 3, name: "Wajahat Ali", text: "Looking forward!" },
  ];

  return (
    <div className="bg-white p-4 shadow">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img src={UserLogo} alt="profile" className="w-10 h-10 rounded-full" />
          <div>
            <h4 className="font-semibold">Muhammad Wajahat</h4>
            <p className="text-xs text-gray-500">2 Days Ago</p>
          </div>
        </div>
        <img src={Moreicon} alt="More" className="cursor-pointer" />
      </div>

      {/* Post Text */}
      <p className="mt-3 text-gray-700 text-sm md:text-base">
        Hi Guys! Something interesting is on its way! 3 Days to Go.{" "}
        <span className="text-blue-500">#Reveal #Audition #FawadKhan</span>
      </p>

  {/* Post Image */}
  <img src={Postpicture} alt="Post" className="rounded-lg mb-3 w-full object-cover" style={{ aspectRatio: '1 / 1', objectFit: 'cover' }} />

      {/* Actions */}
      <div className="flex justify-start gap-6 text-gray-600 text-sm mt-[5px] font-medium">
        <span
          className="flex items-center gap-1 cursor-pointer"
          onClick={() => setIsLikesModalOpen(true)}
        >
          <img src={Likeicon} alt="Like" className="w-4 h-4" /> 141.2K
        </span>
        <span
          className="flex items-center gap-1 cursor-pointer"
          onClick={() => setIsCommentsModalOpen(true)}
        >
          <img src={Commenticon} alt="Comment" className="w-4 h-4" /> 14K
        </span>
        <span className="flex items-center gap-1 cursor-pointer">
          <img src={Shareicon} alt="Share" className="w-4 h-4" /> 2K
        </span>
      </div>

      {/* Likes Modal */}
      {isLikesModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white w-96 rounded-lg p-4 shadow-lg">
            <h3 className="font-bold mb-4 text-lg">Likes</h3>
            <ul className="space-y-3 max-h-64 overflow-y-auto">
              {likes.map((like) => (
                <li key={like.id} className="flex items-center gap-3">
                  <img
                    src={like.avatar}
                    alt={like.name}
                    className="w-8 h-8 rounded-full"
                  />
                  <span>{like.name}</span>
                </li>
              ))}
            </ul>
            <button
              className="mt-4 w-full bg-blue-500 text-white py-2 rounded"
              onClick={() => setIsLikesModalOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Comments Modal */}
      {isCommentsModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white w-[500px] rounded-lg p-4 shadow-lg">
            <h3 className="font-bold mb-4 text-lg">Comments</h3>
            <ul className="space-y-3 max-h-64 overflow-y-auto">
              {comments.map((comment) => (
                <li key={comment.id} className="border-b pb-2">
                  <p className="text-sm font-semibold">{comment.name}</p>
                  <p className="text-sm text-gray-600">{comment.text}</p>
                </li>
              ))}
            </ul>
            <div className="flex gap-2 mt-4">
              <input
                type="text"
                placeholder="Write a comment..."
                className="flex-1 border rounded px-3 py-2 text-sm"
              />
              <button className="bg-blue-500 text-white px-4 py-2 rounded">
                Send
              </button>
            </div>
            <button
              className="mt-4 w-full bg-gray-300 text-black py-2 rounded"
              onClick={() => setIsCommentsModalOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ActivityTab;

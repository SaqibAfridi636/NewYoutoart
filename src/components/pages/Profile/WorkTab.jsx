// src/pages/tabs/WorkTab.jsx
import React from "react";
import Editicon from "../../../assets/Icons/Editicon.png";
import Pluseicon from "../../../assets/Icons/Pluseicon.png";
import Postpicture from "../../../assets/images/Postpicture.png";

const videos = [
  {
    id: 1,
    thumbnail: "https://img.youtube.com/vi/JXCRWxBA0fE/0.jpg",
    title: "SPECIAL REPORT: What's the Trouble in Gilgit–Baltistan?",
    link: "https://youtu.be/JXCRWxBA0fE",
  },
  {
    id: 2,
    thumbnail: "https://img.youtube.com/vi/JXCRWxBA0fE/0.jpg",
    title: "SPECIAL REPORT: What's the Trouble in Gilgit–Baltistan?",
    link: "https://youtu.be/JXCRWxBA0fE",
  },
  {
    id: 3,
    thumbnail: "https://img.youtube.com/vi/JXCRWxBA0fE/0.jpg",
    title: "SPECIAL REPORT: What's the Trouble in Gilgit–Baltistan?",
    link: "https://youtu.be/JXCRWxBA0fE",
  },
  {
    id: 4,
    thumbnail: "https://img.youtube.com/vi/JXCRWxBA0fE/0.jpg",
    title: "Extra Video Example",
    link: "https://youtu.be/JXCRWxBA0fE",
  },
];

const photos = [
  { id: 1, url: Postpicture },
  { id: 2, url: Postpicture },
  { id: 3, url: Postpicture },
  { id: 4, url: Postpicture },
  { id: 5, url: Postpicture },
  { id: 5, url: Postpicture },
];

const WorkTab = () => {
  const photosToShow = photos.slice(0, videos.length);

  return (
    <div className="bg-white p-5 shadow rounded-md">
      {/* Videos Section */}
      <div className="mb-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-3">
          <div>
            <h3 className="font-semibold text-lg">Videos ({videos.length})</h3>
            <p className="text-xs text-gray-500">Last Updated, Just Now</p>
          </div>
          <div className="flex items-center gap-2">
            <button className="p-1 rounded-full hover:bg-gray-100">
              <img src={Editicon} alt="edit" className="w-4 h-4 " />
            </button>
            <button className="p-1 rounded-full hover:bg-gray-100">
              <img src={Pluseicon} alt="add" className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Horizontal Scroll Videos */}
        <div className="flex gap-4 overflow-x-auto pb-2 w-full whitespace-nowrap">
          {videos.map((video) => (
            <div
              key={video.id}
              className="w-[250px] flex-shrink-0 border rounded-lg overflow-hidden shadow-sm bg-white"
            >
              <div className="relative">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20">
                  <span className="bg-white text-black rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold">
                    ▶
                  </span>
                </div>
              </div>
              <div className="p-3">
                <p className="text-sm font-medium leading-snug mb-1">
                  {video.title}
                </p>
                <a
                  href={video.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 text-sm hover:underline truncate block"
                >
                  {video.link}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Photos Section */}
      <div>
        {/* Header */}
        <div className="flex justify-between items-center mb-3">
          <div>
            <h3 className="font-semibold text-lg">
              Photos ({photosToShow.length})
            </h3>
            <p className="text-xs text-gray-500">Last Updated, Just Now</p>
          </div>
          <div className="flex items-center gap-2">
            <button className="p-1 rounded-full hover:bg-gray-100">
              <img src={Editicon} alt="edit" className="w-4 h-4" />
            </button>
            <button className="p-1 rounded-full hover:bg-gray-100">
              <img src={Pluseicon} alt="add" className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Horizontal Scroll Photos */}
        <div className="flex gap-4 overflow-x-auto pb-2 w-full whitespace-nowrap">
          {photosToShow.map((photo) => (
            <div
              key={photo.id}
              className="w-[250px] flex-shrink-0 border rounded-lg overflow-hidden shadow-sm bg-white"
            >
              <img
                src={photo.url}
                alt={`Photo ${photo.id}`}
                className="w-full h-48 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkTab;

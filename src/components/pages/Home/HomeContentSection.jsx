import React, { useState } from "react";
import Postpicture from "../../../assets/images/Postpicture.png";
import UserLogo from "../../../assets/Logos/UserLogo.png";
import Photologo from "../../../assets/Logos/Photologo.png";
import Textlogo from "../../../assets/Logos/Textlogo.png";
import Likeicon from "../../../assets/Icons/Likeicon.png";
import Commenticon from "../../../assets/Icons/Commenticon.png";
import Shareicon from "../../../assets/Icons/Shareicon.png";
import Moreicon from "../../../assets/Icons/Moreicon.png";
import Tagicon from "../../../assets/Icons/Tagicon.png";
import Cancelicon from "../../../assets/Icons/Cancelicon.png";
import Saqib from "../../../assets/images/Saqib.png";

const ContentSection = () => {
    const [isModalOpen, setIsModalOpen] = useState(false); // Create Post modal
    const [isTagModalOpen, setIsTagModalOpen] = useState(false); // Tag People modal
    const [isPhotoModalOpen, setIsPhotoModalOpen] = useState(false); // Photo modal
    const [taggedUsers, setTaggedUsers] = useState([]); // track selected users
    const [isLikesModalOpen, setIsLikesModalOpen] = useState(false);
    const [isCommentModalOpen, setIsCommentModalOpen] = useState(false);
    // Per-post like state (example post)
    const [liked, setLiked] = useState(false);
    const [likesCount, setLikesCount] = useState(141400); // 141.4K

    const formatCount = (n) => {
        if (n >= 1000000) return (n / 1000000).toFixed(1) + "M";
        if (n >= 1000) return (n / 1000).toFixed(n % 1000 === 0 ? 0 : 1) + "K";
        return n.toString();
    };

    const handleLikeClick = () => {
        // toggle like only (do not open likes modal)
        setLiked((prev) => {
            const next = !prev;
            setLikesCount((c) => (next ? c + 1 : c - 1));
            return next;
        });
    };

    const openLikesModal = () => {
        setIsLikesModalOpen(true);
    };



    
    // Example users list
    const users = [
        {
            id: 1,
            name: "Muhammad Ali Nizami",
            desc: "Actor | Director | Producer",
            img: UserLogo,
        },
        {
            id: 2,
            name: "Sara Khan",
            desc: "Model | Influencer",
            img: UserLogo,
        },
        {
            id: 3,
            name: "Ayesha Ahmed",
            desc: "Content Creator",
            img: UserLogo,
        },
    ];

    // Toggle user select
    const handleCheckboxChange = (id) => {
        setTaggedUsers((prev) =>
            prev.includes(id) ? prev.filter((uid) => uid !== id) : [...prev, id]
        );
    };

    return (


        <>
            {/* Feed Content */}
            <div className="w-full">
                {/* Create post box */}
                <div className="bg-white p-4 rounded-lg shadow mb-[5px]">
                    <div
                        className="flex items-center gap-3 mb-4 cursor-pointer"
                        onClick={() => setIsModalOpen(true)}
                    >
                        <img src={UserLogo} alt="User" className="w-10 h-10 rounded-full" />
                         <p className="text-gray-400">Have something to share?</p>
                    </div>
                    <div className="flex gap-6 ml-[10px]">
                        <button className="flex items-center gap-2 text-blue-500">
                            <img src={Photologo} alt="Photo" className="w-5 h-5" /> Photo
                        </button>
                        <button className="flex items-center gap-2 text-red-500">
                            <img src={Textlogo} alt="Text" className="w-5 h-5" /> Text
                        </button>
                    </div>
                </div>

                {/* Example Post */}
                <div className="bg-white p-4 rounded-lg shadow mb-[5px]">
                    <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                            <img
                                src={UserLogo}
                                alt="User"
                                className="w-10 h-10 rounded-full"
                            />
                            <div>
                                <h3 className="font-semibold text-gray-800">Muhammad Wajahat</h3>
                                <h4 className="text-sm text-gray-500">2 Days Ago</h4>
                            </div>
                        </div>
                        <div>
                            <img
                                src={Moreicon}
                                alt="More"
                                className="w-[36px] h-[36px] cursor-pointer"
                            />
                        </div>
                    </div>
                    <p className="text-gray-700 mb-4">
                        Hi Guys! Something interesting is on its way! 3 Days to Go.
                        <span className="text-blue-500 font-medium">
                            {" "}
                            #Reveal #Audition #FawadKhan
                        </span>
                    </p>
                    <img
                        src={Postpicture}
                        alt="Post"
                        className="rounded-lg mb-3 w-full object-cover"
                        style={{ aspectRatio: '1 / 1', objectFit: 'cover' }}
                    />
                    <div className="flex justify-start gap-6 text-gray-600 text-sm font-medium">
                        <span className="flex items-center gap-1 text-gray-600">
                            <button type="button" className="inline-flex" onClick={handleLikeClick} aria-pressed={liked}>
                                {liked ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4 fill-current text-blue-600">
                                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4 stroke-current" fill="none">
                                        <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 1 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z" />
                                    </svg>
                                )}
                            </button>
                            <button type="button" className="text-sm" onClick={openLikesModal} aria-label="Open likes list">{formatCount(likesCount)}</button>
                        </span>
                        <span
                            className="flex items-center gap-1 cursor-pointer"
                            onClick={() => setIsCommentModalOpen(true)}
                        >
                            <img src={Commenticon} alt="Comment" className="w-4 h-4" /> 14K
                        </span>

                        <span className="flex items-center gap-1">
                            <img src={Shareicon} alt="Share" className="w-4 h-4" /> 2K
                        </span>
                    </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow mb-[5px]">
                    <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                            <img
                                src={UserLogo}
                                alt="User"
                                className="w-10 h-10 rounded-full"
                            />
                            <div>
                                <h3 className="font-semibold text-gray-800">Muhammad Wajahat</h3>
                                <h4 className="text-sm text-gray-500">2 Days Ago</h4>
                            </div>
                        </div>
                        <div>
                            <img
                                src={Moreicon}
                                alt="More"
                                className="w-[36px] h-[36px] cursor-pointer"
                            />
                        </div>
                    </div>
                    <p className="text-gray-700 mb-4">
                        Hi Guys! Something interesting is on its way! 3 Days to Go.
                        <span className="text-blue-500 font-medium">
                            {" "}
                            #Reveal #Audition #FawadKhan
                        </span>
                    </p>
                    <img
                        src={Postpicture}
                        alt="Post"
                        className="rounded-lg mb-3 w-full"
                    />
                    <div className="flex justify-start gap-6 text-gray-600 text-sm font-medium">
                        <span className="flex items-center gap-1 text-gray-600">
                            <button type="button" className="inline-flex" onClick={handleLikeClick} aria-pressed={liked}>
                                {liked ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4 fill-current text-blue-600">
                                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4 stroke-current" fill="none">
                                        <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 1 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z" />
                                    </svg>
                                )}
                            </button>
                            <button type="button" className="text-sm" onClick={openLikesModal} aria-label="Open likes list">{formatCount(likesCount)}</button>
                        </span>
                        <span
                            className="flex items-center gap-1 cursor-pointer"
                            onClick={() => setIsCommentModalOpen(true)}
                        >
                            <img src={Commenticon} alt="Comment" className="w-4 h-4" /> 14K
                        </span>

                        <span className="flex items-center gap-1">
                            <img src={Shareicon} alt="Share" className="w-4 h-4" /> 2K
                        </span>
                    </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow mb-[5px]">
                    <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                            <img
                                src={UserLogo}
                                alt="User"
                                className="w-10 h-10 rounded-full"
                            />
                            <div>
                                <h3 className="font-semibold text-gray-800">Saqib Afridi</h3>
                                <h4 className="text-sm text-gray-500">2 Days Ago</h4>
                            </div>
                        </div>
                        <div>
                            <img
                                src={Moreicon}
                                alt="More"
                                className="w-[36px] h-[36px] cursor-pointer"
                            />
                        </div>
                    </div>
                    <p className="text-gray-700 mb-4">
                        Hi Guys! Something interesting is on its way! 3 Days to Go.
                        <span className="text-blue-500 font-medium">
                            {" "}
                            #Reveal #Audition #FawadKhan
                        </span>
                    </p>
                    <img
                        src={Saqib}
                        alt="Post"
                        className="rounded-lg mb-3 w-full object-cover"
                        style={{ aspectRatio: '1 / 1', objectFit: 'cover' }}
                    />
                    <div className="flex justify-start gap-6 text-gray-600 text-sm font-medium">
                        <span className="flex items-center gap-1 text-gray-600">
                            <button type="button" className="inline-flex" onClick={handleLikeClick} aria-pressed={liked}>
                                {liked ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4 fill-current text-blue-600">
                                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4 stroke-current" fill="none">
                                        <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 1 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z" />
                                    </svg>
                                )}
                            </button>
                            <button type="button" className="text-sm" onClick={openLikesModal} aria-label="Open likes list">{formatCount(likesCount)}</button>
                        </span>
                        <span
                            className="flex items-center gap-1 cursor-pointer"
                            onClick={() => setIsCommentModalOpen(true)}
                        >
                            <img src={Commenticon} alt="Comment" className="w-4 h-4" /> 14K
                        </span>

                        <span className="flex items-center gap-1">
                            <img src={Shareicon} alt="Share" className="w-4 h-4" /> 2K
                        </span>
                    </div>
                </div>
            </div>

            {/* Create Post Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
                    <div className="bg-white rounded-lg w-[500px] max-w-[95%] p-5 relative">
                        {/* Close Button */}
                        <button
                            className="absolute top-3 right-3 text-gray-600 hover:text-black"
                            onClick={() => setIsModalOpen(false)}
                        >
                            <img src={Cancelicon} alt="Close" />
                        </button>

                        {/* User Info */}
                        <div className="flex items-center gap-3 mb-4">
                            <img
                                src={UserLogo}
                                alt="User"
                                className="w-10 h-10 rounded-full"
                            />
                            <div>
                                <h3 className="font-semibold text-gray-800">Muhammad Wajahat</h3>
                                <p className="text-sm text-gray-500">Creating Post</p>
                            </div>
                        </div>

                        {/* Text Area */}
                        <textarea
                            rows="4"
                            placeholder="Write your thoughts here..."
                            className="w-full border-none focus:ring-0 text-gray-700 text-sm resize-none placeholder-gray-400"
                        ></textarea>

                        {/* Action Buttons */}
                        <div className="flex justify-between items-center mt-4">
                            <div className="flex gap-3">
                                <button
                                    className="flex items-center gap-2 px-3 py-2 bg-blue-50 text-blue-500 rounded-lg text-sm"
                                    onClick={() => {
                                        setIsModalOpen(false);
                                        setIsPhotoModalOpen(true); // open photo modal
                                    }}
                                >
                                    <img src={Photologo} alt="Photo" /> Photo
                                </button>
                                <button
                                    className="flex items-center gap-2 px-3 py-2 bg-red-50 text-red-500 rounded-lg text-sm"
                                    onClick={() => {
                                        setIsModalOpen(false);
                                        setIsTagModalOpen(true);
                                    }}
                                >
                                    <img src={Tagicon} alt="Tag People" /> Tag People
                                </button>
                            </div>
                            <button className="px-5 py-2 bg-black text-white rounded-full">
                                Post Now
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Tag People Modal */}
            {isTagModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-[60]">
                    <div className="bg-white rounded-lg w-[400px] max-w-[95%] p-5 relative">
                        {/* Close Button */}
                        <button
                            className="absolute top-3 right-3 text-gray-600 hover:text-black"
                            onClick={() => {
                                setIsTagModalOpen(false);
                                setIsModalOpen(true);
                            }}
                        >
                            <img src={Cancelicon} alt="Close" />
                        </button>

                        {/* Heading */}
                        <h2 className="text-lg font-semibold mb-4">Tag People</h2>

                        {/* Input */}
                        <input
                            type="text"
                            placeholder="Search people..."
                            className="w-full border rounded-[20px] px-3 py-2 text-sm mb-3"
                        />

                        {/* User List */}
                        <div className="max-h-40 overflow-y-auto">
                            {users.map((user) => (
                                <div
                                    key={user.id}
                                    className="flex items-center justify-between p-2 hover:bg-gray-100 cursor-pointer rounded"
                                >
                                    <div className="flex items-center gap-2">
                                        <img
                                            src={user.img}
                                            alt={user.name}
                                            className="w-8 h-8 rounded-full"
                                        />
                                        <div>
                                            <h3 className="font-medium text-sm">{user.name}</h3>
                                            <p className="text-xs text-gray-500">{user.desc}</p>
                                        </div>
                                    </div>

                                    {/* Circle Checkbox */}
                                    <label className="relative flex items-center cursor-pointer">
                                        <input
                                            type="checkbox"
                                            checked={taggedUsers.includes(user.id)}
                                            onChange={() => handleCheckboxChange(user.id)}
                                            className="peer hidden"
                                        />
                                        <span className="w-5 h-5 border-2 border-gray-400 rounded-full flex items-center justify-center peer-checked:bg-black peer-checked:border-black">
                                            <svg
                                                className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transition-opacity"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2.5"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M5 13l4 4L19 7"
                                                />
                                            </svg>
                                        </span>
                                    </label>
                                </div>
                            ))}
                        </div>

                        {/* Done Button */}
                        <div className="flex justify-end mt-4">
                            <button
                                className="px-4 py-2 bg-black text-white rounded-md"
                                onClick={() => {
                                    console.log("Tagged Users:", taggedUsers);
                                    setIsTagModalOpen(false);
                                    setIsModalOpen(true);
                                }}
                            >
                                Done
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Photo Modal */}
            {isPhotoModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-[70]">
                    <div className="bg-white rounded-lg w-[500px] max-w-[95%] p-5 relative">
                        {/* Close Button */}
                        <button
                            className="absolute top-3 right-3 text-gray-600 hover:text-black"
                            onClick={() => {
                                setIsPhotoModalOpen(false);
                                setIsModalOpen(true);
                            }}
                        >
                            <img src={Cancelicon} alt="Close" />
                        </button>

                        {/* Post Card */}
                        <div className="bg-white rounded-lg shadow p-4 w-full">
                            {/* User Info */}
                            <div className="flex items-center justify-between mb-3">
                                <div className="flex items-center gap-3">
                                    <img
                                        src={UserLogo}
                                        alt="User"
                                        className="w-10 h-10 rounded-full"
                                    />
                                    <div>
                                        <h3 className="font-semibold text-gray-800">Muhammad Wajahat</h3>
                                        <h4 className="text-sm text-gray-500">2 Days Ago</h4>
                                    </div>
                                </div>

                            </div>

                            {/* Post Text */}
                            <p className="text-gray-700 mb-4">
                                Hi Guys! Something interesting is on its way! 3 Days to Go.
                                <span className="text-blue-500 font-medium">
                                    {" "}#Reveal #Audition #FawadKhan
                                </span>
                            </p>

                            {/* Post Image */}
                            <img
                                src={Postpicture}
                                alt="Post"
                                className="rounded-lg mb-3 w-full object-cover"
                                style={{ aspectRatio: '1 / 1', objectFit: 'cover' }}
                            />

                            {/* Post Actions */}
                            <div className="flex justify-start gap-6 text-gray-600 text-sm font-medium">
                                <span className="flex items-center gap-1">
                                    <img src={Likeicon} alt="Like" className="w-4 h-4" /> 141.2K
                                </span>
                                <span className="flex items-center gap-1">
                                    <img src={Commenticon} alt="Comment" className="w-4 h-4" /> 14K
                                </span>
                                <span className="flex items-center gap-1">
                                    <img src={Shareicon} alt="Share" className="w-4 h-4" /> 2K
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Likes Modal */}
                    {isLikesModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-[80]">
                    <div className="bg-white rounded-lg w-[400px] max-w-[95%] p-5 relative">
                        {/* Close Button */}
                        <button
                            className="absolute top-3 right-3 text-gray-600 hover:text-black"
                            onClick={() => setIsLikesModalOpen(false)}
                        >
                            <img src={Cancelicon} alt="Close" />
                        </button>

                        <h2 className="text-lg font-semibold mb-4">Post Likes ({formatCount(likesCount)})</h2>

                        {/* Example Liked Users */}
                        <div className="space-y-3 max-h-60 overflow-y-auto">
                            {[1, 2, 3, 4, 5].map((id) => (
                                <div key={id} className="flex items-center gap-3">
                                    <img
                                        src={UserLogo}
                                        alt="User"
                                        className="w-10 h-10 rounded-full"
                                    />
                                    <div>
                                        <h3 className="font-medium text-sm">User {id}</h3>
                                        <p className="text-xs text-gray-500">Liked your post</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {/* Comment Modal */}
            {isCommentModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-[90]">
                    <div className="bg-white rounded-lg w-[90%] max-w-[900px] h-[80vh] flex relative">
                        {/* Close Button */}
                        <button
                            className="absolute top-3 right-3 text-gray-600 hover:text-black"
                            onClick={() => setIsCommentModalOpen(false)}
                        >
                            <img src={Cancelicon} alt="Close" />
                        </button>

                        {/* Left: Post Section */}
                        <div className="w-[60%] border-r p-4 overflow-y-auto">
                            <div className="flex items-center justify-between mb-3">
                                <div className="flex items-center gap-3">
                                    <img src={UserLogo} alt="User" className="w-10 h-10 rounded-full" />
                                    <div>
                                        <h3 className="font-semibold text-gray-800">Muhammad Wajahat</h3>
                                        <h4 className="text-sm text-gray-500">2 Days Ago</h4>
                                    </div>
                                </div>
                                <img src={Moreicon} alt="More" className="w-[30px] h-[30px]" />
                            </div>

                            <p className="text-gray-700 mb-4">
                                Hi Guys! Something interesting is on its way! 3 Days to Go.
                                <span className="text-blue-500 font-medium">
                                    {" "}#Reveal #Audition #FawadKhan
                                </span>
                            </p>

                            <img src={Postpicture} alt="Post" className="rounded-lg mb-3 w-full object-cover" style={{ aspectRatio: '1 / 1', objectFit: 'cover' }} />

                            <div className="flex justify-start gap-6 text-gray-600 text-sm font-medium">
                                <span className="flex items-center gap-1">
                                    <img src={Likeicon} alt="Like" className="w-4 h-4" /> 141.2K
                                </span>
                                <span className="flex items-center gap-1">
                                    <img src={Commenticon} alt="Comment" className="w-4 h-4" /> 14K
                                </span>
                                <span className="flex items-center gap-1">
                                    <img src={Shareicon} alt="Share" className="w-4 h-4" /> 2K
                                </span>
                            </div>
                        </div>

                        {/* Right: Comment Section */}
                        <div className="w-[40%] p-4 flex flex-col">
                            <h2 className="text-lg font-semibold mb-4">Comments</h2>

                            {/* Comments List */}
                            <div className="flex-1 overflow-y-auto space-y-4">
                                {[1, 2, 3].map((id) => (
                                    <div key={id} className="flex items-start gap-3">
                                        <img
                                            src={UserLogo}
                                            alt="User"
                                            className="w-8 h-8 rounded-full"
                                        />
                                        <div className="bg-gray-100 p-3 rounded-lg">
                                            <h3 className="font-medium text-sm">User {id}</h3>
                                            <p className="text-sm text-gray-600">
                                                This is a sample comment {id}.
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Add Comment Box */}
                            <div className="mt-4 flex items-center gap-2">
                                <input
                                    type="text"
                                    placeholder="Write a comment..."
                                    className="flex-1 border rounded-full px-3 py-2 text-sm"
                                />
                                <button className="px-4 py-2 bg-black text-white rounded-full">
                                    Send
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}


        </>
    );
};

export default ContentSection;

import React, { useEffect, useMemo, useState } from "react";
import Postpicture from "../../../assets/images/Postpicture.png";
import UserLogo from "../../../assets/Logos/UserLogo.png";
import Photologo from "../../../assets/Logos/Photologo.png";
import Textlogo from "../../../assets/Logos/Textlogo.png";
import Commenticon from "../../../assets/Icons/Commenticon.png";
import Shareicon from "../../../assets/Icons/Shareicon.png";
import Moreicon from "../../../assets/Icons/Moreicon.png";
import Tagicon from "../../../assets/Icons/Tagicon.png";
import Cancelicon from "../../../assets/Icons/Cancelicon.png";
import Saqib from "../../../assets/images/Saqib.png";

/* ----------------------------- helpers ----------------------------- */
const formatCount = (n) => {
  if (n >= 1_000_000) return (n / 1_000_000).toFixed(n % 1_000_000 === 0 ? 0 : 1) + "M";
  if (n >= 1_000) return (n / 1_000).toFixed(n % 1_000 === 0 ? 0 : 1) + "K";
  return String(n);
};

const IconButton = ({ children, onClick, ariaLabel }) => (
  <button
    type="button"
    onClick={onClick}
    aria-label={ariaLabel}
    className="inline-flex items-center justify-center rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-black/10"
  >
    {children}
  </button>
);

/* --------------------------- reusable card -------------------------- */
const PostCard = ({
  id,
  author,
  timeAgo,
  text,
  imageSrc,
  liked,
  likeCount,
  onToggleLike,
  onOpenLikes,
  onOpenComments,
}) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow mb-[5px]">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <img src={UserLogo} alt={`${author} avatar`} className="w-10 h-10 rounded-full" />
          <div>
            <h3 className="font-semibold text-gray-800">{author}</h3>
            <h4 className="text-sm text-gray-500">{timeAgo}</h4>
          </div>
        </div>
        <img src={Moreicon} alt="More" className="w-9 h-9 cursor-pointer" />
      </div>

      <p className="text-gray-700 mb-4">
        {text}{" "}
        <span className="text-blue-500 font-medium">#Reveal #Audition #FawadKhan</span>
      </p>

      {imageSrc && (
        <img
          src={imageSrc}
          alt="Post"
          className="rounded-lg mb-3 w-full object-cover aspect-square"
        />
      )}

      <div className="flex justify-start gap-6 text-gray-600 text-sm font-medium">
        {/* Like */}
        <span className="flex items-center gap-1">
          <IconButton onClick={() => onToggleLike(id)} ariaLabel="Toggle like">
            {liked ? (
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-blue-600">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" className="w-4 h-4 stroke-current" fill="none">
                <path
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 1 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z"
                />
              </svg>
            )}
          </IconButton>

          <button type="button" className="text-sm" onClick={() => onOpenLikes(id)}>
            {formatCount(likeCount)}
          </button>
        </span>

        {/* Comments */}
        <span
          className="flex items-center gap-1 cursor-pointer"
          onClick={() => onOpenComments(id)}
        >
          <img src={Commenticon} alt="Comments" className="w-4 h-4" /> 14K
        </span>

        {/* Share (placeholder) */}
        <span className="flex items-center gap-1">
          <img src={Shareicon} alt="Share" className="w-4 h-4" /> 2K
        </span>
      </div>
    </div>
  );
};

/* --------------------------- main component ------------------------- */
const ContentSection = () => {
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [isTagOpen, setIsTagOpen] = useState(false);
  const [isPhotoOpen, setIsPhotoOpen] = useState(false);
  const [isLikesOpen, setIsLikesOpen] = useState(false);
  const [isCommentsOpen, setIsCommentsOpen] = useState(false);

  // which post for likes/comments
  const [activePostId, setActivePostId] = useState(null);

  // per-post likes state
  const posts = useMemo(
    () => [
      {
        id: "p1",
        author: "Muhammad Wajahat",
        timeAgo: "2 Days Ago",
        text: "Hi Guys! Something interesting is on its way! 3 Days to Go.",
        imageSrc: Postpicture,
        initialLikes: 141400,
      },
      {
        id: "p2",
        author: "Muhammad Wajahat",
        timeAgo: "2 Days Ago",
        text: "Hi Guys! Something interesting is on its way! 3 Days to Go.",
        imageSrc: Postpicture,
        initialLikes: 141400,
      },
      {
        id: "p3",
        author: "Saqib Afridi",
        timeAgo: "2 Days Ago",
        text: "Hi Guys! Something interesting is on its way! 3 Days to Go.",
        imageSrc: Saqib,
        initialLikes: 141400,
      },
    ],
    []
  );

  // maps: id -> liked / count
  const [likedMap, setLikedMap] = useState(() =>
    Object.fromEntries(posts.map((p) => [p.id, false]))
  );
  const [likeCountMap, setLikeCountMap] = useState(() =>
    Object.fromEntries(posts.map((p) => [p.id, p.initialLikes]))
  );

  const toggleLike = (id) => {
    setLikedMap((prev) => {
      const nextLiked = !prev[id];
      setLikeCountMap((c) => ({ ...c, [id]: nextLiked ? c[id] + 1 : c[id] - 1 }));
      return { ...prev, [id]: nextLiked };
    });
  };

  const openLikes = (id) => {
    setActivePostId(id);
    setIsLikesOpen(true);
  };

  const openComments = (id) => {
    setActivePostId(id);
    setIsCommentsOpen(true);
  };

  // sample people for tagging
  const people = [
    { id: 1, name: "Muhammad Ali Nizami", desc: "Actor | Director | Producer" },
    { id: 2, name: "Sara Khan", desc: "Model | Influencer" },
    { id: 3, name: "Ayesha Ahmed", desc: "Content Creator" },
  ];
  const [tagged, setTagged] = useState([]);
  const toggleTag = (id) =>
    setTagged((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));

  // lock background scroll when any modal is open
  const anyModalOpen =
    isCreateOpen || isTagOpen || isPhotoOpen || isLikesOpen || isCommentsOpen;

  useEffect(() => {
    const html = document.documentElement;
    if (anyModalOpen) {
      html.classList.add("overflow-hidden");
    } else {
      html.classList.remove("overflow-hidden");
    }
    return () => html.classList.remove("overflow-hidden");
  }, [anyModalOpen]);

  return (
    <>
      {/* Create post box */}
      <div className="bg-white p-4 rounded-lg shadow mb-[5px]">
        <div
          className="flex items-center gap-3 mb-4 cursor-pointer"
          onClick={() => setIsCreateOpen(true)}
        >
          <img src={UserLogo} alt="User" className="w-10 h-10 rounded-full" />
          <p className="text-gray-400">Have something to share?</p>
        </div>
        <div className="flex gap-6 ml-[10px]">
          <button
            className="flex items-center gap-2 text-blue-500"
            onClick={() => {
              setIsCreateOpen(true);
              setIsPhotoOpen(true);
            }}
          >
            <img src={Photologo} alt="Photo" className="w-5 h-5" /> Photo
          </button>
          <button className="flex items-center gap-2 text-red-500" onClick={() => setIsCreateOpen(true)}>
            <img src={Textlogo} alt="Text" className="w-5 h-5" /> Text
          </button>
        </div>
      </div>

      {/* Feed */}
      <div className="w-full">
        {posts.map((p) => (
          <PostCard
            key={p.id}
            id={p.id}
            author={p.author}
            timeAgo={p.timeAgo}
            text={p.text}
            imageSrc={p.imageSrc}
            liked={likedMap[p.id]}
            likeCount={likeCountMap[p.id]}
            onToggleLike={toggleLike}
            onOpenLikes={openLikes}
            onOpenComments={openComments}
          />
        ))}
      </div>

      {/* ------------------------- Modals ------------------------- */}
      {/* Create Post Modal */}
      {isCreateOpen && !isPhotoOpen && !isTagOpen && (
        <Modal onClose={() => setIsCreateOpen(false)} title="Create Post">
          <div className="flex items-center gap-3 mb-4">
            <img src={UserLogo} alt="User" className="w-10 h-10 rounded-full" />
            <div>
              <h3 className="font-semibold text-gray-800">Muhammad Wajahat</h3>
              <p className="text-sm text-gray-500">Creating Post</p>
            </div>
          </div>

          <textarea
            rows="4"
            placeholder="Write your thoughts here..."
            className="w-full border-none focus:ring-0 text-gray-700 text-sm resize-none placeholder-gray-400"
          />

          <div className="flex justify-between items-center mt-4">
            <div className="flex gap-3">
              <button
                className="flex items-center gap-2 px-3 py-2 bg-blue-50 text-blue-600 rounded-lg text-sm"
                onClick={() => {
                  setIsPhotoOpen(true);
                }}
              >
                <img src={Photologo} alt="Photo" /> Photo
              </button>
              <button
                className="flex items-center gap-2 px-3 py-2 bg-red-50 text-red-500 rounded-lg text-sm"
                onClick={() => setIsTagOpen(true)}
              >
                <img src={Tagicon} alt="Tag People" /> Tag People
              </button>
            </div>
            <button className="px-5 py-2 bg-black text-white rounded-full">Post Now</button>
          </div>
        </Modal>
      )}

      {/* Tag People Modal */}
      {isTagOpen && (
        <Modal onClose={() => setIsTagOpen(false)} title="Tag People" width="w-[400px]">
          <input
            type="text"
            placeholder="Search people..."
            className="w-full border rounded-[20px] px-3 py-2 text-sm mb-3"
          />
          <div className="max-h-40 overflow-y-auto space-y-1">
            {people.map((u) => (
              <label
                key={u.id}
                className="flex items-center justify-between p-2 rounded hover:bg-gray-50 cursor-pointer"
              >
                <span className="flex items-center gap-2">
                  <img src={UserLogo} alt="" className="w-8 h-8 rounded-full" />
                  <span>
                    <span className="block text-sm font-medium">{u.name}</span>
                    <span className="block text-xs text-gray-500">{u.desc}</span>
                  </span>
                </span>
                <input
                  type="checkbox"
                  checked={tagged.includes(u.id)}
                  onChange={() => toggleTag(u.id)}
                  className="w-4 h-4 accent-black"
                />
              </label>
            ))}
          </div>
          <div className="flex justify-end mt-4">
            <button
              className="px-4 py-2 bg-black text-white rounded-md"
              onClick={() => setIsTagOpen(false)}
            >
              Done
            </button>
          </div>
        </Modal>
      )}

      {/* Photo Modal (preview style) */}
      {isPhotoOpen && (
        <Modal onClose={() => setIsPhotoOpen(false)} title="Add Photo" width="w-[400px]">
          <div className="bg-white rounded-lg p-0 w-full">
            <div className="flex items-center gap-3 mb-3">
              <img src={UserLogo} alt="User" className="w-10 h-10 rounded-full" />
              <div>
                <h3 className="font-semibold text-gray-800">Muhammad Wajahat</h3>
                <h4 className="text-sm text-gray-500">2 Days Ago</h4>
              </div>
            </div>
            <p className="text-gray-700 mb-3">
              Hi Guys! Something interesting is on its way! 3 Days to Go.{" "}
              <span className="text-blue-500 font-medium">#Reveal #Audition #FawadKhan</span>
            </p>
            <img src={Postpicture} alt="Post" className="rounded-lg mb-3 w-full object-cover aspect-square" />
            <div className="flex justify-start gap-6 text-gray-600 text-sm font-medium">
              <span className="flex items-center gap-1">141.2K</span>
              <span className="flex items-center gap-1">
                <img src={Commenticon} alt="Comment" className="w-4 h-4" /> 14K
              </span>
              <span className="flex items-center gap-1">
                <img src={Shareicon} alt="Share" className="w-4 h-4" /> 2K
              </span>
            </div>
          </div>
        </Modal>
      )}

      {/* Likes Modal */}
      {isLikesOpen && (
        <Modal
          onClose={() => setIsLikesOpen(false)}
          title={`Post Likes (${formatCount(likeCountMap[activePostId] || 0)})`}
          width="w-[400px]"
        >
          <div className="space-y-3 max-h-60 overflow-y-auto">
            {[1, 2, 3, 4, 5].map((id) => (
              <div key={id} className="flex items-center gap-3">
                <img src={UserLogo} alt="User" className="w-10 h-10 rounded-full" />
                <div>
                  <h3 className="font-medium text-sm">User {id}</h3>
                  <p className="text-xs text-gray-500">Liked your post</p>
                </div>
              </div>
            ))}
          </div>
        </Modal>
      )}

      {/* Comment Modal (split layout) */}
      {isCommentsOpen && (
        <Modal onClose={() => setIsCommentsOpen(false)} width="w-[90%] max-w-[900px]" noPadding>
          <div className="bg-white rounded-lg w-full h-[80vh] flex">
            {/* Left */}
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
                Hi Guys! Something interesting is on its way! 3 Days to Go.{" "}
                <span className="text-blue-500 font-medium">#Reveal #Audition #FawadKhan</span>
              </p>
              <img src={Postpicture} alt="Post" className="rounded-lg mb-3 w-full object-cover aspect-square" />
              <div className="flex justify-start gap-6 text-gray-600 text-sm font-medium">
                <span className="flex items-center gap-1">{formatCount(141200)}</span>
                <span className="flex items-center gap-1">
                  <img src={Commenticon} alt="Comment" className="w-4 h-4" /> 14K
                </span>
                <span className="flex items-center gap-1">
                  <img src={Shareicon} alt="Share" className="w-4 h-4" /> 2K
                </span>
              </div>
            </div>

            {/* Right */}
            <div className="w-[40%] p-4 flex flex-col">
              <h2 className="text-lg font-semibold mb-4">Comments</h2>
              <div className="flex-1 overflow-y-auto space-y-4">
                {[1, 2, 3].map((id) => (
                  <div key={id} className="flex items-start gap-3">
                    <img src={UserLogo} alt="User" className="w-8 h-8 rounded-full" />
                    <div className="bg-gray-100 p-3 rounded-lg">
                      <h3 className="font-medium text-sm">User {id}</h3>
                      <p className="text-sm text-gray-600">This is a sample comment {id}.</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex items-center gap-2">
                <input
                  type="text"
                  placeholder="Write a comment..."
                  className="flex-1 border rounded-full px-3 py-2 text-sm"
                />
                <button className="px-4 py-2 bg-black text-white rounded-full">Send</button>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

/* --------------------------- Modal component --------------------------- */
const Modal = ({ children, onClose, title, width = "w-[500px]", noPadding = false }) => {
  return (
    <div
      className="fixed inset-0 z-[100] grid place-items-center bg-black/40"
      role="dialog"
      aria-modal="true"
    >
      <div className={`bg-white rounded-lg ${width} max-w-[95%] relative ${noPadding ? "" : "p-5"}`}>
        <button
          className="absolute top-3 right-3 text-gray-600 hover:text-black"
          onClick={onClose}
          aria-label="Close"
        >
          <img src={Cancelicon} alt="Close" />
        </button>
        {title && !noPadding && <h2 className="text-lg font-semibold mb-4">{title}</h2>}
        {children}
      </div>
    </div>
  );
};

export default ContentSection;

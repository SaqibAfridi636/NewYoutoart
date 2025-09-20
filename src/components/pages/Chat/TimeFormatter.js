export const formatTime = (timestamp) => {
  if (!timestamp) return "";
  // If already a string, pass through
  if (typeof timestamp === "string") return timestamp;

  const now = Date.now();
  const diff = Math.floor((now - timestamp) / 1000);

  if (diff < 60) return "Just now";
  if (diff < 3600) {
    const m = Math.floor(diff / 60);
    return `${m} min${m > 1 ? "s" : ""} ago`;
  }
  if (diff < 86400) {
    const h = Math.floor(diff / 3600);
    return `${h} hour${h > 1 ? "s" : ""} ago`;
  }
  const d = Math.floor(diff / 86400);
  return `${d} day${d > 1 ? "s" : ""} ago`;
};

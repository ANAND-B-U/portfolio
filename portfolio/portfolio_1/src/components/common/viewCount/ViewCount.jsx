import { useEffect, useState } from "react";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ViewCount = () => {
  const [viewCount, setViewCount] = useState(0);

  useEffect(() => {
    // Get stored view count from localStorage
    const storedCount = localStorage.getItem('portfolioViewCount');
    const currentCount = storedCount ? parseInt(storedCount) : Math.floor(Math.random() * 500) + 1000;
    
    // Increment view count
    const newCount = currentCount + 1;
    localStorage.setItem('portfolioViewCount', newCount.toString());
    setViewCount(newCount);
  }, []);

  return (
    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
      <FontAwesomeIcon icon={faEye} className="text-picto-primary" />
      <span>{viewCount.toLocaleString()} views</span>
    </div>
  );
};

export default ViewCount;

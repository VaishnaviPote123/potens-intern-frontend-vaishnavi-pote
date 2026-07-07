import { useEffect, useState } from "react";
import { FiWifiOff } from "react-icons/fi";

import {
  getOfflineCount,
} from "../utils/offlineQueue";

export default function OfflineStatus() {
  const [count, setCount] = useState(
    getOfflineCount()
  );

  useEffect(() => {
    const updateCount = () => {
      setCount(getOfflineCount());
    };

    window.addEventListener("online", updateCount);
    window.addEventListener("offline", updateCount);
    window.addEventListener("storage", updateCount);
    window.addEventListener(
      "offlineQueueUpdated",
      updateCount
    );

    return () => {
      window.removeEventListener(
        "online",
        updateCount
      );

      window.removeEventListener(
        "offline",
        updateCount
      );

      window.removeEventListener(
        "storage",
        updateCount
      );

      window.removeEventListener(
        "offlineQueueUpdated",
        updateCount
      );
    };
  }, []);

  if (count === 0) return null;

  return (
    <div className="mt-5 flex justify-center">
      <div
        className="
          flex
          items-center
          gap-2
          rounded-full
          bg-yellow-50
          border
          border-yellow-300
          px-5
          py-2
          shadow-sm
        "
      >
        <FiWifiOff className="text-yellow-600" />

        <span className="text-sm font-medium text-yellow-700">
          {count} report{count > 1 ? "s" : ""} waiting to sync
        </span>
      </div>
    </div>
  );
}
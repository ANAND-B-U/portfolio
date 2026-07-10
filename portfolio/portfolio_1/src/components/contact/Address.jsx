import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const Address = ({ item }) => {
  return (
    <div className="flex items-center gap-4 rounded-[28px] border border-white/10 bg-[#081025] p-5 shadow-[0_15px_40px_rgba(0,0,0,0.15)]">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#15223f] text-[#60a5fa]">
        <FontAwesomeIcon icon={item.icon} className="text-lg" />
      </div>
      <div>
        <p className="text-[10px] uppercase tracking-[0.35em] text-gray-500 mb-1">
          {item.title}
        </p>
        <p className="text-sm sm:text-base text-white font-semibold">
          {item.description}
        </p>
      </div>
    </div>
  );
};

export default Address;

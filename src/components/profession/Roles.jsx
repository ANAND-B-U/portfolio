import { useEffect, useState } from "react";

const Roles = ({ role }) => {
  const [mouseHover, setMouseHover] = useState(false);
  useEffect(() => {
    window.addEventListener("mouseenter", (e) => {
      console.log("Mouse entered on the: ", e.target);
    });
  }, []);

  return (
    <div
      onMouseEnter={() => setMouseHover(true)}
      onMouseLeave={() => setMouseHover(false)}
      className="p-6 xs:p-10 bg-[#1a1a1a] hover:shadow-2xl h-auto shadow-xl ease-out duration-800 rounded-2xl my-8 flex relative overflow-hidden border border-white/10 hover:border-[#0ea5e9]/30"
    >
      <p
        className={`bg-white absolute start-0 w-0 h-full mt-[-16px] xs:mt-[-32px] ${mouseHover && "duration-200 w-[5px]"
          }`}
      />
      <div>
        <p className="text-xl sm:text-2xl font-semibold text-white pb-4">
          {role?.title}
        </p>
        <p className="text-[13px] sm:text-[16px] font-normal text-gray-300">
          {role?.description}
        </p>
      </div>
    </div>
  );
};

export default Roles;

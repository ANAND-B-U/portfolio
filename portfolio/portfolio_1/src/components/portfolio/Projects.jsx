const Projects = ({ data }) => {
  return (
    <div className="rounded-2xl outline-[#FFFFFF] hover-lift shadow-2xl border border-white/10 bg-[#1a1a1a] text-white h-full">
      <img src={data?.image} alt={`${data?.title} image`} className="w-full h-48 object-cover rounded-t-2xl" />
      <div className="p-4 xs:p-6 flex flex-col justify-between h-full">
        <div>
          <p className="text-gray-400 text-xs sm:text-sm font-semibold uppercase tracking-wider">{data?.category}</p>
          <p className="text-white text-lg sm:text-xl font-bold pt-2 mb-3">
            {data?.title}
          </p>
          <p
            style={{ lineHeight: "22px", letterSpacing: "0%" }}
            className="text-gray-300 text-xs sm:text-[14px] leading-relaxed"
          >
            {data?.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;

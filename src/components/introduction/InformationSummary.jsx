const InformationSummary = ({ item }) => {
  return (
    <div className="bg-[#111827] border border-white/10 rounded-3xl text-center shadow-xl shadow-black/20">
      <div className="p-3 sm:p-4">
        <p className="text-xl sm:text-2xl font-semibold text-white">
          {item.description}
        </p>
        <p className="text-xs sm:text-sm font-normal text-gray-300 mt-2">
          {item.title}
        </p>
      </div>
    </div>
  );
};

export default InformationSummary;

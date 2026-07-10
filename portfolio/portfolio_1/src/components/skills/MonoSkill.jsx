const MonoSkill = ({ data }) => {
  return (
    <div className="bg-[#1a1a1a]/90 border-2 border-white/10 rounded-3xl p-6 backdrop-blur-xl 
                    hover:shadow-[0_0_50px_rgba(14,165,233,0.3)] hover:border-[#0ea5e9]/50 transition-all duration-500 hover:-translate-y-3">
      <div className="flex items-center justify-between mb-6">
        <p className="text-xl font-bold text-white">{data.category}</p>
        <div className="w-4 h-4 rounded-full bg-[#0ea5e9] animate-pulse shadow-lg shadow-[#0ea5e9]/50"></div>
      </div>
      <ul className="space-y-5">
        {data.items.map((item, i) => (
          <li key={i} className="group">
            <div className="flex justify-between items-center mb-3">
              <span className="text-sm text-gray-300 group-hover:text-white transition-colors">{item.name}</span>
              <span className="text-xs font-bold text-white bg-[#0ea5e9]/30 px-3 py-1 rounded-full border border-[#0ea5e9]/40">
                {item.level}
              </span>
            </div>
            <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#0ea5e9] to-[#38bdf8] rounded-full transition-all duration-1000 ease-out"
                style={{ width: item.level === 'Expert' ? '95%' : item.level === 'Advanced' ? '80%' : '60%' }}
              ></div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MonoSkill;

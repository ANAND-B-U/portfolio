import "./introduction.css";

// Information summary data
const informationSummaryData = [
  {
    id: 1,
    number: "6",
    label: "MONTHS",
    sublabel: "EXPERIENCE",
  },
  {
    id: 2,
    number: "4+",
    label: "PROJECTS",
    sublabel: "COMPLETED",
  },
  {
    id: 3,
    number: "5+",
    label: "CERTIFICATIONS",
    sublabel: "EARNED",
  },
];

const Introduction = () => {
  return (
    // Changed min-h-screen to flex items-center and added proper top padding (pt-24) to clear the navbar
    <div
      className="flex flex-col lg:flex-row items-center justify-between min-h-screen px-4 max-xxl:px-8 pt-24 pb-12"
      id="introduction"
    >
      {/* Left Side - Heading & Bio */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center">
        <div className="transition-all duration-500">
          
          {/* Open to Opportunities Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#0ea5e9]/30 bg-[#0ea5e9]/5 mb-4">
            <span className="relative flex h-2.5 w-2.5">
              {/* Breathing pulse ring */}
              <span className="animate-ping-dot absolute inline-flex h-full w-full rounded-full bg-[#0ea5e9] opacity-75"></span>
              {/* Solid dot */}
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#0ea5e9]"></span>
            </span>
            <span className="text-sm text-[#0ea5e9] font-medium">
              Open to opportunities
            </span>
          </div>

          {/* Main Heading with Colors */}
          <h1 className="text-5xl sm:text-6xl xl:text-7xl font-bold leading-tight mb-6">
            <span className="block text-white">Engineering the</span>
            <span className="block text-white">Future with</span>
            <span className="block">
              <span className="text-[#8b5cf6]">Backend</span>
              <span className="text-white mx-2">&</span>
              <span className="text-[#0ea5e9]">AI</span>
            </span>
          </h1>

          <p className="text-sm sm:text-[15px] lg:text-base my-4 leading-relaxed text-gray-400 max-w-xl">
            I'm Anand B - Entry‑level Data and AI professional with hands‑on experience in data extraction, transformation and analysis,
            LLM‑based data workflows, and automation using Python, Flask and SQL. Seeking opportunities in data
            engineering and analytical development.
          </p>

          {/* Say Hello Button */}
          <p className="mt-6">
            <a
              className="btn-accent btn btn-sm text-white px-6 py-2.5 text-[13px] font-semibold"
              href="mailto:b.aanand2233@gmail.com"
            >
              Say Hello!
            </a>
          </p>
        </div>
      </div>

      {/* Right Side - Stats */}
      <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-12 lg:mt-0">
        <div className="flex gap-10 lg:gap-14">
          {informationSummaryData.map((item) => (
            <div key={item.id} className="text-center">
              {/* Small horizontal line above number */}
              <div className="w-6 h-[2px] bg-[#8b5cf6] mx-auto mb-3"></div>
              
              <div className="text-4xl sm:text-5xl font-bold text-white mb-2">
                {item.number}
              </div>
              <div className="text-[10px] sm:text-[11px] text-gray-500 tracking-wider uppercase">
                {item.label}
              </div>
              <div className="text-[9px] sm:text-[10px] text-gray-600 tracking-wider uppercase mt-0.5">
                {item.sublabel}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Introduction;
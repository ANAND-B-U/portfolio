import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Projects = ({ data }) => {
  if (!data) return null;

  const hasLink = data.link && data.link !== "#!";

  return (
    <div className="group relative h-[420px] rounded-2xl overflow-hidden border border-white/5 hover:border-white/10 transition-all duration-500">
      
      {/* 1. Background Image */}
      <img 
        src={data.image} 
        alt={data.title} 
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
      />

      {/* 2. Dark Gradient Overlay (makes text readable) */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/90 to-[#050505]/50"></div>

      {/* 3. Hover-Only Left Accent Line (Glows on hover) */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#0ea5e9] via-[#8b5cf6] to-[#2dd4bf] opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[0_0_20px_rgba(14,165,233,0.6)]"></div>

      {/* 4. Content Container */}
      <div className="relative z-10 flex flex-col h-full p-8">
        
        {/* Top Row: Number & GitHub Icon */}
        <div className="flex justify-between items-start mb-auto">
          <span className="text-[10px] font-mono text-gray-500 group-hover:text-[#0ea5e9] transition-colors duration-300">
            {data.id.toString().padStart(2, "0")}
          </span>
          {hasLink && (
            <a
              href={data.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-white transition-colors duration-300"
            >
              <FontAwesomeIcon icon={faGithub} className="text-xl" />
            </a>
          )}
        </div>

        {/* Middle Row: Text Content */}
        <div className="mb-8">
          <p className="text-[#38bdf8] text-xs font-semibold uppercase tracking-wider mb-2">
            {data.category}
          </p>
          <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#a78bfa] transition-colors duration-300">
            {data.title}
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">
            {data.description}
          </p>
        </div>

        {/* Bottom Row: Tech Tags & View Button */}
        <div className="flex items-end justify-between mt-auto">
          {/* Tech Tags */}
          <div className="flex flex-wrap gap-2 max-w-[70%]">
            {data.tech?.slice(0, 3).map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-[10px] text-gray-300"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Circular VIEW Button */}
          <a
            href={hasLink ? data.link : "#"}
            target={hasLink ? "_blank" : undefined}
            rel={hasLink ? "noopener noreferrer" : undefined}
            className={`w-14 h-14 rounded-full flex items-center justify-center border backdrop-blur-md transition-all duration-500 group-hover:scale-110 ${
              hasLink
                ? "border-[#8b5cf6]/50 text-[#8b5cf6] bg-black/40 hover:bg-[#8b5cf6] hover:text-white hover:shadow-[0_0_25px_rgba(139,92,246,0.5)]"
                : "border-gray-700 text-gray-600 cursor-not-allowed bg-black/40"
            }`}
            onClick={(e) => !hasLink && e.preventDefault()}
          >
            <span className="text-[9px] font-bold tracking-[0.15em]">VIEW</span>
          </a>
        </div>

      </div>
    </div>
  );
};

export default Projects;
import { useRef, useState, useEffect, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFlask,
  faDatabase,
  faCloud,
  faRobot,
  faCodeBranch,
  faChevronLeft,
  faChevronRight,
  faDiamond,
} from "@fortawesome/free-solid-svg-icons";

const mercuryProjects = [
  {
    id: 1,
    title: "R&D – Intelligent Website Crawling",
    subtitle: "Hugging Face · Blogs · Repos · Documentation",
    description:
      "Researched intelligent website crawling using Hugging Face, Firecrawl, and Crawl4AI. Designed context‑aware extraction pipelines for AI‑driven data enrichment and semantic indexing.",
    metrics: [
      { label: "Context Accuracy ↑", value: "88%", color: "text-white" },
      { label: "Data Coverage ↑", value: "3x", color: "text-gray-300" },
    ],
    tech: ["Firecrawl", "Crawl4AI", "Python", "Flask"],
    icon: faFlask,
    gradient: "from-[#0ea5e9] to-[#38bdf8]",
  },
  {
    id: 2,
    title: "MarketoPulse CRM",
    subtitle: "Lead Management & Analytics",
    description:
      "Built a scalable CRM integrating lead tracking, analytics dashboards, and automated workflows. Enhanced data pipelines and improved engagement through intelligent insights.",
    metrics: [
      { label: "Data Efficiency ↑", value: "90%", color: "text-white" },
      { label: "Latency Cut ↓", value: "42%", color: "text-gray-300" },
    ],
    tech: ["Python", "Flask", "SQL", "Power BI"],
    icon: faDatabase,
    gradient: "from-[#0284c7] to-[#7dd3fc]",
  },
  {
    id: 3,
    title: "n8n Workflow Automation",
    subtitle: "Data Crawling & Integration",
    description:
      "Built automated workflows for data crawling and enrichment using SERP API and Google Maps API. Integrated Firecrawl and Crawl4AI for context‑aware extraction and AI‑driven research pipelines.",
    metrics: [
      { label: "Automation Efficiency ↑", value: "70%", color: "text-white" },
      { label: "API Coverage ↑", value: "2x", color: "text-gray-300" },
    ],
    tech: ["n8n", "SERP API", "Google Maps", "Firecrawl"],
    icon: faCloud,
    gradient: "from-[#0ea5e9] to-[#38bdf8]",
  },
  {
    id: 4,
    title: "EliteScan Business Card OCR",
    subtitle: "AI‑Powered Document Parsing",
    description:
      "Developed an OCR system converting 500+ business cards into structured JSON via Flask API with fallback logic. Automated CRM sync through n8n, saving 15+ hours weekly.",
    metrics: [
      { label: "Cards Processed", value: "500+", color: "text-white" },
      { label: "Time Saved Weekly", value: "15+ hrs", color: "text-gray-300" },
    ],
    tech: ["Python", "Flask", "n8n", "JSON"],
    icon: faRobot,
    gradient: "from-[#0284c7] to-[#7dd3fc]",
  },
  {
    id: 5,
    title: "RAG Pipeline with Firecrawl",
    subtitle: "Retrieval‑Augmented Generation Integration",
    description:
      "Implemented RAG pipelines using Firecrawl and Crawl4AI to enable semantic search and contextual data retrieval for AI applications. Improved query relevance and response accuracy.",
    metrics: [
      { label: "Query Relevance ↑", value: "92%", color: "text-white" },
      { label: "Response Accuracy ↑", value: "85%", color: "text-gray-300" },
    ],
    tech: ["Firecrawl", "Crawl4AI", "Python", "LLM"],
    icon: faCodeBranch,
    gradient: "from-[#0ea5e9] to-[#38bdf8]",
  },
];

const MercuryMinds = () => {
  console.log("MercuryMinds component rendered");
  const scrollRef = useRef(null);
  const progressRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollProgress = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;

    const scrollRatio = el.scrollLeft / (el.scrollWidth - el.clientWidth);
    const newProgress = isNaN(scrollRatio) ? 0 : scrollRatio * 100;
    setProgress(newProgress);

    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  }, []);

  const scrollToProgress = useCallback((newProgress) => {
    const el = scrollRef.current;
    if (!el) return;

    const clampedProgress = Math.max(0, Math.min(100, newProgress));
    const scrollPosition = (clampedProgress / 100) * (el.scrollWidth - el.clientWidth);
    el.scrollLeft = scrollPosition;
    setProgress(clampedProgress);
  }, []);

  const handleDragStart = useCallback((e) => {
    setIsDragging(true);
    e.preventDefault();
  }, []);

  const handleDragMove = useCallback((clientX) => {
    if (!isDragging || !progressRef.current) return;

    const rect = progressRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    scrollToProgress(percentage);
  }, [isDragging, scrollToProgress]);

  const handleDragEnd = useCallback(() => {
    setIsDragging(false);
  }, []);

  // Mouse events
  useEffect(() => {
    const handleMouseMove = (e) => handleDragMove(e.clientX);
    const handleMouseUp = () => handleDragEnd();

    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, handleDragMove, handleDragEnd]);

  // Touch events
  useEffect(() => {
    const handleTouchMove = (e) => handleDragMove(e.touches[0].clientX);
    const handleTouchEnd = () => handleDragEnd();

    if (isDragging) {
      window.addEventListener("touchmove", handleTouchMove);
      window.addEventListener("touchend", handleTouchEnd);
    }

    return () => {
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [isDragging, handleDragMove, handleDragEnd]);

  // Scroll listener
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    el.addEventListener("scroll", updateScrollProgress);
    updateScrollProgress();

    return () => el.removeEventListener("scroll", updateScrollProgress);
  }, [updateScrollProgress]);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -400 : 400,
        behavior: "smooth",
      });
    }
  };

  const handleProgressClick = (e) => {
    if (progressRef.current) {
      const rect = progressRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const percentage = (x / rect.width) * 100;
      scrollToProgress(percentage);
    }
  };

  return (
    <section
      id="experience"
      className="bg-[#0a0a0a] text-white py-16 px-6 overflow-hidden transition-colors duration-500 relative z-10"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <h2 className="text-3xl font-bold mb-3 text-white border-l-4 border-[#0ea5e9] pl-4">
            Mercury Minds
          </h2>
          <div className="flex items-center gap-2 text-sm">
            <span className="text-[#38bdf8] font-medium">
              Data Analyst Trainee
            </span>
            <span className="text-gray-400">·</span>
            <span className="text-gray-300">
              Aug 2025 – Jan 2026
            </span>
            <span className="text-gray-400">·</span>
            <span className="text-gray-300">Chennai</span>
          </div>
        </div>

        {/* Experience Section Title */}
        <div className="text-center mb-6 p-4 bg-[#0ea5e9]/10 rounded-2xl border border-[#0ea5e9]/30">
          <p className="text-xl font-bold text-white">Experience</p>
          <p className="text-gray-300 mt-1 text-sm">My professional journey at Mercury Minds</p>
        </div>

        {/* Cards Container */}
        <div className="relative group">
          {/* Scroll Buttons */}
          <button
            onClick={() => scroll("left")}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white hover:bg-gray-200 text-black p-3 rounded-full shadow-lg transition-all duration-300 border-2 border-white hover:border-gray-300 ${canScrollLeft ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4 pointer-events-none"}`}
            aria-label="Scroll left"
          >
            <FontAwesomeIcon icon={faChevronLeft} className="text-sm" />
          </button>
          <button
            onClick={() => scroll("right")}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white hover:bg-gray-200 text-black p-3 rounded-full shadow-lg transition-all duration-300 border-2 border-white hover:border-gray-300 ${canScrollRight ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4 pointer-events-none"}`}
            aria-label="Scroll right"
          >
            <FontAwesomeIcon icon={faChevronRight} className="text-sm" />
          </button>

          {/* Scrollable Cards */}
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth py-4 px-2 -mx-2"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {mercuryProjects.map((proj, index) => (
              <div
                key={proj.id}
                className="min-w-[280px] bg-[#2a2a2a] rounded-2xl p-4 shadow-xl hover:shadow-3xl border border-white/10 hover:border-[#0ea5e9]/40 transition-all duration-300 transform hover:-translate-y-1"
              >
                {/* Icon & Title */}
                <div className="flex items-start gap-3 mb-3">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${proj.gradient} flex items-center justify-center shadow-xl flex-shrink-0`}>
                    <FontAwesomeIcon
                      icon={proj.icon}
                      className="text-white text-sm"
                    />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white leading-tight mb-1">
                      {proj.title}
                    </h3>
                    <p className="text-xs text-gray-300 font-medium">
                      {proj.subtitle}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-400 text-xs leading-relaxed mb-4">
                  {proj.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {proj.metrics.map((m, i) => (
                    <div
                      key={i}
                      className="bg-[#333] rounded-xl px-3 py-3 text-center border border-white/10 hover:border-[#0ea5e9]/60 transition-colors"
                    >
                      <p className={`font-bold text-sm ${m.color}`}>
                        {m.value}
                      </p>
                      <p className="text-gray-400 text-[10px] font-medium mt-0.5">
                        {m.label}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1.5">
                  {proj.tech.map((t, i) => (
                    <span
                      key={i}
                      className="bg-[#333] text-gray-300 text-[10px] font-medium px-3 py-1.5 rounded-lg border border-white/10 hover:border-[#0ea5e9]/60 transition-colors"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Draggable Progress Bar */}
        <div className="flex flex-col items-center justify-center mt-8 select-none">
          <p className="text-xs tracking-[0.2em] text-gray-400 font-medium mb-3 uppercase">
            Drag to Explore
          </p>
          <div
            ref={progressRef}
            className="relative w-full max-w-2xl h-2 rounded-full bg-[#333] cursor-pointer group/progress overflow-visible"
            onClick={handleProgressClick}
          >
            {/* Progress Fill */}
            <div
              className="absolute h-full rounded-full bg-gradient-to-r from-[#0ea5e9] to-[#38bdf8] transition-all duration-150 ease-out"
              style={{ width: `${progress}%` }}
            ></div>

            {/* Draggable Handle */}
            <div
              className={`absolute top-1/2 -translate-y-1/2 transition-all duration-150 ease-out ${isDragging ? "scale-125" : "scale-100 hover:scale-110"}`}
              style={{
                left: `${progress}%`,
                transform: "translate(-50%, -50%)",
                cursor: isDragging ? "grabbing" : "grab",
                zIndex: 10,
              }}
              onMouseDown={handleDragStart}
              onTouchStart={handleDragStart}
            >
              <div className="w-5 h-5 bg-[#0ea5e9] rounded-full flex items-center justify-center shadow-lg ring-4 ring-black group-hover/progress:ring-[#0ea5e9]/50 transition-all">
                <FontAwesomeIcon icon={faDiamond} className="text-white text-[10px]" />
              </div>
              {/* Tooltip */}
              <div className={`absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-black text-[10px] px-2 py-0.5 rounded opacity-0 transition-opacity duration-200 ${isDragging ? 'opacity-100' : 'group-hover/progress:opacity-100'}`}>
                {Math.round(progress)}%
              </div>
            </div>
          </div>
        </div>

        {/* Footer Text */}
        <p className="text-center text-gray-400 mt-6 text-xs">
          Intelligent Website Crawling · Hugging Face · Blogs · Repos · Documentation
        </p>
      </div>
    </section>
  );
};

export default MercuryMinds;
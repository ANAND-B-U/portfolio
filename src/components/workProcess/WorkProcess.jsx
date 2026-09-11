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
  faBrain,
  faChartLine,
  faNetworkWired,
  faFileAlt,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

// Helper to highlight specific words in description
const highlightText = (text, highlights) => {
  if (!highlights || highlights.length === 0) return text;
  const regex = new RegExp(`(${highlights.map(h => h.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`, 'gi');
  return text.split(regex).map((part, i) => 
    highlights.some(h => h.toLowerCase() === part.toLowerCase()) 
      ? <span key={i} className="text-[#2dd4bf] font-medium">{part}</span> 
      : part
  );
};

const mercuryProjects = [
  {
    id: 1,
    number: "01",
    title: "R&D – Intelligent Website Crawling",
    subtitle: "Agentic AI Platform",
    description: "Researched intelligent website crawling using Hugging Face, Firecrawl, and Crawl4AI. Designed context‑aware extraction pipelines for AI‑driven data enrichment and semantic indexing.",
    highlights: ["Hugging Face", "Firecrawl", "Crawl4AI", "context‑aware"],
    metrics: [
      { label: "Context Accuracy", value: "88%", suffix: "↑" },
      { label: "Data Coverage", value: "3x", suffix: "↑" },
    ],
    tech: ["Python", "Flask", "Firecrawl", "Crawl4AI"],
    icon: faBrain,
  },
  {
    id: 2,
    number: "02",
    title: "MarketoPulse CRM",
    subtitle: "Lead Management & Analytics",
    description: "Built a scalable CRM integrating lead tracking, analytics dashboards, and automated workflows. Enhanced data pipelines by 90% and improved engagement through intelligent insights, reducing latency by 42%.",
    highlights: ["90%", "42%"],
    metrics: [
      { label: "Data Efficiency", value: "90%", suffix: "↑" },
      { label: "Latency Cut", value: "42%", suffix: "↓" },
    ],
    tech: ["Python", "Flask", "SQL", "Power BI"],
    icon: faChartLine,
  },
  {
    id: 3,
    number: "03",
    title: "n8n Workflow Automation",
    subtitle: "Resource Tracking",
    description: "Built automated workflows for data crawling and enrichment using SERP API and Google Maps API. Integrated Firecrawl and Crawl4AI, achieving 70% automation efficiency and 2x API coverage.",
    highlights: ["70%", "2x"],
    metrics: [
      { label: "Automation Efficiency", value: "70%", suffix: "↑" },
      { label: "API Coverage", value: "2x", suffix: "↑" },
    ],
    tech: ["n8n", "SERP API", "Google Maps", "Firecrawl"],
    icon: faNetworkWired,
  },
  {
    id: 4,
    number: "04",
    title: "EliteScan Business Card OCR",
    subtitle: "AI‑Powered Document Parsing",
    description: "Developed an OCR system converting 500+ business cards into structured JSON via Flask API with fallback logic. Automated CRM sync through n8n, saving 15+ hours weekly.",
    highlights: ["500+", "15+ hours"],
    metrics: [
      { label: "Cards Processed", value: "500+", suffix: "" },
      { label: "Time Saved", value: "15+ hrs", suffix: "/wk" },
    ],
    tech: ["Python", "Flask", "n8n", "JSON"],
    icon: faFileAlt,
  },
  {
    id: 5,
    number: "05",
    title: "RAG Pipeline with Firecrawl",
    subtitle: "Retrieval‑Augmented Generation",
    description: "Implemented RAG pipelines using Firecrawl and Crawl4AI to enable semantic search and contextual data retrieval. Improved query relevance by 92% and response accuracy by 85%.",
    highlights: ["92%", "85%"],
    metrics: [
      { label: "Query Relevance", value: "92%", suffix: "↑" },
      { label: "Response Accuracy", value: "85%", suffix: "↑" },
    ],
    tech: ["Firecrawl", "Crawl4AI", "Python", "LLM"],
    icon: faSearch,
  },
];

const MercuryMinds = () => {
  const scrollRef = useRef(null);
  const progressRef = useRef(null);
  const progress = useRef(0);
  const [displayProgress, setDisplayProgress] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const animationFrameRef = useRef(null);

  const updateScrollProgress = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const scrollRatio = el.scrollLeft / (el.scrollWidth - el.clientWidth);
    const newProgress = isNaN(scrollRatio) ? 0 : scrollRatio * 100;
    progress.current = newProgress;
    if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    animationFrameRef.current = requestAnimationFrame(() => {
      setDisplayProgress(newProgress);
      setCanScrollLeft(el.scrollLeft > 10);
      setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
    });
  }, []);

  const scrollToProgress = useCallback((newProgress) => {
    const el = scrollRef.current;
    if (!el) return;
    const clampedProgress = Math.max(0, Math.min(100, newProgress));
    const scrollPosition = (clampedProgress / 100) * (el.scrollWidth - el.clientWidth);
    if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    animationFrameRef.current = requestAnimationFrame(() => {
      el.scrollLeft = scrollPosition;
      progress.current = clampedProgress;
      setDisplayProgress(clampedProgress);
    });
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

  const handleDragEnd = useCallback(() => setIsDragging(false), []);

  useEffect(() => {
    if (!isDragging) return;
    let rafId;
    const handleMouseMove = (e) => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => { handleDragMove(e.clientX); rafId = null; });
    };
    const handleMouseUp = () => handleDragEnd();
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseup", handleMouseUp, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [isDragging, handleDragMove, handleDragEnd]);

  useEffect(() => {
    if (!isDragging) return;
    let rafId;
    const handleTouchMove = (e) => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => { handleDragMove(e.touches[0].clientX); rafId = null; });
    };
    const handleTouchEnd = () => handleDragEnd();
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });
    return () => {
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [isDragging, handleDragMove, handleDragEnd]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => { updateScrollProgress(); ticking = false; });
        ticking = true;
      }
    };
    el.addEventListener("scroll", handleScroll, { passive: true });
    updateScrollProgress();
    return () => el.removeEventListener("scroll", handleScroll);
  }, [updateScrollProgress]);

  useEffect(() => {
    return () => { if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current); };
  }, []);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: direction === "left" ? -350 : 350, behavior: "smooth" });
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
    <section id="experience" className="bg-[#050505] text-white py-6 px-20 overflow-hidden relative">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              Mercury Minds
            </h2>
            <p className="text-[#8b5cf6] text-lg mt-2 font-medium">
              Data Analyst Trainee
            </p>
          </div>
          <div className="flex flex-col items-start md:items-end gap-2">
            <span className="text-gray-400 text-sm">Aug 2025 – Jan 2026</span>
            <span className="px-4 py-1.5 rounded-full border border-[#2dd4bf]/30 text-[#2dd4bf] text-xs font-medium bg-[#2dd4bf]/5">
              ⚡ Chennai
            </span>
          </div>
        </div>
        
        {/* Cards Container */}
        <div className="relative group">
          {/* Scroll Buttons */}
          <button
            onClick={() => scroll("left")}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-[#1a1d24] hover:bg-[#252830] text-white p-3 rounded-full shadow-lg transition-all duration-300 border border-white/10 ${canScrollLeft ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4 pointer-events-none"}`}
            aria-label="Scroll left"
          >
            <FontAwesomeIcon icon={faChevronLeft} className="text-sm" />
          </button>
          <button
            onClick={() => scroll("right")}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-[#1a1d24] hover:bg-[#252830] text-white p-3 rounded-full shadow-lg transition-all duration-300 border border-white/10 ${canScrollRight ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4 pointer-events-none"}`}
            aria-label="Scroll right"
          >
            <FontAwesomeIcon icon={faChevronRight} className="text-sm" />
          </button>

          {/* Scrollable Cards - REDUCED SIZE */}
          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto scrollbar-hide scroll-smooth py-4 px-2 -mx-2"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {mercuryProjects.map((proj) => (
              <div
                key={proj.id}
                className="min-w-[320px] max-w-[320px] bg-[#0a0c10] rounded-2xl p-6 border border-white/5 hover:border-white/10 transition-all duration-300 relative overflow-hidden group/card"
              >
                {/* Large Faded Number */}
                <div className="absolute top-4 right-6 text-5xl font-bold text-white/[0.03] select-none pointer-events-none">
                  {proj.number}
                </div>

                {/* Icon */}
                <div className="w-9 h-9 rounded-lg bg-[#1a1d24] border border-white/5 flex items-center justify-center mb-5">
                  <FontAwesomeIcon icon={proj.icon} className="text-[#8b5cf6] text-xs" />
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-lg font-bold text-white mb-1.5 leading-tight">
                  {proj.title}
                </h3>
                <p className="text-[#8b5cf6] text-xs font-medium mb-4">
                  {proj.subtitle}
                </p>

                {/* Description with Highlights */}
                <p className="text-gray-400 text-xs leading-relaxed mb-6">
                  {highlightText(proj.description, proj.highlights)}
                </p>

                {/* Metrics */}
                <div className="flex gap-2 mb-5">
                  {proj.metrics.map((m, i) => (
                    <div key={i} className="flex-1 bg-[#111318] border border-white/5 rounded-lg p-2.5 text-center">
                      <p className="text-[#2dd4bf] font-bold text-base mb-0.5">
                        {m.value}<span className="text-[10px] ml-0.5">{m.suffix}</span>
                      </p>
                      <p className="text-gray-500 text-[9px] font-medium uppercase tracking-wider">
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
                      className="bg-[#111318] text-gray-400 text-[10px] font-medium px-2.5 py-1.5 rounded-full border border-white/5 hover:border-white/20 hover:text-white transition-colors"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Drag to Explore */}
        <div className="flex items-center justify-between mt-12 select-none w-full max-w-2xl mx-auto">
          <div className="flex items-center gap-3">
            <p className="text-xs tracking-[0.2em] text-gray-500 font-medium uppercase">
              Drag to Explore
            </p>
          </div>
          
          <div
            ref={progressRef}
            className="relative flex-1 h-1 rounded-full bg-[#1a1d24] cursor-pointer group/progress ml-6"
            onClick={handleProgressClick}
          >
            {/* Progress Fill */}
            <div
              className="absolute h-full rounded-full bg-[#2dd4bf] transition-all duration-75 ease-out"
              style={{ width: `${displayProgress}%` }}
            ></div>

            {/* Draggable Handle */}
            <div
              className={`absolute top-1/2 -translate-y-1/2 -translate-x-1/2 transition-transform duration-75 ease-out ${
                isDragging ? "scale-125" : "scale-100"
              }`}
              style={{
                left: `${displayProgress}%`,
                cursor: isDragging ? "grabbing" : "grab",
                zIndex: 10,
              }}
              onMouseDown={handleDragStart}
              onTouchStart={handleDragStart}
            >
              <div className="w-4 h-4 bg-[#8b5cf6] rounded-full shadow-lg ring-2 ring-[#050505] group-hover/progress:ring-[#8b5cf6]/50 transition-all"></div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default MercuryMinds;
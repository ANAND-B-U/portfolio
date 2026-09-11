import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faLayerGroup,
  faBrain,
  faDatabase,
  faChartLine,
  faTools,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";

const skillsData = [
  {
    category: "Languages",
    icon: faCode,
    items: [
      { name: "Python", level: "Expert" },
      { name: "SQL", level: "Expert" },
      { name: "Java", level: "Advanced" },
      { name: "JavaScript", level: "Intermediate" },
    ],
  },
  {
    category: "Frameworks",
    icon: faLayerGroup,
    items: [
      { name: "FastAPI", level: "Expert" },
      { name: "Flask", level: "Advanced" },
      { name: "Gin", level: "Advanced" },
      { name: "LangChain", level: "Advanced" },
    ],
  },
  {
    category: "AI & Machine Learning",
    icon: faBrain,
    items: [
      { name: "Machine Learning", level: "Advanced" },
      { name: "Deep Learning", level: "Intermediate" },
      { name: "LLM / GenAI", level: "Advanced" },
      { name: "RAG Pipelines", level: "Advanced" },
      { name: "NLP", level: "Advanced" },
    ],
  },
  {
    category: "Databases",
    icon: faDatabase,
    items: [
      { name: "PostgreSQL", level: "Advanced" },
      { name: "MySQL", level: "Advanced" },
      { name: "MongoDB", level: "Advanced" },
      { name: "ChromaDB", level: "Advanced" },
    ],
  },
  {
    category: "Data Analytics & BI",
    icon: faChartLine,
    items: [
      { name: "Power BI", level: "Advanced" },
      { name: "Pandas & NumPy", level: "Expert" },
      { name: "Data Visualization", level: "Advanced" },
      { name: "ETL Pipelines", level: "Advanced" },
    ],
  },
  {
    category: "Tools & Automation",
    icon: faTools,
    items: [
      { name: "Git & GitHub", level: "Advanced" },
      { name: "Docker", level: "Intermediate" },
      { name: "n8n Workflow", level: "Advanced" },
      { name: "Firecrawl / Crawl4AI", level: "Advanced" },
    ],
  },
];

const getLevelColor = (level) => {
  switch (level.toLowerCase()) {
    case "expert":
      return "text-[#2dd4bf]"; // Teal for Expert
    case "advanced":
      return "text-[#38bdf8]"; // Blue for Advanced
    case "intermediate":
      return "text-gray-500";
    default:
      return "text-gray-500";
  }
};

const Skills = () => {
  return (
    <div className="content py-16 px-6 md:px-12 lg:px-20" id="skills">
      
      {/* Header - Matching the "04 TECH STACK" design */}
      <div className="max-w-6xl mx-auto mb-12">
        <div className="flex items-center gap-4 mb-4">
          <span className="text-[#8b5cf6] font-mono text-lg font-bold">04</span>
          <span className="text-gray-500 text-sm tracking-[0.25em] font-semibold uppercase">
            Tech Stack
          </span>
          <div className="flex-1 h-[1px] bg-white/10"></div>
        </div>
        <p className="text-sm md:text-base text-gray-500 max-w-2xl">
          A snapshot of my technical expertise across languages, frameworks,
          AI/ML tools, databases, and automation.
        </p>
      </div>

      {/* Skills Grid - 2 columns */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {skillsData.map((skill, index) => (
          <div
            key={index}
            className="bg-[#0a0c10] rounded-2xl p-6 border border-white/5 hover:border-[#0ea5e9]/30 transition-all duration-300 group"
          >
            {/* Category Header with Blue Icon */}
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-lg bg-[#0ea5e9]/10 border border-[#0ea5e9]/20 flex items-center justify-center group-hover:bg-[#0ea5e9]/20 transition-colors">
                <FontAwesomeIcon
                  icon={skill.icon}
                  className="text-[#38bdf8] text-sm"
                />
              </div>
              <h3 className="text-lg font-bold text-white group-hover:text-[#38bdf8] transition-colors">
                {skill.category}
              </h3>
            </div>

            {/* Skills List */}
            <div className="space-y-3">
              {skill.items.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between bg-[#111318] rounded-lg px-4 py-3 border border-white/5 hover:border-[#0ea5e9]/20 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      className="text-[#38bdf8] text-xs opacity-60"
                    />
                    <span className="text-sm font-medium text-gray-300">
                      {item.name}
                    </span>
                  </div>
                  <span
                    className={`text-[10px] font-semibold uppercase tracking-wider ${getLevelColor(
                      item.level
                    )}`}
                  >
                    {item.level}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
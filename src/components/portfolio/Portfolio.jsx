import Projects from "./Projects";
import card1 from "../../assets/images/portfolio-images/card-1.png";
import card2 from "../../assets/images/portfolio-images/card-2.png";
import card3 from "../../assets/images/portfolio-images/card-3.png";
import card4 from "../../assets/images/portfolio-images/card-4.png";
import card5 from "../../assets/images/portfolio-images/card-5.png";
import card6 from "../../assets/images/portfolio-images/card-6.png";

const projectData = [
  {
    id: 1,
    category: "Personal AI Assistant",
    title: "OwnGPT",
    description:
      "Containerized local LLM assistant built with Go and Ollama. Features streaming responses, conversation memory, and complete data privacy — all running locally.",
    tech: ["Go", "Ollama", "LLM", "Docker", "Streaming"],
    link: "https://github.com/ANAND-B-U/EliteScan-",
  },
  {
    id: 2,
    category: "Lead Management & Analytics",
    title: "MarketoPulse CRM",
    description:
      "Built a scalable CRM integrating lead tracking, analytics dashboards, and automated workflows. Enhanced data pipelines and improved engagement through intelligent insights.",
    tech: ["Python", "Flask", "SQL", "Power BI"],
    link: "#!",
  },
  {
    id: 3,
    category: "Data Crawling & Integration",
    title: "n8n Workflow Automation",
    description:
      "Built automated workflows for data crawling and enrichment using SERP API and Google Maps API. Integrated Firecrawl and Crawl4AI for context-aware extraction.",
    tech: ["n8n", "SERP API", "Google Maps", "Firecrawl", "Crawl4AI"],
    link: "#!",
  },
  {
    id: 4,
    category: "AI-Powered Document Parsing",
    title: "EliteScan Business Card OCR",
    description:
      "Developed an OCR system converting 500+ business cards into structured JSON via Flask API with fallback logic. Automated CRM sync through n8n, saving 15+ hours weekly.",
    tech: ["Python", "Flask", "n8n", "JSON", "OCR"],
    link: "https://github.com/ANAND-B-U/EliteScan-",
  },
  {
    id: 5,
    category: "Retrieval-Augmented Generation",
    title: "RAG Pipeline with Firecrawl",
    description:
      "Implemented RAG pipelines using Firecrawl and Crawl4AI to enable semantic search and contextual data retrieval for AI applications. Improved query relevance and response accuracy.",
    tech: ["Firecrawl", "Crawl4AI", "Python", "LLM", "Vector DB"],
    link: "#!",
  },
  {
    id: 6,
    category: "Predictive Analytics",
    title: "ML Forecasting Model",
    description:
      "Developed predictive models using machine learning algorithms to forecast trends and support data-driven decision making with high accuracy rates.",
    tech: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib"],
    link: "#!",
  },
];

const Portfolio = () => {
  return (
    <div 
      className="content mt-4 md:mt-2 mb-2 md:mb-2 px-2 md:px-10 lg:px-24" 
      id="portfolio"
    >
      {/* Header - Left Aligned "03 SELECTED WORK" */}
      <div className="mb-12">
        <div className="max-w-6xl">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-[#8b5cf6] font-mono text-lg font-bold">03</span>
            <span className="text-gray-500 text-sm tracking-[0.25em] font-semibold uppercase">
              Selected Work
            </span>
            <div className="flex-1 h-[1px] bg-gradient-to-r from-white/10 to-transparent"></div>
          </div>
        </div>
      </div>
      
      {/* Projects Grid */}
      <div className="mx-auto">
        <div className="grid xl:grid-cols-2 gap-6 w-full max-w-6xl">
          {projectData.map((data, index) => (
            <Projects data={data} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
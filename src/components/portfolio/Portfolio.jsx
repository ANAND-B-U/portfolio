import Projects from "./Projects";
import card1 from "../../assets/images/portfolio-images/card-1.png";
import card2 from "../../assets/images/portfolio-images/card-2.png";
import card3 from "../../assets/images/portfolio-images/card-3.png";
import card4 from "../../assets/images/portfolio-images/card-4.png";
import card5 from "../../assets/images/portfolio-images/card-5.png";
import card6 from "../../assets/images/portfolio-images/card-6.png";

const projectData = [
  {
    id: 1, image: card1, category: "Personal AI Assistant", title: "OwnGPT",
    description: "Containerized local LLM assistant built with Go and Ollama. Features streaming responses, conversation memory, and complete data privacy.",
    tech: ["Go", "Ollama", "LLM", "Docker", "Streaming"], link: "https://github.com/ANAND-B-U/EliteScan-",
  },
  {
    id: 2, image: card2, category: "Lead Management & Analytics", title: "MarketoPulse CRM",
    description: "Built a scalable CRM integrating lead tracking, analytics dashboards, and automated workflows. Enhanced data pipelines and improved engagement.",
    tech: ["Python", "Flask", "SQL", "Power BI"], link: "#!",
  },
  {
    id: 3, image: card3, category: "Data Crawling & Integration", title: "n8n Workflow Automation",
    description: "Built automated workflows for data crawling and enrichment using SERP API and Google Maps API. Integrated Firecrawl and Crawl4AI.",
    tech: ["n8n", "SERP API", "Google Maps", "Firecrawl", "Crawl4AI"], link: "#!",
  },
  {
    id: 4, image: card4, category: "AI-Powered Document Parsing", title: "EliteScan Business Card OCR",
    description: "Developed an OCR system converting 500+ business cards into structured JSON via Flask API with fallback logic. Automated CRM sync through n8n.",
    tech: ["Python", "Flask", "n8n", "JSON", "OCR"], link: "https://github.com/ANAND-B-U/EliteScan-",
  },
  {
    id: 5, image: card5, category: "Retrieval-Augmented Generation", title: "RAG Pipeline with Firecrawl",
    description: "Implemented RAG pipelines using Firecrawl and Crawl4AI to enable semantic search and contextual data retrieval for AI applications.",
    tech: ["Firecrawl", "Crawl4AI", "Python", "LLM", "Vector DB"], link: "#!",
  },
  {
    id: 6, image: card6, category: "Predictive Analytics", title: "ML Forecasting Model",
    description: "Developed predictive models using machine learning algorithms to forecast trends and support data-driven decision making with high accuracy rates.",
    tech: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib"], link: "#!",
  },
];

const Portfolio = () => {
  return (
    // Dark background to match the cards
    <div className="w-full py-20 px-4 md:px-10 lg:px-24 bg-[#0f111a] text-white" id="portfolio">
      
      {/* Header - Left Aligned */}
      <div className="mb-16 max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-4">
          <span className="text-[#8b5cf6] font-mono text-xl font-bold">03</span>
          <h2 className="text-white text-2xl font-bold tracking-tight">Selected Work</h2>
        </div>
        <p className="text-gray-400 ml-12 max-w-2xl text-sm">
          A curated collection of projects showcasing my expertise in AI, automation, and data-driven solutions.
        </p>
        <div className="mt-6 ml-12 w-24 h-1 bg-[#8b5cf6] rounded-full"></div>
      </div>
      
      {/* Projects Grid */}
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {projectData.map((data) => (
            <Projects data={data} key={data.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
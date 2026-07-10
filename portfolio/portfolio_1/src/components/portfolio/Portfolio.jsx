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
    image: card1,
    category: "MACHINE LEARNING",
    title: "AI-Powered Resume Parser",
    description:
      "Built an intelligent resume parsing system using NLP and machine learning to extract key information from resumes automatically.",
    link: "#!",
  },
  {
    id: 2,
    image: card2,
    category: "DATA ANALYTICS",
    title: "Sales Dashboard",
    description:
      "Developed an interactive sales analytics dashboard using Flask and Python with real-time data visualization and insights.",
    link: "#!",
  },
  {
    id: 3,
    image: card3,
    category: "NLP",
    title: "Sentiment Analysis Tool",
    description:
      "Created a sentiment analysis application using NLP techniques to analyze customer feedback and social media sentiment.",
    link: "#!",
  },
  {
    id: 4,
    image: card4,
    category: "WEB DEVELOPMENT",
    title: "E-Commerce Platform",
    description:
      "Developed a full-stack e-commerce platform with Flask backend, featuring user authentication, product management, and payment integration.",
    link: "#!",
  },
  {
    id: 5,
    image: card5,
    category: "AUTOMATION",
    title: "Data Extraction Pipeline",
    description:
      "Built an automated data extraction pipeline using Python to scrape and process data from multiple sources efficiently.",
    link: "#!",
  },
  {
    id: 6,
    image: card6,
    category: "AI/ML",
    title: "Predictive Analytics Model",
    description:
      "Developed predictive models using machine learning algorithms to forecast trends and support data-driven decision making.",
    link: "#!",
  },
  {
    id: 7,
    image: card1,
    category: "UI/UX DESIGN",
    title: "Design System Library",
    description:
      "Created a reusable design system for consistent brand experiences across web applications, including components and tokens.",
    link: "#!",
  },
  {
    id: 8,
    image: card2,
    category: "MOBILE APP",
    title: "Task Management App",
    description:
      "Built a cross-platform task manager with offline support, notifications, and an intuitive interface for productivity workflows.",
    link: "#!",
  },
];

const Portfolio = () => {
  return (
    <div
      className="content mt-10 md:mt-15 xl:mt-25 mb-10 md:mb-25 max-xxl:p-2"
      id="portfolio"
    >
      <div className="xl:mb-12 mb-4">
        <div className="max-sm:px-2 text-center mx-auto max-w-144.25">
          <p className="section-title text-[32px] md:text-[36px]">Portfolio</p>
          <p className="font-normal text-[16px] max-sm:text-[13px] pt-5 text-gray-400">
            Here's a selection of my recent work, showcasing my skills in
            creating user-centric and visually appealing interfaces.
          </p>
        </div>
      </div>
      <div className="mx-auto flex justify-center">
        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-6 w-full">
          {projectData.map((data, index) => (
            <Projects data={data} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

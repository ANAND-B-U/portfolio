import "./introduction.css";
import InformationSummary from "./InformationSummary";

// Information summary data
const informationSummaryData = [
  {
    id: 1,
    title: "Experience",
    description: "2+ Y.",
  },
  {
    id: 2,
    title: "Projects Completed",
    description: "15+",
  },
  {
    id: 3,
    title: "Certifications",
    description: "10+",
  },
];

const Introduction = () => {
  return (
    <div
      className="flex max-lg:flex-col-reverse sm:justify-between pt-2 lg:pt-6 lg:mb-8 max-xl:gap-2 p-2 max-xxl:px-4"
      id="introduction"
    >
      <div className="w-full flex flex-col justify-between max-lg:text-center">
        <div className="pt-4 me-4 w-full lg:w-auto transition-all duration-500">
          <p className="text-3xl sm:text-4xl xl:text-4xl font-bold w-full leading-tight">
            Engineering the
            <span className="text-nowrap shrink-0 inline-block w-full">
              Future with
            </span>
            <span className="text-nowrap shrink-0 inline-block w-full">
              Backend & AI
            </span>
          </p>
          <p className="text-sm sm:text-[15px] lg:text-[16px] my-4 leading-relaxed">
            Entry‑level Data and AI professional with hands‑on experience in data extraction, transformation and analysis,
            LLM‑based data workflows, and automation using Python, Flask and SQL. Seeking opportunities in data
            engineering and analytical development.

          </p>
          <p className="text-center lg:text-start">
            <a
              className="btn-accent btn btn-xs text-white px-3 py-2 text-[12px]"
              href="mailto:b.aanand2233@gmail.com"
            >
              Say Hello!
            </a>
          </p>
        </div>
        <div className="mx-auto lg:mx-0 relative">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
            {informationSummaryData.map((item) => (
              <InformationSummary key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;

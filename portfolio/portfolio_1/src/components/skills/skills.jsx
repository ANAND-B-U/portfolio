import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import MonoSkill from "./MonoSkill";
import "swiper/css";
import "swiper/css/pagination";
import "./skills.css";

const custom_breakpoints = {
  640: { slidesPerView: 2, spaceBetween: 15 },
  768: { slidesPerView: 3, spaceBetween: 15 },
  1220: { slidesPerView: 4, spaceBetween: 24 },
};

const skillsData = [
  {
    category: "Languages",
    items: [
      { name: "Python", level: "Expert" },
      { name: "Go", level: "Expert" },
      { name: "SQL", level: "Advanced" },
    ],
  },
  {
    category: "Frameworks",
    items: [
      { name: "FastAPI", level: "Expert" },
      { name: "Gin", level: "Advanced" },
      { name: "Flask", level: "Advanced" },
    ],
  },
  {
    category: "AI & Machine Learning",
    items: [
      { name: "Machine Learning", level: "Advanced" },
      { name: "Deep Learning", level: "Intermediate" },
      { name: "LLM / GenAI", level: "Advanced" },
      { name: "RAG", level: "Advanced" },
      { name: "NLP", level: "Advanced" },
      { name: "Prompt Engineering", level: "Advanced" },
      { name: "AutoGen", level: "Advanced" },
      { name: "LangChain", level: "Intermediate" },
    ],
  },
  {
    category: "Databases",
    items: [
      { name: "PostgreSQL", level: "Advanced" },
      { name: "MySQL", level: "Advanced" },
      { name: "MongoDB", level: "Advanced" },
      { name: "Redis", level: "Intermediate" },
      { name: "ChromaDB", level: "Advanced" },
    ],
  },
];

const Skills = () => {
  return (
    <div className="content py-14 px-2 relative" id="skills">
      <div className="max-w-135 text-center mx-auto pb-10">
        <p className="section-title pb-4 text-[24px]">Skills</p>
        <p className="text-xs xs:text-[15px] md:text-base text-gray-400">
          A snapshot of my technical expertise across languages, frameworks,
          AI/ML tools, and databases.
        </p>
      </div>
      <Swiper
        grabCursor={true}
        breakpoints={custom_breakpoints}
        pagination={{ clickable: true }}
        modules={[Pagination]}
      >
        {skillsData.map((data, index) => (
          <SwiperSlide key={index} className="mb-10">
            <MonoSkill data={data} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Skills;

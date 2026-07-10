import Roles from "./Roles";

const rolesData = [
  {
    id: 1,
    title: "Machine Learning & AI",
    description:
      "I develop intelligent systems using Python, TensorFlow, and scikit-learn to build predictive models, classification systems, and AI-powered solutions.",
  },
  {
    id: 2,
    title: "Data Analytics & Visualization",
    description:
      "I transform raw data into actionable insights using SQL, Pandas, and visualization tools like Matplotlib and Power BI to drive informed decision-making.",
  },
  {
    id: 3,
    title: "Web Development",
    description:
      "I build full-stack web applications using Flask, React, and modern JavaScript frameworks, creating responsive and scalable solutions.",
  },
];

const Profession = () => {
  return (
    <div
      className="content grid md:grid-cols-2 max-xxl:px-4 xxl:px-2 py-8 md:py-10 lg:py-16"
      id="services"
    >
      <div className="flex flex-col justify-between h-fit md:pe-8 lg:pe-35.75 max-md:text-center my-auto">
        <p className="section-title max-md:text-center text-[24px]">What I do?</p>
        <div className="mt-4 text-[13px]">
          <p className="text-xs sm:text-sm font-normal text-gray-400 mb-4">
            I specialize in designing user experiences, crafting engaging
            interfaces, and building robust web applications that deliver value
            and usability.
          </p>
          <p className="text-xs sm:text-lg font-normal text-gray-400">
            My approach combines creativity and technical expertise to deliver
            solutions that are both visually appealing and highly functional for
            users.
          </p>
        </div>
        <a
          href="#!"
          className="mt-5 md:mt-8 btn btn-accent text-white w-fit md:py-2 md:px-4 text-[12px] sm:text-[14px] font-semibold max-md:mx-auto max-md:mb-5"
        >
          Say Hello!
        </a>
      </div>
      <div className="">
        {rolesData.map((role, index) => (
          <Roles role={role} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Profession;

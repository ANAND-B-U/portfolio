import person from "../../assets/images/person2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faLanguage,
  faBriefcase,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";

const Profile = () => {
  return (
    <div
      className="relative w-full mx-auto z-10 rounded-2xl bg-[#111318] text-white drop-shadow-2xl max-xl:mb-5 xl:p-10 lg:p-8 md:p-7 sm:p-5 p-4 hover-lift border border-white/10"
    >
      <div className="mb-8">
        <p className="text-xs uppercase tracking-[0.45em] text-[#5f8eea] mb-3">02 ABOUT</p>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-wide">
          I build modern AI and data products
          <span className="block bg-gradient-to-r from-[#60a5fa] via-[#8b5cf6] to-[#22d3ee] text-transparent bg-clip-text">
            that help teams make smarter decisions.
          </span>
        </h2>
      </div>

      <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8">
        <div className="space-y-6">
          <div className="rounded-3xl border border-white/10 bg-[#0f1116] p-6 text-gray-300 shadow-[0_20px_50px_rgba(0,0,0,0.2)]">
            <p className="text-sm sm:text-base leading-relaxed">
              B.Tech graduate in Artificial Intelligence and Data Science with hands-on experience in Python, SQL, Flask, Machine Learning, NLP, and Data Analytics. I build clean, scalable systems that turn raw data into actionable insights.
            </p>
            <p className="mt-4 text-sm sm:text-base leading-relaxed text-gray-400">
              Specialized in AI applications, data engineering, analytics workflows, and automation solutions that help teams make better decisions faster.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                title: "Location",
                value: "Chennai, India",
                icon: faMapMarkerAlt,
              },
              {
                title: "Languages",
                value: "English · Tamil · Hindi · French",
                icon: faLanguage,
              },
              {
                title: "Status",
                value: "Open to Work",
                icon: faBriefcase,
              },
              {
                title: "Education",
                value: "B.Tech AI & DS",
                icon: faGraduationCap,
              },
            ].map((item, index) => (
              <div
                key={index}
                className="rounded-3xl p-4 bg-[#16181f] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.2)]"
              >
                <FontAwesomeIcon icon={item.icon} className="text-[#60a5fa] text-xl mb-3" />
                <p className="text-[11px] sm:text-xs text-gray-400 uppercase tracking-[0.25em] mb-2">
                  {item.title}
                </p>
                <p className="font-semibold text-white text-sm sm:text-base">{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-[#0f1116] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.2)]">
          <div className="w-full aspect-[4/5] overflow-hidden rounded-3xl border border-white/10 bg-[#0c0d10]">
            <img
              className="w-full h-full object-cover rounded-3xl"
              src={person}
              alt="Profile portrait"
            />
          </div>
          <div className="mt-6 space-y-4">
            <div className="rounded-3xl border border-white/10 bg-[#111318] p-4">
              <p className="text-xs uppercase tracking-[0.25em] text-[#5f8eea] mb-2">Expertise</p>
              <p className="text-sm text-gray-300">
                AI systems, data analytics, automation, NLP, and end-to-end product delivery.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-3xl border border-white/10 bg-[#111318] p-4 text-center">
                <p className="text-sm text-gray-400 uppercase tracking-[0.25em] mb-2">Projects</p>
                <p className="text-xl font-semibold text-white">15+</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-[#111318] p-4 text-center">
                <p className="text-sm text-gray-400 uppercase tracking-[0.25em] mb-2">Certifications</p>
                <p className="text-xl font-semibold text-white">10+</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

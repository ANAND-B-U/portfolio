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
      className="relative w-full mx-auto z-10 rounded-2xl bg-[#111318] text-white drop-shadow-2xl max-xl:mb-4 xl:p-6 lg:p-5 md:p-4 sm:p-4 p-3 hover-lift border border-white/10"
    >
      {/* Header */}
      <div className="mb-6">
        <p className="text-[10px] uppercase tracking-[0.35em] text-[#5f8eea] mb-2">02 ABOUT</p>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-snug tracking-wide">
          I build modern AI and data products
          <span className="block bg-gradient-to-r from-[#60a5fa] via-[#8b5cf6] to-[#22d3ee] text-transparent bg-clip-text">
            that help teams make smarter decisions.
          </span>
        </h2>
      </div>

      {/* Main Grid */}
      <div className="grid lg:grid-cols-[1fr_0.8fr] gap-4">
        {/* Left Section */}
        <div className="space-y-4">
          <div className="rounded-2xl border border-white/10 bg-[#0f1116] p-4 text-gray-300 shadow-[0_10px_30px_rgba(0,0,0,0.2)]">
            <p className="text-sm leading-relaxed">
              B.Tech graduate in Artificial Intelligence and Data Science with hands-on experience in Python, SQL, Flask, Machine Learning, NLP, and Data Analytics. I build clean, scalable systems that turn raw data into actionable insights.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-gray-400">
              Specialized in AI applications, data engineering, analytics workflows, and automation solutions that help teams make better decisions faster.
            </p>
          </div>

          {/* Info Cards + Expertise */}
          <div className="grid sm:grid-cols-2 gap-3">
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
                className="rounded-2xl p-3 bg-[#16181f] border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.2)]"
              >
                <FontAwesomeIcon icon={item.icon} className="text-[#60a5fa] text-lg mb-2" />
                <p className="text-[10px] text-gray-400 uppercase tracking-[0.2em] mb-1">
                  {item.title}
                </p>
                <p className="font-semibold text-white text-sm">{item.value}</p>
              </div>
            ))}

            {/* Expertise Card */}
            <div className="rounded-2xl p-3 bg-[#16181f] border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.2)] sm:col-span-2">
              <p className="text-[10px] text-[#5f8eea] uppercase tracking-[0.2em] mb-1">
                Expertise
              </p>
              <p className="text-sm text-gray-300">
                AI systems, data analytics, automation, NLP, and end-to-end product delivery.
              </p>
            </div>
          </div>
        </div>

        {/* Right Section - Fixed Image */}
        <div className="rounded-2xl border border-white/10 bg-[#0f1116] p-4 shadow-[0_10px_30px_rgba(0,0,0,0.2)] flex justify-center items-center">
          <div className="w-[220px] h-[280px] overflow-hidden rounded-2xl border border-white/10 bg-[#0c0d10]">
            <img
              className="w-full h-full object-cover rounded-2xl"
              src={person}
              alt="Profile portrait"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

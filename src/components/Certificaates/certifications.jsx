import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faNetworkWired,
  faShieldHalved,
  faSquareRootVariable,
  faCloud,
  faBriefcase,
  faExternalLinkAlt,
  faFingerprint,
} from "@fortawesome/free-solid-svg-icons";

const Certificates = () => {
  // ===== TECHNICAL CERTIFICATIONS =====
  const technicalCerts = [
    {
      id: 1,
      title: "Networking Essentials",
      issuer: "Cisco Networking Academy",
      date: "Apr 2023",
      icon: faNetworkWired,
      link: "#", // Add your credential URL here
    },
    {
      id: 2,
      title: "Cybersecurity Essentials",
      issuer: "Cisco",
      date: "Nov 2023",
      icon: faShieldHalved,
      link: "#",
    },
    {
      id: 3,
      title: "Data Science Math Skills",
      issuer: "Duke University",
      date: "Feb 2022",
      credentialId: "6C73NZXBWU9U",
      icon: faSquareRootVariable,
      link: "https://www.coursera.org/account/accomplishments/verify/6C73NZXBWU9U",
    },
    {
      id: 4,
      title: "AWS Workshop",
      issuer: "HCL GUVI",
      date: "Sep 2024",
      icon: faCloud,
      link: "https://drive.google.com/file/d/1McfhQ7_crPg4W_jL7c_gRKBm0CTl6B-n/view",
    },
  ];

  // ===== PROFESSIONAL EXPERIENCE =====
  const professionalCerts = [
    {
      id: 1,
      title: "Data Scientist Intern",
      issuer: "EVOASTRA VENTURES PVT LTD",
      date: "Aug 2025",
      icon: faBriefcase,
      link: "#", // Add LinkedIn post or company link here
    },
    // You can easily add more internships, volunteer work, or soft-skill certs here later
  ];

  // Reusable Certificate Card Component
  const CertCard = ({ cert, accentColor }) => (
    <a
      href={cert.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex flex-col justify-between bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-white/30 hover:bg-white/10 transition-all duration-300"
    >
      {/* Icon & External Link */}
      <div className="flex items-start justify-between mb-4">
        <div
          className={`p-3 rounded-xl ${accentColor.bg} ${accentColor.text} group-hover:scale-105 transition-transform`}
        >
          <FontAwesomeIcon icon={cert.icon} className="text-xl" />
        </div>
        <FontAwesomeIcon
          icon={faExternalLinkAlt}
          className="text-gray-500 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        />
      </div>

      {/* Content */}
      <div>
        <h3 className="text-white font-semibold text-base mb-1 group-hover:text-white transition-colors">
          {cert.title}
        </h3>
        <p className="text-gray-400 text-xs mb-3">{cert.issuer}</p>
        
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-[10px] uppercase tracking-wider text-gray-500 font-medium border border-white/10 px-2 py-1 rounded-md">
            {cert.date}
          </span>
          
          {/* Conditionally render Credential ID if it exists */}
          {cert.credentialId && (
            <span className="flex items-center gap-1 text-[10px] uppercase tracking-wider text-gray-500 font-medium border border-white/10 px-2 py-1 rounded-md">
              <FontAwesomeIcon icon={faFingerprint} className="text-[8px]" />
              {cert.credentialId}
            </span>
          )}
        </div>
      </div>
    </a>
  );

  return (
    <div className="relative py-12 mx-auto max-w-5xl px-4">
      {/* Background Glow */}
      <div className="absolute inset-x-1/4 -top-14 h-40 rounded-full bg-[#0ea5e9]/20 blur-3xl"></div>

      <div className="relative rounded-[40px] border border-white/10 bg-[#050712] px-6 py-10 md:px-10 md:py-14 shadow-[0_40px_120px_rgba(0,0,0,0.35)]">
        
        {/* Main Header */}
        <div className="text-center mb-12">
          <h2 className="text-white font-semibold text-2xl sm:text-3xl md:text-4xl pb-4">
            Certifications & Experience
          </h2>
          <p className="text-gray-400 text-xs sm:text-sm font-normal max-w-lg mx-auto">
            A blend of technical expertise and hands-on professional experience that shapes my approach to data and AI.
          </p>
        </div>

        {/* ===== TECHNICAL SECTION ===== */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-8 w-1 rounded-full bg-[#0ea5e9]"></div>
            <h3 className="text-white text-lg md:text-xl font-semibold">
              Technical Certifications
            </h3>
            <span className="text-xs text-gray-500 border border-white/10 px-2 py-1 rounded-md">
              {technicalCerts.length} earned
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {technicalCerts.map((cert) => (
              <CertCard
                key={cert.id}
                cert={cert}
                accentColor={{
                  bg: "bg-[#0ea5e9]/10",
                  text: "text-[#0ea5e9]",
                }}
              />
            ))}
          </div>
        </div>

        {/* ===== PROFESSIONAL SECTION ===== */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="h-8 w-1 rounded-full bg-[#f59e0b]"></div>
            <h3 className="text-white text-lg md:text-xl font-semibold">
              Professional Experience
            </h3>
            <span className="text-xs text-gray-500 border border-white/10 px-2 py-1 rounded-md">
              {professionalCerts.length} role(s)
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {professionalCerts.map((cert) => (
              <CertCard
                key={cert.id}
                cert={cert}
                accentColor={{
                  bg: "bg-[#f59e0b]/10",
                  text: "text-[#f59e0b]",
                }}
              />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Certificates;
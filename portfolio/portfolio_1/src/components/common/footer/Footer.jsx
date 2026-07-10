import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SocialMedia from "../socialMedia/SocialMedia";

const copyrightYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="bg-[#050608] border-t border-white/10 text-neutral-200 py-6 px-6">
      <div className="flex flex-col gap-4 sm:flex-row items-center justify-between max-w-6xl mx-auto">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-lg font-bold text-white">
            A
          </div>
          <p className="text-sm sm:text-base text-gray-300 text-center sm:text-left">
            Designed & Built by <span className="text-white">Anand B</span> • © {copyrightYear}
          </p>
        </div>

        <div className="flex items-center gap-4">
          <SocialMedia />
          <a
            href="#home"
            className="inline-flex items-center justify-center w-11 h-11 rounded-2xl bg-gradient-to-br from-[#0ea5e9] to-[#38bdf8] text-white shadow-lg shadow-[#0ea5e9]/20"
            aria-label="Back to top"
          >
            <FontAwesomeIcon icon={faAngleUp} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

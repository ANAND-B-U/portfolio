import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ViewCount from "../viewCount/ViewCount";

const navItems = [
  { id: 1, name: "Home", url: "home" },
  { id: 2, name: "About", url: "profile" },
  { id: 3, name: "Experience", url: "experience" },
  { id: 4, name: "Work", url: "work" },
  { id: 5, name: "Skills", url: "skills" },
  { id: 6, name: "Contact", url: "contact" },
];

const handleMenuClick = () => {
  if (document.activeElement instanceof HTMLElement) {
    document.activeElement.blur();
  }
};

const NavBar = () => {
  const [position, setPosition] = useState(0);
  const [isDark, setIsDark] = useState(true);
  const [activeSection, setActiveSection] = useState("home");

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  useEffect(() => {
    const theme = isDark ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", theme);
    document.body.setAttribute("data-theme", theme);
  }, [isDark]);

  useEffect(() => {
    const handleScroll = () => setPosition(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => document.getElementById(item.url));
      const scrollPosition = window.scrollY + 150;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].url);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`sticky top-0 z-50 transition-all duration-500 ${position > 50
        ? "bg-black/98 backdrop-blur-xl border-b border-white/15 shadow-2xl"
        : "bg-black/90 backdrop-blur-md border-b border-white/5"
        }`}
    >
      <div className="navbar flex justify-between items-center mx-auto content min-h-[65px] px-4">
        {/* Left Logo (unchanged) */}
        <Link
          to="home"
          smooth={true}
          duration={600}
          className="flex items-center gap-3 cursor-pointer"
        >
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white text-black flex items-center justify-center text-sm font-bold shadow-lg transition-transform duration-300 border border-white">
            A
          </div>
          <p className="text-xl sm:text-[22px] my-auto font-bold tracking-wider text-white">
            ANAND B
          </p>
        </Link>

        {/* Center Menu */}
        <ul className="hidden lg:flex gap-4 text-[14px] font-semibold">
          {navItems.map((item) => (
            <li key={item.id} onMouseDown={(e) => e.preventDefault()}>
              <Link
                onClick={handleMenuClick}
                to={item.url}
                smooth={true}
                duration={600}
                offset={-120}
                className={`px-3 py-2 mx-1 rounded-full font-semibold transition-all duration-300 hover:scale-105 ${activeSection === item.url
                  ? "bg-[#0ea5e9] text-white"
                  : "text-white hover:text-white hover:bg-[#0ea5e9]"
                  }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right End */}
        <div className="flex items-center gap-4">
          {/* Premium Download Button */}
          <a
            href="/ANAND_B_Resume.pdf"
            download="ANAND_B_Resume.pdf"
            className="px-4 py-2 rounded-full bg-[#0ea5e9] text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out border border-[#0ea5e9] hover:bg-[#0284c7] text-[13px]"
          >
            Resume
          </a>

          <ViewCount />

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="btn btn-ghost btn-circle border-2 border-white hover:bg-white hover:text-black transition text-xl text-white hover:scale-110"
            title="Toggle Theme"
          >
            <FontAwesomeIcon icon={isDark ? faSun : faMoon} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

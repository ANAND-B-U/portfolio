import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ViewCount from "../viewCount/ViewCount";
import logoImg from "./logo.png"; 

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
  const [scrollProgress, setScrollProgress] = useState(0);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  useEffect(() => {
    const theme = isDark ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", theme);
    document.body.setAttribute("data-theme", theme);
  }, [isDark]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setPosition(scrollY);
      
      // Calculate scroll progress percentage
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };
    
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
    <div className="sticky top-0 z-50">
      {/* Scroll Progress Bar - Thin line at the very top */}
      <div className="w-full h-1 bg-gray-800/50 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 transition-all duration-150 ease-out"
          style={{ 
            width: `${scrollProgress}%`,
            boxShadow: "0 0 10px rgba(6, 182, 212, 0.5)"
          }}
        />
      </div>

      {/* Main Navbar */}
      <div
        className={`w-full backdrop-blur-xl border-b border-white/5 transition-all duration-500 ${
          position > 50
            ? "bg-black/80"
            : "bg-transparent"
        }`}
      >
        {/* Main Container: Full width with side padding */}
        <div className="w-full px-4 sm:px-8 py-4">
          
          {/* 3-Column Grid Layout */}
          <div className="grid grid-cols-3 items-center">
            
          {/* 1. LEFT: Logo */}
          <div className="flex justify-start">
            <Link
              to="home"
              smooth={true}
              duration={600}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <div className="w-14 h-14 sm:w-12 sm:h-12 rounded-full bg-black flex items-center justify-center transition-transform duration-300 hover:scale-110 overflow-hidden relative">
                <img 
                  src={logoImg} 
                  alt="Anand B Logo" 
                  className="w-full h-full object-cover mix-blend-screen opacity-90 group-hover:opacity-100 transition-opacity" 
                />
              </div>
            </Link>
          </div>

          {/* 2. CENTER: The Oval Navbar */}
          <div className="flex justify-center">
            <div className="hidden lg:flex items-center bg-[#0a0a0a]/90 border border-white/10 rounded-full px-2 py-1.5 shadow-[0_0_15px_rgba(0,0,0,0.5)] backdrop-blur-md">
              <ul className="flex items-center gap-1 text-[14px] font-semibold">
                {navItems.map((item) => {
                  const isActive = activeSection === item.url;
                  return (
                    <li key={item.id} onMouseDown={(e) => e.preventDefault()}>
                      <Link
                        onClick={handleMenuClick}
                        to={item.url}
                        smooth={true}
                        duration={600}
                        offset={-120}
                        className={`px-4 py-2 rounded-full font-medium transition-all duration-300 cursor-pointer ${
                          isActive
                            ? "breathing-effect"
                            : "text-gray-400 hover:text-white hover:bg-white/5"
                        }`}
                      >
                        {item.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          {/* 3. RIGHT: Actions */}
          <div className="flex justify-end">
            <div className="flex items-center gap-4">
              <a
                href="/ANAND_B_Resume.pdf"
                download="ANAND_B_Resume.pdf"
                className="px-5 py-2 rounded-full bg-[#0ea5e9] text-white font-semibold shadow-lg hover:shadow-[0_0_20px_rgba(14,165,233,0.5)] hover:scale-105 transition-all duration-300 ease-in-out border border-[#0ea5e9] hover:bg-[#0284c7] text-[13px]"
              >
                Resume
              </a>

              <ViewCount />

              <button
                onClick={toggleTheme}
                className="w-10 h-10 rounded-full flex items-center justify-center border border-white/20 hover:bg-white/10 hover:text-white transition text-lg text-gray-400 hover:scale-110"
                title="Toggle Theme"
              >
                <FontAwesomeIcon icon={isDark ? faSun : faMoon} />
              </button>
            </div>
          </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
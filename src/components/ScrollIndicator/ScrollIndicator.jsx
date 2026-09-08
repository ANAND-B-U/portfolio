import { useEffect, useState } from "react";

const ScrollIndicator = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setVisible(false);
      } else {
        setVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-8 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center gap-3 transition-opacity duration-700 ${
        visible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      {/* Breathing Line */}
      <div className="relative w-[2px] h-16 overflow-hidden rounded-full">
        {/* Background track */}
        <div className="absolute inset-0 bg-white/10 rounded-full" />
        
        {/* Animated glowing line */}
        <div className="absolute top-0 left-0 w-full h-full animate-scroll-line rounded-full" />
      </div>

      {/* Scroll Text */}
      <span className="text-[11px] tracking-[0.35em] text-white/30 font-light uppercase animate-scroll-text">
        Scroll
      </span>
    </div>
  );
};

export default ScrollIndicator;
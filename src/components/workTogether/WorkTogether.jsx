import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const WorkTogether = () => {
  return (
    <div className="relative py-12 mx-auto max-w-4xl px-4">
      <div className="absolute inset-x-1/4 -top-14 h-40 rounded-full bg-[#0ea5e9]/20 blur-3xl"></div>
      <div className="relative rounded-[40px] border border-white/10 bg-[#050712] px-8 py-14 shadow-[0_40px_120px_rgba(0,0,0,0.35)]">
        <div className="text-center">
          <p className="text-white md:font-semibold text-xl sm:text-2xl md:text-3xl pb-6">
            Ready to build something exceptional?
          </p>
          <p className="text-gray-400 text-xs sm:text-sm font-normal text-center pb-6">
            Share your vision and I'll help turn it into a polished digital experience.
          </p>
          <a
            href="#!"
            className="btn btn-accent px-4 py-2 text-[12px] md:text-[14px]"
          >
            Let's work Together
          </a>
        </div>
      </div>
    </div>
  );
};

export default WorkTogether;

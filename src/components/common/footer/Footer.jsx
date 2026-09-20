import SocialMedia from "../socialMedia/SocialMedia";

const copyrightYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="bg-[#050608] border-t border-white/10 text-neutral-200 py-2 px-6">
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
        </div>
      </div>
    </footer>
  );
};

export default Footer;
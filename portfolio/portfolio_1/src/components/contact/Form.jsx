const telegramSVG = (
  <svg
    className="w-5 h-5"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20.34 9.32L6.34 2.32C5.78 2.05 5.16 1.95 4.55 2.04C3.94 2.13 3.38 2.41 2.93 2.84C2.48 3.26 2.18 3.82 2.06 4.42C1.94 5.03 2.01 5.66 2.26 6.22L4.66 11.59C4.71 11.72 4.74 11.86 4.74 12C4.74 12.14 4.71 12.28 4.66 12.41L2.26 17.78C2.06 18.24 1.97 18.74 2.01 19.23C2.05 19.73 2.21 20.21 2.48 20.63C2.76 21.05 3.13 21.4 3.57 21.64C4.01 21.88 4.5 22 5 22C5.47 21.99 5.93 21.89 6.35 21.68L20.35 14.68C20.85 14.43 21.26 14.05 21.56 13.57C21.85 13.1 22 12.56 22 12C22 11.44 21.85 10.9 21.56 10.43C21.26 9.95 20.85 9.57 20.35 9.32Z"
      fill="white"
    />
  </svg>
);

const commonClass =
  "bg-transparent border-b border-white/20 focus:border-[#60a5fa] text-white placeholder-gray-500 text-sm md:text-base py-3 outline-none transition-all duration-300";

const Form = () => {
  return (
    <div className="rounded-[32px] border border-white/10 bg-[#081025] p-6 shadow-[0_25px_80px_rgba(0,0,0,0.2)]">
      <h3 className="text-xl font-semibold text-white mb-4">Send me a message</h3>
      <p className="text-gray-400 text-sm md:text-base mb-6">
        I'm always open to discussing product design work or partnership opportunities.
      </p>
      <form className="grid gap-5">
        <div className="grid sm:grid-cols-2 gap-4">
          <input type="text" placeholder="Name*" className={commonClass} required />
          <input type="email" placeholder="Email*" className={commonClass} required />
        </div>

        <input type="text" placeholder="Location" className={commonClass} />
        <input type="text" placeholder="Subject*" className={commonClass} required />
        <textarea
          placeholder="Message*"
          className={`${commonClass} h-28 resize-none`}
          required
        ></textarea>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-[#17a3ff] to-[#1079f4] text-white font-semibold py-4 rounded-full flex items-center justify-center gap-3 hover:shadow-[0_0_30px_rgba(23,163,255,0.35)] transition-all duration-300 text-sm"
        >
          Send Message {telegramSVG}
        </button>
      </form>
    </div>
  );
};

export default Form;

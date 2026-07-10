import Introduction from "../components/introduction/Introduction";
import Profile from "../components/profile/Profile";
import WorkProcess from "../components/workProcess/WorkProcess";
import Portfolio from "../components/portfolio/Portfolio";
import WorkTogether from "../components/workTogether/WorkTogether";
import Skills from "../components/skills/Skills";
import Contact from "../components/contact/Contact";
import "../../index.css";

const Home = () => {
  return (
    <div className="relative scroll-smooth snap-y snap-mandatory">
      <section
        id="home"
        className="introduction-profile-background min-h-screen flex items-center snap-start border-b border-[#0ea5e9]/20"
      >
        <div className="mx-auto max-w-[1400px] w-full px-6 py-10">
          <Introduction />
        </div>
      </section>

      <section
        id="profile"
        className="bg-[#0a0a0a] section-fade visible min-h-screen flex items-center py-8 snap-start border-b border-[#0ea5e9]/20"
      >
        <div className="mx-auto max-w-[1400px] w-full px-6">
          <Profile />
        </div>
      </section>

      <section
        id="experience"
        className="bg-[#0a0a0a] section-fade visible border-b border-[#0ea5e9]/20 min-h-screen relative snap-start"
      >
        <div className="absolute top-0 left-0 w-full h-full bg-[#0ea5e9]/5 pointer-events-none"></div>
        <WorkProcess />
      </section>

      <section id="work" className="border-b border-[#0ea5e9]/20 snap-start">
        <div className="w-full px-6 py-16">
          <Portfolio />
        </div>
      </section>

      <section id="skills" className="blog-background section-fade snap-start">
        <div className="w-full px-6 py-16">
          <Skills />
        </div>
      </section>

      <section
        id="workTogether"
        className="bg-[#02040a] snap-start border-b border-[#0ea5e9]/10"
      >
        <div className="w-full px-6 py-12">
          <WorkTogether />
        </div>
      </section>

      <section
        id="contact"
        className="bg-[#04050c] snap-start"
      >
        <div className="w-full px-6 py-12">
          <Contact />
        </div>
      </section>
    </div>
  );
};

export default Home;

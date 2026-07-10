import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import Address from "./Address";
import Form from "./Form";

const addressData = [
  {
    icon: faLocationDot,
    title: "Location",
    description: "India",
  },
  {
    icon: faEnvelope,
    title: "Email",
    description: "b.aanand2233@gmail.com",
  },
  {
    icon: faPhone,
    title: "Phone",
    description: "+91 73959 80499",
  },
  {
    icon: faEnvelope,
    title: "GitHub",
    description: "Vishnu0501",
  },
];

const Contact = () => {
  return (
    <div className="py-8">
      <div className="mx-auto max-w-4xl px-4">
        <div className="mx-auto max-w-[760px] rounded-[32px] border border-white/10 bg-[#070b16] p-6 shadow-[0_30px_100px_rgba(0,0,0,0.25)]">
          <div className="mb-8 max-w-2xl">
            <p className="text-[11px] uppercase tracking-[0.45em] text-[#60a5fa] mb-3 opacity-80">
              05 GET IN TOUCH
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white leading-tight">
              Do you have a <span className="text-[#60a5fa]">Project Idea</span>? Let's discuss your project!
            </h2>
            <p className="mt-3 max-w-xl text-gray-400 text-sm leading-relaxed">
              I'm always open to discussing new projects and creative ideas. Let's connect and build something amazing together.
            </p>
          </div>

          <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-6">
            <div className="space-y-3">
              {addressData.map((item, index) => (
                <Address item={item} key={index} />
              ))}
            </div>

            <div>
              <Form />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

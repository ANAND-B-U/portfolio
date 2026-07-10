import {
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const socialIcons = [
  { icon: faGithub, link: "https://github.com/ANAND-B-U" },
  { icon: faLinkedin, link: "https://www.linkedin.com/in/anand-b-b1279923b/" },
  { icon: faInstagram, link: "https://www.instagram.com/challenger_22_4/?hl=en" },
];

const SocialMedia = () => {
  return socialIcons.map((item, index) => (
    <a
      href={item.link}
      className="text-white hover:bg-[#0ea5e9]/20 p-2 pt-3 xs:p-2.5 xs:pt-3.75 sm:pt-4 md:pt-5 sm:p-3 md:p-3.75 hover:text-white rounded-md transition duration-300"
      key={index}
      aria-label={`Visit ${item.link}`}
    >
      <FontAwesomeIcon
        icon={item.icon}
        className="text-xl w-5 aspect-square"
      />
    </a>
  ));
};

export default SocialMedia;

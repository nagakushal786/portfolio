import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/nagakushal786" },
  { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/naga-kushal-vankadara-11117b258/" },
  { icon: <FaTwitter />, path: "https://twitter.com" },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => (
        <Link key={index} href={item.path} className={iconStyles} target="_blank" rel="noopener noreferrer">
          {item.icon}
        </Link>
      ))}
    </div>
  );
};

export default Socials;

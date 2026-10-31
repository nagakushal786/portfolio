import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/nagakushal786" },
  { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/naga-kushal-vankadara-0559b1248/" },
  { icon: <FaTwitter />, path: "https://x.com/naga_07081507" },
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

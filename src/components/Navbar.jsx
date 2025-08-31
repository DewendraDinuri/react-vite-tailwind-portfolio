import logo from '../assets/kevinRushLogo.png';
import { FaLinkedin, FaGithub, FaInstagram, FaYoutube } from 'react-icons/fa';
import { motion } from 'framer-motion';

const socialLinks = [
  { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/dinza-dewn/" },
  { icon: <FaGithub />, url: "https://github.com/DewendraDinuri" },
  { icon: <FaYoutube />, url: "https://www.youtube.com/@dinzadewen" },
  { icon: <FaInstagram />, url: "https://www.instagram.com/dinza._.dewen" },
];

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-10 px-16 shadow-lg relative z-10">
      <div className="flex flex-shrink-0 items-center">
        <img src={logo} alt="Logo" className="mx-2 w-10" />
      </div>

      <div className="flex items-center justify-center gap-8 text-2xl">
        {socialLinks.map((social, index) => (
          <motion.a
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, color: "#5B2C6F" }} // pop and color on hover
            whileTap={{ scale: 0.9 }} // click effect
          >
            {social.icon}
          </motion.a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;

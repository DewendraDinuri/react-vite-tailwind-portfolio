import logo from '../assets/kevinRushLogo.png';
import { FaLinkedin, FaGithub, FaInstagram, FaYoutube } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-10 px-8 shadow-lg relative z-10">
      <div className="flex flex-shrink-0 items-center">
        <img src={logo} alt="Logo" className="mx-2 w-10" />
      </div>
      <div className="flex items-center justify-center gap-8 text-2xl">
        <FaLinkedin/>
        <FaGithub/>
        <FaYoutube/>
        <FaInstagram/>
      </div>
    </nav>
  );
};

export default Navbar;


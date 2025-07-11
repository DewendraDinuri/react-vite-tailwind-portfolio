import logo from '../assets/kevinRushLogo.png';
import { FaLinkedin, FaGithub, FaInstagram, FaYoutube } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="bg-red-900 flex items-center justify-between py-4 px-8 shadow-lg">
      <div className="flex flex-shrink-0 items-center">
        <img src={logo} alt="Logo" className="h-10 w-auto" />
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


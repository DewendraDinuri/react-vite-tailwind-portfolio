import logo from '../assets/kevinRushLogo.png';
import { FaLinkedin, FaGithub, FaInstagram, FaYoutube } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between py-6 px-8 bg-white shadow">
      <div className="flex flex-shrink-0 items-center">
        <img src={logo} alt="Logo" className="h-10 w-auto" />
      </div>
      <div className="flex items-center justify-center gap-4 text-2xl">
        <FaLinkedin/>
        <FaGithub/>
        <FaYoutube/>
        <FaInstagram/>
      </div>
    </nav>
  );
};

export default Navbar;


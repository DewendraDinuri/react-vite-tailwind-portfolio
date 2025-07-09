import logo from '../assets/DinuriLogo.png';

const Navbar = () => {
  return (
    <nav className="bg-red-900 dark:bg-red-500 mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img src={logo} alt="Logo" className="h-10 w-auto" />
      </div>
    </nav>
  );
};

export default Navbar;

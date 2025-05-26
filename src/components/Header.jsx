import { Menu, X } from "lucide-react";

const Header = ({ isOpen, setIsOpen, activeSection, handleScroll }) => {
  const navItems = ['home', 'skills', 'projects', 'contact'];

  return (
    <div className="sticky top-0 z-50 flex justify-between p-4 bg-inherit shadow-sm mb-7 ">
      <div className="flex flex-col items-center mb-2">
        <div className="flex items-center">
          <img src="../assets/react.svg" alt="logo" className="h-8" />
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="absolute top-4 right-4">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      <div className={`w-full md:flex md:items-center md:w-auto ${isOpen ? 'block' : 'hidden'}`}>
        <ul className="flex flex-col md:flex-row md:space-x-4">
          {navItems.map((item) => (
            <li
              key={item}
              className={`p-2 cursor-pointer ${activeSection === item ? 'text-accent font-bold' : 'hover:text-accent'} transition-colors duration-200`}
              onClick={() => handleScroll(item)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;

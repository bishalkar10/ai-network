import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <header className="w-full h-20 bg-[#060A14]">
      <nav className="relative h-full w-full flex items-center px-10">
        <h1 className="text-white text-3xl mr-auto">AI NETWORK</h1>
        <ul className="hidden md:flex text-white gap-6 text-lg ">
          <li>
            <a className="hover:text-[#F6AE64] duration-500" href="#">
              Home
            </a>
          </li>
          <li>
            <a className="hover:text-[#F6AE64] duration-500" href="#">
              About
            </a>
          </li>
          <li>
            <a className="hover:text-[#F6AE64] duration-500" href="#">
              Roadmap
            </a>
          </li>
          <li>
            <a className="hover:text-[#F6AE64] duration-500" href="#">
              Contact
            </a>
          </li>
        </ul>

        <FontAwesomeIcon
          onClick={toggleMenu}
          className="md:hidden text-white text-2xl cursor-pointer hover:text-[#F6AE64] duration-500"
          icon={menuOpen ? faX : faBars}
        />

        <ul
          className={`absolute top-20 left-1/2 transform -translate-x-1/2 flex flex-col overflow-hidden z-20 md:hidden min-w-[340px] w-full max-w-xl border-[1px] border-b-0 ${
            menuOpen ? "animate-expand" : "animate-collapse"
          }`}
        >
          <li>
            <a
              className="block bg-white pl-5 py-3 border-b-[1px] hover:bg-[#F6AE64] duration-150"
              href="#"
            >
              Home
            </a>
          </li>
          <li>
            <a
              className="block bg-white pl-5 py-3 border-b-[1px] hover:bg-[#F6AE64] duration-150"
              href="#"
            >
              About
            </a>
          </li>
          <li>
            <a
              className="block bg-white pl-5 py-3 border-b-[1px] hover:bg-[#F6AE64] duration-150"
              href="#"
            >
              Roadmap
            </a>
          </li>
          <li>
            <a
              className="block bg-white pl-5 py-3 border-b-[1px] hover:bg-[#F6AE64] duration-150"
              href="#"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

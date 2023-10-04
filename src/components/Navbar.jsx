import { NavLink } from "react-router-dom";
import { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [expanded, setExpanded] = useState(false);

  const handleClick = () => {
    setExpanded((prev) => !prev);
  };

  return (
    <nav className="py-8 px-5 lg:px-16 flex justify-between items-center">
      <a href="#" className="text-2xl text-darkGreen font-bold brand">
        ChillGrill
      </a>
      <div className="z-50">
        <HiMenuAlt3
          size={42}
          color="#618264"
          className={`${expanded ? "hidden" : "block"} lg:hidden`}
          onClick={handleClick}
        />
        <AiOutlineClose
          size={42}
          color="#618264"
          className={`${!expanded ? "hidden" : "block"} lg:hidden`}
          onClick={handleClick}
        />
      </div>
      <ul
        className={`bg-veryLightGreen bg-opacity-80 backdrop-blur-sm transform origin-right transition-all duration-300 ease-out flex flex-col absolute h-screen top-0 right-0 w-[60vw] pt-[20vh] lg:bg-transparent lg:backdrop-blur-none  lg:static lg:flex-row lg:scale-x-100 lg:h-auto lg:w-auto lg:pt-0 gap-8 items-center ${
          expanded ? "scale-x-100" : "scale-x-0"
        }`}
      >
        <li className="p-4 text-xl text-lightGreen">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="p-4 text-xl text-lightGreen">
          <NavLink to="/">About</NavLink>
        </li>
        <li className=" p-4 text-xl text-lightGreen">
          <NavLink to="/">Contact Us</NavLink>
        </li>
        <div className="mt-12 lg:mt-0 flex flex-col gap-4 lg:flex-row">
          <NavLink
            to="/login"
            className="p-4 flex items-center justify-center rounded-md shadow-md bg-transparent border border-darkGreen text-darkGreen"
          >
            Login
          </NavLink>
          <NavLink
            to="/signup"
            className="flex items-center justify-center p-4 rounded-md shadow-md bg-darkGreen border border-darkGreen text-gray"
          >
            Sign up
          </NavLink>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;

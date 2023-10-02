import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="py-8 px-16 flex justify-between items-center">
      <a href="#" className="text-2xl text-darkGreen font-bold brand">
        ChillGrill
      </a>
      <ul className="flex gap-8 items-center">
        <li className="p-4 text-xl text-lightGreen">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className=" p-4 text-xl text-lightGreen">
          <NavLink to="/">Recipes</NavLink>
        </li>
        <li className=" p-4 text-xl text-lightGreen">
          <NavLink to="/">Blog</NavLink>
        </li>
        <li className=" p-4 text-xl text-lightGreen">
          <a>Contact Us</a>
        </li>
      </ul>
      <div className="flex gap-4">
        <NavLink
          to="/login"
          className="p-4 rounded-md shadow-md bg-transparent border border-darkGreen text-darkGreen"
        >
          Login
        </NavLink>
        <NavLink
          to="/signup"
          className="p-4 rounded-md shadow-md bg-darkGreen border border-darkGreen text-gray"
        >
          Sign up
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;

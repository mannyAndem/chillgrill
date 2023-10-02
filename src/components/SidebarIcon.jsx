import { NavLink } from "react-router-dom";

const SidebarIcon = ({ icon, to, tooltip }) => {
  return (
    <NavLink
      className={({ isActive, isPending }) => {
        return `group relative p-4 shadow-md ${
          isActive
            ? "rounded-full bg-darkGreen"
            : "rounded-md bg-veryLightGreen"
        }
         cursor-pointer hover:bg-darkGreen transition-all duration-300 ease-linear`;
      }}
      to={to}
      end={true}
    >
      {icon}
      <div className="absolute top-1/2 left-[105%] transform -translate-y-1/2 rounded-lg bg-darkGreen text-gray text-xl p-2 scale-x-0 group-hover:scale-x-100 transition-all duration-300 ease-out">
        <span>{tooltip}</span>
      </div>
    </NavLink>
  );
};

export default SidebarIcon;

import { BiHome } from "react-icons/bi";
import { PiMedalBold } from "react-icons/pi";
import { RxAvatar } from "react-icons/rx";
import { IoCreateOutline } from "react-icons/io5";
import SidebarIcon from "../components/SidebarIcon";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

const Sidebar = () => {
  const navigate = useNavigate();

  const { signout } = useContext(AuthContext);
  const handleClick = async () => {
    await signout();
    navigate("/login");
  };

  return (
    <div className="sticky bottom-0 lg:top-0 p-4 lg:col-span-1 w-screen lg:h-screen lg:w-auto bg-lightGreen rounded-lg flex flex-row lg:flex-col items-center justify-center gap-2 lg:gap-8">
      <SidebarIcon icon={<BiHome size={42} />} to="/dashboard" tooltip="Home" />
      <SidebarIcon
        icon={<PiMedalBold size={42} />}
        to="/dashboard/favourites"
        tooltip="Favourites"
      />
      <SidebarIcon
        icon={<RxAvatar size={42} />}
        to="/dashboard/profile"
        tooltip="Profile"
      />
      <button
        to="/signup"
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 p-4 rounded-md shadow-md bg-darkGreen border border-darkGreen text-gray"
        onClick={handleClick}
      >
        Sign out
      </button>
    </div>
  );
};

export default Sidebar;

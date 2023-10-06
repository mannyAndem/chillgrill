import { BiHome } from "react-icons/bi";
import { PiMedalBold } from "react-icons/pi";
import { RxAvatar } from "react-icons/rx";
import { IoCreateOutline } from "react-icons/io5";
import SidebarIcon from "./SidebarIcon";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

const DesktopSidebar = () => {
  const navigate = useNavigate();

  const { signout } = useContext(AuthContext);
  const handleSignout = async () => {
    await signout();
    navigate("/");
  };

  return (
    <div className="sticky hidden top-0 p-4 col-span-1 h-screen bg-lightGreen rounded-lg flex-col items-center justify-center gap-8 lg:flex">
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
        className="absolute  bottom-4 left-1/2 transform -translate-x-1/2 p-4 rounded-md shadow-md bg-darkGreen border border-darkGreen text-gray"
        onClick={handleSignout}
      >
        Sign out
      </button>
    </div>
  );
};

export default DesktopSidebar;

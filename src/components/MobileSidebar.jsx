import { BiHome } from "react-icons/bi";
import { PiMedalBold } from "react-icons/pi";
import { RxAvatar } from "react-icons/rx";
import SidebarIcon from "./SidebarIcon";
import { HiMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const MobileSidebar = () => {
  const { signout } = useContext(AuthContext);
  const [expanded, setExpanded] = useState(false);

  const navigate = useNavigate();
  const handleClick = () => {
    setExpanded((prev) => !prev);
  };

  const handleSignOut = async () => {
    await signout();
    navigate("/");
  };

  return (
    <div className="z-50 py-10 block lg:hidden">
      <div className="absolute top-4 left-4 z-[1000]">
        <HiMenuAlt3
          size={42}
          color="#618264"
          className={`z-50 ${expanded ? "hidden" : "block"} lg:hidden`}
          onClick={handleClick}
        />
        <AiOutlineClose
          size={42}
          color="#618264"
          className={`z-50 ${!expanded ? "hidden" : "block"} lg:hidden`}
          onClick={handleClick}
        />
      </div>
      <ul
        className={`z-50 bg-lightGreen transform origin-left transition-all duration-300 ease-out flex flex-col fixed h-screen top-0 left-0 w-[60vw] gap-8 py-32 items-center ${
          expanded ? "scale-x-100" : "scale-x-0"
        }`}
        onClick={() => setExpanded(false)}
      >
        <SidebarIcon
          icon={<BiHome size={42} />}
          to="/dashboard"
          tooltip="Home"
        />
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
          className="mt-16 p-4 rounded-md shadow-md bg-darkGreen border border-darkGreen text-gray"
          onClick={handleSignOut}
        >
          Sign out
        </button>
      </ul>
    </div>
  );
};

export default MobileSidebar;

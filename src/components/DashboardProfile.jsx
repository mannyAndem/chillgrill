import { useContext, useRef } from "react";
import { RxAvatar } from "react-icons/rx";
import { AuthContext } from "../contexts/AuthContext";
import { useState } from "react";
import { BsFillPencilFill } from "react-icons/bs";
import { TiTick } from "react-icons/ti";
import Spinner from "../components/Spinner";
const DashboardProfile = () => {
  const { currentUser, updateUserInfo } = useContext(AuthContext);

  const [firstName, setFirstName] = useState({
    value: currentUser.displayName.split(" ")[0],
    disabled: true,
  });
  const [lastName, setLastName] = useState({
    value: currentUser.displayName.split(" ")[1],
    disabled: true,
  });
  const [about, setAbout] = useState({
    value: "",
    disabled: true,
  });

  // loading state
  const [loading, setLoading] = useState(false);

  // refs for input
  const firstNameInputRef = useRef(null);
  const lastNameInputRef = useRef(null);
  const aboutInputRef = useRef(null);

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    await updateUserInfo(currentUser, firstName + " " + lastName);
    setFirstName({
      value: currentUser.displayName.split(" ")[0],
      disabled: true,
    });
    setLastName({
      value: currentUser.displayName.split(" ")[1],
      disabled: true,
    });
    setLoading(false);
  };

  return (
    <div className="p-8 text-darkGreen">
      <h2 className="text-3xl font-bold">Your Profile</h2>
      <div className="pt-4 mt-8 border-t-2 border-veryLightGreen flex flex-col gap-8">
        <div className="rounded-full flex items-center gap-4">
          <RxAvatar size={70} />
          <span className="text-xl font-bold ">Change image</span>
        </div>
        <form className="flex flex-col gap-6" onSubmit={(e) => handleSubmit(e)}>
          <div className=" grid grid-cols-1 gap-6">
            <div className="flex flex-col gap-3">
              <label htmlFor="last-name">First Name</label>
              <div className="flex items-center gap-4">
                <input
                  type="text"
                  placeholder="John"
                  className="bg-transparent shadow-sm py-2 px-4 border-lightGreen border-2 rounded-md focus:outline-none focus:border-darkGreen w-full"
                  value={firstName.value}
                  disabled={true}
                  ref={firstNameInputRef}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <div
                  className="cursor-pointer"
                  onClick={() => {
                    setFirstName((prev) => {
                      return {
                        value: prev.value,
                        disabled: !prev.disabled,
                      };
                    });
                    firstNameInputRef.current.disabled = firstName.disabled;
                    if (!firstNameInputRef.current.disabled) {
                      firstNameInputRef.current.focus();
                    }
                  }}
                >
                  {firstName.disabled && <BsFillPencilFill size={28} />}
                  {!firstName.disabled && <TiTick size={28} />}
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="last-name">Last Name</label>
              <div className="flex items-center gap-4">
                <input
                  type="text"
                  placeholder="Doe"
                  className="bg-transparent shadow-sm py-2 px-4 border-lightGreen border-2 rounded-md focus:outline-none focus:border-darkGreen w-full"
                  value={lastName.value}
                  ref={lastNameInputRef}
                  disabled={lastName.disabled}
                  onChange={(e) => setLastName(e.target.value)}
                  autoFocus={!lastName.disabled}
                />
                <div
                  className="cursor-pointer"
                  onClick={() => {
                    setLastName((prev) => {
                      return {
                        value: prev.value,
                        disabled: !prev.disabled,
                      };
                    });
                  }}
                >
                  {lastName.disabled && <BsFillPencilFill size={28} />}
                  {!lastName.disabled && <TiTick size={28} />}
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <label htmlFor="last-name">About</label>
              <div className="flex items-center gap-4">
                <textarea
                  type="text"
                  placeholder="Say something about yourself"
                  className="w-full bg-transparent shadow-sm py-2 px-4 border-lightGreen border-2 rounded-md focus:outline-none focus:border-darkGreen"
                  disabled={true}
                  ref={aboutInputRef}
                />
                <div
                  className="cursor-pointer"
                  onClick={() => {
                    setAbout((prev) => {
                      return {
                        value: prev.value,
                        disabled: !prev.disabled,
                      };
                    });
                    aboutInputRef.current.disabled =
                      !aboutInputRef.current.disabled;
                    if (!aboutInputRef.current.disabled) {
                      aboutInputRef.current.focus();
                    }
                  }}
                >
                  {about.disabled && <BsFillPencilFill size={28} />}
                  {!about.disabled && <TiTick size={28} />}
                </div>
              </div>
            </div>
          </div>
          <div className="mt-16 flex flex-col lg:flex-row gap-8">
            <button
              className=" w-full bg-darkGreen border-2 border-darkGreen text-gray rounded-md py-4 px-8 text-xl font-bold self-center"
              type="submit"
              disabled={loading}
            >
              {loading && <Spinner color="gray" size={16} />}
              <span className={loading && "opacity-0"}>Update Profile</span>
            </button>
            <button
              className="w-full bg-transparent border-2 border-darkGreen text-darkGreen rounded-md py-4 px-8 text-xl font-bold self-center"
              type="button"
            >
              Change email / password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DashboardProfile;

import { useContext, useRef } from "react";
import { RxAvatar } from "react-icons/rx";
import { AuthContext } from "../contexts/AuthContext";
import { useState } from "react";
import { BsFillPencilFill } from "react-icons/bs";
import { TiTick } from "react-icons/ti";
import Spinner from "../components/Spinner";
import toast, { Toaster } from "react-hot-toast";
const DashboardProfile = () => {
  const { currentUser, updateUserInfo, changePassword, changeEmail } =
    useContext(AuthContext);

  // input field values state
  const [firstName, setFirstName] = useState(
    currentUser.displayName.split(" ")[0]
  );
  const [email, setEmail] = useState(currentUser.email);
  const [lastName, setLastName] = useState(
    currentUser.displayName.split(" ")[1]
  );
  const [about, setAbout] = useState("");

  // disabled input states
  const [firstNameDisabled, setFirstNameDisabled] = useState(true);
  const [lastNameDisabled, setLastNameDisabled] = useState(true);
  const [emailDisabled, setEmailDisabled] = useState(true);
  const [aboutDisabled, setAboutDisabled] = useState(true);

  // loading states
  const [updateProfileLoading, setUpdateProfileLoading] = useState(false);
  const [changePasswordLoading, setChangePasswordLoading] = useState(false);

  const handlePasswordReset = async () => {
    setChangePasswordLoading(true);
    await changePassword(currentUser.email);
    toast.success("Check your email for next steps", {
      duration: 4000,
    });
    setChangePasswordLoading(false);
  };

  const handleSubmit = async (e) => {
    setUpdateProfileLoading(true);
    e.preventDefault();
    try {
      await updateUserInfo(currentUser, `${firstName} ${lastName}`);
      if (email !== currentUser.email) {
        await changeEmail(currentUser, email);
      }
    } catch (err) {
      toast.error("Something went wrong");
    }
    setFirstName({
      value: currentUser.displayName.split(" ")[0],
      disabled: true,
    });
    setLastName({
      value: currentUser.displayName.split(" ")[1],
      disabled: true,
    });
    setEmail({
      value: currentUser.email,
      disabled: true,
    });
    setUpdateProfileLoading(false);
  };

  return (
    <div className="p-8 text-darkGreen">
      <Toaster />
      <h2 className="text-3xl font-bold">Your Profile</h2>
      <div className="pt-4 mt-8 border-t-2 border-veryLightGreen flex flex-col gap-8">
        <div className="rounded-full flex items-center gap-4">
          <RxAvatar size={70} />
          <span className="text-xl font-bold ">Change image</span>
        </div>
        <form className="flex flex-col gap-6" onSubmit={(e) => handleSubmit(e)}>
          <div className=" grid grid-cols-1 gap-6">
            <div className="flex flex-col gap-3">
              <label htmlFor="last-name">Email</label>
              <div className="flex items-center gap-4">
                <input
                  type="text"
                  placeholder="John"
                  className="bg-transparent shadow-sm py-2 px-4 border-lightGreen border-2 rounded-md focus:outline-none focus:border-darkGreen w-full"
                  value={email}
                  disabled={emailDisabled}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <div
                  className="cursor-pointer"
                  onClick={() => {
                    setEmailDisabled((prev) => !prev);
                  }}
                >
                  {emailDisabled && <BsFillPencilFill size={28} />}
                  {!emailDisabled && <TiTick size={28} />}
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="last-name">First Name</label>
              <div className="flex items-center gap-4">
                <input
                  type="text"
                  placeholder="John"
                  className="bg-transparent shadow-sm py-2 px-4 border-lightGreen border-2 rounded-md focus:outline-none focus:border-darkGreen w-full"
                  value={firstName}
                  disabled={firstNameDisabled}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <div
                  className="cursor-pointer"
                  onClick={() => setFirstNameDisabled((prev) => !prev)}
                >
                  {firstNameDisabled && <BsFillPencilFill size={28} />}
                  {!firstNameDisabled && <TiTick size={28} />}
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
                  value={lastName}
                  disabled={lastNameDisabled}
                  onChange={(e) => setLastName(e.target.value)}
                />
                <div
                  className="cursor-pointer"
                  onClick={() => {
                    setLastNameDisabled((prev) => !prev);
                  }}
                >
                  {lastNameDisabled && <BsFillPencilFill size={28} />}
                  {!lastNameDisabled && <TiTick size={28} />}
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
                  disabled={aboutDisabled}
                />
                <div
                  className="cursor-pointer"
                  onClick={() => {
                    setAboutDisabled((prev) => !prev);
                  }}
                >
                  {aboutDisabled && <BsFillPencilFill size={28} />}
                  {!aboutDisabled && <TiTick size={28} />}
                </div>
              </div>
            </div>
          </div>
          <div className="mt-16 flex flex-col lg:flex-row gap-8">
            <button
              className="relative w-full bg-darkGreen border-2 border-darkGreen text-gray rounded-md py-4 px-8 text-xl font-bold self-center"
              type="submit"
              disabled={updateProfileLoading}
            >
              {updateProfileLoading && (
                <Spinner
                  options={{
                    color: "gray",
                    size: 16,
                    position: "absolute",
                  }}
                />
              )}
              <span className={updateProfileLoading && "opacity-0"}>
                Update Profile
              </span>
            </button>
            <button
              className={`w-full bg-transparent border-2 border-darkGreen text-darkGreen rounded-md py-4 px-8 text-xl font-bold self-center ${
                changePasswordLoading && "opacity-30"
              }`}
              type="button"
              onClick={() => handlePasswordReset()}
              disabled={changePasswordLoading}
            >
              Change password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DashboardProfile;

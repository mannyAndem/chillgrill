import signupImg from "../assets/images/handrawn-barbecue-elements.jpg";
import googleLogo from "../assets/images/google-logo.png";
import { Link, useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner";

import { useState, useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const navigate = useNavigate();
  const { createAccount, loginWithGoogle, updateUserInfo } =
    useContext(AuthContext);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const cred = await createAccount(email, password);
      await updateUserInfo(cred.user, firstName + " " + lastName);
      console.log(cred);
      setLoading(false);
      navigate("/dashboard");
    } catch (err) {
      console.error(err);
      setLoading(false);
      setError("Could not create account");
    }
  };

  const handleClick = async () => {
    await loginWithGoogle();
    navigate("/dashboard");
  };

  return (
    <div className="px-8 py-24 lg:px-32">
      <div className="lg:pr-16 bg-lightGreen rounded-lg shadow-lg text-gray flex gap-16 items-center">
        <div className="hidden w-1/2 self-stretch lg:block">
          <img src={signupImg} className="object-cover h-full rounded-lg" />
        </div>
        <div className="px-5 w-full py-16 lg:w-1/2 lg:px-0">
          <h2 className="text-2xl font-bold text-center lg:text-4xl lg:text-left">
            Create Account
          </h2>
          <form
            className="mt-16 flex flex-col gap-6"
            onSubmit={(e) => handleSubmit(e)}
          >
            {error && (
              <span className="text-center text-2xl text-red-100">{error}</span>
            )}
            <div className=" grid grid-cols-2 gap-6">
              <div className="flex flex-col gap-3">
                <label htmlFor="first-name">First Name</label>
                <input
                  type="text"
                  placeholder="e.g John"
                  className="bg-transparent shadow-sm py-2 px-4 border-darkGreen border-2 rounded-md focus:outline-none focus:border-gray"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <span></span>
              </div>
              <div className="flex flex-col gap-3">
                <label htmlFor="last-name">Last Name</label>
                <input
                  type="text"
                  placeholder="e.g Doe"
                  className="bg-transparent shadow-sm py-2 px-4 border-darkGreen border-2 rounded-md focus:outline-none focus:border-gray"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
                <span></span>
              </div>
              <div className="flex flex-col gap-3">
                <label htmlFor="last-name">Email</label>
                <input
                  type="text"
                  placeholder="e.g johndoe@example.com"
                  className="bg-transparent shadow-sm py-2 px-4 border-darkGreen border-2 rounded-md focus:outline-none focus:border-gray"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <span></span>
              </div>
              <div className="flex flex-col gap-3">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  placeholder="Enter a strong password"
                  className="bg-transparent shadow-sm py-2 px-4 border-darkGreen border-2 rounded-md focus:outline-none focus:border-gray"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span></span>
              </div>
            </div>
            <button
              type="submit"
              className="relative bg-darkGreen text-gray rounded-md py-4 px-8 text-xl font-bold self-center"
            >
              <span className={loading ? "opacity-0" : "opacity-100"}>
                Sign up
              </span>
              {loading && (
                <Spinner
                  options={{
                    size: 16,
                    color: "gray",
                    position: "fixed",
                  }}
                />
              )}
            </button>
          </form>
          <div className="mt-6 flex flex-col gap-6 items-stretch">
            <div className="flex items-center gap-4">
              <hr className="h-1 border-none bg-gray rounded-md w-1/2" />
              <span>OR</span>
              <hr className="h-1 border-none bg-gray rounded-md w-1/2" />
            </div>
            <button
              className="flex justify-center gap-2 items-center border-2 border-darkGreen text-gray rounded-md py-4 px-4 font-bold lg:px-8 lg:gap-2 lg:text-xl"
              onClick={handleClick}
            >
              Continue with Google <img src={googleLogo} className="h-8" />
            </button>
            <Link
              to="/login"
              className="underline text-gray font-semibold text-center tracking-wider"
            >
              Already have an account? Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;

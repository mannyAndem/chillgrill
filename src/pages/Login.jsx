import { Link } from "react-router-dom";
import loginImg from "../assets/images/handrawn-barbecue-elements.jpg";
import googleLogo from "../assets/images/google-logo.png";
import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import Spinner from "../components/Spinner";

const Login = () => {
  const { login, loginWithGoogle } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // handle login with email and password
  const handleSubmit = async (e) => {
    setError(false);
    e.preventDefault();
    setLoading(true);
    try {
      let res = await login(email, password);
      if (res._tokenResponse.registered !== true) {
        throw new Error("failed to login");
      }
      console.log(res);
      setLoading(false);
      navigate(`/dashboard`);
    } catch (err) {
      setLoading(false);
      console.log(err);
      setError("Invalid email or password!");
    }
  };

  // handle login with google
  const handleClick = async () => {
    const result = await loginWithGoogle();
    navigate("/dashboard");
  };

  return (
    <div className="py-24 px-32">
      <div className="pl-16 bg-lightGreen rounded-lg shadow-lg text-gray flex gap-16 items-center">
        <div className="w-1/2 py-16">
          <h2 className="text-4xl font-bold">Login</h2>
          <form
            className="mt-16 flex flex-col gap-6"
            onSubmit={(e) => handleSubmit(e)}
          >
            {error && (
              <span className="text-center text-2xl text-red-100">{error}</span>
            )}
            <div className="flex flex-col gap-3">
              <label htmlFor="name">Email</label>
              <input
                type="text"
                placeholder="Enter your email"
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
                placeholder="Enter your password"
                className="bg-transparent shadow-sm py-2 px-4 border-darkGreen border-2 rounded-md focus:outline-none focus:border-gray"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span></span>
            </div>
            <button
              type="submit"
              className="relative bg-darkGreen text-gray rounded-md py-4 px-8 text-xl font-bold self-center"
            >
              <span className={loading ? "opacity-0" : "opacity-100"}>
                Login
              </span>
              {loading && <Spinner size="16" color="gray" />}
            </button>
          </form>
          <div className="mt-6 flex flex-col items-stretch gap-6">
            <div className="flex items-center gap-4">
              <hr className="h-1 border-none bg-gray rounded-md w-1/2" />
              <span>OR</span>
              <hr className="h-1 border-none bg-gray rounded-md w-1/2" />
            </div>
            <button
              className="relative flex justify-center gap-4 items-center border-2 border-darkGreen text-gray rounded-md py-4 px-8 text-xl font-bold"
              onClick={handleClick}
            >
              <span>Continue with Google</span>
              <img src={googleLogo} className="h-8" />
            </button>
            <Link
              to="/signup"
              className="underline text-gray font-semibold text-center tracking-wider"
            >
              Don't have an account? Signup
            </Link>
          </div>
        </div>
        <div className="w-1/2 self-stretch">
          <img src={loginImg} className="object-cover h-full rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default Login;

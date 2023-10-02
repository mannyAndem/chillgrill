import About from "../components/About";
import Hero from "../components/Hero";
import GetStarted from "../components/GetStarted";
import Navbar from "../components/Navbar";
import { useContext, useEffect } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const Home = () => {
  // reedirecting the user to the dashboard if they are signed in.
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser) {
      navigate("/dashboard");
    }
  }, []);

  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <GetStarted />
    </div>
  );
};

export default Home;

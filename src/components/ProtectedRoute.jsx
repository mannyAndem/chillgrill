import { redirect, useNavigate } from "react-router-dom";
import Login from "../pages/login";
import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react";
import { useEffect } from "react";

const ProtectedRoute = ({ children }) => {
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (!currentUser) {
      navigate("/login");
    }
  });
  if (currentUser) {
    return children;
  }
};

export default ProtectedRoute;

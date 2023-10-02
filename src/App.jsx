import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import AuthContextProvider from "./contexts/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

import DashboardHome from "./components/DashboardHome";
import DashboardCreate from "./components/DashboardCreate";
import DashboardRecipes from "./components/DashboardFavourites";
import DashboardProfile from "./components/DashboardProfile";

function App() {
  return (
    <div className="bg-gray w-screen min-h-screen">
      <AuthContextProvider>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/dashboard/*"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;

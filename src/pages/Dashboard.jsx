import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Routes, Route, useNavigate } from "react-router-dom";
import DashboardHome from "../components/DashboardHome";
import DashboardCreate from "../components/DashboardCreate";
import DashboardFavourites from "../components/DashboardFavourites";
import DashboardProfile from "../components/DashboardProfile";
import Sidebar from "../components/Sidebar";
import RecipePage from "../components/RecipePage";
const Dashboard = () => {
  return (
    <div className="relative lg:grid lg:grid-cols-5">
      <Sidebar />
      <div className="col-span-4 p-8">
        <Routes>
          <Route path="" element={<DashboardHome />} />
          <Route path="create" element={<DashboardCreate />} />
          <Route path="favourites" element={<DashboardFavourites />} />
          <Route path="profile" element={<DashboardProfile />} />
          <Route path="recipes/:id" element={<RecipePage />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;

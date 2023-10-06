import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Routes, Route, useNavigate } from "react-router-dom";
import DashboardHome from "../components/DashboardHome";
import DashboardCreate from "../components/DashboardCreate";
import DashboardFavourites from "../components/DashboardFavourites";
import DashboardProfile from "../components/DashboardProfile";
import DesktopSidebar from "../components/DesktopSidebar";
import MobileSidebar from "../components/MobileSidebar";
import RecipePage from "../components/RecipePage";
import FavouritesContextProvider, {
  FavouritesContext,
} from "../contexts/FavouritesContext";
const Dashboard = () => {
  return (
    <div className="relative lg:grid lg:grid-cols-5">
      <DesktopSidebar />
      <MobileSidebar />
      <div className="lg:col-span-4 lg:p-8">
        <FavouritesContextProvider>
          <Routes>
            <Route path="" element={<DashboardHome />} />
            <Route path="create" element={<DashboardCreate />} />
            <Route path="favourites" element={<DashboardFavourites />} />
            <Route path="profile" element={<DashboardProfile />} />
            <Route path="recipes/:id" element={<RecipePage />} />
          </Routes>
        </FavouritesContextProvider>
      </div>
    </div>
  );
};

export default Dashboard;

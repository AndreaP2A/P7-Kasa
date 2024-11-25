// DEFAULT IMPORT
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useParams,
} from "react-router-dom";

// PAGES IMPORT
import Home from "../pages/home/home";
import House from "../pages/house/house";
import About from "../pages/about/about";
import Error404 from "../pages/error404/error404";
import { getHouseById } from "../services/Api";

// APP ROUTES
const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/house/:id" element={<HouseWrapper />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>
  );
};

// REDIRECTION VERS error404 SI id N'EXISTE PAS
const HouseWrapper = () => {
  const { id } = useParams();
  const house = getHouseById(id);

  if (!house) {
    return <Navigate to="/error404" />;
  }

  return <House house={house} />;
};

export default AppRouter;

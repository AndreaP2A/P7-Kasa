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

/**
 * AppRouter component sets up the routing for the application using React Router.
 * It includes routes for home, house details, about, and a catch-all for 404 errors.
 *
 * @component
 * @returns {JSX.Element} The Router component with defined routes.
 */
const AppRouter = () => {
  return (
    <Router
      future={{
        // Future proofing (otherwise : warning flags)
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
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

/**
 * HouseWrapper component fetches house details based on the URL parameter `id`.
 * If the house is not found, it redirects to the 404 error page.
 *
 * @returns {JSX.Element} The House component with the house details or a Navigate component for redirection.
 */
const HouseWrapper = () => {
  const { id } = useParams();
  const house = getHouseById(id);

  if (!house) {
    return <Navigate to="/error404" />;
  }

  return <House house={house} />;
};

export default AppRouter;

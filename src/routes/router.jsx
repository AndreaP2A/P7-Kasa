// DEFAULT IMPORT
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// PAGES IMPORT
import Home from "../pages/home/home";
import House from "../pages/house/house";
import About from "../pages/about/about";
import Error404 from "../pages/error404/error404";

// APP ROUTES
const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/house" element={<House />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;

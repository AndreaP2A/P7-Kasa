import "./_header.scss";
import logo from "../../assets/img/logo.png";
import { useState, useEffect } from "react";

function Header() {
  const [activeLink, setActiveLink] = useState("/home");

  // Update active link (underline) based on current URL pathname
  useEffect(() => {
    setActiveLink(window.location.pathname);
  }, []);

  const handleLinkClick = (path) => {
    setActiveLink(path);
  };

  return (
    <header className="header">
      <div className="header_logo">
        <img src={logo} alt="Logo" />
      </div>
      <nav className="header_navbar">
        <ul>
          <li>
            <a
              href="/home"
              className={activeLink === "/home" ? "active" : ""}
              onClick={() => handleLinkClick("/home")}
            >
              Accueil
            </a>
          </li>
          <li>
            <a
              href="/about"
              className={activeLink === "/about" ? "active" : ""}
              onClick={() => handleLinkClick("/about")}
            >
              A propos
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

import "./_header.scss";
import logo from "../../assets/img/logo.png";
import { useState, useEffect } from "react";

/**
 * Header component that displays the logo and navigation links.
 * The active link is highlighted based on the current URL pathname.
 *
 * @component
 *
 */
function Header() {
  const [activeLink, setActiveLink] = useState("/home");

  // Update active link (underline) based on current URL pathname (here, home or about)
  useEffect(() => {
    setActiveLink(window.location.pathname);
  }, []);

  // Function to handle navigation link click event and update active link
  const handleLinkClick = (path) => {
    setActiveLink(path);
  };

  return (
    <header className="header">
      <div className="header_logo">
        <a href="/home">
          <img src={logo} alt="Logo" />
        </a>
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

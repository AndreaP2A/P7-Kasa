import "./_header.scss";
import logo from "../../assets/img/logo.png";

function Header() {
  return (
    <header className="header">
      <div className="header_logo">
        <img src={logo} alt="Logo" />
      </div>
      <nav className="header_navbar">
        <ul>
          <li>
            <a href="/home">ACCUEIL</a>
          </li>
          <li>
            <a href="/about">A PROPOS</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

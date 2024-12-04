import "./_error404.scss";
import { NavLink } from "react-router-dom";

/**
 * Error404 component renders a 404 error message indicating that the requested page does not exist.
 * It includes a link to navigate back to the homepage.
 *
 * @component
 * @returns {JSX.Element} The rendered component.
 */
function Error404() {
  return (
    <div className="error404">
      <h1 className="error404_title">404</h1>
      <p className="error404_message">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <NavLink to="/" className="error404_link">
        Retourner sur la page d’accueil
      </NavLink>
    </div>
  );
}

export default Error404;

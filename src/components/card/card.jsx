import "./_card.scss";
import { NavLink } from "react-router-dom";

/**
 * Card component that displays a house with a dynamic background image.
 *
 * @param {Object} props - The component props.
 * @param {Object} props.house - The house object.
 * @param {string} props.house.cover - The URL of the house cover image.
 * @param {string} props.house.id - The unique identifier of the house.
 * @param {string} props.house.title - The title of the house.
 * @returns {JSX.Element} The rendered Card component.
 */
function Card({ house }) {
  const cardStyle = {
    backgroundImage: `url(${house.cover})`,
  };
  return (
    <div className="gallery_card" style={cardStyle}>
      <NavLink to={`/house/${house.id}`}>
        <div className="gallery_card_overlay">
          <h2>{house.title}</h2>
        </div>
      </NavLink>
    </div>
  );
}

export default Card;

import "./_card.scss";
import { NavLink } from "react-router-dom";

function Card({ house }) {
  // DYNAMIC CARD BACKGROUND WITH cover OF THE house --> même principe pour banner !
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

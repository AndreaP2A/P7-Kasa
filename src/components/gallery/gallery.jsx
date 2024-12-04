import "./_gallery.scss";
import Card from "../card/card";
import { getAllHouses } from "../../services/Api";

/**
 * Gallery component that displays a list of house cards.
 *
 * @component
 * @returns {JSX.Element} A div containing a list of Card components.
 */
function Gallery() {
  const houses = getAllHouses();

  return (
    <div className="gallery">
      {houses.map((house) => (
        <Card key={house.id} house={house} />
      ))}
    </div>
  );
}

export default Gallery;

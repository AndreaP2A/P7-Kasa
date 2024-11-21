import "./_gallery.scss";
import Card from "../card/card";
import { getAllHouses } from "../../services/Api";

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

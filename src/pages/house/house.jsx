import "./_house.scss";
import Rating from "../../components/rating/rating";
// import Carousel from "../../components/carousel/carousel";
// import Tag from "../../components/tag/tag";
// import Collapse from "../../components/collapse/collapse";

function House({ house }) {
  return (
    <div className="house">
      <Rating rating={house.rating} />
    </div>
  );
}

export default House;

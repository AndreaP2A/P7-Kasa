import "./_house.scss";
import Rating from "../../components/rating/rating";
import Host from "../../components/host/host";
// import Carousel from "../../components/carousel/carousel";
import Tag from "../../components/tag/tag";
// import Collapse from "../../components/collapse/collapse";

function House({ house }) {
  return (
    <div className="house">
      <Rating rating={house.rating} />
      <Tag tags={house.tags} />
      <Host host={house.host} />
    </div>
  );
}

export default House;

import "./_house.scss";
import Rating from "../../components/rating/rating";
import Host from "../../components/host/host";
import Carousel from "../../components/carousel/carousel";
import Tag from "../../components/tag/tag";
import HouseCollapse from "../../components/houseCollapse/houseCollapse";

function House({ house }) {
  return (
    <main className="house">
      <Carousel pictures={house.pictures} />
      <section className="house_info">
        <div className="house_details">
          <div className="house_details_name">
            <h1>{house.title}</h1>
            <p>{house.location}</p>
          </div>
          <Tag tags={house.tags} className="house_details_tag" />
        </div>
        <div className="house_data">
          <Host host={house.host} className="house_data_host" />
          <Rating rating={house.rating} className="house_data_rating" />
        </div>
      </section>
      <HouseCollapse house={house} className="house_page" />
    </main>
  );
}

// Function to populate collapse with items of the house // a changer pour collapse note ligne 36

export default House;

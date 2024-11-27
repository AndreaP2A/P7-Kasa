import "./_house.scss";
import Rating from "../../components/rating/rating";
import Host from "../../components/host/host";
import Carousel from "../../components/carousel/carousel";
import Tag from "../../components/tag/tag";
import Collapse from "../../components/collapse/collapse";

function House({ house }) {
  const collapseItems = houseCollapseItems(house);

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
      <Collapse items={collapseItems} className="house_page" />
    </main>
  );
}

// Function to populate collapse with items of the house
function houseCollapseItems(house) {
  return [
    { title: "Description", text: house.description },
    {
      title: "Equipments",
      text: (
        <ul>
          {house.equipments.map((equipment, index) => (
            <li key={index}>{equipment}</li>
          ))}
        </ul>
      ),
    },
  ];
}

export default House;

import "./_house.scss";
import Rating from "../../components/rating/rating";
import Host from "../../components/host/host";
// import Carousel from "../../components/carousel/carousel";
import Tag from "../../components/tag/tag";
import Collapse from "../../components/collapse/collapse";

function House({ house }) {
  const collapseItems = houseCollapseItems(house);

  return (
    <div className="house">
      <div className="house_details">
        <div className="house_details_name">
          <h1>{house.title}</h1>
          <p>{house.location}</p>
        </div>
        <Host host={house.host} className="house_details_host" />
      </div>
      <div className="house_data">
        <Tag tags={house.tags} className="" />
        <Rating rating={house.rating} />
      </div>
      <Collapse items={collapseItems} className="house_page" />
    </div>
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

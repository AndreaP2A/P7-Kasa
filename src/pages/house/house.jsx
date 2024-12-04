import "./_house.scss";
import Rating from "../../components/rating/rating";
import Host from "../../components/host/host";
import Carousel from "../../components/carousel/carousel";
import Tag from "../../components/tag/tag";
import Collapse from "../../components/collapse/collapse";

/**
 * Component to display detailed information about a house.
 *
 * @param {Object} props - The properties object.
 * @param {Object} props.house - The house data.
 * @param {string} props.house.title - The title of the house.
 * @param {string} props.house.location - The location of the house.
 * @param {Array<string>} props.house.pictures - Array of picture URLs for the house.
 * @param {Array<string>} props.house.tags - Array of tags associated with the house.
 * @param {Object} props.house.host - The host information.
 * @param {string} props.house.host.name - The name of the host.
 * @param {string} props.house.host.picture - The picture URL of the host.
 * @param {number} props.house.rating - The rating of the house.
 * @returns {JSX.Element} The rendered House component.
 */
function House({ house }) {
  const collapseItems = [
    { title: "Description", text: house.description },
    { title: "Equipments", text: house.equipments },
  ];
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

export default House;

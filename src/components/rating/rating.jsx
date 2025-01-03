import "./_rating.scss";
import starActive from "../../assets/img/staractive.png";
import starInactive from "../../assets/img/starinactive.png";

/**
 * Rating component to display a star rating.
 *
 * @param {Object} props - Component props.
 * @param {number} props.rating - The rating value (1-5).
 * @returns {JSX.Element} The rendered Rating component.
 */
function Rating({ rating }) {
  return (
    <div className="rating">
      {[...Array(5)].map((_, index) => {
        const ratingNumber = index + 1;
        return (
          <img
            key={index}
            className="rating_star"
            src={ratingNumber <= rating ? starActive : starInactive}
            alt="Etoile"
          />
        );
      })}
    </div>
  );
}
export default Rating;

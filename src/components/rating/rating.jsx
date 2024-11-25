import "./_rating.scss";
import starActive from "../../assets/img/staractive.png";
import starInactive from "../../assets/img/starinactive.png";

function Rating({ rating }) {
  return (
    <div className="rating">
      {[...Array(5)].map((star, index) => {
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

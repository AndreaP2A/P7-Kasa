import "./_carousel.scss";
import { useState } from "react";
import leftArrow from "../../assets/img/arrowleft.png";
import rightArrow from "../../assets/img/arrowright.png";

/**
 * Carousel component to display a series of pictures with navigation controls.
 *
 * @param {Object} props - Component props.
 * @param {string[]} props.pictures - Array of picture URLs to display in the carousel.
 * @returns {JSX.Element} The rendered Carousel component.
 */
function Carousel({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Set the current index to the previous index (picture) or the last index if the current index is 0
  const handleLeftClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
    );
  };

  // Set the current index to the next index or the first index (picture) if the current index is the last index
  const handleRightClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="carousel">
      <div
        className="carousel_container"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {pictures.map((picture, index) => (
          <div key={index} className="carousel_item">
            <img
              src={picture}
              alt={`Slide ${index + 1}`}
              className="carousel_item_image"
            />
          </div>
        ))}
      </div>
      {/* Condition : control arrows and counter only if house has more than 1 picture */}
      {pictures.length > 1 && (
        <div className="carousel_controls">
          <div className="carousel_controls_icons">
            <button className="arrow_left" onClick={handleLeftClick}>
              <img src={leftArrow} alt="Précédent" />
            </button>
            <button className="arrow_right" onClick={handleRightClick}>
              <img src={rightArrow} alt="Suivant" />
            </button>
          </div>
          <div className="carousel_controls_counter">
            {currentIndex + 1}/{pictures.length}
          </div>
        </div>
      )}
    </div>
  );
}

export default Carousel;

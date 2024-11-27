import "./_carousel.scss";
import { useState } from "react";
import leftArrow from "../../assets/img/arrowleft.png";
import rightArrow from "../../assets/img/arrowright.png";

function Carousel({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleLeftClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
    );
  };

  const handleRightClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
    );
  };

  //   if (!pictures || pictures.length === 0) {
  //     return null;
  //   }

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

import { useLocation } from "react-router-dom";
import "./_banner.scss";

function Banner({
  bannerTextPart1 = "",
  bannerTextPart2 = "",
  backgroundImage,
  withGradient = false,
}) {
  const location = useLocation();
  const bannerStyle = {
    backgroundImage: withGradient
      ? `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${backgroundImage})`
      : `url(${backgroundImage})`,
  };

  return (
    <div
      className={location.pathname === "/about" ? "banner_about" : "banner"}
      style={bannerStyle}
    >
      <p className="banner_text">
        <span className="text-part1">{bannerTextPart1}</span>
        <span className="text-part2">{bannerTextPart2}</span>
      </p>
    </div>
  );
}

export default Banner;

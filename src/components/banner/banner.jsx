import { useLocation } from "react-router-dom";
import "./_banner.scss";

/**
 * Banner component that displays a banner with optional gradient background and text.
 *
 * @param {Object} props - The properties object.
 * @param {string} [props.bannerTextPart1=""] - The first part of the banner text (for line break on mobile)
 * @param {string} [props.bannerTextPart2=""] - The second part of the banner text (for line break on mobile)
 * @param {string} props.backgroundImage - The URL of the background image.
 * @param {boolean} [props.withGradient=false] - Whether to apply a gradient overlay on the background image (home or about)
 * @returns {JSX.Element} The Banner component.
 */
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

import "./_about.scss";
import Banner from "../../components/banner/banner";
import Collapse from "../../components/collapse/collapse";
import heroBannerAbout from "../../assets/img/herobannerabout.webp";
import { getCollapseAboutData } from "../../services/Api";

/**
 * About component renders the About page with a banner and collapsible sections.
 *
 * @component
 * @returns {JSX.Element} The rendered About page component.
 */
function About() {
  const collapseAboutData = getCollapseAboutData();
  return (
    <div className="about">
      <Banner backgroundImage={heroBannerAbout} />
      <Collapse items={collapseAboutData} className="about_page" />
    </div>
  );
}

export default About;

import "./_about.scss";
import Banner from "../../components/banner/banner";
import Collapse from "../../components/collapse/collapse";
import heroBannerAbout from "../../assets/img/herobannerabout.webp";

function About() {
  return (
    <div className="about">
      <Banner backgroundImage={heroBannerAbout} />
      <Collapse />
    </div>
  );
}

export default About;

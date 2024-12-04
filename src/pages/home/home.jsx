import "./_home.scss";
import Banner from "../../components/banner/banner";
import Gallery from "../../components/gallery/gallery";
import heroBanner from "../../assets/img/herobanner.webp";

/**
 * Home component that renders the main page with a banner and a gallery.
 *
 * @component
 * @returns {JSX.Element} The rendered Home component.
 */
function Home() {
  return (
    <div className="home">
      <Banner
        bannerTextPart1="Chez vous, "
        bannerTextPart2="partout et ailleurs"
        backgroundImage={heroBanner}
        withGradient={true}
      />
      <Gallery />
    </div>
  );
}

export default Home;

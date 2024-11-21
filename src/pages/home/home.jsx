import "./_home.scss";
import Banner from "../../components/banner/banner";
import Gallery from "../../components/gallery/gallery";
import heroBanner from "../../../../my-app/src/assets/img/herobanner.webp";

function Home() {
  return (
    <div className="home">
      <Banner
        bannerTextPart1="Chez vous, "
        bannerTextPart2="partout et ailleurs"
        backgroundImage={heroBanner}
        withGradient={true}
        b
      />
      <Gallery />
    </div>
  );
}

export default Home;

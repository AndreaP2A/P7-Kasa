import "./_footer.scss";
import logofooter from "../../assets/img/logofooter.png";

function Footer() {
  return (
    <footer className="footer">
      <img src={logofooter} alt="Logo" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;

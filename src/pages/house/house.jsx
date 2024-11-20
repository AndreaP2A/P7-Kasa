import "./_house.scss";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { getHouseById } from "../../services/Api";

function House() {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const house = getHouseById(id);
    if (!house) {
      navigate("/error404");
    }
  }, [id, navigate]);
  return <div>.</div>;
}

export default House;

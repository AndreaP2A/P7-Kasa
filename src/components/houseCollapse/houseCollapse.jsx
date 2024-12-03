import Collapse from "../../components/collapse/collapse";

function HouseCollapse({ house, className }) {
  const collapseItems = [
    { title: "Description", text: house.description },
    { title: "Équipements", text: house.equipments },
  ];

  return <Collapse items={collapseItems} className={className} />;
}

export default HouseCollapse;

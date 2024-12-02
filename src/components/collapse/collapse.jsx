import "./_collapse.scss";
import CollapseItem from "../../components/collapseItem/collapseItem";

function Collapse({ items, className }) {
  return (
    <div className={`collapse_container ${className}`}>
      {items.map((item, index) => (
        <CollapseItem key={index} title={item.title} text={item.text} />
      ))}
    </div>
  );
}

export default Collapse;

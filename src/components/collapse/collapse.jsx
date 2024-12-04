import "./_collapse.scss";
import CollapseItem from "../../components/collapseItem/collapseItem";

/**
 * Collapse component that renders a list of collapsible items.
 *
 * @param {Object[]} items - Array of items to be displayed in the collapse.
 * @param {string} items[].title - Title of the collapse item.
 * @param {string} items[].text - Text content of the collapse item (from collapseItem).
 * @param {string} [className] - Additional class name for the collapse container.
 * @returns {JSX.Element} The rendered collapse component.
 */
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

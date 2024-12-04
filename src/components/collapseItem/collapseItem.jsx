import { useState } from "react";
import arrowIcon from "../../assets/img/arrowback.png";

/**
 * CollapseItem component renders a collapsible section with a title and content.
 * The content can be either a string or an array of strings.
 *
 * @param {Object} props - The component props.
 * @param {string} props.title - The title of the collapsible item.
 * @param {string|string[]} props.text - The content of the collapsible item, can be a string or an array of strings (as a list).
 * @returns {JSX.Element} The rendered CollapseItem component.
 */
function CollapseItem({ title, text }) {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the isOpen state when the title is clicked.
  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  // Render the content based on whether isOpen is true or false (paragraph by default, or list)
  const renderContent = () => {
    if (Array.isArray(text)) {
      return (
        <ul>
          {text.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      );
    }
    return <p>{text}</p>;
  };

  return (
    <div className="collapse_item">
      <h2 className="collapse_item_title" onClick={toggleCollapse}>
        {title}
        <img
          src={arrowIcon}
          alt="Toggle"
          className={`collapse_item_icon ${isOpen ? "open" : ""}`}
        />
      </h2>
      <div className={`collapse_item_text ${isOpen ? "open" : ""}`}>
        {renderContent()}
      </div>
    </div>
  );
}

export default CollapseItem;

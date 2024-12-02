import { useState } from "react";
import arrowIcon from "../../assets/img/arrowback.png";

function CollapseItem({ title, text }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

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

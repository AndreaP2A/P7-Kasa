import "./_collapse.scss";
import React, { useState } from "react";
import arrowIcon from "../../assets/img/arrowback.png";

function Collapse({ items, className }) {
  return (
    <div className={`collapse_container ${className}`}>
      {items.map((item, index) => (
        <CollapseItem key={index} title={item.title} text={item.text} />
      ))}
    </div>
  );
}

function CollapseItem({ title, text }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
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
      <div className={`collapse_item_text ${isOpen ? "open" : ""}`}>{text}</div>
    </div>
  );
}

export default Collapse;

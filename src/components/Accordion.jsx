import React, { useState } from "react";
import "./Accordion.scss";

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleHeader = (index) => {
    setActiveIndex(index);
  };

  const renderedItems = items.map((item, index) => {
    const activeClass = activeIndex === index ? "active" : "";

    return (
      <div className={`accordion ${activeClass}`}>
        <div className="header" onClick={() => toggleHeader(index)}>
          <p className="title">{item.name}</p>
        </div>
        <div className="content">
          <p className="desc">{item.desc}</p>
        </div>
      </div>
    );
  });

  return <>{renderedItems}</>;
};

export default Accordion;

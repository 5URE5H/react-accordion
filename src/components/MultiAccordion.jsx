import React, { useState } from "react";
import "./MultiAccordion.scss";

const MultiAccordion = ({ items }) => {
  const [expand, setExpand] = useState(Array(items.length).fill(false));

  const toggleHeader = (index) => {
    setExpand((prev) =>
      prev.map((e, idx) => {
        if (index === idx) return !e;
        else return e;
      })
    );
  };

  const renderedItems = items.map((item, index) => {
    const activeClass = expand[index] ? "active" : "";

    return (
      <div key={index} className={`accordion ${activeClass}`}>
        <div className="header" onClick={() => toggleHeader(index)}>
          <p className="title">{item.name}</p>
        </div>
        <div className="content">
          <p className="desc">{item.desc}</p>
        </div>
      </div>
    );
  });

  return renderedItems;
};

export default MultiAccordion;

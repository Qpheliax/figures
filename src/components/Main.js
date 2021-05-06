import React, { useState, useEffect } from "react";
import Figures from "./Figures";

const Main = ({ figures }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const onNavClick = (index) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    setActiveIndex(0);
  }, []);

  const navList = figures.map((figure, index) => {
    const active = index === activeIndex ? "active" : "";

    return (
      <li
        key={index}
        className={`listItem ${active}`}
        onClick={() => onNavClick(index)}
      >
        {figure.name}
      </li>
    );
  });

  return (
    <>
      <nav className="aside">
        <ul>{navList}</ul>
      </nav>
      <Figures figures={figures} id={activeIndex} />
    </>
  );
};

export default Main;

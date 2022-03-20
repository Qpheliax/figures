import React, { useState, useEffect } from "react";
import Figures from "./Figures";

import { ReactComponent as Cross } from "../assets/icons/Cross.svg";
import { ReactComponent as Burger } from "../assets/icons/Burger.svg";

const Main = ({ figures }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [start, setStart] = useState(null);
  const [mobileNavigationOpen, setMobileNavigationOpen] = useState(false);

  const onNavClick = (index) => {
    const element = document.getElementById("figure");
    if (element) {
      const cloneElement = element.cloneNode(true);
      element.parentNode.replaceChild(cloneElement, element);
    }

    setActiveIndex(index);
    setStart(1);
  };

  const handleToggle = () => {
    setMobileNavigationOpen(!mobileNavigationOpen);
  };

  useEffect(() => {
    setStart(0);
  }, []);

  const navList = figures.map((figure, index) => {
    const active = index === activeIndex ? "active" : "";

    return (
      <li key={index} className={`listItem ${active}`}>
        <span
          key={index}
          onClick={() => {
            onNavClick(index);
            setMobileNavigationOpen(false);
          }}
        >
          {figure.name}
        </span>
      </li>
    );
  });

  return (
    <>
      <nav className="aside" role="navigation">
        <ul>{navList}</ul>
      </nav>
      <nav className="aside_mobile" role="navigation">
        <button className="aside_mobile__button" onClick={handleToggle}>
          {mobileNavigationOpen ? <Cross /> : <Burger />}
        </button>
        <ul
          className={`aside_mobile__menu${mobileNavigationOpen ? " show" : ""}`}
        >
          {navList}
        </ul>
      </nav>
      <Figures figures={figures} id={activeIndex} start={start} />
    </>
  );
};

export default Main;

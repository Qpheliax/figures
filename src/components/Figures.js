import React, { useEffect } from "react";

const Figures = ({ figures, id }) => {
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     const el1 = document.getElementById("reload");

  //     const onAnimate = (event) => {
  //       el1.addEventListener("click", (event) => {
  //         [...document.querySelectorAll("animate")].map((element) => {
  //           return element.beginElement();
  //         });
  //       });
  //     };
  //     const onAnimateTransform = (event) => {
  //       el1.addEventListener("click", (event) => {
  //         [...document.querySelectorAll("animateTransform")].map((element) => {
  //           return element.beginElement();
  //         });
  //       });
  //     };

  //     onAnimate();
  //     onAnimateTransform();
  //   }, 1000);
  //   return () => {
  //     clearTimeout(timer);
  //   };
  // }, [id]);

  const figure = figures.map((figure, index) => {
    return (
      <React.Fragment key={index}>
        <h2 className="h2">{figure.name} </h2>
        <div className="figure">{figure.svg}</div>
      </React.Fragment>
    );
  });

  return (
    <main className="main">
      <div className="container">{figure[id]}</div>
    </main>
  );
};

export default Figures;

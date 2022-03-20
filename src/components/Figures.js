import React, { useState } from "react";

const Figures = ({ figures, id, start }) => {
  const [, setRe] = useState(false);

  const onLoad = () => {
    setRe(true);
  };

  const selectStart = () => {
    if (start === 0) {
      return (
        <>
          <h2 className="h2 start">
            <p>
              På den här webbsidan kan du följa hur en enkel parallellogram
              transformeras till rektangel, kvadrat och romb samt hur detta
              påverkar dess egenskaper. På motsvarande sätt kan du följa hur en
              godtycklig triangel transformeras. Här kan du även finnas
              kongruens och symmetriegenskaper för parallellogrammer och
              trianglar.
            </p>
            <p className="luck">
              Lycka till <sub className="luck__triangel">△</sub>
            </p>
          </h2>
        </>
      );
    }
  };

  const figure = figures.map((figure, index) => {
    return (
      <React.Fragment key={index}>
        <h2 className="h2">{figure.name} </h2>
        <div
          className="figure"
          onLoad={() => {
            onLoad();
          }}
        >
          {figure.svg}
        </div>
      </React.Fragment>
    );
  });

  return (
    <main className="main" role="main">
      <div className="container">
        {figure[id]}
        {selectStart()}
      </div>
    </main>
  );
};

export default Figures;

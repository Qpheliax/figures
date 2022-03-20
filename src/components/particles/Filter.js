import React from "react";

const Filter = () => {
  return (
    <svg height="0">
      <filter
        x="0%"
        y="0%"
        width="100%"
        height="100%"
        filterUnits="objectBoundingBox"
        id="pencil"
      >
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.5"
          numOctaves="5"
          stitchTiles="stitch"
          result="f1"
        ></feTurbulence>
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0, 0 0 0 0 0, 0 0 0 0 0, 0 0 0 -1.5 1.5"
          result="f2"
        ></feColorMatrix>
        <feComposite
          operator="in"
          in2="f2b"
          in="SourceGraphic"
          result="f3"
        ></feComposite>
        <feTurbulence
          type="fractalNoise"
          baseFrequency="1.2"
          numOctaves="3"
          result="noise"
        ></feTurbulence>
        <feDisplacementMap
          xChannelSelector="R"
          yChannelSelector="G"
          scale="2.5"
          in="f3"
          result="f4"
        ></feDisplacementMap>
      </filter>
    </svg>
  );
};

export default Filter;

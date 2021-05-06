import React from "react";
import Header from "./particles/Header";
import Main from "./Main";
import Footer from "./particles/Footer";
import Filter from "./particles/Filter";
import "../styles/main.scss";

const figures = [
  {
    name: "Parallellogram",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="505"
        height="200"
        viewBox="0 0 400 425"
        id="figure"
      >
        <rect
          x="1.5"
          y="15"
          width="600"
          height="300"
          fill="none"
          stroke="#fff"
          strokeWidth="6"
          transform="skewX(-30)"
        >
          <animate
            attributeName="opacity"
            from="0"
            to="1"
            dur="1s"
            begin="0s"
            fill="freeze"
            repeatCount="1"
            restart="whenNotActive"
          />
        </rect>
        <g>
          <line
            x1="29"
            y2="59"
            transform="translate(270 -5)"
            fill="none"
            stroke="#ff5733"
            strokeWidth="5"
          ></line>
          <line
            x1="28"
            y2="58"
            transform="translate(250 -5)"
            fill="none"
            stroke="#ff5733"
            strokeWidth="5"
          ></line>

          <line
            x1="29"
            y2="59"
            transform="translate(170 295)"
            fill="none"
            stroke="#ff5733"
            strokeWidth="5"
          ></line>
          <line
            x1="28"
            y2="58"
            transform="translate(150 295)"
            fill="none"
            stroke="#ff5733"
            strokeWidth="5"
          ></line>

          <line
            x1="80"
            y2="5"
            transform="translate(-120 150)"
            fill="none"
            stroke="#01d5fe"
            strokeWidth="5"
          ></line>

          <line
            x1="80"
            y2="5"
            transform="translate(480 150)"
            fill="none"
            stroke="#01d5fe"
            strokeWidth="5"
          ></line>

          <path
            d="M0,0S17.057.4,24.057,9.152,28,35,28,35"
            transform="translate(-160 280)"
            fill="none"
            stroke="#55fe01"
            strokeWidth="4"
          ></path>
          <path
            d="M28.664,35s-17.057-.4-24.057-9.152S.664,0,.664,0"
            transform="translate(540 20)"
            fill="none"
            stroke="#55fe01"
            strokeWidth="4"
          ></path>

          <path
            d="M0,19.658s23.243,3.773,38.523-1.141S61.122,0,61.122,0"
            transform="translate(-23 18)"
            fill="none"
            stroke="#da8dfd"
            strokeWidth="4"
          ></path>
          <path
            d="M0,29s29.281,5.567,48.531-1.683S77,0,77,0"
            transform="translate(-23 23)"
            fill="none"
            stroke="#da8dfd"
            strokeWidth="4"
          ></path>

          <path
            d="M61.122,1.384S37.879-2.389,22.6,2.525,0,21.042,0,21.042"
            transform="translate(380 287)"
            fill="none"
            stroke="#da8dfd"
            strokeWidth="4"
          ></path>
          <path
            d="M77,2.042S47.719-3.525,28.469,3.725,0,31.042,0,35"
            transform="translate(360 277)"
            fill="none"
            stroke="#da8dfd"
            strokeWidth="4"
          ></path>
          <animate
            attributeName="opacity"
            from="0"
            to="0"
            dur="1s"
            begin="0s"
            fill="freeze"
            repeatCount="1"
            restart="whenNotActive"
          />
          <animate
            attributeName="opacity"
            from="0"
            to="1"
            dur="0.5s"
            begin="1s"
            fill="freeze"
            repeatCount="1"
            restart="whenNotActive"
          />
        </g>

        {/* <text
          id="reload"
          transform="translate(50 465)"
          fill="orange"
          fontSize="60"
          fontFamily="Rubik-Regular, Rubik"
        >
          <tspan x="0" y="56"></tspan>
        </text> */}
      </svg>
    ),
  },
  {
    name: "Rektangel",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="505"
        height="200"
        viewBox="0 0 400 425"
        id="figure"
      >
        <rect
          className="parallellogram"
          x="1.5"
          y="15"
          width="600"
          height="300"
          fill="none"
          stroke="#fff"
          strokeWidth="5"
          transform="skewX(-30)"
        >
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="skewX"
            from="-30"
            to="0"
            dur="1s"
            begin="0s"
            fill="freeze"
            repeatCount="1"
            restart="whenNotActive"
          />
        </rect>
        <rect
          className="parallellogram"
          x="1.5"
          y="15"
          width="600"
          height="300"
          fill="none"
          stroke="#fff"
          strokeDasharray="30,30"
          strokeWidth="5"
          transform="skewX(-30)"
        >
          <animate
            attributeName="opacity"
            from="1"
            to="0.3"
            dur="1s"
            begin="1s"
            fill="freeze"
            repeatCount="1"
            restart="whenNotActive"
          />
        </rect>
        <g>
          <g transform="translate(-105 -930)">
            <line
              x2="60"
              transform="translate(110 1176)"
              fill="none"
              stroke="#55fe01"
              strokeLinecap="square"
              strokeWidth="4"
            />
            <line
              x1="60"
              transform="translate(170 1176) rotate(90)"
              fill="none"
              stroke="#55fe01"
              strokeLinecap="square"
              strokeWidth="4"
            />
          </g>
          <text
            transform="translate(75 165)"
            fill="#55fe01"
            fontSize="60"
            fontFamily="Rubik-Regular, Rubik"
          >
            <tspan x="0" y="65">
              90°
            </tspan>
          </text>
          <line
            x2="60"
            y2="3"
            transform="translate(-25 150)"
            fill="none"
            stroke="#01d5fe"
            strokeWidth="4"
          />
          <line
            x2="60"
            y2="3"
            transform="translate(575 150)"
            fill="none"
            stroke="#01d5fe"
            strokeWidth="4"
          />

          <line
            x1="29"
            y2="59"
            transform="translate(300 -5)"
            fill="none"
            stroke="#ff5733"
            strokeWidth="5"
          />
          <line
            x1="28"
            y2="58"
            transform="translate(320 -5)"
            fill="none"
            stroke="#ff5733"
            strokeWidth="5"
          />

          <line
            x1="29"
            y2="59"
            transform="translate(270 275)"
            fill="none"
            stroke="#ff5733"
            strokeWidth="5"
          />
          <line
            x1="28"
            y2="58"
            transform="translate(290 275)"
            fill="none"
            stroke="#ff5733"
            strokeWidth="5"
          />
          <animate
            attributeName="opacity"
            from="0"
            to="0"
            dur="1s"
            begin="0s"
            fill="freeze"
            repeatCount="1"
            restart="whenNotActive"
          />
          <animate
            attributeName="opacity"
            from="0"
            to="1"
            dur="0.5s"
            begin="1s"
            fill="freeze"
            repeatCount="1"
            restart="whenNotActive"
          />
        </g>
        {/* <text
          id="reload"
          transform="translate(50 465)"
          fill="orange"
          fontSize="60"
          fontFamily="Rubik-Regular, Rubik"
        >
          <tspan x="0" y="56">
            R E S T A R T
          </tspan>
        </text> */}
      </svg>
    ),
  },
  {
    name: "Kvadrat",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="505"
        height="200"
        viewBox="0 0 400 425"
        id="figure"
      >
        <rect
          className="parallellogram"
          x="1.5"
          y="15"
          width="600"
          height="300"
          fill="none"
          stroke="#fff"
          strokeWidth="5"
          transform="skewX(-30)"
        >
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="skewX"
            from="-30"
            to="0"
            dur="1s"
            begin="0s"
            fill="freeze"
            repeatCount="1"
            restart="whenNotActive"
          />
          <animate
            attributeName="width"
            from="600"
            to="300"
            dur="1s"
            begin="1s"
            fill="freeze"
            repeatCount="1"
            restart="whenNotActive"
          />
        </rect>
        <rect
          className="parallellogram"
          x="1.5"
          y="15"
          width="600"
          height="300"
          fill="none"
          stroke="#fff"
          strokeDasharray="30,30"
          strokeWidth="5"
          transform="skewX(-30)"
        >
          <animate
            attributeName="opacity"
            from="1"
            to="0.3"
            dur="1s"
            begin="2s"
            fill="freeze"
            repeatCount="1"
            restart="whenNotActive"
          />
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="skewX"
            from="-30"
            to="0"
            dur="1s"
            begin="2s"
            fill="freeze"
            repeatCount="1"
            restart="whenNotActive"
          />
        </rect>
        <g>
          <g transform="translate(-105 -930)">
            <line
              x2="60"
              transform="translate(110 1176)"
              fill="none"
              stroke="#55fe01"
              strokeLinecap="square"
              strokeWidth="4"
            />
            <line
              x1="60"
              transform="translate(170 1176) rotate(90)"
              fill="none"
              stroke="#55fe01"
              strokeLinecap="square"
              strokeWidth="4"
            />
          </g>
          <text
            transform="translate(75 165)"
            fill="#55fe01"
            fontSize="60"
            fontFamily="Rubik-Regular, Rubik"
          >
            <tspan x="0" y="65">
              90°
            </tspan>
          </text>
          <line
            x2="60"
            y2="3"
            transform="translate(-25 150)"
            fill="none"
            stroke="#01d5fe"
            strokeWidth="4"
          />
          <line
            x2="60"
            y2="3"
            transform="translate(270 150)"
            fill="none"
            stroke="#01d5fe"
            strokeWidth="4"
          />
          <line
            x2="3"
            y2="60"
            transform="translate(150 -10)"
            fill="none"
            stroke="#01d5fe"
            strokeWidth="4"
          />
          <line
            x2="3"
            y2="60"
            transform="translate(150 280)"
            fill="none"
            stroke="#01d5fe"
            strokeWidth="4"
          />
          <animate
            attributeName="opacity"
            from="0"
            to="0"
            dur="3s"
            begin="0s"
            fill="freeze"
            repeatCount="1"
            restart="whenNotActive"
          />
          <animate
            attributeName="opacity"
            from="0"
            to="1"
            dur="0.5s"
            begin="3s"
            fill="freeze"
            repeatCount="1"
            restart="whenNotActive"
          />
        </g>
      </svg>
    ),
  },
  {
    name: "Romb",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="505"
        height="300"
        viewBox="-300 0 1500 600"
        id="figure"
      >
        <rect
          className="parallellogram"
          x="1.5"
          y="1.5"
          width="600"
          height="300"
          fill="none"
          stroke="#fff"
          strokeWidth="5"
          transform="skewX(-30)"
        >
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="skewX"
            from="-30"
            to="0"
            dur="1s"
            begin="0s"
            fill="freeze"
            repeatCount="1"
          />
          <animate
            attributeName="width"
            from="600"
            to="300"
            dur="1s"
            begin="1s"
            fill="freeze"
            repeatCount="1"
          />
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="rotate"
            from="0"
            to="45, 150, 150"
            dur="1s"
            begin="5s"
            fill="freeze"
            repeatCount="1"
            additive="sum"
          />
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="scale"
            from="1"
            to="1.3"
            dur="1s"
            begin="6s"
            fill="freeze"
            repeatCount="1"
            additive="sum"
          />
        </rect>

        {/* ------------------ */}

        <rect
          className="parallellogram"
          x="1.5"
          y="1.5"
          width="600"
          height="300"
          fill="none"
          stroke="#fff"
          strokeDasharray="30,30"
          strokeWidth="5"
          transform="skewX(-30)"
        >
          <animate
            attributeName="opacity"
            from="1"
            to="0.3"
            dur="1s"
            begin="2s"
            fill="freeze"
            repeatCount="1"
          />
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="skewX"
            from="-30"
            to="0"
            dur="1s"
            begin="2s"
            fill="freeze"
            repeatCount="1"
          />
          <animate
            attributeName="width"
            from="600"
            to="300"
            dur="1s"
            begin="3s"
            fill="freeze"
            repeatCount="1"
          />
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="translate"
            from="0"
            to="500"
            dur="1s"
            begin="4s"
            fill="freeze"
            repeatCount="1"
          />
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="rotate"
            from="0"
            to="45, 150, 150"
            dur="1s"
            begin="5s"
            fill="freeze"
            repeatCount="1"
            additive="sum"
          />
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="scale"
            from="1"
            to="1.3"
            dur="1s"
            begin="6s"
            fill="freeze"
            repeatCount="1"
            additive="sum"
          />
        </rect>

        {/* ------------------ */}

        <g>
          <line
            x2="0"
            y2="425"
            transform="translate(147 -42)"
            fill="none"
            stroke="#da8dfd"
            strokeWidth="4"
            strokeDasharray="30,30"
          >
            <animate
              attributeName="y2"
              attributeType="XML"
              from="0"
              to="425"
              dur="0.5s"
              begin="6s"
              fill="freeze"
              repeatCount="1"
            />
          </line>
          <line
            x2="425"
            y2="0"
            transform="translate(-53 165)"
            fill="none"
            stroke="#da8dfd"
            strokeWidth="4"
            strokeDasharray="32,32"
          >
            <animate
              attributeName="x2"
              attributeType="XML"
              from="0"
              to="425"
              dur="0.5s"
              begin="6s"
              fill="freeze"
              repeatCount="1"
            />
          </line>

          <animate
            attributeName="opacity"
            from="0"
            to="0"
            dur="6s"
            begin="0s"
            fill="freeze"
            repeatCount="1"
          />

          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="translate"
            from="0 "
            to="-40"
            dur="1s"
            begin="4s"
            fill="freeze"
            repeatCount="1"
            additive="sum"
          />

          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="scale"
            from="1"
            to="1.3"
            dur="1s"
            begin="5s"
            fill="freeze"
            repeatCount="1"
            additive="sum"
          />

          <animate
            attributeName="opacity"
            from="0"
            to="1"
            dur="0.5s"
            begin="6s"
            fill="freeze"
            repeatCount="1"
          />
        </g>

        {/* ------------------ */}

        <g>
          <line
            x2="60"
            y2="35"
            transform="translate(0 50)"
            fill="none"
            stroke="#01d5fe"
            strokeWidth="4"
          />
          <line
            x2="60"
            y2="-35"
            transform="translate(230 75)"
            fill="none"
            stroke="#01d5fe"
            strokeWidth="4"
          />

          <line
            x2="60"
            y2="-35"
            transform="translate(0 270)"
            fill="none"
            stroke="#01d5fe"
            strokeWidth="4"
          />
          <line
            x2="60"
            y2="35"
            transform="translate(235 235)"
            fill="none"
            stroke="#01d5fe"
            strokeWidth="4"
          />

          <g transform="translate(152 130)">
            <line
              x2="30"
              fill="none"
              stroke="#55fe01"
              strokeLinecap="square"
              strokeWidth="4"
            />
            <line
              x1="30"
              transform="translate(30 0) rotate(90)"
              fill="none"
              stroke="#55fe01"
              strokeLinecap="square"
              strokeWidth="4"
            />
          </g>
          <text
            transform="translate(180 52)"
            fill="#55fe01"
            fontSize="40"
            fontFamily="Rubik-Regular, Rubik"
          >
            <tspan x="0" y="65">
              90°
            </tspan>
          </text>

          <animate
            attributeName="opacity"
            from="0"
            to="0"
            dur="6s"
            begin="0s"
            fill="freeze"
            repeatCount="1"
          />

          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="translate"
            from="0 "
            to="-40"
            dur="1s"
            begin="4s"
            fill="freeze"
            repeatCount="1"
            additive="sum"
          />

          <animate
            attributeName="opacity"
            from="0"
            to="1"
            dur="0.5s"
            begin="7s"
            fill="freeze"
            repeatCount="1"
          />

          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="scale"
            from="1"
            to="1.3"
            dur="1s"
            begin="5s"
            fill="freeze"
            repeatCount="1"
            additive="sum"
          />
        </g>
        {/* <text
          id="reload"
          transform="translate(250 665)"
          fill="orange"
          fontSize="60"
          fontFamily="Rubik-Regular, Rubik"
        >
          <tspan x="0" y="56">
            R E S T A R T
          </tspan>
        </text> */}
      </svg>
    ),
  },
];

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Main figures={figures} />
        <Footer />
        <Filter />
      </>
    );
  }
}

export default App;

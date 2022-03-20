import React from "react";
import "css-doodle";

function Doodle() {
  return (
    <css-doodle>
      {`
      
    --s: .1vmin;
    --c: @p((53, 35, 75), (92, 59, 111),
       (216, 76, 115), (255, 132, 132));

    :doodle {
      @grid: 15 / 100vmax;
      overflow:hidden;
  }

  @random {
      position:absolute;
      bottom: 0;
      right: 0;

      :after {
          content: @p("\u2610", "\u25B1", "\u25F9", "\u20E4" );
          color: rgb(var(--c));
          padding: 0;
          font-weight: bold;
          font-size: @rand(3rem, 8rem);
          text-stroke: var(--s) #fff;
          -webkit-text-stroke:.1vmin #fff;
          filter: drop-shadow(0 0 @rand(1px, 3px) @p(#000, #fff, #aaa));
          transform: rotate(@r(360deg)) translate(@r(-500%, 0%), @r(-500%, 0%));
          text-shadow: @m(5, (calc(@n() * var(--s)) calc(@n() * var(--s)) 0 @pn(currentColor, #fff))),
          @m(3, (calc((@n() + 3) * var(--s)) calc((@n() + 3) * var(--s)) 0 @pn(rgba(var(--c), .1), #fff)));

      }
  }
    `}
    </css-doodle>
  );
}

export default Doodle;

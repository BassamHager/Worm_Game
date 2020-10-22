import React from "react";
import { useRef } from "react";
import { useCallback } from "react";
import { useEffect } from "react";

const Game = () => {
  // constants
  const WORM_SPEED = 1;
  // variables
  let lastRenderTime = useRef(null);
  let isGaveOver = false;

  // methods
  // main function
  const main = useCallback(
    (currentTime) => {
      if (isGaveOver) return;
      // happy flow
      window.requestAnimationFrame(main);
      const secondsSinceLastRender =
        (currentTime - lastRenderTime.current) / 1000;
      if (secondsSinceLastRender < 1 / WORM_SPEED) return;
      lastRenderTime.current = currentTime;
      update();
      draw();
      console.log("work");
    },
    [WORM_SPEED, lastRenderTime, isGaveOver]
  );

  // helping functions
  // update
  const update = () => {};

  // draw
  const draw = () => {};

  useEffect(() => {
    main();
    return () => cancelAnimationFrame(main);
  }, [main]);

  return <div className="game-board"></div>;
};

export default Game;

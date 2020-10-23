import React, { useEffect, useRef, useCallback } from "react";
import { useState } from "react";
import Worm from "./logic/Worm";

const Game = () => {
  const { WORM_SPEED, updateWorm, drawWorm } = Worm();
  // constants
  const gameBoard = useRef(null);
  const lastRenderTime = useRef(null);
  // variables
  let isGaveOver = false;
  const [isStop, setIsStop] = useState(false);

  // helper
  const update = useCallback(() => {
    console.log(isStop);
    if (!isStop) updateWorm();
    // updateTarget();
    // checkGameOver();
  }, [updateWorm, isStop]);

  // helper
  const draw = useCallback(() => {
    drawWorm(gameBoard.current);
  }, [drawWorm]);

  // main
  const main = useCallback(
    (currentTime) => {
      if (isGaveOver) return;
      // happy flow
      !isStop && window.requestAnimationFrame(main);
      const secondsSinceLastRender =
        (currentTime - lastRenderTime.current) / 1000;
      if (secondsSinceLastRender < 1 / WORM_SPEED) return;
      lastRenderTime.current = currentTime;
      console.log(isStop);
      update();
      draw();

      console.log("work");
    },
    [WORM_SPEED, lastRenderTime, isGaveOver, update, draw]
  );

  const stop = () => {
    setIsStop(true);
    window.cancelAnimationFrame(main);
  };

  useEffect(() => {
    console.log(isStop);
    !isStop && requestAnimationFrame(main);
    return () => cancelAnimationFrame(main);
  }, [main]);

  return (
    <>
      <div ref={gameBoard} className="game-board"></div>
      <button onClick={stop} className="stop">
        Stop
      </button>
    </>
  );
};

export default Game;

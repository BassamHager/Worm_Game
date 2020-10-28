import React, { useState, useEffect, useRef, useCallback } from "react";
import { useContext } from "react";
// context
import { AppContext } from "../context/AppContext";

const Game = () => {
  // context
  const { wormSpeed, updateWorm, drawWorm } = useContext(AppContext);
  // const { drawTarget, updateTarget } = Target();
  // inner state
  const gameBoard = useRef();

  const [isGameOver] = useState(false);
  const lastRenderTime = useRef(null);
  // helper
  const draw = useCallback(() => {
    gameBoard.current.innerHTML = "";
    drawWorm(gameBoard.current);
    // updateWorm(gameBoard.current);
  }, [drawWorm]);

  // helper
  const update = useCallback(() => {
    // updateWorm();
  }, [updateWorm]);

  // main
  const main = useCallback(
    (currentTime) => {
      if (isGameOver) return;
      // happy flow
      window.requestAnimationFrame(main);
      const secondsSinceLastRender =
        (currentTime - lastRenderTime.current) / 1000;
      if (secondsSinceLastRender < 1 / wormSpeed) return;
      lastRenderTime.current = currentTime;
      draw();
      update();
      console.log("...");
    },
    [isGameOver, update, draw, wormSpeed, lastRenderTime]
  );

  useEffect(() => {
    requestAnimationFrame(main);
    return () => cancelAnimationFrame(main);
  }, [main]);

  return (
    <>
      {!isGameOver ? (
        <div ref={gameBoard} className="game-board">
          {/* <div></div> */}
        </div>
      ) : (
        <div>Game Over!</div>
      )}
    </>
  );
};

export default Game;

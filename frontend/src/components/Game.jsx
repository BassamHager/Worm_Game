import React, { useEffect, useRef, useCallback } from "react";
import { useContext } from "react";
// context
import { AppContext } from "../context/AppContext";

const Game = () => {
  // context
  const {
    wormSpeed,
    updateWorm,
    drawWorm,
    drawTarget,
    updateTarget,
  } = useContext(AppContext);

  // inner state
  const gameBoard = useRef();
  const lastRenderTime = useRef(null);

  // helper
  const draw = useCallback(() => {
    gameBoard.current.innerHTML = "";
    drawWorm(gameBoard.current);
    drawTarget(gameBoard.current);
  }, [drawWorm, drawTarget]);

  // helper
  const update = useCallback(() => {
    updateWorm(gameBoard.current);
    updateTarget();
  }, [updateWorm, updateTarget]);

  // main
  const main = useCallback(
    (currentTime) => {
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
    [draw, update, wormSpeed]
  );

  useEffect(() => {
    requestAnimationFrame(main);
    return () => cancelAnimationFrame(main);
  }, [main]);

  return (
    <>
      {true ? (
        <div ref={gameBoard} className="game-board" />
      ) : (
        <div>Game Over!</div>
      )}
    </>
  );
};

export default Game;

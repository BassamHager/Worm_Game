import {
  WORM_SPEED,
  updateWorm,
  drawWorm,
  getWormHead,
  isIntersected,
} from "./worm.js";
import { updateTarget, drawTarget } from "./target.js";
import { isOutsideGrid } from "./grid.js";

// constants
const gameBoard = document.getElementById("game-board");
// variables
let lastRenderTime = 0;
let isGaveOver = false;

// main
const main = (currentTime) => {
  if (isGaveOver) {
    if (confirm("you lose!\n\n Press ENTER or Click OK to Restart")) {
      return (window.location = "/");
    }
  }
  // happy
  window.requestAnimationFrame(main);
  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
  if (secondsSinceLastRender < 1 / WORM_SPEED) return;
  lastRenderTime = currentTime;
  update();
  draw();
};

// auto run
window.requestAnimationFrame(main);

// update
const update = () => {
  updateWorm();
  updateTarget();
  checkGameOver();
};

// draw
const draw = () => {
  gameBoard.innerHTML = "";
  drawWorm(gameBoard);
  drawTarget(gameBoard);
};

// game over
const checkGameOver = () =>
  (isGaveOver = isOutsideGrid(getWormHead()) || isIntersected());

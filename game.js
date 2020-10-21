import { WORM_SPEED, updateWorm, drawWorm } from "./worm.js";

// constants
const gameBoard = document.getElementById("game-board");
// variables
let lastRenderTime = 0;

const main = (currentTime) => {
  window.requestAnimationFrame(main);
  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
  if (secondsSinceLastRender < 1 / WORM_SPEED) return;
  lastRenderTime = currentTime;
  update();
  draw();
};

// window.requestAnimationFrame(main);

const update = () => {
  updateWorm();
};

const draw = () => {
  gameBoard.innerHTML = "";
  drawWorm(gameBoard);
};

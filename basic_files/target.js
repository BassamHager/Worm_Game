import { expandWorm, isTargetCaught } from "./worm.js";
import { randomizeTarget } from "./grid.js";

// constants
const EXPANSION_RATE = 5;
// variables
let target = randomizeTarget();

export const updateTarget = () => {
  if (isTargetCaught(target)) {
    expandWorm(EXPANSION_RATE);
    target = randomizeTarget();
  }
};

export const drawTarget = (gameBoard) => {
  const targetEl = document.createElement("div");
  targetEl.style.gridRowStart = target.y;
  targetEl.style.gridColumnStart = target.x;
  targetEl.classList.add("target");
  gameBoard.appendChild(targetEl);
};

const getRandomTargetPosition = () => {
  let newTargetPosition;
  while (newTargetPosition == null || isTargetCaught(newTargetPosition)) {
    newTargetPosition = randomizeTarget();
  }
  return newTargetPosition;
};

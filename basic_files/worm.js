import { getInputDirection } from "./input.js";

// constants
export const WORM_SPEED = 5;
const wormBody = [{ x: 11, y: 11 }];
// variables
let newElements = 0;

// draw worm
export const drawWorm = (gameBoard) => {
  wormBody.forEach((el) => {
    const wormEl = document.createElement("div");
    wormEl.style.gridRowStart = el.y;
    wormEl.style.gridColumnStart = el.x;
    wormEl.classList.add("worm");
    gameBoard.appendChild(wormEl);
  });
};

// expand worm
export const expandWorm = (amount) => (newElements += amount);

// catch target
export const isTargetCaught = (target, { isIntersect = false } = {}) =>
  wormBody.some((el, index) => {
    if (isIntersect && index === 0) return false;
    return el.x === target.x && el.y === target.y;
  }); // try also tracking the head

// add element
const addEl = () => {
  for (let i = 0; i < newElements; i++) {
    wormBody.push({ ...wormBody[wormBody.length - 1] });
  }
  newElements = 0;
};

// worm head
export const getWormHead = () => wormBody[0];

// check worm intersected
export const isIntersected = () =>
  isTargetCaught(wormBody[0], { isIntersect: true });

// update worm
export const updateWorm = () => {
  // add elements
  addEl();
  // direction
  const inputDirection = getInputDirection();
  // movement
  for (let i = wormBody.length - 2; i >= 0; i--) {
    wormBody[i + 1] = { ...wormBody[i] };
  }
  wormBody[0].x += inputDirection.x;
  wormBody[0].y += inputDirection.y;
};

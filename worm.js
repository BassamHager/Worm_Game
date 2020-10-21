import { getInputDirection } from "./input.js";

export const WORM_SPEED = 5;
const wormBody = [{ x: 11, y: 11 }];

export const updateWorm = () => {
  const inputDirection = getInputDirection();

  for (let i = wormBody.length - 2; i >= 0; i--) {
    wormBody[i + 1] = { ...wormBody[i] };
  }

  wormBody[0].x += inputDirection.x;
  wormBody[0].y += inputDirection.y;
};

export const drawWorm = (gameBoard) => {
  wormBody.forEach((el) => {
    const wormEl = document.createElement("div");
    wormEl.style.gridRowStart = el.y;
    wormEl.style.gridColumnStart = el.x;
    wormEl.classList.add("worm");
    gameBoard.appendChild(wormEl);
  });
};

// import React from "react";

const Worm = () => {
  // constants
  const WORM_SPEED = 5; // to be calculated in the main function
  const wormBody = [{ x: 11, y: 11 }]; // initial body = grid coordinates
  // variables
  let newElements = 1; // to be added to wormBody as target caught
  let inputDirection = { x: 0, y: 0 };
  let lastInputDirection = {};

  // methods
  const updateWorm = () => {
    // add elements
    // addEl();
    // direction
    const inputDirection = getInputDirection();
    // movement
    for (let i = wormBody.length - 2; i >= 0; i--) {
      wormBody[i + 1] = { ...wormBody[i] };
    }
    wormBody[0].x += inputDirection.x;
    wormBody[0].y += inputDirection.y;
  };

  const getInputDirection = () => {
    window.addEventListener("keydown", (e) => {
      switch (e.key) {
        case "ArrowUp":
          if (lastInputDirection.y !== 0) break;
          inputDirection = { x: 0, y: -1 };
          break;
        case "ArrowDown":
          if (lastInputDirection.y !== 0) break;
          inputDirection = { x: 0, y: 1 };
          break;
        case "ArrowLeft":
          if (lastInputDirection.x !== 0) break;
          inputDirection = { x: -1, y: 0 };
          break;
        case "ArrowRight":
          if (lastInputDirection.x !== 0) break;
          inputDirection = { x: 1, y: 0 };
          break;
      }
    });
    lastInputDirection = inputDirection;
    return inputDirection;
  };

  // draw worm
  const drawWorm = (gameBoard) => {
    wormBody.forEach((el) => {
      const wormEl = document.createElement("div");
      wormEl.style.gridRowStart = el.y;
      wormEl.style.gridColumnStart = el.x;
      wormEl.classList.add("worm");
      gameBoard.appendChild(wormEl);
    });
  };

  // // expand worm
  // const expandWorm = (amount) => (newElements += amount);

  // // catch target
  // const isTargetCaught = (target, { isIntersect = false } = {}) =>
  //   wormBody.some((el, index) => {
  //     if (isIntersect && index === 0) return false;
  //     return el.x === target.x && el.y === target.y;
  //   }); // try also tracking the head

  // // add element
  // const addEl = () => {
  //   for (let i = 0; i < newElements; i++) {
  //     wormBody.push({ ...wormBody[wormBody.length - 1] });
  //   }
  //   newElements = 0;
  // };

  // // worm head
  // const getWormHead = () => wormBody[0];

  // // check worm intersected
  // const isIntersected = () =>
  //   isTargetCaught(wormBody[0], { isIntersect: true });
  return { WORM_SPEED, wormBody, newElements, updateWorm, drawWorm };
};

export default Worm;

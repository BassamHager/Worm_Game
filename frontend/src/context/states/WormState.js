import { useState } from "react";

const WormState = () => {
  const [wormSpeed] = useState(5);
  const [wormBody, setWormBody] = useState([{ x: 11, y: 11 }]);
  const [expansionRate] = useState(3);
  const [newElements, setNewElements] = useState(1);
  // variables
  let inputDirection = { x: 0, y: 0 };
  let lastInputDirection = { x: 0, y: 0 };

  // methods
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

  // worm direction
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
        default:
          inputDirection = { x: 0, y: 0 };
      }
    });
    lastInputDirection = inputDirection;
    return inputDirection;
  };

  // expand worm
  const expandWorm = (amount) => setNewElements(newElements + amount);

  // update worm
  const updateWorm = () => {
    // add elements
    // addEl();
    // direction
    // inputDirection=getInputDirection()
    getInputDirection();
    // movement
    // console.log(wormBody);
    for (let i = wormBody.length - 2; i >= 0; i--) {
      // change neg
      wormBody[i + 1] = { ...wormBody[i] };
      setWormBody([...wormBody, (wormBody[i + 1] = { ...wormBody[i] })]);
    }
    // wormBody[0].x += inputDirection.x;
    setWormBody([...wormBody, { ...(wormBody[0].x += inputDirection.x) }]);
    // wormBody[0].y += inputDirection.y;
    setWormBody([...wormBody, { ...(wormBody[0].y += inputDirection.y) }]);
  };

  // // catch target
  // const isTargetCaught = (target, { isIntersect = false } = {}) =>
  //   wormBody.some((el, index) => {
  //     if (isIntersect && index === 0) return false;
  //     return el.x === target.x && el.y === target.y;
  //   }); // try also tracking the head

  // // add element
  // const addEl = () => {
  //   for (let i = 0; i < NEW_ELEMENTS; i++) {
  //     wormBody.push({ ...wormBody[wormBody.length - 1] });
  //   }
  //   NEW_ELEMENTS = 0;
  // };

  // // worm head
  // const getWormHead = () => wormBody[0];

  // // check worm intersected
  // const isIntersected = () =>
  //   isTargetCaught(wormBody[0], { isIntersect: true });

  return {
    wormSpeed,
    wormBody,
    setWormBody,
    expansionRate,
    newElements,
    setNewElements,
    inputDirection,
    lastInputDirection,
    // methods
    drawWorm,
    expandWorm,
    updateWorm,
  };
};

export default WormState;

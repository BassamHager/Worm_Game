import { useCallback, useRef, useState } from "react";

const WormState = () => {
  const [wormSpeed] = useState(0.7);
  const wormBody = [
    { x: 11, y: 11 },
    { x: 11, y: 12 },
    { x: 11, y: 13 },
  ];

  // methods
  // draw worm
  const drawWorm = useCallback(
    (gameBoard) => {
      wormBody.forEach((el) => {
        const wormEl = document.createElement("div");
        wormEl.classList.add("dot");
        wormEl.classList.add("worm");
        wormEl.style.left = `${(el.x - 1) * 5}%`;
        wormEl.style.top = `${(el.y - 1) * 5}%`;
        gameBoard.appendChild(wormEl);
      });
    },
    [wormBody]
  );

  // update worm
  let inputDirection = useRef({ x: 0, y: 0 });
  let lastInputDirection = useRef({ x: 0, y: 0 });

  window.addEventListener("keydown", (e) => {
    switch (e.key) {
      case "ArrowUp":
        if (lastInputDirection.current.y !== 0) break;
        inputDirection.current = { x: 0, y: -1 };
        break;
      case "ArrowDown":
        if (lastInputDirection.current.y !== 0) break;
        inputDirection.current = { x: 0, y: 1 };
        break;
      case "ArrowLeft":
        if (lastInputDirection.current.x !== 0) break;
        inputDirection.current = { x: -1, y: 0 };
        break;
      case "ArrowRight":
        if (lastInputDirection.current.x !== 0) break;
        inputDirection.current = { x: 1, y: 0 };
        break;
      default:
        console.log("default");
    }
  });

  const getInputDirection = useCallback(() => {
    lastInputDirection.current = inputDirection.current;
    return inputDirection.current;
  }, []);

  const updateWorm = useCallback(() => {
    const { x, y } = getInputDirection();
    console.log(getInputDirection());
    for (let i = wormBody.length - 2; i >= 0; i--) {
      wormBody[i + 1] = { ...wormBody[i] };
    }
    wormBody[0].x += x;
    wormBody[0].y += y;

    // const directions = {
    //   up: { x: 0, y: -1 },
    //   right: { x: 1, y: 0 },
    //   down: { x: 0, y: 1 },
    //   left: { x: -1, y: 0 },
    //   paused: { x: 0, y: 0 },
    // };
    // const { up, right, down, left } = directions;
    // window.addEventListener("keydown", (e) => {
    //   switch (e.key) {
    //     case "ArrowUp":
    //       if (lastInputDirection.current.y !== 0) break;
    //       inputDirection.current = up;
    //       break;
    //     case "ArrowDown":
    //       if (lastInputDirection.current.y !== 0) break;
    //       inputDirection.current = down;
    //       break;
    //     case "ArrowLeft":
    //       if (lastInputDirection.current.x !== 0) break;
    //       inputDirection.current = left;
    //       break;
    //     case "ArrowRight":
    //       if (lastInputDirection.current.x !== 0) break;
    //       inputDirection.current = right;
    //       break;
    //     default:
    //       console.log("wal");
    //   }
    // });
    // move
  }, [getInputDirection, wormBody]);

  return {
    wormSpeed,
    wormBody,
    // methods
    drawWorm,
    updateWorm,
  };
};

export default WormState;

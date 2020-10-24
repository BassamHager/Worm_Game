import { useCallback, useContext, useState } from "react";
// context
import { AppContext } from "../AppContext";

const Target = () => {
  const { wormBody, expandWorm, expansionRate } = useContext(AppContext);
  // inner state
  const [target, setTarget] = useState({ x: 5, y: 5 });

  const drawTarget = useCallback(
    (gameBoard) => {
      const targetEl = document.createElement("div");
      targetEl.style.gridRowStart = target.y;
      targetEl.style.gridColumnStart = target.x;
      targetEl.classList.add("target");
      gameBoard.appendChild(targetEl);
    },
    [target.x, target.y]
  );

  // catch target
  const isTargetCaught = useCallback(
    (target, { isIntersect = false } = {}) =>
      wormBody.some((el, index) => {
        if (isIntersect && index === 0) return false; // check index
        return el.x === target.x && el.y === target.y;
      }),
    [wormBody]
  ); // try also tracking the head

  const updateTarget = useCallback(() => {
    if (isTargetCaught(target)) {
      expandWorm(expansionRate);
      setTarget({ x: 15, y: 5 });
    }
  }, [expandWorm, expansionRate, isTargetCaught, target]);

  // const getRandomTargetPosition = () => {
  //   let newTargetPosition;
  //   while (newTargetPosition == null || isTargetCaught(newTargetPosition)) {
  //     newTargetPosition = randomizeTarget();
  //   }
  //   return newTargetPosition;
  // };

  return { updateTarget, drawTarget, isTargetCaught };
};

export default Target;

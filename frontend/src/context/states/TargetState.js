import { useCallback, useState } from "react";
// siblings
import WormState from "./WormState";

const Target = () => {
  const { wormBody } = WormState();
  // inner state
  const [target, setTarget] = useState({ x: 5, y: 5 });

  const drawTarget = useCallback(
    (gameBoard) => {
      const targetEl = document.createElement("div");
      targetEl.classList.add("dot");
      targetEl.classList.add("target");
      targetEl.style.left = `${(target.x - 1) * 5}%`;
      targetEl.style.top = `${(target.y - 1) * 5}%`;
      gameBoard.appendChild(targetEl);
    },
    [target.x, target.y]
  );

  // catch target
  const isTargetCaught = useCallback(
    (target, { isIntersect = false } = {}) => {
      wormBody.some((el, index) => {
        // if (isIntersect && index === 0) return false; // check index
        console.log(el);
        return el.x === target.x && el.y === target.y;
      });
    },
    [wormBody]
  ); // try also tracking the head

  const updateTarget = useCallback(() => {
    if (isTargetCaught(target)) {
      // expandWorm(expansionRate);
      setTarget({ x: 15, y: 5 });
      console.log("caught");
    }
  }, [isTargetCaught, target]);

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

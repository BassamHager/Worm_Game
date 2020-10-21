// constants
const GRID_SIZE = 21;

// create random target
export const randomizeTarget = () => {
  return {
    x: Math.floor(Math.random() * GRID_SIZE) + 1,
    y: Math.floor(Math.random() * GRID_SIZE) + 1,
  };
};

// check if head is outside grid
export const isOutsideGrid = (head) =>
  head.x < 1 || head.x > GRID_SIZE || head.y < 1 || head.y > GRID_SIZE;

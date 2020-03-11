const MovesEnum = Object.freeze({
  up: "up",
  down: "down",
  left: "left",
  right: "right",
});

/**
 * Move the snake in the best direction possible.
 * @param {Board} board 
 * @param {Snake} snake 
 * @return a MovesEnum's value.
 */
const move = (board, snake) => {
  const {height, width, food: foodArr, snakes: otherSnakes} = board;
  let shortestPath = 
}

/**
 *Find the distance to the closet food in 
 the foodArray to the Snake. 
 * @param {Food[]} foodArray 
 * @param {SnakeBodyPart} head 
 * @return the distance to the closest food as a
 * Path object (check the interface.ts)
 */
const findClosestFoodPath = (foodArray, head) => {
  let shortestDistance = Infinity;
  let shortestPath = {
    x: 0,
    y: 0
  };

  foodArray.forEach(food => {
    let xDistance = food.x - head.x;
    let yDistance = food.y - head.y;
    let distance = Math.sqrt(xDistance**2 + yDistance**2);
    if (distance < shortestDistance) {
      shortestDistance = distance;
      shortestPath.x = xDistance;
      shortestPath.y = yDistance;
    }
  });
};

module.exports = (app) => {
  app.post('/move', (req, res) => {
    console.log('received move');
    try {
      const resData = {
        status: 200,
        message: 'Received Move'
      };
      return res.json(resData);
    } catch (err) {
      res.status(404).json({
        status: 'error',
        message: err
      });
    }
  });
};

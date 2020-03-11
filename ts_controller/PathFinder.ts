import {Board, SnakeBodyPart, Snake,
  Food, Path
} from "./interface";

const PathFinder = {

  /**
   *Find the distance to the closest food in 
  the foodArray to the Snake. 
  * Set the curPath instance variable to 
  * the closest path found.
  */
  findClosestFoodPath: (foodArray: Food[],
    head: SnakeBodyPart): Path => {

    let shortestDistance = Infinity;
    let shortestPath: Path = {
      x: 0,
      y: 0
    };

    foodArray.forEach((food: Food) => {
      let xDistance = food.x - head.x;
      let yDistance = food.y - head.y;
      let distance = Math.sqrt(xDistance**2 + yDistance**2);
      if (distance < shortestDistance) {
        shortestDistance = distance;
        shortestPath.x = xDistance;
        shortestPath.y = yDistance;
      }
    });

    return shortestPath;
  }
}

export default PathFinder;
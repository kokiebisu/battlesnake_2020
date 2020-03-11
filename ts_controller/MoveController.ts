import {Board, SnakeBodyPart, Snake,
  Food, Path
} from "./interface";

import {MovesEnum, resolveMove} from "./Moves";


class MoveController {
    curPath: Path

    constructor() {
        this.curPath = null;
    }

    /**
     * Move the snake in the best direction possible.
     * @return a MovesEnum's value.
     */
    move(board: Board, snake: Snake): string {
      const {height, width, food: foodArr, snakes: otherSnakes}: {
        height: number,
        width: number,
        food: Food[],
        snakes: Snake[],
      } = board;

      return "up";
    }
}

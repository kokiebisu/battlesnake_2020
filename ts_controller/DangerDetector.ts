// Need to work on this
import {SnakeBodyPart, Snake} from "./interface";
import {MovesEnum, resolveMove} from "./Moves";

const DangerDetector = {

  /**
   * Check if there are a SnakeBodyPart (our own or others)
   * in the path that we are moving forward.
   * @return true if there's a body ahead, else false.
   */
  hasBodyAhead: (head: SnakeBodyPart, otherSnakes: Snake[],
    move: MovesEnum): boolean => {
    return true;
  },


  /**
   * Check if there are a wall (board's boundary)
   * in the path that we are moving forward.
   * @return true if there's a wall ahead, else false.
   */
  hasWallAhead: (head: SnakeBodyPart, height: number, 
    width: number, move: MovesEnum): boolean => {
    return true;
  }
}

export default DangerDetector;
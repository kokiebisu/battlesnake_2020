// need to work on this
import {Path} from "./interface";

export enum MovesEnum {
  Up = "up",
  Down = "down",
  Left = "left",
  Right = "right"
};

/**
 * Resolve the Move the snake is going to make;
 * @param move, the move our snake is going to make.
 * @param path, path object our snake currently has.
 * @return the new Path after the Move is made.
 */
export function resolveMove(move: MovesEnum, path: Path): Path {
  return path;
}
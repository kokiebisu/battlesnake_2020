interface Coord {
    [key: string]: number,
    x: number,
    y: number
}

export interface SnakeBodyPart extends Coord {}

export interface Food extends Coord {}

export interface Path extends Coord {}

export interface Snake {
    id: string,
    name: string,
    health: number,
    body: Coord[],
    shout: string
}

export interface Board {
    height: number,
    width: number,
    food: Food[],
    snakes: Snake[]
}
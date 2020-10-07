import {GridType} from './types'

const HORIZONTAL_WINNING_COORDS = [
  [
    [0, 0],
    [1, 0],
    [2, 0],
  ],
  [
    [0, 1],
    [1, 1],
    [2, 1],
  ],
  [
    [0, 2],
    [1, 2],
    [2, 2],
  ],
]
const VERTICAL_WINNING_COORDS = [
  [
    [0, 0],
    [0, 1],
    [0, 2],
  ],
  [
    [1, 0],
    [1, 1],
    [1, 2],
  ],
  [
    [2, 0],
    [2, 1],
    [2, 2],
  ],
]
const DIAGONAL_WINNING_COORDS = [
  [
    [0, 0],
    [1, 1],
    [2, 2],
  ],
  [
    [2, 0],
    [1, 1],
    [0, 2],
  ],
]

const WINNING_COORDS = [
  ...HORIZONTAL_WINNING_COORDS,
  ...VERTICAL_WINNING_COORDS,
  ...DIAGONAL_WINNING_COORDS,
]

export const getTicTacToeCoords = (
  grid: GridType,
): {x: number; y: number}[] | null => {
  const coords = WINNING_COORDS.find((cellCoords) => {
    const [tic, tac, toe] = cellCoords.map(([x, y]) => grid[y][x])

    return !!tic && tic === tac && tac === toe
  })

  return coords ? coords.map(([x, y]) => ({x, y})) : null
}

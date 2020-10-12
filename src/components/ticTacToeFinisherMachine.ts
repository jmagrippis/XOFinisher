import {assign, Machine} from 'xstate'
import {getTicTacToeCoords} from './getTicTacToeCoords'

import {GridType, Mark} from './types'

const startingGrid = [
  [Mark.X, Mark.O, null],
  [null, Mark.X, null],
  [Mark.X, Mark.O, Mark.O],
]
type Context = {
  grid: GridType
  streak: number
}

export enum FinisherEvent {
  MARK = 'MARK',
}

export const ticTacToeFinisherMachine = Machine<Context>(
  {
    id: 'tic-tac-toe-finisher',
    initial: 'xToPlay',
    context: {
      grid: startingGrid,
      streak: 0,
    },
    states: {
      xToPlay: {
        on: {
          [FinisherEvent.MARK]: {actions: ['markCell'], target: 'processPlay'},
        },
      },
      processPlay: {
        entry: ['handleStreak'],
        invoke: {
          id: 'process-play',
          src: () =>
            new Promise((resolve) => {
              setTimeout(resolve, 1000)
            }),
          onDone: {
            actions: ['resetGrid'],
            target: 'xToPlay',
          },
        },
      },
    },
  },
  {
    actions: {
      markCell: assign({
        grid: (context, {data: {x, y}}) =>
          context.grid.map((row, rowY) =>
            row.map((cell, cellX) =>
              !cell && cellX === x && rowY === y ? Mark.X : cell,
            ),
          ),
      }),
      handleStreak: assign({
        streak: ({grid, streak}) =>
          getTicTacToeCoords(grid) ? streak + 1 : streak,
      }),
      resetGrid: assign({
        grid: (_) => startingGrid,
      }),
    },
  },
)

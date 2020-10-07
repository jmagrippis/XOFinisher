import {getTicTacToeCoords} from './getTicTacToeCoords'
import {Mark} from './types'

it('returns `null` when the grid is empty', () => {
  const emptyGrid = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ]

  expect(getTicTacToeCoords(emptyGrid)).toBe(null)
})

it('returns the winning coords for horizontal tic-tac-toes', () => {
  const firstRowTicTacToeGrid = [
    [Mark.X, Mark.X, Mark.X],
    [null, Mark.O, null],
    [null, null, Mark.O],
  ]

  expect(getTicTacToeCoords(firstRowTicTacToeGrid)).toEqual([
    {x: 0, y: 0},
    {x: 1, y: 0},
    {x: 2, y: 0},
  ])

  const secondRowTicTacToeGrid = [
    [null, Mark.O, null],
    [Mark.X, Mark.X, Mark.X],
    [null, null, Mark.O],
  ]

  expect(getTicTacToeCoords(secondRowTicTacToeGrid)).toEqual([
    {x: 0, y: 1},
    {x: 1, y: 1},
    {x: 2, y: 1},
  ])

  const thirdRowTicTacToeGrid = [
    [null, Mark.O, null],
    [null, null, Mark.O],
    [Mark.X, Mark.X, Mark.X],
  ]

  expect(getTicTacToeCoords(thirdRowTicTacToeGrid)).toEqual([
    {x: 0, y: 2},
    {x: 1, y: 2},
    {x: 2, y: 2},
  ])
})

it('returns `null` when different marks are in a row', () => {
  const emptyGrid = [
    [Mark.X, Mark.O, Mark.X],
    [null, null, null],
    [null, null, null],
  ]

  expect(getTicTacToeCoords(emptyGrid)).toBe(null)
})

it('returns the winning coords for vertical tic-tac-toes', () => {
  const firstVerticalTicTacToeGrid = [
    [Mark.X, null, null],
    [Mark.X, Mark.O, null],
    [Mark.X, null, Mark.O],
  ]

  expect(getTicTacToeCoords(firstVerticalTicTacToeGrid)).toEqual([
    {x: 0, y: 0},
    {x: 0, y: 1},
    {x: 0, y: 2},
  ])

  const secondVerticalTicTacToeGrid = [
    [null, Mark.X, null],
    [Mark.O, Mark.X, null],
    [null, Mark.X, Mark.O],
  ]

  expect(getTicTacToeCoords(secondVerticalTicTacToeGrid)).toEqual([
    {x: 1, y: 0},
    {x: 1, y: 1},
    {x: 1, y: 2},
  ])

  const thirdVerticalTicTacToeGrid = [
    [null, Mark.O, Mark.X],
    [Mark.O, null, Mark.X],
    [null, null, Mark.X],
  ]

  expect(getTicTacToeCoords(thirdVerticalTicTacToeGrid)).toEqual([
    {x: 2, y: 0},
    {x: 2, y: 1},
    {x: 2, y: 2},
  ])
})

it('returns the winning coords for diagonal tic-tac-toes', () => {
  const firstDiagonalTicTacToeGrid = [
    [Mark.X, null, null],
    [Mark.O, Mark.X, null],
    [Mark.O, null, Mark.X],
  ]

  expect(getTicTacToeCoords(firstDiagonalTicTacToeGrid)).toEqual([
    {x: 0, y: 0},
    {x: 1, y: 1},
    {x: 2, y: 2},
  ])

  const secondDiagonalTicTacToeGrid = [
    [null, Mark.O, Mark.X],
    [Mark.O, Mark.X, null],
    [Mark.X, Mark.X, Mark.O],
  ]

  expect(getTicTacToeCoords(secondDiagonalTicTacToeGrid)).toEqual([
    {x: 2, y: 0},
    {x: 1, y: 1},
    {x: 0, y: 2},
  ])
})

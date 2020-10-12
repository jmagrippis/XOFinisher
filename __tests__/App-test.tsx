/**
 * @format
 */

import React from 'react'
import {render, fireEvent, waitFor} from '@testing-library/react-native'

import App from '../App'

it('renders a grid of Xs and Os', () => {
  const {getAllByText} = render(<App />)

  getAllByText('X')
  getAllByText('O')
})

it('increases my streak if I hit the correct empty cell', () => {
  const {getByRole, getAllByA11yLabel} = render(<App />)

  expect(getByRole('summary').children).toEqual(['0'])

  fireEvent.press(getAllByA11yLabel('empty cell')[0])

  expect(getByRole('summary').children).toEqual(['1'])
})

it('resets my streak if I hit an incorrect empty cell', () => {
  const {getByRole, getAllByA11yLabel} = render(<App />)

  expect(getByRole('summary').children).toEqual(['0'])

  const emptyCells = getAllByA11yLabel('empty cell')
  fireEvent.press(emptyCells[emptyCells.length - 1])

  expect(getByRole('summary').children).toEqual(['0'])
})

it('adds an X when I play on an empty cell, and gives me a new grid', async () => {
  const {getAllByText, getAllByA11yLabel} = render(<App />)

  const existingXCount = getAllByText('X').length

  fireEvent.press(getAllByA11yLabel('empty cell')[0])

  const newXCount = getAllByText('X').length
  expect(newXCount).toBe(existingXCount + 1)

  await waitFor(() => expect(getAllByText('X').length).toBeLessThan(newXCount))
})

it('does not increase my streak more than once for a given grid', () => {
  const {getByRole, getAllByA11yLabel} = render(<App />)

  expect(getByRole('summary').children).toEqual(['0'])
  getAllByA11yLabel('empty cell').forEach((emptyCell) => {
    fireEvent.press(emptyCell)
  })
  expect(getByRole('summary').children).toEqual(['1'])
})

/**
 * @format
 */

import React from 'react'
import {render, fireEvent} from '@testing-library/react-native'

import App from '../App'

it('renders a grid of Xs and Os', () => {
  const {getAllByText} = render(<App />)

  getAllByText('X')
  getAllByText('O')
})

it('increases my streak if I hit the correct empty cell', () => {
  const {getByRole, getByA11yLabel} = render(<App />)

  expect(getByRole('summary').children).toEqual(['0'])

  fireEvent.press(getByA11yLabel('empty cell'))

  expect(getByRole('summary').children).toEqual(['1'])
})

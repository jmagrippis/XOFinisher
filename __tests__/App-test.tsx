/**
 * @format
 */

import React from 'react'
import {render} from '@testing-library/react-native'

import App from '../App'

it('renders a grid of Xs and Os', () => {
  const {getAllByText} = render(<App />)

  getAllByText('X')
  getAllByText('O')
})

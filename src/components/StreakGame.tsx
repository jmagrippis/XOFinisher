import React, {useEffect, useState} from 'react'
import {View, Text} from 'react-native'
import {getTicTacToeCoords} from './getTicTacToeCoords'

import Grid from './Grid'
import {Mark} from './types'

const startingGrid = [
  [Mark.X, Mark.O, null],
  [null, Mark.X, null],
  [Mark.X, Mark.O, Mark.O],
]

const StreakGame = () => {
  const [streak, setStreak] = useState(0)
  const [grid, setGrid] = useState(startingGrid)

  const handlePress = ({x, y}: {x: number; y: number}) => {
    setGrid(
      grid.map((row, rowY) =>
        row.map((cell, cellX) =>
          !cell && cellX === x && rowY === y ? Mark.X : cell,
        ),
      ),
    )
  }

  useEffect(() => {
    if (getTicTacToeCoords(grid)) {
      setStreak((value) => value + 1)
    }
  }, [grid])

  return (
    <>
      <View>
        <Text>Streak:</Text>
        <Text accessibilityRole="summary">{streak}</Text>
      </View>
      <Grid grid={grid} handlePress={handlePress} />
    </>
  )
}

export default StreakGame

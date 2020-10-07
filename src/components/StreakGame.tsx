import React, {useState} from 'react'
import {View, Text} from 'react-native'

import Grid from './Grid'
import {Mark} from './types'

const grid = [
  [Mark.X, Mark.O, null],
  [null, Mark.X, null],
  [Mark.X, Mark.O, Mark.O],
]

const StreakGame = () => {
  const [streak, setStreak] = useState(0)

  const handlePress = () => {
    setStreak(streak + 1)
  }

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

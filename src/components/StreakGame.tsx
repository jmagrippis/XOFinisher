import React from 'react'
import {View, Text} from 'react-native'
import {useMachine} from '@xstate/react'

import Grid from './Grid'
import {
  FinisherEvent,
  ticTacToeFinisherMachine,
} from './ticTacToeFinisherMachine'

const StreakGame = () => {
  const [current, send] = useMachine(ticTacToeFinisherMachine)

  const {grid, streak} = current.context

  const handlePress = ({x, y}: {x: number; y: number}) => {
    send(FinisherEvent.MARK, {data: {x, y}})
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

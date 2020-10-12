import React from 'react'
import {View, StyleSheet, ViewStyle} from 'react-native'

import Cell from './Cell'
import {sharedStyles} from './sharedStyles'
import {GridType} from './types'

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  row: {
    flexGrow: 1,
    flexBasis: 64,
    alignItems: 'stretch',
    flexDirection: 'row',
    backgroundColor: '#0E9594',
  },
  cell: {
    flexGrow: 1,
    flexBasis: 32,
  },
})

type Props = {
  handlePress: ({x, y}: {x: number; y: number}) => void
  grid: GridType
}

const Grid = ({handlePress, grid}: Props) => (
  <View style={styles.container}>
    {grid.map((row, y) => (
      <View
        key={`row ${y}`}
        style={StyleSheet.compose<ViewStyle>(
          styles.row,
          y < 2 && sharedStyles.borderBottom,
        )}>
        {row.map((cell, x) => (
          <View
            style={StyleSheet.compose<ViewStyle>(
              styles.cell,
              x < 2 && sharedStyles.borderRight,
            )}
            key={`cell ${x}-${y}`}>
            <Cell mark={cell} onPress={() => handlePress({x, y})} />
          </View>
        ))}
      </View>
    ))}
  </View>
)

export default Grid

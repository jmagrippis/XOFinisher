import React from 'react'
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  GestureResponderEvent,
  StyleProp,
  ViewStyle,
} from 'react-native'

import {Mark} from './types'

const styles = StyleSheet.create({
  cell: {
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 64,
    color: '#F5DFBB',
  },
})

type Props = {
  handlePress: (event: GestureResponderEvent) => void
  mark: Mark | null

  style?: StyleProp<ViewStyle>
}

const Cell = ({handlePress, mark}: Props) => (
  <TouchableOpacity
    accessibilityLabel={!mark ? 'empty cell' : undefined}
    onPress={handlePress}
    style={styles.cell}>
    {mark && (
      <Text style={styles.text} aria-label={`cell marked with "${mark}"`}>
        {mark}
      </Text>
    )}
  </TouchableOpacity>
)

export default Cell

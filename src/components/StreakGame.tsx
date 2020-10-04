import React, {useState} from 'react'
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native'

const styles = StyleSheet.create({
  cell: {
    height: 32,
    width: 32,
  },
})

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
      <View>
        <TouchableOpacity style={styles.cell}>
          <Text aria-label="x">X</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text aria-label="o" style={styles.cell}>
            O
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.cell}
          accessibilityLabel="empty cell"
          onPress={handlePress}
        />
      </View>
    </>
  )
}

export default StreakGame

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react'
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native'

import StreakGame from './src/components/StreakGame'

const styles = StyleSheet.create({
  safeArea: {
    flexGrow: 1,
  },
})

const App = () => (
  <>
    <StatusBar barStyle="dark-content" />
    <SafeAreaView style={styles.safeArea}>
      <StreakGame />
    </SafeAreaView>
  </>
)

export default App

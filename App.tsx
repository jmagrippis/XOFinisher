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
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StatusBar,
} from 'react-native'

const App = () => (
  <>
    <StatusBar barStyle="dark-content" />
    <SafeAreaView>
      <View>
        <TouchableOpacity>
          <Text aria-label="x">X</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text aria-label="o">O</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  </>
)

export default App

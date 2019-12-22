import { Alert, TouchableOpacity, View } from 'react-native'

import React from 'react'
import { ST } from './style'
import { reset } from 'ansi-colors'

const App = ({ resetTodo, hue }) => (
  <TouchableOpacity
    onPress={() => {
      Alert.alert(
        'Start a new Todo List?',
        'All current Todos will be lost.',
        [{ text: 'OK', onPress: () => resetTodo() }, { text: 'Cancel' }],
        { cancelable: true },
      )
    }}>
    <View style={{ ...ST.corner, backgroundColor: hue.light }} />
  </TouchableOpacity>
)

export default App

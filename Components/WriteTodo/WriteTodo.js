import { TextInput, View } from 'react-native'

import { COLOURS } from '../../Style'
import React from 'react'
import { ST } from './style'

const MAX_LENGTH = 70
const WriteTodo = ({ updateTodos, setValue, value }) => {
  return (
    <View
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <TextInput
        enablesReturnKeyAutomatically
        style={{ ...ST.input }}
        clearButtonMode="always"
        autoCapitalize="sentences"
        maxLength={MAX_LENGTH}
        placeholder={'✔️ ToDo: '}
        placeholderTextColor={COLOURS.MARKS}
        onChangeText={value => setValue(value)}
        returnKeyType="done"
        value={value}
        onSubmitEditing={() => updateTodos(value)}
      />
    </View>
  )
}

export default WriteTodo

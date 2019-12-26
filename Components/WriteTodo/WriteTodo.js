import { COLOURS } from '../../Style'
import React from 'react'
import { ST } from './style'
import { TextInput } from 'react-native'

const MAX_LENGTH = 60
const WriteTodo = ({ updateTodos, setValue, value }) => {
  return (
    <TextInput
      autoFocus
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
  )
}

export default WriteTodo

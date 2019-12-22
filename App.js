import { COLOURS, ST, TODO_COLOURS } from './Style'
import { ConfettiView, StickyHeader, Todos } from './Components'
import React, { useState } from 'react'
import { ScrollView, TextInput, View } from 'react-native'

const App = () => {
  const [value, setValue] = useState('')
  const [hue, setHue] = useState(pink)
  const [todo, setTodo] = useState([
    { to: 'go shoppong for christmas', done: true, i: 0, priority: true },
    { to: 'floss for chrismtas eve', done: true, i: 1, priority: false },
    {
      to: 'write to fam and friends, write to fam and friends',
      done: false,
      i: 2,
      priority: true,
    },
  ])

  const { yellow, pink, blue, green } = TODO_COLOURS

  const changeHue = () => {
    if (hue === pink) setHue(blue)
    if (hue === blue) setHue(yellow)
    if (hue === yellow) setHue(green)
    if (hue === green) setHue(pink)
  }

  const ALL_DONE = todo.filter(({ done }) => done).length === todo.length

  return (
    <>
      <View style={{ ...ST.page, backgroundColor: hue.main }}>
        {ALL_DONE && <ConfettiView />}

        <StickyHeader {...{ hue, todo, changeHue }} />

        <TextInput
          autoFocus
          enablesReturnKeyAutomatically
          style={{ ...ST.input }}
          clearButtonMode="always"
          autoCapitalize="sentences"
          maxLength={60}
          placeholder={'✔️ ToDo: '}
          placeholderTextColor={COLOURS.MARKS}
          onChangeText={value => setValue(value)}
          returnKeyType="done"
          value={value}
          onSubmitEditing={() => {
            setTodo([...todo, { i: todo.length, to: value }])
            setValue('')
          }}
        />

        <ScrollView style={ST.todoSection}>
          {todo.map(line => <Todos {...{ line, setTodo, todo }} />).reverse()}
        </ScrollView>
      </View>
    </>
  )
}

export default App

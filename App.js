import {
  Alert,
  ScrollView,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import { COLOURS, ST, TODO_COLOURS } from './Style'
import { ConfettiView, FlipCorner, StickyHeader, Todos } from './Components'
import React, { useEffect, useState } from 'react'

const MAX_ITEMS = 3
const App = () => {
  const { yellow, pink, blue, green } = TODO_COLOURS
  const [value, setValue] = useState('')
  const [hue, setHue] = useState(pink)
  const [todo, setTodo] = useState([
    { to: '1 Go shoppong for christmas', done: true, i: 0, priority: true },
    { to: '2 Floss for chrismtas eve', done: true, i: 1, priority: false },
    {
      to: '3 Write to fam and friends, write to fam and friends',
      done: false,
      i: 2,
      priority: true,
    },
    { to: '4 Go shoppong for christmas', done: true, i: 3, priority: true },
    { to: '5 Floss for chrismtas eve', done: false, i: 4, priority: false },
  ])

  const changeHue = () => {
    if (hue === pink) setHue(blue)
    if (hue === blue) setHue(yellow)
    if (hue === yellow) setHue(green)
    if (hue === green) setHue(pink)
  }

  // useEffect(() => {
  //   if (todo.length > MAX_ITEMS) {
  //     let shortened = [...todo].slice(todo.length - MAX_ITEMS)

  //     setTodo(shortened)
  //   }
  // }, [])

  const resetTodo = () => {
    setTodo([])
    changeHue()
  }

  const ALL_DONE =
    todo.filter(({ done }) => done).length === todo.length && todo.length !== 0

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
            setTodo([
              ...todo,
              { i: todo.length, to: value, done: false, priority: false },
            ])
            setValue('')
          }}
        />
        <ScrollView style={ST.todoSection}>
          {todo.map(line => <Todos {...{ line, setTodo, todo }} />).reverse()}
        </ScrollView>
        <FlipCorner {...{ hue, resetTodo }} />
      </View>
    </>
  )
}

export default App

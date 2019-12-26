import { COLOURS, ST, TODO_COLOURS } from './Style'
import { ConfettiView, FlipCorner, StickyHeader, Todos } from './Components'
import React, { useEffect, useState } from 'react'
import { ScrollView, TextInput, View } from 'react-native'

import AsyncStorage from '@react-native-community/async-storage'

const MAX_TODO_ITEMS = 3
const TODO_STORE = 'todo'
const HUE_STORE = 'hue'

const App = () => {
  const { yellow, pink, blue, green } = TODO_COLOURS
  const [value, setValue] = useState('')
  const [hue, setHue] = useState({})
  const [todo, setTodo] = useState([])

  console.log(todo)
  useEffect(() => {
    if (todo.length > MAX_TODO_ITEMS) {
      let shortened = [...todo].slice(todo.length - MAX_TODO_ITEMS)
      setTodo(shortened)
      storeData(TODO_STORE, shortened)
    }
    getData()
  }, [])

  const storeData = async (toStore, data) => {
    try {
      await AsyncStorage.setItem(toStore, JSON.stringify(data))
    } catch (e) {
      console.log('=== e >', e)
    }
  }

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem(TODO_STORE)
      const value2 = await AsyncStorage.getItem(HUE_STORE)
      value && setTodo(JSON.parse(value))
      value2 && setHue(JSON.parse(value2))
    } catch (e) {
      console.log('=== e >', e)
    }
  }

  const resetTodo = () => {
    setTodo([])
    changeHue()
    storeData(TODO_STORE, [])
  }

  const updateTodos = to => {
    const updated = [
      ...todo,
      { i: todo.length, to, done: false, primary: false },
    ]
    setTodo(updated)
    setValue('')
    storeData(TODO_STORE, updated)
  }

  const updateHue = newHue => {
    setHue(newHue)
    storeData(HUE_STORE, newHue)
  }

  const changeHue = async () => {
    if (hue.pink) updateHue(blue)
    if (hue.blue) updateHue(yellow)
    if (hue.yellow) updateHue(green)
    if (hue.green) updateHue(pink)
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
          onSubmitEditing={() => updateTodos(value)}
        />
        <ScrollView style={ST.todoSection}>
          {todo
            .map(line => <Todos {...{ line, setTodo, todo, storeData }} />)
            .reverse()}
        </ScrollView>
        <FlipCorner {...{ hue, resetTodo }} />
      </View>
    </>
  )
}

export default App

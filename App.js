import { COLOURS, ST, TODO_COLOURS } from './Style'
import { ConfettiView, FlipCorner, StickyHeader, Todos } from './Components'
import React, { useEffect, useState } from 'react'
import { ScrollView, TextInput, View } from 'react-native'

import AsyncStorage from '@react-native-community/async-storage'

const MAX_ITEMS = 3

const App = () => {
  const { yellow, pink, blue, green } = TODO_COLOURS
  const [value, setValue] = useState('')
  const [hue, setHue] = useState(pink)
  const [todo, setTodo] = useState([])

  const changeHue = () => {
    if (hue === pink) setHue(blue)
    if (hue === blue) setHue(yellow)
    if (hue === yellow) setHue(green)
    if (hue === green) setHue(pink)
  }

  //to do next: shorten items bellow certain number of todos
  useEffect(() => {
    //   if (todo.length > MAX_ITEMS) {
    //     let shortened = [...todo].slice(todo.length - MAX_ITEMS)

    //     setTodo(shortened)
    //   }
    getData()
  }, [])

  const storeData = async data => {
    try {
      await AsyncStorage.setItem('todo', JSON.stringify(data))
    } catch (e) {
      console.log('=== e >', e)
    }
  }

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('todo')
      if (value !== null) {
        // value previously stored
        console.log('====== parsed', JSON.parse(value))
        setTodo(JSON.parse(value))
      }
    } catch (e) {
      console.log('====== e >', e)
    }
  }

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
            const updated = [
              ...todo,
              { i: todo.length, to: value, done: false, priority: false },
            ]
            setTodo(updated)
            setValue('')
            storeData(updated)
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
